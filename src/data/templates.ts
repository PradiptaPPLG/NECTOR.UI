import type { Template } from '../types';

export const TEMPLATES_DATA: Template[] = [
  {
    id: 'tpl-11',
    slug: 'savore-cafe',
    title: 'SAVORÉ',
    tagline: 'Kopi yang diracik perlahan, ruang untuk jeda di sudut kota Bandung',
    description: 'Template website kafe & kedai kopi modern dengan estetika warm paper dan editorial typography. Dilengkapi hero editorial, filosofi kedai, filter kategori menu interaktif (Kopi, Non-kopi, Pastry), quote jeda, info jam operasional & lokasi kedai, serta pemesanan.',
    category: 'cafe',
    tags: ['Cafe', 'Kedai Kopi', 'UMKM Kuliner', 'Menu Filter Interaktif', 'Slow Living'],
    technologies: ['HTML5', 'Vanilla CSS', 'Vanilla JS', 'Zero Dependencies'],
    thumbnailSvgType: 'cafe',
    previewComponentKey: 'cafe-savore',
    htmlPath: '/templates/cafe/savore.html',
    htmlFolderPath: 'templates/cafe/savore.html',
    features: [
      'Struktur mandiri 1 file (HTML + CSS + JS) tanpa perlu build step atau framework',
      'Filter kategori menu interaktif (Semua Menu, Kopi, Non-kopi, Pastry) tanpa reload halaman',
      'Palet antislop: warm paper (#f5f2e9), espresso (#292b22), muted olive (#687153), soft clay (#c27e5b)',
      'Bagian info kedai lengkap: Alamat, jam operasional, peta lokasi, dan kontak WhatsApp',
      'Responsif penuh dari layar smartphone 360px hingga layar desktop 1440px'
    ],
    usageInstructions: [
      'Buka folder templates/cafe/savore.html di editor kode kamu.',
      'Tulis komentar atau revisi langsung di file HTML tersebut.',
      'Ganti nama menu, harga (28k, 24k, dst), dan alamat kedai sesuai kebutuhan.',
      'Double-click file untuk preview di browser atau cek live di etalase NECTOR.UI.'
    ],
    sourceFiles: [
      {
        filename: 'savore.html',
        language: 'html',
        content: `<!-- SAVORÉ — NECTOR.UI Cafe Template -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>SAVORÉ — Kopi, Cerita, dan Jeda</title>
  <style>
    :root {
      --paper: #f5f2e9;
      --paper-deep: #ebe5d8;
      --ink: #292b22;
      --muted: #747469;
      --olive: #687153;
      --olive-dark: #4d573d;
      --clay: #c27e5b;
      --serif: "Playfair Display", Georgia, serif;
      --sans: "DM Sans", Arial, sans-serif;
    }
    body { background: var(--paper); color: var(--ink); font-family: var(--sans); }
    h1 { font-size: clamp(52px, 6.7vw, 94px); line-height: .99; }
    h1 em { color: var(--olive); font-family: var(--serif); }
  </style>
</head>
<body>
  <header>
    <a href="#">SAVORÉ<span>.</span></a>
    <nav><a href="#cerita">Cerita</a><a href="#menu">Menu</a><a href="#ruang">Ruang</a></nav>
  </header>
  <main>
    <section class="hero">
      <p>KEDAI KOPI · BANDUNG</p>
      <h1>Sedikit jeda,<br><em>banyak cerita.</em></h1>
      <p>Kopi yang diracik dengan niat, makanan kecil yang dibuat sepenuh hati, dan ruang untuk menikmati hari tanpa terburu-buru.</p>
    </section>
  </main>
</body>
</html>`,
        description: 'File mandiri HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt untuk website cafe SAVORE berkonsep slow coffee & warm paper.',
      designDirection: 'Warm paper (#f5f2e9), espresso (#292b22), muted olive (#687153), dan aksen clay (#c27e5b). Tipografi DM Sans dan Playfair Display.',
      layoutAndGrid: 'Asymmetric hero grid dengan foto ritual pagi dan floating stamp badge. Filter menu instan dengan tab kategori.',
      typographyAndColor: 'Headings dalam serif elegan Playfair Display, body teks dalam DM Sans yang bersih dan nyaman dibaca.',
      interactions: 'Filter kategori menu (Semua, Kopi, Non-kopi, Pastry) dengan vanilla JS murni tanpa reload halaman.',
      technicalRequirements: '100% standalone single-file HTML, responsif smartphone hingga desktop.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-04-12',
    livePreviewAvailable: true,
    accentColor: '#687153'
  },
  {
    id: 'tpl-12',
    slug: 'croissant-atelier-bakery',
    title: 'Maison Levain Bakery',
    tagline: 'Artisan sourdough & morning pastry bakery lokal',
    description: 'Website etalase bakery artisan lokal yang memproduksi roti sourdough fermentasi alami dan pastry Prancis. Dilengkapi jadwal fresh-bake pagi, katalog viennoiserie, dan pre-order via WhatsApp.',
    category: 'bakery',
    tags: ['Bakery', 'Pastry', 'UMKM Kuliner', 'Sourdough', 'Pre-order'],
    technologies: ['HTML5', 'Vanilla CSS', 'Bake Schedule', 'WhatsApp Cart'],
    thumbnailSvgType: 'bakery',
    previewComponentKey: 'bakery-levain',
    htmlPath: '/templates/bakery/maison-levain.html',
    htmlFolderPath: 'templates/bakery/maison-levain.html',
    features: [
      'Jadwal waktu roti matang (Drop times: 07:00 Country Sourdough, 09:00 Butter Croissant)',
      'Etalase foto pastry resolusi tinggi dengan penjelasan bahan mentega Prancis',
      'Formulir pre-order hampers dan perayaan hari istimewa',
      'Integrasi pesan instan WhatsApp ke baker'
    ],
    usageInstructions: [
      'Sesuaikan jam fresh-bake sesuai kapasitas oven Anda.',
      'Ubah daftar paket hampers di file data/bakery.json.'
    ],
    sourceFiles: [
      {
        filename: 'maison-levain.html',
        language: 'html',
        content: `<!DOCTYPE html>
<html lang="id">
<head>
  <title>Maison Levain — Artisan Bakery</title>
</head>
<body>
  <header>
    <h1>MAISON LEVAIN</h1>
    <p>Roti Sourdough Alami & Pastry Mentega Halal</p>
  </header>
</body>
</html>`,
        description: 'Struktur semantik bakery.'
      }
    ],
    prompt: {
      summary: 'Prompt untuk website toko roti artisan dan sourdough lokal.',
      designDirection: 'Warm golden crust tone (#D97706) dan flour stone (#FFFBEB). Kesan hangat ala toko roti pagi hari di sudut kota.',
      layoutAndGrid: 'Grid etalase foto roti persegi dengan badge ketersediaan harian.',
      typographyAndColor: 'Tipografi humanis ramah, warna gandum hangat.',
      interactions: 'Notifikasi roti sisa berapa loaf secara live.',
      technicalRequirements: 'HTML5 semantik dan CSS Grid ringan.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-04-14',
    livePreviewAvailable: true,
    accentColor: '#D97706'
  },
  {
    id: 'tpl-13',
    slug: 'floreale-artisan-florist',
    title: 'Botanica Floral Studio',
    tagline: 'Bunga segar kurasi harian & rangkaian buket pernikahan',
    description: 'Website studio florist independen untuk pemesanan buket bunga segar harian, dekorasi intimate wedding, dan pendaftaran kelas merangkai bunga (flower workshop).',
    category: 'florist',
    tags: ['Florist', 'Bunga Segar', 'UMKM Kreatif', 'Buket', 'Workshop'],
    technologies: ['React', 'TypeScript', 'Seasonal Gallery', 'WhatsApp Order'],
    thumbnailSvgType: 'florist',
    previewComponentKey: 'florist-botanica',
    htmlPath: '/templates/florist/botanica.html',
    htmlFolderPath: 'templates/florist/botanica.html',
    features: [
      'Galeri rangkaian bunga berdasarkan momen: Wisuda, Ulang Tahun, Lamaran, Belasungkawa',
      'Fitur pesan buket kustom dengan kartu ucapan personal',
      'Pilihan pengiriman kurir same-day instan kota',
      'Jadwal pendaftaran kelas workshop merangkai bunga akhir pekan'
    ],
    usageInstructions: [
      'Unggah foto rangkaian bunga musim ini di public/flowers.',
      'Hubungkan ke nomor admin WhatsApp toko bunga.'
    ],
    sourceFiles: [
      {
        filename: 'botanica.html',
        language: 'html',
        content: `import React from 'react';
export function BotanicaFlorist() {
  return (
    <div className="florist-root">
      <h1>BOTANICA // FLORAL STUDIO</h1>
      <p>Kurasi bunga segar harian petik petani lokal.</p>
    </div>
  );
}`,
        description: 'Komponen React florist studio.'
      }
    ],
    prompt: {
      summary: 'Prompt untuk website toko bunga florist studio artisan.',
      designDirection: 'Earthy botanical pastel: Eucalyptus sage (#556B2F), blush peony (#E8B4B8), dan kertas linen (#FAF9F6).',
      layoutAndGrid: 'Masonry visual foto buket yang rapi dan elegan.',
      typographyAndColor: 'Serif kontemporer dipadu sans lembut.',
      interactions: 'Pilih warna kertas pembungkus buket secara visual.',
      technicalRequirements: 'React 19 dan responsif mobile.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-04-15',
    livePreviewAvailable: true,
    accentColor: '#708238'
  },
  {
    id: 'tpl-14',
    slug: 'gentlemen-cut-barber',
    title: 'The Heritage Barber',
    tagline: 'Classic gentlemen grooming & hair care studio lokal',
    description: 'Website barbershop klasik berstandar profesional. Menampilkan daftar servis cukur rambut, cukur jenggot handuk hangat, profil para kapster, dan kemudahan booking jadwal via WhatsApp.',
    category: 'barber',
    tags: ['Barbershop', 'Grooming', 'UMKM Jasa', 'Pangkas Rambut', 'Booking'],
    technologies: ['HTML5', 'Custom CSS', 'Service Menu', 'WhatsApp Hook'],
    thumbnailSvgType: 'barber',
    previewComponentKey: 'barber-heritage',
    htmlPath: '/templates/barber/heritage-barber.html',
    htmlFolderPath: 'templates/barber/heritage-barber.html',
    features: [
      'Daftar menu servis transparan: Classic Cut, Hot Towel Shave, Kids Cut, Hair Tattoo',
      'Profil dan portofolio hasil potong rambut tiap kapster',
      'Katalog pomade dan tonik perawatan rambut pria',
      'Tombol booking jam potong langsung ke WhatsApp kasir'
    ],
    usageInstructions: [
      'Edit tarif layanan di styles/services.css.',
      'Perbarui foto galeri potongan rambut pria.'
    ],
    sourceFiles: [
      {
        filename: 'heritage-barber.html',
        language: 'html',
        content: `<!DOCTYPE html>
<html>
<head><title>The Heritage Barber</title></head>
<body>
  <h1>THE HERITAGE BARBERSHOP</h1>
  <p>Potong Rambut Presisi & Cukur Tradisional</p>
</body>
</html>`,
        description: 'Markup barbershop.'
      }
    ],
    prompt: {
      summary: 'Prompt untuk website barbershop klasik pria.',
      designDirection: 'Vintage industrial barber: Dark timber (#18181B), leather cognac (#B45309), dan aksen putih bersih.',
      layoutAndGrid: 'Tabel menu servis tegas dengan harga jelas dan durasi menit.',
      typographyAndColor: 'Font condensed bold tegas bergaya vintage barber pole.',
      interactions: 'Pilih kapster favorit lalu kirim format booking ke WhatsApp.',
      technicalRequirements: 'Ringan, loading kilat di HP.',
      isReconstructed: false
    },
    featured: false,
    publishedAt: '2026-04-16',
    livePreviewAvailable: true,
    accentColor: '#B45309'
  },
  {
    id: 'tpl-15',
    slug: 'studio-keramik-tanah',
    title: 'Tanah Liat Pottery',
    tagline: 'Kerajinan keramik tableware buatan tangan & workshop studio',
    description: 'Website studio kriya tembikar dan keramik buatan tangan lokal. Menyediakan penjualan tableware estetik untuk kafe/rumah dan pemesanan kelas workshop pottery akhir pekan.',
    category: 'pottery',
    tags: ['Keramik', 'Pottery', 'UMKM Kriya', 'Workshop Studio', 'Handmade'],
    technologies: ['React', 'TypeScript', 'Product Showcase', 'Workshop RSVP'],
    thumbnailSvgType: 'pottery',
    previewComponentKey: 'pottery-tanah',
    htmlPath: '/templates/pottery/tanah-liat.html',
    htmlFolderPath: 'templates/pottery/tanah-liat.html',
    features: [
      'Katalog tableware keramik unik (Cangkir kopi, mangkok matcha, piring bertekstur tanah)',
      'Jadwal kelas workshop pottery pemula (Wheel throwing & hand building)',
      'Pemesanan custom order grosir untuk restoran dan kedai kopi',
      'Integrasi pemesanan dan konfirmasi kelas WhatsApp'
    ],
    usageInstructions: [
      'Perbarui kuota jadwal kelas pottery di data/workshops.ts.',
      'Ganti foto produk keramik di folder public/ceramics.'
    ],
    sourceFiles: [
      {
        filename: 'tanah-liat.html',
        language: 'html',
        content: `import React from 'react';
export function TanahLiatStudio() {
  return (
    <div>
      <h1>TANAH LIAT // POTTERY STUDIO</h1>
      <p>Kerajinan tanah liat alami dibentuk dengan tangan dan hati.</p>
    </div>
  );
}`,
        description: 'Komponen pottery studio.'
      }
    ],
    prompt: {
      summary: 'Prompt website studio keramik dan workshop tembikar UMKM.',
      designDirection: 'Wabi-sabi natural: Earthenware terracotta (#C2410C), raw unglazed clay (#FAF5EE), dan batu abu-abu.',
      layoutAndGrid: 'Grid produk yang tenang dengan deskripsi dimensi dan finishing glasir.',
      typographyAndColor: 'Tipografi netral yang menonjolkan keindahan tekstur fisik tanah liat.',
      interactions: 'Pilih jadwal tanggal workshop langsung diarahkan ke form WhatsApp.',
      technicalRequirements: 'React 19, aksesibilitas tinggi.',
      isReconstructed: false
    },
    featured: false,
    publishedAt: '2026-04-18',
    livePreviewAvailable: true,
    accentColor: '#C2410C'
  },
  {
    id: 'tpl-16',
    slug: 'kebun-sayur-organik',
    title: 'Lokal Organik Farm',
    tagline: 'Pasar sayur organik segar petik langsung dari petani lokal',
    description: 'Website layanan langganan sayur dan buah organik lokal tanpa pestisida. Menghubungkan petani desa langsung ke dapur keluarga perkotaan dengan paket langganan mingguan (Harvest Box).',
    category: 'organik',
    tags: ['Organik', 'Sayur Segar', 'UMKM Pertanian', 'Farm to Table', 'Langganan'],
    technologies: ['HTML5', 'CSS Grid', 'Harvest Ticker', 'WhatsApp Order'],
    thumbnailSvgType: 'organic',
    previewComponentKey: 'organic-farm',
    htmlPath: '/templates/organik/lokal-organik.html',
    htmlFolderPath: 'templates/organik/lokal-organik.html',
    features: [
      'Daftar panen segar minggu ini: Selada romaine, tomat ceri hidroponik, alpukat mentega',
      'Paket langganan hemat Harvest Box mingguan keluarga',
      'Profil petani mitra dan transparansi lokasi kebun lokal',
      'Pemesanan keranjang sayur cepat via WhatsApp'
    ],
    usageInstructions: [
      'Perbarui daftar sayur panen tiap hari Senin di data/harvest.json.',
      'Tautkan nomor WhatsApp pengiriman kurir lokal.'
    ],
    sourceFiles: [
      {
        filename: 'lokal-organik.html',
        language: 'html',
        content: `<!DOCTYPE html>
<html>
<head><title>Lokal Organik Farm</title></head>
<body>
  <h1>LOKAL ORGANIK // DARI KEBUN KE MEJA</h1>
  <p>Sayuran bebas pestisida dipanen pagi hari diantar siang hari.</p>
</body>
</html>`,
        description: 'Markup farm to table.'
      }
    ],
    prompt: {
      summary: 'Prompt website UMKM pertanian organik farm-to-table.',
      designDirection: 'Fresh natural harvest: Hijau daun subur (#15803D), tanah gembur (#3E2723), dan putih segar (#F9FBE7).',
      layoutAndGrid: 'Grid paket sayur dengan berat gram dan masa kesegaran.',
      typographyAndColor: 'Tipografi modern segar dan bersahabat.',
      interactions: 'Kalkulator paket kebutuhan sayur per minggu.',
      technicalRequirements: 'Ringan, loading cepat di jaringan seluler.',
      isReconstructed: false
    },
    featured: false,
    publishedAt: '2026-04-20',
    livePreviewAvailable: true,
    accentColor: '#15803D'
  },
  {
    id: 'tpl-17',
    slug: 'senja-angkringan',
    title: 'SENJA',
    tagline: 'Angkringan rasa masa kini — kopi, nasi kucing, sate, dan cerita sampai malam',
    description: 'Template website kafe & angkringan modern bernuansa hangat dan akrab. Dilengkapi announcement banner operasional 16.00 — 00.00 WIB, hero visual tempat nongkrong, strip 4 keunggulan, filter kategori menu interaktif (Kopi & Minuman, Angkringan, Camilan), cerita tentang tempat pulang kedua, dan pencari lokasi Google Maps.',
    category: 'cafe',
    tags: ['Angkringan', 'Cafe', 'Nasi Kucing', 'Sate-satean', 'Tempat Nongkrong', 'Menu Interaktif'],
    technologies: ['HTML5', 'Vanilla CSS', 'Vanilla JS', 'DM Sans & Playfair'],
    thumbnailSvgType: 'cafe',
    previewComponentKey: 'cafe-senja',
    htmlPath: '/templates/cafe/senja.html',
    htmlFolderPath: 'templates/cafe/senja.html',
    features: [
      'File tunggal mandiri (HTML + CSS + JS) siap dibuka langsung di browser tanpa build tool',
      'Filter kategori menu interaktif (Semua Menu, Kopi & Minuman, Angkringan, Camilan)',
      'Palet warna senja: cream (#f7f3eb), ink (#30261f), rust (#b85f3d), olive (#68704e)',
      'Navigasi drawer mobile responsif dengan tombol hamburger interaktif',
      'Integrasi tautan Google Maps untuk pencarian lokasi angkringan'
    ],
    usageInstructions: [
      'Buka templates/cafe/senja.html atau templates/cafe/senja.html di code editor kamu.',
      'Ubah daftar menu nasi kucing, tusukan sate, dan aneka kopi sesuai daftar menu tokomu.',
      'Tautkan link Google Maps lokasi cabang aslimu pada tombol Cari Lokasi.'
    ],
    sourceFiles: [
      {
        filename: 'senja.html',
        language: 'html',
        content: `<!-- SENJA — NECTOR.UI Cafe & Angkringan Template -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>SENJA — Kopi, Nasi, dan Cerita</title>
</head>
<body>
  <div class="announcement">Buka setiap hari · 16.00 — 00.00 WIB</div>
  <header class="navbar">
    <a class="brand" href="#beranda">SENJA</a>
    <nav class="nav-links"><a href="#menu">Menu</a><a href="#cerita">Tentang</a></nav>
  </header>
  <main>
    <section class="hero">
      <h1>Yang dicari bukan cuma <em>kopi.</em></h1>
      <p>Ada nasi kucing hangat, sate yang baru dibakar, kopi favorit, dan obrolan sampai malam.</p>
    </section>
  </main>
</body>
</html>`,
        description: 'File mandiri HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt website cafe & angkringan modern SENJA.',
      designDirection: 'Warm dusk atmosphere: Cream (#f7f3eb), Charcoal Ink (#30261f), Terracotta Rust (#b85f3d), Muted Olive (#68704e). Tipografi Playfair Display & DM Sans.',
      layoutAndGrid: 'Asymmetric hero grid dengan foto malam hari, kartu menu responsif 4 kolom, dan drawer navigasi mobile.',
      typographyAndColor: 'DM Sans untuk teks menu yang renyah dan Playfair Display untuk sentuhan cerita personal yang hangat.',
      interactions: 'Filter menu seketika via event listener JavaScript murni tanpa ketergantungan library luar.',
      technicalRequirements: '100% standalone, responsif mulai 360px hingga layar desktop lebar.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-04-22',
    livePreviewAvailable: true,
    accentColor: '#b85f3d'
  },
  {
    id: 'tpl-18',
    slug: 'raso-mandeh-padang',
    title: 'Raso Mandeh',
    tagline: 'Dashboard etalase lauk autentik Minangkabau & kasir POS rumah makan Padang',
    description: 'Template dashboard etalase digital dan kasir POS modern untuk Rumah Makan Nasi Padang. Terinspirasi dari operasional autentik Minang sejak 1950, dilengkapi katalog etalase lauk (Rendang 8 jam, Ayam Pop, Gulai Kakap, Dendeng Batokok), filter kategori cepat, panel keranjang kasir (Walk-in & Scan Web QR), pemilih meja (Dine-in / Takeaway), dan cetak pesanan langsung kirim WhatsApp.',
    category: 'padang',
    tags: ['Rumah Makan Padang', 'Etalase Lauk', 'POS Kasir', 'Dashboard Menu', 'Kuliner Nusantara', 'WhatsApp Order'],
    technologies: ['HTML5', 'Vanilla CSS Grid', 'Vanilla JS State', 'Inter & Playfair Display'],
    thumbnailSvgType: 'restaurant',
    previewComponentKey: 'padang-raso-mandeh',
    htmlPath: '/templates/padang/rasomandeh.html',
    htmlFolderPath: 'templates/padang/rasomandeh.html',
    features: [
      'Dashboard etalase POS lengkap 1 file mandiri tanpa ketergantungan framework atau database',
      'Katalog lauk lengkap dengan foto asli WebP (Rendang, Ayam Pop, Gulai Tunjang, Dendeng, Telur Barendo)',
      'Pencarian lauk live cepat dan filter kategori (Daging Sapi, Ayam, Ikan, Sayur, Pelengkap, Minuman)',
      'Panel kasir interaktif dengan mode Walk-in / Scan QR, counter kuantitas +/- dinamis, dan kalkulator Rupiah otomatis',
      'Modal pemilih meja (Status Kosong, Terisi, Reservasi) dan integrasi checkout bukti pesanan ke WhatsApp'
    ],
    usageInstructions: [
      'Buka templates/padang/rasomandeh.html di code editor kamu.',
      'Sesuaikan daftar lauk, harga porsi, atau cabang di array menuItems dan branchSelect.',
      'Gunakan sebagai tampilan etalase tablet kasir atau pajang di layar TV counter depan restoran.'
    ],
    sourceFiles: [
      {
        filename: 'rasomandeh.html',
        language: 'html',
        content: `<!-- Raso Mandeh — Dashboard Etalase & POS Rumah Makan Padang -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Raso Mandeh — Dashboard Etalase & POS Rumah Makan Padang</title>
</head>
<body>
  <div class="pos-wrapper">
    <main class="pos-main">
      <header class="pos-header">
        <h1>RASO MANDEH</h1>
        <input type="text" placeholder="Cari rendang, ayam pop...">
      </header>
      <div class="dish-grid">
        <!-- Etalase Lauk Minangkabau -->
      </div>
    </main>
    <aside class="pos-cart-panel">
      <h2>Pesanan Pelanggan</h2>
      <!-- Panel Kasir Walk-in & Meja -->
    </aside>
  </div>
</body>
</html>`,
        description: 'Single-file standalone HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt dashboard etalase masakan Padang & Point of Sale (POS).',
      designDirection: 'Minangkabau Heritage: Marun Minang (#7A1F2B), Emas Songket (#C9A227), Krem Hangat (#F5EFE2), dan Arang Kayu (#241B16). Tipografi Inter & Playfair Display.',
      layoutAndGrid: 'Fixed dual-column POS dashboard layout: Left 1fr menu etalase showcase & category pills, Right 380px persistent cart order drawer.',
      typographyAndColor: 'Playfair Display untuk nama restoran Minang dan header lauk, Inter untuk readability numerik kasir POS dan harga Rupiah.',
      interactions: 'State management JavaScript murni: tambah lauk, hitung subtotal & total rupiah, pilih meja interaktif, kirim pesan ke WhatsApp.',
      technicalRequirements: 'Zero dependencies, responsive tablet & desktop, full offline capability.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-04-25',
    livePreviewAvailable: true,
    accentColor: '#7A1F2B'
  },
  {
    id: 'tpl-19',
    slug: 'sipara-beverage',
    title: 'SIPARA',
    tagline: 'Minuman segar racikan lokal — fruit tea, matcha cloud, & kopi susu viral',
    description: 'Template website UMKM gerai minuman viral dan artisan fresh drinks. Dilengkapi topline promo, hero segar dengan stiker 100% fresh mood, running ticker kategori (Fruit Tea, Matcha Series, Kopi Susu, Creamy Drinks), filter katalog produk instan, keranjang belanja interaktif yang otomatis menyusun pesan WhatsApp terformat dengan rincian dan estimasi total belanja, serta panduan 3 langkah pemesanan.',
    category: 'beverage',
    tags: ['Minuman Viral', 'Fruit Tea', 'Matcha', 'Kopi Susu', 'Fresh Drinks', 'UMKM Kuliner', 'WhatsApp Order'],
    technologies: ['HTML5', 'Vanilla CSS', 'Vanilla JS', 'DM Sans & Manrope'],
    thumbnailSvgType: 'beverage',
    previewComponentKey: 'beverage-sipara',
    htmlPath: '/templates/beverage/sipara.html',
    htmlFolderPath: 'templates/beverage/sipara.html',
    features: [
      'File tunggal mandiri (HTML + CSS + JS) langsung jalan di browser tanpa framework',
      'Running ticker kategori: Fruit Tea, Matcha Series, Kopi Susu, Creamy Drinks',
      'Filter kategori minuman instan tanpa reload halaman',
      'Keranjang belanja WhatsApp interaktif: klik (+) otomatis menyusun teks pesanan & perkiraan total Rupiah',
      'Palet warna segar: Matcha Green (#486b45), Lemon Lime (#d8e5a0), Sunny Yellow (#f1d66e), Paper Cream (#f8f6ed)'
    ],
    usageInstructions: [
      'Buka templates/beverage/sipara.html di code editor kamu.',
      'Ubah nomor WhatsApp pada variabel WHATSAPP_NUMBER dengan nomor tokomu.',
      'Sesuaikan daftar minuman (Fruit Tea, Kopi, Matcha) dan harga per cup sesuai menu aslimu.'
    ],
    sourceFiles: [
      {
        filename: 'sipara.html',
        language: 'html',
        content: `<!-- SIPARA — NECTOR.UI Minuman Viral Template -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>SIPARA — Segarnya Punya Cerita</title>
</head>
<body>
  <div class="topline">RACIKAN FRESH SETIAP HARI — SEGAR, ENAK, NGGAK BIKIN BOROS.</div>
  <header class="header">
    <a class="logo" href="#beranda">sipara.</a>
    <nav class="nav-links"><a href="#menu">Menu Minuman</a><a href="#tentang">Tentang</a></nav>
  </header>
  <main>
    <section class="hero">
      <h1>Hari panas? Biar kami yang bikin <span class="highlight">segar.</span></h1>
      <p>Dari teh buah yang nyegerin sampai kopi susu yang creamy. Diracik fresh saat dipesan.</p>
    </section>
  </main>
</body>
</html>`,
        description: 'File mandiri HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt website UMKM gerai minuman viral & fresh drinks SIPARA.',
      designDirection: 'Fresh & energetic artisan beverage: Matcha Green (#486b45), Pale Lime (#d8e5a0), Warm Yellow (#f1d66e), dan Soft Cream (#f8f6ed). Tipografi Manrope & DM Sans.',
      layoutAndGrid: 'Hero visual dua kolom dengan stiker lingkaran miring, running category ticker, grid produk 4 kolom dengan tag best seller.',
      typographyAndColor: 'Manrope 800 untuk display headline berkarakter dinamis dan DM Sans untuk kenyamanan membaca.',
      interactions: 'Penambahan item ke keranjang belanja dengan feedback centang instan dan pembuatan pesan WhatsApp otomatis.',
      technicalRequirements: '100% standalone, responsif mulai layar smartphone 360px hingga layar desktop.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-04-28',
    livePreviewAvailable: true,
    accentColor: '#486b45'
  },
  {
    id: 'tpl-20',
    slug: 'sakumart-pos',
    title: 'SakuMart POS',
    tagline: 'Sistem kasir & POS minimarket modern — barcode search, multi-kategori, kalkulasi PPN & kembalian instan',
    description: 'Template aplikasi kasir (Point of Sale / POS) minimarket & retail modern dengan nuansa natural clean mart. Dilengkapi pencarian produk realtime, filter multi-kategori (Makanan, Minuman, Sembako, Perawatan), keranjang belanja interaktif dengan batas stok dinamis, konfigurasi tarif PPN transaksi fleksibel, shortcut pecahan uang tunai (uang pas, 20k, 50k, 100k), kalkulasi kembalian otomatis, serta modal struk pembayaran digital yang siap cetak.',
    category: 'kasir',
    tags: ['Kasir POS', 'Minimarket', 'Point of Sale', 'Retail & Toko', 'E-commerce Kasir', 'Kalkulasi Otomatis', 'Struk Digital'],
    technologies: ['HTML5', 'Vanilla CSS', 'Vanilla JS', 'DM Sans & Manrope'],
    thumbnailSvgType: 'kasir',
    previewComponentKey: 'pos-sakumart',
    htmlPath: '/templates/kasir/sakumart.html',
    htmlFolderPath: 'templates/kasir/sakumart.html',
    features: [
      '100% file tunggal mandiri (HTML + CSS + JS) langsung jalan di browser tanpa framework atau build step',
      'Katalog produk retail dengan foto barang nyata, status sisa stok, dan filter kategori instan',
      'Keranjang belanja realtime dengan kontrol kuantitas, validasi stok habis, dan kalkulasi subtotal',
      'Pengaturan tarif PPN dinamis dan kalkulator kembalian otomatis dengan tombol shortcut pecahan uang tunai',
      'Modal struk belanja digital dengan rincian transaksi lengkap dan tombol transaksi baru',
      'Desain responsif ramah layar tablet kasir maupun monitor POS desktop'
    ],
    usageInstructions: [
      'Buka templates/kasir/sakumart.html di editor kode kamu.',
      'Sesuaikan daftar produk di array products dengan data barang, foto produk, harga, dan stok tokomu.',
      'Atur tarif default PPN pada input taxRate jika ingin persentase berbeda (misal 0% untuk non-PKP).',
      'Jalankan langsung di browser untuk kasir offline atau integrasikan ke backend toko kamu.'
    ],
    sourceFiles: [
      {
        filename: 'sakumart.html',
        language: 'html',
        content: `<!-- SakuMart — Point of Sale System -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>SakuMart — Point of Sale</title>
</head>
<body>
  <!-- Standalone HTML POS System -->
</body>
</html>`,
        description: 'File mandiri HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt sistem kasir POS minimarket & retail modern SakuMart.',
      designDirection: 'Clean supermarket POS: Sage Green (#2f6549), Dark Forest (#204833), Warm Paper White (#f4f5f0), dan Fresh Accent (#e7f1e7). Tipografi DM Sans dan Manrope.',
      layoutAndGrid: 'Split workspace layout dengan catalog etalase 4 kolom di kiri dan panel keranjang transaksi sticky di kanan.',
      typographyAndColor: 'Manrope 800 untuk display brand dan nominal harga, DM Sans untuk keterbacaan data produk dan struk kasir.',
      interactions: 'Pencarian produk instan, penambahan ke keranjang dengan validasi stok, shortcut nominal uang tunai, kalkulasi kembalian otomatis, dan modal struk digital.',
      technicalRequirements: '100% standalone single-file HTML, responsif dari layar smartphone hingga monitor desktop kasir.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-05-02',
    livePreviewAvailable: true,
    accentColor: '#2f6549'
  }
];



