/* ================= DATA CONTOH ================= */
/* Nanti diganti dengan data dari backend/API. */

export const MATERI = [
  {
    id: "agd1", kode: "AGD-01", warna: "#1FA35C", agenda: "Agenda I",
    judul: "Sikap Perilaku Bela Negara",
    deskripsi: "Wawasan kebangsaan, nilai-nilai bela negara, analisis isu kontemporer, dan kesiapsiagaan bela negara.",
    files: [
      { nama: "Modul Wawasan Kebangsaan & Nilai Bela Negara", tipe: "PDF", ukuran: "4,2 MB" },
      { nama: "Modul Analisis Isu Kontemporer", tipe: "PDF", ukuran: "3,8 MB" },
      { nama: "PPT Kesiapsiagaan Bela Negara", tipe: "PPT", ukuran: "12,1 MB" },
      { nama: "Rekaman Zoom — Sesi Isu Kontemporer", tipe: "MP4", ukuran: "310 MB" },
    ],
  },
  {
    id: "agd2", kode: "AGD-02", warna: "#1D5FAD", agenda: "Agenda II",
    judul: "Nilai-Nilai Dasar PNS (BerAKHLAK)",
    deskripsi: "Berorientasi Pelayanan, Akuntabel, Kompeten, Harmonis, Loyal, Adaptif, Kolaboratif.",
    files: [
      { nama: "Modul Berorientasi Pelayanan", tipe: "PDF", ukuran: "2,9 MB" },
      { nama: "Modul Akuntabel", tipe: "PDF", ukuran: "3,1 MB" },
      { nama: "Modul Kompeten", tipe: "PDF", ukuran: "2,7 MB" },
      { nama: "Modul Harmonis", tipe: "PDF", ukuran: "2,4 MB" },
      { nama: "Modul Loyal", tipe: "PDF", ukuran: "2,6 MB" },
      { nama: "Modul Adaptif", tipe: "PDF", ukuran: "2,8 MB" },
      { nama: "Modul Kolaboratif", tipe: "PDF", ukuran: "2,5 MB" },
      { nama: "PPT Rangkuman BerAKHLAK", tipe: "PPT", ukuran: "9,4 MB" },
    ],
  },
  {
    id: "agd3", kode: "AGD-03", warna: "#F3811F", agenda: "Agenda III",
    judul: "Kedudukan & Peran PNS (Smart ASN)",
    deskripsi: "Manajemen ASN, Smart ASN, dan literasi digital (digital skill, safety, ethics, culture).",
    files: [
      { nama: "Modul Manajemen ASN", tipe: "PDF", ukuran: "3,6 MB" },
      { nama: "Modul Smart ASN & Literasi Digital", tipe: "PDF", ukuran: "4,0 MB" },
      { nama: "PPT UU No. 5 Tahun 2014 tentang ASN", tipe: "PPT", ukuran: "7,2 MB" },
    ],
  },
  {
    id: "agd4", kode: "AGD-04", warna: "#7A4FBF", agenda: "Agenda IV",
    judul: "Habituasi & Aktualisasi",
    deskripsi: "Panduan rancangan aktualisasi, template laporan, dan contoh aktualisasi angkatan sebelumnya.",
    files: [
      { nama: "Panduan Rancangan Aktualisasi", tipe: "PDF", ukuran: "1,8 MB" },
      { nama: "Template Laporan Aktualisasi (BPS)", tipe: "DOC", ukuran: "820 KB" },
      { nama: "Contoh Aktualisasi Terbaik 2025", tipe: "PDF", ukuran: "6,3 MB" },
    ],
  },
];

