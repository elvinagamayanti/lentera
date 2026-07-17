import { useState } from "react";
import { SOAL } from "../data.js";

export default function Latihan() {
  const [mulai, setMulai] = useState(false);
  const [idx, setIdx] = useState(0);
  const [pilih, setPilih] = useState(null);
  const [skor, setSkor] = useState(0);
  const [selesai, setSelesai] = useState(false);
  const [jawaban, setJawaban] = useState([]);

  const reset = () => { setMulai(false); setIdx(0); setPilih(null); setSkor(0); setSelesai(false); setJawaban([]); };
  const lanjut = () => {
    const benar = pilih === SOAL[idx].jawab;
    if (benar) setSkor((s) => s + 1);
    setJawaban((j) => [...j, { pilih, benar }]);
    if (idx + 1 < SOAL.length) { setIdx(idx + 1); setPilih(null); }
    else setSelesai(true);
  };

  if (!mulai) return (
    <div>
      <p className="eyebrow">EVALUASI AKADEMIK</p>
      <h1 className="judul-halaman">Latihan Soal</h1>
      <div className="kartu mulai-kartu">
        <span className="kode-katalog" style={{ borderColor: "#F3811F", color: "#F3811F" }}>EVA-01</span>
        <h3>Try-out Evaluasi Akademik — Paket Campuran</h3>
        <p className="muted">{SOAL.length} soal pilihan ganda dari Agenda I–III. Skor dan pembahasan singkat muncul di akhir. Sumber soal: arsip evaluasi akademik angkatan sebelumnya.</p>
        <div className="mono muted">DURASI BEBAS · {SOAL.length} BUTIR · PG 4 OPSI</div>
        <button className="btn-utama" onClick={() => setMulai(true)}>Mulai latihan</button>
      </div>
    </div>
  );

  if (selesai) {
    const persen = Math.round((skor / SOAL.length) * 100);
    return (
      <div>
        <p className="eyebrow">HASIL LATIHAN</p>
        <h1 className="judul-halaman">Skormu: {persen}</h1>
        <p className="muted">{persen >= 80 ? "Mantap! Di atas ambang kelulusan. Pertahankan 💪" : "Belum sampai 80 — ulangi materi yang keliru, lalu coba lagi."}</p>
        <div className="kartu">
          {SOAL.map((s, i) => (
            <div key={i} className="baris-hasil">
              <span className={"hasil-titik " + (jawaban[i]?.benar ? "benar" : "salah")}>{jawaban[i]?.benar ? "✓" : "✗"}</span>
              <div><b>{i + 1}. {s.q}</b><small>Jawaban benar: {s.opsi[s.jawab]}</small></div>
            </div>
          ))}
        </div>
        <button className="btn-utama" onClick={reset}>Ulangi latihan</button>
      </div>
    );
  }

  const s = SOAL[idx];
  return (
    <div>
      <p className="eyebrow mono">SOAL {idx + 1} / {SOAL.length}</p>
      <div className="progres"><div style={{ width: `${((idx) / SOAL.length) * 100}%` }} /></div>
      <div className="kartu">
        <h3 className="soal-teks">{s.q}</h3>
        {s.opsi.map((o, i) => (
          <button key={i} className={"opsi" + (pilih === i ? " terpilih" : "")} onClick={() => setPilih(i)}>
            <span className="huruf">{"ABCD"[i]}</span>{o}
          </button>
        ))}
        <button className="btn-utama" disabled={pilih === null} onClick={lanjut}>{idx + 1 === SOAL.length ? "Selesai" : "Soal berikutnya"}</button>
      </div>
    </div>
  );
}
