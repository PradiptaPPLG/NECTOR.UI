export const SAKUMART_MASTER_PROMPT = `# MASTER PROMPT — REKONSTRUKSI SISTEM KASIR POS SAKUMART SUPERMARKET

## 1. PERAN DAN TUJUAN UTAMA

Kamu adalah Senior POS Systems Engineer dan Frontend UI/UX Specialist yang merancang antarmuka sistem kasir supermarket modern berkecepatan tinggi.

Tugasmu adalah merekonstruksi website antarmuka Point of Sale (POS) **SakuMart** — sistem kasir ritel supermarket modern berestetika bersih, efisien, dan bebas slop.

Sistem ini didesain agar kasir dapat memproses transaksi dalam hitungan detik menggunakan keyboard shortcuts, pemindai barcode virtual, dan pencarian cepat.

**Prioritas Pengerjaan:**
1. Layout split fungsional: Grid katalog produk di sisi kiri (60-65%) dan panel struk keranjang kasir di sisi kanan (35-40%).
2. Palet ritel higienis: Sage Green (#2F6549), Dark Forest (#204833), Warm Paper (#F4F5F0), dan Fresh Mint Accent (#E7F1E7).
3. Filter kategori instan (Sembako, Buah Segar, Susu & Olahan, Camilan, Kebutuhan Rumah Tangga) dan input pencarian barcode/nama barang.
4. Kalkulasi keranjang kasir otomatis: Subtotal, diskon member (5%), PPN 11%, dan kalkulator kembalian uang tunai.
5. Modal struk kuitansi belanja cetak berformat monospaced ala thermal printer 58mm/80mm.

## 2. IDENTITAS VISUAL DAN DESIGN SYSTEM

### Palet Warna
- **Background Utama:** \`#F4F5F0\` (Warm Supermarket Paper)
- **Background Panel & Kartu:** \`#FFFFFF\` (Clean Surface)
- **Warna Teks Utama:** \`#252D27\` (Deep Charcoal Ink)
- **Teks Sekunder / Barcode:** \`#81877E\` (Muted Slate)
- **Warna Aksen Hijau Kasir:** \`#2F6549\` (Sage Green)
- **Aksen Hijau Gelap Tombol:** \`#204833\` (Dark Forest)
- **Aksen Hijau Lembut / Tag:** \`#E7F1E7\` (Light Mint)
- **Aksen Diskon / Promo:** \`#D98643\` (Warm Tangerine)
- **Border & Hairline:** \`#E8EBE4\` (Subtle Gray-Green Line)

### Tipografi
- **Headings & Angka Total:** \`Manrope\`, sans-serif geometris modern dan kokoh.
- **Body & Label Produk:** \`DM Sans\`, bersih dan nyaman dibaca saat scanning ribuan item.
- **Struk Belanja & Barcode:** \`JetBrains Mono\`, presisi tinggi untuk angka kasir.

## 3. STRUKTUR SISTEM POS SAKUMART

### SECTION A — TOP STATUS BAR KASIR
- Status Terminal: "TERMINAL 04 · KASIR: BUDI PRASETYO · SHIFT 1 (PAGI)"
- Jam digital real-time WIB dan indikator status: "● ONLINE — SYNC SERVER AKTIF"
- Tombol shortcut bantuan keyboard (? / F2 Cari / F8 Bayar).

### SECTION B — HEADER PENCARIAN & KATEGORI
- Kotak input pencarian besar dengan ikon barcode scanner: "Ketik nama barang, kode SKU, atau scan barcode... (F2)".
- Chip kategori: Semua Barang (24) | Sayur & Buah | Susu & Telur | Sembako | Camilan | Minuman | Perawatan Diri.

### SECTION C — GRID PRODUK SUPERMARKET (KIRI)
- Grid kartu produk 3-4 kolom dengan:
  - Foto kemasan/produk nyata.
  - Badge stok ("Tersedia 48 pcs" atau "Promo Hemat").
  - Nama produk dan gramasi (misal: "Susu Segar Pasteurisasi 1L", "Beras Pandan Wangi 5kg", "Minyak Kelapa Murni 2L").
  - Kode SKU kecil monospace (misal: \`SKU-88219\`).
  - Harga satuan (format IDR).
  - Tombol aksi "+ Tambah (Space/Enter)".

### SECTION D — PANEL STRUK & TRANSAKSI KASIR (KANAN)
- Header Keranjang: "Transaksi #SM-2026-0891" dengan opsi toggle [Member SakuMart (+Diskon 5%)] dan input nomor HP pelanggan.
- Tabel daftar belanjaan dinamis:
  - Kolom nama barang, harga satuan, kuantitas dengan tombol +/-/del, dan total per baris.
- Ringkasan Tagihan:
  - Subtotal belanja
  - Potongan member
  - PPN 11%
  - TOTAL AKHIR yang besar dan jelas
- Metode Pembayaran Cepat:
  - [Uang Tunai / Cash] dengan kalkulator pecahan uang (Rp 50.000, Rp 100.000, Pas) dan hitung kembalian otomatis.
  - [QRIS Dinamis] dengan pop-up kode bayar.
  - [Kartu Debit / EDC].
- Tombol Aksi: "SELESAIKAN TRANSAKSI & CETAK STRUK".

### SECTION E — MODAL STRUK CETAK THERMAL
- Pop-up struk thermal dengan logo SakuMart, rincian item, nomor kasir, tanggal/jam, kode QR verifikasi struk, dan ucapan terima kasih.

## 4. PERILAKU INTERAKTIF MINIMUM
1. Klik pada produk menambahkan item ke keranjang belanja atau menambah kuantitas jika barang sudah ada.
2. Input kuantitas dan tombol hapus memperbarui total seketika.
3. Toggle member langsung memperhitungkan diskon 5% pada subtotal.
4. Tombol bayar tunai menghitung kembalian uang secara instan saat kasir memasukkan nominal pembayaran.
5. Tombol reset transaksi mengosongkan keranjang untuk pelanggan berikutnya.

## 5. LARANGAN KERAS
- Jangan menggunakan background gelap neon ala crypto dashboard.
- Jangan menghilangkan kalkulasi pajak PPN dan diskon otomatis.
- Jangan menggunakan tombol non-responsif tanpa feedback klik.`;
