import { useState } from "react";
import { FEED_AWAL } from "../data.js";
import { Ikon, IK } from "./Ikon.jsx";

export default function Komunitas({ user }) {
  const [feed, setFeed] = useState(FEED_AWAL);
  const [judul, setJudul] = useState("");
  const [ket, setKet] = useState("");
  const [tipe, setTipe] = useState("Tugas Individu");
  const kirim = () => {
    if (!judul.trim()) return;
    setFeed([{ id: Date.now(), nama: user.nama, grup: tipe === "Tugas Kelompok" ? "Kelompok 2" : "Individu", waktu: "Baru saja", tipe, judul, ket, file: "lampiran.pdf", suka: 0 }, ...feed]);
    setJudul(""); setKet("");
  };
  return (
    <div>
      <p className="eyebrow">KOMUNITAS</p>
      <h1 className="judul-halaman">Berbagi Tugas & Dokumentasi</h1>
      <div className="kartu">
        <b>Bagikan sesuatu</b>
        <div className="form-baris">
          <select className="input" value={tipe} onChange={(e) => setTipe(e.target.value)}>
            <option>Tugas Individu</option><option>Tugas Kelompok</option><option>Dokumentasi</option><option>Rekaman Zoom</option>
          </select>
          <input className="input" placeholder="Judul unggahan" value={judul} onChange={(e) => setJudul(e.target.value)} />
        </div>
        <input className="input" placeholder="Keterangan singkat (opsional)" value={ket} onChange={(e) => setKet(e.target.value)} />
        <div className="form-baris">
          <button className="btn-sekunder">📎 Lampirkan berkas</button>
          <button className="btn-utama" onClick={kirim}>Unggah ke komunitas</button>
        </div>
      </div>
      {feed.map((f) => (
        <div key={f.id} className="kartu feed-kartu">
          <div className="feed-kepala">
            <div className="avatar kecil">{f.nama.split(" ").map((x) => x[0]).join("").slice(0, 2)}</div>
            <div><b>{f.nama}</b><small>{f.grup} · {f.waktu}</small></div>
            <span className="lencana-tipe t-feed">{f.tipe}</span>
          </div>
          <h3>{f.judul}</h3>
          {f.ket && <p className="muted">{f.ket}</p>}
          <div className="lampiran"><Ikon d={f.file.endsWith("mp4") ? IK.video : IK.unduh} size={15} /><span className="mono">{f.file}</span></div>
          <div className="feed-aksi">
            <button onClick={() => setFeed(feed.map((x) => x.id === f.id ? { ...x, suka: x.suka + 1 } : x))}>❤️ {f.suka}</button>
            <button>💬 Komentar</button>
            <button>🔗 Salin tautan</button>
          </div>
        </div>
      ))}
    </div>
  );
}
