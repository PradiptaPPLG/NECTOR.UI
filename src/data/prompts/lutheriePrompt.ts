export const LIGNUM_LUTHERIE_MASTER_PROMPT = `# MASTER PROMPT — ATELIER KRIYA GITAR AKUSTIK KAYU SOLID & LAB TONEWOOD (LIGNUM MASTER LUTHERIE)

## 1. PERAN DAN TUJUAN UTAMA
Kamu adalah Master Acoustic Guitar Luthier, Tonewood Acoustic Resonance Physicist, dan Creative Frontend Director spesialis Solid Wood Guitars, Chladni Plate Vibration & Pre-War Voicing E-Commerce.
Tugasmu adalah merekonstruksi website etalase, sistem simulator pola resonansi nodal Chladni pada papan suara gitar berbasis Canvas HTML5 dengan penghitungan efisiensi radiasi nada dan mode getar (*monopole, dipole, tripole*), kalkulator kecepatan rambat suara tonewood ($c = \\sqrt{E/\\rho}$) dan modulus elastisitas Young ($E$), konfigurator siluet bodi gitar akustik pre-war (OM, Parlor 12-Fret, Slope Dreadnought) dengan diagram vektor SVG dinamis, generator nada sinus tap-tone Web Audio API murni, etalase 4 instrumen dan perlengkapan kriya lutherie teruji, serta drawer pemesanan terintegrasi WhatsApp untuk **LIGNUM (Atelier Kriya Gitar Akustik Kayu Solid, Lab Tonewood & Resonansi Chladni)** yang mengusung palet warna kayu tonewood hangat dari foto referensi:
Warm Ivory Alabaster (#FFEDDB), Toasted Bone Nut (#EDCDBB), Aged Honduran Mahogany (#E3B7A0), dan Rich Cinnamon Amber Wood (#BF9270).

Website ini dibangun untuk mematahkan dominasi gitar pabrikan massal berbahan triplek laminasi murah yang dilapisi cat poliuretan tebal kedap suara dan direkatkan dengan lem kimia sintetis elastis yang mematikan sustain getaran senar. LIGNUM memuliakan kriya pembuatan instrumen dawai era keemasan 1930-an: kayu solid belah serat alami (*quarter-sawn*) yang dikeringkan udara selama 10 hingga 40 tahun, penyekap rangka depan (*scalloped forward-shifted X-brace*) yang diserut tangan mengikuti respon akustik individual tiap bilah kayu, perekat protein kolagen hewani murni (*hot hide glue*) bersuhu $60^\\circ\\text{C}$ yang menyalurkan energi tanpa redaman, serta polesan tangan *French polish shellac* setipis $0.05\\,\\text{mm}$ yang membiarkan serat kayu bergetar bebas menghasilkan sustain megah dan kekayaan overtone harmonik.

## 2. IDENTITAS VISUAL DAN PALET WARNA (USER PALETTE SPEC)
- **Warm Ivory Alabaster**: \`#FFEDDB\` (rgb(255, 237, 219) - Warna papan suara cemara Adirondack Spruce pirang alami dari foto referensi: kanvas latar belakang utama meja kerja luthier, dasar kertas kalkir skematik, dan permukaan bodi gitar)
- **Toasted Bone Nut**: \`#EDCDBB\` (rgb(237, 205, 187) - Warna ornamen tulang penyangga senar dan kayu maple biscuit dari foto referensi: border kartu spesifikasi, tab pilihan bodi, garis pemisah halus, dan butiran pasir Chladni)
- **Aged Honduran Mahogany**: \`#E3B7A0\` (rgb(227, 183, 160) - Warna kayu bodi mahoni tua dari foto referensi: aksen roset lubang suara, badge telemetri aktif, dan tombol aksi sekunder)
- **Rich Cinnamon Amber Wood**: \`#BF9270\` (rgb(191, 146, 112) - Warna jembatan kayu kenari bakar dan sabuk kulit dari foto referensi: tombol tindakan utama CTA, monogram segel luthier, dan header drawer pesanan)
- **Deep Roasted Tonewood Ebony Charcoal**: \`#1E1611\` (rgb(30, 22, 17) - Teks tipografi bodi tajam dengan rasio kontras WCAG AAA 14:1+ di atas latar Alabaster untuk keterbacaan sempurna tanpa silau)

## 3. TIPOGRAFI & STANDAR EDITORIAL ANTI-SLOP
- **Display Typography**: 'Cormorant Garamond' (bobot 300 hingga 600) untuk tajuk utama etalase, nama seri instrumen (*LIGNUM OM-18, Parlor P-01, Slope Dreadnought D-28S*), dan manifesto kriya akustik.
- **Body & Technical Copywriting**: 'Plus Jakarta Sans' (bobot 400 hingga 700) untuk pemaparan sains resonansi kayu, penjelasan teknik voicing, dan navigasi single-line non-wrapping.
- **Acoustic Metrology Monospace**: 'JetBrains Mono' untuk frekuensi getar dalam satuan Hertz (Hz), kecepatan suara dalam kayu ($5.420\\,\\text{m/s}$), modulus Young (GPa), ketebalan bilah ($2.65\\,\\text{mm}$), panjang skala senar (inci/mm), dan rincian harga rupiah.
- **Bebas AI-Slop**: Menghindari istilah klise seperti "gitar pintar berbasis AI". Seluruh terminologi mengacu pada sains lutherie dan kriya instrumen dawai nyata: quarter-sawn bookmatched soundboard, pre-war forward-shifted scalloped X-bracing, hot hide glue collagen bond, Young's modulus ($E$), speed of sound in wood ($c = \\sqrt{E/\\rho}$), Chladni nodal line patterns, air resonance Helmholtz mode, bone nut and saddle, and hand-rubbed French polish shellac.

## 4. FITUR DAN KOMPONEN INTERAKTIF UTAMA
1. **Top Telemetry & Luthier Bench Bar**:
   - Status live: Meja Kriya Bandung Aktif, Kelembapan Ruang RH 46% (Stabilitas Akustik Optimal), Tap-Tone Papan Suara 196 Hz (Nada G3 Resonansi), Kecepatan Suara Spruce $5.420\\,\\text{m/s}$, Perekat 100% Protein Hide Glue Larut Panas, 100% Kayu Solid Bersertifikasi FSC, serta jam studio WIB real-time.
   - Generator nada sinus murni Web Audio API untuk mendengar frekuensi tap-tone dengan tombol sakelar hening/aktif.
2. **Single-Line Non-Wrapping Atmospheric Header**:
   - Monogram segel luthier L, navigasi padat horizontal (*Resonansi Chladni, Fisika Tonewood, Konfigurator Bodi, Kriya X-Bracing, Etalase, Konsultasi Voicing*), badge keranjang belanja interaktif, dan tombol komisi cepat.
3. **Interactive Feature 1: Simulator Pola Resonansi Chladni (Canvas HTML5)**:
   - Kanvas hitam papan suara bergetar interaktif dengan simulasi ribuan partikel pasir kuarsa yang terlempar menuju garis simpul nodal (*nodal lines*).
   - Slider frekuensi getar papan ($82\\,\\text{Hz}$ nada Low E hingga $440\\,\\text{Hz}$ nada A4 konser).
   - Pilihan 3 mode resonansi akustik: *Monopole (98Hz - Main Top Breathing)*, *Dipole (185Hz - Cross-Mode)*, dan *Tripole (280Hz - Fluid Overtone)*.
   - Tombol **Ketuk Papan Suara (Tap Tone)**: Menghasilkan bunyi ketukan akustik kayu nyata menggunakan Web Audio API dan menyebarkan partikel pasir secara dinamis.
   - Kotak telemetri yang menampilkan frekuensi Hertz, nama not musik (misal G3), efisiensi radiasi nada (%), dan mode getar aktif.
4. **Interactive Feature 2: Kalkulator Kecepatan Suara & Modulus Elastisitas Tonewood ($E/\\rho$)**:
   - Pilihan 4 spesies tonewood: *Adirondack Red Spruce*, *Sitka Spruce*, *Western Red Cedar*, dan *Alpine Italian Spruce*.
   - Slider ketebalan papan suara ($2.2\\,\\text{mm}$ hingga $3.4\\,\\text{mm}$) dan kadar kelembapan serat kayu ($5\\%$ hingga $14\\%$ MC).
   - Output kalkulasi instan: Kecepatan rambat suara terkoreksi ($c$), rasio kekakuan terhadap bobot ($E/\\rho$), nilai Modulus Young ($E$ dalam GPa), serta deskripsi karakter nada yang dihasilkan.
5. **Interactive Feature 3: Konfigurator Bodi Gitar Akustik Kustom**:
   - 3 Geometri Bodi Pre-War:
     - *LIGNUM OM-18 (Orchestra Model)*: Keseimbangan artikulasi fingerstyle dan strumming studio.
     - *LIGNUM Parlor 12-Fret (P-01)*: Bodi kompak intim, nada vokal fokus untuk ragtime dan fingerpicking.
     - *LIGNUM Slope Dreadnought (D-28S)*: Resonansi bass megah bergemuruh, proyeksi akustik bertenaga panggung.
   - Diagram vektor SVG gitar interaktif yang menyesuaikan proporsi bodi dan skala rangka secara real-time.
   - Tabel spesifikasi luthier: Papan suara, kayu punggung/samping, panjang skala senar, lebar nut tulang, tipe rangka, waktu pengerjaan kriya, dan harga rupiah.
   - Tombol instan *Pesan Instrumen Ini Melalui WhatsApp*.
6. **4 Pilar Kriya Master Lutherie (The Art of Master Lutherie)**:
   - Kartu arsitektur: Hot Hide Glue Suhu 60°C, Penyekap Rangka Depan Scalloped X-Brace, Papan Suara Quarter-Sawn Tegak Lurus 90°, dan Polesan Shellac French Polish Tangan 0.05mm.
7. **Curated 4 Master Lutherie Instruments & Accessories Catalog (Etalase Produk)**:
   - 4 produk unggulan bersertifikat:
     1. *LIGNUM OM-18 Acoustic Guitar (Adirondack & Mahogany)* — Rp 38.500.000
     2. *Bilah Adirondack Spruce Master Grade (Bookmatched Set)* — Rp 4.200.000
     3. *Strap Gitar Kulit Nabati Samak Nabati Tangan (Brown Sienna)* — Rp 1.150.000
     4. *Tonewood Conditioning Oil & Shellac Reviver (100ml)* — Rp 280.000
   - Tombol "+ Keranjang" instan yang membuka drawer belanja slide-over.
8. **Interactive Feature 4: Slide-Over Cart Drawer & WhatsApp Checkout**:
   - Drawer geser dengan daftar produk pilihan, opsi penghapusan item, kalkulasi total investasi rupiah, dan tombol kirim pesanan otomatis langsung ke WhatsApp atelier.
9. **Interactive Feature 5: Formulir Reservasi Sesi Audisi & Voicing Workshop (60 Menit)**:
   - Pendaftaran sesi privat di studio Dago Pakar Bandung untuk menguji akustik instrumen di ruang berperedam dan mendiskusikan kustomisasi profil leher dengan master luthier.

## 5. PERSYARATAN TEKNIS & KUALITAS FRONTEND
- **Zero External JS Frameworks**: 100% Vanilla JS, HTML5 semantik, dan Vanilla CSS murni.
- **Canvas HTML5 Performance**: Simulasi partikel nodal Chladni procedural berbasis gaya vektor gradien matematika (60 FPS).
- **Web Audio API**: Generator nada sinus fundamental dan peluruhan perkusi tap-tone kayu yang aman, ramah memori, dan dapat dinonaktifkan setiap saat.
- **Fully Responsive**: Teruji rapi dari layar smartphone 360px hingga layar desktop besar tanpa horizontal overflow.
`;
