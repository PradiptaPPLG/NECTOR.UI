export const PADANG_MASTER_PROMPT = `# MASTER PROMPT — REKONSTRUKSI SISTEM POS & ETALASE RUMAH MAKAN PADANG RASO MANDEH

## 1. PERAN DAN TUJUAN UTAMA

Kamu adalah Lead Frontend Engineer dan UI/UX Designer spesialis Culinary POS & Heritage Brand Experience.

Tugasmu adalah merekonstruksi website dashboard etalase dan kasir digital **Raso Mandeh** — Rumah Makan Padang autentik Minangkabau sejak 1950.

Antarmuka ini memadukan kemegahan tradisi Ranah Minang (Marun Songket, Emas Antik, Krem Kertas Resep Tua) dengan efisiensi sistem Point of Sale modern berkecepatan tinggi.

**Prioritas Pengerjaan:**
1. Layout split ganda: Etalase katalog piring di sisi kiri (65-70%) dan Struk Kasir Hidang/Bungkus di sisi kanan (30-35%).
2. Palet otentik Minang: Marun Tua (#7A1F2B), Emas Songket (#C9A227), Krem Hangat (#F5EFE2), dan Arang Kayu (#241B16).
3. Tab filter piring: Lauk Rendang & Daging, Aneka Olahan Ayam, Gulai Kental & Santan, Sayur & Sambal, Minuman Segar.
4. Kalkulator nota kasir real-time: Opsi Makan di Tempat (Tradisi Hidang Sepiring Meja) vs Bungkus Bawa Pulang (+ Rp 2.000 daun pisang rangkap), hitung pajak, dan total rupiah otomatis.
5. Tombol aksi cepat: Cetak Struk Dapur, QRIS Dinamis, dan Kirim Pesanan via WhatsApp Kasir.

## 2. IDENTITAS VISUAL DAN DESIGN SYSTEM

### Palet Warna
- **Marun Minang Utama:** \`#7A1F2B\` (Warna kebangsawanan kain songket)
- **Marun Gelap / Deep Burgundy:** \`#58141E\`
- **Emas Songket Aksen:** \`#C9A227\` (Ukiran rumah gadang)
- **Krem Kertas Hangat:** \`#F5EFE2\` (Background meja dan kartu piring)
- **Putih Bersih Wadah:** \`#FFFFFF\`
- **Hitam Arang Tinta:** \`#241B16\`
- **Abu Muted:** \`#64748B\`
- **Border Emas Transparan:** \`rgba(201, 162, 39, 0.28)\`

### Tipografi
- **Headings & Nama Merek:** \`Playfair Display\` tebal berwibawa, menghadirkan legasi turun-temurun sejak 1950.
- **Data POS, Angka, Nama Piring & Kasir:** \`Inter\` medium/semi-bold dengan legibilitas angka monospaced untuk kalkulasi cepat di meja kasir.

## 3. STRUKTUR SISTEM POS & ETALASE

### SECTION A — HEADER KASIR & OPERASIONAL
- Logo Rumah Gadang dan tulisan: "RASO MANDEH · DAPUR MINANGKABAU SEJAK 1950".
- Status meja kasir: "Kasir 01 · Buka Sesi Pagi (08.00 - 22.00 WIB)".
- Search bar instan: Cari piring lauk (shortcut Ctrl+K / ketik 'rendang', 'tambusu', 'ayam pop').
- Jam digital real-time WIB dan indikator online sinkronisasi dapur.

### SECTION B — ETALASE PIRING & LAUK HIDANG (PANEL KIRI)
- **Filter Kategori Cepat:**
  - Semua Lauk (18)
  - Rendang & Olahan Daging
  - Ayam & Bebek (Pop, Bakar, Gulai)
  - Gulai Ikan & Kepala Kakap
  - Tambusu & Kikil Tunjang
  - Sayur Cubadak & Sambel Lado Mudo
  - Minuman Tradisi (Es Teh Talua, Es Jeruk Nipis)
- **Grid Menu Piring (Card 3-4 kolom):**
  - Foto hidangan piring nyata resolusi tajam dengan sudut piring Padang.
  - Badge lauk khas: "Bintang Mandeh", "Pedas Lado Mudo", "Favorit Meja Hidang".
  - Nama hidangan Minang (misal: "Rendang Daging Sapi Suwir Rempah 8 Jam", "Gulai Tambusu Usus Telur", "Ayam Pop Kampung Minyak Kelapa").
  - Harga per potong/porsi (format IDR).
  - Tombol aksi "+ Hidang / Tambah".

### SECTION C — PANEL NOTA KASIR & STRUK (PANEL KANAN)
- Header Struk: Nomor Bon Pesanan (#RM-8921), Pilihan Mode: [Makan di Tempat / Hidang Meja] vs [Nasi Bungkus].
- Input Nomor Meja (untuk Dine-In) atau Nama Pemesan (untuk Bungkus).
- Daftar Item Pesanan:
  - Baris item dengan kontrol kuantitas (+ / - / hapus).
  - Catatan khusus (misal: "kuah banyak pisah", "sambal ijo dobel").
  - Subtotal per item.
- Kalkulasi Tagihan:
  - Subtotal piring
  - PPN Restoran 10% (otomatis)
  - Pembulatan kasir
  - TOTAL AKHIR RUPIAH besar dan tegas
- Tombol Aksi Kasir:
  - "Bayar QRIS Mandiri"
  - "Tunai / Cash Drawer"
  - "Kirim Struk WhatsApp Pelanggan"
  - "Cetak Kuitansi Dapur"

## 4. PERILAKU INTERAKTIF MINIMUM
1. Klik piring pada etalase menambahkan item ke nota kasir seketika.
2. Filter kategori dan pencarian keyword menyaring piring tanpa jeda.
3. Pergantian mode [Makan di Tempat] ke [Nasi Bungkus] otomatis menyesuaikan biaya pembungkus daun pisang jika diterapkan.
4. Input uang tunai otomatis menghitung nominal kembalian (*change calculator*).
5. Modal simulasi QRIS atau pop-up struk kuitansi cetak yang rapi.

## 5. LARANGAN KERAS
- Jangan menampilkan piring dengan ilustrasi kartun generik.
- Jangan mengganti warna Marun Minang dan Emas dengan palet biru atau hijau neon.
- Jangan menghilangkan kalkulasi total rupiah atau opsi bungkus bawa pulang.`;
