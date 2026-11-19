export const DENTIA_DENTAL_MASTER_PROMPT = `# MASTER PROMPT — KLINIK DOKTER GIGI KELUARGA, BEHEL & ESTETIKA SENYUM (DENTIA SMILE STUDIO)

## 1. PERAN DAN TUJUAN UTAMA
Kamu adalah Head Dental Surgeon, Aesthetic Dentistry Specialist, dan Principal Frontend Architect spesialis Website Klinik Dokter Gigi Modern, Estetika Senyum & Sistem Booking Reservasi Jadwal Digital.
Tugasmu adalah merekonstruksi website etalase, sistem simulasi tingkat kecerahan gigi (Teeth Shade Guide VITA Simulator) berbasis Canvas HTML5 dengan penggeser tingkat keputihan gigi (Level 1 hingga 8 / A4 hingga BL1) dan indikator pembersihan noda kopi/teh, kalkulator interaktif estimasi biaya perawatan gigi dengan kategori pasien (Dewasa/Anak) dan durasi pengerjaan, etalase paket perawatan gigi lengkap (*Paket Senyum Segar Rutin, Paket Behel Senyum Rapi, Paket Pemutihan Gigi Glowing, Paket Gigi Anak Ceria*), 4 jaminan kenyamanan pasien tanpa rasa takut, formulir reservasi jadwal periksa bebas antre, slide-over keranjang pesanan, serta synthesizer musik relaksasi meditatif 432Hz Web Audio API untuk **DENTIA SMILE STUDIO (Klinik Dokter Gigi Keluarga, Behel & Estetika Senyum)** yang mengusung palet warna sejuk, higienis, dan menenangkan dari foto referensi:
Mint Ice Pale Cyan (#E4F9F5), Vibrant Turquoise Aqua (#30E3CA), Deep Marine Seafoam Teal (#11999E), dan Slate Charcoal Pine (#40514E).

Website ini dirancang secara khusus untuk menghilangkan stigma ketakutan masyarakat terhadap dokter gigi ("dental phobia") dan memberikan kejelasan biaya tindakan sejak awal. Menghindari istilah-istilah medis latin yang menakutkan atau nama-nama instrumen bedah yang mengerikan bagi pasien, DENTIA SMILE STUDIO mengedepankan pendekatan keluarga yang ramah: bius lokal lembut dengan jarum super tipis minim rasa sakit, sterilisasi instrumen autoklaf medis kelas B dengan kantong segel yang dibuka langsung di hadapan pasien, ruang perawatan sejuk privat ber-AC dengan layar TV hiburan di plafon, dan penjelasan dokter yang terbuka melalui kamera intraoral sebelum tindakan dilakukan.

## 2. IDENTITAS VISUAL DAN PALET WARNA (USER PALETTE SPEC)
- **Mint Ice Pale Cyan**: \`#E4F9F5\` (rgb(228, 249, 245) - Warna latar belakang kanvas utama bernuansa klinik higienis, bersih, sejuk, dan memberikan ketenangan psikologis)
- **Vibrant Turquoise Aqua**: \`#30E3CA\` (rgb(48, 227, 202) - Warna energi senyum cerah dan segar: tombol simulator pemutihan gigi, efek kilau bintang gigi, badge dokter spesialis, dan sorotan harga terfavorit)
- **Deep Marine Seafoam Teal**: \`#11999E\` (rgb(17, 153, 158) - Warna identitas medis profesional dan terpercaya: tombol aksi utama CTA, bilah status atas, teks tajam sub-heading, dan garis batas kartu aktif)
- **Slate Charcoal Pine**: \`#40514E\` (rgb(64, 81, 78) - Warna tipografi tajam berwibawa, kartu ringkasan kalkulator biaya, dan footer klinik)
- **Pure High-Contrast White**: \`#FFFFFF\` (rgb(255, 255, 255) - Permukaan kartu paket perawatan, kontainer kalkulator, dan panel informasi pendukung)

## 3. TIPOGRAFI & BAHASA KOMUNIKASI YANG RAMAH PUBLIK
- **Display Typography**: 'Plus Jakarta Sans' (bobot 700 hingga 900) dengan karakter hangat, profesional, dan melegakan.
- **Body Typography**: 'Plus Jakarta Sans' (bobot 400 hingga 600) untuk penjelasan jenis perawatan, garansi tambalan, dan formulir jadwal periksa.
- **Data & Metric Monospace**: 'JetBrains Mono' untuk pembacaan shade gigi (A3/B1), durasi menit tindakan, persentase kebersihan noda (%), dan nominal rupiah perawatan gigi.
- **Bebas Istilah Rumit / Membingungkan**: Menggunakan bahasa Indonesia yang lazim dan mudah dipahami: Pembersihan Karang Gigi (Scaling), Tambal Gigi Sesuai Warna Asli, Pemutihan Gigi (Bleaching), Pasang Behel Kawat Gigi, Cabut Gigi Bungsu Nyaman, Pemeriksaan Gigi Anak, Garansi Tambalan 6 Bulan, dan Ruang Privat Berlayar TV.

## 4. FITUR DAN KOMPONEN INTERAKTIF UTAMA
1. **Top Clinical & Comfort Telemetry Bar**:
   - Status live: Klinik Buka Hari Ini (09:00 - 21:00 WIB), Dokter Gigi Spesialis Ortodonti & Konservasi Standby, Sterilisasi Autoklaf Kelas B Terverifikasi, Garansi 6 Bulan Tambalan Estetik, Sakelar Musik Relaksasi 432Hz Aktif/Bisu, dan jam WIB real-time.
2. **Sticky Modern Dental Header**:
   - Identitas DENTIA SMILE STUDIO dengan lencana gigi toska cerah, navigasi satu baris (*Simulasi Senyum, Kalkulator Biaya, Paket Perawatan, Kenyamanan Pasien, Jadwal Periksa*), tombol pill keranjang paket perawatan, dan tombol utama *Booking Jadwal*.
3. **Interactive Feature 1: Simulator Tingkat Kecerahan Gigi (Canvas HTML5)**:
   - Visualisasi gigi senyum interaktif yang menampilkan tingkat kecerahan gigi (VITA Shade Guide) dari shade A4/A3 (kuning kopi/teh) hingga B1/BL1 (putih cerah alami bercahaya).
   - Penggeser Tingkat Kecerahan (*Shade Slider*: Level 1 hingga 8).
   - Indikator Visual Pembersihan Noda Kopi/Teh (*Progress Bar %*).
   - Telemetri Dinamis: Peningkatan Kecerahan (+2 hingga +8 Tingkat), Estimasi Durasi Sesi (~45 Menit), dan Ketahanan Hasil (12-24 Bulan).
   - Tombol **Simulasikan Hasil Pemutihan Maksimal**: Gigi seketika bersinar putih mutiara dengan efek animasi kilau bintang (*sparkle*) di atas canvas!
4. **Interactive Feature 2: Kalkulator Estimasi Biaya Perawatan Gigi (Interactive Cost Calculator)**:
   - Langkah 1: Kategori Pasien (*Dewasa / Remaja* vs *Anak-Anak*).
   - Langkah 2: Checklist Layanan Gigi Transparan:
     - [x] Pembersihan Karang Gigi (Scaling) & Polishing (Rp 250.000)
     - [x] Tambal Gigi Komposit Sinar Sesuai Warna Gigi (Rp 300.000)
     - [ ] Pemutihan Gigi Profesional / In-Office Bleaching (Rp 1.500.000)
     - [ ] Pemasangan Behel Kawat Gigi Metal Mini (Rp 4.500.000)
     - [ ] Pencabutan Gigi Bungsu Miring / Odontektomi (Rp 1.200.000)
     - [ ] Aplikasi Topikal Fluoride Pelindung Gigi (Rp 150.000)
   - Kartu Ringkasan Sticky Berwarna Slate Pine: Menghitung total estimasi biaya, perkiraan waktu pengerjaan (~menit), konsultasi pertama gratis, dan tombol *Booking Jadwal via WhatsApp*.
5. **Interactive Feature 3: 4 Pilihan Paket Perawatan Gigi Lengkap**:
   - 1. *Paket Senyum Segar Rutin* (Scaling 2 rahang, polishing noda, periksa kamera intraoral, konsultasi gratis) — Rp 280.000 (~40 Menit)
   - 2. *Paket Behel Senyum Rapi (Paling Populer)* (Pemasangan behel metal mini rahang atas & bawah, gratis cetak gigi 3D, gratis scaling, cicilan 0%) — Rp 4.800.000
   - 3. *Paket Pemutihan Gigi Glowing* (Gel bleaching internasional, aktivasi sinar LED dingin, scaling persiapan, serum anti ngilu) — Rp 1.650.000 (~60 Menit)
   - 4. *Paket Gigi Anak Ceria* (Pembersihan plak, fluoride rasa buah, edukasi sikat gigi, hadiah balon karakter & stiker keberanian) — Rp 230.000 (~30 Menit)
   - Setiap paket dilengkapi tombol langsung "+ Tambah ke Keranjang".
6. **Interactive Feature 4: 4 Jaminan Kenyamanan Pasien (Anti Takut)**:
   - Bius Lembut Minim Sakit dengan Jarum Super Tipis, Sterilisasi Standar Medis Autoklaf Kelas B Segel Terbuka di Depan Pasien, Ruang Perawatan Privat dengan Layar TV Netflix di Plafon, dan Konsultasi Ramah Transparan.
7. **Interactive Feature 5: Formulir Reservasi Jadwal Periksa Gigi Bebas Antre**:
   - Pilihan tanggal periksa, pilihan slot jam (*Pagi, Siang, Sore, Malam*), nama pasien, nomor WhatsApp, pilihan dokter spesialis, dan keluhan gigi dengan pesan WhatsApp otomatis terstruktur.
8. **Interactive Feature 6: Slide-Over Cart Drawer & WhatsApp Direct Booking**:
   - Laci geser pesanan paket perawatan, tombol hapus paket, kalkulasi estimasi total, dan checkout WhatsApp instan.
9. **Interactive Feature 7: Synthesizer Musik Relaksasi Meditatif 432Hz (Web Audio API)**:
   - Menghasilkan nada gelombang sinus frekuensi 432Hz yang lembut dan harmonis untuk meredakan ketegangan pasien di ruang tindakan tanpa file eksternal. Tombol sakelar aktif/bisu tersedia di bilah status atas.

## 5. ARSITEKTUR STRUKTUR KONTEN
- **Hero Section**: Judul inspiratif ramah keluarga, badge perawatan modern, metrik kepercayaan (100% Nyaman, Sterilisasi Kelas B, 12.000+ Senyum Sehat), tombol simulasi senyum & kalkulator biaya, serta kartu foto pasien tersenyum bahagia.
- **Interactive Simulator Section**: Simulator tingkat kecerahan gigi Canvas HTML5 dengan penggeser shade guide dan pembacaan telemetri peningkatan warna gigi.
- **Cost Calculator Section**: Pemilihan kategori pasien dan checklist menu tindakan dengan kartu hasil kalkulator sticky berwarna slate pine.
- **Dental Packages Section**: Grid 4 kartu paket perawatan gigi keluarga dengan penanda paket paling populer dan tombol tambah ke keranjang.
- **Comfort Guarantees Section**: 4 pilar jaminan ketenangan dan pengalaman tanpa rasa takut.
- **Booking Form Section**: Formulir reservasi kedatangan bebas antre dengan tanggal dan slot waktu.
- **Footer**: Kontak resmi WhatsApp klinik, lokasi fisik di Bandung, jam praktik dokter, dan hak cipta.

## 6. PRINSIP DESAIN KONTEN & ANTI-SLOP (NO AI-SLOP)
- **Zero Confusion**: Dilarang memuat istilah binaraga, kriya kuno, atau bahasa asing misterius yang tidak dimengerti publik. Semua salinan teks wajib ramah, menenangkan, dan jelas bagi seluruh keluarga di Indonesia.
- **Honest Pricing**: Seluruh harga tertera dalam Rupiah riil tanpa biaya dokter tersembunyi atau biaya pendaftaran terselubung.
- **Clean Responsive Single File**: File mandiri (Single File HTML5/CSS/JS) dengan performa tinggi, animasi CSS GPU-accelerated yang mulus, dan adaptasi sempurna untuk smartphone hingga layar monitor lebar.
`;
