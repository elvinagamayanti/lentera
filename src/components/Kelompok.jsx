import { useState } from "react";
import { ANGGOTA_AWAL, FILE_GRUP_AWAL } from "../data.js";
import { Ikon, IK } from "./Ikon.jsx";

export default function Kelompok() {
  const [tab, setTab] = useState("berkas");
  const [anggota, setAnggota] = useState(ANGGOTA_AWAL);
  const [berkas, setBerkas] = useState(FILE_GRUP_AWAL);
  const [undang, setUndang] = useState("");
  const [polls, setPolls] = useState([
    { id: 1, tanya: "Judul aktualisasi kelompok kita pilih yang mana?", opsi: [{ t: "Digitalisasi arsip survei", n: 3 }, { t: "Dashboard monitoring lapangan", n: 1 }], sudah: false },
  ]);
  const [tanyaBaru, setTanyaBaru] = useState("");
  const [opsiBaru, setOpsiBaru] = useState(["", ""]);

  const buatFile = (tipe) => setBerkas([{ nama: `${tipe} baru — belum diberi judul`, tipe, oleh: "Kamu", waktu: "Baru saja" }, ...berkas]);
  const tambahAnggota = () => {
    if (!undang.trim()) return;
    setAnggota([...anggota, { nama: undang, peran: "Anggota", inisial: undang.split(" ").map((s) => s[0]).join("").slice(0, 2).toUpperCase() }]);
    setUndang("");
  };
  const buatPoll = () => {
    const ops = opsiBaru.filter((o) => o.trim());
    if (!tanyaBaru.trim() || ops.length < 2) return;
    setPolls([{ id: Date.now(), tanya: tanyaBaru, opsi: ops.map((t) => ({ t, n: 0 })), sudah: false }, ...polls]);
    setTanyaBaru(""); setOpsiBaru(["", ""]);
  };
  const vote = (pid, oi) => setPolls(polls.map((p) => p.id === pid && !p.sudah ? { ...p, sudah: true, opsi: p.opsi.map((o, i) => i === oi ? { ...o, n: o.n + 1 } : o) } : p));

  return (
    <div>
      <p className="eyebrow">RUANG KELOMPOK</p>
      <div className="kelompok-kepala">
        <div>
          <h1 className="judul-halaman">Kelompok 2 — Angkatan XIV</h1>
          <p className="muted">Coach: Ibu Ratna Dewi · {anggota.length} anggota</p>
        </div>
        <button className="btn-sekunder"><Ikon d={IK.plus} size={14} /> Buat kelompok baru</button>
      </div>
      <div className="tab-baris">
        {[["berkas", "Berkas kolaborasi"], ["dokumentasi", "Dokumentasi & Zoom"], ["polling", "Polling"], ["anggota", "Anggota"]].map(([id, label]) => (
          <button key={id} className={"tab" + (tab === id ? " aktif" : "")} onClick={() => setTab(id)}>{label}</button>
        ))}
      </div>

      {tab === "berkas" && (
        <div className="kartu">
          <b>Buat berkas kolaborasi baru</b>
          <div className="buat-file-baris">
            {[["Docs", "#1D5FAD", "📄"], ["Sheet", "#1FA35C", "📊"], ["Slides", "#F3811F", "📽️"], ["Form", "#7A4FBF", "📋"]].map(([t, w, e]) => (
              <button key={t} className="tombol-buat" style={{ borderColor: w }} onClick={() => buatFile(t)}><span>{e}</span>{t}</button>
            ))}
          </div>
          <div className="pemisah-tipis" />
          {berkas.map((f, i) => (
            <div key={i} className="baris-file">
              <span className={"lencana-tipe t-" + f.tipe.toLowerCase()}>{f.tipe}</span>
              <div><b>{f.nama}</b><small>oleh {f.oleh} · {f.waktu}</small></div>
              <button className="btn-sekunder kecil">Buka</button>
            </div>
          ))}
        </div>
      )}

      {tab === "dokumentasi" && (
        <div className="kartu">
          <div className="zona-unggah">
            <Ikon d={IK.video} size={28} />
            <b>Seret rekaman Zoom atau foto dokumentasi ke sini</b>
            <small className="muted">MP4, MOV, JPG, PNG · maks. 2 GB per berkas</small>
            <button className="btn-utama">Pilih berkas</button>
          </div>
          <div className="pemisah-tipis" />
          <div className="baris-file"><span className="lencana-tipe t-mp4">MP4</span><div><b>Zoom — Bimbingan Coach 14 Juli</b><small className="mono">412 MB · diunggah Sarah</small></div><button className="btn-sekunder kecil">Putar</button></div>
          <div className="baris-file"><span className="lencana-tipe t-jpg">JPG</span><div><b>Dokumentasi diskusi kelompok (12 foto)</b><small className="mono">36 MB · diunggah Dimas</small></div><button className="btn-sekunder kecil">Lihat</button></div>
        </div>
      )}

      {tab === "polling" && (
        <div>
          <div className="kartu">
            <b>Buat polling baru</b>
            <input className="input" placeholder="Pertanyaan, mis. jadwal bimbingan enaknya kapan?" value={tanyaBaru} onChange={(e) => setTanyaBaru(e.target.value)} />
            {opsiBaru.map((o, i) => (
              <input key={i} className="input" placeholder={`Opsi ${i + 1}`} value={o} onChange={(e) => setOpsiBaru(opsiBaru.map((x, j) => j === i ? e.target.value : x))} />
            ))}
            <div className="form-baris">
              <button className="btn-sekunder" onClick={() => setOpsiBaru([...opsiBaru, ""])}>+ Tambah opsi</button>
              <button className="btn-utama" onClick={buatPoll}>Terbitkan polling</button>
            </div>
          </div>
          {polls.map((p) => {
            const total = p.opsi.reduce((a, o) => a + o.n, 0) || 1;
            return (
              <div key={p.id} className="kartu">
                <b>{p.tanya}</b>
                {p.opsi.map((o, i) => (
                  <button key={i} className="poll-opsi" onClick={() => vote(p.id, i)} disabled={p.sudah}>
                    <div className="poll-isi" style={{ width: `${(o.n / total) * 100}%` }} />
                    <span>{o.t}</span><span className="mono">{o.n} suara</span>
                  </button>
                ))}
                <small className="muted">{p.sudah ? "Kamu sudah memilih." : "Klik salah satu opsi untuk memilih."}</small>
              </div>
            );
          })}
        </div>
      )}

      {tab === "anggota" && (
        <div className="kartu">
          <b>Undang anggota</b>
          <div className="form-baris">
            <input className="input" placeholder="Nama atau email teman se-angkatan" value={undang} onChange={(e) => setUndang(e.target.value)} />
            <button className="btn-utama" onClick={tambahAnggota}>Kirim undangan</button>
          </div>
          <div className="pemisah-tipis" />
          {anggota.map((a, i) => (
            <div key={i} className="baris-item">
              <div className="avatar kecil">{a.inisial}</div>
              <div><b>{a.nama}</b><small>{a.peran}</small></div>
              {a.peran === "Ketua" && <span className="lencana-tipe t-ketua">KETUA</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
