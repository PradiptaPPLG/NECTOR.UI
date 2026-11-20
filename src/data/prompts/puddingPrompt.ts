export const puddingMasterPrompt = `# Master Prompt: SUTRA MANIS — Dapur Puding Sutra Buah Asli, Dessert Jar Lumer & Hampers Hantaran Nusantara

Anda adalah desainer antarmuka web dan pengembang frontend berstandar tinggi yang berspesialisasi dalam e-commerce kuliner artisan lokal, dessert jar mewah, puding sutra buah asli (silky fruit pudding), dan paket hampers hantaran hari bahagia (arisan, lamaran, ulang tahun, dan syukuran kantor). Buatlah website mandiri satu halaman (single-page standalone HTML) yang bersih, lezat menggugah selera, berkelas, hangat, dan 100% bebas dari pola generik AI (anti-slop).

---

## 1. Identitas Brand & Filosofi Desain

- **Nama Brand**: SUTRA MANIS
- **Tagline**: Dapur Puding Sutra Buah Asli, Dessert Jar Lumer & Hampers Hantaran Nusantara
- **Konsep**: Dapur dessert artisan lokal yang memproduksi puding sutra bertekstur lumer lembut di lidah (*melt-in-your-mouth*) dalam botol kaca steril (glass dessert jar) 200ml dan dessert cup ramah lingkungan. Menggunakan susu sapi segar pasteurisasi murni, santan kelapa muda perasan pertama, ekstrak vanila Madagascar asli, serta saus buah segar yang dimasak mandiri (buah stroberi Garut utuh, coulis raspberry, dan selai black cherry) tanpa pemanis buatan, tanpa pengawet sintetis, dan 100% bersertifikat Halal dengan agar-agar rumput laut nabati murni.
- **Karakter Visual**: Menggugah selera (*appetizing*), lembut, feminin elegan, hangat, bersih, dan berstandar editorial kuliner modern.
- **Palet Warna Harmonis (Strawberry Vanilla & Velvet Cherry)**:
  - \`--bg-canvas: #FFFDF9\` (Warm Ivory Milk Linen - Latar kanvas hangat dengan pola plus grid halus \`+ + +\`)
  - \`--bg-surface: #FFFFFF\` (Pure White - Kartu produk dan panel konten berdaya kontras tinggi)
  - \`--color-vanilla: #FFF5E4\` (Warm Vanilla Cream - Warna puding susu vanila lembut & aksen kartu panna cotta)
  - \`--color-blush: #FFC4C4\` (Soft Rose Strawberry Blush - Warna susu stroberi, badge rasa & pita halus)
  - \`--color-raspberry: #EE6983\` (Raspberry Coral Glaze - Saus buah raspberry kental, sorotan selai & aksen segar)
  - \`--color-cherry: #850E35\` (Deep Velvet Cherry Wine - Warna aksen utama, tombol primer, logo & pita beludru kado)
  - \`--text-ink: #2B0612\` (Dark Cherry Wine Charcoal - Teks utama berdaya kontras tinggi / standar AAA 13:1)
  - \`--text-muted: #6B3445\` (Muted Berry Cocoa - Teks pendukung, komposisi gizi & takaran gramatur)
  - \`--border-hairline: #F2DEE4\` (Garis pemisah lembut bernuansa berry pastel)
- **Tekstur Latar Belakang (Subtle Micro Pattern)**:
  - Pola tanda plus halus non-intrusif: \`background-image: radial-gradient(rgba(133, 14, 53, 0.12) 1.2px, transparent 1.2px); background-size: 24px 24px;\` memberikan kedalaman visual agar tidak monoton tanpa mengorbankan keterbacaan teks.
- **Tipografi**:
  - Headings: *Playfair Display* atau *Cormorant Garamond* (Serif anggun bernuansa pastry boutique)
  - Body & UI: *Plus Jakarta Sans* (Sans-serif jernih, modern, dan sangat nyaman dibaca)
  - Takaran & Harga: *JetBrains Mono* (Monospace rapi untuk volume 200ml, kalori kkal, dan nominal rupiah)

---

## 2. Struktur Konten & Fitur Interaktif

### A. Announcement Bar & Navigasi
- Top announcement bar: Informasi jaminan 100% buah asli tanpa perisa kimia, gratis ice gel pendingin & tas thermal bag di setiap pesanan, pengiriman instan same-day GoSend/GrabExpress area Jadetabek & Bandung.
- Navbar sticky dengan brand logo elegan, menu navigasi (\`Katalog Dessert Jar\`, \`Eksplorasi Lapisan\`, \`Rakit Box Hampers\`, \`Kalkulator Porsi Acara\`, \`Jaminan Segar\`, \`Tanya Jawab\`), serta tombol keranjang belanja dengan counter live.

### B. Hero Editorial Berfokus Produk Nyata (Bukan 3D Gimmick)
- Grid editorial asimetris yang menampilkan kemewahan dessert jar puding sutra asli.
- Kolom kiri: Kicker dapur artisan, headline menggugah selera ("Kelembutan Puding Sutra Murni Berlapis Saus Buah Asli yang Lumer di Lidah"), deskripsi bahan baku tanpa pemanis buatan, 3 metrik keunggulan (100% Buah Stroberi & Berry Asli, 0% Pengawet Kimia, 30% Lebih Rendah Gula / Low-Sugar), dan tombol aksi cepat "Pesan Jar Siap Kirim" & "Rakit Box Hampers".
- Kolom kanan: Kartu visual elegan menampilkan fotografi dessert jar puding sutra beresolusi tinggi dengan lapisan selai buah berry yang mengkilap, sendok kayu ramah lingkungan, dan badge "Varian Terlaris Pekan Ini".

### C. Bar Palet Warna Interaktif (Click to Copy Hex)
- Kotak swatch palet warna dengan 4 lingkaran warna interaktif yang dapat diklik untuk menyalin kode heksadesimal ke clipboard:
  1. \`#FFF5E4\` - Warm Vanilla Cream (Puding Susu Vanila)
  2. \`#FFC4C4\` - Strawberry Blush (Susu Stroberi Segar)
  3. \`#EE6983\` - Raspberry Glaze (Saus Raspberry Buah Asli)
  4. \`#850E35\` - Velvet Cherry Wine (Ceri Hitam & Pita Beludru)
- Disertai notifikasi toast pop-up saat kode warna berhasil disalin.

### D. Fitur Interaktif: Eksplorasi Lapisan Puding Kaca (Layer Savor Inspector)
- Menggantikan desain 3D aneh dengan diagram penampang lapisan produk fisik yang nyata dan informatif:
  - Pengunjung dapat memilih varian: *Stroberi Sutra Vanilla*, *Raspberry Velvet Royale*, *Black Cherry Panna Cotta*, atau *Mangga Kelapa Muda*.
  - Menampilkan 3 lapisan anatomi jar kaca 200ml:
    - **Lapisan 1 (Atas)**: Potongan buah asli utuh & coulis berry kental segar (asam manis alami).
    - **Lapisan 2 (Tengah)**: Puding sutra buah lembut beraroma buah alami.
    - **Lapisan 3 (Bawah)**: Puding krim susu vanila Madagascar murni yang meleleh seketika di lidah.
  - Informasi nutrisi: 145 kkal per jar, less sugar 8 gram, bebas gluten, halal 100%.

### E. Fitur Unggulan: Perakit Paket Hampers Puding (Custom Hampers Box Builder)
- Studio perakit kado hantaran 4 langkah interaktif dengan kalkulator harga langsung:
  - **Langkah 1**: Pilih Ukuran Box (Box Reguler Isi 4 Jar [Rp 140.000], Box Eksklusif Isi 6 Jar [Rp 195.000], Box Pesta Arisan Isi 9 Jar [Rp 280.000]).
  - **Langkah 2**: Pilih Kombinasi Rasa Puding (Stroberi Sutra, Raspberry Velvet, Black Cherry, Belgian Choco Silk, Mangga Manis).
  - **Langkah 3**: Pilih Aksesoris & Kartu (Pita Satin Velvet Cherry Wine, Kartu Ucapan Pesan Kustom, Sendok Kayu Higienis, Ice Pack Pendingin).
  - **Tombol Aksi**: \`+ Masukkan ke Keranjang\` atau langsung checkout via WhatsApp Admin dengan pesan otomatis yang rapi.

### F. Kalkulator Porsi Acara & Dessert Table (Event Portion Estimator)
- Alat bantu untuk panitia arisan, pesta ulang tahun, atau syukuran kantor:
  - Pengguna memasukkan jumlah tamu undangan (misal: 25, 50, atau 100 orang).
  - Sistem otomatis merekomendasikan jumlah jar ideal, komposisi rasa terpopuler, paket bundling paling hemat, dan gratis sewa chiller box/cooler bag.

### G. Katalog Dessert Jar Siap Kirim (Filter Varian Rasa)
- Filter instan:
  1. *Semua Menu (6)*
  2. *Buah Berry Asli (Stroberi, Raspberry, Cherry)*
  3. *Cokelat & Kopi (Belgian Cocoa, Espresso Cream)*
  4. *Tropis Segar (Mangga Arumanis, Kelapa Muda)*
  5. *Rendah Gula (Stevia / Diabetics-Friendly)*
- Tiap kartu produk memuat:
  - Foto makanan nyata berkualitas tinggi
  - Badge kesegaran dan sertifikasi halal
  - Detail rasa, komposisi bahan murni, dan volume gramatur (200ml)
  - Harga dalam format Rupiah jelas
  - Tombol \`+ Keranjang\` sekali klik

### H. Jaminan Rantai Dingin & Pengiriman (Cold Chain Transparency)
- 4 pilar keamanan makanan:
  1. *Fresh Made Daily*: Dimasak setiap pagi pukul 04.00 WIB, tanpa stok lama.
  2. *Toples Kaca Sterilisasi Suhu Tinggi*: Bebas bakteri dan mikroorganisme.
  3. *Insulated Thermal Bag + Ice Gel*: Menjaga suhu tetap dingin 4°C selama hingga 6 jam pengiriman.
  4. *Garansi Sampai Segar*: Jika puding lumer atau pecah di jalan, langsung diganti baru tanpa biaya tambahan.

### I. Slide-over Cart Drawer & Checkout WhatsApp Terstruktur
- Panel keranjang belanja slide-over dengan tombol pengubah kuantitas \`+\` / \`-\`, input nama pemesan, kota dan alamat pengiriman, request jam pengantaran, serta pesan kartu ucapan.
- Tombol WhatsApp checkout otomatis yang menyusun pesan terstruktur dengan rincian varian, kuantitas, harga, dan total.

---

## 3. Standar Crafting & Anti-Slop

1. **Nol Jargon Fiktif & Bahasa yang Bersahaja**: Tidak menggunakan istilah asing yang membingungkan masyarakat umum. Gunakan istilah kuliner yang akrab dan jelas: *Puding Sutra*, *Susu Sapi Segar*, *Buah Stroberi Utuh*, *Ekstrak Vanila Alami*, *Toples Kaca Steril*, *Hampers Kado*.
2. **Keterbacaan Kontras Tinggi (Standar AAA)**: Teks utama menggunakan warna arang anggur pekat \`#2B0612\` di atas latar belakang kanvas gading \`#FFFDF9\` dan kartu putih \`#FFFFFF\` (rasio kontras > 13:1).
3. **Responsivitas Layar Penuh**: Navigasi nyaman di perangkat mobile smartphone hingga desktop resolusi tinggi, ukuran tombol ramah sentuhan (min 44px).
4. **Mandiri 1 File**: Seluruh kode HTML, CSS, dan JavaScript murni berada dalam satu berkas tanpa dependensi eksternal yang rumit.
`;
