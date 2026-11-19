export const LUMINA_PHOTOGRAPHY_MASTER_PROMPT = `# MASTER PROMPT — STUDIO FOTOGRAFI POTRET, PRE-WEDDING & RUANG KREATIF (LUMINA STUDIO)

## 1. PERAN DAN TUJUAN UTAMA
Kamu adalah Creative Director Studio Fotografi Profesional, Lighting Specialist, dan Frontend Architect spesialis Website Studio Foto, Portofolio Kreatif & Sistem Booking Langsung WhatsApp.
Tugasmu adalah merekonstruksi website etalase, sistem simulasi pencahayaan foto dan nuansa warna (Golden Hour, Softbox Studio, Pagi Alami, Malam Sinematik) berbasis Canvas HTML5 dengan kontrol exposure dan suhu warna Kelvin, kalkulator interaktif biaya paket foto dan tambahan cetak kanvas/album fisik, galeri portofolio dengan filter kategori instan (*Pre-Wedding, Wisuda & Personal, Keluarga, Produk & Brand*), synthesizer suara shutter kamera mekanik Web Audio API, serta sistem reservasi tanggal sesi pemotretan terintegrasi WhatsApp untuk **LUMINA (Studio Fotografi Potret, Pre-Wedding & Ruang Kreatif)** yang mengusung palet warna senja hangat dan langit petang dari foto referensi:
Sunset Coral Rose (#F67280), Dusty Berry Plum (#C06C84), Twilight Slate Lavender (#6C5B7B), dan Deep Ocean Slate Navy (#355C7D).

Website ini dibangun untuk memberikan pengalaman pemesanan jasa fotografi yang ramah, transparan, dan tidak membingungkan publik. Menghindari istilah-istilah teknis asing yang rumit, LUMINA mengedepankan kejelasan layanan: sesi foto yang santai tanpa pose kaku, pencahayaan alami melalui jendela kaca besar studio, pengarah gaya yang membimbing pose secara natural, garansi pengeditan cepat 48 jam, dan kepastian seluruh file foto mentah beresolusi tinggi langsung diberikan kepada klien.

## 2. IDENTITAS VISUAL DAN PALET WARNA (USER PALETTE SPEC)
- **Sunset Coral Rose**: \`#F67280\` (rgb(246, 114, 128) - Warna hangat matahari terbenam: aksen tombol utama CTA, badge status aktif, slider pencahayaan, dan highlight harga paket)
- **Dusty Berry Plum**: \`#C06C84\` (rgb(192, 108, 132) - Warna anggun buah berry: label kategori portofolio, teks sekunder, dan garis batas kartu)
- **Twilight Slate Lavender**: \`#6C5B7B\` (rgb(108, 91, 123) - Warna langit petang: sub-heading, ikon fasilitas, dan pemisah konten yang lembut)
- **Deep Ocean Slate Navy**: \`#355C7D\` (rgb(53, 92, 125) - Warna biru samudra senja: bilah status atas, kartu ringkasan biaya, header, dan footer studio)
- **Warm Studio Porcelain**: \`#FFFDFC\` / \`#F9F7F5\` (rgb(255, 253, 252) - Warna kanvas latar belakang studio yang hangat, bersih, dan terang)
- **Deep Navy Charcoal**: \`#1B263B\` (rgb(27, 38, 59) - Teks tipografi bodi tajam dengan rasio kontras WCAG AAA 14:1+ untuk keterbacaan sempurna di semua ukuran layar)

## 3. TIPOGRAFI & BAHASA KOMUNIKASI YANG RAMAH PUBLIK
- **Display Typography**: 'Playfair Display' (bobot 500 hingga 700) untuk tajuk utama yang hangat, bersahabat, dan bernuansa editorial elegan.
- **Body & Interface Typography**: 'Plus Jakarta Sans' (bobot 400 hingga 800) untuk penjelasan paket, rincian biaya, formulir booking, dan navigasi yang bersih.
- **Data & Numeric Monospace**: 'JetBrains Mono' untuk nilai Kelvin suhu warna (3.600K), nilai Exposure (+0.3 EV), durasi menit, dan nominal rupiah.
- **Bebas Istilah Rumit / Membingungkan**: Menggunakan bahasa Indonesia yang lugas, hangat, dan mudah dipahami publik: Sesi Foto Wisuda, Foto Pre-Wedding Luar Ruangan, Foto Keluarga Bahagia, Cetak Kanvas Minimalis, Album Hardcover Linen, Cahaya Alami Matahari Sore, dan Pengarah Pose Ramah.

## 4. FITUR DAN KOMPONEN INTERAKTIF UTAMA
1. **Top Status & Studio Telemetry Bar**:
   - Status live: Studio Foto Bandung Buka Hari Ini, Jadwal Sesi Sore Tersisa 2 Slot Golden Hour, Kamera Full-Frame Resolusi Tinggi, Waktu Edit Cepat 48 Jam, Sakelar Suara Shutter Kamera Aktif/Bisu, dan jam WIB real-time.
2. **Sticky Modern Header**:
   - Logo merek LUMINA, navigasi satu baris (*Simulasi Cahaya, Paket & Biaya, Portofolio, Fasilitas Studio, Jadwal & Booking*), tombol pill keranjang paket foto, dan tombol utama *Booking Jadwal*.
3. **Interactive Feature 1: Simulator Pencahayaan & Nuansa Foto (Canvas HTML5)**:
   - Menampilkan visualisasi potret siluet interaktif yang merefleksikan pencahayaan studio nyata.
   - 4 Pilihan Nuansa Cahaya:
     - *Sunset Golden Hour*: Nuansa hangat keemasan senja (3.400K) dengan bayangan lembut.
     - *Studio Softbox Elegan*: Pencahayaan baur merata tanpa bayangan keras untuk wisuda dan profil formal.
     - *Cahaya Pagi Alami*: Terang, segar, dan natural seperti cahaya jendela matahari pagi.
     - *Nuansa Malam Sinematik*: Dramatis, berkarakter, dan intim dengan kontras tegas.
   - Kontrol Slider Interaktif:
     - Kecerahan Cahaya (*Exposure*: -1.5 EV hingga +1.5 EV).
     - Suhu Warna (*White Balance*: 3.000K hingga 6.500K).
   - Tombol **Jepret Foto Sekarang**: Memicu kilatan flash putih lembut di atas canvas dan efek suara shutter kamera mekanik yang realistis.
4. **Interactive Feature 2: Kalkulator Paket Foto & Pilihan Tambahan (Interactive Cost Calculator)**:
   - Pemilih 4 Paket Foto Utama:
     1. *Potret Personal & Wisuda* (1-2 Orang, 60 Menit, 10 Foto Edit, Semua File Asli) — Rp 650.000
     2. *Foto Keluarga & Grup* (Hingga 8 Orang, 90 Menit, 20 Foto Edit, Cetak 10R) — Rp 1.250.000
     3. *Pre-Wedding Studio & Outdoor* (Studio & Alam Dago, 3 Jam, 35 Foto Edit, Video Teaser) — Rp 2.800.000
     4. *Dokumentasi Acara / Ulang Tahun* (2 Jam Dokumentasi, 50+ Foto Siap Cetak) — Rp 1.950.000
   - Pilihan Tambahan (Add-ons Checklist):
     - Cetak Kanvas 40x60cm + Frame Kayu Minimalis (+Rp 350.000)
     - Album Foto Hardcover Linen 20 Halaman (+Rp 550.000)
     - Jasa Make-up Artist (MUA) Profesional (+Rp 400.000)
   - Kartu ringkasan total biaya transparan dan tombol instan *Booking Paket Ini via WhatsApp*.
5. **Interactive Feature 3: Galeri Portofolio dengan Filter Kategori Instan**:
   - Filter tab: *Semua Foto*, *Pre-Wedding*, *Wisuda & Personal*, *Keluarga*, *Produk & Brand*.
   - Kartu foto beresolusi tinggi dengan informasi lensa dan jenis pencahayaan yang mudah dipahami.
6. **Interactive Feature 4: 4 Fasilitas Kenyamanan Studio**:
   - Kartu fasilitas: Ruang Rias & Ganti Luas Berlampu Daylight, Lounge Santai dengan Kopi & Teh Gratis, Bukaan Kaca Cahaya Alami 5 Meter, dan Transfer Seluruh File Asli di Tempat.
7. **Interactive Feature 5: Formulir Reservasi Jadwal Sesi Foto**:
   - Pilihan tanggal, slot waktu sesi (*Pagi 09:00, Siang 13:00, Sore Golden Hour 16:00*), jumlah anggota keluarga, dan catatan konsep pakaian dengan pengiriman otomatis ke WhatsApp admin.
8. **Interactive Feature 6: Slide-Over Cart Drawer & WhatsApp Direct Booking**:
   - Laci geser untuk mengelola paket dan opsi cetak yang dipilih, tombol tambah/kurang kuantitas, kalkulasi subtotal otomatis, dan checkout WhatsApp terstruktur.
9. **Interactive Feature 7: Synthesizer Suara Shutter Kamera (Web Audio API)**:
   - Sintesis audio mekanik suara cermin dan tirai shutter kamera profesional (*mirror slap + curtain click*) yang memuaskan saat mengklik tombol atau berinteraksi dengan simulator.
`;
