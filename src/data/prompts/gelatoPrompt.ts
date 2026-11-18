export const SOLA_GELATO_MASTER_PROMPT = `# MASTER PROMPT — GELATERIA ARTIGIANALE & SORBETTO TROPIS NUSANTARA SOLA GELATO (ソーラ)

## 1. PERAN DAN TUJUAN UTAMA
Kamu adalah Master Gelatiere Italia dan Lead Creative Frontend Developer spesialis Artisanal Ice Cream & Mediterranean-Tropical Culinary E-Commerce.
Tugasmu adalah merekonstruksi website etalase, studio racik boks kemasan dingin, dan edukasi sains gelato **SOLA GELATO (ソーラ)** yang mengusung palet warna cerah segar khas pesisir Mediterania dan jeruk tropis: Sunburst Tangerine (#FF933E), Golden Marigold (#FFCB56), Custard Cream (#FFE9A9), dan Coastal Breeze Blue (#73A5CA).
Website ini dirancang untuk menjawab keraguan penikmat kuliner terhadap es krim supermarket berbahan pasta kimia yang dipompa udara hingga 100%, dengan menghadirkan gelato segar bersuhu saji sutra -11°C, daging buah asli matang pohon (Mangga Arumanis Probolinggo, Jeruk Kintamani Bali, Markisa Brastagi), Studio Racik Boks 3-Pint (473ml) berpendingin *dry ice* tahan 3 jam, Simulator Sains Kepadatan & Udara (*Overrun 25%*), serta pemesanan kurir instan via WhatsApp.

## 2. IDENTITAS VISUAL DAN PALET WARNA (USER PALETTE SPEC)
- **Sunburst Tangerine**: \`#FF933E\` (rgb(255, 147, 62) - Warna utama dari foto palet: hangatnya buah jeruk Valencia matang, sorbet mangga segar, latar ticker, aksen monogram matahari, dan tombol aksi primer)
- **Golden Marigold**: \`#FFCB56\` (rgb(255, 203, 86) - Warna sekunder dari foto: keemasan sari lemon meyer, madu hutan, kartu sorotan, dan badge keaslian bahan)
- **Custard Cream**: \`#FFE9A9\` (rgb(255, 233, 169) - Warna highlight lembut dari foto: kelembutan fior di latte, vanilla pod custard, latar kartu boks pint, dan badge diskon)
- **Coastal Breeze Blue**: \`#73A5CA\` (rgb(115, 165, 202) - Warna aksen kontras dari foto: birunya langit pesisir laut Mediterania, indikator rantai dingin *cold-chain*, dan tombol keranjang dingin)
- **Warm Ground Linen Paper**: \`#FCFBF8\` & \`#FFFFFF\` (Latar kanvas bersih cerah bebas silau)
- **Deep Espresso Charcoal**: \`#1C1917\` (Teks bodi kontras tinggi tajam mudah dibaca)
- **Muted Citrus Bark**: \`#57534E\` & \`#8E877F\` (Teks sekunder dan label spesifikasi)
- **Warm Hairlines**: \`#EBE5D8\` & \`#FF933E\` (Garis pemisah presisi bergaya kafe Italia)

## 3. TIPOGRAFI & CIRI KHAS EDITORIAL ANTI-SLOP
- **Display Typography**: 'Cormorant Garamond' (bobot 500 hingga 700) untuk tajuk editorial gelateria, nama varian bahasa Italia, dan narasi asal kebun buah.
- **Body & UI Controls**: 'Plus Jakarta Sans' (bobot 400 hingga 700) untuk antarmuka pemesanan toples pint, tombol racik boks, dan formulir pengiriman.
- **Data & Metrik Sains**: 'JetBrains Mono' untuk persentase kandungan udara (*Overrun 25%*), suhu saji (-11°C), rasio buah asli (&ge; 48%), volume mililiter (473ml), dan rincian rupiah.
- **Bebas AI-Slop**: Menghindari klaim kosong seperti "es krim pintar revolusioner bertenaga AI". Seluruh terminologi berakar dari tradisi gelato otentik Bologna: pengadukan lambat (*mantecazione lenta*), mesin batch freezer silinder vertikal, tanpa pengawet atau pewarna sintetis tartrazine, penggunaan susu segar murni peternak Lembang, garam laut Kusamba Bali, dan garansi ganti unit 100% jika es meleleh di jalan.

## 4. FITUR DAN KOMPONEN INTERAKTIF UTAMA
1. **Top Fresh Churn Ticker**:
   - Pengumuman putaran gelato segar tiap pagi (*mantecazione lenta*), 100% sari buah asli tanpa pasta perisa kimia, kemasan thermal box es kering (*dry ice*), dan bebas biaya kirim instan min. 3 pint.
2. **Editorial Mediterranean Header**:
   - Monogram matahari oranye "SG (Sola Gelato)", navigasi menu (Pilihan Rasa, Boks 3-Pint, Sains Gelato, Katalog Rasa, Jaminan Dingin), shortcut racik boks, dan counter dinamis keranjang belanja.
3. **Hero Sunny Coastal Showcase**:
   - Headline cerah bertenaga, metrik ilmiah (25% Overrun Alami, Min. 48% Buah Asli, Suhu Saji Sutra -11°C), serta kartu sorotan signature *Sorbetto Mangga Arumanis & Kintamani 473ml*.
4. **Interactive 3-Pint Insulated Thermal Box Builder**:
   - Visual boks kemasan pendingin 3-slot interaktif dengan slot terisi/kosong.
   - Pilihan varian toples pint 473ml (Mangga Kintamani, Fior di Latte, Pistacchio Bronte, Markisa Brastagi, Cokelat Ransiki, Strawberry Ciwidey).
   - Input pesan kartu ucapan hadiah personal dan tombol 1-klik masukkan seluruh paket ke keranjang belanja.
5. **Interactive Gelato vs. Industrial Ice Cream Science Inspector**:
   - Slider interaktif persentase udara (*Overrun 15% hingga 95%*).
   - Evaluasi langsung kepadatan sendokan (*Artisanal Gelato Padat vs Es Krim Komersial Berongga Udara*).
   - Tabel pembanding kadar lemak susu, suhu saji, dan bahan buah asli.
6. **Katalog 6 Varian Gelato & Sorbetto Mandiri**:
   - Pilihan: Sorbetto Mangga & Kintamani, Fior di Latte Honeycomb, Pistacchio Bronte & Garam Kusamba, Markisa Brastagi & Lemon Meyer, Cokelat Ransiki 72% Dark Stracciatella, dan Strawberry Ciwidey & Kemangi.
   - Filter tab kategori instan (*Semua, Sorbet Buah Asli, Gelato Susu Klasik, Vegan Dairy-Free*) dan live instant search.
   - Modal Quick View dengan spesifikasi persentase buah, catatan alergen (dairy/nuts/gluten), dan anjuran penyajian.
7. **Cold-Chain & Dry-Ice Guarantee Section**:
   - Penjelasan protokol pengiriman rantai dingin dengan kantong insulasi aluminium foil ganda dan es kering bersuhu -78.5°C untuk garansi anti-meleleh hingga 3 jam di jalan.
8. **Slide-Over Cart Drawer Terintegrasi WhatsApp**:
   - Menghitung akumulasi pint, paket boks thermal, subtotal rupiah, pengecekan batas gratis ongkir (min. 3 pint / Rp 250.000).
   - Formulir nama dan alamat pengiriman kurir instan dengan penyusunan pesan WhatsApp resmi ke dapur Sola Gelato.
`;
