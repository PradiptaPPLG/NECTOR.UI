export const SVALA_BATHHOUSE_MASTER_PROMPT = `# MASTER PROMPT — NORDIC THERMAL BATHHOUSE & HYDROTHERAPY SANCTUARY SVALA (スヴァラ)

## 1. PERAN DAN TUJUAN UTAMA
Kamu adalah Lead Architectural Designer dan Creative Frontend Specialist spesialis Nordic Hydrotherapy, Thermal Spa & Contrast Bathing Sanctuaries.
Tugasmu adalah merekonstruksi website etalase, sistem telemetri kolam real-time, perancang ritual kontras 90-menit, serta butik apothecary **SVALA BATHHOUSE & HYDROTHERAPY (スヴァラ)** yang mengusung palet warna air mineral glasial murni:
Pale Glacial Mist (#E3FDFD), Aerated Spring Foam (#CBF1F5), Vibrant Thermal Cyan (#A6E3E9), dan Deep Sea Glass Teal (#71C9CE).

Website ini dirancang untuk menjawab kepenatan modern dan stimulasi indera berlebihan (*sensory overload*) dengan menghadirkan santuari pemandian hening berstandar arsitektur Nordik-Swiss (terinspirasi dari Therme Vals dan Aire Ancient Baths), sumber air mata air pegunungan tinggi vulkanik kaya silika dan magnesium tanpa klorin sintetis (0.00% klorin, purifikasi ion tembaga & UV-C), kolam es glasial 4.2°C untuk stimulasi saraf vagus, basin apung garam Epsom 32%, sistem reservasi slot hening, dan butik garam rendam botani.

## 2. IDENTITAS VISUAL DAN PALET WARNA (USER PALETTE SPEC)
- **Pale Glacial Mist**: \`#E3FDFD\` (rgb(227, 253, 253) - Warna paling terang dari foto palet: kabut es kolam glasial, kanvas halus pembungkus kartu, dan aksen latar ticker telemetri)
- **Aerated Spring Foam**: \`#CBF1F5\` (rgb(203, 241, 245) - Warna lembut dari foto palet: buih pancuran air terjun, latar tombol aksi sekunder, dan badge temperatur netral)
- **Vibrant Thermal Cyan**: \`#A6E3E9\` (rgb(166, 227, 233) - Warna air kolam termal dari foto: kilau permukaan air hangat beruap, border kartu aktif, dan garis dekoratif)
- **Deep Sea Glass Teal**: \`#71C9CE\` (rgb(113, 201, 206) - Warna aksen utama dari foto: batu permata kaca laut, tombol reservasi primer, indikator denyut sensor, dan tombol penambahan keranjang)
- **Abyssal Mineral Ink**: \`#091C22\` & \`#0F2B33\` (Teks bodi kontras tinggi tajam dengan keterbacaan WCAG AAA)
- **Subdued Marine Slate**: \`#3B5A64\` & \`#668894\` (Teks sekunder editorial dan label spesifikasi teknis)
- **Pure Mineral Paper**: \`#F6FCFD\` & \`#FFFFFF\` (Latar belakang sejuk bersih tanpa distorsi silau)
- **Hairline Mineral Borders**: \`rgba(113, 201, 206, 0.28)\` (Garis pemisah elegan tipis khas arsitektur minimalis)

## 3. TIPOGRAFI & CIRI KHAS EDITORIAL ANTI-SLOP
- **Display Typography**: 'Cinzel' (bobot 600 hingga 700) untuk tajuk utama bathhouse, nama basin air, dan judul sertifikasi laboratorium, memancarkan wibawa monumental arsitektural.
- **Body & UI Controls**: 'Plus Jakarta Sans' (bobot 400 hingga 700) untuk navigasi single-line yang kokoh tanpa pemenggalan kata (*no-wrap*), penjelasan ritual, dan input form reservasi.
- **Data & Telemetri Sensor**: 'JetBrains Mono' untuk derajat Celsius (4.2°C, 36.8°C, 39.2°C, 45.0°C), delta suhu (Δ 40.8°C), durasi menit (90m), konsentrasi mineral (mg/L, ppm, pH 7.42), dan harga rupiah.
- **Bebas AI-Slop**: Menghindari klise spa abal-abal (gambar batu kali bertumpuk dengan bunga kamboja palsu). Seluruh terminologi berakar pada ilmu hidroterapi ilmiah: aktivasi saraf vagus, vasokonstriksi glasial, saturasi garam Epsom 32% bebas gravitasi (*theta state induction*), filtrasi ion tembaga tanpa bau klorin tajam, serta etika berendam tanpa gawai (*zero digital screens*).

## 4. FITUR DAN KOMPONEN INTERAKTIF UTAMA
1. **Live Basin Telemetry Ticker**:
   - Memantau suhu kolam secara langsung: Glacial Plunge 4.2°C, Magnesium Basin 36.8°C, Steam Chamber 45.0°C, kapasitas tamu saat ini (62%), dan air minum alkali pegunungan gratis pH 7.8.
2. **Single-Line Editorial Navbar (Anti-Slop No-Wrap)**:
   - Monogram minimalis "SV (SVALA)", link navigasi padat (*Sirkuit Air, Ritual 90-Min, Uji Mineral, Apothecary, Etika Mandi*), tombol cepat Reservasi Sesi, dan indikator keranjang belanja dinamis.
3. **Hero Architectural Sanctuary Showcase**:
   - Tajuk visual megah, metrik kontras termal (4.2°C - 39°C, 32% Saturasi Garam, 0.00% Klorin Sintetis), dan kartu foto kolam beruap dengan telemetri melayang.
4. **Interactive 4-Basin Pool Telemetry Selector**:
   - Tab pemilih 4 kolam: Glacial Cold Plunge (4.2°C), Magnesium Floatation Basin (36.8°C), Volcanic Silica Thermal Pool (39.2°C), Eucalyptus Cedar Steam (45.0°C).
   - Mengubah foto resolusi tinggi, narasi fisiologis, kedalaman air (meter), kandungan mineral, durasi ideal, dan sistem sirkulasi air secara seketika.
5. **Interactive 90-Min Thermal Circuit Builder**:
   - Pemilih intensitas: Athletic Recovery (Δ 40.8°C), Circadian Sleep (Δ 18.2°C), Deep Volcanic Reset (Δ 35.0°C).
   - Memvisualisasikan 4 tahapan sirkuit secara linier dengan suhu spesifik dan kalkulasi delta termal.
6. **Water Chemistry & Lab Test Certification Table**:
   - Transparansi uji laboratorium: pH 7.42, Magnesium 148 mg/L, Silika 72.4 mg/L, Residu Klorin 0.00 ppm, dan TDS 820 ppm.
7. **Apothecary Store dengan Interactive Cart**:
   - Produk: Glacial Mineral Bath Soak 500g (Rp 215.000), Eucalyptus Body Oil 100ml (Rp 185.000), Nordic Waffle Kimono Robe (Rp 580.000), Hinoki Wood Bath Headrest (Rp 340.000).
   - Tombol penambahan instan, laci keranjang geser (*slide-over cart drawer*), pengubah jumlah unit, dan kalkulasi subtotal rupiah.
8. **Interactive Booking Modal & Sanctuary Etiquette**:
   - Formulir reservasi: pemilihan sirkuit publik / private suite / starlight soak, tanggal kedatangan, pilihan slot jam, dan jumlah tamu dengan konfirmasi instan.
   - 3 pilar etika hening: Bebas Gadget, Suara Bisik Saja, dan Mandi Bilas Total sebelum berendam.
`;
