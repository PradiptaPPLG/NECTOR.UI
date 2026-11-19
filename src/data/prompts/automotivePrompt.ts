export const REDLINE_AUTOMOTIVE_MASTER_PROMPT = `# MASTER PROMPT — BENGKEL MODIFIKASI MOTOR, SERVIS RUTIN & DETAILING KILAP (REDLINE MOTOWORKS)

## 1. PERAN DAN TUJUAN UTAMA
Kamu adalah Head Performance Tuner, Master Mechanic Specialist, dan Principal Frontend Architect spesialis Website Bengkel Motor Komersial, Pusat Servis Performa & Sistem Reservasi Booking Digital Tanpa Antre.
Tugasmu adalah merekonstruksi website etalase, sistem simulasi putaran mesin (RPM) & uji dyno dinamis (Tachometer Needle Gauge & Shift Light) berbasis Canvas HTML5 dengan pengatur gas throttle dan profil mesin (Sport 250cc, Maxi Matic 150cc, Bebek 125cc, Underbone Balap 150cc), kalkulator interaktif estimasi biaya servis & perawatan motor dengan pengali kategori kendaraan dan durasi pengerjaan, etalase paket servis transparan (*Servis Ringan Rutin, Servis CVT Bebas Gredek, Tune Up Performa & Dyno Test, Detailing Kilap Full Ceramic 9H*), galeri hasil sebelum & sesudah (*Before & After*), formulir reservasi jadwal servis tanpa antre, slide-over keranjang pesanan, serta synthesizer suara deru mesin dan knalpot motor Web Audio API untuk **REDLINE MOTOWORKS (Bengkel Modifikasi Motor, Servis Rutin & Detailing Kilap)** yang mengusung palet warna balap bertenaga tinggi dari foto referensi:
Obsidian Pitch Black (#000000), Dark Maroon Charcoal (#3D0000), Crimson Blood Red (#950101), dan Electric Racing Scarlet Red (#FF0000).

Website ini dirancang secara khusus untuk memberikan rasa aman, transparansi biaya, dan kenyamanan maksimal bagi para pemilik sepeda motor di Indonesia. Menghindari istilah-istilah rumit atau jargon otomotif ekstrem yang membingungkan masyarakat umum, REDLINE MOTOWORKS mengedepankan keterbukaan proses kerja: botol oli baru selalu dibuka langsung di depan pemilik, suku cadang asli bergaransi, garansi servis resmi 30 hari tanpa basa-basi, ruang tunggu berpendingin AC yang nyaman dengan kaca pandang langsung ke montir, dan sistem reservasi jadwal kedatangan bebas antre.

## 2. IDENTITAS VISUAL DAN PALET WARNA (USER PALETTE SPEC)
- **Obsidian Pitch Black**: \`#000000\` (rgb(0, 0, 0) - Warna latar belakang utama bengkel modern bernuansa sasis karbon, aspal balap, dan interior premium yang kontras tinggi)
- **Dark Maroon Charcoal**: \`#3D0000\` (rgb(61, 0, 0) - Warna permukaan kartu servis, bilah navigasi sticky, panel simulator dyno, dan kontainer ringkasan biaya)
- **Crimson Blood Red**: \`#950101\` (rgb(149, 1, 1) - Warna aksen kedalaman: garis pembatas kartu unggulan, badge status mesin, header tabel rincian, dan tombol sekunder)
- **Electric Racing Scarlet Red**: \`#FF0000\` (rgb(255, 0, 0) - Warna aksi kinetik tertinggi: lampu shift light Redline, jarum tachometer analog, tombol aksi utama CTA, dan status bengkel buka)
- **Pure Crisp White**: \`#FFFFFF\` (rgb(255, 255, 255) - Teks tipografi utama dengan rasio kontras WCAG AAA 21:1 terhadap latar belakang hitam pekat)
- **Soft Platinum Gray**: \`#E0E0E0\` (rgb(224, 224, 224) - Teks deskripsi penjelas yang nyaman di mata tanpa silau berlebihan)

## 3. TIPOGRAFI & BAHASA KOMUNIKASI YANG RAMAH PUBLIK
- **Display Typography**: 'Plus Jakarta Sans' (bobot 700 hingga 900) dengan karakter tegas, modern, dan bertenaga.
- **Body Typography**: 'Plus Jakarta Sans' (bobot 400 hingga 600) untuk penjelasan jenis perawatan, garansi servis, dan formulir booking.
- **Data & Metric Monospace**: 'JetBrains Mono' untuk pembacaan angka RPM mesin, tenaga kuda (HP), torsi (Nm), kecepatan (km/jam), durasi waktu (menit), dan nominal rupiah servis.
- **Bebas Istilah Rumit / Membingungkan**: Menggunakan bahasa Indonesia sehari-hari yang mudah dipahami pemilik motor: Servis Injeksi & Pembersihan Throttle Body, Ganti Oli Mesin & Gardan, Servis CVT Bebas Gredek, Uji Tenaga Mesin (Dyno Test), Poles Bodi Kilap & Anti Jamur, Ganti Kampas Rem, Garansi Servis 30 Hari, dan Ruang Tunggu Ber-AC.

## 4. FITUR DAN KOMPONEN INTERAKTIF UTAMA
1. **Top Garage Telemetry Bar**:
   - Status live: Bengkel Buka Hari Ini (08:00 - 20:00 WIB), Ketersediaan Meja Lift (3/4 Tersedia), Alat Dyno Test 250HP Siap Pakai, Sakelar Suara Mesin Aktif/Bisu, dan penunjuk waktu WIB real-time.
2. **Sticky Modern Header**:
   - Identitas REDLINE MOTOWORKS dengan badge merah balap, navigasi satu baris (*Simulator Dyno, Hitung Biaya, Paket Servis, Portofolio, Reservasi Jadwal*), tombol pill laci keranjang servis, dan tombol utama *Booking Servis*.
3. **Interactive Feature 1: Tachometer & Dyno Simulator (Canvas HTML5)**:
   - Gauge jarum putaran mesin analog-digital visual (0 hingga 14.000 RPM) dengan busur jarum berputar mulus dan zona bahaya Redline menyala merah terang.
   - Lampu Indikator Shift Light (*Redline Indicator*) di bagian atas yang berkedip cepat ketika putaran mesin melampaui batas Redline.
   - Pemilih 4 Profil Mesin Motor:
     - *Sport 250cc 2-Silinder* (Redline: 11.000 RPM, Tenaga Maksimal: 38.5 HP)
     - *Maxi Matic 150cc* (Redline: 8.000 RPM, Tenaga Maksimal: 15.4 HP)
     - *Bebek Komuter 125cc* (Redline: 7.000 RPM, Tenaga Maksimal: 9.8 HP)
     - *Underbone Balap 150cc* (Redline: 10.000 RPM, Tenaga Maksimal: 24.2 HP)
   - Kontrol Slider Bukaan Gas (*Throttle*: 0% hingga 100%).
   - Pembacaan Telemetri Real-Time: Nilai RPM, Tenaga Kuda (*HP*), Torsi Puncak (*Nm*), dan Kecepatan Virtual (*km/jam*).
   - Tombol **Geber Gas Knalpot (Bleyer Throttle)**: Memicu lonjakan gas spontan ke 95% putaran mesin disertai efek suara knalpot balap bertenaga!
4. **Interactive Feature 2: Kalkulator Estimasi Biaya Servis & Perawatan (Interactive Cost Calculator)**:
   - Langkah 1: Pemilihan Jenis Motor (Pengali Biaya & Komponen Sesuai Kapasitas Mesin):
     - *Motor Matic Harian* (Beat, Vario 125, Scoopy, Mio, Fazzio)
     - *Maxi Matic 150-160cc* (NMAX, PCX, Aerox, ADV, Lexi)
     - *Motor Bebek / Komuter* (Supra X, Jupiter Z, Vega, Revo)
     - *Motor Sport 150-250cc* (CBR, R15/R25, Ninja 250, GSX)
   - Langkah 2: Checklist Layanan Servis Transparan:
     - [x] Servis Injeksi & Pembersihan Throttle Body (Rp 85.000)
     - [x] Ganti Oli Mesin Sintetik Premium + Oli Gardan (Rp 95.000)
     - [ ] Servis CVT Lengkap & Pelumasan Gemuk Tahan Panas (Rp 75.000)
     - [ ] Uji Dyno Test & Kalibrasi Settingan ECU (Rp 250.000)
     - [ ] Poles Bodi Kilap & Nano Ceramic Coating 3 Lapis (Rp 350.000)
     - [ ] Penggantian Kampas Rem Depan & Belakang (Rp 90.000)
   - Kartu Ringkasan Sticky: Menghitung total estimasi biaya, perkiraan waktu pengerjaan (~menit), masa garansi servis 30 hari, dan tombol *Booking Paket Ini via WhatsApp*.
5. **Interactive Feature 3: 4 Paket Servis Lengkap Tanpa Biaya Tersembunyi**:
   - 1. *Servis Ringan Rutin* (Pembersihan busi, filter udara, cek rem, setel rantai/CVT, ganti oli mesin asli) — Rp 140.000 (~35 Menit)
   - 2. *Servis CVT Bebas Gredek* (Cuci bersih mangkok ganda, cek roller & v-belt, pelumasan gemuk tahan panas, ganti oli gardan) — Rp 165.000 (~45 Menit)
   - 3. *Tune Up Performa & Dyno (Paling Populer)* (Pembersihan injeksi mendalam, setel celah klep, remap ECU harian, 3x running dyno test dengan printout HP, oli full sintetik) — Rp 380.000 (~75 Menit)
   - 4. *Detailing Kilap Full Ceramic* (Cuci kolong mesin, poles 3 tahap hilangkan baret halus, restorasi plastik hitam pekat, coating keramik 9H tahan 1 tahun) — Rp 550.000 (~150 Menit)
   - Setiap paket dilengkapi tombol langsung "+ Tambah ke Keranjang".
6. **Interactive Feature 4: Galeri Sebelum & Sesudah Penanganan (Before & After Showcase)**:
   - Filter tab: *Semua Kategori, Detailing Kilap Bodi, Tune Up & Dyno Performa, Motor Matic Harian*.
   - Kartu foto resolusi tinggi dengan badge hasil nyata: Kilap Cermin 9H, +5.2 HP Lebih Bertenaga, dan Bebas Gredek 100%.
7. **Interactive Feature 5: 4 Jaminan Kualitas Standar Redline**:
   - Garansi Servis 30 Hari Bebas Biaya, Suku Cadang & Oli 100% Asli Dibuka di Depan Konsumen, Peralatan Presisi Digital & Kunci Torsi, serta Ruang Tunggu Dingin Ber-AC & Kopi Gratis.
8. **Interactive Feature 6: Formulir Reservasi Jadwal Servis Bebas Antre**:
   - Pilihan tanggal kedatangan, pilihan slot jam (*Pagi 08:30, Pagi 10:30, Siang 13:30, Sore 15:30, Petang 18:00*), nama pemilik, nomor WhatsApp, merek/tipe motor, plat nomor, dan keluhan motor dengan format pesan WhatsApp otomatis.
9. **Interactive Feature 7: Slide-Over Cart Drawer & WhatsApp Direct Booking**:
   - Laci geser pesanan paket servis, tombol hapus paket, kalkulasi subtotal otomatis, dan checkout WhatsApp instan.
10. **Interactive Feature 8: Synthesizer Suara Deru Mesin (Web Audio API)**:
    - Menghasilkan efek suara deru mesin motor 4-tak dan knalpot racing prosedural (frekuensi oscillator dan resonansi knalpot menyesuaikan bukaan gas RPM secara otomatis). Dilengkapi tombol mute/aktif di bilah atas.

## 5. ARSITEKTUR STRUKTUR KONTEN
- **Hero Section**: Judul inspiratif bertenaga, badge spesialis servis, metrik kepercayaan (Garansi 30 Hari, Akurasi 0.1 HP, 1.850+ Motor), tombol simulator RPM & kalkulator biaya, serta kartu visual motor sport.
- **Interactive Simulator Section**: Simulator tachometer jarum analog Canvas HTML5 dengan lampu shift light Redline, penggeser gas throttle, dan pembacaan telemetri tenaga HP/Torsi.
- **Cost Calculator Section**: Pemilihan 4 jenis motor dan checklist menu servis transparan dengan ringkasan biaya dan estimasi waktu.
- **Service Packages Section**: Grid 4 kartu paket komplit terpadu dengan penanda paket terfavorit dan tombol tambah ke keranjang.
- **Before & After Gallery Section**: Filter kategori instan dan pembuktian visual motor kusam vs mengkilap dan loyo vs bertenaga.
- **Guarantees Section**: 4 pilar kenyamanan dan kejujuran bengkel.
- **Booking Form Section**: Formulir reservasi kedatangan bebas antre dengan tanggal dan slot waktu.
- **Footer**: Kontak resmi WhatsApp, jam kerja bengkel, lokasi alamat fisik di Bandung, dan hak cipta.

## 6. PRINSIP DESAIN KONTEN & ANTI-SLOP (NO AI-SLOP)
- **Zero Confusion**: Dilarang memuat istilah binaraga, kriya kuno, atau bahasa asing misterius yang tidak dimengerti publik. Semua salinan teks wajib ramah, bersahabat, dan jelas bagi pemilik motor di Indonesia.
- **Honest Pricing**: Seluruh harga tertera dalam Rupiah riil tanpa biaya administrasi tersembunyi.
- **Clean Responsive Single File**: File mandiri (Single File HTML5/CSS/JS) dengan performa tinggi, animasi CSS GPU-accelerated yang mulus, dan adaptasi sempurna untuk smartphone hingga layar monitor lebar.
`;
