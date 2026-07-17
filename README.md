# Integrasi frontend LENTERA ke repo

Salin file-file berikut ke root repo `lentera` (timpa yang lama):

```
index.html                      → timpa (judul + Google Fonts)
src/main.jsx                    → sama dengan template, tidak berubah
src/index.css                   → timpa (seluruh style LENTERA)
src/App.jsx                     → timpa (router utama)
src/data.js                     → baru (data contoh, nanti diganti API)
src/components/*.jsx            → baru (10 komponen)
.env.local.example              → baru
```

Yang boleh dihapus dari template: `src/App.css`, `src/assets/` (react.svg, vite.svg, hero.png)
karena sudah tidak dipakai. `package.json` dan `vite.config.js` TIDAK perlu diubah.

## Menjalankan
```
npm install
npm run dev
```

## Asisten AI
- Dev: salin `.env.local.example` → `.env.local`, isi `VITE_ANTHROPIC_API_KEY`.
- Produksi: jangan taruh API key di frontend. Buat endpoint backend (mis. `POST /api/chat`)
  yang meneruskan request ke API Anthropic, lalu ganti URL fetch di
  `src/components/AsistenAI.jsx`.
