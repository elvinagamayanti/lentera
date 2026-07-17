import { useState } from "react";
import { MATERI } from "../data.js";
import { Ikon, IK } from "./Ikon.jsx";
import AsistenAI from "./AsistenAI.jsx";

export function MateriList({ buka }) {
  const [q, setQ] = useState("");
  const hasil = MATERI.filter((m) => (m.judul + m.deskripsi).toLowerCase().includes(q.toLowerCase()));
  return (
    <div>
      <p className="eyebrow">DIREKTORI MATERI</p>
      <h1 className="judul-halaman">Materi & Modul</h1>
      <div className="cari-wrap"><Ikon d={IK.cari} size={16} /><input placeholder="Cari modul, PPT, rekaman…" value={q} onChange={(e) => setQ(e.target.value)} /></div>
      <div className="grid-2">
        {hasil.map((m) => (
          <div key={m.id} className="kartu materi-kartu" onClick={() => buka(m)}>
            <div className="garis-warna" style={{ background: m.warna }} />
            <span className="kode-katalog" style={{ borderColor: m.warna, color: m.warna }}>{m.kode}</span>
            <h3>{m.judul}</h3>
            <p className="muted">{m.deskripsi}</p>
            <small className="mono">{m.agenda} · {m.files.length} BERKAS</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MateriDetail({ materi, kembali }) {
  return (
    <div>
      <a className="tautan-kembali" onClick={kembali}>← Kembali ke direktori</a>
      <span className="kode-katalog" style={{ borderColor: materi.warna, color: materi.warna }}>{materi.kode}</span>
      <h1 className="judul-halaman">{materi.judul}</h1>
      <p className="muted">{materi.deskripsi}</p>
      <div className="grid-materi">
        <div className="kartu">
          <h3>Berkas ({materi.files.length})</h3>
          {materi.files.map((f, i) => (
            <div key={i} className="baris-file">
              <span className={"lencana-tipe t-" + f.tipe.toLowerCase()}>{f.tipe}</span>
              <div><b>{f.nama}</b><small className="mono">{f.ukuran}</small></div>
              <button className="btn-ikon" title="Unduh"><Ikon d={IK.unduh} size={16} /></button>
            </div>
          ))}
        </div>
        <AsistenAI konteks={materi.judul} />
      </div>
    </div>
  );
}
