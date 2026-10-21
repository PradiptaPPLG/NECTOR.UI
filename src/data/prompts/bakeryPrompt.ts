export const BAKERY_MASTER_PROMPT = `# MASTER PROMPT — REKONSTRUKSI WEBSITE ARTISAN BAKERY MAISON LEVAIN

## 1. PERAN DAN TUJUAN UTAMA

Kamu adalah Lead Frontend Engineer dan UI/UX Designer spesialis Artisan Culinary & French Pastry Showcase.

Tugasmu adalah merekonstruksi website etalase bakery artisan **Maison Levain** yang memproduksi roti sourdough fermentasi alami 36 jam dan viennoiserie Prancis mentega segar setiap pagi.

Target utama adalah menghasilkan website HTML/CSS/JS mandiri berestetika premium bernuansa batu penggilingan tepung (*stone ground*), kerak roti keemasan (*golden crust*), dan aroma mentega panggang.

**Prioritas Pengerjaan:**
1. Keselarasan palet warna: Stone White (#FFFDF9), Flour Cream (#FAF4E8), Golden Crust (#D97706), dan Deep Crust Brown (#3C2415).
2. Ticker jadwal pemanggangan hangat pagi hari (*Morning Fresh-Bake Schedule*) dengan indikator waktu batch matang.
3. Katalog viennoiserie & roti sourdough berfoto tajam dengan label tepung organik, hidrasi, dan waktu fermentasi.
4. Drawer pre-order keranjang kue yang langsung terhubung ke WhatsApp dapur bakery.
5. Tipografi editorial anggun: \`Newsreader\` berpadu dengan \`Plus Jakarta Sans\`.

## 2. IDENTITAS VISUAL DAN DESIGN SYSTEM

### Palet Warna
- **Background Utama:** \`#FFFDF9\` (Batu Marmer Penggilas Tepung)
- **Background Kartu & Aksen Lembut:** \`#FAF4E8\` (Flour Cream / Mentega Hangat)
- **Warna Teks & Elemen Utama:** \`#3C2415\` (Deep Roasted Crust Brown)
- **Aksen Roti Matang Keemasan:** \`#D97706\` (Golden Caramel Bake)
- **Teks Muted / Keterangan:** \`#786B5F\` (Warm Rye Gray)
- **Garis Pemisah:** \`#EDE4D3\` (Fine Flour Line)

### Tipografi
- **Headings & Judul Roti:** \`Newsreader\`, serif elegan khas patisserie Prancis dengan sentuhan klasik.
- **Body & Navigasi:** \`Plus Jakarta Sans\`, sans-serif modern, bersih, dengan keterbacaan tinggi.
- **Jadwal Jam & Batch Nomor:** Monospace rapi atau \`Plus Jakarta Sans\` semi-bold dengan letter-spacing seimbang.

## 3. STRUKTUR WEBSITE — WAJIB LENGKAP

### SECTION A — MORNING BAKE SCHEDULE TICKER
Bilah atas yang menampilkan jadwal rotasi panggangan dapur:
- "BATCH HARI INI: 06.30 Country Sourdough · 07.15 Butter Croissant AOP · 08.00 Baguette Tradisi · 09.30 Cinnamon Morning Bun"
- Indikator status: "● OVEN UTAMA AKTIF — PANGGANGAN HARI INI TERBATAS 120 LOAF".

### SECTION B — HEADER & NAVIGASI
- Logo: "Maison Levain." dengan kicker kecil "ARTISAN SOURDOUGH & VIENNOISERIE".
- Navigasi: Filosofi Ragi Alami, Jadwal Panggang, Etalase Roti, Pre-order Box.
- Tombol Keranjang: "Keranjang Belanja" dengan badge jumlah roti terpilih.

### SECTION C — HERO UTAMA DUA KOLOM
- Kolom kiri: Kicker "FERMENTASI ALAMI 36 JAM", judul editorial "Roti yang lahir dari waktu, air, dan kesabaran.", deskripsi tentang ragi liar (*wild sourdough starter*) yang dirawat sejak 2018 tanpa bahan pengawet atau ragi instan, dan 2 tombol CTA ("Pesan Pre-Order Besok" & "Lihat Roti Hari Ini").
- Kolom kanan: Kartu foto utama sourdough berkerak keemasan dengan label skor hidrasi 82% dan renyahnya serpihan kerak.

### SECTION D — TIGA PILAR ARTISAN LEVAIN
1. *Ragi Alami (Levain) 2018:* Dirawat setiap hari dengan tepung gandum utuh organik.
2. *Fermentasi Dingin 36 Jam:* Menghasilkan rasa manis alami gandum dan mudah dicerna.
3. *Mentega AOP Normandy:* Layering croissant 27 lapis menghasilkan rongga sarang lebah (*honeycomb*) sempurna.

### SECTION E — KATALOG ROTI & VIENNOISERIE
- Filter Tab: Semua Roti | Sourdough Loaf | Viennoiserie & Croissant | Savory Bakes | Paket Sarapan.
- Kartu Produk:
  - Foto roti nyata resolusi tinggi.
  - Nama produk (misal: "Country Sourdough Batard 750g", "Pain au Chocolat Valrhona 70%", "Kouign-Amann Gula Karamel").
  - Keterangan tepung & fermentasi (misal: *Organic Stoneground Flour, 36h cold proof*).
  - Harga (misal: \`Rp 45.000\`).
  - Tombol "+ Masukkan Box".

### SECTION F — FORMULIR PRE-ORDER & JADWAL AMBIL
Formulir pesanan box akhir pekan dengan pilihan tanggal pengambilan pagi dan slot waktu (07.00 - 09.00 WIB / 09.00 - 11.00 WIB).

### SECTION G — FOOTER BOTANIKAL BAKERY
Lokasi studio bakery, panduan penyimpanan roti sourdough agar tetap renyah di rumah, kontak WhatsApp, dan copyright 2026.

## 4. PERILAKU INTERAKTIF MINIMUM
1. Tab filter katalog menyaring jenis roti secara seketika tanpa refresh.
2. Tombol "+ Masukkan Box" mengupdate nota belanja dan drawer slide-over.
3. Drawer keranjang dapat mengatur kuantitas (+/-) dan menghitung total belanja.
4. Tombol checkout menyusun pesan pesanan WhatsApp ke nomor toko dengan format rapi.

## 5. LARANGAN KERAS
- Jangan menggunakan foto roti kemasan pabrik atau stok gambar generik tidak realistis.
- Jangan mengganti warna batu marmer dan emas roti dengan warna cerah non-organik.`;
