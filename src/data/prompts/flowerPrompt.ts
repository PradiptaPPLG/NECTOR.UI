export const flowerMasterPrompt = `# Master Prompt: MEKAR ABADI — Atelier Bunga Abadi (Preserved) & Buket Wisuda Nusantara

Anda adalah desainer antarmuka web dan pengembang frontend berstandar tinggi yang berspesialisasi dalam e-commerce studio florist modern, bunga abadi (preserved flowers), buket bunga kering (dried floral bouquet), dan hadiah kado personal untuk momen wisuda, pernikahan, dan ulang tahun. Buatlah website mandiri satu halaman (single-page standalone HTML) yang artistik, elegan, hangat, profesional, dan 100% bebas dari pola generik AI (anti-slop).

---

## 1. Identitas Brand & Filosofi Desain

- **Nama Brand**: MEKAR ABADI
- **Tagline**: Atelier Bunga Abadi (Preserved) & Buket Wisuda Nusantara
- **Konsep**: Studio bunga preserved dan dried flower artisan yang menghadirkan rangkaian bunga mawar asli pilihan yang diawetkan dengan cairan gliserin nabati ramah lingkungan. Bunga tetap lembut, lentur, dan mekar sempurna selama 3 hingga 5 tahun tanpa perlu disiram atau terkena sinar matahari. Melayani kubah kaca cloche dengan lampu LED fairy lights, buket wisuda wrapping kain rami premium, kotak perhiasan seserahan akrilik, dan kartu ucapan lilin stempel wax seal.
- **Karakter Visual**: Romantis, teduh, puitis, bertekstur, bersih, rapi, dan berdaya simpan tinggi.
- **Palet Warna Harmonis (Peach Blossom & Amethyst Lilac)**:
  - \`--bg-canvas: #FBF9F7\` (Warm Ivory Milk Linen - Latar kanvas hangat dengan pola dot pattern lembut)
  - \`--bg-surface: #FFFFFF\` (Pure White - Kartu produk dan panel konten berdaya kontras tinggi)
  - \`--accent-peach: #FFD5CD\` (Soft Peach Blossom - Kelopak mawar peach hangat, aksen lembut & highlight)
  - \`--accent-pink: #EFBBCF\` (Sakura Rose Pink - Warna baby's breath, pita halus & badge lembut)
  - \`--accent-lilac: #C3AED6\` (Soft Lavender Lilac - Dried statice, French lavender & garis aksen)
  - \`--accent-amethyst: #8675A9\` (Deep Amethyst Plum - Warna aksen utama, tombol primer & pita beludru)
  - \`--accent-dark: #241B2D\` (Deep Aubergine Charcoal - Teks utama berdaya kontras tinggi / standar AAA 12:1)
  - \`--text-muted: #5C4E6B\` (Muted Violet Charcoal - Teks pendukung, dimensi ukuran & spesifikasi bunga)
  - \`--border-hairline: #E8E0F0\` (Garis pemisah lembut bernuansa lilac)
- **Tekstur Latar Belakang (Subtle Micro Pattern)**:
  - Pola titik halus non-intrusif: \`background-image: radial-gradient(rgba(134, 117, 169, 0.12) 1px, transparent 1px); background-size: 24px 24px;\` memberikan kedalaman visual agar tidak monoton tanpa mengorbankan keterbacaan teks.
- **Tipografi**:
  - Headings: *Cormorant Garamond* atau *Playfair Display* (Serif klasik elegan berkesan haute-floristry)
  - Body & UI: *Plus Jakarta Sans* (Sans-serif jernih, luwes, dan ramah pengguna)
  - Spesifikasi & Harga: *JetBrains Mono* atau *Outfit* (Monospace rapi untuk diameter kubah kaca, tinggi buket, dan nominal rupiah)

---

## 2. Struktur Konten & Fitur Interaktif

### A. Announcement Bar & Navigasi
- Top announcement bar: Informasi garansi 100% bunga mawar asli diawetkan, gratis kartu ucapan wax seal premium, dan pengiriman aman kubah kaca ke seluruh Indonesia dengan garansi ganti baru jika pecah di jalan.
- Navbar sticky dengan brand logo monokrom elegan, menu navigasi (\`Koleksi Siap Kirim\`, \`Kubah Kaca LED\`, \`Perakit Kado Kustom\`, \`Mengapa Preserved\`, \`Ulasan\`, \`Tanya Jawab\`), serta tombol keranjang belanja dengan counter live.

### B. Hero Editorial dengan Interaksi Kubah Kaca LED (Day/Night Light Switch)
- Grid editorial asimetris dengan fokus pada produk nyata tanpa rendering 3D gimmick yang membingungkan.
- Kolom kiri: Kicker atelier, headline puitis yang jelas ("Keindahan Bunga Asli yang Mekar Abadi 3–5 Tahun Tanpa Perlu Disiram"), penjelasan proses preservasi murni, 3 metrik keunggulan (100% Kelopak Bunga Asli, 3-5 Tahun Daya Tahan, 0 Perawatan Harian), dan tombol CTA "Jelajahi Koleksi" serta "Rancang Kado Kustom".
- Kolom kanan: **Interactive Glass Cloche Preview (Kubah Kaca Lampu LED)**:
  - Tampilan visual kubah kaca berisi mawar peach abadi dengan lampu kawat fairy lights.
  - Terdapat tombol toggle interaktif: \`[Mode Siang: Cahaya Lembut]\` vs \`[Mode Malam: Lampu LED Menyala]\`.
  - Ketika Mode Malam diaktifkan, kubah kaca berpendar hangat dengan efek cahaya ambient golden fairy glow, menciptakan preview nyata saat kubah dipajang di kamar tidur di malam hari.

### C. Bar Keunggulan & Kualitas Nyata (Mengapa Preserved Flowers)
- 4 pilar edukatif yang membumi tanpa istilah asing aneh:
  1. *Bunga & Dedaunan Asli*: Bukan bunga plastik atau kain tiruan, melainkan bunga mawar potong segar yang digantikan cairan selnya dengan gliserin alami.
  2. *Tahan 3 Hingga 5 Tahun*: Tidak akan layu, tidak berubah warna menjadi cokelat, dan tidak rontok.
  3. *Bebas Serbuk Sari (Hipoalergenik)*: Aman 100% bagi penderita alergi, asma, anak-anak, maupun hewan peliharaan.
  4. *Bebas Perawatan*: Tidak membutuhkan air, tanah, pupuk, atau sinar matahari langsung—cukup letakkan di atas meja.

### D. Fitur Unggulan: Perakit Hadiah Kustom (Custom Flower Gift Builder)
- Studio perakit hadiah 4 langkah interaktif dengan ringkasan harga dinamis:
  - **Langkah 1**: Pilih Format Wadah (Kubah Kaca LED Ø14cm x 22cm, Buket Wisuda Wrapping Rami, Kotak Akrilik Seserahan Cincin, Mini Dome Meja Ø9cm).
  - **Langkah 2**: Pilih Warna Mawar Utama (Peach Blossom #FFD5CD, Sakura Pink #EFBBCF, Soft Lavender #C3AED6, Royal Amethyst #8675A9).
  - **Langkah 3**: Pilih Filler / Bunga Kering Pelengkap (French Dried Lavender wangi, Dried Baby's Breath, Lagurus Bunny Tails, Caspea Lilac).
  - **Langkah 4**: Personalisasi Kado (Pita Satin Amethyst, Lilin Cap Wax Seal Emas, Kartu Ucapan dengan pesan yang diketik pembeli).
  - **Kalkulator & Aksi**: Total harga terhitung otomatis secara real-time dengan tombol \`Pesan Kado Kustom via WhatsApp\` yang menyusun pesan detail pesanan secara instan.

### E. Katalog Koleksi Siap Kirim (Filter Momen Spesial)
- Filter kategori instan tanpa reload halaman:
  1. *Semua Koleksi (6)*
  2. *Wisuda & Kelulusan (Buket Buket Bunga Kering & Boneka Mini)*
  3. *Ulang Tahun & Anniversary (Kubah Kaca Lampu LED Klasik)*
  4. *Seserahan & Pernikahan (Box Akrilik Ring Bearer)*
  5. *Dekorasi Meja & Ruang (Pot Keramik Dried Lavender)*
- Tiap kartu produk memuat:
  - Foto beresolusi tinggi yang terverifikasi
  - Badge momen dan status stok
  - Spesifikasi ukuran (tinggi x diameter) dan jenis bunga yang dirangkai
  - Harga jelas dalam Rupiah
  - Tombol \`+ Keranjang\` dan \`Detail Spesifikasi\`

### F. Panduan Perawatan Sederhana & Transparansi Pengiriman
- 3 aturan mudah merawat bunga abadi:
  - Jangan disiram atau diberi air (kelembapan merusak tekstur kelopak).
  - Letakkan di tempat teduh bersuhu ruang (hindari terik matahari langsung).
  - Bersihkan debu tipis menggunakan kuas berbulu halus atau tiupan angin sejuk hair dryer berkecepatan rendah.
- Keamanan packing: Busa busa tebal, bubble wrap 5 lapis, packing kardus ganda tebal, dan opsi peti kayu untuk pengiriman luar pulau Jawa.

### G. Drawer Keranjang Belanja Slide-over & Checkout WhatsApp
- Panel keranjang belanja geser dari sisi kanan dengan daftar item terpilih, kuantitas, subtotal, input nama pemesan, kota pengiriman, dan ucapan kartu.
- Tombol WhatsApp checkout otomatis yang membuka tautan \`https://wa.me/...\` dengan format pesan rapi berisi nama produk, varian warna, alamat, dan total biaya.

---

## 3. Standar Crafting & Anti-Slop

1. **Nol Klaim Palsu & Nol Istilah Membingungkan**: Hindari kata-kata fiktif seperti *Shirogami*, *FORJA*, *Quantum Preserved*, dsb. Gunakan bahasa Indonesia yang bersahaja, anggun, dan membumi (misalnya *Preserved Rose Grade A*, *Gliserin Nabati Alami*, *Lampu Kawat LED Fairy Lights*).
2. **Keterbacaan Kontras Tinggi (AAA)**: Latar belakang lembut bernuansa gading cerah \`#FBF9F7\` dipadukan dengan teks arang aubergine \`#241B2D\` (rasio kontras > 12:1), bebas dari teks abu-abu pudar yang sulit dibaca.
3. **Responsivitas Sempurna**: Nyaman disentuh di layar smartphone (touch target min 44px), tata letak kolom yang turun rapi menjadi 1 kolom di layar mobile, dan drawer keranjang yang responsif.
4. **Standalone 1 File**: Seluruh kode HTML, CSS, dan JavaScript berada dalam satu file tanpa dependensi eksternal yang rapuh.
`;
