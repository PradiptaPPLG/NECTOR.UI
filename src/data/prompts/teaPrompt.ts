export const teaMasterPrompt = `# Master Prompt: SEDAP DAUN — Atelier Teh Artisan & Tisane Herbal Nusantara

Anda adalah desainer antarmuka web dan pengembang frontend terkemuka yang berspesialisasi dalam website e-commerce dan atelier botani artisanal untuk UMKM produk gaya hidup alami. Buatlah website mandiri satu halaman (single-page standalone HTML) yang fungsional, berkelas tinggi, tenang, dan bebas dari pola generik AI (anti-slop).

---

## 1. Identitas Brand & Filosofi Desain

- **Nama Brand**: SEDAP DAUN
- **Tagline**: Atelier Teh Artisan & Racikan Tisane Bunga Herbal Alami Nusantara
- **Konsep**: Jenama teh artisan lokal yang bermitra dengan kebun teh lereng pegunungan Ciwidey & Malabar Jawa Barat. Menghadirkan daun teh petik pucuk segar, tisane bunga kering tanpa perisa buatan, dan racikan herbal rimpang penghangat tubuh.
- **Karakter Visual**: Tenang, organik, bersih, editorial, dan menghargai ritme lambat (slow living).
- **Palet Warna Harmonis (Earthy Botanical Sage)**:
  - \`--bg-canvas: #FEF5ED\` (Warm Linen Cream - Latar kanvas utama yang hangat dan ramah di mata)
  - \`--bg-sage-tint: #D3E4CD\` (Pale Mint Sage - Latar kartu, container lembut, dan highlight)
  - \`--accent-olive: #ADC2A9\` (Muted Olive Leaf - Garis pemisah, chip kategori, dan badge)
  - \`--accent-slate: #99A799\` (Dried Eucalyptus Slate - Aksen tombol utama, kontrol interaktif)
  - \`--accent-dark: #3F5244\` (Deep Evergreen Forest - Tombol primer & elemen penegas kontras)
  - \`--text-ink: #242F26\` (Forest Charcoal - Teks utama dengan tingkat keterbacaan tinggi / AAA)
  - \`--text-muted: #576359\` (Muted Herb - Teks pendukung, takaran, dan keterangan)
- **Tipografi**:
  - Headings: *Fraunces* atau *Playfair Display* (Serif modern berkarakter organik hangat)
  - Body & UI: *Plus Jakarta Sans* (Sans-serif bersih, netral, sangat mudah dibaca)
  - Metadata & Angka: *JetBrains Mono* (Monospace rapi untuk suhu air, gramatur, dan waktu seduh)

---

## 2. Struktur Konten & Fitur Interaktif

### A. Pengumuman & Navigasi
- Top announcement bar: Informasi promo pengiriman, jaminan keaslian bahan, dan bonus sendok takar kayu jati.
- Navbar sticky dengan logo brand, tautan seksi (\`Koleksi Teh\`, \`Panduan Seduh\`, \`Rakit Hampers\`, \`Kebun & Kualitas\`, \`Ulasan\`), serta tombol keranjang belanja dengan indikator jumlah item reaktif.

### B. Hero Editorial Berfokus Produk Fisik
- Grid 2 kolom seimbang tanpa animasi 3D yang membingungkan.
- Kolom kiri: Kicker editorial, heading aspiratif tentang tradisi jeda minum teh, deskripsi kualitas bahan murni, 3 metrik keunggulan (100% Alami, Izin P-IRT Resmi, Panen Segar Tiap 2 Pekan), dan tombol aksi cepat.
- Kolom kanan: Kartu visual elegan menampilkan foto resolusi tinggi teko kaca dan daun teh asli, disertai overlay badge racikan terfavorit bulan ini dan rating kepuasan pelanggan.

### C. Bar Keunggulan & Standar Kualitas (Trust Badges)
- 4 pilar kepercayaan: Bebas Perisa Sintetis, Kemasan Kaleng Kedap Udara Double-Lid, Petik Pucuk Pagi Hari, dan Pilihan Bebas Kafein yang aman diminum malam hari.

### D. Katalog Teh & Tisane dengan Filter Suasana Hati
- Filter instan tanpa reload halaman:
  1. *Semua Racikan*
  2. *Rileks & Tidur Nyenyak*
  3. *Segar & Fokus Pagi*
  4. *Hangat Tubuh & Imunitas*
  5. *Bebas Kafein (0 mg)*
- 6 Produk unggulan dengan data detail:
  1. **Melati Senja (Jasmine Green Tea)** - Teh hijau pekoe & melati Gambir asli.
  2. **Chamomile Lavender Calma** - Tisane bunga utuh penenang tidur lelap.
  3. **Serai Jahe Merah Hangat** - Rimpang rempah herbal penghangat stamina.
  4. **Earl Grey Jeruk Purut** - Teh hitam aromatik dengan aksen kulit jeruk purut lokal.
  5. **Rosella Apel Berry Glow** - Tisane asam segar kaya vitamin C alami.
  6. **Teh Putih Pucuk Perak (Silver Needle)** - Kuncup pucuk muda langka dari pegunungan tinggi.
- Fitur interaktif tiap produk:
  - Selector jenis kemasan: Kaleng Kedap Udara vs Pouch Ramah Lingkungan dengan penyesuaian harga seketika.
  - Tag level kafein (0mg / Rendah / Sedang).
  - Tombol \`+ Tambah ke Keranjang\` dengan umpan balik visual instan.

### E. Panduan Seduh Interaktif (Brewing Ratio & Live Countdown Timer)
- Edukasi praktis untuk mendapatkan ekstraksi rasa teh terbaik:
  - Pilihan varian teh (Teh Hijau, Teh Putih, Teh Hitam, Tisane Bunga Herbal).
  - Parameter otomatis: Suhu air ideal (°C), takaran daun (gram), volume air (ml), dan durasi seduh.
  - **Live Stopwatch / Countdown Timer** fungsional: tombol Mulai Seduh, Jeda, dan Reset dengan visual progress ring serta notifikasi saat seduhan siap dinikmati.

### F. Perakit Kado Hampers Kustom (Custom Gift Box Builder)
- Simulator perakitan kado teh untuk hantaran, ulang tahun, atau suvenir korporat:
  - Pilihan kotak: Hardbox Sage Green Premium vs Besek Anyaman Bambu Alami.
  - Pilihan 2-3 varian kaleng teh.
  - Pilihan aksesoris tambahan (Saringan Teh Stainless Gold, Sendok Kayu Jati, Madu Hutan Liar).
  - Input kartu ucapan personal dengan kartu pratinjau langsung (Live Card Preview).
  - Kalkulasi total biaya instan dan tombol pemesanan langsung ke WhatsApp.

### G. Transparansi Kebun & Petik Pucuk
- Narasi hubungan langsung dengan petani mitra di Jawa Barat, proses pengeringan higienis suhu rendah, serta pengemasan foil kedap udara.

### H. Keranjang Belanja Slide-over & Checkout WhatsApp
- Panel drawer samping: daftar pesanan, pengatur kuantitas (+/-), kalkulasi subtotal otomatis, input data pengiriman singkat, dan pembuatan tautan WhatsApp otomatis dengan format pesan rapi siap kirim.

---

## 3. Standar Kode & Kerapian (Anti-Slop)

- **Mandiri 100%**: File tunggal HTML yang menggabungkan CSS dan JavaScript tanpa dependensi eksternal berat selain font Google dan ikon SVG inline.
- **Keterbacaan Bahasa**: Seluruh terminologi menggunakan bahasa Indonesia yang wajar, komunikatif, dan akrab bagi publik umum serta pelaku UMKM. Menghindari kata-kata teknis asing atau frasa AI yang artifisial.
- **Aksesibilitas & Kontras**: Memenuhi standar WCAG AA/AAA dengan rasio kontras teks gelap di atas latar krem dan sage yang terkalibrasi.
- **Responsif Sempurna**: Mulai dari smartphone layar sempit (360px), tablet, hingga monitor desktop ultra-lebar (1440px).
`;
