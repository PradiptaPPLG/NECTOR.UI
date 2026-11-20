export const NARA_BABY_MASTER_PROMPT = `### 1. IDENTITY & CRAFT PHILOSOPHY
- **Brand & Project Name**: NARA BABY (Pakaian Bayi Katun Bambu Organik & Hampers Kado Lahiran)
- **Domain / Context**: Toko online UMKM perlengkapan bayi baru lahir (newborn), pakaian harian katun serat bambu organik bersertifikat SNI & OEKO-TEX Standard 100, dan studio perakit paket hampers kado lahiran kustom dengan kartu ucapan personal live-preview.
- **Craft Principles**: 100% Anti AI-Slop. Menggunakan bahasa Indonesia yang hangat, bersahabat, dan ramah bagi orang tua baru serta rekan yang mencari kado lahiran tanpa istilah asing aneh atau berlebihan. Berfokus sepenuhnya pada produk fisik nyata: foto asli berkualitas tinggi dari fotografer profesional, sertifikasi keamanan kulit sensitif bayi, pemilih ukuran pakaian berdasarkan usia & berat badan bayi, perakit hampers kelahiran dengan visualizer kartu ucapan instan, serta kalkulator perlengkapan bayi baru lahir rasional tanpa mubazir.
- **Palette Identity (Foto Referensi)**:
  - Soft Rose Powder (\`#F2D7D9\` / \`rgb(242, 215, 217)\`): Sentuhan lembut bedong, pita box kado melahirkan, dan panel aksen hangat.
  - Whispering Wisteria Lavender (\`#D3CEDF\` / \`rgb(211, 206, 223)\`): Panel motif awan pastel, kartu fitur ramah alergi, dan latar badge produk.
  - Calming Dusty Steel Blue (\`#9CB4CC\` / \`rgb(156, 180, 204)\`): Warna katun jumper langit, garis pembatas halus, dan sorotan spesifikasi.
  - Slate Denim Blue (\`#748DA6\` / \`rgb(116, 141, 166)\`): Tombol aksi utama (CTA), brand mark penegasan, harga rupiah, dan icon utama.
  - Clean Milk White Canvas (\`#FAF8F9\` & \`#FFFFFF\`): Kanvas bersih steril lembut untuk kenyamanan mata pembaca.
  - Deep Midnight Slate Charcoal (\`#222B38\`): Teks isi dengan kontras tinggi (>11:1) menjamin keterbacaan optimal.

### 2. LAYOUT ARCHITECTURE & USER FLOW
- **Top Workshop Status Notice Bar**:
  - Teks berjalan/notifikasi jadwal pengiriman paket hari ini (order sebelum 15.00 WIB langsung dikirim hari ini), garansi bahan katun bambu SNI 100%, serta toggle pemutar musik kotak tidur bayi (*Lullaby Music Box Chime*) via Web Audio API.
- **Sticky Brand Header**:
  - Logo tipografi hangat bersahabat "NARA BABY" dengan subtitle "Pakaian Bayi & Kado Lahiran".
  - Navigasi etalase instan: Koleksi Baju, Panduan Ukuran Bayi, Rakit Kado Hampers, Ceklist Perlengkapan, dan Ulasan Bunda.
  - Indikator keranjang belanja dinamis dengan penghitung item live dan tombol pembuka slide-over drawer.
- **Hero Section (Berdampak Visual Kuat & Fokus Produk Nyata)**:
  - Judul tegas dan menenangkan: "Sentuhan Selembut Kasih Ibu, Aman untuk Kulit Bayi Paling Sensitif".
  - Narasi nilai produk: Keunggulan katun serat bambu organik bersertifikat SNI & OEKO-TEX Standard 100 yang berpori mikro, sejuk di iklim tropis, serta bebas kancing beracun atau pewarna kimia keras.
  - Dual Call-to-Action: "Lihat Koleksi Baju Bayi" dan "Rakit Kado Lahiran Kustom".
  - 3 Badge Kepercayaan: Sertifikasi SNI & OEKO-TEX, 100% Katun Bambu Hypoallergenic, Garansi Tukar Ukuran 7 Hari.
  - Hero Product Showcase Card: Foto produk jumper katun gantung kayu, pemilih warna (Rose Blush, Lavender Cloud, Powder Sky, Muted Denim), pemilih ukuran (0-3 bln, 3-6 bln, 6-12 bln), dan tombol beli instan.
- **Interactive Milestone & Baby Size Finder (Panduan Ukuran Bayi)**:
  - Pemilih usia bayi (0-3 bulan, 3-6 bulan, 6-12 bulan, 12-18 bulan) dan rentang berat badan (3-5 kg, 5-7 kg, 7-9 kg, 9-11 kg).
  - Menghasilkan rekomendasi ukuran baju pas (Newborn, Size S, Size M, Size L), panjang badan ideal (cm), lingkar dada (cm), serta saran pemakaian kancing depan praktis untuk tali pusar bayi baru lahir.
- **Etalase 6 Produk Pilihan Bayi Unggulan (Real Physical Catalog)**:
  - Menampilkan 6 produk esensial: Jumper Sleepsuit Kancing Depan, Selimut Bedong Swaddle 4-in-1, Set Piyama Bayi Celana Panjang Motif Awan, Set Topi Beanie & Kaos Kaki Anti-Cakar, Teether Gigitan Bayi Kayu Beech & Silikon BPA-Free, dan Paket Hampers Kado Lahiran 'Welcome to the World'.
  - Setiap kartu dilengkapi pemilih warna/ukuran, harga rupiah transparan, badge keunggulan bahan, dan tombol tambah ke keranjang instan.
- **Perakit Kado Hampers Kelahiran Bayi (Holiday & Newborn Hamper Builder)**:
  - Pilihan box hampers (Hardbox Rose Blush, Lavender Cloud, Powder Blue).
  - Pilihan isi paket (centang 2-4 item pakaian dan perlengkapan bayi).
  - Kartu ucapan kelahiran gratis: Input Nama Bayi, Ucapan Doa / Selamat untuk Orang Tua Baru, dan Nama Pengirim.
  - **Live Greeting Card Preview**: Kartu ucapan di dalam box hampers otomatis ter-render secara langsung dengan pita pastel estetik.
- **Kalkulator Perlengkapan Bayi Baru Lahir (Newborn Essentials Checklist)**:
  - Panduan belanja rasional bagi calon orang tua baru agar tidak membeli pakaian berlebih yang cepat kekecilan: rincian jumlah jumper harian, bedong, sarung tangan, waslap, beserta estimasi anggaran terperinci.
- **Jaminan Standar Keamanan & Kenyamanan Bayi**:
  - 4 pilar kualitas: 100% Katun Serat Bambu Alami, Bebas Klorin & Formaldehida, Kancing Jepret Bebas Nikel (Nickel-Free Snaps), dan Garansi Tukar Ukuran 7 Hari Bebas Repot.
- **Ulasan Pengalaman Nyata Bunda & Pembeli Kado**:
  - Testimoni terverifikasi dari orang tua bayi dan rekan kantor yang mengirimkan hampers lahiran.
- **Slide-Over Keranjang Belanja & Checkout WhatsApp**:
  - Drawer slide-in dari kanan, rekap belanja instan, kupon diskon \`BAYIBARU\` (diskon 10%), serta tombol kirim ke WhatsApp dengan format rapi otomatis.

### 3. TYPOGRAPHY & COLOR SYSTEM
- **Font Utama**: 'Plus Jakarta Sans', sans-serif modern yang ramah, hangat, bersih, dan sangat mudah dibaca oleh ibu hamil dan orang tua baru.
- **Font Teknis / Angka**: 'JetBrains Mono', monospace presisi untuk harga rupiah (Rp), gramasi berat bayi (kg), panjang centimeter (cm), dan kode kupon.
- **Color Variables**:
  - \`--color-rose\`: #F2D7D9
  - \`--color-lavender\`: #D3CEDF
  - \`--color-powder\`: #9CB4CC
  - \`--color-slate\`: #748DA6
  - \`--color-slate-dark\`: #52677C
  - \`--color-bg\`: #FAF8F9
  - \`--color-surface\`: #FFFFFF
  - \`--color-text-main\`: #222B38
  - \`--color-text-muted\`: #5B6B7C
  - \`--color-border\`: #E5DEE6

### 4. TECHNICAL SPECIFICATIONS
- Single standalone HTML file with zero build tools or external npm dependencies.
- Web Audio API procedural synthesis for gentle lullaby music box chimes.
- 100% responsive for screens from mobile (360px) to wide desktop (1440px).
- Validated real photography from Unsplash without AI hallucinations.
- LocalStorage state persistence for cart items and saved gift builder configurations.`;