export const SOAL = [
  { q: "Salah satu bentuk ancaman keamanan digital melalui pengiriman informasi yang menggiring korban melakukan tindakan tertentu, mengarah pada pemalsuan dan pencurian data, adalah…", opsi: ["Hacking", "Spamming", "Phising", "Doxing"], jawab: 2 },
  { q: "Apa kepanjangan dari VUCA?", opsi: ["Volatility, Unity, Complexity, Agility", "Vision, Uncertainty, Creativity, Ambiguity", "Volatility, Uncertainty, Capability, Ambiguity", "Volatility, Uncertainty, Complexity, Ambiguity"], jawab: 3 },
  { q: "Tidak memberikan nomor kontak seseorang tanpa izin pemiliknya adalah bagian dari literasi digital, yaitu…", opsi: ["Digital Skill", "Digital Safety", "Digital Ethics", "Digital Culture"], jawab: 2 },
  { q: "Operasionalisasi Nilai-Nilai Dasar ASN BerAKHLAK terdapat dalam…", opsi: ["Surat Edaran MenpanRB No. 20 Tahun 2021", "UU No. 5 Tahun 2014", "PP No. 11 Tahun 2017", "Perpres No. 81 Tahun 2010"], jawab: 0 },
  { q: "Bagi seorang PNS, kata Loyal dapat dimaknai sebagai kesetiaan terhadap…", opsi: ["Atasan", "NKRI", "Instansi", "Profesi"], jawab: 1 },
  { q: "Undang-undang yang mengatur tentang ASN adalah…", opsi: ["UU No. 25 Tahun 2009", "UU No. 23 Tahun 2019", "UU No. 5 Tahun 2014", "UU No. 11 Tahun 2020"], jawab: 2 },
  { q: "Selain inovasi dan antusias terhadap perubahan, kata kunci dari nilai Adaptif adalah…", opsi: ["Dinamis", "Responsif", "Fleksibel", "Progresif"], jawab: 0 },
  { q: "Employer branding ASN sesuai SE MenpanRB No. 20 Tahun 2021 adalah…", opsi: ["Bangga Menjadi Abdi Bangsa", "Bangga Melayani Bangsa", "Bangga Melayani Negeri", "Bangga Menjadi Pelayan Masyarakat"], jawab: 1 },
  { q: "Undang-Undang yang mengatur tentang Pelayanan Publik adalah…", opsi: ["UU No. 5 Tahun 2009", "UU No. 52 Tahun 2009", "UU No. 25 Tahun 2009", "UU No. 25 Tahun 2019"], jawab: 2 },
  { q: "Kemampuan membentuk citra diri positif dan menghormati privasi orang lain di dunia digital terkait dengan…", opsi: ["Digital Skill", "Digital Safety", "Digital Ethics", "Digital Culture"], jawab: 3 },
];

export const FEED_AWAL = [
  { id: 1, nama: "Rani Puspita", grup: "Kelompok 3", waktu: "2 jam lalu", tipe: "Tugas Kelompok", judul: "Analisis Isu Kontemporer — Kelompok 3", ket: "Sudah final ya temen-temen, silakan dijadikan referensi. Jangan copas mentah 😄", file: "Analisis-Isu-Kel3.pdf", suka: 14 },
  { id: 2, nama: "Bagas Prakoso", grup: "Individu", waktu: "5 jam lalu", tipe: "Tugas Individu", judul: "Learning Journal Agenda II — Hari 4", ket: "Format learning journal yang kemarin diminta coach, semoga membantu.", file: "LJ-AgendaII-H4.docx", suka: 9 },
  { id: 3, nama: "Sarah Amalia", grup: "Kelompok 1", waktu: "Kemarin", tipe: "Dokumentasi", judul: "Rekaman Zoom Mentoring Aktualisasi", ket: "Buat yang kemarin kelewat sesi mentoring, ini rekamannya (1 jam 42 menit).", file: "Zoom-Mentoring-12Jul.mp4", suka: 21 },
];

export const ANGGOTA_AWAL = [
  { nama: "Kamu", peran: "Ketua", inisial: "KM" },
  { nama: "Rani Puspita", peran: "Anggota", inisial: "RP" },
  { nama: "Bagas Prakoso", peran: "Anggota", inisial: "BP" },
  { nama: "Sarah Amalia", peran: "Anggota", inisial: "SA" },
  { nama: "Dimas Ardiansyah", peran: "Anggota", inisial: "DA" },
];

export const FILE_GRUP_AWAL = [
  { nama: "Rancangan Aktualisasi — Draft 2", tipe: "Docs", oleh: "Rani", waktu: "1 jam lalu" },
  { nama: "Pembagian Tugas Agenda III", tipe: "Sheet", oleh: "Kamu", waktu: "3 jam lalu" },
  { nama: "Slide Presentasi Isu Kontemporer", tipe: "Slides", oleh: "Bagas", waktu: "Kemarin" },
];

export const WARNA_RODA = ["#1D5FAD", "#1FA35C", "#F3811F", "#7A4FBF", "#E24A6E", "#0E9AA7", "#C98A00", "#5A6B7D"];
