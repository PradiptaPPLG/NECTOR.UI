export const AKSARA_MASTER_PROMPT = `# MASTER PROMPT — REKONSTRUKSI ARSIP DIGITAL & RUANG BACA PUSTAKA AKSARA

## 1. PERAN DAN TUJUAN UTAMA

Kamu adalah Lead Frontend Engineer dan UI/UX Designer spesialis Digital Archives, Editorial Typography, dan Cultural Heritage Preservation.

Tugasmu adalah merekonstruksi website perpustakaan sastra dan ruang arsip digital **Pustaka Aksara** (Yogyakarta) menjadi antarmuka web mandiri yang memancarkan aura ruang baca bersejarah, keheningan kertas antik, dan kerapian katalogisasi ilmiah.

**Prioritas Pengerjaan:**
1. Kehangatan palet kertas arsip tua (#F7F4ED), tinta arang (#1B1E1B), hijau ruang baca perpustakaan (#234133), dan rust terakota (#9E3D24).
2. Katalog naskah & buku sastra dengan nomor panggil perpustakaan (Dewey Decimal / Kode Rak Klasik).
3. Filter kategori koleksi: Sastra Klasik Nusantara, Catatan Perjalanan Kolonial, Naskah Kuno & Babad, Esai & Humaniora.
4. Drawer peminjaman buku / reservasi meja ruang baca hening (*Quiet Reading Desk*).
5. Tipografi editorial klasik: \`Newsreader\` berpadu dengan \`DM Sans\` dan \`JetBrains Mono\`.

## 2. IDENTITAS VISUAL DAN DESIGN SYSTEM

### Palet Warna
- **Background Utama:** \`#F7F4ED\` (Warm Archival Paper Cream)
- **Background Kartu & Panel:** \`#FFFFFF\` (Clean Archival Sheet)
- **Teks Tinta Utama:** \`#1B1E1B\` (Charcoal Ink)
- **Teks Sekunder / Sitasi:** \`#66665E\` (Muted Lead Pencil)
- **Aksen Hijau Ruang Baca:** \`#234133\` (Forest Library Green)
- **Aksen Terakota Stempel:** \`#9E3D24\` (Archival Rust Terracotta)
- **Aksen Emas Buku Tua:** \`#C59B27\` (Aged Gold)
- **Garis Pembatas:** \`#E6E2D8\` (Hairline Paper Binding)

### Tipografi
- **Headings & Judul Naskah:** \`Newsreader\`, serif berwibawa dengan proporsi humanist editorial.
- **Body & Deskripsi Koleksi:** \`DM Sans\`, bersih dan memiliki keterbacaan tinggi untuk membaca kutipan panjang.
- **Nomor Klasifikasi & Metadata Arsip:** \`JetBrains Mono\` atau monospace halus untuk nomor rak dan kode registrasi buku.

## 3. STRUKTUR WEBSITE PUSTAKA AKSARA

### SECTION A — TICKER STATUS RUANG BACA
- "STATUS RUANG BACA: DIBUKA · 09.00 — 20.00 WIB · RUANG HENING LANTAI 2 TERSEDIA 14 MEJA"
- Lokasi: "Jl. Bintaran Tengah No. 12, Gondomanan, Yogyakarta"
- Tautan reservasi sesi telaah arsip langka.

### SECTION B — HEADER & NAVIGASI
- Logo teks: "PUSTAKA AKSARA." dengan subjudul kecil "ARSIP SASTRA & RUANG BACA NUSANTARA".
- Navigasi: Tentang Koleksi, Katalog Buku, Meja Baca Hening, Tata Tertib Arsip.
- Tombol: "Keranjang Telaah / Pinjam" dengan indikator jumlah naskah.

### SECTION C — HERO EDITORIAL
- Dua kolom: Kutipan sastra pembuka, deskripsi visi pelestarian buku fisik dan manuskrip langka nusantara, serta 2 tombol aksi ("Jelajahi Katalog Arsip" & "Reservasi Meja Baca").
- Kolom kanan: Kartu sorotan buku minggu ini berfoto sampul kain rami dengan stempel arsip terverifikasi tahun 1928.

### SECTION D — PILAR PRESERVASI AKSARA
1. *Kurasi Kertas Bebas Asam:* Perawatan buku menggunakan standar laboratorium preservasi.
2. *Digitalisasi Beresolusi Tinggi:* Seluruh halaman naskah kuno dipindai dengan sensor warna netral.
3. *Akses Terbuka untuk Peneliti:* Fasilitas ruang baca hening bebas biaya bagi mahasiswa dan akademisi.

### SECTION E — KATALOG KOLEKSI & FILTER NOMOR PANGGIL
- Filter Kategori: Semua Koleksi (16) | Naskah Jawa & Melayu | Sastra Pujangga Baru | Antologi Puisi Nusantara | Catatan Budaya & Sejarah.
- Grid Buku 4 Kolom:
  - Foto sampul buku/naskah asli.
  - Kode rak Dewey/Arsip (misal: \`RAK-B.042 / 899.221\`).
  - Judul buku (misal: "Layar Terkembang (Cetakan 1936)", "Serat Centhini Jilid I-IV", "Hujan Bulan Juni — Sapardi Djoko Damono").
  - Penulis dan tahun terbit.
  - Status ketersediaan: [Tersedia di Rak] / [Hanya Baca di Tempat].
  - Tombol "+ Tambah ke Meja Baca".

### SECTION F — FORMULIR RESERVASI MEJA BACA HENING
Formulir reservasi nomor meja baca dengan pilihan sesi (Sesi Pagi 09.00-14.00 atau Sesi Sore 14.30-20.00) dan daftar buku yang ingin disiapkan pustakawan terlebih dahulu.

### SECTION G — FOOTER ARSIP PERPUSTAKAAN
Pedoman donasi buku, etika penanganan buku tua, jam operasional perpustakaan, peta lokasi Yogyakarta, dan copyright 2026 Pustaka Aksara.

## 4. PERILAKU INTERAKTIF MINIMUM
1. Tab filter katalog buku memperbarui daftar koleksi seketika.
2. Tombol "+ Tambah ke Meja Baca" mengumpulkan buku ke drawer daftar telaah.
3. Drawer menampilkan daftar buku terpilih dan tombol konfirmasi reservasi via WhatsApp pustakawan.
4. Input pencarian katalog menyaring judul dan nama penulis secara real-time.

## 5. LARANGAN KERAS
- Jangan menggunakan background gelap neon atau animasi gerak berlebihan.
- Jangan mengganti tipografi serif dengan font modern sans-serif untuk judul buku sastra.
- Jangan menghilangkan kode klasifikasi rak arsip.`;
