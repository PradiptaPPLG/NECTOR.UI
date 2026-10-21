export const SAVORE_MASTER_PROMPT = `# MASTER PROMPT — REKONSTRUKSI WEBSITE KAFE SAVORÉ SECARA EDITORIAL PIXEL-PERFECT

## 1. PERAN DAN TUJUAN UTAMA

Kamu adalah Senior Frontend Engineer dan UI/UX Designer spesialis Editorial Web & Brand Craftsmanship.

Tugasmu adalah merekonstruksi website kafe dan kedai kopi **SAVORÉ** (Bandung) menjadi halaman web HTML/CSS/JS mandiri yang memancarkan estetika *slow living*, kehangatan kertas arsip (*warm paper*), dan ketenangan visual tingkat tinggi.

Website ini ditujukan bagi pencinta kopi yang mendambakan jeda, percakapan santai, dan rasa hormat terhadap ritual seduh manual.

**Prioritas Pengerjaan:**
1. Kehangatan palet warm paper dan tipografi editorial Playfair Display berpadu DM Sans.
2. Filter menu interaktif (Kopi, Manual Brew, Non-Kopi, Pastry) yang bekerja instan tanpa reload.
3. Proporsi grid asimetris yang tenang, berjarak nyaman, dan bebas distraksi slop.
4. Drawer nota kalkulasi cangkir pesanan dan integrasi WhatsApp reservasi meja.
5. Responsivitas mulus dari mobile 360px hingga layar desktop ultra-wide.

## 2. IDENTITAS VISUAL DAN DESIGN SYSTEM

### Palet Warna
- **Background Kertas Utama:** \`#F5F2E9\` (Warm Paper Cream)
- **Background Panel Sekunder:** \`#EBE5D8\` (Deeper Linen Paper)
- **Teks Tinta Utama:** \`#292B22\` (Espresso Charcoal Ink)
- **Teks Sekunder / Keterangan:** \`#747469\` (Muted Stone Taupe)
- **Aksen Botani Utama:** \`#687153\` (Muted Olive Green)
- **Aksen Botani Gelap:** \`#4D573D\` (Forest Olive)
- **Aksen Hangat Tanah Liat:** \`#C27E5B\` (Terracotta Clay)
- **Garis Pembatas:** \`#E0D9C8\` (Fine Hairline Bone)

### Tipografi
- **Headings & Judul Editorial:** \`Playfair Display\`, serif berkarakter anggun dengan italic khusus pada kata penekanan.
- **Body & Navigasi:** \`DM Sans\`, sans-serif bersih, netral, legibilitas tinggi pada ukuran kecil.
- **Label Metadata & Harga:** \`JetBrains Mono\` atau \`DM Sans\` medium dengan letter-spacing +0.04em.

### Ritme & Efek
- Sudut membulat sangat halus (\`border-radius: 4px - 8px\`), tanpa pill bulat berlebihan.
- Bayangan tipis natural (\`box-shadow: 0 4px 16px rgba(41,43,34, 0.05)\`).
- Garis tepi 1px hairline warna beige-bone (\`#E0D9C8\`).
- Hindari gradien neon, glassmorphism berlebihan, dan animasi cepat yang merusak ketenangan.

## 3. STRUKTUR WEBSITE — SEKSI WAJIB LENGKAP

### SECTION A — TOP APPOINTMENT TICKER
Bilah atas tipis dengan latar \`#EBE5D8\` dan teks \`#4D573D\`:
- Jam seduh hari ini: "07.30 — 21.00 WIB · ROASTING ROOM & ESPRESSO BAR BUKA"
- Status meja: "Kapasitas 28 Kursi · Meja Luar & Bar Manual Brew Tersedia"
- Tautan pintas WhatsApp untuk reservasi sesi cupping akhir pekan.

### SECTION B — HEADER & NAVIGASI ELEGAN
Header latar warm paper dengan border bottom 1px hairline:
- Kiri: Logo teks "SAVORÉ." dengan titik oranye terracotta.
- Tengah: Navigasi link halus: Cerita Kami, Menu Seduh, Ruang & Jeda, Jadwal Roasting.
- Kanan: Tombol nota cangkir pesanan dengan counter pesanan aktif.

### SECTION C — HERO EDITORIAL ASIMETRIS
Layout 2 kolom dengan ritme editorial majalah:
- Kolom kiri: Kicker "KEDAI KOPI & RUANG JEDA · BANDUNG WETAN", judul raksasa "Sedikit jeda,\\nbanyak cerita.", paragraf pengantar tentang kopi yang diracik perlahan tanpa buru-buru, serta dua tombol CTA ("Lihat Menu Seduh" & "Pesan Meja / Jeda").
- Kolom kanan: Bingkai foto ritual pour-over manual dengan stamp badge mengapung "BATCH #042 — CIWIDEY NATURAL".

### SECTION D — TIGA PILAR SLOW COFFEE
Tiga kartu bertata letak rapi:
1. *Biji Kopi Terpilih:* Kurasi panen dari petani lokal Jawa Barat dan Sumatra dengan proses fermentasi terukur.
2. *Ruang Bebas Kebisingan:* Tanpa musik dentum keras, akustik hangat untuk membaca dan menulis.
3. *Seduh Manual Hati-Hati:* Rasio seduh presisi 1:15 dengan suhu air terkalibrasi tiap pagi.

### SECTION E — ETALASE MENU & FILTER INSTAN
- Header: Eyebrow "KATALOG SEDUH HARIAN", judul "Pilihan Kopi & Santapan Kecil".
- Tab Filter: Semua Menu (10) | Espresso Based | Manual Pour-Over | Teh & Non-Kopi | Artisan Pastry.
- Grid Menu 3-4 kolom dengan:
  - Foto sajian nyata.
  - Nama menu (misal: "Ciwidey Sweet Honey Pour-over", "Espresso Tonic Kalosi", "Pain au Chocolat Mentega Dingin").
  - Origin / Tasting notes (misal: *Floral, Bergamot, Brown Sugar*).
  - Harga dalam format jelas (misal: \`Rp 34.000\`).
  - Tombol "+ Tambah ke Cangkir".

### SECTION F — RUANG KEDAI & LOKASI
- Foto interior kedai dengan pencahayaan sore alami.
- Detail alamat: Jl. Gandapura No. 42, Riau, Bandung.
- Jam operasional hari kerja & akhir pekan.
- Peta akses dan petunjuk parkir sepeda.

### SECTION G — FOOTER ARSIP
Footer warm paper bertingkat:
- Kolom 1: Profil SAVORÉ & filosofi jeda.
- Kolom 2: Jam seduh & kalender roasting mingguan.
- Kolom 3: Kontak WhatsApp barista & Instagram kedai.
- Baris bawah: Copyright 2026 SAVORÉ Bandung · Hak cipta dilindungi.

## 4. PERILAKU INTERAKTIF MINIMUM
1. Filter kategori menu berfungsi seketika tanpa reload halaman menggunakan Vanilla JS.
2. Tombol "+ Tambah ke Cangkir" memperbarui badge angka di header.
3. Drawer nota cangkir terbuka halus dari kanan untuk melihat daftar item, kuantitas, dan total harga.
4. Tombol WhatsApp menyusun pesan reservasi atau pesan antar dengan teks terenkripsi URL yang rapi.
5. Efek hover mikro pada tautan dan tombol dengan transisi 0.2s cubic-bezier.

## 5. LARANGAN KERAS
- Jangan menggunakan background putih silau (#ffffff murni) untuk background halaman utama.
- Jangan menggunakan font sans-serif generik untuk judul editorial.
- Jangan memakai gambar kopi resolusi rendah atau ilustrasi kartun generik.
- Jangan membuat tata letak yang padat tanpa ruang jeda (*whitespace*).`;
