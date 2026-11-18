export const KEMAS_LAB_MASTER_PROMPT = `# MASTER PROMPT — STUDIO KEMASAN RAMAH LINGKUNGAN & SABLON KUSTOM KEMAS LAB (包装工房)

## 1. PERAN DAN TUJUAN UTAMA
Kamu adalah Creative Director dan Lead Packaging Engineer sekaligus Senior Frontend Developer spesialis B2B Sustainable Packaging & Custom Print E-Commerce.
Tugasmu adalah merekonstruksi website etalase, studio kustomisasi, dan pemesanan kemasan UMKM ramah lingkungan **KEMAS LAB (包装工房)** yang mengusung palet warna industrial-botanikal kontras tinggi: Midnight Slate (#202734), Steel Indigo (#36415A), Matcha Pistachio Sage (#B7D894), dan Pale Celadon Dew (#E0F8C7).
Website ini dirancang untuk menyelesaikan problem nyata ribuan UMKM kuliner & ritel di Indonesia (tingginya MOQ kemasan pabrik besar, lamanya waktu pengerjaan sablon, limbah plastik sekali pakai, serta keraguan format file grafis sablon). Website ini dilengkapi Visualizer Sablon Cup & Box Interaktif real-time, Kalkulator Grosir MOQ & Diskon Berjenjang (500 hingga 10.000 pcs), Katalog 6 Kemasan Tersertifikasi FSC/Bio, Panduan Format Die-Cut Cetak Siap Unduh (AI/PDF), Formulir Pesan Sample Box Gratis, serta Slide-over Keranjang WhatsApp Terintegrasi.

## 2. IDENTITAS VISUAL DAN PALET WARNA (USER PALETTE SPEC)
- **Deep Midnight Slate**: \`#202734\` (rgb(32, 39, 52) - Warna pondasi dari foto palet: tinta arang pekat, ketegasan industri cetak, latar footer dan header kontras tinggi)
- **Steel Indigo Slate**: \`#36415A\` (rgb(54, 65, 90) - Warna sekunder dari foto: baja presisi, card border tegas, aksen panel teknis dan state hover)
- **Matcha Pistachio Sage**: \`#B7D894\` (rgb(183, 216, 148) - Warna hijau botani dari foto: representasi serat nabati daur ulang, tombol aksi primer, badge ramah lingkungan)
- **Pale Celadon Dew**: \`#E0F8C7\` (rgb(224, 248, 199) - Warna highlight lembut dari foto: kesegaran organik, latar belakang card interaktif, aksen badge cerah)
- **Clean Eco Canvas Ground**: \`#FAFBF8\` & \`#FFFFFF\` (Latar belakang kertas hangat alami bertekstur bersih)
- **Dark Ink Typography**: \`#151B24\` (Teks bodi kontras tinggi tajam mudah dibaca)
- **Muted Herbaceous Gray**: \`#5A687D\` (Teks sekunder dan label spesifikasi teknis)
- **Eco Hairlines**: \`#E2E8D8\` & \`#CBD7BE\` (Garis pemisah presisi bergaya cetak)

## 3. TIPOGRAFI & CIRI KHAS EDITORIAL ANTI-SLOP
- **Display Typography**: 'Plus Jakarta Sans' (bobot 400 hingga 800) untuk tajuk studio cetak, nama jenis kemasan, dan headline kalkulator yang lugas.
- **Data & Ketebalan GSM**: 'JetBrains Mono' untuk dimensi milimeter, gramatur kertas (290-350 GSM), kapasitas volume (oz & ml), rincian harga per pcs, dan kode sertifikasi FSC-STD-40-004.
- **Bebas AI-Slop**: Menghindari omong kosong seperti "solusi AI revolusioner pengubah kemasan dunia". Seluruh spesifikasi berakar dari realitas industri kemasan lokal (workshop Kalibaru & Daan Mogot): pelapisan food-grade bio-coating berbahan pati jagung (PLA), kertas kraft daur ulang bersertifikasi FSC, tinta sablon water-based food contact compliant, dan pisau die-cut pond presisi toleransi 0.5mm.

## 4. FITUR DAN KOMPONEN INTERAKTIF UTAMA
1. **Production Status Bar (Ticker)**:
   - Pengumuman produksi sablon 5-7 hari kerja, garansi anti-bocor 100%, gratis cetak plat film untuk order di atas 2.500 pcs, dan pengiriman se-Indonesia via ekspedisi kargo.
2. **Industrial Header**:
   - Monogram logo geometris "KL (Kemas Lab)", navigasi menu (Katalog Kemasan, Studio Sablon, Kalkulator MOQ, Standar Eco, Sample Box Gratis), shortcut tombol "Uji Desain Kemasan", dan counter keranjang dinamis.
3. **Hero Studio Showcase**:
   - Headline lugas ramah lingkungan, spesifikasi kunci: MOQ bersahabat 500 pcs, degradasi tanah 180 hari, sertifikasi Food Safe BPOM & FDA compliant, serta kartu preview kemasan terlaris "Eco-Kraft Lunch Box 290 GSM".
4. **Interactive Cup & Box Sablon Visualizer**:
   - Pemilih jenis kemasan live (Paper Cup 12oz, Kraft Lunch Box L, Standing Pouch Zipper, Gable Box).
   - Input teks nama brand/logo secara langsung yang langsung dirender pada mockup kemasan.
   - Pemilih warna tinta sablon (Charcoal Midnight #202734, Forest Evergreen, Botanical Pistachio #B7D894, Terracotta Warm, Pure White).
   - Pemilih orientasi cetak: 1 Sisi atau 2 Sisi (keliling).
   - Estimasi harga sablon per satuan terhitung otomatis secara real-time.
5. **Interactive Wholesale MOQ & Tier Pricing Calculator**:
   - Slider jumlah pemesanan (500 hingga 10.000 pcs).
   - Pemilih tier produk (Paper Cup Kopi, Kraft Box Makanan, Pouch Biji Kopi, Corrugated Box Mailer).
   - Toggle sablon (Polos tanpa cetak vs Custom Sablon 1 Warna).
   - Kalkulasi otomatis: harga per pcs, persentase diskon grosir, total investasi, dan tombol 1-klik masukkan ke keranjang.
6. **Katalog 6 Produk Kemasan Berkelanjutan**:
   - Produk: Kraft Paper Bowl 650ml, Double-Wall Cup 12oz, Kraft Folding Box L, Matte Kraft Coffee Pouch 250g, Corrugated E-Flute Mailer Box, Cassava Biodegradable Polymailer.
   - Filter tab kategori (Semua, Cup Minuman, Box Makanan, Pouch & Tas) dan live search pencarian instan.
   - Detail modal spesifikasi lengkap (dimensi mm, ketebalan GSM, sertifikasi, keunggulan tahan minyak/panas) dengan pilihan kuantiti grosir.
7. **Free Sample Box Kit & Panduan Format File Cetak**:
   - Panduan spesifikasi file cetak (vektor AI/PDF, konversi font ke curve/outline, margin aman die-cut 3mm).
   - Formulir permohonan Sample Kit gratis bagi brand owner dan pemilik bisnis kuliner (dikirim gratis, cukup bayar ongkir lokal).
8. **Slide-Over Cart Drawer Terintegrasi WhatsApp**:
   - Menghitung akumulasi kuantiti pcs, rincian produk, biaya sablon, subtotal rupiah, dan pengecekan kelayakan promo gratis plat film.
   - Form nama usaha, kota tujuan kargo, dan catatan grafis.
   - Tombol kirim pesanan otomatis menyusun pesan WhatsApp terstruktur ke admin bengkel cetak Kemas Lab.
`;
