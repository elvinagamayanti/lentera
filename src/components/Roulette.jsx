import { useState, useRef, useEffect } from "react";
import { WARNA_RODA } from "../data.js";

export default function Roulette() {
  const [item, setItem] = useState(["Rani", "Bagas", "Sarah", "Dimas", "Kamu"]);
  const [teks, setTeks] = useState("");
  const [sudut, setSudut] = useState(0);
  const [putar, setPutar] = useState(false);
  const [menang, setMenang] = useState(null);
  const kanvas = useRef(null);

  useEffect(() => {
    const c = kanvas.current; if (!c) return;
    const ctx = c.getContext("2d");
    const R = c.width / 2;
    ctx.clearRect(0, 0, c.width, c.height);
    const n = Math.max(item.length, 1);
    const per = (Math.PI * 2) / n;
    item.forEach((it, i) => {
      const a0 = sudut + i * per;
      ctx.beginPath(); ctx.moveTo(R, R);
      ctx.arc(R, R, R - 6, a0, a0 + per);
      ctx.fillStyle = WARNA_RODA[i % WARNA_RODA.length]; ctx.fill();
      ctx.save();
      ctx.translate(R, R); ctx.rotate(a0 + per / 2);
      ctx.fillStyle = "#fff"; ctx.font = "600 15px 'Plus Jakarta Sans', sans-serif";
      ctx.textAlign = "right"; ctx.fillText(it.slice(0, 14), R - 24, 6);
      ctx.restore();
    });
    ctx.beginPath(); ctx.arc(R, R, 34, 0, Math.PI * 2); ctx.fillStyle = "#10233E"; ctx.fill();
    ctx.fillStyle = "#fff"; ctx.font = "700 13px 'IBM Plex Mono', monospace"; ctx.textAlign = "center"; ctx.fillText("SPIN", R, R + 5);
  }, [item, sudut]);

  const spin = () => {
    if (putar || item.length < 2) return;
    setPutar(true); setMenang(null);
    const awal = sudut;
    const target = awal + Math.PI * 2 * (5 + Math.random() * 3) + Math.random() * Math.PI * 2;
    const durasi = 4200; const t0 = performance.now();
    const langkah = (t) => {
      const p = Math.min((t - t0) / durasi, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      const s = awal + (target - awal) * ease;
      setSudut(s);
      if (p < 1) requestAnimationFrame(langkah);
      else {
        const n = item.length; const per = (Math.PI * 2) / n;
        const penunjuk = ((-Math.PI / 2 - s) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
        setMenang(item[Math.floor(penunjuk / per) % n]);
        setPutar(false);
      }
    };
    requestAnimationFrame(langkah);
  };

  const tambah = () => { if (teks.trim()) { setItem([...item, teks.trim()]); setTeks(""); } };

  return (
    <div>
      <p className="eyebrow">FITUR UMUM</p>
      <h1 className="judul-halaman">Roulette</h1>
      <p className="muted">Masukkan apa saja — nama anggota, urutan presentasi, pembagian tugas — lalu putar rodanya. Biar roda yang memutuskan, bukan drama. 🎡</p>
      <div className="grid-roulette">
        <div className="kartu roda-kartu">
          <div className="penunjuk">▼</div>
          <canvas ref={kanvas} width={340} height={340} />
          {menang && <div className="pemenang">🎉 <b>{menang}</b> terpilih!</div>}
          <button className="btn-utama" onClick={spin} disabled={putar || item.length < 2}>{putar ? "Berputar…" : "Putar roda"}</button>
        </div>
        <div className="kartu">
          <b>Daftar isian ({item.length})</b>
          <div className="form-baris">
            <input className="input" placeholder="mis. Tugas notulensi / nama teman" value={teks} onChange={(e) => setTeks(e.target.value)} onKeyDown={(e) => e.key === "Enter" && tambah()} />
            <button className="btn-utama" onClick={tambah}>Tambah</button>
          </div>
          {item.map((it, i) => (
            <div key={i} className="baris-item">
              <span className="titik" style={{ background: WARNA_RODA[i % WARNA_RODA.length] }} />
              <b style={{ flex: 1 }}>{it}</b>
              <button className="btn-ikon" onClick={() => setItem(item.filter((_, j) => j !== i))}>✕</button>
            </div>
          ))}
          <button className="btn-sekunder" onClick={() => setItem([])}>Kosongkan daftar</button>
        </div>
      </div>
    </div>
  );
}
