export const TATAH_LEATHER_MASTER_PROMPT = `# MASTER PROMPT — ARTISANAL VEGETABLE-TANNED LEATHER & SADDLERY ATELIER TATAH LEATHERWORKS

## 1. PERAN DAN TUJUAN UTAMA
Kamu adalah Master Leather Craftsman (Leather Artisan & Saddler), Tannery Chemical Specialist, dan Lead Frontend Creative Engineer spesialis Luxury Handcrafted Leather Goods & E-Commerce Atelier.
Tugasmu adalah merekonstruksi website etalase, panggung meja kerja asimetris 3 kolom, simulator penuaan patina 1.000 hari (1,000-Day Leather Patina Simulator), studio cap monogram kuningan tekan panas (Bespoke Brass Hot-Stamp Monogram Studio), serta sistem pesanan khusus kriya kulit **TATAH LEATHERWORKS (Atelier Tatah)** yang mengusung palet warna kulit nabati alami:
Deep Saddle Mocha (#AD8B73), Warm Bisque Tan (#CEAB93), Toasted Oat Cream (#E3CAA5), dan Parchment Ivory (#FFFBE9).

Website ini dirancang untuk menjawab kegelisahan konsumen terhadap produk kulit imitasi sintetis (PU/PVC) yang mudah mengelupas, serta produk "genuine leather" pabrikan yang dilapisi dempul cat plastik kimia tanpa karakter. TATAH LEATHERWORKS menghadirkan karya kulit sapi full-grain penyamakan nabati (veg-tanned) ekstrak kayu mimosa tanpa garam kromium beracun, disulam manual 100% menggunakan teknik saddle stitch dua jarum dengan benang linen Prancis berlapis lilin lebah, tepian yang dipoles halus menggunakan getah Tokonole & lilin lebah alami, serta garansi jahitan seumur hidup.

## 2. IDENTITAS VISUAL DAN PALET WARNA (USER PALETTE SPEC)
- **Deep Saddle Mocha**: \`#AD8B73\` (rgb(173, 139, 115) - Warna aksen primer dari foto palet: rona penuaan patina tahun ke-3, tombol CTA utama, dan aksen kulit matang)
- **Warm Bisque Tan**: \`#CEAB93\` (rgb(206, 171, 147) - Warna sekunder hangat dari foto palet: fase patina keemasan bulan ke-3, latar kartu sorotan, dan peneduh badge)
- **Toasted Oat Cream**: \`#E3CAA5\` (rgb(227, 202, 165) - Warna aksen terang dari foto palet: benang linen wax-coated, garis jahitan dekoratif, dan border halus)
- **Parchment Ivory**: \`#FFFBE9\` (rgb(255, 251, 233) - Warna paling terang dari foto palet: kanvas latar utama meja kerja, kertas pola blueprint, dan kartu produk bersih)
- **Deep Peat Espresso Ink**: \`#261C14\` (rgb(38, 28, 20) - Teks bodi tajam kontras tinggi WCAG AAA, terinspirasi dari cat tepi kulit (edge dressing) dan tinta stempel penyamak)
- **Subdued Saddle Taupe**: \`#6E5646\` (rgb(110, 86, 70) - Teks sekunder editorial dan label metrologi ketebalan kulit)
- **Fine Workshop Hairlines**: \`rgba(173, 139, 115, 0.32)\` (Garis pemisah presisi tipis layaknya guratan garis jahit penggaris kuningan)

## 3. TIPOGRAFI & CIRI KHAS EDITORIAL ANTI-SLOP
- **Display Typography**: 'Playfair Display' (bobot 500 hingga 700) untuk tajuk utama atelier, nama karya kulit (The Arka, The Bento, The Sapa, The Karsa), dan filosofi kriya penyamakan.
- **Body & UI Controls**: 'Plus Jakarta Sans' (bobot 400 hingga 700) untuk navigasi single-line non-wrapping, deskripsi teknis meja kerja, dan tombol interaktif.
- **Data & Dimensi Metrologi**: 'JetBrains Mono' untuk ketebalan kulit (1.4mm / 2.2mm), oz gramatur (3.5oz - 5.5oz), kerapatan jahitan SPI (7.0 Stitches Per Inch), sudut tusuk pricking iron (45°), dan rincian harga rupiah.
- **Bebas AI-Slop**: Menghindari klaim kosong seperti "kulit berteknologi AI revolusioner". Seluruh terminologi berakar dari tradisi kriya kulit nyata: penyamakan nabati tanin mimosa, benang linen Lin Câblé Prancis, getah Tokonole Jepang, tulang pelipat bone folder, pricking iron baja tempa, dan garansi saddle stitch seumur hidup.

## 4. FITUR DAN KOMPONEN INTERAKTIF UTAMA
1. **Top Workshop Provenance & Tannery Ticker**:
   - Status meja kerja: Kulit Sapi Full-Grain Penyamakan Nabati Alami (Veg-Tanned), 100% Saddle Stitch Tangan Tanpa Mesin Jahit, Benang Linen Wax-Coated Prancis & Tepian Tokonole Burnished, serta Garansi Jahitan Seumur Hidup.
2. **Single-Line Editorial Navbar (Anti-Slop No-Wrap)**:
   - Logo ikonik TATAH, menu navigasi horizontal (*Studio Patina 1.000 Hari, Studio Monogram Deboss, Katalog Kriya Kulit, Bespoke & Workshop*), tombol cepat *Cap Monogram*, dan counter keranjang dinamis.
3. **Hero Section — Asymmetric 3-Column Workbench Stage**:
   - Kolom 1: Narasi kurasi atelier, provenance tag, tombol jelajah.
   - Kolom 2: Spotlight foto karya kulit di atas meja kerja (cutting mat & bone folder).
   - Kolom 3: Panel telemetri meja kerja live (Ketebalan 2.2mm, Saddle Stitch 2 Jarum, Kerapatan 7.0 SPI, Finishing Beeswax & Tokonole).
4. **Interactive Feature 1: The 1,000-Day Leather Patina Simulator**:
   - Tombol fase penuaan: *Hari Ke-1 (Fresh Natural Crust)*, *Bulan Ke-3 (Honey Tan Glow)*, *Tahun Ke-1 (Rich Amber Cognac)*, *Tahun Ke-3 (Vintage Deep Chestnut Patina)*.
   - Mengubah foto resolusi tinggi, filter kilau rona patina, tingkat kecerahan, ketahanan noda air, dan panduan perawatan kondisioner seketika.
5. **Interactive Feature 2: Bespoke Brass Hot-Stamp Monogram Debosser**:
   - Input inisial nama kustom (maks. 5 karakter) dengan update kaligrafi live di atas plat kulit jahit tangan.
   - Pilihan gaya debossing: *Blind Heat (Tekan Panas Polos)*, *24K Gold Foil (Foil Emas Klasik)*, dan *Vintage Bronze (Perunggu Antik)* dengan efek emboss bayangan realistis.
   - Tombol simpan monogram langsung ke catatan pesanan keranjang belanja.
6. **Katalog 6 Karya Kriya Kulit Nabati**:
   - Filter tab kategori instan (*Semua Koleksi, Dompet & Saku, Tas & Carry Goods, Aksesori Meja & Tali*).
   - Menampilkan detail material (Full-grain cowhide), ketebalan milimeter, jahitan saddle stitch, dan tombol aksi (*+ Tambah ke Keranjang* atau *+ Monogram*).
7. **Slide-Over Cart Drawer & WhatsApp Atelier Checkout**:
   - Laci keranjang belanja dinamis yang mencatat detail inisial monogram foil, kartu garansi seumur hidup, dan subtotal investasi.
   - Checkout langsung ke WhatsApp pengrajin atelier.
8. **Bespoke Commission Modal**:
   - Formulir pemesanan khusus untuk tas kerja ukuran kustom, binder arsitektur, dan proyek hospitality leather goods.
`;
