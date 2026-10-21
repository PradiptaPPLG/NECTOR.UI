export const KANTIN_MASTER_PROMPT = `# MASTER PROMPT — REKONSTRUKSI WEBSITE KANTIN SEKOLAH DARI SCREENSHOT SECARA PIXEL-PERFECT

## 1. PERAN DAN TUJUAN UTAMA

Kamu adalah Senior Frontend Engineer, UI/UX Designer, dan Visual Reverse Engineering Specialist yang ahli merekonstruksi website dari screenshot dengan tingkat kemiripan visual setinggi mungkin.

Tugasmu adalah merekonstruksi website pada screenshot referensi yang dilampirkan menjadi website HTML yang semirip mungkin dengan sumber aslinya.

Jadikan screenshot sebagai **single source of truth** untuk seluruh keputusan desain. Jangan membuat desain alternatif, jangan melakukan redesign, jangan menyederhanakan layout, dan jangan mengganti gaya visual dengan interpretasimu sendiri.

Target utama adalah kemiripan visual pixel-perfect pada viewport yang sesuai dengan screenshot, tanpa mengorbankan responsivitas dan fungsi dasar website.

**Prioritas pengerjaan:**
1. Kemiripan visual dengan screenshot.
2. Ketepatan susunan section, ukuran, proporsi, dan jarak.
3. Ketepatan warna, tipografi, border, bayangan, dan gambar.
4. Kelengkapan seluruh elemen yang terlihat.
5. Fungsi interaksi website.
6. Responsivitas pada ukuran layar lain.

Jangan berhenti pada website yang hanya terlihat mirip secara umum. Lakukan implementasi, jalankan website, ambil screenshot hasilnya, bandingkan dengan referensi, lalu perbaiki perbedaannya secara iteratif.

## 2. ANALISIS SCREENSHOT SEBELUM CODING

Sebelum mengubah atau menulis kode:

- Periksa screenshot referensi secara menyeluruh.
- Identifikasi rasio aspek, resolusi, lebar konten, margin kiri-kanan, tinggi setiap section, dan posisi relatif semua komponen.
- Petakan hierarki visual dari atas ke bawah.
- Periksa jumlah kartu, urutan elemen, alignment, ukuran teks, serta hubungan antarkomponen.
- Perhatikan detail kecil seperti garis pembatas, label kategori, badge, ikon, tombol, separator, outline, shadow, dan teks mikro.
- Identifikasi jenis font yang paling mendekati screenshot.
- Analisis gambar makanan berdasarkan posisi, crop, rasio aspek, dan objek yang ditampilkan.
- Tentukan palet warna berdasarkan screenshot, bukan berdasarkan selera desain pribadi.
- Pertahankan proporsi vertikal halaman secara keseluruhan.

Jika informasi tidak dapat dipastikan hanya dari screenshot, gunakan estimasi visual yang paling masuk akal. Jangan mengarang komponen baru untuk mengisi area yang sebenarnya tidak memiliki komponen tersebut.

Jangan meminta pengguna menjelaskan kembali elemen yang sudah terlihat pada screenshot.

## 3. IDENTITAS VISUAL DAN DESIGN SYSTEM

Reproduksi gaya website kantin sekolah yang hangat, tradisional, elegan, dan editorial.

### Palet warna

Gunakan warna yang diambil atau diperkirakan dari screenshot referensi:

- Background utama: ivory atau warm cream, sekitar #F8F3EB.
- Warna hijau gelap utama: sekitar #19392C.
- Warna hijau sekunder: sekitar #294638.
- Warna oranye terakota: sekitar #C95632.
- Warna aksen emas: sekitar #E5BF58.
- Warna teks utama: cokelat kehitaman, sekitar #30271F.
- Warna teks sekunder: taupe atau cokelat abu-abu.
- Background kartu: putih hangat.
- Border: beige, taupe, atau cokelat tipis.

Nilai tersebut adalah titik awal, bukan pengganti hasil pengambilan warna dari screenshot. Sesuaikan kembali jika tersedia analisis piksel yang lebih akurat.

### Tipografi

Gunakan kombinasi:

- Serif display yang tebal, berkarakter editorial, dan elegan untuk headline serta judul utama.
- Sans-serif yang bersih dan mudah dibaca untuk deskripsi, navigasi, formulir, dan isi kartu.
- Font monospace atau gaya terminal hanya pada metadata kecil, status operasional, harga, dan elemen digital yang memang terlihat demikian.

Cari font yang paling mendekati bentuk huruf screenshot. Perhatikan ketebalan, ukuran, line-height, letter-spacing, dan lebar teks.

Jangan mengganti semua font dengan satu keluarga sans-serif generik.

### Bentuk dan efek

- Gunakan sudut membulat secukupnya, mengikuti screenshot.
- Terapkan border cokelat tipis pada panel tertentu.
- Gunakan bayangan yang realistis dan terkontrol.
- Pertahankan kontras antara panel terang dan panel hijau gelap.
- Hindari glassmorphism, gradient dekoratif berlebihan, neon, animasi yang tidak diperlukan, dan ornamen tambahan.
- Jangan menerapkan border-radius besar ke seluruh elemen.
- Jangan menghasilkan tampilan template AI generik.

## 4. STRUKTUR WEBSITE — WAJIB LENGKAP

Bangun seluruh halaman dari atas ke bawah. Tidak boleh ada section yang dilewati, dihilangkan, diganti dengan placeholder, atau diringkas menjadi section lain.

### SECTION A — TOP STATUS BAR

Buat bilah status horizontal paling atas dengan background hijau gelap.

Di sisi kiri, tampilkan:
- Indikator status kecil berwarna hijau atau aksen terang.
- Teks status kantin.
- Keterangan bahwa kantin dibuka.
- Informasi jam istirahat, termasuk jam mulai dan selesai.

Di sisi kanan, tampilkan:
- Informasi lokasi sekolah atau area belakang gedung.
- Nama sekolah.
- Informasi pojok kejujuran dan QRIS aktif.

Gunakan tipografi kecil bergaya monospace atau uppercase sesuai screenshot. Pertahankan susunan kiri-kanan, tinggi bilah, jarak antaritem, dan separator.

### SECTION B — HEADER DAN NAVIGASI

Buat header berwarna putih hangat dengan konten terpusat.

Sebelah kiri:
- Logo berbentuk kotak kecil dengan sudut membulat.
- Ikon ilustratif kantin atau makanan.
- Nama merek "KANTIN SELASAR."
- Tagline kecil di bawah nama merek.

Bagian tengah:
- Navigasi Daftar Jajan.
- Menu Spesial.
- Titip Pesan Kelas.
- Pojok Kejujuran.

Sebelah kanan:
- Tombol berbentuk kapsul untuk Nota Jajan.
- Ikon nota.
- Badge jumlah nota atau item yang sedang dipesan.

Tiru ukuran logo, posisi baseline, tinggi header, jarak navigasi, warna tombol aktif, dan pemisahan header dengan section berikutnya.

Header harus tetap rapi pada desktop dan berubah menjadi navigasi responsif pada perangkat kecil.

### SECTION C — HERO UTAMA

Buat hero dengan background warm cream dan layout dua kolom.

Kolom kiri berisi:

1. Badge kecil dengan ikon atau aksen dekoratif.
2. Judul editorial besar, tebal, dan terdiri dari beberapa baris:

   "Hangatnya Gorengan,
   Gurihnya Kuah Mie,
   Favorit Tiap Jam Istirahat."

3. Baris terakhir menggunakan warna oranye terakota dan gaya italic serif.
4. Paragraf pendek yang menjelaskan makanan, harga yang ramah, serta kemudahan memesan sebelum bel berbunyi.
5. Dua tombol CTA berdampingan:
   - Pilih Menu Jajan Sekarang.
   - Titip Pesan Jam Istirahat.

Tombol pertama menggunakan warna terakota dengan teks terang. Tombol kedua menggunakan background terang dengan outline gelap dan ikon kecil.

Kolom kanan berisi kartu promosi paket istirahat yang menonjol, dengan border cokelat, sudut membulat, dan shadow.

Isi kartu promosi:
- Foto makanan utama berukuran besar.
- Badge promosi di bagian atas foto.
- Label durasi atau waktu penyajian pada area foto.
- Judul "Paket Komplit Bel Istirahat".
- Deskripsi komposisi paket makanan.
- Beberapa chip kecil untuk kategori atau isi paket.
- Harga paket, termasuk satuan atau keterangan paket.
- Tombol "+ Jajan Paket".

Pertahankan ukuran relatif hero, lebar kedua kolom, posisi kartu, rasio gambar, jarak antarbagian, dan alignment seperti screenshot.

### SECTION D — TIGA KARTU KEUNGGULAN

Buat satu baris berisi tepat tiga kartu keunggulan.

Kartu pertama:
- Ikon pencarian atau inspeksi.
- Judul "Minyak Selalu Baru & Higienis".
- Deskripsi singkat mengenai kualitas minyak, kebersihan, dan proses pengolahan.

Kartu kedua:
- Ikon botol atau wadah.
- Judul "Titip Pesan Sebelum Bel".
- Deskripsi mengenai pemesanan sebelum istirahat melalui WhatsApp.

Kartu ketiga:
- Ikon makanan atau hati.
- Judul "Tradisi Pojok Kejujuran".
- Deskripsi tentang kejujuran siswa dan sistem pembayaran mandiri.

Gunakan background putih hangat, border lembut, shadow minimal, dan alignment ikon serta teks yang konsisten.

Jangan mengubahnya menjadi tiga panel besar yang memenuhi layar.

### SECTION E — ETALASE MENU MAKANAN DAN MINUMAN

Buat section katalog menu yang terpusat.

Bagian heading:
- Eyebrow kecil uppercase: "ETALASE MAKANAN & MINUMAN".
- Judul serif besar: "Menu Jajanan Kantin Sekolah".
- Deskripsi singkat tentang pilihan makanan, harga, dan kemudahan jajan.

Di bawahnya, tampilkan filter kategori berbentuk chip:

- Semua Menu (12).
- Gorengan & Camilan.
- Aneka Mie & Kuah.
- Nasi & Lauk.
- Minuman Segar/Hangat.

Filter aktif menggunakan warna terakota dengan teks terang. Filter lain menggunakan background putih dan teks gelap.

#### Grid katalog

Tampilkan tepat 12 kartu menu, dalam urutan dan struktur empat kolom pada desktop, sebanyak tiga baris.

Setiap kartu memiliki:

1. Foto makanan atau minuman pada bagian paling atas.
2. Label kategori atau jenis makanan di sudut foto.
3. Badge rekomendasi, pedas, favorit, atau informasi khusus jika terlihat pada referensi.
4. Area konten dengan background putih.
5. Nama menu yang dicetak tebal.
6. Harga dengan warna terakota.
7. Deskripsi pendek.
8. Informasi tambahan di bagian bawah, misalnya tingkat kepedasan, durasi penyajian, atau status kesegaran.
9. Tombol kecil "+ Jajan".

Gunakan urutan menu berikut:

Baris pertama:
1. Bakwan Sayur Hangat (Isi 3).
2. Tahu Isi Pedas Renyah (Isi 3).
3. Lumpia Goreng & Risoles Ragout.
4. Indomie Kuah Telur Sawi Rawit.

Baris kedua:
5. Indomie Goreng Dobel Telur Ceplok.
6. Mie Nyemek Pedas Spesial.
7. Nasi Uduk Komplit Sambal Terasi.
8. Nasi Goreng Kantin Telur Dadar.

Baris ketiga:
9. Soto Ayam Lamongan Kuah Bening.
10. Es Teh Manis Jumbo Gula Asli.
11. Es Jeruk Peras Murni.
12. Kopi Tubruk / Kopi Susu Panas.

Harga, deskripsi, badge, serta informasi pendukung harus ditata dengan hierarki yang sama seperti screenshot. Jika teks persis pada bagian kecil tidak terbaca, pertahankan panjang teks yang proporsional dan gaya penyajiannya, tanpa menambahkan paragraf panjang.

#### Gambar menu

Gambar makanan merupakan elemen penting dalam kemiripan visual.

- Gunakan foto makanan yang realistis, bukan emoji, ilustrasi kartun, atau kotak warna polos.
- Cocokkan jenis makanan, sudut kamera, komposisi, warna dominan, dan crop.
- Gunakan objek gambar berbeda untuk setiap menu jika referensi menunjukkan foto berbeda.
- Jangan menggunakan satu gambar yang sama untuk seluruh kartu.
- Atur image container dengan rasio aspek yang konsisten.
- Gunakan object-fit: cover.
- Pastikan badge di atas foto tetap terbaca.
- Jika aset gambar sudah tersedia dalam proyek, prioritaskan aset tersebut.
- Jika tidak tersedia, cari atau buat aset pengganti yang paling mendekati visual referensi, dan simpan secara lokal jika memungkinkan.
- Jangan meninggalkan URL gambar rusak atau placeholder kosong.

Kartu harus memiliki tinggi yang konsisten, jarak antarkartu yang rapat tetapi nyaman, dan border yang tipis.

### SECTION F — PANEL JADWAL MASAKAN HARIAN

Setelah katalog menu, buat panel lebar dengan background hijau gelap.

Panel memiliki:
- Border cokelat tebal.
- Sudut membulat.
- Shadow yang cukup terlihat.
- Label kecil yang menempel pada bagian atas border.
- Heading berwarna emas.
- Deskripsi kecil dengan gaya monospace.
- Lima kartu jadwal dalam satu baris pada desktop.

Judul panel:

"Jadwal Masakan Harian Ibu Kantin"

Deskripsi:

"Dimasak terbatas 40 porsi tiap hari · Siap saji pukul 10.00 WIB"

Isi lima kartu jadwal:

1. SENIN — Soto Ayam Ambengan.
2. SELASA — Rawon Daging Sapi.
3. RABU — Lontong Sayur Labu.
4. KAMIS — Bakso Urat Malang.
5. JUMAT — Nasi Kuning Berkah.

Setiap kartu memiliki:
- Nama hari.
- Badge atau indikator menu hari ini pada kartu yang aktif.
- Nama masakan.
- Deskripsi pendek.
- Harga per porsi.

Gunakan background kartu hijau sedikit lebih terang daripada panel, teks terang, aksen emas, dan border halus.

Pertahankan kepadatan konten, tinggi panel, jarak horizontal, dan kontras seperti screenshot.

### SECTION G — AREA LAYANAN: TITIP PESAN DAN POJOK KEJUJURAN

Buat dua panel utama berdampingan, dengan proporsi lebar yang mengikuti screenshot.

Keduanya menggunakan background terang, border cokelat, sudut membulat, dan shadow.

#### Panel kiri — Formulir titip pesan

Bagian heading:
- Eyebrow kecil "// LAYANAN KELAS".
- Judul "Formulir Titip Pesan Istirahat".
- Deskripsi tentang pemesanan makanan untuk kelas sebelum bel berbunyi.

Isi formulir:

1. Label "NAMA PEMESAN / PERWAKILAN".
2. Input nama dengan placeholder yang sesuai.
3. Label "KELAS / RUANG".
4. Dropdown pilihan kelas.
5. Bagian pilihan jam pemesanan.
6. Dua pilihan berbentuk kartu:
   - Istirahat 1, 09.45–10.15 WIB.
   - Istirahat 2, 12.00–12.45 WIB.
7. Label "CATATAN KHUSUS RASA (OPSIONAL)".
8. Input catatan pesanan.
9. Input atau area catatan nota jajan dengan placeholder yang sesuai.
10. Tombol CTA penuh berwarna hijau gelap untuk mengirim titipan pesanan melalui WhatsApp.

Gunakan input beige dengan border tipis, label kecil uppercase, jarak antarfield yang konsisten, dan tombol yang memenuhi lebar panel.

Semua input harus berfungsi. Dropdown harus dapat dipilih, opsi jam istirahat harus memiliki state aktif yang terlihat, dan validasi harus mencegah pengiriman data kosong yang wajib diisi.

Jika integrasi WhatsApp benar-benar tersedia, susun pesan pesanan secara otomatis dan buka WhatsApp dengan teks yang sudah di-encode. Jangan mengklaim pesanan sudah terkirim jika pengguna belum mengirimkannya.

#### Panel kanan — Pojok Kejujuran dan cek saldo

Bagian heading:
- Badge kecil "WAKTU SANTAI / SISWA DIGITAL".
- Judul "Pojok Kejujuran & Cek Saldo".
- Deskripsi tentang pembayaran mandiri dan pengecekan saldo.

Buat kartu saldo digital berwarna hijau gelap dengan:
- Ikon dompet atau uang.
- Label saldo jajanan aktif.
- Angka saldo besar dengan format rupiah.
- Nama siswa.
- Keterangan kelas.
- ID siswa atau nomor identitas dummy yang konsisten.
- Pemisah horizontal.

Di bawah kartu saldo, tampilkan:
- Input nomor identitas siswa.
- Tombol "Cek Saldo".
- Judul riwayat jajan terakhir.
- Daftar beberapa transaksi dalam baris-baris ringkas.
- Nama transaksi di sebelah kiri.
- Nilai pengurangan saldo atau penambahan saldo di sebelah kanan.
- Ringkasan saldo atau keterangan akhir pada bagian paling bawah.

Gunakan informasi dummy yang jelas sebagai data demonstrasi. Jangan menghubungkan atau menampilkan data pribadi siswa sungguhan.

Fungsi cek saldo harus bekerja terhadap data dummy yang tersedia. Jika ID tidak ditemukan, tampilkan pesan yang sesuai. Jika sistem belum memiliki backend, jelaskan statusnya melalui UI tanpa berpura-pura terhubung ke sistem sekolah.

### SECTION H — FOOTER

Buat footer penuh selebar layar dengan background hijau gelap dan garis pembatas berwarna terakota pada bagian atas.

Susun tiga area konten.

Kolom pertama:
- Nama "KANTIN SELASAR."
- Deskripsi singkat mengenai layanan jajanan sekolah dan kebersihan makanan.

Kolom kedua:
- Heading "JAM OPERASIONAL SEKOLAH".
- Informasi jam buka.
- Jam istirahat.
- Keterangan hari operasional.
- Keterangan tutup pada hari libur.

Kolom ketiga:
- Heading "KONTAK DAPUR KANTIN".
- Informasi pengelola.
- Kontak WhatsApp dummy atau placeholder yang jelas.
- Lokasi kantin sekolah.

Pada bagian bawah, tambahkan garis horizontal tipis.

Di bawah garis:
- Copyright tahun 2026.
- Nama Kantin Selasar.
- Keterangan template atau desain.
- Informasi teknologi HTML, CSS, dan JavaScript di sisi kanan.

Gunakan tipografi kecil, teks muted, aksen emas, dan spacing yang rapi.

## 5. DETAIL VISUAL YANG TIDAK BOLEH TERLEWAT

Pastikan implementasi mempertahankan seluruh detail berikut:

- Top status bar yang tipis.
- Header dengan logo dan navigasi.
- CTA aktif dan nonaktif.
- Headline serif dengan baris italic terakota.
- Kartu promosi dengan gambar makanan.
- Tiga kartu keunggulan.
- Heading katalog dan deskripsi.
- Filter kategori.
- Seluruh 12 kartu menu.
- Badge di atas gambar.
- Harga yang menonjol.
- Informasi tambahan pada bagian bawah kartu.
- Tombol kecil untuk setiap menu.
- Panel jadwal masakan berwarna hijau.
- Lima kartu jadwal.
- Formulir titip pesan.
- Dua pilihan waktu istirahat.
- Kartu saldo digital.
- Input dan tombol cek saldo.
- Daftar transaksi.
- Footer tiga kolom.
- Garis pemisah dan teks copyright.

Jangan menghilangkan komponen kecil hanya karena ukurannya terlihat tidak signifikan. Justru detail tersebut berkontribusi pada kemiripan akhir.

## 6. PENGUKURAN DAN RESPONSIVITAS

Jangan menebak semua ukuran secara bebas. Gunakan screenshot sebagai referensi untuk menentukan:

- Lebar maksimum konten utama.
- Margin kiri dan kanan.
- Tinggi header.
- Jarak antarsection.
- Lebar kolom hero.
- Ukuran kartu promosi.
- Jumlah kolom katalog.
- Tinggi gambar.
- Padding internal kartu.
- Ukuran judul dan body text.
- Radius border dan ketebalan garis.
- Shadow dan posisi elemen.

Jika memungkinkan, ambil dimensi screenshot secara programatis dan gunakan pengukuran relatif untuk menyusun layout.

Pada viewport desktop yang sesuai dengan screenshot, utamakan kesamaan posisi dan ukuran.

Pada viewport yang lebih kecil:
- Tablet: grid menu berubah menjadi dua kolom bila sesuai dengan ruang yang tersedia.
- Mobile: grid menu menjadi satu kolom atau dua kolom jika tetap terbaca.
- Hero berubah menjadi satu kolom.
- Panel jadwal dapat menggunakan layout responsif atau horizontal scrolling yang nyaman.
- Formulir dan panel saldo ditumpuk secara vertikal.
- Navigasi desktop berubah menjadi menu mobile.
- Tidak boleh ada horizontal overflow yang tidak disengaja.
- Semua teks, gambar, dan kontrol harus tetap terbaca.

Responsivitas tidak boleh digunakan sebagai alasan untuk mengubah layout desktop yang menjadi acuan utama.

## 7. IMPLEMENTASI TEKNIS

Website harus menggunakan HTML, CSS, dan JavaScript.

Jika proyek yang ada menggunakan struktur atau framework tertentu, periksa terlebih dahulu dan pertahankan arsitektur yang sudah digunakan selama tidak menghalangi tujuan.

Jika proyek memang merupakan template HTML statis:
- Gunakan HTML semantik.
- Pisahkan CSS dan JavaScript jika struktur proyek mendukungnya.
- Gunakan CSS Grid dan Flexbox secara tepat.
- Gunakan CSS custom properties untuk warna, spacing, dan token desain.
- Gunakan komponen atau pola markup yang konsisten untuk 12 kartu menu.
- Gunakan data terstruktur untuk merender kartu secara konsisten.
- Gunakan ikon SVG atau library ikon yang memang tersedia.
- Hindari emoji sebagai pengganti ikon utama.
- Jangan menggunakan gambar latar berupa screenshot seluruh halaman untuk menyamarkan implementasi yang tidak lengkap.
- Jangan membuat seluruh halaman hanya berupa satu gambar.
- Jangan menambahkan dependensi berat jika tidak dibutuhkan.

Semua teks yang tampil harus memiliki kontras yang cukup dan struktur HTML yang benar.

## 8. PERILAKU INTERAKTIF MINIMUM

Website tidak cukup hanya terlihat bagus. Implementasikan perilaku berikut:

1. Navigasi menuju section yang tepat.
2. Tombol CTA hero menuju katalog atau formulir pesanan.
3. Filter kategori yang benar-benar menyaring kartu menu.
4. Tombol "+ Jajan" yang menambahkan item ke daftar nota atau keranjang.
5. Badge nota yang memperbarui jumlah item.
6. Perhitungan total harga item yang dipilih.
7. Tombol paket yang menambahkan paket ke nota.
8. Pilihan waktu istirahat yang dapat diubah.
9. Validasi formulir titip pesan.
10. Penyusunan pesan WhatsApp dari data formulir.
11. Cek saldo berdasarkan data dummy.
12. Tampilan riwayat transaksi berdasarkan siswa dummy yang dipilih.
13. Feedback visual ketika tombol digunakan.
14. Navigasi mobile yang dapat dibuka dan ditutup.

Jika implementasi keranjang membutuhkan panel nota tambahan, buat panel tersebut dengan gaya visual yang konsisten dengan screenshot. Jangan mengubah layout utama secara drastis hanya untuk menambahkan interaksi.

Jangan membuat fitur yang tampak berfungsi tetapi sebenarnya tidak memiliki event handler.

## 9. PROSEDUR PENGUJIAN VISUAL WAJIB

Setelah coding selesai, jangan langsung menganggap pekerjaan selesai.

Lakukan prosedur berikut:

1. Jalankan website secara lokal.
2. Buka pada resolusi dan viewport yang sesuai dengan screenshot referensi.
3. Ambil screenshot halaman penuh.
4. Bandingkan screenshot hasil dengan screenshot referensi.
5. Identifikasi perbedaan ukuran, posisi, jarak, font, warna, gambar, dan panjang halaman.
6. Perbaiki perbedaan yang paling signifikan terlebih dahulu.
7. Ulangi pengambilan screenshot dan perbandingan.
8. Lakukan pemeriksaan tambahan pada viewport tablet dan mobile.
9. Periksa console browser untuk error.
10. Pastikan gambar berhasil dimuat dan interaksi utama berjalan.

Jika tersedia alat visual comparison, gunakan overlay, perbandingan side-by-side, atau difference image. Gunakan metrik kesamaan piksel sebagai alat bantu, bukan satu-satunya ukuran kualitas.

Urutan prioritas perbaikan:
- Geometri layout.
- Ukuran dan posisi section.
- Gambar dan crop.
- Tipografi.
- Warna.
- Border dan shadow.
- Detail mikro.

Jangan melakukan redesign setelah tahap perbandingan. Perbaiki implementasi agar semakin mendekati screenshot asli.

## 10. LARANGAN KERAS

Jangan:
- Menghilangkan satu pun section.
- Mengurangi 12 kartu menu menjadi beberapa kartu contoh.
- Mengganti foto makanan dengan emoji.
- Mengubah warna hijau dan cream menjadi tema lain.
- Mengganti font serif editorial dengan font generik secara keseluruhan.
- Membuat semua elemen berbentuk pill.
- Membuat semua kartu terlalu bulat.
- Menambahkan gradient atau efek dekoratif yang tidak ada pada referensi.
- Mengubah layout menjadi dashboard modern yang berbeda.
- Mengubah desain menjadi landing page generik.
- Mengisi gambar dengan URL yang rusak.
- Menggunakan satu foto yang sama pada seluruh kartu.
- Menghapus teks mikro, label, atau badge.
- Menggunakan lorem ipsum.
- Menampilkan tombol yang tidak berfungsi.
- Menggunakan screenshot sebagai background halaman untuk berpura-pura menghasilkan website.
- Mengklaim telah melakukan pengujian visual jika screenshot hasil belum benar-benar diperiksa.
- Menghentikan pengerjaan setelah menghasilkan struktur HTML awal.

## 11. KRITERIA PENERIMAAN

Pekerjaan dianggap selesai apabila:

- Seluruh section pada screenshot telah direkonstruksi.
- Urutan komponen benar.
- Jumlah kartu dan elemen utama sesuai.
- Layout desktop mendekati screenshot referensi.
- Warna, tipografi, gambar, dan spacing telah disesuaikan melalui pengujian visual.
- Tidak ada section kosong atau gambar rusak.
- Tidak ada error JavaScript yang mengganggu fungsi utama.
- Filter, tombol jajan, nota, formulir, dan cek saldo berfungsi sesuai implementasi.
- Tampilan mobile tidak mengalami overflow yang tidak disengaja.
- Screenshot hasil sudah diperiksa dan perbedaan utama telah diperbaiki.

## 12. INSTRUKSI EKSEKUSI AKHIR

Mulai dengan memeriksa file proyek dan screenshot referensi.

Setelah analisis, langsung implementasikan website pada proyek yang sesuai. Jangan hanya memberikan rencana, wireframe, contoh komponen, atau potongan kode.

Pertahankan file proyek yang tidak perlu diubah. Jangan menghapus fitur yang sudah ada. Setelah implementasi, jalankan pengujian visual dan fungsional, kemudian perbaiki hasilnya.

Jika kamu memiliki kemampuan menggunakan browser atau terminal, manfaatkan kemampuan tersebut untuk benar-benar menjalankan dan menguji website.

Pada akhir pekerjaan, laporkan secara singkat:
- File yang dibuat atau diubah.
- Section yang berhasil diimplementasikan.
- Interaksi yang sudah berfungsi.
- Pengujian yang benar-benar dilakukan.
- Bagian yang belum dapat disamakan karena keterbatasan aset atau informasi.

**Tujuan akhir: menghasilkan rekonstruksi website Kantin Selasar yang sedekat mungkin dengan screenshot referensi, bukan sekadar website kantin dengan tema yang mirip.**`;
