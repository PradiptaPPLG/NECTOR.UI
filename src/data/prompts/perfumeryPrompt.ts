export const MAISON_NOCTURNE_MASTER_PROMPT = `# MASTER PROMPT — ATELIER HAUTE PARFUMERIE & ARSIP BOTANI MAISON NOCTURNE

## 1. PERAN DAN TUJUAN UTAMA
Kamu adalah Lead Frontend Engineer dan Luxury Editorial UI/UX Designer spesialis Haute Parfumerie, Botanical Scent Archives, dan E-Commerce Pengalaman Sensorik.
Tugasmu adalah merekonstruksi website etalase dan pemesanan parfum botani **MAISON NOCTURNE** yang mengusung palet warna mewah burgundy plum (#7C0E44), muted berry mauve (#AA5E7A), dusty rose (#D49A9A), dan warm linen cream (#F2DACE).
Website ini harus memiliki identitas editorial kuat, bebas dari AI slop, memiliki tipografi serif yang anggun (Cormorant Garamond), informasi formulasi botani yang nyata dan mendalam, piramida olfaktori interaktif (Top, Heart, Base notes), custom discovery trio builder (3×5ml), simulator grafir botol kaca (live monogram engraving studio), scent finder quiz 3-langkah, pemesanan tester kertas blotter lilin segel, serta keranjang belanja slide-over dengan integrasi pemesanan WhatsApp.

## 2. IDENTITAS VISUAL DAN PALET WARNA (USER PALETTE SPEC)
- **Signature Velvet Plum Noir**: \`#7C0E44\` (Warna utama dari foto palet: likur plum hitam, keanggunan malam)
- **Deep Wine Velvet**: \`#56082E\` & \`#36041C\` (Aksen terdalam untuk teks kontras tinggi, batas bayangan)
- **Muted Berry Mauve**: \`#AA5E7A\` (Warna sekunder dari foto: mawar kering, kayu kasmir, label sekunder)
- **Dusty Rose Blush**: \`#D49A9A\` (Warna aksen lembut dari foto: kelopak peony, badge, highlight subtle)
- **Warm Porcelain Linen**: \`#F2DACE\` (Warna kanvas hangat dari foto: kertas label katun, boks presentasi)
- **Light Cream Ground**: \`#FBF4F0\` (Latar belakang lembut halaman bebas silau)
- **Deep Obsidian-Plum Ink**: \`#1F0713\` (Teks utama kontras tinggi)
- **Slate Plum Ink**: \`#5C3E4C\` (Teks deskripsi sekunder)
- **Hairlines**: \`#EEDCD4\` & \`#DEC5BA\` (Garis batas editorial tipis)

## 3. TIPOGRAFI & CIRI KHAS EDITORIAL ANTI-SLOP
- **Display Headings**: 'Cormorant Garamond', Georgia, serif — anggun, berbobot, tajam, dengan aksen cetak miring (italic).
- **Body & UI Controls**: 'Plus Jakarta Sans' — bersih, terbaca nyaman, proporsional dari smartphone hingga desktop layar lebar.
- **Formulasi & Batch Data**: 'JetBrains Mono' — kode ekstraksi, masa maserasi 120 hari, persentase konsentrasi 28% Extrait de Parfum, standar IFRA.
- **Tanpa AI Slop**: Tidak ada klaim palsu ('AI-powered scent generator', 'Disukai 100.000+ pelanggan fiktif'). Seluruh rincian berakar pada botani nyata: sulingan kelopak Rosa Damascena, macerasi plum liar, nilam Aceh Gayo, kayu cendana tua Timor (Santalum album), resin getah labdanum karamel, dan vanila Bourbon Madagaskar.

## 4. FITUR DAN KOMPONEN INTERAKTIF UTAMA
1. **Top Notice Bar**:
   - Pengumuman complimentary discovery vial 2ml untuk belanja di atas Rp 450.000, pengiriman dengan wax-seal box, dan tautan reservasi private fitting atelier Bandung.
2. **Sticky Header Editorial**:
   - Monogram seal lilin "MN", navigasi menu (Koleksi Ekstrak, Piramida Olfaktori, Discovery Trio, Studio Monogram, Scent Finder, Atelier), tombol quick finder, dan tombol arsip pesanan dengan badge counter dinamis.
3. **Hero Asimetris Editorial**:
   - Tajuk puitis namun membumi, strip spesifikasi teknis maserasi 120 hari, konsentrasi 28%, sillage 12-16 jam, serta spotlight showcase card flacon '01. Prune Noire & Suède'.
4. **Interactive Scent Pyramid Explorer (Piramida Olfaktori)**:
   - Switcher tab interaktif untuk 3 fase evaporasi aroma: Top Notes (0-20 menit), Heart Notes (30 menit - 3 jam), dan Base Notes (4-16 jam).
   - Indikator bar real-time untuk akord aroma (Fruity Noir, Velvet Floral, Woody Suede, Warm Balsamic).
5. **Katalog Flacon Extrait Lengkap (6 Varian Mandiri)**:
   - Filter tab kategori aroma (Semua, Fruity Noir & Wine, Velvet Rose & Damask, Smoky Wood & Suede, Warm Amber & Vanilla).
   - Pencarian instan berdasarkan kata kunci bahan aroma (plum, mawar, cendana, teh, cokelat).
   - Tiap kartu dilengkapi foto nyata beresolusi tinggi, nomor batch, takaran konsentrasi, piramida singkat, harga dalam Rupiah, tombol Quick View detail, dan tombol Tambah ke Keranjang.
6. **Rakit Custom Discovery Trio (3 × 5ml)**:
   - Pelanggan dapat memilih 3 vial mini 5ml dari 6 koleksi untuk dirangkai ke dalam boks presentasi berpita beludru.
   - Pilihan warna boks presentasi interaktif: Burgundy Velvet (#7C0E44), Muted Mauve (#AA5E7A), Dusty Rose (#D49A9A), atau Porcelain Cream (#F2DACE).
   - Kalkulasi otomatis dan tombol 1-klik masukkan ke keranjang seharga Rp 385.000.
7. **Studio Monogram & Live Flacon Engraving**:
   - Pengunjung dapat mengetik inisial atau nama pendek pada input teks dan melihat hasil grafir ukiran laser terproyeksi langsung di botol kaca secara real-time.
   - Selector gaya tipografi (Serif Roman, Mono, Cursive Script) dan warna tinta grafir (Burgundy Wine, Antique Gold, Obsidian Noir).
8. **Scent Finder Quiz (3 Pertanyaan Interaktif)**:
   - Pertanyaan 1: Karakter aroma favorit.
   - Pertanyaan 2: Suasana & iklim penggunaan wewangian.
   - Pertanyaan 3: Tingkat kekuatan sillage (jejak aroma).
   - Algoritma menghitung wewangian dengan tingkat kecocokan tertinggi (98%) dan menyediakan tombol langsung tambah ke keranjang.
9. **Pemesanan Kertas Blotter Uji Aroma (At Home Experience)**:
   - Pilih hingga 3 aroma untuk disemprotkan ke atas kertas katun 300gsm beramplop lilin kedap aroma seharga ongkir flat Rp 15.000.
10. **Reservasi Private Scent Fitting Atelier Bandung**:
    - Pilihan jam konsultasi intim di Jl. Gandapura No. 34, Bandung dengan generator pesan WhatsApp otomatis.
11. **Slide-Over Cart Drawer Terintegrasi WhatsApp**:
    - Menghitung subtotal secara real-time, mengecek klaim bonus vial 2ml pada batas Rp 450.000, kontrol kuantitas (+ / −), formulir nama & kota penerima, serta tombol generate order WhatsApp resmi.
12. **Modal Quick View Detail**:
    - Switcher ukuran botol (10ml Travel Atomizer Rp 240.000, 50ml Standar Rp 890.000, 100ml Grand Rp 1.450.000) yang memperbarui harga secara dinamis.
`;
