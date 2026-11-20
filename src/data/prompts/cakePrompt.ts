export const cakeMasterPrompt = `# Master Prompt: MANIS KECIL — Studio Kue Bento Kustom & Mini Tartlet Pastel

Anda adalah desainer antarmuka web dan pengembang frontend berstandar tinggi yang berfokus pada industri bakery artisanal, kue perayaan kustom, dan brand kue bento (Korean lunchbox cake) untuk UMKM lokal modern. Buatlah website mandiri satu halaman (single-page standalone HTML) yang manis, ceria, hangat, berkelas, dan 100% bebas dari pola generik AI (anti-slop).

---

## 1. Identitas Brand & Filosofi Desain

- **Nama Brand**: MANIS KECIL
- **Tagline**: Studio Kue Bento Kustom, Mini Tartlet Pastel & Hampers Hari Bahagia
- **Konsep**: Bakery artisanal lokal yang memproduksi kue bento berdiameter 10cm (porsi pas 1-2 orang), mini fruit tartlet renyah, dan paket perayaan ulang tahun personal. Menggunakan sponge cake lembut minim gula (low-sugar chiffon sponge), mentega tawar New Zealand, dan selai buah asli tanpa pengawet sintesis.
- **Karakter Visual**: Manis, ceria, hangat, rapi, ramah, dan memanjakan mata dengan nuansa pastel lembut.
- **Palet Warna Harmonis (Warm Pastel Custard & Peach Strawberry)**:
  - \`--bg-canvas: #FFEECC\` (Creamy Custard Butter - Latar kanvas utama yang hangat dan ceria)
  - \`--bg-card: #FFFFFF\` (Pure White - Kartu bersih dengan kontras lembut)
  - \`--bg-peach-soft: #FFDDCC\` (Peach Apricot Bisque - Latar kartu pendukung, kontainer input & highlight)
  - \`--accent-blush: #FFCCCC\` (Blush Strawberry Blossom - Garis batas lembut, chip kategori & piping aksen)
  - \`--accent-rose: #FEBBCC\` (Candy Rose Petal - Tombol aksi utama, badge rekomendasi & sorotan interaktif)
  - \`--accent-cherry: #D95374\` (Deep Cherry Berry - Aksen hover & tombol penting)
  - \`--text-ink: #3A2329\` (Deep Berry Truffle - Teks utama berdaya kontras tinggi / AAA)
  - \`--text-muted: #6C4A52\` (Muted Cocoa Plum - Teks pendukung, komposisi & takaran)
- **Tipografi**:
  - Headings: *Fraunces* atau *Playfair Display* (Serif modern berkarakter hangat dan artisanal)
  - Body & UI: *Plus Jakarta Sans* (Sans-serif bersih, netral, sangat mudah dibaca)
  - Handwritten Script: *Caveat* atau *Patrick Hand* (Untuk live preview tulisan custom di atas kue bento)
  - Metadata & Angka: *JetBrains Mono* (Monospace rapi untuk diameter kue, gramatur, dan harga)

---

## 2. Struktur Konten & Fitur Interaktif

### A. Announcement Bar & Navigasi
- Top announcement bar: Informasi slot pemesanan harian, pengiriman same-day / H-1, bonus lilin pastel ulir, dan pengiriman aman dengan kurir instan/mobil berpendingin.
- Navbar sticky dengan logo brand, navigasi menu (\`Katalog Bento\`, \`Desain Kustom\`, \`Mini Tartlet\`, \`Pilihan Bahan\`, \`Ulasan\`, \`FAQ\`), dan tombol keranjang belanja dengan counter reaktif.

### B. Hero Editorial Berfokus Produk Nyata
- Grid 2 kolom seimbang tanpa animasi 3D artifisial atau gimmick yang membingungkan pengunjung.
- Kolom kiri: Kicker perayaan manis, headline aspiratif tentang merayakan momen berharga dalam ukuran personal, deskripsi kualitas bahan alami, 3 metrik keunggulan (Fresh Bake Tiap Pagi, Minim Gula 30% Lebih Rendah, Izin P-IRT & Halal), serta tombol aksi cepat.
- Kolom kanan: Kartu visual elegan menampilkan foto resolusi tinggi kue bento pastel dalam kotak lunchbox tebu ramah lingkungan (bagasse box), disertai overlay badge produk terlaris bulan ini dan rating kepuasan pembeli.

### C. Bar Keunggulan & Standar Kualitas (Trust Badges)
- 4 kartu keunggulan:
  1. *Resep Rendah Gula (Low Sugar)*: Rasa manis seimbang yang tidak enek di lidah, aman dinikmati keluarga.
  2. *Bahan Mentega Murni*: Menggunakan pure New Zealand butter, tanpa margarin berlemak trans.
  3. *Kotak Tebu Ramah Lingkungan*: Lunchbox bento dari serat tebu alami (biodegradable bagasse box).
  4. *Gratis Sendok Kayu & Lilin Pastel*: Siap santap di mana saja untuk kejutan ulang tahun mendadak.

### D. Fitur Unggulan: Live Bento Cake Customizer (Lettering & Piping Preview)
- Studio interaktif tempat pelanggan merancang kue bento impiannya secara real-time:
  - **Pilihan Rasa Sponge Dasar**: Vanilla Chiffon, Rich Chocolate Fudge, Strawberry Velvet, Earl Grey Milk Tea.
  - **Pilihan Warna Dasar Krim**:
    - Vanilla Custard Cream (\`#FFEECC\`)
    - Soft Peach Apricot (\`#FFDDCC\`)
    - Sweet Blush Pink (\`#FFCCCC\`)
    - Candy Rose Petal (\`#FEBBCC\`)
  - **Pilihan Hiasan Piping Tepi**: Bunga Aster Mungil, Renda Kerang Klasik, Taburan Mutiara Gula, Polos Minimalis.
  - **Pengetik Tulisan Ucapan di Atas Kue**: Pengunjung mengetik pesan (misal: "Happy 22nd Birthday Maya! 🎂✨"), dan tulisan tersebut langsung tampil di tengah kue bento dengan gaya tulisan tangan rapi!
  - **Kalkulasi Biaya Instan & Tombol Masukkan ke Keranjang**.

### E. Katalog Desain Kue Siap Pesan (Kategori Momen Bahagia)
- Filter kategori instan tanpa reload:
  1. *Semua Desain (6)*
  2. *Ulang Tahun Ceria*
  3. *Wisuda & Graduation*
  4. *Romantis & Anniversary*
  5. *Mini Tartlet Buah Segar*
- Setiap kartu produk menampilkan: foto asli berkualitas tinggi, ukuran diameter (10cm untuk bento / 7cm untuk tartlet), pilihan rasa sponge, harga rupiah transparan, dan tombol \`+ Tambah ke Keranjang\`.

### F. Pilihan Lilin Unik & Aksesoris Pesta Tambahan
- Checklist aksesoris tambahan: Lilin Ulir Pastel Emas, Topi Pesta Lucu, Kartu Pop-Up Ucapan Kustom, dan Tas Pendingin (Cooler Bag) Khusus.

### G. Transparansi Dapur & Cerita Bahan
- Penjelasan proses memanggang fresh tiap pagi pukul 05.00 WIB, penggunaan telur omega segar, dan jaminan pengiriman tanpa kue rusak dengan garansi kue utuh sampai tujuan.

### H. Slide-over Shopping Cart & Checkout WhatsApp Otomatis
- Panel samping interaktif: daftar pesanan, pengatur jumlah (+/-), pilihan tanggal & jam pengiriman, nama penerima, alamat pengiriman, dan tombol pembuatan tautan WhatsApp dengan format pesan pesanan terstruktur rapi.

---

## 3. Standar Anti-Slop & Kerapian Kode

- **Mandiri 100%**: File tunggal HTML yang menggabungkan CSS dan JavaScript tanpa dependensi eksternal berat selain font Google dan ikon SVG inline.
- **Keterbacaan Bahasa**: Seluruh terminologi menggunakan bahasa Indonesia yang wajar, menyenangkan, dan akrab bagi publik umum serta pembeli UMKM. Menghindari istilah asing berlebihan atau jargon sintetis AI.
- **Aksesibilitas & Kontras**: Memenuhi standar WCAG AA/AAA dengan rasio kontras teks gelap (\`#3A2329\`) di atas latar krem dan pastel yang terkalibrasi.
- **Responsif Penuh**: Mulai dari smartphone layar sempit (360px), tablet, hingga layar desktop lebar (1440px).
`;
