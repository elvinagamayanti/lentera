import { useState, useRef, useEffect } from "react";
import { Ikon, IK } from "./Ikon.jsx";

/*
  Catatan integrasi:
  - Di dev lokal, isi VITE_ANTHROPIC_API_KEY di file .env.local agar chat berfungsi.
  - Untuk produksi, JANGAN panggil API Anthropic langsung dari browser dengan API key —
    buat endpoint proxy di backend (mis. POST /api/chat) lalu ganti URL fetch di bawah.
*/
const API_KEY = import.meta.env.VITE_ANTHROPIC_API_KEY;

export default function AsistenAI({ konteks, penuh }) {
  const [pesan, setPesan] = useState([
    { peran: "ai", isi: konteks ? `Halo! Aku siap bantu jawab pertanyaan seputar "${konteks}". Mau tanya apa?` : "Halo! Aku asisten AI LENTERA. Tanya apa saja seputar materi Latsar — BerAKHLAK, Smart ASN, bela negara, manajemen ASN, dan lainnya." },
  ]);
  const [teks, setTeks] = useState("");
  const [memuat, setMemuat] = useState(false);
  const ujung = useRef(null);
  useEffect(() => ujung.current?.scrollIntoView({ behavior: "smooth" }), [pesan]);

  const kirim = async () => {
    const isi = teks.trim();
    if (!isi || memuat) return;
    const riwayatBaru = [...pesan, { peran: "user", isi }];
    setPesan(riwayatBaru);
    setTeks("");

    if (!API_KEY) {
      setPesan((p) => [...p, { peran: "ai", isi: "Asisten AI belum dikonfigurasi. Tambahkan VITE_ANTHROPIC_API_KEY di .env.local (dev) atau sambungkan ke endpoint backend." }]);
      return;
    }

    setMemuat(true);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1000,
          messages: [
            { role: "user", content: `Kamu adalah asisten belajar untuk peserta Latsar CPNS BPS. Jawab dalam Bahasa Indonesia yang jelas dan ringkas, berdasarkan materi Latsar CPNS (BerAKHLAK, Smart ASN & literasi digital, bela negara, manajemen ASN, UU No. 5/2014, UU No. 25/2009, VUCA, akuntabilitas, dsb). ${konteks ? `Konteks materi saat ini: ${konteks}.` : ""}\n\nRiwayat percakapan:\n${riwayatBaru.map((p) => (p.peran === "user" ? "Peserta: " : "Asisten: ") + p.isi).join("\n")}\n\nJawab pertanyaan terakhir peserta.` },
          ],
        }),
      });
      const data = await res.json();
      const jawaban = (data.content || []).filter((b) => b.type === "text").map((b) => b.text).join("\n") || "Maaf, aku tidak bisa menjawab saat ini.";
      setPesan((p) => [...p, { peran: "ai", isi: jawaban }]);
    } catch {
      setPesan((p) => [...p, { peran: "ai", isi: "Koneksi ke asisten AI gagal. Coba lagi sebentar lagi, ya." }]);
    }
    setMemuat(false);
  };

  return (
    <div className={"kartu chat-kartu" + (penuh ? " penuh" : "")}>
      <div className="chat-kepala"><Ikon d={IK.ai} /><b>Asisten AI</b><span className="lencana-hidup">● berbasis materi</span></div>
      <div className="chat-isi">
        {pesan.map((p, i) => (
          <div key={i} className={"gelembung " + p.peran}>{p.isi}</div>
        ))}
        {memuat && <div className="gelembung ai memuat">Mengetik…</div>}
        <div ref={ujung} />
      </div>
      <div className="chat-input">
        <input placeholder="Contoh: apa itu VUCA?" value={teks} onChange={(e) => setTeks(e.target.value)} onKeyDown={(e) => e.key === "Enter" && kirim()} />
        <button className="btn-utama" onClick={kirim} disabled={memuat}><Ikon d={IK.kirim} size={16} /></button>
      </div>
    </div>
  );
}
