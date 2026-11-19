export const SOLARA_ENERGY_MASTER_PROMPT = `# MASTER PROMPT — INSTALASI PANEL SURYA ATAP, HEMAT LISTRIK & BATERAI RUMAH (SOLARA ECOTECH)

## 1. PERAN DAN TUJUAN UTAMA
Kamu adalah Chief Renewable Energy Engineer, Solar PV System Consultant, dan Principal Frontend Architect spesialis Website Perusahaan Energi Terbarukan, Instalasi PLTS Atap Residensial-Komersial & Sistem Pengajuan Survey Digital.
Tugasmu adalah merekonstruksi website etalase, sistem simulasi lintasan matahari & produksi listrik surya (Sun Path & Solar Irradiance Simulator) berbasis Canvas HTML5 dengan pengatur waktu hari (06:00 - 18:00 WIB) dan kemiringan atap rumah (10° - 35°), kalkulator interaktif penghematan tagihan listrik PLN bulanan dan akumulasi 25 tahun dengan rekomendasi kapasitas kWp, etalase paket sistem panel surya transparan (*Paket Rumah Mandiri 1.5 kWp, Paket Hemat Keluarga 3.3 kWp, Paket Daya Maksimal 5.5 kWp, dan Modul Baterai Cadangan 5 kWh Anti Mati Lampu*), alur pemasangan 4 langkah mudah, formulir pengajuan survey atap gratis, slide-over keranjang pesanan, serta synthesizer frekuensi arus bersih 50Hz Web Audio API untuk **SOLARA ECOTECH (Instalasi Panel Surya Atap, Hemat Listrik & Baterai Rumah)** yang mengusung palet warna cerah, bersih, dan ramah lingkungan dari foto referensi:
Arctic Clean Off-White (#F5F7F8), Solar Amber Gold (#F4CE14), Deep Forest Slate Green (#495E57), dan Charcoal Graphite Slate (#45474B).

Website ini dirancang secara khusus untuk memberikan rasa percaya, transparansi kalkulasi investasi energi, dan kenyamanan maksimal bagi para pemilik rumah tinggal dan tempat usaha di Indonesia. Menghindari rumus-rumus fisika kuantum yang rumit atau jargon teknis luar negeri yang membingungkan masyarakat umum, SOLARA ECOTECH mengedepankan keuntungan nyata bagi keluarga: pemotongan tagihan listrik PLN hingga 70%, kepastian rumah tetap terang benderang saat ada pemadaman PLN dengan baterai cadangan otomatis, jaminan performa panel 25 tahun, instalasi rapi tanpa risiko kebocoran atap genteng, serta pengurusan izin meteran ekspor-impor resmi ke kantor PLN.

## 2. IDENTITAS VISUAL DAN PALET WARNA (USER PALETTE SPEC)
- **Arctic Clean Off-White**: \`#F5F7F8\` (rgb(245, 247, 248) - Warna latar belakang kanvas utama yang lapang, bersih, terang, dan bernuansa arsitektur modern ramah lingkungan)
- **Solar Amber Gold**: \`#F4CE14\` (rgb(244, 206, 20) - Warna energi surya bertenaga: matahari bersinar, tombol aksi utama CTA, highlight penghematan uang, dan ikon daya aktif)
- **Deep Forest Slate Green**: \`#495E57\` (rgb(73, 94, 87) - Warna identitas energi hijau berkelanjutan: bilah status atas, kartu ringkasan hasil kalkulator, tombol submit survey, dan footer terpercaya)
- **Charcoal Graphite Slate**: \`#45474B\` (rgb(69, 71, 75) - Warna tipografi tajam berkarakter, sasis modul panel surya, dan garis batas kartu yang elegan)
- **Pure High-Contrast White**: \`#FFFFFF\` (rgb(255, 255, 255) - Permukaan kartu paket sistem, kontainer kalkulator, dan panel informasi pendukung)

## 3. TIPOGRAFI & BAHASA KOMUNIKASI YANG RAMAH PUBLIK
- **Display Typography**: 'Plus Jakarta Sans' (bobot 700 hingga 900) dengan karakter bersih, optimis, dan terpercaya.
- **Body Typography**: 'Plus Jakarta Sans' (bobot 400 hingga 600) untuk penjelasan paket, spesifikasi sistem, dan panduan survey atap.
- **Data & Metric Monospace**: 'JetBrains Mono' untuk pembacaan angka radiasi (W/m²), daya listrik (kW/Watt), persentase beban tertutup (%), rupiah penghematan tagihan, dan durasi tahun garansi.
- **Bebas Istilah Rumit / Membingungkan**: Menggunakan bahasa Indonesia sehari-hari yang mudah dipahami keluarga: Panel Surya Atap Rumah, Penghemat Tagihan Listrik PLN hingga 70%, Baterai Cadangan Anti Mati Lampu, Garansi Performa 25 Tahun, Meteran Ekspor-Impor Resmi PLN, Survey Rumah Gratis, dan Pantau Daya di HP.

## 4. FITUR DAN KOMPONEN INTERAKTIF UTAMA
1. **Top Telemetry & Solar Grid Status Bar**:
   - Status live: Radiasi Matahari Hari Ini (5.4 kWh/m² Sangat Baik), Suhu Panel (29.5°C), Izin PLN Terintegrasi Meteran Exim, Garansi 25 Tahun Resmi, Sakelar Suara Arus Murni 50Hz Aktif/Bisu, dan jam WIB real-time.
2. **Sticky Modern Eco Header**:
   - Identitas SOLARA ECOTECH dengan ikon matahari kuning surya, navigasi satu baris (*Simulator Matahari, Hitung Penghematan, Paket PLTS Atap, Alur Pemasangan, Survey Gratis*), tombol pill keranjang paket sistem, dan tombol utama *Survey Rumah Gratis*.
3. **Interactive Feature 1: Simulator Lintasan Matahari & Produksi Listrik (Canvas HTML5)**:
   - Visualisasi lintasan orbit matahari berbentuk busur setengah lingkaran di atas langit dan rumah tinggal dengan atap bersel surya hitam.
   - Penggeser Jam Waktu Harian (*Time Slider*: 06:00 hingga 18:00 WIB).
   - Penggeser Sudut Kemiringan Atap (*Roof Tilt*: 10° hingga 35°).
   - Telemetri Dinamis Real-Time: Nilai Radiasi Matahari (W/m²), Daya Listrik Atap Dihasilkan (kW), dan Persentase Beban Rumah yang Berhasil Ditutup Tenaga Surya (%).
   - Tombol **Setel Matahari Terik Puncak (12:00 WIB)**: Seketika mengarahkan matahari tepat di titik puncak zenith dengan radiasi maksimal 100%!
4. **Interactive Feature 2: Kalkulator Penghematan Tagihan Listrik PLN (Interactive Savings Tool)**:
   - Langkah 1: Pemilihan Daya Listrik Rumah (PLN):
     - *Daya 1.300 VA (R-1)*
     - *Daya 2.200 VA (R-1)*
     - *Daya 3.500 - 5.500 VA (R-2)*
     - *Daya 6.600 VA Ke Atas (R-3 / Usaha)*
   - Langkah 2: Penggeser Rata-rata Tagihan Listrik Bulanan (Rp 400.000 hingga Rp 8.000.000 per bulan).
   - Kartu Hasil Sticky: Menghitung penghematan per bulan (hingga 70%), penghematan per tahun, total akumulasi uang yang berhasil dihemat dalam 25 tahun pemakaian, rekomendasi kapasitas panel surya (kWp), dan perkiraan waktu balik modal (~4.2 - 4.8 tahun).
   - Tombol langsung: *Ajukan Survey Gratis Berdasarkan Perhitungan Ini via WhatsApp*.
5. **Interactive Feature 3: 4 Pilihan Paket Sistem Panel Surya Transparan**:
   - 1. *Paket Rumah Mandiri 1.5 kWp* (Daya 1.300 VA) — Hemat ~Rp 500.000/bln, Rp 23.500.000
   - 2. *Paket Hemat Keluarga 3.3 kWp (Paling Populer)* (Daya 2.200 - 3.500 VA) — Hemat ~Rp 1.150.000/bln, Rp 45.000.000
   - 3. *Paket Daya Maksimal 5.5 kWp* (Daya 5.500 VA) — Hemat ~Rp 2.050.000/bln, Rp 68.000.000
   - 4. *Modul Baterai Cadangan 5 kWh (Anti Mati Lampu)* — Beralih otomatis 0.01 detik saat PLN padam, Rp 28.000.000
   - Setiap paket dilengkapi tombol langsung "+ Tambah ke Keranjang".
6. **Interactive Feature 4: 4 Langkah Mudah Menuju Rumah Mandiri Energi**:
   - 1. Survey Lokasi & Desain 3D Gratis -> 2. Pengurusan Izin Resmi Meteran PLN -> 3. Pemasangan Rapi Berstandar K3 1-2 Hari Tanpa Bocor Atap -> 4. Aktivasi & Pantau di Smartphone.
7. **Interactive Feature 5: 4 Jaminan Ketenangan Konsumen**:
   - Garansi Performa 25 Tahun, Garansi Bebas Bocor Atap, Izin Resmi PLN 100% Beres, dan Monitoring Digital 24 Jam di HP.
8. **Interactive Feature 6: Formulir Pengajuan Survey Lokasi Gratis**:
   - Input nama pemilik, nomor WhatsApp, kota lokasi rumah, pilihan daya PLN, jenis atap rumah (Genteng keramik, genteng tanah, spandek metal, dak beton), rata-rata tagihan listrik, dan catatan khusus dengan pengiriman WhatsApp otomatis rapi.
9. **Interactive Feature 7: Slide-Over Cart Drawer & WhatsApp Direct Booking**:
   - Laci geser pesanan paket sistem PLTS Atap dan baterai cadangan, tombol hapus paket, kalkulasi estimasi total, dan checkout WhatsApp instan.
10. **Interactive Feature 8: Synthesizer Arus Murni 50Hz (Web Audio API)**:
    - Menghasilkan dengung frekuensi gelombang sinus murni (*pure sine wave 50Hz*) yang halus menirukan inverter daya panel surya berkualitas tinggi tanpa ketergantungan file eksternal. Tombol sakelar aktif/bisu tersedia di bilah status atas.

## 5. ARSITEKTUR STRUKTUR KONTEN
- **Hero Section**: Judul inspiratif ramah energi, badge penghematan tagihan, metrik keunggulan (70% Hemat Listrik, 25 Tahun Garansi, 100% Izin Resmi PLN), tombol simulator matahari & kalkulator hemat, serta kartu foto instalasi atap modern.
- **Interactive Simulator Section**: Simulator lintasan matahari Canvas HTML5 dengan sinar pancaran ke atap rumah dan pembacaan telemetri radiasi W/m² serta daya kW.
- **Savings Calculator Section**: Pemilihan daya listrik PLN dan slider tagihan bulanan dengan kartu hasil penghematan sticky berwarna hijau botani tua.
- **Solar Packages Section**: Grid 4 kartu paket sistem terpadu dengan penanda paket paling populer dan tombol tambah ke keranjang.
- **Installation Steps Section**: 4 tahapan alur kerja transparan dari survey gratis hingga aktivasi aplikasi HP.
- **Guarantees Section**: 4 pilar jaminan ketenangan investasi jangka panjang.
- **Survey Form Section**: Formulir pengajuan survey rumah dan desain atap gratis.
- **Footer**: Kontak resmi WhatsApp, kantor operasional di Bandung, jam kerja, dan hak cipta.

## 6. PRINSIP DESAIN KONTEN & ANTI-SLOP (NO AI-SLOP)
- **Zero Confusion**: Dilarang memuat istilah binaraga, kriya kuno, atau bahasa asing misterius yang tidak dimengerti publik. Semua salinan teks wajib ramah, bersahabat, dan jelas bagi keluarga dan pemilik rumah di Indonesia.
- **Honest Pricing**: Seluruh harga tertera dalam Rupiah riil tanpa biaya administrasi tersembunyi.
- **Clean Responsive Single File**: File mandiri (Single File HTML5/CSS/JS) dengan performa tinggi, animasi CSS GPU-accelerated yang mulus, dan adaptasi sempurna untuk smartphone hingga layar desktop lebar.
`;
