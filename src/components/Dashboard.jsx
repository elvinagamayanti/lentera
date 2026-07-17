import { MATERI, FEED_AWAL } from "../data.js";

export default function Dashboard({ user, pindah }) {
  return (
    <div>
      <p className="eyebrow">BERANDA · JUMAT, 17 JULI 2026</p>
      <h1 className="judul-halaman">Halo, {user.nama.split(" ")[0]} 👋</h1>
      <p className="muted">Evaluasi Akademik I tinggal <b style={{ color: "#F3811F" }}>5 hari lagi</b>. Ayo lanjutkan progresmu.</p>

      <div className="stat-baris">
        <div className="stat-kartu"><span className="stat-kode" style={{ color: "#1FA35C" }}>MOD</span><b>18/22</b><span>Modul dibaca</span></div>
        <div className="stat-kartu"><span className="stat-kode" style={{ color: "#F3811F" }}>EVA</span><b>82</b><span>Skor try-out terakhir</span></div>
        <div className="stat-kartu"><span className="stat-kode" style={{ color: "#1D5FAD" }}>TGS</span><b>3</b><span>Tugas kelompok aktif</span></div>
        <div className="stat-kartu"><span className="stat-kode" style={{ color: "#7A4FBF" }}>KLP</span><b>5</b><span>Anggota Kelompok 2</span></div>
      </div>

      <div className="grid-2">
        <div className="kartu">
          <div className="kartu-judul"><h3>Lanjutkan belajar</h3><a onClick={() => pindah("materi")}>Semua materi →</a></div>
          {MATERI.slice(0, 3).map((m) => (
            <div key={m.id} className="baris-item" onClick={() => pindah("materi")}>
              <span className="kode-katalog" style={{ borderColor: m.warna, color: m.warna }}>{m.kode}</span>
              <div><b>{m.judul}</b><small>{m.files.length} berkas · {m.agenda}</small></div>
            </div>
          ))}
        </div>
        <div className="kartu">
          <div className="kartu-judul"><h3>Aktivitas komunitas</h3><a onClick={() => pindah("komunitas")}>Buka feed →</a></div>
          {FEED_AWAL.map((f) => (
            <div key={f.id} className="baris-item">
              <div className="avatar kecil">{f.nama.split(" ").map((s) => s[0]).join("").slice(0, 2)}</div>
              <div><b>{f.judul}</b><small>{f.nama} · {f.waktu}</small></div>
            </div>
          ))}
        </div>
      </div>

      <div className="kartu ai-banner">
        <div>
          <h3>🤖 Bingung soal materi?</h3>
          <p className="muted">Tanya Asisten AI — dia menjawab berdasarkan modul dan PPT yang ada di pustaka.</p>
        </div>
        <button className="btn-utama" onClick={() => pindah("ai")}>Tanya sekarang</button>
      </div>
    </div>
  );
}
