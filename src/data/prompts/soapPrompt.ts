export const soapMasterPrompt = `# Master Prompt: EMBUN MANDI — Studio Sabun Batang Alami & Perawatan Kulit Sensitif Nusantara

Anda adalah desainer antarmuka web dan pengembang frontend berstandar tinggi yang berspesialisasi dalam e-commerce produk perawatan tubuh alami (natural bath & body care), produk bebas plastik (zero waste), dan sabun batang proses dingin (cold-process artisan soap) untuk UMKM lokal modern. Buatlah website mandiri satu halaman (single-page standalone HTML) yang bersih, segar, menenangkan, elegan, dan 100% bebas dari pola generik AI (anti-slop).

---

## 1. Identitas Brand & Filosofi Desain

- **Nama Brand**: EMBUN MANDI
- **Tagline**: Studio Sabun Batang Alami Proses Dingin & Perawatan Kulit Sensitif Nusantara
- **Konsep**: Jenama sabun mandi artisan lokal yang memproduksi sabun batang menggunakan metode tradisional *cold-process* selama 6 pekan masa pemeraman (curing). Menggunakan minyak nabati murni (minyak zaitun extra virgin, minyak kelapa murni, shea butter organik), susu kambing segar, lempung mineral alami, dan minyak atsiri murni tanpa deterjen sintetis (bebas SLS/SLES, paraben, dan alkohol).
- **Karakter Visual**: Bersih, segar, organik, berventilasi luas, menenangkan indera, dan ramah lingkungan.
- **Palet Warna Harmonis (Clean Pastel Breeze & Mint Bloom)**:
  - \`--bg-canvas: #F6F6F6\` (Pure Milk Linen - Latar kanvas bersih, lapang, dan segar)
  - \`--bg-surface: #FFFFFF\` (Pure White - Kartu produk dan container berdaya kontras tinggi)
  - \`--accent-cloud: #BAD7DF\` (Soft Cloud Blue - Warna aksen garam laut, badge menenangkan & sorotan halus)
  - \`--accent-petal: #FFE2E2\` (Soft Petal Pink - Warna kartu pendukung, aksen mawar & busa lembut)
  - \`--accent-mint: #99DDCC\` (Fresh Seafoam Mint - Warna aksen utama, tombol primer & sorotan herbal)
  - \`--accent-teal: #3B9E8A\` (Deep Seafoam Teal - Warna hover tombol dan penegas visual)
  - \`--text-ink: #1C2A30\` (Deep Maritime Slate - Teks utama berdaya kontras tinggi / standar AAA)
  - \`--text-muted: #4D626C\` (Muted Sea Slate - Teks pendukung, komposisi & takaran)
  - \`--border-hairline: #E1EBE8\` (Garis pemisah lembut)
- **Tipografi**:
  - Headings: *Fraunces* atau *Playfair Display* (Serif modern berkarakter organik, elegan, dan bersih)
  - Body & UI: *Plus Jakarta Sans* (Sans-serif jernih, modern, dan sangat nyaman dibaca)
  - Metadata & Angka: *JetBrains Mono* (Monospace rapi untuk berat gramatur, pH seimbang, dan harga)

---

## 2. Struktur Konten & Fitur Interaktif

### A. Announcement Bar & Navigasi
- Top announcement bar: Informasi formula 100% biodegradable ramah terumbu karang, gratis kantong jaring busa (foaming net) tiap pembelian 3 sabun, dan pengiriman bebas plastik (plastic-free packaging).
- Navbar sticky dengan logo brand, navigasi (\`Koleksi Sabun\`, \`Penemu Sabun\`, \`Rakit Paket\`, \`Metode Dingin\`, \`Ulasan\`, \`Tanya Jawab\`), serta tombol keranjang belanja dengan counter live.

### B. Hero Editorial Berfokus Produk Nyata
- Grid 2 kolom berimbang tanpa model 3D sintetis yang tidak realistis.
- Kolom kiri: Kicker editorial, headline menenangkan tentang ritual mandi alami yang ramah di kulit, deskripsi formula minyak nabati murni, 3 metrik keunggulan (0% SLS & Deterjen Sintetis, pH Seimbang 8-9 Alami, 6 Pekan Pemeraman Suhu Rendah), dan tombol aksi cepat.
- Kolom kanan: Kartu visual elegan menampilkan foto resolusi tinggi tumpukan sabun batang alami dengan tekstur busa lembut dan tatakan kayu, disertai badge formula terlaris bulan ini dan rating ulasan pembeli.

### C. Bar Keunggulan & Standar Kualitas (Trust Pillars)
- 4 kartu pilar:
  1. *Bebas SLS & Deterjen Buatan*: Membersihkan tanpa mengikis lapisan pelindung alami (skin barrier) kulit.
  2. *Gliserin Alami Terjaga*: Metode cold-process mempertahankan 100% gliserin pelembap alami dari proses saponifikasi.
  3. *Kemasan Kertas Daur Ulang*: 100% bebas botol plastik sekali pakai, ramah bumi dan mudah terurai.
  4. *Aman untuk Bayi & Kulit Sensitif*: Formula hipoalergenik tanpa pewangi sintesis dan tanpa zat pewarna buatan.

### D. Fitur Unggulan: Penemu Sabun Sesuai Tipe Kulit (Skin Type Matcher)
- Kuis interaktif 2 langkah untuk menemukan formula sabun batang yang paling cocok:
  - Langkah 1: Pilih Kondisi Kulit (Kering & Eksim Gatal, Berminyak & Rentan Jerawat Punggung, Sensitif Alergi Wangi, Normal Kusam).
  - Langkah 2: Pilih Efek Sensasi Mandi (Busa Creamy Melembapkan, Dingin Semriwing Menyegarkan, Lembut Menenangkan).
  - Hasil Rekomendasi Instan: Kartu sabun yang direkomendasikan langsung disorot dengan tombol \`+ Tambah ke Keranjang\`.

### E. Katalog Sabun Batang Alami (Filter Manfaat Kulit)
- Filter instan tanpa reload:
  1. *Semua Sabun (6)*
  2. *Kulit Sensitif & Eksim*
  3. *Segar Dingin & Relaksasi*
  4. *Eksfoliasi & Pencerah Alami*
  5. *Bebas Pewangi (Fragrance-Free)*
- 6 Varian Sabun Batang Unggulan:
  1. **Susu Kambing & Gandum Oat (Goat Milk & Oat)** - Formula paling lembut untuk kulit dermatitis & eksim.
  2. **Mawar Merah Muda & French Pink Clay** - Membersihkan pori-pori sekaligus menjaga kelembapan.
  3. **Sea Salt & Daun Eukaliptus** - Garam laut Bali dengan aroma herbal melegakan nafas.
  4. **Peppermint & Alga Hijau Segar** - Sensasi dingin menyegarkan sehabis olahraga.
  5. **Kopi Robusta & Minyak Zaitun Scrub** - Butiran kopi halus untuk mengangkat sel kulit mati.
  6. **Minyak Kelapa Murni & Madu Hutan** - Melembapkan kulit sangat kering dan bersisik.

### F. Perakit Paket Bundling Mandi (Custom Soap Bundle Builder)
- Simulator perakitan paket kado / stok mandi 3 atau 4 sabun:
  - Checklist pilihan varian sabun.
  - Pilihan wadah: Kotak Karton Kraft Daur Ulang atau Tas Pouch Goni Serat Alami.
  - Bonus otomatis: Gratis Foaming Mesh Pouch & Tatakan Kayu Jati Alami.
  - Perhitungan diskon bundling otomatis (Hemat hingga Rp 25.000) dan tombol pemesanan langsung.

### G. Kalkulator Penghematan Botol Plastik (Eco Impact Calculator)
- Alat visual interaktif yang menghitung berapa banyak botol plastik sabun cair dan limbah kimia deterjen yang berhasil Anda cegah dengan beralih ke sabun batangan alami.

### H. Transparansi Bahan & Metode Cold-Process 6 Pekan
- Edukasi proses saponifikasi dingin pada suhu di bawah 40°C, menjaga kualitas antioksidan dan vitamin E dari minyak zaitun dan shea butter.

### I. Slide-over Shopping Cart & Checkout WhatsApp
- Panel drawer samping: daftar item yang dipilih, kalkulasi subtotal otomatis, input nama dan kota pengiriman, serta pembuatan tautan WhatsApp otomatis dengan rincian pesanan rapi.

---

## 3. Standar Kode & Anti-Slop

- **Mandiri 100%**: File tunggal HTML yang memadukan CSS dan JavaScript murni tanpa runtime framework eksternal selain Google Fonts dan ikon SVG inline.
- **Keterbacaan Bahasa**: Seluruh nama dan istilah menggunakan bahasa Indonesia yang bersih, ramah, dan transparan bagi publik UMKM dan konsumen sehari-hari. Menghindari kata-kata teknis asing atau jargon AI yang artifisial.
- **Aksesibilitas & Kontras**: Memenuhi standar WCAG AA/AAA dengan rasio kontras teks gelap (\`#1C2A30\`) di atas kanvas linen dan aksen pastel.
- **Responsif Sempurna**: Dari smartphone layar 360px hingga layar desktop 1440px.
`;
