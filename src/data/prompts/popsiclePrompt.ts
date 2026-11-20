export const popsicleMasterPrompt = `# Master Prompt: SEJUK RIA — Atelier Es Stik Buah Asli 100%, Sorbet Bar Pastel & Cooler Box Pesta Nusantara

Anda adalah desainer antarmuka web dan pengembang frontend berstandar tinggi yang berspesialisasi dalam e-commerce kuliner es krim artisan, es stik buah asli (artisan fruit popsicles & paletas), sorbet bar vegan segar, dan paket cooler box pesta ulang tahun anak serta bazar kuliner modern. Buatlah website mandiri satu halaman (single-page standalone HTML) yang ceria, segar, menggugah selera, profesional, bersih, dan 100% bebas dari pola generik AI (anti-slop).

---

## 1. Identitas Brand & Filosofi Desain

- **Nama Brand**: SEJUK RIA
- **Tagline**: Atelier Es Stik Buah Asli 100%, Sorbet Bar Pastel & Cooler Box Pesta Nusantara
- **Konsep**: Jenama es stik buah artisan lokal yang memproduksi es stik buah potong asli dan sorbet dingin dari buah matang pohon Nusantara (stroberi Ciwidey, mangga Arumanis, melon Madu, lemon California lokal, dan air kelapa muda murni). Tanpa pewarna buatan sintetis (warna pastel 100% dari sari buah dan susu murni), tanpa pemanis buatan sakarin, rendah kalori (hanya 65-80 kkal per batang), dan dikemas dalam cooler box ramah lingkungan dengan insulasi dry ice tahan 8 jam di suhu tropis.
- **Karakter Visual**: Segar, ceria, higienis, manis pastel, modern, dan sangat ramah keluarga.
- **Palet Warna Harmonis (Candy Pastel Gelato & Sky Breeze)**:
  - \`--bg-canvas: #FAFDF9\` (Crisp Mint Ivory - Latar kanvas segar dengan pola micro-grid halus)
  - \`--bg-surface: #FFFFFF\` (Pure White - Kartu produk dan panel konten berdaya kontras tinggi)
  - \`--color-pink: #FFCFDF\` (Cotton Candy Pink - Es stik susu stroberi & sorotan lembut)
  - \`--color-lemon: #FEFDCA\` (Lemon Custard Yellow - Es stik mangga lemon madu & kartu cerah)
  - \`--color-lime: #E0F9B5\` (Honeydew Lime Green - Es stik melon mint & sorbet segar)
  - \`--color-aqua: #A5DEE5\` (Aqua Sky Breeze - Es stik kelapa muda blue curacao & badge dingin)
  - \`--color-primary: #1F7A70\` (Deep Mint Teal - Warna tombol primer & penegas visual kontras)
  - \`--text-ink: #16302B\` (Deep Emerald Charcoal - Teks utama berdaya kontras tinggi / standar AAA 14:1)
  - \`--text-muted: #466159\` (Muted Jade Charcoal - Teks pendukung, gramatur & informasi kalori)
  - \`--border-hairline: #DCEDE6\` (Garis pemisah lembut bernuansa mint segar)
- **Tekstur Latar Belakang (Subtle Micro Pattern)**:
  - Pola titik halus non-intrusif: \`background-image: radial-gradient(rgba(22, 48, 43, 0.1) 1.2px, transparent 1.2px); background-size: 24px 24px;\` memberikan sentuhan dinamis agar tidak monoton tanpa mengorbankan keterbacaan teks.
- **Tipografi**:
  - Headings: *Playfair Display* atau *Plus Jakarta Sans* tebal (Modern, ceria, dan berkarakter kuat)
  - Body & UI: *Plus Jakarta Sans* (Sans-serif jernih, luwes, dan sangat nyaman dibaca)
  - Takaran & Angka: *JetBrains Mono* (Monospace rapi untuk kalori kkal, suhu beku -18°C, dan nominal rupiah)

---

## 2. Struktur Konten & Fitur Interaktif

### A. Announcement Bar & Navigasi
- Top announcement bar: Informasi 100% buah asli segar tanpa pewarna sintetis, gratis cooler bag berinsulasi & dry ice tahan 8 jam, pengiriman instan GoSend/GrabExpress area Jadetabek & Bandung.
- Navbar sticky dengan brand logo ceria, menu navigasi (\`Menu Es Stik\`, \`Uji Rasa Interaktif\`, \`Rakit Cooler Box\`, \`Kalkulator Pesta\`, \`Garansi Beku\`, \`Tanya Jawab\`), serta tombol keranjang belanja dengan counter live.

### B. Hero Editorial Berfokus Produk Nyata (Bukan 3D Gimmick)
- Grid editorial asimetris yang menampilkan kesegaran es stik buah asli secara menggoda.
- Kolom kiri: Kicker atelier buah, headline segar ("Kesegaran Buah Asli Nusantara yang Dibekukan Menjadi Es Stik Manis Alami"), deskripsi proses pembekuan cepat menjaga vitamin buah, 3 metrik keunggulan (100% Buah Potong Asli, 0% Pewarna Kimia Buatan, Hanya 65 kkal per Batang), dan tombol aksi cepat "Pesan Stik Siap Kirim" & "Rakit Cooler Box Pesta".
- Kolom kanan: Kartu visual elegan menampilkan fotografi stik es buah aneka warna pastel dengan bulir buah stroberi, kiwi, dan lemon asli yang tampak jelas di balik es bening, dilengkapi badge "Menu Favorit Anak-Anak & Dewasa".

### C. Bar Palet Warna Interaktif (Click to Copy Hex)
- Kotak swatch palet warna dengan 4 lingkaran warna interaktif yang dapat diklik untuk menyalin kode heksadesimal ke clipboard:
  1. \`#FFCFDF\` - Cotton Candy Pink (Stroberi Susu Pop)
  2. \`#FEFDCA\` - Lemon Custard (Mangga Lemon Madu)
  3. \`#E0F9B5\` - Honeydew Lime (Melon Hijau Mint)
  4. \`#A5DEE5\` - Aqua Sky Breeze (Kelapa Muda Lagoon)
- Disertai notifikasi toast pop-up saat kode warna berhasil disalin.

### D. Fitur Interaktif: Uji Rasa & Komposisi Buah (Popsicle Flavor Stage)
- Pengganti 3D aneh yang berfokus langsung pada transparansi bahan baku makanan:
  - Pengunjung dapat memilih stik es buah: *Strawberry Milk Pop*, *Mango Lemon Drop*, *Honeydew Mint Sorbet*, atau *Blue Coconut Sea Breeze*.
  - Menampilkan visual potongan buah asli, tingkat keasaman vs kemanisan, kandungan vitamin C, kalori per stik, dan bahan baku 100% alami.
  - Tombol aksi \`+ Masukkan Rasa Ini ke Keranjang\` dengan animasi mulus.

### E. Fitur Unggulan: Perakit Cooler Box Pesta (Party Cooler Box Builder)
- Studio perakit paket es stik pesta 3 langkah interaktif:
  - **Langkah 1**: Pilih Ukuran Box (Box Santai Isi 10 Batang [Rp 150.000], Box Pesta Ultah Isi 20 Batang [Rp 280.000], Box Festival Isi 40 Batang [Rp 520.000]).
  - **Langkah 2**: Tentukan Alokasi Rasa (pilih kombinasi hingga kuota box terpenuhi).
  - **Langkah 3**: Tambahan Pesta (Drip tray tatakan stik anti tetes gratis, stiker ucapan custom, dry ice beku tahan 8 jam).
  - **Kalkulator & Aksi**: Total harga dan estimasi hemat terhitung otomatis dengan tombol \`+ Masukkan ke Keranjang\` atau langsung checkout via WhatsApp.

### F. Kalkulator Pesta & Cuaca Terik (Hot Day Party Estimator)
- Alat bantu untuk orang tua dan panitia acara:
  - Masukkan jumlah tamu anak & dewasa (misal 25 orang).
  - Sistem otomatis merekomendasikan jumlah stik ideal, kombinasi rasa paling disukai anak-anak, dan estimasi waktu ketahanan dry ice.

### G. Katalog Menu Es Stik Siap Kirim (Filter Kategori)
- Filter instan tanpa reload:
  1. *Semua Rasa (6)*
  2. *Buah Berry Manis (Stroberi, Bluberi, Semangka)*
  3. *Sitrus & Lemon Segar (Lemon Madu, Jeruk Nipis)*
  4. *Tropis Kelapa (Kelapa Muda, Mangga Arumanis)*
  5. *Vegan Sorbet (100% Buah Tanpa Susu)*
- Tiap kartu produk memuat:
  - Foto stik es buah asli beresolusi tinggi
  - Badge kesegaran dan kalori per batang
  - Detail potongan buah asli yang digunakan
  - Harga jelas dalam Rupiah
  - Tombol \`+ Keranjang\` cepat

### H. Garansi Anti Lumer & Pengiriman Beku (Cold Chain Transparency)
- 4 pilar pengiriman es beku:
  1. *Suhu Beku Dalam -18°C*: Es dibekukan dengan blast freezer instan agar kristal es sangat halus di lidah.
  2. *Packing Dry Ice Super Dingin*: Kotak styrofoam rapat dengan dry ice menjaga es tetap keras beku hingga 8 jam.
  3. *Drip Tray Tatakan Anti Tetes*: Diberikan stik tatakan kertas agar tangan anak tidak lengket saat menikmati es.
  4. *Garansi Ganti Baru*: Jika kurir terlambat dan es lumer saat diterima, langsung diganti 100% baru!

### I. Slide-over Cart Drawer & Checkout WhatsApp Terstruktur
- Panel keranjang belanja slide-over dengan tombol kuantitas \`+\` / \`-\`, input nama pemesan, alamat pengiriman, jam pesta dimulai, dan tombol WhatsApp otomatis yang menyusun pesan pesanan secara rapi.

---

## 3. Standar Crafting & Anti-Slop

1. **Nol Jargon Asing yang Membingungkan**: Hindari istilah aneh fiktif. Gunakan bahasa Indonesia kuliner yang ramah: *Es Stik Buah Asli*, *Stroberi Segar*, *Sari Lemon Madu*, *Air Kelapa Murni*, *Dry Ice Pendingin*, *Cooler Box Pesta*.
2. **Keterbacaan Kontras Tinggi (Standar AAA)**: Teks utama menggunakan warna arang zamrud pekat \`#16302B\` di atas latar belakang mint segar \`#FAFDF9\` dan kartu putih \`#FFFFFF\` (rasio kontras > 14:1).
3. **Responsivitas Sempurna**: Ramah layar sentuh di ponsel pintar (touch target min 44px), navigasi responsif, dan layout fluid.
4. **Mandiri 1 File**: Seluruh kode HTML, CSS, dan JavaScript berada dalam satu file tanpa dependensi eksternal yang rumit.
`;
