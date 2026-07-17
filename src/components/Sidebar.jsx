import { Ikon, IK } from "./Ikon.jsx";

export default function Sidebar({ view, setView, user, keluar }) {
  const menu = [
    { id: "dashboard", label: "Beranda", ikon: IK.rumah, warna: "#1D5FAD" },
    { id: "materi", label: "Materi & Modul", ikon: IK.buku, warna: "#1FA35C" },
    { id: "soal", label: "Latihan Soal", ikon: IK.soal, warna: "#F3811F" },
    { id: "komunitas", label: "Komunitas", ikon: IK.feed, warna: "#1D5FAD" },
    { id: "kelompok", label: "Kelompokku", ikon: IK.grup, warna: "#1FA35C" },
    { id: "roulette", label: "Roulette", ikon: IK.roda, warna: "#F3811F" },
    { id: "ai", label: "Asisten AI", ikon: IK.ai, warna: "#7A4FBF" },
  ];
  return (
    <aside className="sidebar">
      <div className="merek">
        <div className="tribar kecil"><span style={{ background: "#1FA35C" }} /><span style={{ background: "#1D5FAD" }} /><span style={{ background: "#F3811F" }} /></div>
        <div><b>LENTERA</b><small>Latsar CPNS BPS 2026</small></div>
      </div>
      <nav>
        {menu.map((m) => (
          <button key={m.id} className={"nav-item" + (view === m.id ? " aktif" : "")} onClick={() => setView(m.id)}>
            <span className="titik" style={{ background: m.warna }} />
            <Ikon d={m.ikon} />
            {m.label}
          </button>
        ))}
      </nav>
      <div className="sidebar-bawah">
        <div className="avatar">{user.nama.split(" ").map((s) => s[0]).join("").slice(0, 2).toUpperCase()}</div>
        <div className="user-info"><b>{user.nama}</b><small>{user.email}</small></div>
        <button className="btn-ikon" title="Keluar" onClick={keluar}><Ikon d={IK.keluar} size={16} /></button>
      </div>
    </aside>
  );
}
