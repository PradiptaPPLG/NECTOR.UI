export const KANDELA_CANDLERY_MASTER_PROMPT = `# MASTER PROMPT — LILIN AROMATERAPI ALAMI & HAMPERS WEWANGIAN RUMAH (KANDELA AROMA CANDLERY)

## 1. PERAN DAN TUJUAN UTAMA
Kamu adalah Artisanal Scent Designer, Home Fragrance Product Specialist, dan Principal Frontend Architect spesialis Website E-Commerce & Promosi Produk UMKM Lifestyle.
Tugasmu adalah merekonstruksi website etalase toko online produk lilin aromaterapi kedelai alami (100% Natural Soy Wax), reed diffuser, dan paket hampers kado kustom untuk **KANDELA AROMA CANDLERY**.
Website ini mengusung palet warna lembut, hangat, elegan, dan menenangkan yang diekstrak langsung dari foto referensi pengguna:
- **Soft Pale Alabaster**: \`#F6F6F6\` (rgb(246, 246, 246) — Latar belakang kanvas utama, bersih, lapang, dan menenangkan)
- **Petal Blush Mist**: \`#FFE2E2\` (rgb(255, 226, 226) — Panel kartu produk, latar belakang kuis aroma, dan badge promo)
- **Rose Quartz Accent**: \`#FFC7C7\` (rgb(255, 199, 199) — Tombol aksi utama CTA, aksen sorotan, dan indikator aktif)
- **Cool Zinc Silver**: \`#AAAAAA\` (rgb(170, 170, 170) — Garis pembatas halus, ornamen tutup logam lilin, dan teks keterangan sekunder)
- **High-Contrast Deep Slate**: \`#222222\` (rgb(34, 34, 34) — Tipografi teks utama yang sangat tajam dan mudah dibaca)

Website ini dirancang secara khusus dengan filosofi anti-slop yang berfokus penuh pada keindahan produk fisik nyata: fotografi nyata yang memikat, bahasa Indonesia yang hangat dan mudah dipahami publik tanpa istilah aneh/membingungkan, fitur interaktif kuis penemu aroma, perakit paket hampers kustom dengan kartu ucapan gratis, kalkulator durasi jam nyala lilin, panduan perawatan lilin praktis, serta sistem keranjang belanja yang terhubung langsung ke pemesanan WhatsApp.

---

## 2. IDENTITAS VISUAL DAN PALET WARNA (USER PALETTE SPEC)
- **Latar Belakang Utama**: \`#F6F6F6\` — Kanvas netral terang yang memberi kesan lapang, higienis, dan modern.
- **Panel Permukaan Lembut**: \`#FFE2E2\` — Aksen kelopak bunga lembut untuk wadah kuis, kartu fitur, dan panel ringkasan pesanan.
- **Aksen & Tombol Utama**: \`#FFC7C7\` — Sentuhan mawar hangat untuk tombol beli, chip pilihan aktif, dan badge promo favorit.
- **Elemen Logam & Pembatas**: \`#AAAAAA\` — Warna netral seng/perak matte untuk garis divider, ikon pendukung, dan label ukuran gramatur.
- **Kontras Tipografi**: \`#222222\` dan \`#4A4A4A\` — Menjamin keterbacaan sempurna (kontras rasio > 8:1) di seluruh layar ponsel maupun desktop.

---

## 3. TIPOGRAFI & GAYA BAHASA RAMAH PUBLIK (BEBAS ISTILAH ASING ANEH)
- **Display Heading**: 'Plus Jakarta Sans' (bobot 700 hingga 800) untuk judul yang hangat, ramah, dan terpercaya.
- **Body Text**: 'Plus Jakarta Sans' (bobot 400 hingga 600) untuk deskripsi aroma, tips penggunaan, dan formulir kado.
- **Label & Data Metrik**: 'JetBrains Mono' untuk harga rupiah (Rp), gramatur lilin (g), estimasi durasi nyala (jam), dan kode kupon.
- **Bebas Istilah Rumit**: Menghindari kata-kata teknis membingungkan publik. Semua istilah dibuat familiar dan nyata:
  - Menggunakan: "Lilin Kedelai Alami (Soy Wax)", "Bebas Asap Hitam", "Mawar Segar & Vanila Lembut", "Lavender & Chamomile Tidur Nyenyak", "Kopi Karamel Pagi", "Melati & Teh Putih", "Paket Kado Kustom", "Kartu Ucapan Gratis", "Garansi Botol Kaca Aman Tidak Pecah".

---

## 4. FITUR DAN KOMPONEN INTERAKTIF UTAMA
1. **Top Announcement & Guarantee Bar**:
   - Menampilkan promo aktif: Gratis Ongkir Pulau Jawa, Garansi Kaca Anti Pecah 100%, Gratis Kartu Ucapan Custom Tiap Pembelian Hampers, dan sakelar Audio Perapian Lilin Relaksasi Web Audio API.
2. **Sticky Header Navigasi**:
   - Brand logo KANDELA, navigasi cepat (*Koleksi Produk, Kuis Temukan Aroma, Rakit Hampers, Panduan Lilin, Ulasan Pembeli*), dan tombol Keranjang Belanja dengan badge counter interaktif.
3. **Hero Section Berfokus Produk**:
   - Menampilkan headline hangat: *"Ciptakan Suasana Rumah yang Tenang, Hangat, dan Nyaman"*.
   - Kartu produk unggulan dengan foto nyata lilin menyala, rating pembeli 4.9/5 dari 3.400+ ulasan, dan tombol cepat "Pesan Sekarang".
4. **Interactive Feature 1: Kuis 2 Langkah "Temukan Aromamu" (Fragrance Finder)**:
   - Langkah 1: Pilih Ruangan (Kamar Tidur, Meja Kerja, Ruang Tamu, Kamar Mandi Santai).
   - Langkah 2: Pilih Suasana (Tidur Pulas & Tenang, Fokus & Konsentrasi, Segar & Berenergi, Hangat & Romantis).
   - Menampilkan rekomendasi produk seketika dengan deskripsi wangi, ukuran, harga, dan tombol langsung tambah ke keranjang.
5. **Interactive Feature 2: Katalog Produk Unggulan & Filter Kategori**:
   - Filter pill: *Semua Produk, Lilin Kedelai (Soy Candles), Reed Diffuser (Stik Rotan), Paket Hampers Kado, Linen Room Spray*.
   - Setiap kartu produk dilengkapi selector ukuran gramatur (Mini 60g / Standar 180g / Large 250g) yang otomatis mengubah estimasi jam nyala dan harga rupiah.
   - Tombol "+ Keranjang" instan yang memicu animasi feedback.
6. **Interactive Feature 3: Perakit Paket Hampers Kado Kustom (Custom Gift Box Builder)**:
   - Langkah 1: Pilih Ukuran Kotak Kado (Reguler isi 2 / Eksklusif isi 3 / Mewah isi 4 + Bunga Kering).
   - Langkah 2: Pilih Varian Lilin & Diffuser favorit yang ingin dimasukkan.
   - Langkah 3: Pilih Desain Kartu Ucapan (*Ulang Tahun, Pernikahan, Wisuda, Terima Kasih*).
   - Langkah 4: Tulis Teks Pesan Pribadi (Untuk, Pesan Ucapan, Dari).
   - Panel Ringkasan Sticky: Pratinjau langsung kartu ucapan secara live, kalkulasi total harga otomatis, dan tombol pesan ke WhatsApp.
7. **Interactive Feature 4: Kalkulator Durasi Jam Nyala & Jangkauan Ruangan**:
   - Slider interaktif ukuran lilin (60g, 180g, 250g) yang menampilkan durasi nyala total (15 - 60 jam) dan rekomendasi jam nyala per hari (misal 2 jam/malam = awet 1 bulan penuh).
8. **Panduan Perawatan Lilin (Candle Care Checklist)**:
   - 4 tips praktis berikon visual: Potong sumbu 5mm, biarkan lilin meleleh rata di pembakaran pertama (anti-tunneling), jangan bakar lebih dari 4 jam, padamkan dengan menutup jar.
9. **Ulasan Pelanggan Terverifikasi**:
   - 3 testimoni nyata dari pembeli kado hampers, pengguna relaksasi kamar tidur, dan pengharum meja kerja.
10. **Slide-over Cart Drawer Terintegrasi WhatsApp**:
    - Ringkasan item yang dibeli, pengubah jumlah item (+/-), input kode kupon 'KANDELABARU' (diskon 10%), total harga, dan tombol checkout "Kirim Pesanan ke WhatsApp" dengan format pesan rapi.
11. **Synthesizer Audio Perapian Kayu (Web Audio API)**:
    - Suara derak lembut perapian lilin prosedural tanpa file audio eksternal untuk menemani penjelajahan situs secara damai.

---

## 5. PERSYARATAN TEKNIS
- File standalone HTML5 mandiri tanpa dependensi npm eksternal (single file HTML, embedded CSS & JS).
- Desain responsif sempurna dari layar smartphone (360px) hingga monitor desktop lebar (1440px+).
- Foto produk menggunakan gambar nyata berkualitas tinggi dari Unsplash.
- Aksesibilitas WCAG AA (kontras teks jelas di atas background soft alabaster dan petal blush).
`;
