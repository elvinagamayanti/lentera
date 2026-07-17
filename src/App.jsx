import { useState } from "react";
import Auth from "./components/Auth.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Dashboard from "./components/Dashboard.jsx";
import { MateriList, MateriDetail } from "./components/Materi.jsx";
import Latihan from "./components/Latihan.jsx";
import Komunitas from "./components/Komunitas.jsx";
import Kelompok from "./components/Kelompok.jsx";
import Roulette from "./components/Roulette.jsx";
import AsistenAI from "./components/AsistenAI.jsx";

export default function App() {
  const [user, setUser] = useState(null);
  const [view, setView] = useState("dashboard");
  const [materiAktif, setMateriAktif] = useState(null);

  if (!user) return <Auth onMasuk={setUser} />;

  return (
    <div className="shell">
      <Sidebar view={view} setView={(v) => { setView(v); setMateriAktif(null); }} user={user} keluar={() => setUser(null)} />
      <main className="konten">
        {view === "dashboard" && <Dashboard user={user} pindah={setView} />}
        {view === "materi" && !materiAktif && <MateriList buka={setMateriAktif} />}
        {view === "materi" && materiAktif && <MateriDetail materi={materiAktif} kembali={() => setMateriAktif(null)} />}
        {view === "soal" && <Latihan />}
        {view === "komunitas" && <Komunitas user={user} />}
        {view === "kelompok" && <Kelompok />}
        {view === "roulette" && <Roulette />}
        {view === "ai" && <AsistenAI penuh />}
      </main>
    </div>
  );
}
