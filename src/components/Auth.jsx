import { useState } from "react";

export default function Auth({ onMasuk }) {
  const [mode, setMode] = useState("masuk");
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const kirim = () => onMasuk({ nama: nama.trim() || "Peserta Latsar", email: email.trim() || "peserta@bps.go.id" });
  return (
    <div className="auth-wrap">
      <div className="auth-kiri">
        <div className="tribar"><span style={{ background: "#1FA35C" }} /><span style={{ background: "#1D5FAD" }} /><span style={{ background: "#F3811F" }} /></div>
        <p className="eyebrow">LENTERA · LEARNING & KOLABORASI TERPADU PESERTA LATSAR · CPNS BPS</p>
        <h1>Penerang jalan sepanjang perjalanan Latsar-mu.</h1>
        <p className="auth-sub">Modul, PPT, latihan soal evaluasi akademik, ruang kelompok, hingga asisten AI yang paham isi materinya. Semua di satu tempat.</p>
        <div className="auth-stats">
          <div><b>128</b><span>Berkas materi</span></div>
          <div><b>350+</b><span>Butir soal</span></div>
          <div><b>4</b><span>Agenda Latsar</span></div>
        </div>
      </div>
      <div className="auth-kanan">
        <div className="auth-kartu">
          <h2>{mode === "masuk" ? "Masuk" : "Buat akun"}</h2>
          <p className="muted">{mode === "masuk" ? "Selamat datang kembali, calon abdi negara." : "Daftar dengan email atau akun Google."}</p>
          <button className="btn-google" onClick={kirim}>
            <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"/><path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15A11 11 0 0 0 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>
            Lanjutkan dengan Google
          </button>
          <div className="pemisah"><span>atau dengan email</span></div>
          {mode === "daftar" && <input className="input" placeholder="Nama lengkap" value={nama} onChange={(e) => setNama(e.target.value)} />}
          <input className="input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="input" type="password" placeholder="Kata sandi" />
          <button className="btn-utama" onClick={kirim}>{mode === "masuk" ? "Masuk" : "Daftar"}</button>
          <p className="muted tengah">
            {mode === "masuk" ? "Belum punya akun? " : "Sudah punya akun? "}
            <a onClick={() => setMode(mode === "masuk" ? "daftar" : "masuk")}>{mode === "masuk" ? "Daftar" : "Masuk"}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
