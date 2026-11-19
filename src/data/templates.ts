import type { Template } from '../types';
import { getMasterPrompt } from './prompts';

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
  },
  {
    id: 'tpl-21',
    slug: 'pustaka-aksara-perpustakaan',
    title: 'Pustaka Aksara',
    tagline: 'Ruang baca arsip & sistem sirkulasi peminjaman buku komunitas — standar DDC, batas 14 hari, & bukti pinjam digital',
    description: 'Template website ruang baca, perpustakaan komunitas, dan sistem sirkulasi arsip buku independen yang dirancang dengan standar anti-slop ketat. Menghadirkan estetika warm archival paper, tipografi sastra Newsreader dan DM Sans, katalog bersistem Dewey Decimal Classification (DDC), pencarian instan berdasarkan judul/penulis/ISBN, lembar sirkulasi interaktif dengan batas kuota 3 buku, perhitungan otomatis tanggal jatuh tempo 14 hari, modal sinopsis detail eksemplar, serta penerbitan bukti peminjaman digital berstempel yang siap dicetak.',
    category: 'perpustakaan',
    tags: ['Perpustakaan', 'Peminjaman Buku', 'Sirkulasi Arsip', 'Ruang Baca', 'Dewey Decimal DDC', 'Anti-Slop Spec', 'Struk Peminjaman'],
    technologies: ['HTML5', 'Vanilla CSS', 'Vanilla JS', 'Newsreader & DM Sans'],
    thumbnailSvgType: 'perpustakaan',
    previewComponentKey: 'library-aksara',
    htmlPath: '/templates/perpustakaan/aksara.html',
    htmlFolderPath: 'templates/perpustakaan/aksara.html',
    features: [
      'Arsitektur mandiri single-file (HTML + CSS + JS) tanpa framework atau dependensi luar',
      'Katalog buku nyata dengan foto sampul berkualitas, pengarang orisinal, dan nomor panggil DDC resmi',
      'Filter multi-kategori (Sastra, Sejarah, Filsafat, Sains) serta tombol status ketersediaan di rak',
      'Lembar peminjaman interaktif dengan batas kuota pinjam 3 buku dan kalkulasi tanggal jatuh tempo 14 hari otomatis',
      'Modal detail buku lengkap dengan sinopsis sastra, data penerbit, ISBN, dan nomor rak fisik',
      'Modal tiket sirkulasi peminjaman digital berstempel resmi dan fitur cetak bukti pinjam (print-ready)'
    ],
    usageInstructions: [
      'Buka templates/perpustakaan/aksara.html atau public/templates/perpustakaan/aksara.html di text editor.',
      'Sesuaikan daftar buku di array catalogBooks dengan koleksi perpustakaan atau ruang baca fisikmu.',
      'Atur durasi peminjaman pada fungsi getLoanScheduleDates jika ingin durasi berbeda (default 14 hari).',
      'Jalankan langsung di browser untuk meja sirkulasi offline atau integrasikan dengan sistem database perpustakaan.'
    ],
    sourceFiles: [
      {
        filename: 'aksara.html',
        language: 'html',
        content: `<!-- Pustaka Aksara — Ruang Baca & Sirkulasi Arsip Komunitas -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Pustaka Aksara — Ruang Baca & Sirkulasi Arsip Komunitas</title>
</head>
<body>
  <!-- Standalone Library Circulation System -->
</body>
</html>`,
        description: 'File mandiri HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt sistem sirkulasi perpustakaan & arsip ruang baca komunitas Pustaka Aksara berstandar anti-slop.',
      designDirection: 'Warm archival paper (#f7f4ed), deep charcoal ink (#1b1e1b), forest library green (#234133), dan archival rust (#9e3d24). Tipografi Newsreader serif, DM Sans, dan JetBrains Mono.',
      layoutAndGrid: 'Editorial top notice banner, hero archive dispatch dengan papan aturan peminjaman, serta workspace sirkulasi 2 kolom (katalog rak buku di kiri dan lembar peminjaman sticky di kanan).',
      typographyAndColor: 'Newsreader serif berkarakter sastra untuk judul dan display, DM Sans untuk teks fungsional, dan JetBrains Mono untuk kode klasifikasi DDC dan nomor panggil.',
      interactions: 'Filter kategori instan, penambahan koleksi ke lembar sirkulasi dengan validasi kuota 3 buku, modal sinopsis detail, dan penerbitan tiket peminjaman digital siap cetak.',
      technicalRequirements: '100% standalone single-file HTML, responsif smartphone hingga desktop, anti-slop verified.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-05-04',
    livePreviewAvailable: true,
    accentColor: '#234133'
  },
  {
    id: 'tpl-22',
    slug: 'rukun-buah-segar',
    title: 'Rukun Buah',
    tagline: 'Pasar & kedai buah segar harian — sistem timbangan digital presisi, garansi manis brix, & layanan potong higienis',
    description: 'Template website penjualan buah segar dan retail pasar buah modern dengan desain organic-rounded anti-slop. Dilengkapi etalase 12 buah segar (Lokal Nusantara & Impor Premium) dengan foto jernih, sistem simulasi timbangan digital interaktif (preset 250g, 500g, 1kg, 2kg, kalkulasi harga gramatur otomatis), opsi kupas & potong siap santap, modal profil rasa (Brix sweetness meter, tingkat asam, tekstur daging buah), serta keranjang timbangan dinamis yang langsung menghasilkan rekap pesanan siap kirim ke WhatsApp.',
    category: 'buah',
    tags: ['Toko Buah', 'Pasar Buah Segar', 'Sistem Timbangan', 'Retail Buah', 'Garansi Manis Brix', 'Kupas & Potong', 'WhatsApp Order'],
    technologies: ['HTML5', 'Vanilla CSS', 'Vanilla JS', 'Outfit & Plus Jakarta Sans'],
    thumbnailSvgType: 'buah',
    previewComponentKey: 'fruit-rukun-buah',
    htmlPath: '/templates/buah/rukun-buah.html',
    htmlFolderPath: 'templates/buah/rukun-buah.html',
    features: [
      '100% file mandiri tunggal (HTML + CSS + JS) siap buka di browser tanpa dependensi eksternal',
      'Sistem timbangan digital interaktif dengan visual LED screen, kalkulator harga gramatur dinamis, dan estimasi berat muatan',
      'Katalog 12 buah segar dengan foto nyata berkualitas, filter multi-kategori, dan live search instan',
      'Indikator kualitas nyata: Brix Sweetness Meter (°Bx), tingkat keasaman, asal kebun, dan tips penyimpanan ideal',
      'Pilihan servis potong higienis dan wadah food-grade siap santap',
      'Keranjang timbangan slide-out dengan akumulasi total kilogram dan checkout WhatsApp terformat rapi'
    ],
    usageInstructions: [
      'Buka templates/buah/rukun-buah.html di code editor Anda.',
      'Sesuaikan daftar buah, foto produk, dan harga per kilogram pada array FRUIT_PRODUCTS.',
      'Ubah nomor WhatsApp pada fungsi checkoutWhatsApp dengan kontak kasir toko buah Anda.',
      'Dapat digunakan sebagai website etalase katalog online maupun display tablet timbangan di counter toko.'
    ],
    sourceFiles: [
      {
        filename: 'rukun-buah.html',
        language: 'html',
        content: `<!-- Rukun Buah — Pasar & Kedai Buah Segar dengan Sistem Timbangan Digital -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>RUKUN BUAH — Pasar & Kedai Buah Segar</title>
</head>
<body>
  <div class="top-ticker">PANEN HARI INI: MANGGA HARUM MANIS 15° BRIX</div>
  <header class="site-header">
    <div class="brand-text"><h1>RUKUN BUAH</h1></div>
  </header>
  <main>
    <section class="hero-scale-card">
      <div class="scale-digital-display">
        <div class="scale-weight-val">0.500<small>kg</small></div>
      </div>
    </section>
  </main>
</body>
</html>`,
        description: 'File mandiri HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt website toko buah segar dan sistem timbangan digital interaktif Rukun Buah berstandar anti-slop.',
      designDirection: 'Fresh organic fruit market: Botanical Leaf Green (#2D6A4F), Warm Paper Cream (#FAF7F0), Citrus Papaya (#E8590C), dan Mango Honey (#D97706). Rounded containers 16-24px elegan anti-slop.',
      layoutAndGrid: 'Top panen ticker, masthead toko buah, hero split dengan simulasi meja timbang digital interaktif, katalog etalase responsif 4 kolom, studio timbangan tera, dan keranjang pesanan slide-out.',
      typographyAndColor: 'Outfit display bold untuk nama buah dan angka timbangan, Plus Jakarta Sans untuk kenyamanan membaca deskripsi.',
      interactions: 'Simulasi timbangan digital real-time, pilihan gramatur 250g-2kg per buah, modal profil rasa dan brix kemanisan, serta integrasi pemesanan WhatsApp otomatis.',
      technicalRequirements: 'Zero dependencies, 100% standalone single-file HTML, responsif smartphone hingga desktop.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-05-08',
    livePreviewAvailable: true,
    accentColor: '#2D6A4F'
  },
  {
    id: 'tpl-14',
    slug: 'sinau-study-workspace',
    title: 'SINAU',
    tagline: 'Ruang belajar digital & academic tracker mandiri untuk siswa sekolah',
    description: 'Template website ruang belajar mandiri, agenda tugas sekolah, dan sistem pelacak akademik yang dirancang khusus untuk pelajar SMP, SMA, SMK, maupun mahasiswa. Dilengkapi jadwal pelajaran mingguan interaktif (Senin-Jumat) dengan status kelas aktif, buku agenda tugas & PR dengan filter prioritas dan hitung mundur deadline, kalkulator rekap nilai rapor & kartu hasil studi berbasis weighted average otomatis, timer fokus belajar Pomodoro 25 menit, serta scratchpad catatan rumus cepat dengan penyimpanan offline-first di browser.',
    category: 'sekolah',
    tags: ['Sekolah', 'Akademik', 'Jadwal Pelajaran', 'Buku Tugas', 'Pomodoro Timer', 'Rekap Nilai Rapor', 'Anti-Slop Spec'],
    technologies: ['HTML5', 'Vanilla CSS', 'Vanilla JS', 'LocalStorage', 'Offline First'],
    thumbnailSvgType: 'sekolah',
    previewComponentKey: 'sekolah-sinau',
    htmlPath: '/templates/sekolah/sinau.html',
    htmlFolderPath: 'templates/sekolah/sinau.html',
    features: [
      'Struktur mandiri 1-file tunggal (HTML + CSS + JS) siap pakai langsung di browser tanpa perlu server, node.js, atau database eksternal',
      'Jadwal pelajaran mingguan interaktif (Senin s/d Jumat) dengan deteksi hari aktif, info jam, ruang kelas, guru pengampu, dan formulir tambah mapel',
      'Buku agenda tugas & PR mandiri dengan filter status (Semua, Belum Selesai, Mendesak, Selesai), badge prioritas warna, dan checklist interaktif',
      'Kartu hasil studi & rekap nilai rapor otomatis dengan perhitungan bobot (Tugas 20%, UH 30%, PTS 25%, PAS 25%) dan slider simulasi target ujian',
      'Timer fokus belajar Pomodoro (25m fokus, 5m rehat) dengan pilihan mata pelajaran aktif dan counter sesi harian',
      'Penyimpanan lokal (LocalStorage) otomatis — data tugas, nilai, dan jadwal tersimpan aman di browser siswa',
      'Desain print-friendly (@media print) yang rapi untuk langsung mencetak jadwal dan kartu nilai ke kertas A4'
    ],
    usageInstructions: [
      'Buka templates/sekolah/sinau.html di web browser kamu.',
      'Klik profil di kanan atas untuk menyesuaikan nama siswa dan kelas/jurusan.',
      'Buka tab Jadwal Pelajaran untuk menambah atau menghapus mata pelajaran sesuai jadwal sekolahmu.',
      'Gunakan Buku Tugas untuk mencatat PR dan pantau nilai rapor secara berkala di tab Rekap Nilai.'
    ],
    sourceFiles: [
      {
        filename: 'sinau.html',
        language: 'html',
        content: `<!-- SINAU — Ruang Belajar & Academic Tracker Pelajar Mandiri -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>SINAU — Ruang Belajar & Academic Tracker</title>
  <style>
    :root {
      --bg: #faf8f3;
      --navy: #1f364d;
      --terracotta: #c44525;
      --sage: #2a7e68;
      --serif: "Newsreader", serif;
      --sans: "Plus Jakarta Sans", sans-serif;
      --mono: "JetBrains Mono", monospace;
    }
  </style>
</head>
<body>
  <div class="top-notice">SINAU // EDISI PELAJAR — Meja Belajar Digital Mandiri</div>
  <header>
    <h1>SINAU<span>.</span> STUDY WORKSPACE</h1>
    <nav>Dashboard · Jadwal Pelajaran · Buku Tugas · Rekap Nilai · Timer Fokus</nav>
  </header>
  <!-- Full functional schedule, tasks, grades & pomodoro -->
</body>
</html>`,
        description: 'File mandiri HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt website meja belajar digital, jadwal pelajaran, agenda PR, dan rekap nilai rapor SINAU berstandar anti-slop.',
      designDirection: 'Warm paper study desk: Paper Warm Cream (#FAF8F3), Academic Navy (#1F364D), Restrained Terracotta (#C44525), dan Sage (#2A7E68). Tipografi Newsreader serif editorial berpadu dengan Plus Jakarta Sans dan JetBrains Mono.',
      layoutAndGrid: 'Summary metric strip 4 kolom (Target Jam Fokus, Tugas Pending, Rata-Rata Nilai, Jadwal Hari Ini), grid jadwal pelajaran mingguan per hari, list agenda tugas berfilter prioritas, tabel nilai rapor interaktif, dan studio timer Pomodoro.',
      typographyAndColor: 'Kombinasi Newsreader untuk judul sastra akademis dan Plus Jakarta Sans untuk kejelasan antarmuka formulir.',
      interactions: 'Checklist tugas interaktif dengan animasi selesai, input nilai kalkulasi otomatis, slider simulasi nilai PAS, timer Pomodoro dengan interval waktu, dan penyimpanan lokal (LocalStorage).',
      technicalRequirements: 'Zero dependencies, 100% standalone single-file HTML, responsif smartphone hingga desktop, print stylesheet.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-05-10',
    livePreviewAvailable: true,
    accentColor: '#1F364D'
  },
  {
    id: 'tpl-15',
    slug: 'kala-sangrai-roastery',
    title: 'Kala Sangrai',
    tagline: 'Specialty coffee roastery, single origin cupping & slow bar',
    description: 'Template website kedai kopi specialty, artisan micro-roastery, dan slow bar manual brew dengan palet warna cokelat sangrai espresso pekat, karamel madu, dan aksen kuningan vintage. Dilengkapi live roasting batch ticker, kartu spesimen cupping rasa (tasting notes blueberry, dark cocoa, wine) dengan sensory radar bar interaktif, interactive brew lab selector (V60, Japanese Iced, Aeropress, Syphon, E61 Espresso) yang menampilkan rasio & grind size secara dinamis, katalog minuman & pastry oven fresh, serta slide-over coffee tray dengan pemesanan langsung ke WhatsApp Barista.',
    category: 'cafe',
    tags: ['Cafe', 'Specialty Coffee', 'Micro Roastery', 'Slow Bar', 'Manual Brew V60', 'Tasting Notes', 'Anti-Slop Spec'],
    technologies: ['HTML5', 'Vanilla CSS', 'Vanilla JS', 'Interactive Brew Lab', 'WhatsApp Tray'],
    thumbnailSvgType: 'cafe',
    previewComponentKey: 'cafe-kalasangrai',
    htmlPath: '/templates/cafe/kala-sangrai.html',
    htmlFolderPath: 'templates/cafe/kala-sangrai.html',
    features: [
      'Palet warna aroma kopi autentik: Deep roasted espresso (#120E0B), mocha (#3D261D), warm caramel (#C97A3E), dan creamy crema milk (#F5EBE1)',
      'Live Roasting Ticker: Status resting biji sangrai fresh batch mingguan & jam operasional kedai',
      'Interactive Specimen Cupping Card: Tasting notes buah/cokelat & sensory rating bar (Acidity, Body, Sweetness)',
      'Interactive Brew Lab Selector: Simulasi metode seduh V60, Japanese Drip, Aeropress, Syphon & E61 dengan parameter rasio, suhu, dan waktu dinamis',
      'Etalase menu racikan lengkap: Single Origin Manual, Espresso & White, Signature Mocktails, dan Pastry Oven',
      'Slide-Over Coffee Tray: Keranjang pesanan meja interaktif dengan kalkulasi subtotal dan checkout WhatsApp Barista terformat rapi',
      '100% Standalone 1-file mandiri (HTML + CSS + JS) tanpa framework atau dependensi npm eksternal'
    ],
    usageInstructions: [
      'Buka templates/cafe/kala-sangrai.html di editor kode kamu.',
      'Sesuaikan daftar menu dan harga kopi pada array MENU_ITEMS di dalam tag script.',
      'Ganti nomor WhatsApp pada fungsi checkoutWhatsApp dengan kontak kasir/barista kedai kopimu.',
      'Bisa langsung dijalankan di browser untuk website kedai kopi atau menu digital tablet di meja tamu.'
    ],
    sourceFiles: [
      {
        filename: 'kala-sangrai.html',
        language: 'html',
        content: `<!-- KALA SANGRAI — Specialty Coffee Roastery & Slow Bar -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>KALA SANGRAI — Specialty Coffee Roastery</title>
  <style>
    :root {
      --roast-dark: #120e0b;
      --espresso: #3d261d;
      --caramel: #c97a3e;
      --crema: #f5ebe1;
      --font-display: 'Syne', sans-serif;
    }
  </style>
</head>
<body>
  <div class="top-ticker">ROASTERY STATUS: BATCH #184 GAYO ANAEROB NATURAL</div>
  <header>
    <h1>KALA SANGRAI<span>.</span></h1>
    <nav>Brew Lab · Single Origin · Menu Minuman · Workshop</nav>
  </header>
  <!-- Full functional slow bar, cupping tasting & WhatsApp tray -->
</body>
</html>`,
        description: 'File mandiri HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt website kedai kopi specialty coffee roastery dan slow bar Kala Sangrai dengan palet warna aroma kopi kaya.',
      designDirection: 'Deep roasted espresso (#120E0B), warm mocha (#3D261D), burnt caramel (#C97A3E), dan milk crema (#F5EBE1). Tipografi Syne bold display berpadu dengan Plus Jakarta Sans dan JetBrains Mono.',
      layoutAndGrid: 'Top batch ticker, hero split dengan kartu spesimen cupping sensorik biji kopi, panel interaktif brew lab extraction method, etalase menu racikan 4 kolom, dan drawer coffee tray slide-out.',
      typographyAndColor: 'Tipografi modern artisan Syne untuk headline dramatis dan JetBrains Mono untuk rasio seduh presisi.',
      interactions: 'Interactive brew method selector (rasio, temperatur, waktu seduh), coffee tray cart pemesanan meja, dan tombol WhatsApp checkout.',
      technicalRequirements: 'Zero dependencies, 100% standalone single-file HTML, responsif smartphone hingga desktop.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-05-12',
    livePreviewAvailable: true,
    accentColor: '#C97A3E'
  },
  {
    id: 'tpl-16',
    slug: 'kantin-sekolah-selasar',
    title: 'Kantin Selasar',
    tagline: 'Dapur sehat, gorengan hangat & pujasera jajanan sekolah',
    description: 'Template website kantin dan pujasera sekolah bernuansa tradisional-hangat namun berpenampilan rapi, profesional, dan bebas gaya cyber. Dilengkapi status operasional jam istirahat sekolah (Istirahat 1 & 2), paket komplit hemat murid (Indomie kuah telur sawi + bakwan + es teh jumbo), etalase menu lengkap 12 jajanan dengan fotografi asli dari internet (gorengan bakwan sayur garing, tahu isi pedas, mie nyemek, nasi uduk, soto ayam, es teh jumbo), jadwal menu masakan harian papan tulis kapur (Senin-Jumat), formulir titip pesan jam istirahat untuk perwakilan kelas, simulasi saldo kartu pelajar RFID pojok kejujuran, serta nota jajan slide-over dengan tombol checkout WhatsApp langsung ke Ibu Kantin.',
    category: 'sekolah',
    tags: ['Kantin Sekolah', 'Pujasera', 'Gorengan & Mie', 'Indomie Telur', 'Pojok Kejujuran', 'Titip Pesan Istirahat', 'Kartu Pelajar RFID'],
    technologies: ['HTML5', 'Vanilla CSS Grid', 'Vanilla JS State', 'Chalkboard Blackboard', 'WhatsApp Checkout'],
    thumbnailSvgType: 'education',
    previewComponentKey: 'sekolah-kantin-selasar',
    htmlPath: '/templates/sekolah/kantin.html',
    htmlFolderPath: 'templates/sekolah/kantin.html',
    features: [
      'Palet warna tradisional hangat khas selasar sekolah: Cream kertas jadul (#FAF7F0), papan tulis kapur hijau tua (#1B3529), aksen terakota cabe (#C85A32), dan kayu jati (#4E3629)',
      'Live Ticker Istirahat: Status operasional kantin berdasarkan bel istirahat 1 (09.45) & istirahat 2 (12.00) serta lokasi gerai',
      'Fotografi Makanan Nyata dari Web: Foto jernih resolusi tinggi untuk 12 menu (Gorengan bakwan panas, tahu isi, Indomie telur sawi, nasi uduk, mie nyemek, soto ayam, es teh jumbo, kopi tubruk)',
      'Papan Tulis Menu Spesial Harian: Display jadwal masakan Ibu Kantin dari Senin hingga Jumat bergaya chalkboard klasik',
      'Formulir Titip Pesan Rombongan Kelas: Pesan sebelum bel berbunyi untuk menghindari antrean panjang, otomatis terformat rapi ke WhatsApp',
      'Pojok Kejujuran & Cek Saldo RFID: Nilai integritas kejujuran berpadu simulasi kartu jajan santri/siswa dengan pengecekan saldo dan riwayat transaksi',
      'Slide-Over Nota Jajan: Keranjang belanja berdesain struk kasir dengan penambahan kuantitas dan kalkulasi otomatis',
      '100% Standalone 1-file mandiri (HTML + CSS + JS) tanpa framework eksternal atau dependensi npm'
    ],
    usageInstructions: [
      'Buka templates/sekolah/kantin.html di code editor kamu.',
      'Sesuaikan daftar menu jajanan, harga, dan foto di array CANTEEN_MENU pada script tag.',
      'Ganti nomor WhatsApp tujuan pemesanan di fungsi submitPreorderWhatsApp dan checkoutViaWhatsApp dengan nomor pengelola kantin/koperasi sekolah.',
      'Bisa langsung dibuka di browser tablet di meja etalase kantin atau diakses siswa dari HP.'
    ],
    sourceFiles: [
      {
        filename: 'kantin.html',
        language: 'html',
        content: `<!-- KANTIN SELASAR — Dapur Sehat & Jajanan Sekolah Nusantara -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>KANTIN SELASAR — Dapur Sehat & Jajanan Sekolah</title>
  <style>
    :root {
      --bg-cream: #FAF7F0;
      --chalkboard: #1B3529;
      --terracotta: #C85A32;
      --turmeric: #D97706;
      --font-display: 'Fraunces', serif;
    }
  </style>
</head>
<body>
  <div class="canteen-ticker">STATUS KANTIN: DIBUKA · ISTIRAHAT 1 (09.45 — 10.15 WIB)</div>
  <header>
    <h1>KANTIN SELASAR<span>.</span></h1>
    <nav>Daftar Jajan · Menu Spesial · Titip Pesan · Pojok Kejujuran</nav>
  </header>
  <!-- Full functional canteen menu, chalkboard schedule, break pre-order & RFID balance -->
</body>
</html>`,
        description: 'Single-file standalone HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt website kantin dan pujasera sekolah nusantara dengan palet warna tradisional hangat, foto jajanan nyata, papan tulis menu spesial, dan formulir titip pesan jam istirahat.',
      designDirection: 'Hangat tradisional selasar sekolah: Paper Warm Cream (#FAF7F0), Chalkboard Green (#1B3529), Terracotta (#C85A32), Turmeric (#D97706), dan Teak Wood (#4E3629). Tipografi Fraunces serif klasik berpadu dengan Plus Jakarta Sans dan JetBrains Mono.',
      layoutAndGrid: 'Top break ticker, hero split dengan paket hemat murid berfoto nyata, grid menu jajanan 4 kolom, papan jadwal harian kayu chalkboard 5 hari, formulir titip pesan kelas 2 kolom, dan slide-over nota struk jajan.',
      typographyAndColor: 'Tipografi Fraunces untuk papan nama kantin bernuansa hangat dan JetBrains Mono untuk nota kalkulasi harga.',
      interactions: 'Tab kategori menu seketika, penambahan jajanan ke nota belanja dengan counter +/- dinamis, selector jam istirahat, tombol kirim format WhatsApp, dan simulasi cek saldo kartu RFID siswa.',
      technicalRequirements: 'Zero dependencies, 100% standalone single-file HTML, responsif smartphone hingga desktop.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-05-14',
    livePreviewAvailable: true,
    accentColor: '#C85A32'
  },
  {
    id: 'tpl-17',
    slug: 'miau-cattery-boutique',
    title: 'MIAU & CO.',
    tagline: 'Cattery kurasi kucing ras berpedigree & pet boutique estetik',
    description: 'Template website cattery resmi dan pet shop boutique dengan palet warna soft blush pink dan berry magenta yang manis, elegan, dan profesional. Menampilkan etalase anabul adopsi berbagai ras populer (British Shorthair, Ragdoll, Scottish Fold, Persian, Maine Coon, Bengal, Munchkin, hingga program rescue spesial) dengan fotografi nyata berkualitas tinggi dari web. Dilengkapi sistem filter ras dan jenis kelamin interaktif, pencarian realtime, fitur inspeksi profil kucing mendalam (dossier medis vaksin F3/F4, tes FeLV/FIV negatif, nomor microchip, sertifikat silsilah CFA/ICA, umur, warna bulu, temperamen/karakter), paket gratis starter kit transisi rumah baru, serta integrasi tombol chat WhatsApp yang otomatis memuat data lengkap kucing yang di-inspect.',
    category: 'pet',
    tags: ['Pet Shop', 'Cattery Kucing', 'Adopsi Hewan', 'Soft Pink Magenta', 'Inspect Profil Kucing', 'British Shorthair', 'Ragdoll', 'Dossier Medis Anabul'],
    technologies: ['HTML5', 'Vanilla CSS3', 'Vanilla JS Modal', 'Dynamic Filter', 'WhatsApp Adoption Flow'],
    thumbnailSvgType: 'pet',
    previewComponentKey: 'pet-miau-cattery',
    htmlPath: '/templates/pet/miau-cattery.html',
    htmlFolderPath: 'templates/pet/miau-cattery.html',
    features: [
      'Palet visual soft blush pink (#FDF2F4), berry magenta (#B82E66), dan deep plum (#22151B) yang manis, hangat, dan anti-slop',
      'Etalase 10 Kucing Ras dengan Foto Nyata: British Shorthair, Ragdoll Seal Point, Scottish Fold, Persian White, Maine Coon, Bengal Leopard, Munchkin Golden, Calico Rescue Peduli',
      'Fitur Utama Cat Inspector Modal: Klik inspect pada setiap kucing untuk membuka rekam medis vaksinasi F3/F4, hasil tes FeLV/FIV, nomor chip, silsilah ras pedigree, umur, dan catatan karakter sifat',
      'Filter Interaktif Cepat: Filter berdasarkan ras, jenis kelamin (Jantan ♂ / Betina ♀), serta pencarian kata kunci nama & sifat',
      'Integrasi Chat Adopsi WhatsApp: Menghasilkan pesan terstruktur siap kirim dengan nama kucing, ras, umur, dan ID microchip',
      'Gratis Starter Kit Transisi Rumah Baru: Rincian bonus makanan Royal Canin/Orijen, travel carrier box, buku medis, mangkuk keramik, dan mainan bulu',
      'Standar Kesejahteraan Hewan: Garansi kesehatan 14 hari dokter hewan, cattery bebas kandang sempit (zero-cage living), dan pendampingan seumur hidup',
      '100% Standalone Single-File (HTML5 + CSS + JS) tanpa framework eksternal atau build step'
    ],
    usageInstructions: [
      'Buka templates/pet/miau-cattery.html di code editor Anda.',
      'Perbarui atau tambahkan data anabul di array CATS_DATABASE pada tag script (foto, ras, umur, harga, dan riwayat vaksin).',
      'Ganti nomor WhatsApp tujuan adopsi dengan nomor resmi cattery atau petshop Anda.',
      'Dapat langsung dibuka di browser desktop, tablet meja etalase, atau smartphone adopter.'
    ],
    sourceFiles: [
      {
        filename: 'miau-cattery.html',
        language: 'html',
        content: `<!-- MIAU & CO. — Cattery Kurasi, Adopsi Ras & Pet Care Boutique -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>MIAU & CO. — Cattery Kurasi & Pet Care Boutique</title>
  <style>
    :root {
      --bg-body: #FFF9FA;
      --bg-blush: #FDF2F4;
      --magenta-primary: #B82E66;
      --magenta-hover: #9E1B4E;
      --text-ink: #22151B;
      --border-pink: #F3D5DE;
      --font-serif: 'Playfair Display', Georgia, serif;
      --font-sans: 'Plus Jakarta Sans', sans-serif;
    }
  </style>
</head>
<body>
  <div class="top-announcement">MIAU & CO. — Cattery Resmi Terdaftar CFA & ICA · 14 Hari Garansi Medis</div>
  <header>
    <h1>MIAU<span>&</span>CO.</h1>
    <nav>Etalase Kucing · Standar Etis · Starter Kit · Panduan Adopsi</nav>
  </header>
  <!-- Full functional Cat Showcase, Breed Filter, Medical Dossier Inspector, and WhatsApp Adoption Flow -->
</body>
</html>`,
        description: 'Single-file standalone HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt website cattery kurasi dan pet boutique MIAU & CO. dengan warna soft blush pink dan berry magenta, foto kucing berbagai ras asli, modal inspect profil medis mendalam, dan integrasi adopsi WhatsApp.',
      designDirection: 'Manis elegan berstandar editorial tinggi: Soft Blush Pink (#FDF2F4), Rose Paper Cream (#FFF9FA), Berry Magenta (#B82E66), Deep Plum Charcoal (#22151B), dan Soft Gold (#C97A3E). Menggunakan tipografi Playfair Display dan Plus Jakarta Sans.',
      layoutAndGrid: 'Top announcement bar, hero split dengan spotlight anabul minggu ini, toolbar filter pencarian & ras tab horizontal, grid etalase kartu kucing 3 kolom responsif, section standar etis zero-cage 4 kolom, dan modal inspect 2 kolom (foto + dossier rekam medis lengkap).',
      typographyAndColor: 'Playfair Display untuk nama kucing dan headline hangat, Plus Jakarta Sans untuk keterbacaan info medis, dan JetBrains Mono untuk kode microchip dan ID silsilah.',
      interactions: 'Pencarian real-time, filter ras dan jenis kelamin, modal inspect profil kucing lengkap dengan trigger WhatsApp kustom, accordion tanya-jawab, dan mobile navigation drawer.',
      technicalRequirements: 'Zero dependencies, single file standalone HTML, fully responsive dari 360px hingga 1440px.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-05-15',
    livePreviewAvailable: true,
    accentColor: '#B82E66'
  },
  {
    id: 'tpl-18',
    slug: 'dough-and-glaze-donat',
    title: 'DOUGH & GLAZE',
    tagline: 'Artisan brioche & potato donut bar dengan pilihan boks dan ekstra topping',
    description: 'Template aplikasi web pemesanan dan etalase toko donat modern dengan palet warna soft warm buttery yellow dan amber caramel yang menggugah selera, hangat, dan anti-slop. Menampilkan etalase 10 varian donat artisan (donat kentang kampung jadul gula salju, brioche vanilla glaze, bomboloni Nutella lumer, bomboloni strawberry cheesecake, salted caramel lotus biscoff, pistachio kunafa, matcha Uji Kyoto, hingga tiramisu mascarpone) dengan foto resolusi tinggi asli dari web. Dilengkapi selector ukuran & kemasan (Satuan, Trio Box isi 3, Half Dozen isi 6, Full Dozen hampers isi 12), modal customizer donat untuk memilih ekstra topping (almond slice, biscoff crumbles, sprinkles, chocolate shavings, ekstra filling) dan level kemanisan, live batch frying ticker, serta slide-over keranjang donat dengan checkout instan ke WhatsApp.',
    category: 'donat',
    tags: ['Toko Donat', 'Donat Kentang', 'Bomboloni Lumer', 'Artisan Bakery', 'Soft Yellow Butter', 'Custom Topping', 'Box of 6 Hampers', 'WhatsApp Checkout'],
    technologies: ['HTML5', 'Vanilla CSS3', 'Vanilla JS Modal', 'Slide-Over Cart', 'WhatsApp Order Builder'],
    thumbnailSvgType: 'bakery',
    previewComponentKey: 'donat-dough-and-glaze',
    htmlPath: '/templates/donat/dough-and-glaze.html',
    htmlFolderPath: 'templates/donat/dough-and-glaze.html',
    features: [
      'Palet warna soft buttery yellow (#F5C642), custard cream (#FFFDF7), dan amber caramel crust (#B46522) yang hangat, lezat, dan ramah mata',
      'Etalase 10 Varian Donat Artisan dengan Foto Nyata: Glaze Biscoff, Bomboloni Nutella, Belgian Dark Choco 70%, Kentang Salju Jadul, Pistachio Kunafa, Strawberry Cheesecake, Matcha Uji, Tiramisu',
      'Pilihan Ukuran & Kemasan Fleksibel: Satuan (1 Pcs), Trio Box (Isi 3), Half Dozen (Isi 6 - Bestseller), dan Full Dozen (Isi 12 - Hampers Hadiah Pita)',
      'Modal Customizer Donat Lengkap: Pilihan ukuran, opsi ekstra topping (Almond, Biscoff, Sprinkles, Choco Shavings, Extra Filling), level kemanisan (Normal / Less Sugar), dan counter jumlah',
      'Slide-Over Keranjang Kotak Donat: Rincian pesanan interaktif, input kartu ucapan hampers / catatan lilin ulang tahun, dan kalkulasi subtotal otomatis',
      'Integrasi Checkout WhatsApp Instan: Men-generate format chat WhatsApp rapi berisi daftar rasa donat, ukuran box, topping, total bayar, dan ucapan kartu',
      'Live Batch Frying Ticker: Display jadwal penggorengan donat baru matang dan di-glaze (08.00, 11.30, 15.00 WIB)',
      '100% Standalone Single-File (HTML5 + CSS + JS) tanpa framework eksternal atau build step'
    ],
    usageInstructions: [
      'Buka templates/donat/dough-and-glaze.html di code editor Anda.',
      'Perbarui atau tambahkan varian rasa donat di array DONUTS_DATABASE pada tag script (foto, harga, kategori rasa, dan badge).',
      'Ganti nomor WhatsApp tujuan pesanan dengan nomor resmi toko donat atau bakery Anda.',
      'Dapat langsung diakses pelanggan dari smartphone, tablet di meja kasir/waiter, atau browser desktop.'
    ],
    sourceFiles: [
      {
        filename: 'dough-and-glaze.html',
        language: 'html',
        content: `<!-- DOUGH & GLAZE — Artisan Brioche & Potato Donut Bar -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>DOUGH & GLAZE — Artisan Donut Bar</title>
  <style>
    :root {
      --bg-cream: #FFFDF7;
      --yellow-butter: #F5C642;
      --caramel-crust: #B46522;
      --text-espresso: #241913;
      --font-serif: 'Playfair Display', Georgia, serif;
      --font-sans: 'Plus Jakarta Sans', sans-serif;
    }
  </style>
</head>
<body>
  <div class="top-batch-ticker">FRESH BATCH DARI PENGGORENGAN · 100% REAL BUTTER</div>
  <header>
    <h1>DOUGH<span>&</span>GLAZE</h1>
    <nav>Menu Donat · Pilihan Box & Ukuran · Filosofi Adonan · Kontak</nav>
  </header>
  <!-- Full functional Donut Etalase, Size Selector, Topping Customizer, Slide-Over Cart, and WhatsApp Order Builder -->
</body>
</html>`,
        description: 'Single-file standalone HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt aplikasi web penjualan donat artisan DOUGH & GLAZE dengan warna soft warm buttery yellow dan amber caramel, foto donat nyata dari web, selector ukuran box, modal customizer topping dan tingkat kemanisan, serta slide-over keranjang checkout WhatsApp.',
      designDirection: 'Hangat, lezat, manis berstandar bakery modern anti-slop: Soft Buttery Yellow (#F5C642), Warm Custard Cream (#FFFDF7), Amber Caramel Crust (#B46522), dan Roasted Coffee Espresso (#241913). Menggunakan tipografi Playfair Display dan Plus Jakarta Sans.',
      layoutAndGrid: 'Top batch ticker, hero split dengan spotlight signature box, visual package cards 4 kolom untuk ukuran kemasan (Single, Box 3, Box 6, Box 12), toolbar pencarian dan filter rasa, grid etalase donat 3 kolom responsif, modal customizer donat 2 kolom, dan slide-over keranjang panel kanan.',
      typographyAndColor: 'Playfair Display untuk headline dan nama varian donat yang menggugah selera, Plus Jakarta Sans untuk opsi topping dan harga, serta JetBrains Mono untuk ticker batch jam penggorengan.',
      interactions: 'Pencarian instan rasa donat, filter kategori donat, modal customizer topping interaktif dengan live price update, penambahan ke slide-over keranjang, counter kuantitas, input kartu hampers, dan kirim format pesanan rapi ke WhatsApp.',
      technicalRequirements: 'Zero dependencies, single file standalone HTML, fully responsive dari 360px hingga 1440px.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-05-16',
    livePreviewAvailable: true,
    accentColor: '#F5C642'
  },
  {
    id: 'tpl-23',
    slug: 'kura-apparel',
    title: 'KURA APPAREL (蔵)',
    tagline: 'Katalog esensial harian gaya Jepang dengan etalase baju, kalkulasi diskon, size selector & order WhatsApp',
    description: 'Template website pemesanan baju & fashion e-commerce dengan estetika minimalis Jepang terinspirasi UNIQLO. Dilengkapi etalase produk foto nyata, label diskon krisp, preview modal detail, pemilih warna & ukuran (XS-XXL), panduan ukuran (size chart), serta slide-over keranjang belanja terintegrasi checkout WhatsApp.',
    category: 'fashion',
    tags: ['Fashion', 'Toko Baju', 'Uniqlo Style', 'Size Selector', 'E-Commerce UMKM', 'WhatsApp Checkout', 'Lifewear'],
    technologies: ['HTML5', 'Vanilla CSS3', 'Vanilla JS Modal', 'Size Selector System', 'WhatsApp Order Flow'],
    thumbnailSvgType: 'fashion',
    previewComponentKey: 'fashion-kura-apparel',
    htmlPath: '/templates/fashion/kura-apparel.html',
    htmlFolderPath: 'templates/fashion/kura-apparel.html',
    features: [
      'Estetika minimalis ritel Jepang ala Uniqlo: Dominasi merah krisp (#E60012) di atas kanvas putih salju (#FFFFFF) & abu-abu bersih (#F8F8F9)',
      'Etalase 10 Produk Pakaian Foto Nyata: Kaos Supima Heavyweight Boxy, Kemeja Oxford, Field Jacket Utility, Chino Pleated, Parka Windproof, Sweatshirt, Flannel, Raw Selvedge Denim, dan Daily Tote Bag',
      'Preview Modal Produk Interaktif: Galeri multi-foto dengan switcher thumbnail, badge promo mencolok, kalkulasi diskon & harga coret, serta catatan nominal penghematan',
      'Pilihan Ukuran & Stok Real-Time: Selector size lengkap (XS, S, M, L, XL, XXL) dengan indikator stok otomatis per ukuran',
      'Pemilih Warna Dinamis (Color Swatches): Swatch warna interaktif yang memperbarui label nama warna aktif seketika',
      'Panduan Ukuran (Size Guide) Terpadu: Modal tabel dimensi Lebar Dada, Panjang Baju, Lebar Bahu, dan rekomendasi postur badan',
      'Slide-Over Keranjang Belanja: Panel geser kanan dengan progres bar gratis ongkir (min. Rp 299rb), kalkulasi potongan diskon otomatis, dan formulir data penerima',
      'Direct WhatsApp Order Builder: Menghasilkan format pesan pemesanan baju terstruktur (nama barang, warna, size, jumlah, harga diskon, alamat kirim) siap kirim ke penjual',
      '100% Standalone Single-File (HTML5 + CSS + JS) tanpa framework eksternal atau build step'
    ],
    usageInstructions: [
      'Buka templates/fashion/kura-apparel.html di editor kode Anda.',
      'Perbarui atau tambahkan koleksi pakaian pada array PRODUCTS_DATA di dalam tag script (foto, harga asli, harga diskon, ukuran, dan warna).',
      'Ganti nomor WhatsApp penjual (variabel waPhone) dengan nomor bisnis atau admin toko baju Anda.',
      'Buka langsung file HTML di browser desktop atau smartphone untuk mulai menerima pesanan pakaian.'
    ],
    sourceFiles: [
      {
        filename: 'kura-apparel.html',
        language: 'html',
        content: `<!-- KURA APPAREL (蔵) — Essential Lifewear & Garment Archive -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>KURA APPAREL (蔵) — Essential Lifewear</title>
  <style>
    :root {
      --uniqlo-red: #E60012;
      --bg-white: #FFFFFF;
      --bg-canvas: #F8F8F9;
      --text-main: #111111;
      --font-sans: 'Plus Jakarta Sans', sans-serif;
    }
  </style>
</head>
<body>
  <div class="top-announcement">PROMO MUSIM INI · GRATIS ONGKIR MIN. RP 299.000</div>
  <header>
    <div class="brand-box">蔵 KURA</div>
    <nav>Kaos · Kemeja · Jaket · Celana · Promo Diskon</nav>
  </header>
  <!-- Full functional Clothing Catalog, Size & Color Selector, Modal Preview, Slide-over Cart & WhatsApp Order Builder -->
</body>
</html>`,
        description: 'Single-file standalone HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt website toko dan pemesanan baju KURA APPAREL dengan estetika minimalis dominan merah ala Uniqlo, etalase pakaian foto nyata, modal preview interaktif, kalkulasi diskon & harga coret, size selector, dan keranjang belanja WhatsApp.',
      designDirection: 'Minimalis modern ritel Jepang berstandar antislop: Uniqlo Red (#E60012), Crimson Red (#C4000F), Pure Snow White (#FFFFFF), Clean Canvas (#F8F8F9), Deep Obsidian Black (#111111), dan Hairline Red Border (#FFCCD1). Menggunakan tipografi Plus Jakarta Sans dan JetBrains Mono.',
      layoutAndGrid: 'Top announcement bar merah, sticky header dengan logo kotak kanji dan navigasi kategori, hero editorial dengan spotlight produk best-seller, toolbar filter chip horizontal, grid etalase baju 4 kolom responsif, modal preview 2 kolom (galeri foto + kontrol ukuran & warna), dan slide-over cart panel kanan.',
      typographyAndColor: 'Plus Jakarta Sans berbobot tebal untuk headline dan nama koleksi baju, JetBrains Mono untuk SKU produk, size tag, dan harga rupiah.',
      interactions: 'Pencarian real-time kata kunci, filter kategori & promo diskon, modal preview cepat dengan pergantian foto thumbnail, selector warna & size interaktif dengan live stock counter, counter kuantitas dengan kalkulasi subtotal dinamis, modal size guide, dan integrasi checkout WhatsApp otomatis.',
      technicalRequirements: 'Zero dependencies, single file standalone HTML, fully responsive dari 360px smartphone hingga 1440px desktop.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-05-18',
    livePreviewAvailable: true,
    accentColor: '#E60012'
  },
  {
    id: 'tpl-19',
    slug: 'maison-nocturne-parfumerie',
    title: 'Maison Nocturne (Atelier de Parfum)',
    tagline: 'Haute parfumerie botani, ekstrak wewangian langka, dan arsip formula malam',
    description: 'Template website haute parfumerie & botanical scent laboratory dengan palet velvet plum (#7C0E44), muted berry mauve (#AA5E7A), dusty rose (#D49A9A), dan warm linen cream (#F2DACE). Dilengkapi piramida olfaktori interaktif (top/heart/base), custom discovery trio builder (3×5ml), live flacon monogram engraving studio, scent finder quiz 3-langkah, pemesanan tester blotter wax-seal, dan slide-over cart terintegrasi pemesanan WhatsApp.',
    category: 'perfumery',
    tags: ['Perfumery', 'Haute Parfumerie', 'Wewangian', 'Boutique Fragrance', 'Discovery Set', 'Engraving Studio', 'Olfactory Archive', 'WhatsApp Checkout'],
    technologies: ['HTML5', 'Vanilla CSS', 'Vanilla JS', 'Interactive Scent Pyramid', 'Custom Discovery Set Builder', 'Live Engraving Canvas', 'WhatsApp Order Flow'],
    thumbnailSvgType: 'perfumery',
    previewComponentKey: 'perfumery-maison-nocturne',
    htmlPath: '/templates/perfumery/maison-nocturne.html',
    htmlFolderPath: 'templates/perfumery/maison-nocturne.html',
    features: [
      'Struktur mandiri 1 file (HTML + CSS + JS) tanpa perlu build step, node_modules, atau framework pihak ketiga',
      'Piramida aroma olfaktori interaktif dengan visualisasi breakdown akord real-time (Top, Heart, dan Base notes)',
      'Custom Discovery Trio Builder (3×5ml) dengan visual 3-slot box, pilihan warna boks presentasi, dan kalkulasi dinamis',
      'Studio Monogram & Live Flacon Engraving dengan simulasi ukiran inisial pada botol kaca secara real-time',
      'Scent Finder Quiz 3-langkah untuk konsultasi digital aroma yang cocok sesuai kepribadian & suasana',
      'Slide-over keranjang belanja terintegrasi pemesanan resmi via WhatsApp beserta data nama & kota pengiriman'
    ],
    usageInstructions: [
      'Buka templates/perfumery/maison-nocturne.html di editor kode Anda.',
      'Sesuaikan daftar koleksi parfum, harga, dan catatan aroma pada objek PERFUMES_DB di dalam tag <script>.',
      'Ganti nomor WhatsApp pemesanan resmi pada fungsi checkoutViaWhatsApp dan bookAtelierVisit.',
      'Buka file HTML langsung di browser desktop atau mobile untuk etalase wewangian langsung aktif.'
    ],
    sourceFiles: [
      {
        filename: 'maison-nocturne.html',
        language: 'html',
        content: `<!-- MAISON NOCTURNE — Parfumerie Botanique & Archives Olfactives -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>MAISON NOCTURNE — Parfumerie Botanique</title>
  <style>
    :root {
      --plum-wine: #7C0E44;
      --berry-mauve: #AA5E7A;
      --dusty-rose: #D49A9A;
      --cream-linen: #F2DACE;
      --cream-light: #FBF4F0;
      --ink-primary: #1F0713;
      --font-serif: 'Cormorant Garamond', Georgia, serif;
    }
  </style>
</head>
<body>
  <div class="top-ticker">ARSIP EDISI 2026 • COMPLIMENTARY VIAL PADA ORDER > RP 450K</div>
  <header>
    <div class="brand-crest">MN</div>
    <h1>MAISON NOCTURNE</h1>
    <nav>Koleksi Ekstrak · Piramida Olfaktori · Discovery Trio · Monogram · Scent Finder · Atelier</nav>
  </header>
  <!-- Full Interactive Parfumerie Experience: Pyramid Explorer, Discovery Coffret Builder, Bottle Engraving & WhatsApp Cart -->
</body>
</html>`,
        description: 'Single-file standalone HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt website atelier haute parfumerie dan wewangian botani MAISON NOCTURNE dengan palet warna velvet plum (#7C0E44), muted berry mauve (#AA5E7A), dusty rose (#D49A9A), dan warm linen cream (#F2DACE). Dilengkapi piramida olfaktori interaktif, custom discovery set builder, live bottle engraving studio, scent quiz, dan slide-over cart WhatsApp.',
      designDirection: 'Editorial luxury perfumery berstandar antislop: Velvet Plum (#7C0E44), Deep Wine (#56082E), Muted Berry Mauve (#AA5E7A), Dusty Rose (#D49A9A), Warm Porcelain Linen (#F2DACE), dan Light Cream Ground (#FBF4F0). Tipografi Cormorant Garamond dan Plus Jakarta Sans.',
      layoutAndGrid: 'Top announcement bar burgundy, sticky editorial header dengan monogram MN, hero showcase asimetris 2 kolom dengan spotlight flacon signature, piramida interaktif 3 tingkat dengan visual bar meter, katalog 6 varian wewangian dengan live search & filter tab, discovery coffret builder 3 slot, studio monogram live flacon, dan slide-over cart drawer kanan.',
      typographyAndColor: 'Cormorant Garamond untuk headline editorial mewah dan nuansa artisanal Grasse/Bandung, Plus Jakarta Sans untuk teks bodi dan kontrol UI, JetBrains Mono untuk spesifikasi batch, konsentrasi 28% Extrait, dan kode formulasi.',
      interactions: 'Piramida olfaktori interaktif dengan transisi akord instan, pencarian dan filter katalog tanpa reload halaman, pemilihan 3 vial ke boks custom dengan visual slot terisi/kosong, simulasi monogram grafir kaca live text rendering, kuis pencari aroma 3-langkah dengan kalkulasi rekomendasi, quick view modal dengan pemilih ukuran botol, dan slide-over cart WhatsApp.',
      technicalRequirements: 'Zero dependencies, single file standalone HTML, fully responsive dari smartphone 360px hingga layar desktop besar.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-11-18',
    livePreviewAvailable: true,
    accentColor: '#7C0E44',
    colorPalette: [
      { hex: '#7C0E44', rgb: 'rgb(124, 14, 68)', name: 'Deep Velvet Plum', role: 'Primary Brand / Header & Crest' },
      { hex: '#AA5E7A', rgb: 'rgb(170, 94, 122)', name: 'Muted Berry Mauve', role: 'Secondary Accent & Button Hover' },
      { hex: '#D49A9A', rgb: 'rgb(212, 154, 154)', name: 'Dusty Rose Blossom', role: 'Soft Border & Tag Highlight' },
      { hex: '#F2DACE', rgb: 'rgb(242, 218, 206)', name: 'Warm Porcelain Linen', role: 'Background Tint & Badge Fill' }
    ]
  },
  {
    id: 'tpl-20',
    slug: 'arung-technical-footwear',
    title: 'ARUNG FOOTWEAR (Technical Sneaker Lab)',
    tagline: 'Rekayasa alas kaki teknikal samudra, sol anti-selip, dan kenyamanan mobilitas iklim tropis',
    description: 'Template website e-commerce teknikal sepatu & sneakers dengan palet samudra Deep Oceanic Navy (#1B365D), Pacific Cobalt (#005A9C), Sky Cerulean (#60C1E5), dan Glacial Ice Aqua (#A0E0EF). Dilengkapi inspektur anatomi sol & midsole 4-lapis dengan gauge meter real-time, colorway studio 4-warna interaktif, smart foot size calculator & fit recommender (panjang cm & karakter lebar toe-box), katalog 6 siluet sepatu teknikal dengan modal quick view, protokol uji lab 1.000 km, kebijakan garansi tukar ukuran 14 hari bebas ongkir, serta slide-over keranjang belanja terintegrasi pemesanan WhatsApp.',
    category: 'footwear',
    tags: ['Footwear', 'Sneakers', 'Sepatu Teknikal', 'Sportswear', 'Ocean Recycled', 'Size Calculator', 'Anatomy Inspector', 'WhatsApp Checkout', 'UMKM Alas Kaki'],
    technologies: ['HTML5', 'Vanilla CSS', 'Vanilla JS', 'Interactive Anatomy Inspector', 'Colorway Studio', 'Foot Size Calculator', 'WhatsApp Order Flow'],
    thumbnailSvgType: 'footwear',
    previewComponentKey: 'footwear-arung-sneakers',
    htmlPath: '/templates/footwear/arung-sneakers.html',
    htmlFolderPath: 'templates/footwear/arung-sneakers.html',
    features: [
      'Struktur mandiri 1 file (HTML + CSS + JS) tanpa perlu build step, node_modules, atau framework pihak ketiga',
      'Inspektur anatomi sol 4-lapis interaktif (3D Ocean-Knit, Hydro-Shield, Cloud-EVA, Vulca-Grip) dengan gauge meter real-time',
      'Colorway Studio 4-warna samudra (Abyssal Navy, Pacific Cobalt, Cerulean Tide, Glacial Ice) dengan live preview rendering',
      'Smart Foot Size Calculator presisi: konversi centimeter ke EU/US/UK dan rekomendasi lebar toe-box',
      'Katalog 6 model sepatu teknikal dengan pencarian instan dan filter kategori tanpa reload halaman',
      'Modal Quick-View detail produk dengan size selector interaktif (EU 39 — 45) dan indikator ketersediaan stok',
      'Slide-over keranjang belanja terintegrasi WhatsApp dengan pengecekan batas bonus kaos kaki teknikal (Rp 499.000)'
    ],
    usageInstructions: [
      'Buka templates/footwear/arung-sneakers.html di editor kode Anda.',
      'Sesuaikan daftar koleksi sepatu, harga, dan spesifikasi pada objek SHOES_DB di dalam tag <script>.',
      'Ganti nomor WhatsApp pemesanan resmi pada fungsi checkoutWA.',
      'Buka file HTML langsung di browser desktop atau mobile untuk etalase sepatu teknikal langsung aktif.'
    ],
    sourceFiles: [
      {
        filename: 'arung-sneakers.html',
        language: 'html',
        content: `<!-- ARUNG FOOTWEAR (阿龍) — Technical Marine Sneaker Lab -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>ARUNG FOOTWEAR — Technical Sneaker Lab</title>
  <style>
    :root {
      --navy-deep: #1B365D;
      --blue-cobalt: #005A9C;
      --blue-cerulean: #60C1E5;
      --blue-ice: #A0E0EF;
      --blue-canvas: #F4F9FD;
      --ink-primary: #0B1C33;
      --font-sans: 'Plus Jakarta Sans', sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }
  </style>
</head>
<body>
  <div class="top-ticker">GARANSI TUKAR UKURAN 14 HARI • UJI 1.000 KM • GRATIS ONGKIR MIN. RP 499.000</div>
  <header>
    <div class="brand-logo-box">AR LAB</div>
    <h1>ARUNG FOOTWEAR</h1>
    <nav>Katalog · Anatomi Sol · Colorway Studio · Ukuran Kaki · Uji Lab</nav>
  </header>
  <!-- Full Interactive Footwear Experience: Anatomy Soling Inspector, Colorway Studio, Size Calculator & WhatsApp Cart -->
</body>
</html>`,
        description: 'Single-file standalone HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt website etalase dan pemesanan sepatu teknikal ARUNG FOOTWEAR dengan palet warna samudra Deep Oceanic Navy (#1B365D), Pacific Cobalt (#005A9C), Sky Cerulean (#60C1E5), dan Glacial Ice Aqua (#A0E0EF). Dilengkapi inspektur anatomi sol 4-lapis, colorway studio, smart foot size calculator, etalase 6 model sepatu, uji lab 1.000 km, dan keranjang belanja WhatsApp.',
      designDirection: 'Technical sportswear & engineered footwear berstandar antislop: Deep Oceanic Navy (#1B365D), Pacific Cobalt (#005A9C), Sky Cerulean (#60C1E5), Glacial Ice Aqua (#A0E0EF), dan Performance Canvas Ground (#F4F9FD). Tipografi Plus Jakarta Sans dan JetBrains Mono.',
      layoutAndGrid: 'Top performance ticker navy, sticky technical navbar dengan logo kotak AR LAB, hero asymmetric showcase 2 kolom dengan spotlight card sepatu signature, panel anatomi sol 4-lapis dengan indikator gauge meter, colorway studio 2 kolom, kalkulator ukuran kaki presisi dengan slider centimeter, grid etalase 6 model sepatu 3 kolom responsif, dan slide-over cart drawer kanan.',
      typographyAndColor: 'Plus Jakarta Sans untuk tajuk performa modern dan kontrol UI tegas, JetBrains Mono untuk spesifikasi teknis, bobot 240g, ukuran EU/US/UK, dan kode SKU.',
      interactions: 'Inspektur anatomi sol dengan transisi gauge meter instan, pergantian colorway live rendering, kalkulasi ukuran kaki real-time dengan rekomendasi fit toe-box, filter katalog tanpa reload, quick view modal dengan pemilih ukuran sepatu, dan slide-over cart WhatsApp.',
      technicalRequirements: 'Zero dependencies, single file standalone HTML, fully responsive dari smartphone 360px hingga layar desktop besar.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-11-18',
    livePreviewAvailable: true,
    accentColor: '#1B365D',
    colorPalette: [
      { hex: '#1B365D', rgb: 'rgb(27, 54, 93)', name: 'Deep Oceanic Navy', role: 'Primary Anchor / Soling Chassis & Dark Header' },
      { hex: '#005A9C', rgb: 'rgb(0, 90, 156)', name: 'Pacific Cobalt Blue', role: 'Hydro Dynamics & Primary Action Button' },
      { hex: '#60C1E5', rgb: 'rgb(96, 193, 229)', name: 'Sky Cerulean Wave', role: 'Technical Accent & Performance Gauge Bar' },
      { hex: '#A0E0EF', rgb: 'rgb(160, 224, 239)', name: 'Glacial Ice Aqua', role: 'Reflective Highlight, Badge Base & Pill Fill' }
    ]
  },
  {
    id: 'tpl-21',
    slug: 'kemas-lab-packaging',
    title: 'KEMAS LAB (EcoPack & Sablon Studio)',
    tagline: 'Solusi kemasan ramah lingkungan, sablon kustom MOQ bersahabat, dan cetak presisi untuk UMKM kuliner & ritel',
    description: 'Template website studio percetakan kemasan ramah lingkungan dan sablon kustom dengan palet Midnight Slate (#202734), Steel Indigo (#36415A), Matcha Pistachio Sage (#B7D894), dan Pale Celadon Dew (#E0F8C7). Dilengkapi Visualizer Sablon Cup & Box Interaktif real-time, Kalkulator Grosir MOQ & Diskon Berjenjang (500-10.000 pcs), katalog 6 kemasan bersertifikat food-grade & FSC, panduan spesifikasi die-cut cetak siap unduh, formulir pemesanan sample box kit gratis, serta slide-over keranjang belanja WhatsApp.',
    category: 'packaging',
    tags: ['Packaging', 'Sablon Kemasan', 'Eco-Friendly', 'Paper Cup', 'Kraft Box', 'Sablon Kustom', 'MOQ Calculator', 'WhatsApp Checkout', 'UMKM Kuliner'],
    technologies: ['HTML5', 'Vanilla CSS', 'Vanilla JS', 'Interactive Sablon Visualizer', 'Wholesale MOQ Calculator', 'Free Sample Kit Form', 'WhatsApp Order Flow'],
    thumbnailSvgType: 'packaging',
    previewComponentKey: 'packaging-kemas-lab',
    htmlPath: '/templates/packaging/kemas-lab.html',
    htmlFolderPath: 'templates/packaging/kemas-lab.html',
    features: [
      'Struktur mandiri 1 file (HTML + CSS + JS) tanpa perlu build step, node_modules, atau framework pihak ketiga',
      'Visualizer Sablon Cup & Box Interaktif: live mockup nama brand, pilihan warna tinta sablon, dan orientasi cetak',
      'Kalkulator Grosir MOQ & Diskon Berjenjang (500 - 10.000 pcs) dengan simulasi harga per pcs otomatis',
      'Katalog 6 kemasan berkelanjutan bersertifikat bio-degradable & FSC dengan filter kategori tanpa reload',
      'Modal Quick-View detail produk dengan tabel spesifikasi teknis GSM, kapasitas, dan batas minimum order',
      'Panduan format file cetak die-cut siap unduh (AI/PDF) dan form pemesanan sample box kit gratis',
      'Slide-over keranjang belanja terintegrasi pemesanan resmi via WhatsApp dengan perhitungan gratis plat film cetak'
    ],
    usageInstructions: [
      'Buka templates/packaging/kemas-lab.html di editor kode Anda.',
      'Sesuaikan daftar produk kemasan, harga tier grosir, dan spesifikasi pada objek PRODUCTS_DB di dalam tag <script>.',
      'Ganti nomor WhatsApp pemesanan resmi pada fungsi checkoutViaWA dan requestSampleKit.',
      'Buka file HTML langsung di browser desktop atau mobile untuk studio kemasan langsung aktif.'
    ],
    sourceFiles: [
      {
        filename: 'kemas-lab.html',
        language: 'html',
        content: `<!-- KEMAS LAB (包装工房) — Eco-Packaging & Custom Screen Printing Studio -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>KEMAS LAB — Studio Kemasan & Sablon Kustom Ramah Lingkungan</title>
  <style>
    :root {
      --slate-dark: #202734;
      --slate-steel: #36415A;
      --green-pistachio: #B7D894;
      --green-celadon: #E0F8C7;
      --eco-canvas: #FAFBF8;
      --ink-primary: #151B24;
      --font-sans: 'Plus Jakarta Sans', sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }
  </style>
</head>
<body>
  <div class="top-ticker">PRODUKSI 5-7 HARI KERJA • GARANSI ANTI-BOCOR 100% • GRATIS BIAYA PLAT CETAK MIN. 2.500 PCS</div>
  <header>
    <div class="brand-monogram">KL</div>
    <h1>KEMAS LAB</h1>
    <nav>Katalog Kemasan · Studio Sablon · Kalkulator MOQ · Standar Eco · Sample Box</nav>
  </header>
  <!-- Full Interactive Packaging Experience: Sablon Visualizer, Wholesale Calculator & WhatsApp Cart -->
</body>
</html>`,
        description: 'Single-file standalone HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt website studio kemasan ramah lingkungan dan sablon kustom KEMAS LAB dengan palet warna Midnight Slate (#202734), Steel Indigo (#36415A), Matcha Pistachio Sage (#B7D894), dan Pale Celadon Dew (#E0F8C7). Dilengkapi visualizer sablon interaktif, kalkulator grosir MOQ berjenjang, katalog 6 kemasan bersertifikat FSC, formulir sample box gratis, dan slide-over cart WhatsApp.',
      designDirection: 'Industrial botanical packaging studio berstandar antislop: Deep Midnight Slate (#202734), Steel Indigo (#36415A), Matcha Pistachio Sage (#B7D894), Pale Celadon Dew (#E0F8C7), dan Eco Canvas Ground (#FAFBF8). Tipografi Plus Jakarta Sans dan JetBrains Mono.',
      layoutAndGrid: 'Top production ticker slate, sticky industrial navbar dengan monogram KL, hero asymmetric showcase 2 kolom dengan spotlight kemasan lunch box kraft, panel visualizer sablon cup/box interaktif 2 kolom, kalkulator grosir MOQ dengan slider kuantiti dinamis, grid katalog 6 produk kemasan 3 kolom responsif, section download template die-cut & formulir sample box gratis, dan slide-over cart drawer kanan.',
      typographyAndColor: 'Plus Jakarta Sans untuk tajuk studio cetak dan navigasi tegas, JetBrains Mono untuk spesifikasi gramatur 290-350 GSM, dimensi milimeter, volume oz/ml, rincian harga per pcs, dan kode standar sertifikasi FSC.',
      interactions: 'Visualizer sablon live mockup dengan update nama brand instan dan pemilih warna tinta, kalkulator tier grosir dengan slider jumlah pcs dan diskon berjenjang otomatis, filter kategori tanpa reload, quick view modal dengan pilihan kuantiti pesanan, formulir sample kit gratis, dan slide-over cart WhatsApp.',
      technicalRequirements: 'Zero dependencies, single file standalone HTML, fully responsive dari smartphone 360px hingga layar desktop besar.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-11-18',
    livePreviewAvailable: true,
    accentColor: '#202734',
    colorPalette: [
      { hex: '#202734', rgb: 'rgb(32, 39, 52)', name: 'Deep Midnight Slate', role: 'Primary Base / Industrial Chassis & Dark Contrast' },
      { hex: '#36415A', rgb: 'rgb(54, 65, 90)', name: 'Steel Slate Indigo', role: 'Secondary Technical Accent & Border Structure' },
      { hex: '#B7D894', rgb: 'rgb(183, 216, 148)', name: 'Matcha Pistachio Sage', role: 'Botanical Fiber Action & Key CTA Button' },
      { hex: '#E0F8C7', rgb: 'rgb(224, 248, 199)', name: 'Pale Celadon Dew', role: 'Fresh Eco Highlight, Tag Fill & Card Tint' }
    ]
  },
  {
    id: 'tpl-22',
    slug: 'wana-wild-honey',
    title: 'WANA (Wild Forest Honey & Botanical Pantry)',
    tagline: 'Arsip madu hutan liar Nusantara, panen kanopi lestari, dan kurasi botanikal tanpa pemanasan buatan',
    description: 'Template website artisanal apiculture & botanical pantry dengan palet warna hutan purba Deep Hunter Forest Green (#15370D), Sage Fern Foliage (#728E6D), Warm Harvest Honeycomb (#E5CD82), dan Cream Butter Sunlight (#FFF2B4). Dilengkapi pemilih 4 terroir kanopi hutan Indonesia, Studio Racik Kado Tasting Flight 3-Jar Kustom (boks kayu pinus dengan segel lilin lebah murni), inspektur kadar air & viskositas laboratorium SNI 8664:2018, katalog 6 madu mentah & sarang utuh, protokol panen lestari tanpa asap membakar, serta slide-over keranjang pemesanan WhatsApp resmi.',
    category: 'apiculture',
    tags: ['Apiculture', 'Raw Honey', 'Madu Hutan Liar', 'Botanical Pantry', 'Tasting Flight Builder', 'Sumbawa Karst', 'Trigona Klanceng', 'WhatsApp Checkout', 'UMKM Artisan'],
    technologies: ['HTML5', 'Vanilla CSS', 'Vanilla JS', 'Interactive Terroir Selector', 'Custom Flight Coffret Builder', 'Laboratory Viscosity Slider', 'WhatsApp Order Flow'],
    thumbnailSvgType: 'apiculture',
    previewComponentKey: 'apiculture-wana-honey',
    htmlPath: '/templates/apiculture/wana-honey.html',
    htmlFolderPath: 'templates/apiculture/wana-honey.html',
    features: [
      'Struktur mandiri 1 file (HTML + CSS + JS) tanpa perlu build step, node_modules, atau framework pihak ketiga',
      'Terroir Selector 4 wilayah kanopi hutan liar (Riau Peat, Sumbawa Karst, Gunung Prau Trigona, Java Randu) dengan data elevasi & uji bioaktif',
      'Studio Racik Kado Tasting Flight 3-Jar Kustom (3×150g) dengan visualisasi boks kayu pinus, pilihan warna segel lilin lebah, dan pesan kartu kaligrafi',
      'Inspektur kadar air laboratorium interaktif (15.0% - 23.5%) dengan evaluasi mutu SNI 8664:2018 dan enzim diastase real-time',
      'Katalog 6 madu hutan liar, sarang madu murni utuh, dan ramuan botani dengan pencarian instan dan filter kategori',
      'Modal Quick-View detail produk dengan tabel spesifikasi lab batch dan rekomendasi konsumsi ritual pagi',
      'Slide-over keranjang belanja terintegrasi WhatsApp dengan pengecekan batas bonus sendok kayu jati ulir (min. Rp 350.000)'
    ],
    usageInstructions: [
      'Buka templates/apiculture/wana-honey.html di editor kode Anda.',
      'Sesuaikan daftar koleksi madu, harga, dan catatan rasa pada objek CATALOG_PRODUCTS di dalam tag <script>.',
      'Ganti nomor WhatsApp pemesanan resmi pada fungsi checkoutWhatsApp dan openWhatsAppContact.',
      'Buka file HTML langsung di browser desktop atau mobile untuk etalase apikultur langsung aktif.'
    ],
    sourceFiles: [
      {
        filename: 'wana-honey.html',
        language: 'html',
        content: `<!-- WANA (和名) — Wild Forest Honey & Botanical Pantry -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>WANA — Arsip Madu Hutan Liar Nusantara</title>
  <style>
    :root {
      --forest-dark: #15370D;
      --sage-foliage: #728E6D;
      --gold-harvest: #E5CD82;
      --cream-butter: #FFF2B4;
      --cream-paper: #FAF8F2;
      --ink-primary: #12210E;
      --font-serif: 'Cormorant Garamond', Georgia, serif;
      --font-sans: 'Plus Jakarta Sans', sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }
  </style>
</head>
<body>
  <div class="top-ticker">PANEN LESTARI KANOPI HUTAN SUMBAWA & RIAU • KADAR AIR < 18% • UJI LAB COA DIASTASE DN 11.4</div>
  <header>
    <div class="brand-monogram">WN</div>
    <h1>WANA</h1>
    <nav>Terroir Hutan · Tasting Flight · Uji Kemurnian · Katalog Madu · Etika Panen</nav>
  </header>
  <!-- Full Interactive Apiculture Experience: Terroir Selector, Tasting Flight Builder & WhatsApp Cart -->
</body>
</html>`,
        description: 'Single-file standalone HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt website arsip madu hutan liar dan botanical pantry WANA dengan palet warna Deep Hunter Forest Green (#15370D), Sage Fern Foliage (#728E6D), Warm Harvest Honeycomb (#E5CD82), dan Cream Butter Sunlight (#FFF2B4). Dilengkapi pemilih terroir 4 wilayah hutan, studio kado tasting flight 3-jar boks kayu, inspektur kadar air viskositas lab SNI, etalase 6 madu liar murni, dan slide-over cart WhatsApp.',
      designDirection: 'Luxury botanical apiculture & artisanal pantry berstandar antislop: Deep Hunter Forest Green (#15370D), Sage Fern Foliage (#728E6D), Warm Harvest Honeycomb (#E5CD82), Cream Butter Sunlight (#FFF2B4), dan Warm Linen Paper Ground (#FAF8F2). Tipografi Cormorant Garamond, Plus Jakarta Sans, dan JetBrains Mono.',
      layoutAndGrid: 'Top harvest ticker pine green, sticky editorial navbar dengan monogram WN, hero asymmetric showcase 2 kolom dengan spotlight toples madu signature, panel terroir 4 wilayah dengan spesifikasi botani elevasi dpl, studio kustomisasi tasting flight 3-slot boks kayu 2 kolom, kartu inspektur laboratorium dengan slider kadar air interaktif, grid katalog 6 produk 3 kolom responsif, komitmen panen lestari 3 kolom, dan slide-over cart drawer kanan.',
      typographyAndColor: 'Cormorant Garamond untuk tajuk editorial mewah dan terroir hutan, Plus Jakarta Sans untuk teks bodi dan kontrol navigasi, JetBrains Mono untuk metrik kadar air persentase, enzim diastase DN 11.4, batas SNI 8664:2018, dan rincian harga rupiah.',
      interactions: 'Pilihan terroir dengan pembaruan profil nektar instan, builder boks kayu 3-slot dengan live visual preview dan pemilih segel lilin lebah, slider kadar air laboratorium dengan update evaluasi grade mutu real-time, filter katalog tanpa reload, modal quick view detail batch, dan slide-over cart WhatsApp.',
      technicalRequirements: 'Zero dependencies, single file standalone HTML, fully responsive dari smartphone 360px hingga layar desktop besar.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-11-18',
    livePreviewAvailable: true,
    accentColor: '#15370D',
    colorPalette: [
      { hex: '#15370D', rgb: 'rgb(21, 55, 13)', name: 'Deep Hunter Forest Green', role: 'Primary Anchor / Ancient Canopy & Dark Contrast' },
      { hex: '#728E6D', rgb: 'rgb(114, 142, 109)', name: 'Sage Fern Foliage', role: 'Secondary Botanical Tone & Herbaceous Accent' },
      { hex: '#E5CD82', rgb: 'rgb(229, 205, 130)', name: 'Warm Harvest Honeycomb', role: 'Amber Honey Action & Key Border Accent' },
      { hex: '#FFF2B4', rgb: 'rgb(255, 242, 180)', name: 'Cream Butter Sunlight', role: 'Royal Jelly Highlight, Badge Fill & Warm Tint' }
    ]
  },
  {
    id: 'tpl-23',
    slug: 'kayan-solid-furniture',
    title: 'KAYAN (Solid Timber & Woven Rattan Studio)',
    tagline: 'Perabot kayu solid, anyaman rotan lestari, dan ketahanan konstruksi purus-lubang tradisional Jepara',
    description: 'Template website studio perabot kayu solid dan kriya anyaman rotan dengan palet warna arsitektur alami Deep Forest Spruce (#1E3B2F), Muted Moss Sage (#7F8C6A), Natural Cane Teak (#C8B48A), dan Parchment Wool Cream (#F5F0E6). Dilengkapi Studio Kustomisasi Material Kayu, Anyaman & Kain secara real-time, Simulator Luas Ruang & Lintasan Sirkulasi Jalan (Walkway Clearance 80cm), katalog 6 perabot bersertifikat SVLK Perhutani Grade A, formulir pengiriman kotak sampel kayu gratis, serta layanan White-Glove Delivery terintegrasi WhatsApp resmi.',
    category: 'furniture',
    tags: ['Furniture', 'Kayu Solid', 'Anyaman Rotan', 'Jati Jepara', 'Sungkai', 'Mortise Tenon', 'Material Customizer', 'Room Scale Simulator', 'WhatsApp Checkout', 'UMKM Kriya'],
    technologies: ['HTML5', 'Vanilla CSS', 'Vanilla JS', 'Interactive Material Customizer', 'Room Scale Simulator', 'Free Swatch Kit Form', 'WhatsApp Order Flow'],
    thumbnailSvgType: 'furniture',
    previewComponentKey: 'furniture-kayan-studio',
    htmlPath: '/templates/furniture/kayan-studio.html',
    htmlFolderPath: 'templates/furniture/kayan-studio.html',
    features: [
      'Struktur mandiri 1 file (HTML + CSS + JS) tanpa perlu build step, node_modules, atau framework pihak ketiga',
      'Studio Kustomisasi Material Kayu (Sungkai, Jati, Ulin), Anyaman Rotan (Mata Bintang, Rapat, Slatted), dan Kain Jok secara real-time',
      'Simulator Luas Ruang (9 m² - 48 m²) dengan panduan lintasan bebas sirkulasi jalan (walkway clearance) minimal 80–95 cm',
      'Katalog 6 perabot arsitektural mandiri (lounge chair, meja kopi jati, buffet kisi sungkai, kursi makan, lampu gantung, daybed)',
      'Modal Quick-View detail perabot dengan rincian dimensi milimeter, tipe sambungan joinery, dan garansi rangka 5 tahun',
      'Formulir permohonan kotak sampel kayu asli, anyaman rotan, dan swatch kain gratis ke rumah pelanggan',
      'Slide-over keranjang belanja terintegrasi pemesanan WhatsApp resmi dengan opsi layanan White-Glove Delivery'
    ],
    usageInstructions: [
      'Buka templates/furniture/kayan-studio.html di editor kode Anda.',
      'Sesuaikan daftar koleksi perabot, harga, dan dimensi pada objek CATALOG_DATA di dalam tag <script>.',
      'Ganti nomor WhatsApp pemesanan resmi pada fungsi checkoutWhatsApp dan submitSampleRequest.',
      'Buka file HTML langsung di browser desktop atau mobile untuk etalase studio perabot langsung aktif.'
    ],
    sourceFiles: [
      {
        filename: 'kayan-studio.html',
        language: 'html',
        content: `<!-- KAYAN (木庵) — Solid Timber & Woven Rattan Studio -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>KAYAN — Studio Perabot Kayu & Rotan Lestari</title>
  <style>
    :root {
      --forest-spruce: #1E3B2F;
      --moss-sage: #7F8C6A;
      --cane-teak: #C8B48A;
      --parchment-cream: #F5F0E6;
      --ink-primary: #15221B;
      --font-serif: 'Cormorant Garamond', Georgia, serif;
      --font-sans: 'Plus Jakarta Sans', sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }
  </style>
</head>
<body>
  <div class="top-ticker">PENGIRIMAN GRATIS JABODETABEK & BANDUNG • GARANSI RANGKA 5 TAHUN • SVLK PERHUTANI GRADE A</div>
  <header>
    <div class="brand-monogram">KY</div>
    <h1>KAYAN</h1>
    <nav>Studio Material · Simulasi Ruang · Koleksi Perabot · Swatch Box</nav>
  </header>
  <!-- Full Interactive Furniture Experience: Material Customizer, Room Scale Simulator & WhatsApp Cart -->
</body>
</html>`,
        description: 'Single-file standalone HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt website studio perabot kayu solid dan anyaman rotan lestari KAYAN dengan palet warna Deep Forest Spruce (#1E3B2F), Muted Moss Sage (#7F8C6A), Natural Cane Teak (#C8B48A), dan Parchment Wool Cream (#F5F0E6). Dilengkapi studio kustomisasi material kayu/anyaman live, simulator luas ruang dan koridor jalan, katalog 6 perabot solid joinery, formulir swatch box gratis, dan slide-over cart WhatsApp.',
      designDirection: 'Architectural solid timber joinery & sustainable rattan atelier berstandar antislop: Deep Forest Spruce (#1E3B2F), Muted Moss Sage (#7F8C6A), Natural Cane Teak (#C8B48A), Parchment Wool Cream (#F5F0E6), dan Clean Alabaster Canvas (#FFFFFF). Tipografi Cormorant Garamond, Plus Jakarta Sans, dan JetBrains Mono.',
      layoutAndGrid: 'Top workshop ticker spruce, sticky architectural navbar dengan monogram KY, hero asymmetric showcase 2 kolom dengan spotlight kursi rotan signature, studio kustomisasi material 2 kolom dengan panggung render live, panel simulator tata ruang dengan slider luas m², grid katalog 6 perabot 3 kolom responsif, formulir pengiriman kotak sampel gratis, dan slide-over cart drawer kanan.',
      typographyAndColor: 'Cormorant Garamond untuk tajuk editorial arsitektural dan nama perabot, Plus Jakarta Sans untuk teks bodi dan kontrol kustomisasi, JetBrains Mono untuk dimensi milimeter fisik, luas meter persegi, nomor registrasi kayu legal SVLK, dan harga rupiah.',
      interactions: 'Kustomisasi material kayu, anyaman rotan, dan kain jok dengan kalkulasi harga dinamis instan, slider simulasi luas ruangan dengan rekomendasi set perabot dan clearance koridor gerak, filter katalog perabot tanpa reload, modal detail sambungan purus-lubang, formulir kirim sampel kayu, dan slide-over cart WhatsApp.',
      technicalRequirements: 'Zero dependencies, single file standalone HTML, fully responsive dari smartphone 360px hingga layar desktop besar.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-11-18',
    livePreviewAvailable: true,
    accentColor: '#1E3B2F',
    colorPalette: [
      { hex: '#1E3B2F', rgb: 'rgb(30, 59, 47)', name: 'Deep Forest Spruce', role: 'Primary Anchor / Forest Joinery & Dark Architectural Accent' },
      { hex: '#7F8C6A', rgb: 'rgb(127, 140, 106)', name: 'Muted Moss Sage', role: 'Secondary Tone / Olive Foliage & Subtle Border' },
      { hex: '#C8B48A', rgb: 'rgb(200, 180, 138)', name: 'Natural Cane Teak', role: 'Warm Rattan Webbing, Sungkai Wood & Action Accent' },
      { hex: '#F5F0E6', rgb: 'rgb(245, 240, 230)', name: 'Parchment Wool Cream', role: 'Warm Paper Parchment, Alabaster Linen & Body Ground' }
    ]
  },
  {
    id: 'tpl-24',
    slug: 'sola-artisan-gelato',
    title: 'SOLA GELATO (Artisanal Gelateria & Sorbetto)',
    tagline: 'Gelato artigianale lambat Italia, sari buah tropis nusantara matang pohon, dan kemasan dingin anti-meleleh',
    description: 'Template website gelateria artigianale dan sorbet buah segar dengan palet cerah pesisir Mediterania Sunburst Tangerine (#FF933E), Golden Marigold (#FFCB56), Custard Cream (#FFE9A9), dan Coastal Breeze Blue (#73A5CA). Dilengkapi Studio Racik Boks 3-Pint (473ml) insulasi thermal es kering (*dry ice*), simulator sains kepadatan overrun (25% vs 100%) dan suhu saji ideal (-11°C), katalog 6 varian rasa buah segar & gelato susu murni Lembang, serta slide-over keranjang pemesanan instan via WhatsApp resmi.',
    category: 'gelato',
    tags: ['Gelato', 'Sorbetto', 'Artisanal Ice Cream', 'Dessert Cafe', 'Buah Asli', 'Thermal Box Builder', 'Dry Ice Packaging', 'WhatsApp Checkout', 'UMKM Kuliner'],
    technologies: ['HTML5', 'Vanilla CSS', 'Vanilla JS', 'Interactive 3-Pint Box Builder', 'Gelato Science Simulator', 'Cold Chain Guarantee', 'WhatsApp Order Flow'],
    thumbnailSvgType: 'gelato',
    previewComponentKey: 'gelato-sola-artisan',
    htmlPath: '/templates/gelato/sola-gelato.html',
    htmlFolderPath: 'templates/gelato/sola-gelato.html',
    features: [
      'Struktur mandiri 1 file (HTML + CSS + JS) tanpa perlu build step, node_modules, atau framework pihak ketiga',
      'Studio Racik Boks 3-Pint (3×473ml) interaktif dengan visual slot terisi/kosong, pilihan kartu ucapan, dan kalkulasi dinamis',
      'Simulator Sains Kepadatan Gelato (Overrun 15% - 95%) yang mengedukasi perbedaan es krim pabrik berongga udara vs gelato padat murni',
      'Katalog 6 varian rasa gelato susu klasik dan sorbetto buah asli (vegan dairy-free) dengan filter kategori tanpa reload',
      'Modal Quick-View detail rasa dengan rincian rasio buah asli, asal kebun petani lokal, dan matriks informasi alergen',
      'Bagian jaminan rantai dingin (cold-chain) es kering food-grade bersuhu -78.5°C dengan garansi ganti unit jika meleleh di jalan',
      'Slide-over keranjang belanja terintegrasi WhatsApp dengan pengecekan batas gratis ongkir instan (min. 3 pint / Rp 250.000)'
    ],
    usageInstructions: [
      'Buka templates/gelato/sola-gelato.html di editor kode Anda.',
      'Sesuaikan daftar varian rasa, harga, dan asal bahan lokal pada objek FLAVORS_DATA di dalam tag <script>.',
      'Ganti nomor WhatsApp pemesanan resmi pada fungsi checkoutWhatsApp dan openWhatsAppChat.',
      'Buka file HTML langsung di browser desktop atau mobile untuk etalase gelateria langsung aktif.'
    ],
    sourceFiles: [
      {
        filename: 'sola-gelato.html',
        language: 'html',
        content: `<!-- SOLA GELATO (ソーラ) — Gelateria Artigianale & Sorbetto Tropis -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>SOLA GELATO — Gelateria Artigianale & Sorbetto</title>
  <style>
    :root {
      --tangerine-sun: #FF933E;
      --marigold-gold: #FFCB56;
      --custard-cream: #FFE9A9;
      --coastal-blue: #73A5CA;
      --ground-paper: #FCFBF8;
      --ink-primary: #1C1917;
      --font-serif: 'Cormorant Garamond', Georgia, serif;
      --font-sans: 'Plus Jakarta Sans', sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }
  </style>
</head>
<body>
  <div class="top-ticker">DIPUTAR SEGAR TIAP PAGI (MANTECAZIONE LENTA) • 100% BUAH ASLI • THERMAL BOX & DRY ICE GARANSI TIDAK MELELEH</div>
  <header>
    <div class="brand-monogram">SG</div>
    <h1>SOLA</h1>
    <nav>Boks 3-Pint · Sains Gelato · Katalog Rasa · Jaminan Dingin</nav>
  </header>
  <!-- Full Interactive Gelateria Experience: 3-Pint Box Builder, Overrun Science & WhatsApp Cart -->
</body>
</html>`,
        description: 'Single-file standalone HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt website gelateria artigianale dan sorbetto buah tropis nusantara SOLA GELATO dengan palet warna Sunburst Tangerine (#FF933E), Golden Marigold (#FFCB56), Custard Cream (#FFE9A9), dan Coastal Breeze Blue (#73A5CA). Dilengkapi studio racik boks 3-pint insulasi pendingin dry ice, simulator sains kepadatan overrun dan suhu saji, etalase 6 rasa buah segar, dan slide-over cart WhatsApp.',
      designDirection: 'Sunny coastal Mediterranean & tropical culinary gelateria berstandar antislop: Sunburst Tangerine (#FF933E), Golden Marigold (#FFCB56), Custard Cream (#FFE9A9), Coastal Breeze Blue (#73A5CA), dan Warm Ground Linen Paper (#FCFBF8). Tipografi Cormorant Garamond, Plus Jakarta Sans, dan JetBrains Mono.',
      layoutAndGrid: 'Top announcement ticker tangerine, sticky Mediterranean navbar dengan monogram matahari SG, hero asymmetric showcase 2 kolom dengan spotlight pint sorbet mangga signature, studio racik boks 3-pint 2 kolom, kartu simulator termodinamika rasa dengan slider overrun interaktif, grid katalog 6 varian gelato 3 kolom responsif, jaminan rantai dingin es kering 3 kolom, dan slide-over cart drawer kanan.',
      typographyAndColor: 'Cormorant Garamond untuk tajuk editorial gelateria dan nama Italia varian rasa, Plus Jakarta Sans untuk teks bodi dan kontrol UI, JetBrains Mono untuk metrik overrun 25%, suhu saji -11°C, volume 473ml, dan harga rupiah.',
      interactions: 'Studio boks 3-slot dengan live visual preview dan penyesuaian kartu ucapan, slider sains overrun dengan evaluasi kepadatan tekstur real-time, filter katalog tanpa reload, modal detail rasio buah asli, dan slide-over cart WhatsApp dengan pengecekan batas gratis ongkir.',
      technicalRequirements: 'Zero dependencies, single file standalone HTML, fully responsive dari smartphone 360px hingga layar desktop besar.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-11-18',
    livePreviewAvailable: true,
    accentColor: '#FF933E',
    colorPalette: [
      { hex: '#FF933E', rgb: 'rgb(255, 147, 62)', name: 'Sunburst Tangerine', role: 'Primary Brand / Sunset Citrus Energy & Main CTA' },
      { hex: '#FFCB56', rgb: 'rgb(255, 203, 86)', name: 'Golden Marigold', role: 'Warm Meyer Lemon, Fruit Pulp & Secondary Accent' },
      { hex: '#FFE9A9', rgb: 'rgb(255, 233, 169)', name: 'Soft Butter Custard', role: 'Fior di Latte Cream Tint, Badge Base & Box Card' },
      { hex: '#73A5CA', rgb: 'rgb(115, 165, 202)', name: 'Coastal Breeze Blue', role: 'Mediterranean Sea Contrast, Cold-Chain & Cart Trigger' }
    ]
  },
  {
    id: 'tpl-25',
    slug: 'svala-nordic-bathhouse',
    title: 'SVALA (Thermal Bathhouse & Hydrotherapy Sanctuary)',
    tagline: 'Santuari hidroterapi kontras termal, air mineral vulkanik tanpa klorin, dan perancang ritual hening 90-menit',
    description: 'Template website bathhouse termal dan santuari hidroterapi kontras Nordik dengan palet warna air glasial murni Pale Glacial Mist (#E3FDFD), Aerated Spring Foam (#CBF1F5), Vibrant Thermal Cyan (#A6E3E9), dan Deep Sea Glass Teal (#71C9CE). Dilengkapi monitor telemetri suhu 4 kolam real-time (Glacial Plunge 4.2°C, Magnesium Floatation 36.8°C, Volcanic Silica 39.2°C, Eucalyptus Steam 45°C), perancang urutan ritual 90-menit dengan kalkulasi delta suhu termal (Δ 40.8°C), transparansi laporan uji kimia air bersertifikat (pH 7.42, 0.00 ppm klorin), toko apothecary garam mandi mineral dengan keranjang dinamis, serta formulir reservasi slot hening terintegrasi.',
    category: 'wellness',
    tags: ['Wellness', 'Bathhouse', 'Hydrotherapy', 'Thermal Spa', 'Contrast Therapy', 'Cold Plunge', 'Mineral Water', 'Nordic Architecture', 'Apothecary'],
    technologies: ['HTML5', 'Vanilla CSS', 'Vanilla JS', 'Real-Time Basin Telemetry', 'Thermal Circuit Customizer', 'Mineral Lab Transparency', 'Apothecary Cart Drawer'],
    thumbnailSvgType: 'agency',
    previewComponentKey: 'wellness-svala-bathhouse',
    htmlPath: '/templates/wellness/svala-bathhouse.html',
    htmlFolderPath: 'templates/wellness/svala-bathhouse.html',
    features: [
      'Struktur mandiri 1 file (HTML + CSS + JS) tanpa perlu build step, node_modules, atau framework pihak ketiga',
      'Monitor telemetri suhu 4 kolam real-time dengan data kedalaman air, sistem sirkulasi, dan target fisiologis',
      'Perancang interaktif urutan ritual kontras 90-menit (Athletic Recovery, Sleep Restoration, Volcanic Reset) dengan delta termal otomatis',
      'Transparansi laporan laboratorium kimia air bersertifikat (pH 7.42, ion magnesium 148 mg/L, silika 72.4 mg/L, zero synthetic chlorine)',
      'Toko apothecary garam mandi kristal glasial dan kimono wafel Prancis dengan keranjang dinamis dan kalkulasi instan',
      'Modal reservasi slot hening interaktif untuk sirkuit publik atau private Hinoki cedar suite dengan konfirmasi langsung',
      'Standar craft antislop dengan palet air sejuk (#E3FDFD, #CBF1F5, #A6E3E9, #71C9CE) dan tipografi Cinzel yang berwibawa'
    ],
    usageInstructions: [
      'Buka templates/wellness/svala-bathhouse.html di editor kode Anda.',
      'Sesuaikan data kolam, suhu air (°C), dan deskripsi khasiat pada objek poolsData di dalam tag <script>.',
      'Kustomisasi harga sesi berendam dan daftar produk garam mandi pada katalog apothecary.',
      'Buka file HTML langsung di browser desktop atau mobile untuk etalase bathhouse langsung beroperasi.'
    ],
    sourceFiles: [
      {
        filename: 'svala-bathhouse.html',
        language: 'html',
        content: `<!-- SVALA (スヴァラ) — Nordic Thermal Bathhouse & Mineral Hydrotherapy Sanctuary -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>SVALA — Thermal Bathhouse & Hydrotherapy Sanctuary</title>
  <style>
    :root {
      --svala-mist: #E3FDFD;
      --svala-foam: #CBF1F5;
      --svala-cyan: #A6E3E9;
      --svala-teal: #71C9CE;
      --ink-abyssal: #091C22;
      --font-display: 'Cinzel', serif;
      --font-body: 'Plus Jakarta Sans', sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }
  </style>
</head>
<body>
  <div class="top-telemetry">LIVE BASIN TELEMETRY: GLACIAL PLUNGE 4.2°C • MAGNESIUM 36.8°C • STEAM 45.0°C</div>
  <header>
    <div class="brand">SVALA · THERMAL BATHHOUSE</div>
    <nav>Sirkuit Air · Ritual 90-Min · Uji Mineral · Apothecary · Etika Mandi</nav>
  </header>
  <!-- Full Interactive Sanctuary Experience: 4-Basin Telemetry, 90-Min Circuit & Apothecary Cart -->
</body>
</html>`,
        description: 'Single-file standalone HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt website santuari hidroterapi termal kontras SVALA BATHHOUSE dengan palet air mineral glasial Pale Glacial Mist (#E3FDFD), Aerated Spring Foam (#CBF1F5), Vibrant Thermal Cyan (#A6E3E9), dan Deep Sea Glass Teal (#71C9CE). Dilengkapi monitor telemetri suhu 4 kolam real-time, perancang ritual kontras 90-menit, sertifikasi laboratorium kimia air, butik apothecary garam mandi, dan modal reservasi slot hening.',
      designDirection: 'Nordic-Swiss architectural wellness sanctuary berstandar antislop: Pale Glacial Mist (#E3FDFD), Aerated Spring Foam (#CBF1F5), Vibrant Thermal Cyan (#A6E3E9), Deep Sea Glass Teal (#71C9CE), dan Abyssal Mineral Ink (#091C22). Tipografi monumental Cinzel, Plus Jakarta Sans, dan JetBrains Mono.',
      layoutAndGrid: 'Top telemetry status bar gelap, sticky glass navbar dengan link non-wrapping kokoh, hero showcase 2 kolom dengan telemetri melayang, panel telemetri 4 kolam dengan tab interaktif, perancang ritual kontras 90-menit linier 4-tahap, tabel transparansi lab air 2 kolom, grid produk apothecary 4 kolom, dan modal reservasi slot.',
      typographyAndColor: 'Cinzel untuk tajuk wibawa monumental arsitektural, Plus Jakarta Sans untuk teks bodi dan kontrol UI, JetBrains Mono untuk metrik telemetri suhu, durasi, konsentrasi magnesium, dan rupiah.',
      interactions: 'Tab ganti kolam seketika dengan pembaruan foto dan narasi fisiologis, pemilih intensitas ritual dengan kalkulasi delta suhu otomatis, drawer keranjang apothecary dengan counter dinamis, dan form reservasi slot.',
      technicalRequirements: 'Zero dependencies, single file standalone HTML, fully responsive smartphone hingga layar desktop besar.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-11-18',
    livePreviewAvailable: true,
    accentColor: '#71C9CE',
    colorPalette: [
      { hex: '#E3FDFD', rgb: 'rgb(227, 253, 253)', name: 'Pale Glacial Mist', role: 'Glacier Water Surface, Canvas Tint & Top Ticker Mist' },
      { hex: '#CBF1F5', rgb: 'rgb(203, 241, 245)', name: 'Aerated Spring Foam', role: 'Thermal Spring Cascade Foam, Soft Background & Pill Base' },
      { hex: '#A6E3E9', rgb: 'rgb(166, 227, 233)', name: 'Vibrant Thermal Cyan', role: 'Pure Thermal Mineral Basin, Hairline Accents & Borders' },
      { hex: '#71C9CE', rgb: 'rgb(113, 201, 206)', name: 'Deep Sea Glass Teal', role: 'Primary Mineral Brand Accent, Action Buttons & Active Status' }
    ]
  },
  {
    id: 'tpl-26',
    slug: 'verra-japanese-eyewear',
    title: 'VERRA OPTICS (Handcrafted Japanese Titanium Eyewear)',
    tagline: 'Kacamata Beta-Titanium 8.4 gram kriya Sabae, simulator lensa optik Blue-Shield, dan kotak Home Try-On 3-frame',
    description: 'Template website atelier kacamata titanium kriya Prefektur Fukui (Sabae, Jepang) dengan palet warna navy cetak biru Crisp Snow White (#F9F7F7), Powder Slate Frost (#DBE2EF), Classic Cadet Blue (#3F72AF), dan Deep Midnight Navy (#112D4E). Dilengkapi inspektur 4 siluet frame ikonik (Crown Panto, Octagonal, Square Aviator, Takiron Acetate) dengan data bobot mikro & toleransi milimeter, sistem racik kotak Home Try-On 3-Frame gratis 5 hari ke rumah, simulator pelapisan lensa anti-silau (Blue-Shield 420nm, Photochromic UV, Ultra-Thin 1.74), katalog optik dengan filter instan, slide-over keranjang belanja, serta formulir booking pemeriksaan mata komprehensif.',
    category: 'eyewear',
    tags: ['Eyewear', 'Kacamata', 'Titanium', 'Optik', 'Japanese Craft', 'Home Try-On', 'Blue Light Filter', 'Precision Optometry', 'Luxury Atelier'],
    technologies: ['HTML5', 'Vanilla CSS', 'Vanilla JS', 'Frame Silhouette Switcher', 'Home Try-On Box Builder', 'Lens Refraction Simulator', 'WhatsApp Order Flow'],
    thumbnailSvgType: 'agency',
    previewComponentKey: 'eyewear-verra-optics',
    htmlPath: '/templates/eyewear/verra-optics.html',
    htmlFolderPath: 'templates/eyewear/verra-optics.html',
    features: [
      'Struktur mandiri 1 file (HTML + CSS + JS) tanpa perlu build step, node_modules, atau framework pihak ketiga',
      'Inspektur 4 siluet frame ikonik dengan kalkulasi toleransi ukuran milimeter (48 □ 21 — 145 mm) dan bobot gramatur 8.4 gram',
      'Sistem perakit kotak Home Try-On 3-Frame interaktif dengan alokasi slot dinamis dan peminjaman tanpa biaya deposit',
      'Simulator teknologi pelapisan lensa optik (Blue-Shield 420nm, Photochromic Fast-Transition, Ultra-Thin Index 1.74) dengan tabel spesifikasi teknis',
      'Katalog 6 kacamata titanium dan hybrid asetat selulosa Takiron organik dengan filter instan tanpa reload',
      'Laci keranjang belanja geser (slide-over cart) terintegrasi WhatsApp dengan rincian biaya glazing kustom',
      'Standar kriya antislop dengan palet cetak biru klasik (#F9F7F7, #DBE2EF, #3F72AF, #112D4E) dan tipografi Playfair Display yang anggun'
    ],
    usageInstructions: [
      'Buka templates/eyewear/verra-optics.html di editor kode Anda.',
      'Sesuaikan daftar koleksi frame, harga, dan dimensi milimeter pada objek catalogData dan silhouettesData di dalam tag <script>.',
      'Kustomisasi opsi pelapisan lensa optik dan biaya tambahannya pada objek coatingsData.',
      'Buka file HTML langsung di browser desktop atau mobile untuk etalase optik langsung beroperasi.'
    ],
    sourceFiles: [
      {
        filename: 'verra-optics.html',
        language: 'html',
        content: `<!-- VERRA OPTICS (ヴェラ) — Handcrafted Japanese Titanium Eyewear & Precision Optometry -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>VERRA OPTICS — Japanese Titanium Eyewear</title>
  <style>
    :root {
      --verra-snow: #F9F7F7;
      --verra-frost: #DBE2EF;
      --verra-cadet: #3F72AF;
      --verra-navy: #112D4E;
      --font-display: 'Playfair Display', Georgia, serif;
      --font-body: 'Plus Jakarta Sans', sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }
  </style>
</head>
<body>
  <div class="top-status">SABAE TITANIUM ATELIER • 250 TAHAP KRIYA MANUAL • HOME TRY-ON 3-FRAME GRATIS</div>
  <header>
    <div class="brand">VERRA OPTICS</div>
    <nav>Siluet Frame · Home Try-On · Studio Lensa · Katalog Optik · Kriya Sabae</nav>
  </header>
  <!-- Full Interactive Eyewear Atelier Experience: 3-Frame Try-On, Lens Coating Lab & WhatsApp Cart -->
</body>
</html>`,
        description: 'Single-file standalone HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt website atelier kacamata titanium murni VERRA OPTICS dengan palet warna navy cetak biru Crisp Snow White (#F9F7F7), Powder Slate Frost (#DBE2EF), Classic Cadet Blue (#3F72AF), dan Deep Midnight Navy (#112D4E). Dilengkapi inspektur siluet frame, perakit kotak Home Try-On 3-frame, simulator lensa optik Blue-Shield, etalase katalog frame, dan modal booking pemeriksaan mata.',
      designDirection: 'Japanese minimalist optical atelier berstandar antislop: Crisp Snow White (#F9F7F7), Powder Slate Frost (#DBE2EF), Classic Cadet Blue (#3F72AF), dan Deep Midnight Navy (#112D4E). Tipografi Playfair Display, Plus Jakarta Sans, dan JetBrains Mono.',
      layoutAndGrid: 'Top status ticker navy gelap, sticky glass navbar dengan navigasi non-wrapping kokoh, hero showcase 2 kolom dengan spesifikasi bobot melayang, panel inspektur siluet frame interaktif, perakit kotak Home Try-On 3 slot, simulator spektrum lensa 2 kolom, grid katalog 6 frame 3 kolom, dan drawer keranjang belanja.',
      typographyAndColor: 'Playfair Display untuk tajuk utama wibawa optik klasik, Plus Jakarta Sans untuk teks bodi dan kontrol tombol, JetBrains Mono untuk metrologi ukuran frame milimeter, indeks bias, dan rincian harga rupiah.',
      interactions: 'Tab pemilih siluet seketika dengan pembaruan foto dan dimensi teknis, perakit kotak Home Try-On dengan status slot terisi, simulator lapisan lensa dengan kalkulasi biaya glazing, dan drawer keranjang terintegrasi WhatsApp.',
      technicalRequirements: 'Zero dependencies, single file standalone HTML, fully responsive smartphone hingga layar desktop besar.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-11-18',
    livePreviewAvailable: true,
    accentColor: '#3F72AF',
    colorPalette: [
      { hex: '#F9F7F7', rgb: 'rgb(249, 247, 247)', name: 'Crisp Snow White', role: 'Clean Optical Studio Ground, Canvas Tint & Top Ticker Mist' },
      { hex: '#DBE2EF', rgb: 'rgb(219, 226, 239)', name: 'Powder Slate Frost', role: 'Brushed Titanium Reflections, Try-On Slot Base & Pill Tint' },
      { hex: '#3F72AF', rgb: 'rgb(63, 114, 175)', name: 'Classic Cadet Blue', role: 'Anti-Reflective AR Lens Coating, Primary Accent & Action Buttons' },
      { hex: '#112D4E', rgb: 'rgb(17, 45, 78)', name: 'Deep Midnight Navy', role: 'Primary Brand Frame Color, Contrast Typography & Active Status' }
    ]
  },
  {
    id: 'tpl-27',
    slug: 'chidori-kyoto-wagashi',
    title: 'CHIDORI WAGASHI (千鳥菓舗)',
    tagline: 'Atelier wagashi musiman Kyoto, 24 kalender mikro-sekki, dan kriya nerikiri adonan shiro-an',
    description: 'Template website atelier kriya manisan tradisional Jepang CHIDORI WAGASHI dengan palet warna Warm Almond Cream (#FFF5E4), Whisper Sakura Petal (#FFE3E1), Soft Peach Blossom (#FFD1D1), dan Vibrant Ichigo Coral Rouge (#FF9494). Dilengkapi penjelajah 24 kalender mikro-musim (24-Sekki), perakit kotak kayu 6-slot (Kiribako Box Builder), simulator 5 dimensi indera nerikiri, katalog 6 varian wagashi & daifuku, serta slide-over keranjang pemesanan WhatsApp dan reservasi Chanoyu privat.',
    category: 'wagashi',
    tags: ['Wagashi', 'Kyoto Confectionery', 'Nerikiri', 'Daifuku', '24 Sekki', 'Chanoyu Tea Ceremony', 'Kiribako Bento Box', 'WhatsApp Checkout', 'Artisanal Food'],
    technologies: ['HTML5', 'Vanilla CSS', 'Vanilla JS', '24-Sekki Season Switcher', '6-Slot Kiribako Box Builder', '5 Senses Explorer', 'WhatsApp Order Flow'],
    thumbnailSvgType: 'bakery',
    previewComponentKey: 'wagashi-chidori',
    htmlPath: '/templates/wagashi/chidori-wagashi.html',
    htmlFolderPath: 'templates/wagashi/chidori-wagashi.html',
    features: [
      'Struktur mandiri 1 file (HTML + CSS + JS) tanpa perlu build step, node_modules, atau framework pihak ketiga',
      'Penjelajah 24 kalender musim mikro (24-Sekki) dinamis: Shunbun, Seimei, Kokuu, dan Rikka dengan pembaruan profil rasa & foto instan',
      'Sistem perakit kotak kayu wagashi 6-slot interaktif (Kiribako Bento Crate) dengan batas kuota dan estimasi gramatur netto real-time',
      'Penjelajah 5 dimensi indera nerikiri (visual warna botani, aroma daun sakura, tekstur shiratama, lumer manis wasanbon, dan irisan kuromoji)',
      'Katalog 6 wagashi dan daifuku artisanal dengan filter kategori instan tanpa reload',
      'Laci keranjang belanja geser (slide-over cart) terintegrasi WhatsApp dengan rincian kemasan boks kayu paulownia gratis',
      'Standar kriya antislop dengan palet sakura coral (#FFF5E4, #FFE3E1, #FFD1D1, #FF9494) dan tipografi Playfair Display & Shippori Mincho'
    ],
    usageInstructions: [
      'Buka templates/wagashi/chidori-wagashi.html di editor kode Anda.',
      'Sesuaikan daftar wagashi, harga, dan profil musim pada objek sekkiData dan catalogData di dalam tag <script>.',
      'Kustomisasi opsi slot kotak kayu 6-wagashi pada fungsi addToCrate() dan renderCrateSlots().',
      'Buka file HTML langsung di browser desktop atau mobile untuk toko wagashi langsung beroperasi.'
    ],
    sourceFiles: [
      {
        filename: 'chidori-wagashi.html',
        language: 'html',
        content: `<!-- CHIDORI WAGASHI (千鳥菓舗) — Kyoto Seasonal Nerikiri & Daifuku Atelier -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>CHIDORI WAGASHI — Kyoto Seasonal Nerikiri Atelier</title>
  <style>
    :root {
      --wagashi-cream: #FFF5E4;
      --wagashi-sakura: #FFE3E1;
      --wagashi-blush: #FFD1D1;
      --wagashi-coral: #FF9494;
      --wagashi-ink: #2A1813;
      --font-display: 'Playfair Display', Georgia, serif;
      --font-body: 'Plus Jakarta Sans', sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }
  </style>
</head>
<body>
  <div class="top-ticker">EDISI 24-SEKKI MUSIM SEMI • DIBUAT SEGAR SETIAP PAGI • GULA ALAMI WASANBON AWA</div>
  <header>
    <div class="brand">千鳥 CHIDORI</div>
    <nav>Koleksi 24-Sekki · Kotak 6-Wagashi · 5 Dimensi Indera · Katalog Musim · Sanding Teh Matcha</nav>
  </header>
  <!-- Full Interactive Kyoto Wagashi Atelier: 6-Slot Box Builder, 24-Sekki Explorer & WhatsApp Cart -->
</body>
</html>`,
        description: 'Single-file standalone HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt website atelier kriya manisan tradisional Jepang CHIDORI WAGASHI dengan palet warna Warm Almond Cream (#FFF5E4), Whisper Sakura Petal (#FFE3E1), Soft Peach Blossom (#FFD1D1), dan Vibrant Ichigo Coral Rouge (#FF9494). Dilengkapi penjelajah 24 kalender mikro-musim (24-Sekki), perakit kotak kayu 6-slot (Kiribako Box Builder), simulator 5 dimensi indera nerikiri, katalog 6 varian wagashi & daifuku, serta slide-over keranjang pemesanan WhatsApp dan reservasi Chanoyu privat.',
      designDirection: 'Kyoto traditional tea-ceremony atelier berstandar antislop: Warm Almond Cream (#FFF5E4), Whisper Sakura Petal (#FFE3E1), Soft Peach Blossom (#FFD1D1), Vibrant Ichigo Coral Rouge (#FF9494), dan Deep Adzuki Chestnut Ink (#2A1813). Tipografi Playfair Display, Plus Jakarta Sans, dan JetBrains Mono.',
      layoutAndGrid: 'Top sekki ticker cream lembut, sticky washi navbar dengan navigasi non-wrapping kokoh, hero showcase 2 kolom dengan telemetri kesegaran, panel penjelajah 24 kalender mikro-musim seketika, perakit boks bento kayu 6-slot (Kiribako), simulator 5 dimensi indera nerikiri, grid katalog 6 wagashi 3 kolom, dan drawer keranjang belanja.',
      typographyAndColor: 'Playfair Display untuk tajuk utama keanggunan kriya Kyoto, Plus Jakarta Sans untuk teks bodi dan kontrol tombol interaktif, JetBrains Mono untuk kalender mikro-sekki, gramatur (38g-45g), dan rincian harga rupiah.',
      interactions: 'Tab pemilih musim mikro 24-sekki seketika dengan pembaruan narasi dan foto, perakit kotak 6 slot dengan alokasi slot visual, simulator indera interaktif, dan drawer keranjang terintegrasi WhatsApp.',
      technicalRequirements: 'Zero dependencies, single file standalone HTML, fully responsive smartphone hingga layar desktop besar.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-11-18',
    livePreviewAvailable: true,
    accentColor: '#FF9494',
    colorPalette: [
      { hex: '#FFF5E4', rgb: 'rgb(255, 245, 228)', name: 'Warm Almond Cream', role: 'Shiro-An Dough Ground, Washi Paper Canvas & Clean Table Base' },
      { hex: '#FFE3E1', rgb: 'rgb(255, 227, 225)', name: 'Whisper Sakura Petal', role: 'Paulownia Crate Slot Tint, Delicate Petal Fill & Soft Badges' },
      { hex: '#FFD1D1', rgb: 'rgb(255, 209, 209)', name: 'Soft Peach Blossom', role: 'Rosewater Daifuku Tint, Hairline Separator & Pill Accent' },
      { hex: '#FF9494', rgb: 'rgb(255, 148, 148)', name: 'Vibrant Ichigo Coral', role: 'Fresh Strawberry Rouge, Primary CTA Button & Seasonal Focus' }
    ]
  },
  {
    id: 'tpl-28',
    slug: 'etoile-bridal-couture',
    title: 'ÉTOILE BRIDAL (Bespoke Silk Gowns & Haute Veil Atelier)',
    tagline: 'Atelier gaun pengantin sutra kustom, veil bordir tangan warisan Prancis, dan salon fitting privat',
    description: 'Template website atelier gaun pengantin couture ÉTOILE BRIDAL dengan palet warna Porcelain Whisper Silk (#F9F5F6), Delicate Blush Mist (#F8E8EE), Soft Rose Quartz (#FDCEDF), dan Vintage Peony Mauve (#F2BED1). Dilengkapi inspektur 4 siluet gaun arsitektural (The Celeste, The Vivienne, The Seraphina, The Colette), studio perakit veil kustom dengan bordir inisial monogram & tanggal pernikahan live, formulir buku swatch kain sutra gratis, katalog 6 busana & aksesori bridal, serta laci keranjang arsip dan modal reservasi fitting privat VIP.',
    category: 'wedding',
    tags: ['Bridal', 'Wedding Gown', 'Haute Couture', 'Silk Veil', 'Hand Embroidery', 'Mulberry Silk', 'Chantilly Lace', 'Private Salon Fitting', 'Luxury Atelier'],
    technologies: ['HTML5', 'Vanilla CSS', 'Vanilla JS', 'Architectural Silhouette Inspector', 'Custom Monogram Veil Studio', 'Fabric Swatch Book Requester', 'WhatsApp VIP Concierge'],
    thumbnailSvgType: 'agency',
    previewComponentKey: 'wedding-etoile',
    htmlPath: '/templates/wedding/etoile-bridal.html',
    htmlFolderPath: 'templates/wedding/etoile-bridal.html',
    features: [
      'Struktur mandiri 1 file (HTML + CSS + JS) tanpa perlu build step, node_modules, atau framework pihak ketiga',
      'Inspektur 4 siluet gaun arsitektural (A-Line, Mermaid, Royal Ballgown, Column) dengan spesifikasi teknis kain, panjang train, dan boning internal',
      'Studio kustomisasi veil & bordir tangan live: pengaturan 4 panjang kelambu (100cm-300cm), 4 tepian renda Prancis, dan kaligrafi monogram inisial/tanggal',
      'Layanan pemesanan buku swatch kain sutra mulberry 100% dan renda Chantilly gratis dalam boks wax-seal resmi',
      'Katalog 6 busana dan aksesori bridal couture dengan filter kategori cepat tanpa reload halaman',
      'Laci keranjang belanja geser (slide-over cart) terintegrasi WhatsApp VIP Concierge dan garansi fitting sempurna',
      'Standar kriya antislop dengan palet peony blush (#F9F5F6, #F8E8EE, #FDCEDF, #F2BED1) dan tipografi Cormorant Garamond yang anggun'
    ],
    usageInstructions: [
      'Buka templates/wedding/etoile-bridal.html di editor kode Anda.',
      'Sesuaikan daftar siluet gaun, harga, dan spesifikasi kain pada objek silhouettesData di dalam tag <script>.',
      'Kustomisasi opsi kelambu veil, trim renda, dan harga dasar pada array veilLengths dan veilTrims.',
      'Buka file HTML langsung di browser desktop atau mobile untuk atelier bridal langsung beroperasi.'
    ],
    sourceFiles: [
      {
        filename: 'etoile-bridal.html',
        language: 'html',
        content: `<!-- ÉTOILE BRIDAL COUTURE — Bespoke Silk Gowns & Haute Veil Atelier -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>ÉTOILE BRIDAL COUTURE — Atelier Gaun Pengantin Sutra</title>
  <style>
    :root {
      --etoile-porcelain: #F9F5F6;
      --etoile-mist: #F8E8EE;
      --etoile-blush: #FDCEDF;
      --etoile-mauve: #F2BED1;
      --etoile-ink: #22161B;
      --font-display: 'Cormorant Garamond', Georgia, serif;
      --font-body: 'Plus Jakarta Sans', sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }
  </style>
</head>
<body>
  <div class="top-ticker">180 JAM JAHIT TANGAN SUTRA MULBERRY 100% • RENDA PRANCIS CAUDRY • SALON FITTING PRIVAT VIP VILLA DAGO BANDUNG</div>
  <header>
    <div class="brand">ÉTOILE BRIDAL</div>
    <nav>Koleksi Siluet · Studio Veil & Bordir · Buku Swatch Kain · Katalog Gaun · Fitting Privat VIP</nav>
  </header>
  <!-- Full Interactive Bridal Atelier: 4-Silhouette Inspector, Bespoke Monogram Veil Studio & WhatsApp Cart -->
</body>
</html>`,
        description: 'Single-file standalone HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt website atelier gaun pengantin couture ÉTOILE BRIDAL dengan palet warna Porcelain Whisper Silk (#F9F5F6), Delicate Blush Mist (#F8E8EE), Soft Rose Quartz (#FDCEDF), dan Vintage Peony Mauve (#F2BED1). Dilengkapi inspektur 4 siluet gaun arsitektural (The Celeste, The Vivienne, The Seraphina, The Colette), studio perakit veil kustom dengan bordir inisial monogram & tanggal pernikahan live, formulir buku swatch kain sutra gratis, katalog 6 busana & aksesori bridal, serta laci keranjang arsip dan modal reservasi fitting privat VIP.',
      designDirection: 'Haute couture bridal atelier berstandar antislop: Porcelain Whisper Silk (#F9F5F6), Delicate Blush Mist (#F8E8EE), Soft Rose Quartz (#FDCEDF), Vintage Peony Mauve (#F2BED1), dan Deep Blackberry Plum Ink (#22161B). Tipografi Cormorant Garamond, Plus Jakarta Sans, dan JetBrains Mono.',
      layoutAndGrid: 'Top atelier ticker blush mist, sticky silk navbar dengan navigasi non-wrapping kokoh, hero showcase 2 kolom dengan telemetri 180 jam bordir tangan, panel inspektur 4 siluet gaun arsitektural, studio kelambu veil interaktif dengan kaligrafi live, seksi swatch box requester, grid katalog 6 busana bridal 3 kolom, dan drawer keranjang belanja.',
      typographyAndColor: 'Cormorant Garamond untuk tajuk utama keanggunan couture Prancis, Plus Jakarta Sans untuk teks bodi dan kontrol tombol interaktif, JetBrains Mono untuk panjang train, jumlah boning, gramatur, dan rincian harga rupiah.',
      interactions: 'Tab pemilih 4 siluet gaun seketika dengan pembaruan foto dan spesifikasi teknis, studio veil interaktif dengan live monogram embroidery generator, formulir pemesanan swatch box gratis, dan drawer keranjang terintegrasi WhatsApp VIP Concierge.',
      technicalRequirements: 'Zero dependencies, single file standalone HTML, fully responsive smartphone hingga layar desktop besar.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-11-18',
    livePreviewAvailable: true,
    accentColor: '#F2BED1',
    colorPalette: [
      { hex: '#F9F5F6', rgb: 'rgb(249, 245, 246)', name: 'Porcelain Whisper Silk', role: 'Clean Bridal Canvas Ground, Card Tint & Silk Drapery Base' },
      { hex: '#F8E8EE', rgb: 'rgb(248, 232, 238)', name: 'Delicate Blush Mist', role: 'Soft Swatch Base, Secondary Card Fill & Veil Mesh Tone' },
      { hex: '#FDCEDF', rgb: 'rgb(253, 206, 223)', name: 'Soft Rose Quartz', role: 'Peony Petal Accent, Hairline Borders & Active Pill Tint' },
      { hex: '#F2BED1', rgb: 'rgb(242, 190, 209)', name: 'Vintage Peony Mauve', role: 'Primary Atelier Accent, Action CTA Buttons & Ribbon Focus' }
    ]
  },
  {
    id: 'tpl-29',
    slug: 'tatah-artisanal-leather',
    title: 'TATAH LEATHERWORKS (Artisanal Saddlery & Veg-Tan Atelier)',
    tagline: 'Atelier kriya kulit nabati full-grain, jahitan tangan saddle stitch benang linen, dan simulator penuaan patina alami',
    description: 'Template website atelier kriya kulit penyamakan nabati TATAH LEATHERWORKS dengan palet warna Deep Saddle Mocha (#AD8B73), Warm Bisque Tan (#CEAB93), Toasted Oat Cream (#E3CAA5), dan Parchment Ivory (#FFFBE9). Menghadirkan panggung meja kerja asimetris 3 kolom, simulator penuaan patina 1.000 hari (1,000-Day Leather Patina Simulator), studio cap monogram kuningan tekan panas (Bespoke Brass Hot-Stamp Debosser), katalog 6 produk kulit full-grain disulam tangan, laci keranjang terintegrasi garansi seumur hidup, serta formulir konsultasi pesanan khusus (bespoke).',
    category: 'leather',
    tags: ['Leathercraft', 'Vegetable Tanned', 'Saddlery', 'Saddle Stitch', 'Full Grain Leather', 'Patina Aging', 'Brass Monogram', 'Handmade', 'Artisanal Craft'],
    technologies: ['HTML5', 'Vanilla CSS', 'Vanilla JS', '3-Column Workbench Stage', '1000-Day Patina Simulator', 'Brass Hot-Stamp Studio', 'WhatsApp Order Flow'],
    thumbnailSvgType: 'agency',
    previewComponentKey: 'leather-tatah',
    htmlPath: '/templates/leather/tatah-leather.html',
    htmlFolderPath: 'templates/leather/tatah-leather.html',
    features: [
      'Struktur mandiri 1 file (HTML + CSS + JS) tanpa perlu build step, node_modules, atau framework pihak ketiga',
      'Panggung meja kerja asimetris 3 kolom: narasi kurasi, foto sorotan tote bag, dan panel telemetri metrologi meja kerja (2.2mm, 7.0 SPI)',
      'Simulator penuaan patina 1.000 hari interaktif (Hari 1 Fresh Crust, Bulan 3 Honey Tan, Tahun 1 Amber Cognac, Tahun 3 Heritage Patina)',
      'Studio cap monogram kuningan interaktif dengan pemilihan 3 finishing foil (Blind Heat, 24K Gold, Vintage Bronze) dan preview kaligrafi live',
      'Katalog 6 karya kulit nabati (cardholder, saddle tote, notebook cover, bifold wallet, camera sling, desk mat) dengan filter kategori tanpa reload',
      'Laci keranjang belanja geser (slide-over cart) terintegrasi rincian monogram kustom dan garansi jahitan seumur hidup via WhatsApp',
      'Standar kriya antislop dengan palet kulit nabati (#AD8B73, #CEAB93, #E3CAA5, #FFFBE9) dan tipografi Playfair Display & Plus Jakarta Sans'
    ],
    usageInstructions: [
      'Buka templates/leather/tatah-leather.html di editor kode Anda.',
      'Sesuaikan daftar produk kulit, harga, dan spesifikasi pada objek catalogData di dalam tag <script>.',
      'Kustomisasi fase transformasi penuaan kulit pada array patinaStages.',
      'Buka file HTML langsung di browser desktop atau mobile untuk etalase atelier kulit langsung beroperasi.'
    ],
    sourceFiles: [
      {
        filename: 'tatah-leather.html',
        language: 'html',
        content: `<!-- TATAH LEATHERWORKS — Artisanal Saddlery & Veg-Tan Atelier -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>TATAH LEATHERWORKS — Artisanal Saddlery & Veg-Tan Atelier</title>
  <style>
    :root {
      --tatah-mocha: #AD8B73;
      --tatah-tan: #CEAB93;
      --tatah-oat: #E3CAA5;
      --tatah-parchment: #FFFBE9;
      --tatah-ink: #261C14;
      --font-display: 'Playfair Display', Georgia, serif;
      --font-body: 'Plus Jakarta Sans', sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }
  </style>
</head>
<body>
  <div class="top-ticker">KULIT SAPI FULL-GRAIN VEG-TANNED • 100% SADDLE STITCH TANGAN • GARANSI JAHITAN SEUMUR HIDUP</div>
  <header>
    <div class="brand">TATAH LEATHER</div>
    <nav>Studio Patina 1.000 Hari · Studio Monogram Deboss · Katalog Kriya Kulit · Bespoke & Workshop</nav>
  </header>
  <!-- Full Interactive Leather Atelier: 1000-Day Patina Simulator, Brass Monogram Debosser & WhatsApp Cart -->
</body>
</html>`,
        description: 'Single-file standalone HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt website atelier kriya kulit penyamakan nabati TATAH LEATHERWORKS dengan palet warna Deep Saddle Mocha (#AD8B73), Warm Bisque Tan (#CEAB93), Toasted Oat Cream (#E3CAA5), dan Parchment Ivory (#FFFBE9). Menghadirkan panggung meja kerja asimetris 3 kolom, simulator penuaan patina 1.000 hari (1,000-Day Leather Patina Simulator), studio cap monogram kuningan tekan panas (Bespoke Brass Hot-Stamp Debosser), katalog 6 produk kulit full-grain disulam tangan, laci keranjang terintegrasi garansi seumur hidup, serta formulir konsultasi pesanan khusus (bespoke).',
      designDirection: 'Artisanal leather saddlery atelier berstandar antislop: Deep Saddle Mocha (#AD8B73), Warm Bisque Tan (#CEAB93), Toasted Oat Cream (#E3CAA5), Parchment Ivory (#FFFBE9), dan Deep Peat Espresso Ink (#261C14). Tipografi Playfair Display, Plus Jakarta Sans, dan JetBrains Mono.',
      layoutAndGrid: 'Top atelier ticker kulit nabati, sticky parchment navbar dengan navigasi non-wrapping kokoh, panggung meja kerja asimetris 3 kolom dengan telemetri ketebalan 2.2mm dan kerapatan 7.0 SPI, panel simulator penuaan patina 1.000 hari interaktif, studio plat debossing monogram kuningan, grid katalog 6 produk kriya kulit 3 kolom, dan drawer keranjang belanja.',
      typographyAndColor: 'Playfair Display untuk tajuk utama kehangatan kriya kulit klasik, Plus Jakarta Sans untuk teks bodi dan kontrol tombol interaktif, JetBrains Mono untuk ketebalan milimeter/oz, kerapatan tusukan SPI, dan rincian harga rupiah.',
      interactions: 'Simulator penuaan patina 4 fase dengan pembaruan foto dan kilau warna seketika, studio cap monogram kuningan dengan live input inisial dan 3 pilihan foil finishing (Blind, Gold, Bronze), filter katalog instan, dan drawer keranjang terintegrasi WhatsApp dengan garansi seumur hidup.',
      technicalRequirements: 'Zero dependencies, single file standalone HTML, fully responsive smartphone hingga layar desktop besar.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-11-19',
    livePreviewAvailable: true,
    accentColor: '#AD8B73',
    colorPalette: [
      { hex: '#AD8B73', rgb: 'rgb(173, 139, 115)', name: 'Deep Saddle Mocha', role: 'Aged Patina Year 3, Primary CTA Button & Mature Leather Accent' },
      { hex: '#CEAB93', rgb: 'rgb(206, 171, 147)', name: 'Warm Bisque Tan', role: 'Honey Glow Transition Month 3, Secondary Cards & Pill Fill' },
      { hex: '#E3CAA5', rgb: 'rgb(227, 202, 165)', name: 'Toasted Oat Cream', role: 'Waxed Linen Thread, Subtle Stitch Borders & Badge Highlights' },
      { hex: '#FFFBE9', rgb: 'rgb(255, 251, 233)', name: 'Parchment Ivory Canvas', role: 'Main Workshop Canvas Ground, Fresh Crust Base & Clean Cards' }
    ]
  },
  {
    id: 'tpl-30',
    slug: 'aura-derma-clinic',
    title: 'AURA DERMA (Aesthetic Dermatology & Skin Barrier Clinic)',
    tagline: 'Klinik dermatologi estetika medis, simulator fototerapi LED terkalibrasi, dan laboratorium pemulihan skin barrier',
    description: 'Template website klinik dermatologi estetika dan skin barrier lab AURA DERMA dengan palet warna Active Collagen Coral (#FFC7C7), Soothing Powder Blush (#FFE2E2), Clean Alabaster Ground (#F6F6F6), dan Clinical Slate Lavender (#8785A2). Dilengkapi simulator spektrum fototerapi LED medis multi-panjang gelombang (630nm, 590nm, 415nm), tes diagnostik skin barrier 60 detik dengan rekomendasi resep protokol personal, katalog 6 prosedur klinis & dermo-cosmeceuticals, laci keranjang regimen, dan modal booking konsultasi dokter spesialis kulit Sp.D.V.E.',
    category: 'dermatology',
    tags: ['Dermatology', 'Aesthetic Clinic', 'Skin Barrier', 'LED Phototherapy', 'Dermo Cosmetics', 'Dokter SpDVE', 'Ceramide Repair', 'Clinical Facial', 'Medical Aesthetics'],
    technologies: ['HTML5', 'Vanilla CSS', 'Vanilla JS', 'Multi-Wavelength LED Simulator', '60-Sec Barrier Diagnostic Engine', 'Clinical Regimen Builder', 'WhatsApp Clinic Flow'],
    thumbnailSvgType: 'agency',
    previewComponentKey: 'dermatology-aura',
    htmlPath: '/templates/dermatology/aura-derma.html',
    htmlFolderPath: 'templates/dermatology/aura-derma.html',
    features: [
      'Struktur mandiri 1 file (HTML + CSS + JS) tanpa perlu build step, node_modules, atau framework pihak ketiga',
      'Simulator spektrum fototerapi LED medis 3 panjang gelombang (630nm Collagen Red, 590nm Soothing Amber, 415nm Twilight Lavender) dengan simulasi glow visual',
      'Mesin tes diagnostik skin barrier 60 detik interaktif dengan kalkulasi profil kerentanan dan rekomendasi protokol resep otomatis',
      'Panel telemetri diagnostik dermal 3D live (hidrasi seluler 82%, nilai TEWL 4.2 g/m²h, status mikrobiom optimal)',
      'Katalog 6 prosedur medis in-clinic dan produk dermo-skincare dengan filter kategori instan',
      'Laci keranjang belanja geser (slide-over cart) terintegrasi WhatsApp dokter spesialis Sp.D.V.E',
      'Standar kriya antislop dengan palet klinis (#FFC7C7, #FFE2E2, #F6F6F6, #8785A2) dan tipografi Playfair Display & Plus Jakarta Sans'
    ],
    usageInstructions: [
      'Buka templates/dermatology/aura-derma.html di editor kode Anda.',
      'Sesuaikan daftar tindakan medis, harga, dan bahan aktif pada objek catalogData di dalam tag <script>.',
      'Kustomisasi parameter spektrum fototerapi LED pada array spectrumModes.',
      'Buka file HTML langsung di browser desktop atau mobile untuk etalase klinik dermatologi langsung beroperasi.'
    ],
    sourceFiles: [
      {
        filename: 'aura-derma.html',
        language: 'html',
        content: `<!-- AURA DERMA CLINIC — Aesthetic Dermatology & Skin Barrier Clinic -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>AURA DERMA CLINIC — Aesthetic Dermatology</title>
  <style>
    :root {
      --derma-coral: #FFC7C7;
      --derma-blush: #FFE2E2;
      --derma-alabaster: #F6F6F6;
      --derma-slate: #8785A2;
      --derma-ink: #1E1B26;
      --font-display: 'Playfair Display', Georgia, serif;
      --font-body: 'Plus Jakarta Sans', sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }
  </style>
</head>
<body>
  <div class="top-ticker">SIP DOKTER SPESIALIS KULIT (Sp.D.V.E) • STERILISASI KELAS 100 • TEKNOLOGI FOTOTERAPI LED MEDIS KEMENKES RI</div>
  <header>
    <div class="brand">AURA DERMA</div>
    <nav>Simulator Fototerapi LED · Tes Skin Barrier · Prosedur & Dermo-Skincare · Jadwal Dokter Sp.D.V.E</nav>
  </header>
  <!-- Full Interactive Aesthetic Clinic: LED Phototherapy Simulator, 60s Barrier Quiz & WhatsApp Cart -->
</body>
</html>`,
        description: 'Single-file standalone HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt website klinik dermatologi estetika dan skin barrier lab AURA DERMA dengan palet warna Active Collagen Coral (#FFC7C7), Soothing Powder Blush (#FFE2E2), Clean Alabaster Ground (#F6F6F6), dan Clinical Slate Lavender (#8785A2). Dilengkapi simulator spektrum fototerapi LED medis multi-panjang gelombang (630nm, 590nm, 415nm), tes diagnostik skin barrier 60 detik dengan rekomendasi resep protokol personal, katalog 6 prosedur klinis & dermo-cosmeceuticals, laci keranjang regimen, dan modal booking konsultasi dokter spesialis kulit Sp.D.V.E.',
      designDirection: 'Clinical dermo-aesthetic atelier berstandar antislop: Active Collagen Coral (#FFC7C7), Soothing Powder Blush (#FFE2E2), Clean Alabaster Ground (#F6F6F6), Clinical Slate Lavender (#8785A2), dan Deep Amethyst Charcoal Ink (#1E1B26). Tipografi Playfair Display, Plus Jakarta Sans, dan JetBrains Mono.',
      layoutAndGrid: 'Top clinical protocol bar, sticky alabaster navbar dengan navigasi non-wrapping kokoh, hero clinical editorial 2 kolom dengan telemetri diagnostik dermal 3D, panel simulator fototerapi LED multi-spektrum, mesin kuesioner diagnostik skin barrier 60 detik, grid katalog 6 prosedur medis 3 kolom, dan drawer keranjang belanja.',
      typographyAndColor: 'Playfair Display untuk tajuk utama keanggunan dermatologi presisi, Plus Jakarta Sans untuk teks bodi dan formulir klinis, JetBrains Mono untuk panjang gelombang nanometer, indeks hidrasi, TEWL, dan rincian harga rupiah.',
      interactions: 'Simulator 3 spektrum fototerapi LED dengan pembaruan glow visual seketika, kuesioner skin barrier 3 langkah dengan kalkulasi resep otomatis, filter katalog instan, dan drawer keranjang terintegrasi WhatsApp dokter spesialis Sp.D.V.E.',
      technicalRequirements: 'Zero dependencies, single file standalone HTML, fully responsive smartphone hingga layar desktop besar.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-11-19',
    livePreviewAvailable: true,
    accentColor: '#8785A2',
    colorPalette: [
      { hex: '#FFC7C7', rgb: 'rgb(255, 199, 199)', name: 'Active Collagen Coral', role: 'Collagen Red Stimulation, Primary Action & Diagnosis Pill' },
      { hex: '#FFE2E2', rgb: 'rgb(255, 226, 226)', name: 'Soothing Powder Blush', role: 'Barrier Repair Ground, Soft Tint & Clinical Card Background' },
      { hex: '#F6F6F6', rgb: 'rgb(246, 246, 246)', name: 'Clean Alabaster Canvas', role: 'Main Clinical Ground, Sterile Atmosphere & Pure Base' },
      { hex: '#8785A2', rgb: 'rgb(135, 133, 162)', name: 'Clinical Slate Lavender', role: 'Physician Authority, Primary Buttons & Wavelength Filter' }
    ]
  },
  {
    id: 'tpl-31',
    slug: 'celeste-astronomical-horology',
    title: 'CÉLESTE (Haute Horlogerie & Astronomical Complications)',
    tagline: 'Atelier jam tangan mekanis in-house, simulator fase bulan sinodik 29.53 hari, dan tuner frekuensi 4Hz',
    description: 'Template website atelier jam tangan mekanis mewah CÉLESTE HORLOGERIE dengan palet warna Luminous Opaline Lilac (#F4EEFF), Soft Periwinkle Frost (#DCD6F7), Celestial Cornflower Slate (#A6B1E1), dan Deep Twilight Iris Navy (#424874). Dilengkapi simulator komplikasi fase bulan astronomi sinodik 29.53 hari, tuner frekuensi getaran roda keseimbangan (2.5Hz, 4.0Hz, 5.0Hz) dengan osilogram live, katalog 6 jam tangan kaliber in-house bersertifikasi kronometer COSC, laci brankas pemesanan, serta reservasi inspeksi fisik di private viewing salon.',
    category: 'horology',
    tags: ['Horology', 'Mechanical Watches', 'Moonphase', 'Astronomical Complication', 'Chronometer COSC', 'In-House Calibre', 'Blued Steel Hands', 'Luxury Timepiece', 'Swiss Grade'],
    technologies: ['HTML5', 'Vanilla CSS', 'Vanilla JS', 'Synodic Moonphase Engine', 'Escapement Frequency Tuner', 'Horological Vault Flow', 'WhatsApp Concierge'],
    thumbnailSvgType: 'agency',
    previewComponentKey: 'horology-celeste',
    htmlPath: '/templates/horology/celeste-horlogerie.html',
    htmlFolderPath: 'templates/horology/celeste-horlogerie.html',
    features: [
      'Struktur mandiri 1 file (HTML + CSS + JS) tanpa perlu build step, node_modules, atau framework pihak ketiga',
      'Simulator komplikasi diskus fase bulan astronomis sinodik 29.53 hari (Bulan Baru, Kuartal 1, Purnama, Kuartal Akhir) dengan bayangan cakram interaktif',
      'Tuner osilator frekuensi roda keseimbangan mekanis (2.5 Hz / 18.000 VPH, 4.0 Hz / 28.800 VPH, 5.0 Hz / 36.000 VPH) dengan layar oscillogram',
      'Panel telemetri horologis presisi (-1/+2 detik deviasi harian, 72 jam power reserve, 59-gigi roda bintang astronomis)',
      'Katalog 6 jam tangan mekanis in-house (Moonphase, Monopusher Chrono, Flying Tourbillon, Dual-Time GMT, Grand Feu Enamel, Regulateur)',
      'Laci brankas jam tangan geser (slide-over vault) terintegrasi sertifikasi COSC dan komunikasi langsung ke Master Watchmaker via WhatsApp',
      'Standar kriya antislop dengan palet twilight kosmik (#F4EEFF, #DCD6F7, #A6B1E1, #424874) dan tipografi Playfair Display & Plus Jakarta Sans'
    ],
    usageInstructions: [
      'Buka templates/horology/celeste-horlogerie.html di editor kode Anda.',
      'Sesuaikan daftar koleksi jam tangan, harga, dan spesifikasi kaliber pada objek catalogData di dalam tag <script>.',
      'Kustomisasi parameter komplikasi fase bulan astronomis pada array moonPhases.',
      'Buka file HTML langsung di browser desktop atau mobile untuk etalase haute horlogerie langsung beroperasi.'
    ],
    sourceFiles: [
      {
        filename: 'celeste-horlogerie.html',
        language: 'html',
        content: `<!-- CÉLESTE HORLOGERIE — Haute Horlogerie & Astronomical Complications -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>CÉLESTE HORLOGERIE — Haute Horlogerie</title>
  <style>
    :root {
      --celeste-opaline: #F4EEFF;
      --celeste-frost: #DCD6F7;
      --celeste-slate: #A6B1E1;
      --celeste-navy: #424874;
      --celeste-ink: #1A1C30;
      --font-display: 'Playfair Display', Georgia, serif;
      --font-body: 'Plus Jakarta Sans', sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
    }
  </style>
</head>
<body>
  <div class="top-ticker">IN-HOUSE CALIBRE CL-8802 • CHRONOMETER SERTIFIKASI COSC • FREKUENSI 28.800 VPH (4 HZ)</div>
  <header>
    <div class="brand">CÉLESTE</div>
    <nav>Simulator Fase Bulan · Tuner Frekuensi 4Hz · Koleksi Mahakarya · Private Viewing Salon</nav>
  </header>
  <!-- Full Interactive Horology Atelier: Moonphase Simulator, Escapement Tuner & WhatsApp Vault -->
</body>
</html>`,
        description: 'Single-file standalone HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt website atelier jam tangan mekanis mewah CÉLESTE HORLOGERIE dengan palet warna Luminous Opaline Lilac (#F4EEFF), Soft Periwinkle Frost (#DCD6F7), Celestial Cornflower Slate (#A6B1E1), dan Deep Twilight Iris Navy (#424874). Dilengkapi simulator komplikasi fase bulan astronomi sinodik 29.53 hari, tuner frekuensi getaran roda keseimbangan (2.5Hz, 4.0Hz, 5.0Hz) dengan osilogram live, katalog 6 jam tangan kaliber in-house bersertifikasi kronometer COSC, laci brankas pemesanan, serta reservasi inspeksi fisik di private viewing salon.',
      designDirection: 'Astronomical haute horlogerie atelier berstandar antislop: Luminous Opaline Lilac (#F4EEFF), Soft Periwinkle Frost (#DCD6F7), Celestial Cornflower Slate (#A6B1E1), Deep Twilight Iris Navy (#424874), dan Deep Midnight Amethyst Ink (#1A1C30). Tipografi Playfair Display, Plus Jakarta Sans, dan JetBrains Mono.',
      layoutAndGrid: 'Top horological telemetry bar periwinkle, sticky opaline navbar dengan navigasi non-wrapping kokoh, hero astronomical dial showcase 2 kolom dengan telemetri deviasi -1/+2 detik dan cadangan daya 72 jam, panel simulator diskus fase bulan astronomis 59-gigi, tuner osilator escapement frekuensi mekanis, grid katalog 6 mahakarya jam 3 kolom, dan drawer brankas belanja.',
      typographyAndColor: 'Playfair Display untuk tajuk utama wibawa seni horologi tinggi, Plus Jakarta Sans untuk teks bodi dan kontrol tombol interaktif, JetBrains Mono untuk frekuensi VPH, hertz osilasi, toleransi harian detik, dan rincian harga rupiah.',
      interactions: 'Simulator 4 fase orbit bulan astronomi dengan rotasi diskus dan bayangan cakram realistis, tuner frekuensi 3 kecepatan osilasi dengan layar oscillogram, filter katalog instan, dan drawer brankas terintegrasi WhatsApp Master Watchmaker.',
      technicalRequirements: 'Zero dependencies, single file standalone HTML, fully responsive smartphone hingga layar desktop besar.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-11-19',
    livePreviewAvailable: true,
    accentColor: '#424874',
    colorPalette: [
      { hex: '#F4EEFF', rgb: 'rgb(244, 238, 255)', name: 'Luminous Opaline Lilac', role: 'Main Dial Canvas, Pure Opaline Ground & Frost Card Base' },
      { hex: '#DCD6F7', rgb: 'rgb(220, 214, 247)', name: 'Soft Periwinkle Frost', role: 'Frosted Bridges, Subdial Shading & Telemetry Ticker Tint' },
      { hex: '#A6B1E1', rgb: 'rgb(166, 177, 225)', name: 'Celestial Cornflower Slate', role: 'Subdial Sky Chart, Balance Wheel Wire & Border Accents' },
      { hex: '#424874', rgb: 'rgb(66, 72, 116)', name: 'Deep Twilight Iris Navy', role: 'Night Sky Complication Disc, Primary Buttons & Alligator Strap' }
    ]
  },
  {
    id: 'tpl-32',
    slug: 'cyano-blueprint-architecture',
    title: 'CYANO ARCHITECTURE (Studio Cetak Biru & Gambar Kerja Arsitektur)',
    tagline: 'Atelier cetak biru arsitektur tropis, inspektor multi-layer CAD interaktif, dan standar gambar kerja DED IAI',
    description: 'Template website atelier arsitektur dan gambar kerja tropis CYANO ARCHITECTURE dengan palet warna Abyssal Blueprint Ink (#1B262C), Prussian Blue Ground (#0F4C75), Technical Steel Cyan (#3282B8), dan Glacial Chalk White (#BBE1FA). Dilengkapi inspektor lapisan CAD interaktif (Arsitektur & Zonasi, Struktur Kolom/Balok Baja, Elektrikal & Sanitasi), simulasi telemetri sirkulasi angin silang 1.8 m/s, katalog 6 lembar gambar kerja DED nyata, tabel jadwal spesifikasi material RKS standar IAI, laci arsip lembar gambar, dan konsultasi kelayakan lahan via WhatsApp.',
    category: 'architecture',
    tags: ['Architecture', 'Blueprint', 'Cyanotype', 'CAD Drafting', 'DED', 'Tropical Architecture', 'Technical Drawing', 'Structural Grid', 'Material Schedule'],
    technologies: ['HTML5', 'Vanilla CSS', 'Vanilla JS', 'SVG CAD Blueprint Engine', 'Spatial Telemetry Inspector', 'Drawing Register Drawer', 'WhatsApp Architectural Concierge'],
    thumbnailSvgType: 'agency',
    previewComponentKey: 'architecture-cyano',
    htmlPath: '/templates/architecture/cyano-architects.html',
    htmlFolderPath: 'templates/architecture/cyano-architects.html',
    features: [
      'Struktur mandiri 1 file (HTML + CSS + JS) tanpa perlu build step, node_modules, atau framework pihak ketiga',
      'Inspektor multi-lapisan CAD vektor SVG (Lapisan Arsitektur & Zonasi, Struktur Kolom Beton K-350 & Balok WF, serta Jaringan Pipa Sanitasi & Elektrikal)',
      'Panel telemetri spasial mikro-klimat interaktif (Dimensi ruang, luas m², tinggi plafon, kecepatan angin silang m/s, dan faktor pencahayaan DF)',
      'Pengubah skala metrik cepat (1:50 dan 1:100) dengan sumbu as grid terukur A-B-C dan 1-2-3',
      'Katalog 6 lembar gambar kerja arsitektur tropis terkurasi dengan filter kategori dan modal inspeksi teknis mendalam',
      'Tabel jadwal spesifikasi material kontraktual RKS (Beton ekspos film-faced, kayu ulin SVLK, kaca Low-E akustik, batu andesit Merapi, dan baja WF Krakatau Steel)',
      'Laci geser buku lembar gambar (slide-over drawer) terintegrasi pengajuan konsultasi DED via WhatsApp berformat pesan terstruktur',
      'Standar kriya antislop dengan palet cyanotype presisi (#1B262C, #0F4C75, #3282B8, #BBE1FA) dan tipografi Space Grotesk & IBM Plex Mono'
    ],
    usageInstructions: [
      'Buka templates/architecture/cyano-architects.html di editor kode Anda.',
      'Sesuaikan daftar proyek, nomor lembar gambar (DWG-A), dan spesifikasi material pada objek projectsData di dalam tag <script>.',
      'Kustomisasi parameter dimensi ruangan dan data telemetri iklim mikro pada objek roomsData.',
      'Buka file HTML langsung di browser desktop atau mobile untuk etalase studio arsitektur langsung beroperasi.'
    ],
    sourceFiles: [
      {
        filename: 'cyano-architects.html',
        language: 'html',
        content: `<!-- CYANO ARCHITECTURE — Atelier Cetak Biru & Gambar Kerja Tropis -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>CYANO ARCHITECTURE — Atelier Cetak Biru</title>
  <style>
    :root {
      --cyano-obsidian: #1B262C;
      --cyano-prussian: #0F4C75;
      --cyano-steel: #3282B8;
      --cyano-ice: #BBE1FA;
      --font-display: 'Space Grotesk', sans-serif;
      --font-body: 'Plus Jakarta Sans', sans-serif;
      --font-mono: 'IBM Plex Mono', monospace;
    }
  </style>
</head>
<body>
  <div class="top-ticker">STATUS ATELIER: MEJA GAMBAR AKTIF • STANDAR GAMBAR: IAI-K350 • CAD V2026.4</div>
  <header>
    <div class="brand">CYANO ARCHITECTURE</div>
    <nav>Denah Interaktif · Lapisan CAD · Koleksi Gambar · Spesifikasi Material</nav>
  </header>
  <!-- Full Interactive Architectural CAD Multi-Layer Inspector & Material Schedule -->
</body>
</html>`,
        description: 'Single-file standalone HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt website studio arsitektur dan cetak biru CYANO ARCHITECTURE dengan palet warna Abyssal Blueprint Ink (#1B262C), Prussian Blue Ground (#0F4C75), Technical Steel Cyan (#3282B8), dan Glacial Chalk White (#BBE1FA). Dilengkapi inspektor lapisan CAD interaktif (Arsitektur, Struktur, MEP), simulasi telemetri sirkulasi angin silang 1.8 m/s, katalog 6 lembar gambar kerja DED nyata, tabel jadwal spesifikasi material RKS standar IAI, laci arsip lembar gambar, dan konsultasi kelayakan lahan via WhatsApp.',
      designDirection: 'Architectural cyanotype drafting atelier berstandar antislop: Abyssal Blueprint Ink (#1B262C), Prussian Blue Ground (#0F4C75), Technical Steel Cyan (#3282B8), Glacial Chalk White (#BBE1FA), dan Fine Technical Grid Hairlines rgba(50, 130, 184, 0.18). Tipografi Space Grotesk, Plus Jakarta Sans, dan IBM Plex Mono.',
      layoutAndGrid: 'Top telemetry bar koordinat GPS Bandung, sticky header dengan brand title block dan navigasi non-wrapping kokoh, hero blueprint bench 2 kolom dengan elevasi potongan Villa Dago, panggung inspektor denah CAD vektor interaktif 3 lapisan, grid 6 lembar karya arsitektur 3 kolom, tabel jadwal spesifikasi bahan RKS, dan drawer buku arsip lembar gambar.',
      typographyAndColor: 'Space Grotesk untuk tajuk utama berkarakter geometris arsitektural, Plus Jakarta Sans untuk teks bodi penjelasan filosofi spasial dan kontrol tombol interaktif, IBM Plex Mono untuk nomor gambar DWG, koordinat datum, skala metrik, koefisien KDB, dan dimensi teknis.',
      interactions: 'Inspektor lapisan CAD interaktif (Arsitektur, Struktur WF/Beton, MEP) dengan hover telemetri ruangan dinamis, sakelar skala metrik 1:50 dan 1:100, filter kategori lembar proyek instan, modal inspeksi detail tapak, formulir konsultasi kelayakan lahan, serta drawer arsip dokumen gambar kerja terintegrasi WhatsApp Principal Architect.',
      technicalRequirements: 'Zero dependencies, single file standalone HTML, fully responsive smartphone hingga layar desktop besar.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-11-19',
    livePreviewAvailable: true,
    accentColor: '#0F4C75',
    colorPalette: [
      { hex: '#1B262C', rgb: 'rgb(27, 38, 44)', name: 'Abyssal Blueprint Ink', role: 'Latar Viewport CAD, Border Cetak Biru & Teks Bodi Kontras Tinggi' },
      { hex: '#0F4C75', rgb: 'rgb(15, 76, 117)', name: 'Prussian Blue Ground', role: 'Warna Kanvas Cetak Biru Utama, Tombol Aksi Primer & Header Titel Blok' },
      { hex: '#3282B8', rgb: 'rgb(50, 130, 184)', name: 'Technical Steel Cyan', role: 'Garis Sumbu Grid Struktural, Garis Dimensi CAD & Indikator Interaktif' },
      { hex: '#BBE1FA', rgb: 'rgb(187, 225, 250)', name: 'Glacial Chalk White', role: 'Anotasi Denah Gambar Teknik, Badge Status Lembar & Latar Kartu Lembut' }
    ]
  },
  {
    id: 'tpl-33',
    slug: 'resonance-analog-audio',
    title: 'RESONANCE (Atelier Audio Analog, Tabung Trioda & Hi-Fi Akustik)',
    tagline: 'Laboratorium kalibrasi audio analog presisi, penguat tabung trioda Class-A 300B, dan tuner jarum VU meter',
    description: 'Template website atelier audio analog mewah dan laboratorium akustik RESONANCE AUDIO LAB dengan palet warna Deep Slate Steel Navy (#27374D), Muted Slate Cerulean (#526D82), Pale Mineral Slate (#9DB2BF), dan Clean Frost Mist (#DDE6ED). Dilengkapi kalibrator atenuasi desibel dengan jarum balistik VU-Meter analog ganda interaktif, tuner kurva respon frekuensi akustik 20Hz-40kHz 4-profil tonal, katalog 6 perangkat master audio diskrit (Tube Amp, Ladder DAC R-2R, Planar Headphones, Turntable), tabel spesifikasi bahan UP-OCC 6N, laci arsip audisi perangkat, dan reservasi sesi dengar privat salon akustik IEC-60268 via WhatsApp.',
    category: 'audio',
    tags: ['Audiophile', 'Hi-Fi Audio', 'Vacuum Tube', '300B Triode', 'R-2R Ladder DAC', 'VU Meter', 'Planar Magnetic', 'Acoustic Lab', 'Analog Sound'],
    technologies: ['HTML5', 'Vanilla CSS', 'Vanilla JS', 'SVG Ballistic VU-Meter Engine', 'Acoustic Frequency Curve Visualizer', 'Audition Vault Flow', 'WhatsApp Concierge'],
    thumbnailSvgType: 'agency',
    previewComponentKey: 'audio-resonance',
    htmlPath: '/templates/audio/resonance-audio.html',
    htmlFolderPath: 'templates/audio/resonance-audio.html',
    features: [
      'Struktur mandiri 1 file (HTML + CSS + JS) tanpa perlu build step, node_modules, atau framework pihak ketiga',
      'Kalibrator jarum balistik VU-Meter analog ganda vektor SVG interaktif dengan slider atenuasi desibel (-36 dB s/d +3 dB)',
      'Sakelar topologi amplifikasi interaktif: Single-Ended Triode 300B (Harmonik Genap) vs Solid-State Class-A (Ultra-Linear)',
      'Layar visualizer kurva respon frekuensi 20 Hz - 40.000 Hz dinamis dengan 4 profil suara (Flat Monitor, Acoustic Vocal, Symphonic Hall, Late Night)',
      'Katalog 6 perangkat audio referensi diskrit (AERO-300B Tube Amp, APEX-R2R DAC, STRATA-9 Planar, VELOX-1 Turntable, MONITOR-7 Beryllium, ISOL-4)',
      'Tabel spesifikasi material audiophile (Konduktor UP-OCC 6N, filamen 300B tungsten, resistor Vishay 0.01%, transformator pelindung Mu-metal)',
      'Laci geser daftar perangkat audisi (slide-over vault) dengan ringkasan sistem dan konsultasi kurator audio via WhatsApp',
      'Standar kriya antislop dengan palet slate mineral (#27374D, #526D82, #9DB2BF, #DDE6ED) dan tipografi Space Grotesk & IBM Plex Mono'
    ],
    usageInstructions: [
      'Buka templates/audio/resonance-audio.html di editor kode Anda.',
      'Sesuaikan katalog perangkat audio, harga, dan spesifikasi impedansi pada objek gearData di dalam tag <script>.',
      'Kustomisasi kurva respon frekuensi pada objek profileCurves.',
      'Buka file HTML langsung di browser desktop atau mobile untuk etalase audio referensi langsung beroperasi.'
    ],
    sourceFiles: [
      {
        filename: 'resonance-audio.html',
        language: 'html',
        content: `<!-- RESONANCE AUDIO LAB — Analog Audio & Precision Acoustic Lab -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>RESONANCE — Analog Audio Lab</title>
  <style>
    :root {
      --audio-slate-dark: #27374D;
      --audio-storm: #526D82;
      --audio-mineral: #9DB2BF;
      --audio-frost: #DDE6ED;
      --font-display: 'Space Grotesk', sans-serif;
      --font-body: 'Plus Jakarta Sans', sans-serif;
      --font-mono: 'IBM Plex Mono', monospace;
    }
  </style>
</head>
<body>
  <div class="top-ticker">ACOUSTIC LAB BANDUNG • THD+N < 0.0003% • TOPOLOGI CLASS-A SINGLE-ENDED 300B</div>
  <header>
    <div class="brand">RESONANCE</div>
    <nav>Kalibrasi VU · Kurva Akustik · Koleksi Perangkat · Ruang Dengar</nav>
  </header>
  <!-- Full Interactive Audiophile Bench: Dual VU-Meters, Curve Visualizer & Audition Vault -->
</body>
</html>`,
        description: 'Single-file standalone HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt website atelier audio analog mewah dan laboratorium akustik RESONANCE AUDIO LAB dengan palet warna Deep Slate Steel Navy (#27374D), Muted Slate Cerulean (#526D82), Pale Mineral Slate (#9DB2BF), dan Clean Frost Mist (#DDE6ED). Dilengkapi kalibrator atenuasi desibel dengan jarum balistik VU-Meter analog ganda interaktif, tuner kurva respon frekuensi akustik 20Hz-40kHz 4-profil tonal, katalog 6 perangkat master audio diskrit (Tube Amp, Ladder DAC R-2R, Planar Headphones, Turntable), tabel spesifikasi bahan UP-OCC 6N, laci arsip audisi perangkat, dan reservasi sesi dengar privat salon akustik IEC-60268 via WhatsApp.',
      designDirection: 'Audiophile acoustic laboratory berstandar antislop: Deep Slate Steel Navy (#27374D), Muted Slate Cerulean (#526D82), Pale Mineral Slate (#9DB2BF), Clean Frost Mist (#DDE6ED), Tube Filament Amber (#F59E0B), dan Needle Red (#DC2626). Tipografi Space Grotesk, Plus Jakarta Sans, dan IBM Plex Mono.',
      layoutAndGrid: 'Top telemetry bar laboratorium akustik IEC-60268, sticky header dengan brand monogram RS dan navigasi non-wrapping kokoh, hero audiophile rack plate 2 kolom dengan dual analog needle VU meter dan lampu filamen tabung 300B hangat, panggung kalibrator jarum VU meter analog ganda dengan slider atenuasi desibel, layar kurva frekuensi 20Hz-40kHz dinamis, grid katalog 6 perangkat master 3 kolom, dan drawer buku audisi perangkat.',
      typographyAndColor: 'Space Grotesk untuk tajuk utama berkarakter akustik presisi tinggi, Plus Jakarta Sans untuk teks bodi penjelasan filosofi suara dan kontrol tombol interaktif, IBM Plex Mono untuk spesifikasi teknis THD+N, rasio SNR, resistansi ohm, kapasitas daya VA, dan desibel dB.',
      interactions: 'Kalibrator jarum balistik VU-Meter ganda interaktif dengan pergerakan busur dinamis sesuai slider atenuasi dB, sakelar topologi tabung vs solid-state, selektor 4 profil respon frekuensi dengan kurva SVG beranimasi, filter katalog instan, modal inspeksi detail sasis pejal, formulir reservasi ruang dengar privat, serta drawer daftar audisi terintegrasi WhatsApp Master Kurator Audio.',
      technicalRequirements: 'Zero dependencies, single file standalone HTML, fully responsive smartphone hingga layar desktop besar.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-11-19',
    livePreviewAvailable: true,
    accentColor: '#27374D',
    colorPalette: [
      { hex: '#27374D', rgb: 'rgb(39, 55, 77)', name: 'Deep Slate Steel Navy', role: 'Sasis Anodized Gelap, Panel VU Meter & Tombol Aksi Primer' },
      { hex: '#526D82', rgb: 'rgb(82, 109, 130)', name: 'Muted Slate Cerulean', role: 'Bingkai Bezel Meteran, Tab Kalibrator & Aksen Kartu' },
      { hex: '#9DB2BF', rgb: 'rgb(157, 178, 191)', name: 'Pale Mineral Slate', role: 'Garis Skala Desibel, Sumbu Respon Frekuensi & Border Sasis' },
      { hex: '#DDE6ED', rgb: 'rgb(221, 230, 237)', name: 'Clean Frost Mist', role: 'Kanvas Latar Utama, Permukaan Brushed Metal & Latar Lembut' }
    ]
  },
  {
    id: 'tpl-34',
    slug: 'axis-mechanical-keyboards',
    title: 'AXIS KEYBOARDS (Atelier Keyboard Mekanikal Kustom & Lab Switch)',
    tagline: 'Studio perakitan keyboard mekanikal kustom independen, sasis aluminium pejal CNC 6063, dan tester kurva switch',
    description: 'Template website atelier keyboard mekanikal kustom dan laboratorium switch AXIS KEYBOARDS dengan palet warna Electric Cyan (#08D9D6), Matte Carbon Noir (#252A34), Neon Crimson (#FF2E63), dan Platinum Silver (#EAEAEA). Dilengkapi tester gaya aktuasi switch mekanikal (Force Curve gram vs milimeter) dengan live typing test sandbox, inspektor 6 lapisan konstruksi gasket mount Poron terisolasi, katalog 6 seri keyboard kustom (65%, 75% Wireless, TKL Brass, Alice Ergo, Numpad Macro), tabel spesifikasi bahan CNC 6063 & pelumas Krytox GPL 205g0, laci brankas rakitan, dan konsultasi perakitan kustom via WhatsApp.',
    category: 'keyboards',
    tags: ['Mechanical Keyboard', 'Custom Keebs', 'Gasket Mount', 'CNC 6063 Aluminum', 'Krytox 205g0', 'Force Curve', 'Switch Tester', 'Durock V2', 'QMK VIA'],
    technologies: ['HTML5', 'Vanilla CSS', 'Vanilla JS', 'SVG Force Curve Engine', 'Gasket Exploded Layer Inspector', 'Keyboard Build Vault Flow', 'WhatsApp Concierge'],
    thumbnailSvgType: 'agency',
    previewComponentKey: 'keyboards-axis',
    htmlPath: '/templates/keyboards/axis-keyboards.html',
    htmlFolderPath: 'templates/keyboards/axis-keyboards.html',
    features: [
      'Struktur mandiri 1 file (HTML + CSS + JS) tanpa perlu build step, node_modules, atau framework pihak ketiga',
      'Tester kurva gaya aktuasi switch vektor SVG interaktif (Force Curve gram vs milimeter) dengan 4 tipe switch (Linear, Tactile, Silent, Clicky)',
      'Kotak uji ketik (Live Typing Sandbox) dengan counter karakter dan respons animasi keycap interaktif',
      'Inspektor 6 lapisan konstruksi gasket mount Poron (Keycaps PBT, Pelat FR4 flex-cuts, Poron gasket, PCB hot-swap, IXPE foam, Sasis CNC 6063 + Brass weight)',
      'Katalog 6 seri keyboard mekanikal kustom (AXIS-65 Billet, AERO-75 Wireless Tri-Mode, KAIROS-TKL Studio, ALICE-ERGO Split, NUMPAD-16 Macro, SWITCH-MASTER 90x)',
      'Tabel spesifikasi material maker (Aluminium 6063-T6 CNC, pelumas Krytox 205g0 Miller-Stephenson, busa Rogers Poron LE-20, stabilizer Durock V2)',
      'Laci geser brankas rakitan (slide-over vault) dengan ringkasan komponen dan kalkulasi estimasi konsultasi ke Master Builder via WhatsApp',
      'Standar kriya antislop dengan palet cyber-mechanic (#08D9D6, #252A34, #FF2E63, #EAEAEA) dan tipografi Space Grotesk & IBM Plex Mono'
    ],
    usageInstructions: [
      'Buka templates/keyboards/axis-keyboards.html di editor kode Anda.',
      'Sesuaikan katalog seri keyboard, harga, dan spesifikasi bobot pada objek boardsData di dalam tag <script>.',
      'Kustomisasi kurva gaya tekan dan karakteristik switch pada objek switchesData.',
      'Buka file HTML langsung di browser desktop atau mobile untuk etalase studio keyboard mekanikal langsung beroperasi.'
    ],
    sourceFiles: [
      {
        filename: 'axis-keyboards.html',
        language: 'html',
        content: `<!-- AXIS KEYBOARDS — Custom Mechanical Atelier & Switch Lab -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>AXIS KEYBOARDS — Custom Mechanical Atelier</title>
  <style>
    :root {
      --axis-cyan: #08D9D6;
      --axis-carbon: #252A34;
      --axis-crimson: #FF2E63;
      --axis-platinum: #EAEAEA;
      --font-display: 'Space Grotesk', sans-serif;
      --font-body: 'Plus Jakarta Sans', sans-serif;
      --font-mono: 'IBM Plex Mono', monospace;
    }
  </style>
</head>
<body>
  <div class="top-ticker">POLLING RATE 1.000 HZ • QMK/VIA PROGRAMMABLE • PORON GASKET V4</div>
  <header>
    <div class="brand">AXIS KEYBOARDS</div>
    <nav>Tester Switch · Lapisan Gasket · Koleksi Keyboard · Spesifikasi Komponen</nav>
  </header>
  <!-- Full Interactive Mechanical Keyboard Atelier: Switch Tester, Gasket Inspector & Build Vault -->
</body>
</html>`,
        description: 'Single-file standalone HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt website atelier keyboard mekanikal kustom dan laboratorium switch AXIS KEYBOARDS dengan palet warna Electric Cyan (#08D9D6), Matte Carbon Noir (#252A34), Neon Crimson (#FF2E63), dan Platinum Silver (#EAEAEA). Dilengkapi tester gaya aktuasi switch mekanikal (Force Curve gram vs milimeter) dengan live typing test sandbox, inspektor 6 lapisan konstruksi gasket mount Poron terisolasi, katalog 6 seri keyboard kustom (65%, 75% Wireless, TKL Brass, Alice Ergo, Numpad Macro), tabel spesifikasi bahan CNC 6063 & pelumas Krytox GPL 205g0, laci brankas rakitan, dan konsultasi perakitan kustom via WhatsApp.',
      designDirection: 'Custom mechanical keyboard maker atelier berstandar antislop: Electric Cyan (#08D9D6), Matte Carbon Noir (#252A34), Neon Crimson (#FF2E63), Platinum Silver (#EAEAEA), dan Deep Obsidian Carbon Ink (#12161F). Tipografi Space Grotesk, Plus Jakarta Sans, dan IBM Plex Mono.',
      layoutAndGrid: 'Top telemetry bar laboratorium switch 1.000 Hz, sticky header dengan brand monogram AX-LAB dan navigasi non-wrapping kokoh, hero keeb plate 2 kolom dengan matriks keyboard interaktif berpendar cyan & pink, panggung pengujian switch kurva gaya tekan vektor SVG gram vs mm, inspektor 6 lapisan anatomi konstruksi gasket mount, grid katalog 6 seri keyboard 3 kolom, dan drawer buku brankas rakitan.',
      typographyAndColor: 'Space Grotesk untuk tajuk utama berkarakter geometris modern presisi tinggi, Plus Jakarta Sans untuk teks bodi penjelasan filosofi taktil dan kontrol tombol interaktif, IBM Plex Mono untuk spesifikasi teknis gram aktuasi, pre-travel mm, toleransi CNC, dan harga resmi rupiah.',
      interactions: 'Tester switch interaktif dengan animasi kurva gaya dinamis dan titik aktuasi tactile bump, kotak uji ketik interaktif dengan penghitung karakter live, inspektor 6 lapisan konstruksi gasket, filter katalog instan, modal inspeksi detail sasis pejal, formulir konsultasi perakitan kustom, serta drawer brankas rakitan terintegrasi WhatsApp Master Builder.',
      technicalRequirements: 'Zero dependencies, single file standalone HTML, fully responsive smartphone hingga layar desktop besar.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-11-19',
    livePreviewAvailable: true,
    accentColor: '#08D9D6',
    colorPalette: [
      { hex: '#08D9D6', rgb: 'rgb(8, 217, 214)', name: 'Electric Cyan', role: 'Pendar Latar Belakang, Tombol Aksi Utama, Kurva Gaya & Legenda Keycap' },
      { hex: '#252A34', rgb: 'rgb(37, 42, 52)', name: 'Matte Carbon Noir', role: 'Sasis Anodized Gelap, Kanvas Pengujian Switch & Header Titel Blok' },
      { hex: '#FF2E63', rgb: 'rgb(255, 46, 99)', name: 'Neon Crimson', role: 'Titik Puncak Aktuasi Taktil, Badge Gasket Mount & Tombol Aksen' },
      { hex: '#EAEAEA', rgb: 'rgb(234, 234, 234)', name: 'Platinum Silver', role: 'Kanvas Latar Utama, Permukaan Bodi Sandblast & Divider Presisi' }
    ]
  },
  {
    id: 'tpl-35',
    slug: 'somna-sleep-sanctuary',
    title: 'SOMNA (Ergonomic Sleep Sanctuary & Circadian Chronobiology Lab)',
    tagline: 'Atelier ergonomi tidur, matras lateks organik 7-zona, simulator spektrum sirkadian 24-jam, dan kurasi akustik gelombang Delta',
    description: 'Template website atelier ergonomi tidur dan laboratorium kronobiologi sirkadian dengan palet warna dreamy periwinkle & lavender mist (#EEF1FF, #D2DAFF, #AAC4FF, #B1B2FF). Dilengkapi simulator spektrum cahaya sirkadian 24-jam (1.800K lilin hingga 6.500K siang terik) dengan proyeksi kurva melatonin, peta biomekanik keselarasan tulang belakang 3 postur tidur (Side, Back, Stomach) dengan pemilihan densitas lateks Dunlop (65D, 75D, 85D), generator soundscape gelombang otak Delta 2.5Hz dan desiran hujan glasial dengan Web Audio API visualizer, kalkulator gramatur bulu angsa & ketebalan bantal (loft) personal, katalog 4 perlengkapan tidur kriya organik, serta drawer konsultasi dan reservasi bilik tidur privat 90-menit terintegrasi WhatsApp.',
    category: 'sleep',
    tags: ['Sleep Sanctuary', 'Circadian Biology', 'Ergonomic Mattress', 'Latex Core', 'Soundscape Delta', 'Silk Bedding', 'Sensory Architecture', 'Sleep Pod', 'Biophilic Design'],
    technologies: ['HTML5', 'Vanilla CSS', 'Vanilla JS', '24h Circadian Spectrum Tuner', 'Spine Biomechanics Matrix', 'Web Audio Delta Synthesizer', 'Pillow Loft Calculator', 'Private Sleep Pod Booking'],
    thumbnailSvgType: 'agency',
    previewComponentKey: 'sleep-somna-sanctuary',
    htmlPath: '/templates/sleep/somna-sleep.html',
    htmlFolderPath: 'templates/sleep/somna-sleep.html',
    features: [
      'Struktur mandiri 1 file (HTML + CSS + JS) tanpa perlu build step, node_modules, atau framework pihak ketiga',
      'Simulator spektrum cahaya sirkadian 24-jam (1.800K - 5.500K) dengan proyeksi sekresi melatonin dan efek ambient dinamis',
      'Peta biomekanik keselarasan tulang belakang 3 postur (Side, Back, Stomach) dengan kalkulator tekanan mmHg 4 zona',
      'Pemilih densitas getah lateks monoblok Dunlop Hevea (Soft 65D, Medium 75D, Firm 85D)',
      'Generator soundscape relaksasi gelombang otak Delta 2.5Hz dan desiran hujan berbasis Web Audio API murni',
      'Kalkulator ketebalan bantal servikal (loft cm) dan gramatur bulu angsa berdasarkan lebar bahu dan kekerasan kasur',
      'Etalase 4 perlengkapan tidur kriya bersertifikat GOLS & OEKO-TEX dengan slide-over keranjang belanja',
      'Formulir reservasi bilik tidur privat hening 90-menit terintegrasi WhatsApp dengan konfirmasi instan',
      'Standar craft editorial antislop dengan palet periwinkle lavender (#B1B2FF, #AAC4FF, #D2DAFF, #EEF1FF) dan tipografi Cormorant Garamond'
    ],
    usageInstructions: [
      'Buka templates/sleep/somna-sleep.html di editor kode Anda.',
      'Sesuaikan data produk tidur, harga rupiah, dan opsi kustomisasi pada objek JavaScript di dalam tag <script>.',
      'Ganti nomor WhatsApp pemesanan dan reservasi dengan nomor resmi studio Anda.',
      'Buka file HTML langsung di browser desktop atau mobile untuk etalase sleep sanctuary langsung beroperasi.'
    ],
    sourceFiles: [
      {
        filename: 'somna-sleep.html',
        language: 'html',
        content: `<!-- SOMNA (ソムナ) — Ergonomic Sleep Sanctuary & Circadian Chronobiology Lab -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>SOMNA — Sleep Sanctuary & Chronobiology Lab</title>
  <style>
    :root {
      --somna-whisper: #EEF1FF;
      --somna-mist: #D2DAFF;
      --somna-sky: #AAC4FF;
      --somna-periwinkle: #B1B2FF;
      --somna-ink: #141624;
      --font-serif: "Cormorant Garamond", Georgia, serif;
      --font-sans: "Plus Jakarta Sans", sans-serif;
      --font-mono: "JetBrains Mono", monospace;
    }
  </style>
</head>
<body>
  <div class="top-ticker">STATUS: BILIK SIRKADIAN AKTIF • SUHU OPTIMAL: 19.8°C • KONTUR 7-ZONA DUNLOP HEVEA</div>
  <header>
    <div class="brand">SOMNA.</div>
    <nav>Simulator Sirkadian · Biomekanik Tulang · Soundscape Delta · Kalkulator Bantal · Koleksi Tidur · Reservasi Bilik</nav>
  </header>
  <!-- Full Interactive Sleep Sanctuary: 24h Circadian Chamber, Spine Matrix, WebAudio Delta Synth & Cart Drawer -->
</body>
</html>`,
        description: 'Single-file standalone HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt website atelier ergonomi tidur dan laboratorium kronobiologi sirkadian SOMNA dengan palet warna Deep Periwinkle REM (#B1B2FF), Luminous Cornflower Sky (#AAC4FF), Soft Lavender Mist (#D2DAFF), dan Whisper Cloud Porcelain (#EEF1FF). Dilengkapi simulator spektrum pencahayaan sirkadian 24-jam (1.800K lilin hingga 6.500K siang terik) dengan proyeksi kurva melatonin, peta biomekanik keselarasan tulang belakang 3 postur (Side, Back, Stomach) dengan pemilihan densitas lateks Dunlop (65D, 75D, 85D), generator soundscape akustik gelombang otak Delta 2.5Hz berbasis Web Audio API, kalkulator loft bantal dan gramatur bulu angsa personal, katalog 4 perlengkapan tidur kriya organik, serta drawer reservasi bilik tidur privat 90-menit terintegrasi WhatsApp.',
      designDirection: 'Sleep sanctuary & chronobiology atelier berstandar antislop: Deep Periwinkle REM (#B1B2FF), Luminous Cornflower Sky (#AAC4FF), Soft Lavender Mist (#D2DAFF), Whisper Cloud Porcelain (#EEF1FF), dan Abyssal Nightfall Slate Ink (#141624). Tipografi Cormorant Garamond, Plus Jakarta Sans, dan JetBrains Mono.',
      layoutAndGrid: 'Top telemetry bar bilik tidur sirkadian, sticky header dengan brand mark monogram S dan navigasi non-wrapping kokoh, hero asimetris 2 kolom dengan bilik simulator sirkadian dinamis 24 jam, panggung biomekanik tulang belakang kurva SVG vektor dengan telemetri tekanan mmHg 4 zona, laboratorium akustik gelombang Delta 2.5Hz Web Audio dengan kanvas visualizer live, kalkulator loft bantal personal, grid katalog 4 produk tidur 4 kolom, dan formulir reservasi bilik hening privat.',
      typographyAndColor: 'Cormorant Garamond untuk tajuk utama keanggunan ketenangan istirahat malam, Plus Jakarta Sans untuk teks bodi penjelasan sains sirkadian dan kontrol tombol interaktif, JetBrains Mono untuk suhu cahaya Kelvin, lux, tekanan mmHg, persentase melatonin, gramatur bantal, dan rincian harga rupiah.',
      interactions: 'Slider sirkadian 24-jam dengan pembaruan dinamis gradien warna bilik, suhu Kelvin, dan tingkat melatonin, pengubah postur tidur dengan kalkulasi tekanan tulang belakang live, pemutar soundscape Web Audio multi-kanal dengan visualizer gelombang suara, kalkulator ketebalan bantal servikal instan, serta drawer keranjang pemesanan terintegrasi WhatsApp.',
      technicalRequirements: 'Zero dependencies, single file standalone HTML, fully responsive smartphone hingga layar desktop besar.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-11-19',
    livePreviewAvailable: true,
    accentColor: '#B1B2FF',
    colorPalette: [
      { hex: '#B1B2FF', rgb: 'rgb(177, 178, 255)', name: 'Deep Periwinkle REM', role: 'Tombol Aksi Utama, Kurva Proyeksi Melatonin & Titik Tumpu Servikal' },
      { hex: '#AAC4FF', rgb: 'rgb(170, 196, 255)', name: 'Luminous Cornflower Sky', role: 'Spektrum Siang Sirkadian, Visualizer Gelombang Suara & Pill Status' },
      { hex: '#D2DAFF', rgb: 'rgb(210, 218, 255)', name: 'Soft Lavender Mist', role: 'Kartu Spesifikasi, Garis Pemisah Halus & Aksen Bilik Hening' },
      { hex: '#EEF1FF', rgb: 'rgb(238, 241, 255)', name: 'Whisper Cloud Porcelain', role: 'Kanvas Latar Belakang Utama, Tekstil Linen & Atmosfer Kamar Tidur' }
    ]
  },
  {
    id: 'tpl-36',
    slug: 'koru-mineral-limewash',
    title: 'KORU (Atelier Cat Limewash Mineral Alami & Plaster Dinding Bernapas)',
    tagline: 'Atelier kriya cat kapur tohor mineral alami, simulator sapuan kuas Canvas HTML5 dengan kalkulasi mikro-bayangan matahari, dan sistem dinding bernapas',
    description: 'Template website atelier cat limewash mineral alami dan plaster dinding bernapas dengan palet warna arsitektural bersahaja (#B7C4CF, #EEE3CB, #D7C0AE, #967E76). Dilengkapi simulator interaktif tekstur kuas kapur berbasis Canvas HTML5 dengan 4 teknik aplikasi (Cross-Hatch, Cloud Wash, Venetian Trowel, Dragged Brush) dan slider sudut sinar matahari (15° fajar hingga 90° zenit) yang menghitung mikro-bayangan kristal kapur tohor secara real-time, komparator fisika permeabilitas uap (Sd 0.02m vs cat lateks sintetis 0.85m, pH 12.5 antijamur alami, zero VOC, penyerapan CO2 0.45 kg/m²), penjelajah 3 ruangan interior (Wabi-Sabi Living, Sanctuary Bedroom, Minimalist Study) dengan pergantian pigmen mineral langsung, kalkulator kebutuhan ember cat 5-liter dan deduksi bukaan dinding otomatis, kurasi 4 produk cat kapur kriya alami & kuas bulu babi Roma, serta drawer keranjang belanja terintegrasi WhatsApp.',
    category: 'interior',
    tags: ['Mineral Limewash', 'Slaked Lime', 'Breathable Walls', 'Natural Plaster', 'Tactile Texture', 'Vapor Permeability', 'Wabi-Sabi Interior', 'Zero VOC', 'Sustainable Architecture'],
    technologies: ['HTML5 Canvas', 'Vanilla CSS', 'Vanilla JS', 'Sun Angle Shadow Engine', 'Vapor Physics Comparator', 'Room Scene Pigment Explorer', 'Wall Area Estimator', 'Direct WhatsApp Checkout'],
    thumbnailSvgType: 'agency',
    previewComponentKey: 'interior-koru-limewash',
    htmlPath: '/templates/interior/koru-limewash.html',
    htmlFolderPath: 'templates/interior/koru-limewash.html',
    features: [
      'Struktur mandiri 1 file (HTML + CSS + JS) tanpa perlu build step, node_modules, atau dependensi eksternal apa pun',
      'Simulator tekstur kuas kapur interaktif berbasis Canvas HTML5 dengan 4 teknik aplikasi: Cross-Hatch, Cloud Wash, Spatula Venesia, dan Garis Vertikal',
      'Slider sudut sinar matahari dinamis (15° fajar hingga 90° zenit) yang menghitung kalkulasi mikro-bayangan kristal kapur tohor secara langsung',
      'Komparator fisika dinding bernapas: Sd value 0.02m (vapor-open) vs lateks sintetis 0.85m, pH 12.5 alkalin antijamur alami, dan zero VOC 0.00 g/L',
      'Penjelajah 3 ruangan arsitektural (Ruang Tamu Wabi-Sabi, Kamar Tidur Sanctuary, Ruang Baca Minimalis) dengan penggantian pigmen mineral palet live',
      'Kalkulator kebutuhan ember cat 5-liter KORU dengan deduksi otomatis area pintu (1.8m²) dan jendela (1.2m²)',
      'Etalase 4 produk mineral alami teruji: Limewash 5L, Roman Marmorino 10kg, Mineral Silica Primer 2.5L, dan Kuas Bulu Babi Roma 6"',
      'Drawer keranjang belanja slide-over dengan kalkulasi total rupiah dan ekspor pemesanan langsung ke WhatsApp atelier',
      'Formulir pemesanan Swatch Box (4 lempeng gipsum 15x15cm asli) untuk pengujian warna langsung di bawah pencahayaan ruangan',
      'Standar craft editorial antislop dengan palet arsitektural (#B7C4CF, #EEE3CB, #D7C0AE, #967E76) dan tipografi Cormorant Garamond'
    ],
    usageInstructions: [
      'Buka templates/interior/koru-limewash.html di editor kode Anda.',
      'Sesuaikan data produk cat, harga rupiah, dan opsi pigmen pada objek JavaScript di dalam tag <script>.',
      'Ganti nomor WhatsApp pemesanan dan konsultasi dinding dengan nomor kontak resmi studio Anda.',
      'Buka file HTML langsung di browser desktop atau smartphone untuk etalase atelier cat limewash langsung beroperasi.'
    ],
    sourceFiles: [
      {
        filename: 'koru-limewash.html',
        language: 'html',
        content: `<!-- KORU — Atelier Cat Limewash Mineral Alami & Plaster Dinding Bernapas -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>KORU — Mineral Limewash & Breathable Plaster Atelier</title>
  <style>
    :root {
      --koru-alabaster: #EEE3CB;
      --koru-clay: #D7C0AE;
      --koru-fog: #B7C4CF;
      --koru-umber: #967E76;
      --koru-charcoal: #1D1917;
      --font-serif: "Cormorant Garamond", Georgia, serif;
      --font-sans: "Plus Jakarta Sans", sans-serif;
      --font-mono: "JetBrains Mono", monospace;
    }
  </style>
</head>
<body>
  <div class="top-ticker">STATUS: ATELIER LIMEWASH AKTIF • pH 12.5 ALKALIN ALAMI • PENYERAPAN CO2: 0.45 kg/m² • Sd 0.02m</div>
  <header>
    <div class="brand">KORU.</div>
    <nav>Simulator Tekstur · Fisika Dinding · Eksplorasi Ruang · Kalkulator Luas · Koleksi Mineral · Paket Sampel</nav>
  </header>
  <!-- Full Interactive Mineral Limewash: Canvas Texture Engine, Sun Angle Shadows, Room Explorer, Area Estimator & Cart Drawer -->
</body>
</html>`,
        description: 'Single-file standalone HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt website atelier cat limewash mineral alami dan plaster dinding bernapas KORU dengan palet warna Slate Fog Blue (#B7C4CF), Oat Alabaster (#EEE3CB), Muted Clay Biscuit (#D7C0AE), dan Roasted Umber Wood (#967E76). Dilengkapi simulator interaktif tekstur kuas kapur berbasis Canvas HTML5 dengan 4 teknik aplikasi (Cross-Hatch, Cloud Wash, Venetian Trowel, Dragged Brush) dan slider sudut sinar matahari (15° fajar hingga 90° zenit) yang menghitung mikro-bayangan kristal kapur tohor secara real-time, komparator fisika permeabilitas uap (Sd 0.02m vs cat lateks sintetis 0.85m, pH 12.5 antijamur alami, zero VOC, penyerapan CO2 0.45 kg/m²), penjelajah 3 ruangan interior (Wabi-Sabi Living, Sanctuary Bedroom, Minimalist Study) dengan pergantian pigmen mineral langsung, kalkulator kebutuhan ember cat 5-liter dan deduksi bukaan dinding otomatis, kurasi 4 produk cat kapur kriya alami & kuas bulu babi Roma, serta drawer keranjang belanja terintegrasi WhatsApp.',
      designDirection: 'Mineral limewash & breathable wall atelier berstandar antislop: Slate Fog Blue (#B7C4CF), Oat Alabaster (#EEE3CB), Muted Clay Biscuit (#D7C0AE), Roasted Umber Wood (#967E76), dan Deep Roasted Earth Charcoal (#1D1917). Tipografi Cormorant Garamond, Plus Jakarta Sans, dan JetBrains Mono.',
      layoutAndGrid: 'Top telemetry bar pemurnian kapur dan nilai Sd, sticky header dengan brand mark stempel kapur KORU dan navigasi non-wrapping kokoh, hero asimetris 2 kolom dengan panggung simulator tekstur kanvas HTML5 dinamis, panggung komparator fisika dinding bernapas 2 kolom, penjelajah 3 ruangan interior interaktif dengan live pigment switching, kalkulator luas dinding dan ember cat KORU dengan deduksi pintu/jendela, grid etalase 4 produk mineral, dan formulir pemesanan Swatch Box 4-warna.',
      typographyAndColor: 'Cormorant Garamond untuk tajuk kuratorial kehangatan materialitas arsitektural kapur padam, Plus Jakarta Sans untuk teks bodi penjelasan sains mineralogi dan kontrol teknis interaktif, JetBrains Mono untuk nilai Sd (m), derajat pH (12.5), gramatur penyerapan CO2, sudut sinar matahari (°), luas bidang dinding (m²), dan rincian harga rupiah.',
      interactions: 'Simulator tekstur kuas Canvas HTML5 dengan 4 teknik aplikasi dan slider sudut matahari real-time, komparator interaktif dua kolom sifat fisik dinding, penjelajah ruangan 3 scene dengan pergantian warna pigmen live, kalkulator jumlah ember cat dengan penyesuaian dimensi dan deduksi bukaan dinding otomatis, serta slide-over drawer keranjang belanja terintegrasi WhatsApp.',
      technicalRequirements: 'Zero dependencies, single file standalone HTML, procedural micro-crystal rendering Canvas HTML5, fully responsive smartphone hingga layar desktop besar.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-11-19',
    livePreviewAvailable: true,
    accentColor: '#967E76',
    colorPalette: [
      { hex: '#B7C4CF', rgb: 'rgb(183, 196, 207)', name: 'Slate Fog Blue', role: 'Pigmen Mineral Silikat Kabut, Aksen Border Tombol & Badge Kalkulator Sd' },
      { hex: '#EEE3CB', rgb: 'rgb(238, 227, 203)', name: 'Oat Alabaster', role: 'Kanvas Dinding Kapur Alami, Latar Belakang Utama & Kartu Sampel Plester' },
      { hex: '#D7C0AE', rgb: 'rgb(215, 192, 174)', name: 'Muted Clay Biscuit', role: 'Pigmen Tanah Lempung Terracotta, Border Kartu & Tab Filter Ruangan' },
      { hex: '#967E76', rgb: 'rgb(150, 126, 118)', name: 'Roasted Umber Wood', role: 'Pigmen Tanah Umber & Kayu, Tombol CTA Primer, Badge Elevasi & Header' }
    ]
  },
  {
    id: 'tpl-37',
    slug: 'havn-wooden-boatcraft',
    title: 'HAVN (Atelier Kriya Perahu Kayu Pesisir, Layar Kanvas Katun & Arsitektur Maritim Klasik)',
    tagline: 'Galangan perahu kayu kriya Skandinavia, simulator hidrodinamika gelombang garis air Canvas HTML5, dan kalkulator pengukusan iga ek',
    description: 'Template website atelier kriya perahu kayu pesisir dan arsitektur maritim klasik dengan palet warna fjord arktik (#6096B4, #93BFCF, #BDCDD6, #EEE9DA). Dilengkapi simulator hidrodinamika garis air dan gelombang laut berbasis Canvas HTML5 dengan slider kecepatan berlayar (1.0-8.5 knots) dan skala kekuatan angin Beaufort (1-6) yang menghitung Froude number serta hambatan gelombang secara real-time, kalkulator waktu pengukusan iga kapal (steam box 100°C) berdasarkan ketebalan bilah dan elastisitas lignin serat kayu, konfigurator lambung perahu kustom (HAVN 15 Skiff, HAVN 12 Dory, HAVN 19 Cutter) dengan live pigment switching dan diagram vektor SVG, soundscape desau ombak Web Audio API, etalase 4 perlengkapan maritim kriya teruji (perahu Larch, dayung Sitka Spruce ukir tangan, kit pine tar Swedia, tas waxed canvas), formulir reservasi sea trial 60-menit, serta drawer keranjang belanja terintegrasi WhatsApp.',
    category: 'maritime',
    tags: ['Wooden Boatcraft', 'Nordic Shipyard', 'Lapstrake Clinker', 'Naval Architecture', 'Hydrodynamics', 'Steam Bending', 'Sitka Spruce Oars', 'Stockholm Pine Tar', 'Zero Composite Plastic'],
    technologies: ['HTML5 Canvas', 'Vanilla CSS', 'Vanilla JS', 'Web Audio Ocean Synth', 'Wave Hydrodynamics Engine', 'Steam Box Timber Calculator', 'Vessel CAD Configurator', 'Direct WhatsApp Checkout'],
    thumbnailSvgType: 'agency',
    previewComponentKey: 'maritime-havn-boatcraft',
    htmlPath: '/templates/maritime/havn-boatcraft.html',
    htmlFolderPath: 'templates/maritime/havn-boatcraft.html',
    features: [
      'Struktur mandiri 1 file (HTML + CSS + JS) tanpa perlu build step, node_modules, atau dependensi eksternal apa pun',
      'Tangki uji hidrodinamika garis air berbasis Canvas HTML5 dengan fisika pitch & roll lambung perahu, slider kecepatan knots (1.0 - 8.5) dan skala angin Beaufort (1 - 6)',
      'Tiga mode inspeksi hidrodinamika: Profil Samping Garis Air, Body Plan Gading Lunas, dan Vektor Aliran Tekanan',
      'Kalkulator durasi pemanasan uap iga kapal (steam box 100°C) dengan 3 jenis kayu (Oak, Ash, Larch), kompensasi springback angle (°), dan deteksi keamanan retak serat',
      'Konfigurator lambung perahu kustom (HAVN 15 Skiff, HAVN 12 Dory, HAVN 19 Cutter) dengan live pigment switching (#6096B4, #4A3326, #EEE9DA, #14212D) dan spesifikasi CAD',
      'Generator suara desau ombak laut dingin berbasis Web Audio API murni (Pink Noise terfilter + LFO swell)',
      'Etalase 4 produk maritim kriya nyata: Perahu Skiff 15, Dayung Spruce Ukir Tangan 2.4m, Kit Pine Tar & Minyak Rami Swedia, dan Tas Geladak Waxed Sailcloth 50L',
      'Drawer keranjang belanja slide-over dengan kalkulasi total rupiah dan ekspor pemesanan langsung ke WhatsApp galangan',
      'Formulir pendaftaran uji coba berlayar (Sea Trial 60 Menit) di Dermaga Slipway No. 4 Pelabuhan Bergen',
      'Standar craft editorial antislop dengan palet maritim arktik (#6096B4, #93BFCF, #BDCDD6, #EEE9DA) dan tipografi Cormorant Garamond'
    ],
    usageInstructions: [
      'Buka templates/maritime/havn-boatcraft.html di editor kode Anda.',
      'Sesuaikan data perahu, spesifikasi dimensi, dan harga rupiah pada objek JavaScript di dalam tag <script>.',
      'Ganti nomor WhatsApp pemesanan dan reservasi slipway dengan nomor kontak resmi galangan Anda.',
      'Buka file HTML langsung di browser desktop atau smartphone untuk etalase galangan kapal langsung beroperasi.'
    ],
    sourceFiles: [
      {
        filename: 'havn-boatcraft.html',
        language: 'html',
        content: `<!-- HAVN (ハーヴン) — Nordic Wooden Boatcraft & Maritime Architecture -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>HAVN — Coastal Wooden Boatyard & Maritime Joinery</title>
  <style>
    :root {
      --havn-canvas: #EEE9DA;
      --havn-mist: #BDCDD6;
      --havn-spray: #93BFCF;
      --havn-fjord: #6096B4;
      --havn-abyss: #14212D;
      --font-serif: "Cormorant Garamond", Georgia, serif;
      --font-sans: "Plus Jakarta Sans", sans-serif;
      --font-mono: "JetBrains Mono", monospace;
    }
  </style>
</head>
<body>
  <div class="top-ticker">POSISI: 60°23′44″ N, 05°19′38″ E • ANGIN: 14 KNOTS (BEAUFORT 4) • SIBERIAN LARCH & TEMBAGA SOLID</div>
  <header>
    <div class="brand">HAVN.</div>
    <nav>Garis Air · Kukus Kayu · Konfigurator · Kriya Clinker · Etalase · Slipway</nav>
  </header>
  <!-- Full Interactive Wooden Boatyard: Wave Hydrodynamics Canvas, Steam Bending Engine, Vessel Builder & Cart Drawer -->
</body>
</html>`,
        description: 'Single-file standalone HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt website atelier kriya perahu kayu pesisir dan arsitektur maritim klasik HAVN dengan palet warna Fjord Slate Blue (#6096B4), Coastal Mist Cerulean (#93BFCF), Sea Salt Driftwood Stone (#BDCDD6), dan Bleached Maritime Canvas (#EEE9DA). Dilengkapi simulator hidrodinamika garis air dan gelombang laut berbasis Canvas HTML5 dengan slider kecepatan berlayar (1.0-8.5 knots) dan skala kekuatan angin Beaufort (1-6) yang menghitung Froude number serta hambatan gelombang secara real-time, kalkulator waktu pengukusan iga kapal (steam box 100°C) berdasarkan ketebalan bilah dan elastisitas lignin serat kayu, konfigurator lambung perahu kustom (HAVN 15 Skiff, HAVN 12 Dory, HAVN 19 Cutter) dengan live pigment switching dan diagram vektor SVG, soundscape desau ombak Web Audio API, etalase 4 perlengkapan maritim kriya teruji (perahu Larch, dayung Sitka Spruce ukir tangan, kit pine tar Swedia, tas waxed canvas), formulir reservasi sea trial 60-menit, serta drawer keranjang belanja terintegrasi WhatsApp.',
      designDirection: 'Nordic coastal boatyard & maritime joinery atelier berstandar antislop: Fjord Slate Blue (#6096B4), Coastal Mist Cerulean (#93BFCF), Sea Salt Driftwood Stone (#BDCDD6), Bleached Maritime Canvas (#EEE9DA), dan Deep Abyssal Navy-Charcoal (#14212D). Tipografi Cormorant Garamond, Plus Jakarta Sans, dan JetBrains Mono.',
      layoutAndGrid: 'Top telemetry bar koordinat lintang bujur dan pasang surut air, sticky header dengan brand mark segel jangkar H dan navigasi non-wrapping kokoh, hero asimetris 2 kolom dengan tangki uji hidrodinamika garis air Canvas HTML5 dinamis, panggung kalkulator pengukusan iga kayu ek 2 kolom, konfigurator perahu kustom dengan preview vektor SVG CAD live, grid 4 pilar kriya clinker joinery, etalase 4 perlengkapan maritim, dan formulir pendaftaran Sea Trial di dermaga slipway.',
      typographyAndColor: 'Cormorant Garamond untuk tajuk kuratorial keanggunan arsitektur kapal klasik, Plus Jakarta Sans untuk teks bodi penjelasan hidrodinamika fluida dan kriya kayu, JetBrains Mono untuk koordinat lintang/bujur, kecepatan knots, skala Beaufort, dimensi LWL/Beam/Draft, Froude number, dan rincian harga rupiah.',
      interactions: 'Tangki hidrodinamika Canvas HTML5 interaktif dengan respons pitch & roll lambung perahu terhadap kecepatan dan angin, kalkulator uap kayu interaktif dengan visualisasi status serat, konfigurator lambung perahu kustom dengan live pigment dan diagram vektor SVG, pemutar soundscape desau ombak Web Audio API, serta slide-over drawer keranjang belanja terintegrasi WhatsApp.',
      technicalRequirements: 'Zero dependencies, single file standalone HTML, procedural wave & hull motion rendering Canvas HTML5, fully responsive smartphone hingga layar desktop besar.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-11-19',
    livePreviewAvailable: true,
    accentColor: '#6096B4',
    colorPalette: [
      { hex: '#6096B4', rgb: 'rgb(96, 150, 180)', name: 'Fjord Slate Blue', role: 'Warna Primer Lambung Kapal, Tombol Aksi Utama, Border Tangki & Indikator' },
      { hex: '#93BFCF', rgb: 'rgb(147, 191, 207)', name: 'Coastal Mist Cerulean', role: 'Kabut Pesisir, Vektor Aliran Fluida, Gelombang Air & Badge Telemetri' },
      { hex: '#BDCDD6', rgb: 'rgb(189, 205, 214)', name: 'Sea Salt Driftwood Stone', role: 'Kayu Geladak Lapuk, Border Kartu Produk, Garis Pemisah & Slider Track' },
      { hex: '#EEE9DA', rgb: 'rgb(238, 233, 218)', name: 'Bleached Maritime Canvas', role: 'Kanvas Latar Belakang Utama, Meja Gambar Loftsman & Tekstil Layar Katun' }
    ]
  },
  {
    id: 'tpl-38',
    slug: 'aurelia-botanical-watercolor',
    title: 'AURELIA (Atelier Cat Air Madu Botani & Pigmen Mineral Semi-Mulia)',
    tagline: 'Atelier cat air madu botani, simulator dispersi basah-di-atas-basah Canvas HTML5, dan perakit palet saku kayu kenari 12-pan',
    description: 'Template website atelier cat air madu botani dan pigmen mineral semi-mulia dengan palet warna floral puitis (#FFB6B9, #FAE3D9, #BBDED6, #61C0BF). Dilengkapi simulator interaktif dispersi basah-di-atas-basah (wet-on-wet) berbasis Canvas HTML5 dengan efek capillary feathering, pilihan 4 pigmen batuan murni & kuas air, slider saturasi air (20-90%), dan efek reaksi kristal garam laut (blooming stars), kalkulator formulasi rasio madu liar pegunungan dan larutan gum arabic Kordofan, perakit palet saku kotak kayu kenari 12-half pan porselen magnetik interaktif, soundscape desau kuas Web Audio API, etalase 4 perlengkapan seni rupa kriya teruji (kotak kayu 12-pan, kuas bulu tupai Kolinsky, sketchbook katun 300gsm, muller kaca kristal), formulir pemesanan swatch dot card 12-warna, serta drawer keranjang belanja terintegrasi WhatsApp.',
    category: 'stationery',
    tags: ['Botanical Watercolor', 'Mineral Pigments', 'Gum Arabic', 'Wildflower Honey', 'Wet-on-Wet Dispersion', 'Porcelain Half-Pans', 'Cotton Rag Paper', 'Non-Toxic Art', 'Fine Art Atelier'],
    technologies: ['HTML5 Canvas', 'Vanilla CSS', 'Vanilla JS', 'Capillary Bleed Engine', 'Web Audio Brush Synth', 'Honey Binder Formulator', '12-Pan Palette Builder', 'Direct WhatsApp Checkout'],
    thumbnailSvgType: 'agency',
    previewComponentKey: 'stationery-aurelia-watercolor',
    htmlPath: '/templates/stationery/aurelia-watercolor.html',
    htmlFolderPath: 'templates/stationery/aurelia-watercolor.html',
    features: [
      'Struktur mandiri 1 file (HTML + CSS + JS) tanpa perlu build step, node_modules, atau dependensi eksternal apa pun',
      'Simulator dispersi cat air basah-di-atas-basah (wet-on-wet) berbasis Canvas HTML5 dengan gradasi pigmen kapiler dinamis (60 FPS)',
      'Fitur reaksi kristal garam laut instan (Tabur Garam) yang menciptakan efek kelopak bunga mekar bintang (blooming stars)',
      'Pemilih 4 pigmen batuan murni (Rose Madder, Chrysocolla, Celadon, French Ochre) dan kuas air bersih dengan slider saturasi air',
      'Kalkulator formulasi binder madu liar pegunungan dan gum arabic Kordofan yang menghitung indeks reaktivitas air dan elastisitas pan',
      'Perakit kotak kayu kenari magnetik 12-half pan porselen interaktif dengan pemilihan warna pigmen dan kode Colour Index',
      'Generator suara desau kuas dan tetesan air alami berbasis Web Audio API murni',
      'Etalase 4 produk seni rupa kriya nyata: Kotak Kayu 12-Pan, Kuas Kolinsky Jerman, Sketchbook Katun 300gsm A5, dan Muller Kaca Kristal 75mm',
      'Drawer keranjang belanja slide-over dengan kalkulasi total rupiah dan ekspor pemesanan langsung ke WhatsApp atelier',
      'Formulir pemesanan Swatch Dot Card 12-warna di atas kertas katun asli seharga Rp 45.000 dengan konfirmasi instan',
      'Standar craft editorial antislop dengan palet warna puitis (#FFB6B9, #FAE3D9, #BBDED6, #61C0BF) dan tipografi Cormorant Garamond'
    ],
    usageInstructions: [
      'Buka templates/stationery/aurelia-watercolor.html di editor kode Anda.',
      'Sesuaikan katalog pigmen, harga paket pan, dan rincian kuas pada objek JavaScript di dalam tag <script>.',
      'Ganti nomor WhatsApp pemesanan dan kustomisasi palet dengan nomor kontak resmi atelier Anda.',
      'Buka file HTML langsung di browser desktop atau smartphone untuk etalase atelier cat air langsung beroperasi.'
    ],
    sourceFiles: [
      {
        filename: 'aurelia-watercolor.html',
        language: 'html',
        content: `<!-- AURELIA (アウレリア) — Botanical Watercolors & Artisanal Mineral Pigments -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>AURELIA — Botanical Honey Watercolors & Semi-Precious Pigments</title>
  <style>
    :root {
      --aurelia-rose: #FFB6B9;
      --aurelia-bisque: #FAE3D9;
      --aurelia-celadon: #BBDED6;
      --aurelia-lagoon: #61C0BF;
      --aurelia-ink: #182528;
      --font-serif: "Cormorant Garamond", Georgia, serif;
      --font-sans: "Plus Jakarta Sans", sans-serif;
      --font-mono: "JetBrains Mono", monospace;
    }
  </style>
</head>
<body>
  <div class="top-ticker">STATUS: ATELIER PIGMEN AKTIF • RH: 58% • MADU HUTAN: 14% • ASTM I (100+ TAHUN)</div>
  <header>
    <div class="brand">AURELIA.</div>
    <nav>Kanvas Basah · Sains Madu · Racik 12-Pan · Kriya Mineral · Etalase · Swatch Card</nav>
  </header>
  <!-- Full Interactive Watercolor Atelier: Wet-on-Wet Canvas Engine, Honey Formulator, 12-Pan Box & Cart Drawer -->
</body>
</html>`,
        description: 'Single-file standalone HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt website atelier cat air madu botani dan pigmen mineral semi-mulia AURELIA dengan palet warna Rose Madder Botanical Lake (#FFB6B9), Cold-Pressed Cotton Rag 300gsm (#FAE3D9), Celadon Earth Mineral (#BBDED6), dan Chrysocolla Turquoise Verdigris (#61C0BF). Dilengkapi simulator interaktif dispersi basah-di-atas-basah (wet-on-wet) berbasis Canvas HTML5 dengan efek capillary feathering, pilihan 4 pigmen batuan murni & kuas air, slider saturasi air (20-90%), dan efek reaksi kristal garam laut (blooming stars), kalkulator formulasi rasio madu liar pegunungan dan larutan gum arabic Kordofan, perakit palet saku kotak kayu kenari 12-half pan porselen magnetik interaktif, soundscape desau kuas Web Audio API, etalase 4 perlengkapan seni rupa kriya teruji (kotak kayu 12-pan, kuas bulu tupai Kolinsky, sketchbook katun 300gsm, muller kaca kristal), formulir pemesanan swatch dot card 12-warna, serta drawer keranjang belanja terintegrasi WhatsApp.',
      designDirection: 'Botanical watercolor & fine-art pigment atelier berstandar antislop: Rose Madder Botanical Lake (#FFB6B9), Cold-Pressed Cotton Rag 300gsm (#FAE3D9), Celadon Earth Mineral (#BBDED6), Chrysocolla Turquoise Verdigris (#61C0BF), dan Deep Charcoal Prussian Blue Ink (#182528). Tipografi Cormorant Garamond, Plus Jakarta Sans, dan JetBrains Mono.',
      layoutAndGrid: 'Top telemetry bar kelembapan RH dan indeks madu, sticky header dengan brand mark segel porselen A dan navigasi non-wrapping kokoh, hero asimetris 2 kolom dengan kanvas simulator basah-di-atas-basah dinamis, panggung formulasi binder madu & gum arabic 2 kolom, perakit palet saku kotak kayu kenari magnetik 12-pan, grid 4 pilar kriya materialitas botani, etalase 4 perlengkapan seni rupa kriya, dan formulir pemesanan Swatch Dot Card 12-warna.',
      typographyAndColor: 'Cormorant Garamond untuk tajuk kuratorial keanggunan seni rupa klasik, Plus Jakarta Sans untuk teks bodi penjelasan sains binder madu dan granulasi mineral, JetBrains Mono untuk kode pigmen Colour Index (PR83, PG26, PY43), rating lightfastness ASTM, persentase madu humektan, gramatur kertas (300gsm), dan rincian harga rupiah.',
      interactions: 'Kanvas HTML5 interaktif dengan algoritma procedural capillary bleed dan efek kristalisasi garam laut, kalkulator formulasi binder interaktif dengan perhitungan indeks re-wettability live, perakit kotak kayu 12-half pan dengan penugasan pigmen dinamis, pemutar soundscape desau kuas Web Audio API, serta slide-over drawer keranjang belanja terintegrasi WhatsApp.',
      technicalRequirements: 'Zero dependencies, single file standalone HTML, procedural radial capillary bloom rendering Canvas HTML5, fully responsive smartphone hingga layar desktop besar.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-11-19',
    livePreviewAvailable: true,
    accentColor: '#FFB6B9',
    colorPalette: [
      { hex: '#FFB6B9', rgb: 'rgb(255, 182, 185)', name: 'Rose Madder Botanical Lake', role: 'Pigmen Mawar Botani, Tombol Tindakan Utama, Badge Bestseller & Titik Mekar' },
      { hex: '#FAE3D9', rgb: 'rgb(250, 227, 217)', name: 'Cold-Pressed Cotton Rag 300gsm', role: 'Kanvas Kertas Katun Dingin, Latar Belakang Utama & Kartu Produk Atelier' },
      { hex: '#BBDED6', rgb: 'rgb(187, 222, 214)', name: 'Celadon Earth Mineral', role: 'Pigmen Mineral Tanah Hijau, Garis Pemisah, Border Kartu & Slider Track' },
      { hex: '#61C0BF', rgb: 'rgb(97, 192, 191)', name: 'Chrysocolla Turquoise Verdigris', role: 'Pigmen Krisokola Tembaga, Tombol Aksi Sekunder, Monogram & Indikator' }
    ]
  },
  {
    id: 'tpl-39',
    slug: 'lignum-acoustic-lutherie',
    title: 'LIGNUM (Atelier Kriya Gitar Akustik Kayu Solid, Lab Tonewood & Resonansi Chladni)',
    tagline: 'Atelier kriya gitar akustik kayu solid, simulator pola getar resonansi Chladni Canvas HTML5, dan kalkulator kecepatan suara tonewood E/ρ',
    description: 'Template website atelier kriya gitar akustik kayu solid dan laboratorium akustik tonewood dengan palet warna kayu hangat (#FFEDDB, #EDCDBB, #E3B7A0, #BF9270). Dilengkapi simulator interaktif pola resonansi Chladni pada papan suara gitar berbasis Canvas HTML5 dengan slider frekuensi getar (82-440 Hz), 3 mode resonansi akustik (Monopole 98Hz, Dipole 185Hz, Tripole 280Hz) dan efek hamburan partikel pasir kuarsa nyata yang merespons ketukan tap-tone Web Audio API, kalkulator kecepatan rambat suara tonewood (c = √(E/ρ)) dan modulus Young dengan pilihan 4 kayu (Adirondack, Sitka, Cedar, Alpine), konfigurator siluet bodi gitar pre-war (OM-18, Parlor 12-Fret, Slope Dreadnought) dengan diagram vektor SVG live, etalase 4 instrumen dan perlengkapan lutherie teruji (gitar OM-18, bilah Adirondack master-grade, strap kulit samak nabati, minyak tonewood), formulir reservasi sesi audisi & voicing workshop 60-menit, serta drawer keranjang belanja terintegrasi WhatsApp.',
    category: 'lutherie',
    tags: ['Acoustic Guitar', 'Master Lutherie', 'Solid Tonewood', 'Adirondack Spruce', 'Chladni Resonance', 'Hide Glue', 'Scalloped X-Brace', 'French Polish', 'Pre-War Acoustic'],
    technologies: ['HTML5 Canvas', 'Vanilla CSS', 'Vanilla JS', 'Chladni Nodal Engine', 'Web Audio Tone Synth', 'Tonewood Modulus Calculator', 'Guitar CAD Configurator', 'Direct WhatsApp Checkout'],
    thumbnailSvgType: 'agency',
    previewComponentKey: 'lutherie-lignum-guitar',
    htmlPath: '/templates/lutherie/lignum-guitar.html',
    htmlFolderPath: 'templates/lutherie/lignum-guitar.html',
    features: [
      'Struktur mandiri 1 file (HTML + CSS + JS) tanpa perlu build step, node_modules, atau dependensi eksternal apa pun',
      'Simulator pola resonansi Chladni pada papan suara gitar berbasis Canvas HTML5 dengan hamburan partikel pasir kuarsa ke garis simpul nodal (60 FPS)',
      'Slider frekuensi getar papan (82 Hz nada Low E hingga 440 Hz nada A4 konser) dan tombol ketuk papan (Tap Tone) dengan Web Audio API',
      'Tiga mode getar akustik papan suara: Monopole (98Hz Main Top Breathing), Dipole (185Hz Cross-Mode), dan Tripole (280Hz Overtones)',
      'Kalkulator kecepatan suara kayu tonewood (c = √(E/ρ)) dan rasio kekakuan terhadap bobot untuk 4 spesies kayu (Adirondack, Sitka, Cedar, Alpine)',
      'Konfigurator bodi gitar akustik kustom (LIGNUM OM-18, Parlor 12-Fret, Slope Dreadnought) dengan diagram vektor SVG CAD dinamis',
      'Generator nada sinus murni Web Audio API untuk mendengar frekuensi tap-tone',
      'Etalase 4 instrumen dan aksesoris kriya nyata: Gitar OM-18, Bilah Papan Suara Adirondack, Strap Kulit Samak Nabati, dan Minyak Tonewood',
      'Drawer keranjang belanja slide-over dengan kalkulasi total rupiah dan ekspor pemesanan langsung ke WhatsApp studio',
      'Formulir pendaftaran sesi audisi instrumen & voicing workshop (60 Menit) di studio Dago Pakar Bandung',
      'Standar craft editorial antislop dengan palet warna kayu hangat (#FFEDDB, #EDCDBB, #E3B7A0, #BF9270) dan tipografi Cormorant Garamond'
    ],
    usageInstructions: [
      'Buka templates/lutherie/lignum-guitar.html di editor kode Anda.',
      'Sesuaikan data gitar, pilihan tonewood, dan harga rupiah pada objek JavaScript di dalam tag <script>.',
      'Ganti nomor WhatsApp pemesanan dan reservasi audisi dengan nomor kontak resmi lutherie Anda.',
      'Buka file HTML langsung di browser desktop atau smartphone untuk etalase atelier gitar langsung beroperasi.'
    ],
    sourceFiles: [
      {
        filename: 'lignum-guitar.html',
        language: 'html',
        content: `<!-- LIGNUM (リグナム) — Master Acoustic Lutherie & Tonewood Resonance Lab -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>LIGNUM — Solid Tonewood Guitars & Acoustic Resonance Lab</title>
  <style>
    :root {
      --lignum-ivory: #FFEDDB;
      --lignum-bone: #EDCDBB;
      --lignum-caramel: #E3B7A0;
      --lignum-cinnamon: #BF9270;
      --lignum-ebony: #1E1611;
      --font-serif: "Cormorant Garamond", Georgia, serif;
      --font-sans: "Plus Jakarta Sans", sans-serif;
      --font-mono: "JetBrains Mono", monospace;
    }
  </style>
</head>
<body>
  <div class="top-ticker">STATUS: MEJA KRIYA AKTIF • RH: 46% • TAP-TONE: 196 Hz (G3) • 100% HOT HIDE GLUE</div>
  <header>
    <div class="brand">LIGNUM.</div>
    <nav>Resonansi Chladni · Fisika Tonewood · Konfigurator Bodi · Kriya X-Bracing · Etalase · Konsultasi Voicing</nav>
  </header>
  <!-- Full Interactive Acoustic Lutherie: Chladni Resonance Canvas, Tonewood Modulus Calc, Guitar CAD & Cart Drawer -->
</body>
</html>`,
        description: 'Single-file standalone HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt website atelier kriya gitar akustik kayu solid dan laboratorium akustik tonewood LIGNUM dengan palet warna Warm Ivory Alabaster (#FFEDDB), Toasted Bone Nut (#EDCDBB), Aged Honduran Mahogany (#E3B7A0), dan Rich Cinnamon Amber Wood (#BF9270). Dilengkapi simulator interaktif pola resonansi Chladni pada papan suara gitar berbasis Canvas HTML5 dengan slider frekuensi getar (82-440 Hz), 3 mode resonansi akustik (Monopole 98Hz, Dipole 185Hz, Tripole 280Hz) dan efek hamburan partikel pasir kuarsa nyata yang merespons ketukan tap-tone Web Audio API, kalkulator kecepatan rambat suara tonewood (c = √(E/ρ)) dan modulus Young dengan pilihan 4 kayu (Adirondack, Sitka, Cedar, Alpine), konfigurator siluet bodi gitar pre-war (OM-18, Parlor 12-Fret, Slope Dreadnought) dengan diagram vektor SVG live, etalase 4 instrumen dan perlengkapan lutherie teruji (gitar OM-18, bilah Adirondack master-grade, strap kulit samak nabati, minyak tonewood), formulir reservasi sesi audisi & voicing workshop 60-menit, serta drawer keranjang belanja terintegrasi WhatsApp.',
      designDirection: 'Master acoustic guitar lutherie & tonewood resonance lab berstandar antislop: Warm Ivory Alabaster (#FFEDDB), Toasted Bone Nut (#EDCDBB), Aged Honduran Mahogany (#E3B7A0), Rich Cinnamon Amber Wood (#BF9270), dan Deep Roasted Tonewood Ebony Charcoal (#1E1611). Tipografi Cormorant Garamond, Plus Jakarta Sans, dan JetBrains Mono.',
      layoutAndGrid: 'Top telemetry bar kelembapan RH dan frekuensi tap-tone, sticky header dengan brand mark segel luthier L dan navigasi non-wrapping kokoh, hero asimetris 2 kolom dengan panggung simulator Chladni dinamis, panggung kalkulator modulus elastisitas tonewood 2 kolom, konfigurator bodi gitar akustik pre-war dengan diagram vektor SVG CAD live, grid 4 pilar kriya lutherie pre-war, etalase 4 instrumen dan aksesoris kriya, dan formulir reservasi sesi audisi workshop di Dago Pakar Bandung.',
      typographyAndColor: 'Cormorant Garamond untuk tajuk kuratorial keanggunan instrumen dawai klasik, Plus Jakarta Sans untuk teks bodi penjelasan sains akustik kayu dan panduan voicing, JetBrains Mono untuk frekuensi Hertz, kecepatan suara tonewood (5.420 m/s), modulus Young (GPa), ketebalan bilah (2.65 mm), panjang skala senar, dan rincian harga rupiah.',
      interactions: 'Simulator partikel Chladni Canvas HTML5 interaktif yang merespons frekuensi getar dan ketukan tap-tone, kalkulator kecepatan suara tonewood dengan penyesuaian kelembapan MC %, konfigurator bodi gitar dengan live SVG diagram dan spesifikasi CAD, pemutar nada sinus murni Web Audio API, serta slide-over drawer keranjang belanja terintegrasi WhatsApp.',
      technicalRequirements: 'Zero dependencies, single file standalone HTML, procedural Chladni nodal gradient force physics Canvas HTML5, fully responsive smartphone hingga layar desktop besar.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-11-19',
    livePreviewAvailable: true,
    accentColor: '#BF9270',
    colorPalette: [
      { hex: '#FFEDDB', rgb: 'rgb(255, 237, 219)', name: 'Warm Ivory Alabaster', role: 'Papan Suara Cemara Adirondack, Latar Belakang Meja Kerja & Kanvas Skematik' },
      { hex: '#EDCDBB', rgb: 'rgb(237, 205, 187)', name: 'Toasted Bone Nut', role: 'Ornamen Tulang Nut, Butiran Pasir Chladni, Tab Pilihan Bodi & Garis Pemisah' },
      { hex: '#E3B7A0', rgb: 'rgb(227, 183, 160)', name: 'Aged Honduran Mahogany', role: 'Kayu Bodi Mahoni Tua, Aksen Roset Lubang Suara & Badge Telemetri Aktif' },
      { hex: '#BF9270', rgb: 'rgb(191, 146, 112)', name: 'Rich Cinnamon Amber Wood', role: 'Kayu Kenari Jembatan Senar, Tombol Tindakan Utama CTA, Monogram & Header' }
    ]
  },
  {
    id: 'tpl-40',
    slug: 'aerovelo-titanium-bicycles',
    title: 'AEROVELO (Atelier Sepeda Balap Titanium Kustom & Lab Aerodinamika)',
    tagline: 'Sepeda balap titanium kustom Grade-9 3Al-2.5V, pengelasan TIG argon ganda, dan simulator hambatan angin terowongan angin',
    description: 'Template website atelier sepeda balap titanium kustom dan laboratorium aerodinamika AEROVELO dengan palet warna Deep Steel Slate Navy (#364F6B), Electric Aero Cyan (#3FC1C9), Pure Alabaster Snow (#F5F5F5), dan Electric Race Coral Pink (#FC5185). Dilengkapi simulator aerodinamika terowongan angin (Wind Tunnel Streamline CFD) berbasis Canvas HTML5 dengan kontrol kecepatan angin (30-65 km/h), sudut yaw (0°-15°), 3 postur pesepeda (Hoods, Drops, Aero Tuck), serta telemetri hambatan daya watt real-time (P = 0.5 * rho * v^3 * CdA), kalkulator biomekanika stack & reach dan tinggi sadel Lemond, konfigurator 3 platform sepeda titanium (Chrono-Ti Aero Disc, Strada All-Road, Criterium Sprint) dengan live frame finish selector dan diagram vektor CAD dinamis, generator deru angin Web Audio API, etalase 4 instrumen kriya titanium, drawer keranjang belanja terintegrasi WhatsApp, dan reservasi aero fit terowongan angin.',
    category: 'cycling',
    tags: ['Titanium Bicycles', 'Custom Road Bike', 'Wind Tunnel', 'Aerodynamics', 'CdA Simulator', 'Framebuilder', 'T47 BB', 'Grade-9 Ti', 'Biomechanics'],
    technologies: ['HTML5', 'Vanilla CSS', 'Vanilla JS', 'Canvas HTML5 Wind Tunnel Engine', 'Web Audio API Wind Synthesizer', 'CAD SVG Bike Configurator', 'Biomechanics Fit Engine', 'Slide-Over Cart Drawer', 'WhatsApp Concierge'],
    thumbnailSvgType: 'agency',
    previewComponentKey: 'cycling-aerovelo',
    htmlPath: '/templates/cycling/aerovelo-bicycles.html',
    htmlFolderPath: 'templates/cycling/aerovelo-bicycles.html',
    features: [
      'Struktur mandiri 1 file (HTML + CSS + JS) tanpa perlu build step, node_modules, atau framework pihak ketiga',
      'Simulator aerodinamika terowongan angin Canvas HTML5 interaktif dengan 45 partikel garis arus asap fluida dinamis, kontrol kecepatan angin (30-65 km/h) & sudut yaw (0°-15°)',
      'Perhitungan koefisien hambatan aerodinamika CdA dan kebutuhan daya watt (P_aero = 0.5 * rho * v^3 * CdA) untuk 3 postur pesepeda (Hoods 0.280 m², Drops 0.240 m², Aero Tuck 0.210 m²)',
      'Kalkulator biomekanika ukuran rangka (stack & reach, tinggi sadel rumus Lemond 0.883, panjang crank) berbasis tinggi badan & inseam kaki atlet',
      'Konfigurator sepeda titanium 3 platform (Chrono-Ti Aero Disc, Strada All-Road, Criterium Sprint) dengan live frame finish selector (Raw Ti, Aero Cyan, Stealth Slate, Coral Race) dan diagram vektor CAD dinamis',
      'Generator deru angin aerodinamika sintetis Web Audio API dengan kontrol audio hening/aktif',
      'Etalase 4 produk dan komponen kriya aeronautika nyata: Chrono-Ti Aero Disc, Strada All-Road, Titanium Aero Cockpit, dan Bottom Bracket T47 CeramicSpeed',
      'Drawer keranjang belanja slide-over dengan kalkulasi total rupiah dan ekspor pemesanan langsung ke WhatsApp studio',
      'Formulir reservasi konsultasi biomekanika & pengujian terowongan angin (90 Menit) di fasilitas Dago Pakar Bandung',
      'Standar craft editorial antislop dengan palet warna terowongan angin (#364F6B, #3FC1C9, #F5F5F5, #FC5185) dan tipografi Cormorant Garamond & JetBrains Mono'
    ],
    usageInstructions: [
      'Buka templates/cycling/aerovelo-bicycles.html di editor kode Anda.',
      'Sesuaikan data platform sepeda, komponen titanium, dan harga rupiah pada objek JavaScript di dalam tag <script>.',
      'Ganti nomor WhatsApp pemesanan dan reservasi terowongan angin dengan nomor kontak resmi atelier Anda.',
      'Buka file HTML langsung di browser desktop atau smartphone untuk etalase atelier sepeda langsung beroperasi.'
    ],
    sourceFiles: [
      {
        filename: 'aerovelo-bicycles.html',
        language: 'html',
        content: `<!-- AEROVELO — Atelier Sepeda Balap Titanium Kustom & Lab Aerodinamika -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>AEROVELO — Titanium Bicycles & Aerodynamics Wind Tunnel Lab</title>
  <style>
    :root {
      --aero-navy: #364F6B;
      --aero-cyan: #3FC1C9;
      --aero-snow: #F5F5F5;
      --aero-coral: #FC5185;
      --aero-charcoal: #1A2634;
      --font-serif: "Cormorant Garamond", Georgia, serif;
      --font-sans: "Plus Jakarta Sans", sans-serif;
      --font-mono: "JetBrains Mono", monospace;
    }
  </style>
</head>
<body>
  <div class="top-ticker">STATUS: TEROWONGAN ANGIN AKTIF • KECEPATAN: 45.0 KM/H • YAW: 7.5° • TITANIUM GRADE-9 3AL-2.5V</div>
  <header>
    <div class="brand">AEROVELO</div>
    <nav>Simulator Terowongan Angin · Kalkulator Biomekanika · Konfigurator Titanium · Rekayasa Kriya · Etalase Sepeda · Reservasi Aero Fit</nav>
  </header>
  <!-- Full Interactive Aerodynamics Wind Tunnel: Canvas Streamline Engine, Biomechanical Fit Calc, Titanium CAD & Cart Drawer -->
</body>
</html>`,
        description: 'Single-file standalone HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt website atelier sepeda balap titanium kustom dan laboratorium aerodinamika AEROVELO dengan palet warna Deep Steel Slate Navy (#364F6B), Electric Aero Cyan (#3FC1C9), Pure Alabaster Snow (#F5F5F5), dan Electric Race Coral Pink (#FC5185). Dilengkapi simulator aerodinamika terowongan angin (Wind Tunnel Streamline CFD) berbasis Canvas HTML5 dengan kontrol kecepatan angin (30-65 km/h), sudut yaw (0°-15°), 3 postur pesepeda (Hoods, Drops, Aero Tuck), serta telemetri hambatan daya watt real-time (P = 0.5 * rho * v^3 * CdA), kalkulator biomekanika stack & reach dan tinggi sadel Lemond, konfigurator 3 platform sepeda titanium (Chrono-Ti Aero Disc, Strada All-Road, Criterium Sprint) dengan live frame finish selector dan diagram vektor CAD dinamis, generator deru angin Web Audio API, etalase 4 instrumen kriya titanium (Chrono-Ti Aero Disc, Strada All-Road, Titanium Aero Cockpit, T47 BB CeramicSpeed), formulir reservasi aero fit terowongan angin 90-menit, serta drawer keranjang belanja terintegrasi WhatsApp.',
      designDirection: 'Master bicycle framebuilder & aerodynamics wind tunnel lab berstandar antislop: Deep Steel Slate Navy (#364F6B), Electric Aero Cyan (#3FC1C9), Pure Studio Alabaster Snow White (#F5F5F5), Electric Race Coral Pink (#FC5185), dan Deep Navy Charcoal (#1A2634). Tipografi Cormorant Garamond, Plus Jakarta Sans, dan JetBrains Mono.',
      layoutAndGrid: 'Top telemetry bar terowongan angin dengan kecepatan angin dan sudut yaw real-time, sticky header dengan brand mark sayap aerodinamika AV dan navigasi non-wrapping kokoh, hero asimetris 2 kolom dengan panggung simulator streamline terowongan angin dinamis, panggung kalkulator biomekanika stack & reach 2 kolom, konfigurator sepeda titanium 3 platform dengan diagram vektor CAD live, grid 4 pilar rekayasa kriya titanium, etalase 4 produk dan komponen aeronautika, dan formulir reservasi sesi konsultasi terowongan angin di Dago Pakar Bandung.',
      typographyAndColor: 'Cormorant Garamond untuk tajuk kuratorial keanggunan instrumen aeronautika, Plus Jakarta Sans untuk teks bodi penjelasan sains hambatan udara dan panduan fitting, JetBrains Mono untuk nilai koefisien CdA (m²), daya watt (W), kecepatan angin (km/h), sudut yaw (°), stack & reach (mm), tinggi sadel (cm), dan rincian harga rupiah.',
      interactions: 'Simulator garis arus asap fluida Canvas HTML5 interaktif yang merespons kecepatan angin, sudut yaw dan postur pengendara, kalkulator biomekanika ukuran rangka dengan kalkulasi stack/reach dan tinggi sadel instan, konfigurator frame sepeda dengan live SVG diagram dan pemilih finishing anodisasi warna, generator deru angin Web Audio API, serta slide-over drawer keranjang belanja terintegrasi WhatsApp.',
      technicalRequirements: 'Zero dependencies, single file standalone HTML, procedural wind tunnel smoke particle streamline physics Canvas HTML5, fully responsive smartphone hingga layar desktop besar.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-11-19',
    livePreviewAvailable: true,
    accentColor: '#3FC1C9',
    colorPalette: [
      { hex: '#364F6B', rgb: 'rgb(54, 79, 107)', name: 'Deep Steel Slate Navy', role: 'Baja Paduan Titanium Gelap, Header Kartu Spesifikasi, Tab Platform Sepeda & Aksen Teknikal' },
      { hex: '#3FC1C9', rgb: 'rgb(63, 193, 201)', name: 'Electric Aero Cyan', role: 'Garis Arus Asap Terowongan Angin, Badge Status Aktif, Slider Kontrol & Tombol Komisi' },
      { hex: '#F5F5F5', rgb: 'rgb(245, 245, 245)', name: 'Pure Studio Alabaster Snow White', role: 'Kanvas Utama Website, Kontainer Kartu Produk & Bidang Formulir' },
      { hex: '#FC5185', rgb: 'rgb(252, 81, 133)', name: 'Electric Race Coral Pink', role: 'Tombol Tindakan Utama CTA, Partikel Pusaran Hambatan, Badge Tercepat & Total Harga' }
    ]
  },
  {
    id: 'tpl-41',
    slug: 'forja-damascus-cutlery',
    title: 'FORJA (Atelier Pisau Tempa Damaskus & Kriya Bilah Jepang)',
    tagline: 'Pisau dapur tempa tangan 67 lapis damaskus, inti karbon Shirogami #1, dan lab asahan batu alami Kyoto',
    description: 'Template website atelier pisau tempa damaskus dan kriya bilah dapur Jepang FORJA dengan palet warna Deep Basalt Charcoal (#2C3639), Natural Slate Waterstone (#3F4E4F), Roasted Chestnut (#A27B5C), dan Raw Linen Ecru (#DCD7C9). Dilengkapi simulator aliran damaskus Suminagashi dan irisan cembung Hamaguri anti-stiction berbasis Canvas HTML5 dengan kalkulasi gaya potong (F_cut), sudut bevel (10°-22°), dan grit asahan (400-8000), mesin morphing diagram CAD vektor 4 siluet bilah klasik Jepang (Gyuto 210mm, Santoku 170mm, Nakiri 165mm, Petty 135mm), konfigurator gagang Wa-Handle segi delapan (Roasted Chestnut, Bog Oak, Spalted Birch, Smoked Walnut) dengan pahatan inisial nama kustom, kalkulator sudut asah dan urutan batu asahan alami Kyoto, generator audio desis batu asah Web Audio API, etalase 4 instrumen kriya master, drawer keranjang belanja terintegrasi WhatsApp, dan reservasi sesi tempa privat.',
    category: 'cutlery',
    tags: ['Damascus Knife', 'Japanese Cutlery', 'Shirogami', 'San-Mai', 'Hamaguri Grind', 'Wa-Handle', 'Whetstone Sharpening', 'Bladesmith', 'Artisanal Forging'],
    technologies: ['HTML5', 'Vanilla CSS', 'Vanilla JS', 'Canvas HTML5 Suminagashi Engine', 'Web Audio API Whetstone Synthesizer', 'CAD SVG Knife Morph Engine', 'Wa-Handle Customizer', 'Slide-Over Cart Drawer', 'WhatsApp Concierge'],
    thumbnailSvgType: 'agency',
    previewComponentKey: 'cutlery-forja',
    htmlPath: '/templates/cutlery/forja-damascus-cutlery.html',
    htmlFolderPath: 'templates/cutlery/forja-damascus-cutlery.html',
    features: [
      'Struktur mandiri 1 file (HTML + CSS + JS) tanpa perlu build step, node_modules, atau framework pihak ketiga',
      'Simulator aliran damaskus Suminagashi & penampang cembung Hamaguri Canvas HTML5 interaktif dengan 2 mode visual, kontrol sudut bevel (10°-22°) & grit batu asah (400-8000)',
      'Kalkulasi telemetri gaya potong (F_cut dalam Newton), retensi ketajaman apex mikroskopis, dan koefisien stiction pelepasan irisan sayur secara real-time',
      'Diagram vektor CAD SVG interaktif 4 geometri bilah klasik Jepang (Gyuto 210mm, Santoku 170mm, Nakiri 165mm, Petty 135mm) dengan titik keseimbangan pinch-grip choil',
      'Konfigurator gagang Wa-Handle segi delapan (4 kayu langka, 4 kerah ferrule, 4 finishing tempa) dengan pahatan inisial nama/kanji live render',
      'Kalkulator rekomendasi sudut asah dan tahapan batu asahan alami Kyoto (Arato #800, Aoto #2000, Nakayama Kiita #6000) berbasis jenis bahan makanan & talenan',
      'Generator efek audio desis asahan batu alami dan denting logam sintetis Web Audio API dengan kontrol hening/aktif',
      'Etalase 4 produk bilah master dan perlengkapan asah: Gyuto 210mm Kurouchi, Santoku 170mm Tsuchime, Nakiri 165mm Kasumi, dan Batu Asah Alami Kyoto Aoto #2000',
      'Drawer keranjang belanja slide-over dengan kalkulasi subtotal rupiah otomatis dan checkout pesanan terstruktur ke WhatsApp atelier',
      'Formulir pendaftaran konsultasi fitting genggaman tangan, restorasi bilah & workshop asah batu alami di Dago Pakar Bandung',
      'Standar craft editorial antislop dengan palet warna tempaan alami (#2C3639, #3F4E4F, #A27B5C, #DCD7C9) dan tipografi Cormorant Garamond & JetBrains Mono'
    ],
    usageInstructions: [
      'Buka templates/cutlery/forja-damascus-cutlery.html di editor kode Anda.',
      'Sesuaikan data siluet bilah, pilihan kayu gagang Wa-Handle, dan harga rupiah pada objek JavaScript di dalam tag <script>.',
      'Ganti nomor WhatsApp pemesanan dan reservasi atelier dengan nomor kontak resmi pandai besi Anda.',
      'Buka file HTML langsung di browser desktop atau smartphone untuk etalase atelier pisau langsung beroperasi.'
    ],
    sourceFiles: [
      {
        filename: 'forja-damascus-cutlery.html',
        language: 'html',
        content: `<!-- FORJA — Atelier Pisau Tempa Damaskus & Kriya Bilah Dapur Jepang -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>FORJA — Damascus & Carbon Cutlery Atelier</title>
  <style>
    :root {
      --forja-charcoal: #2C3639;
      --forja-slate: #3F4E4F;
      --forja-amber: #A27B5C;
      --forja-linen: #DCD7C9;
      --forja-dark: #181F21;
      --font-serif: "Cormorant Garamond", Georgia, serif;
      --font-sans: "Plus Jakarta Sans", sans-serif;
      --font-mono: "JetBrains Mono", monospace;
    }
  </style>
</head>
<body>
  <div class="top-ticker">STATUS: MEJA TEMPA AKTIF • SUHU TUNGKU: 810°C • KEKERASAN: 63.5 HRC • SHIROGAMI #1 (1.3% C)</div>
  <header>
    <div class="brand">FORJA</div>
    <nav>Suminagashi Canvas · Geometri Bilah · Gagang Wa-Handle · Kalkulator Asah · Etalase Master · Pesan Kustom</nav>
  </header>
  <!-- Full Interactive Cutlery Atelier: Suminagashi Canvas, Knife CAD Morph, Wa-Handle Config & Cart Drawer -->
</body>
</html>`,
        description: 'Single-file standalone HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt website atelier pisau tempa damaskus dan kriya bilah dapur Jepang FORJA dengan palet warna Deep Basalt Charcoal (#2C3639), Natural Slate Waterstone (#3F4E4F), Roasted Chestnut (#A27B5C), dan Raw Linen Ecru (#DCD7C9). Dilengkapi simulator aliran damaskus Suminagashi dan irisan cembung Hamaguri anti-stiction berbasis Canvas HTML5 dengan kontrol sudut bevel (10°-22°), grit batu asah (400-8000), dan telemetri gaya potong Newton real-time, mesin morphing diagram CAD vektor 4 siluet bilah klasik Jepang (Gyuto 210mm, Santoku 170mm, Nakiri 165mm, Petty 135mm), konfigurator gagang Wa-Handle segi delapan (Roasted Chestnut, Bog Oak, Spalted Birch, Smoked Walnut) dengan pahatan inisial nama kustom, kalkulator sudut asah dan urutan batu asahan alami Kyoto, generator audio desis batu asah Web Audio API, etalase 4 instrumen kriya master (Gyuto 210mm Kurouchi, Santoku 170mm Tsuchime, Nakiri 165mm Kasumi, Batu Asah Kyoto Aoto #2000), formulir reservasi sesi tempa privat 90-menit, serta drawer keranjang belanja terintegrasi WhatsApp.',
      designDirection: 'Master bladesmith & Japanese culinary cutlery atelier berstandar antislop: Deep Basalt Charcoal (#2C3639), Natural Slate Waterstone (#3F4E4F), Roasted Chestnut Wa-Handle (#A27B5C), Raw Linen Ecru (#DCD7C9), dan Deep Forge Carbon (#181F21). Tipografi Cormorant Garamond, Plus Jakarta Sans, dan JetBrains Mono.',
      layoutAndGrid: 'Top telemetry bar meja tempa dengan temperatur tungku 810°C dan kekerasan Rockwell HRC real-time, sticky header dengan brand mark segel palu tempa F dan navigasi non-wrapping kokoh, hero asimetris 2 kolom dengan panggung simulator Suminagashi & Hamaguri dinamis, panggung CAD vektor 4 siluet bilah klasik Jepang, konfigurator gagang Wa-Handle dengan live SVG rendering, kalkulator sudut asah dan batu asahan Kyoto, grid 4 pilar sains metalurgi tempa, etalase 4 instrumen bilah kriya teruji, dan formulir reservasi workshop di Dago Pakar Bandung.',
      typographyAndColor: 'Cormorant Garamond untuk tajuk kuratorial keanggunan bilah tempa klasik, Plus Jakarta Sans untuk teks bodi penjelasan metalurgi martensit dan panduan perawatan minyak Tsubaki, JetBrains Mono untuk kekerasan HRC, ketebalan apex (0.15 mm), sudut bevel (°), grit batu asah, bobot gram, dan rincian harga rupiah.',
      interactions: 'Simulator gelombang Suminagashi 67-lapis dan penampang cembung Hamaguri Canvas HTML5 interaktif, morphing diagram vektor CAD bilah dengan kalkulasi titik keseimbangan pinch-grip, konfigurator gagang Wa-Handle dengan pemilih kayu dan pahatan nama kustom, generator audio batu asahan Web Audio API, serta slide-over drawer keranjang belanja terintegrasi WhatsApp.',
      technicalRequirements: 'Zero dependencies, single file standalone HTML, procedural damascus wave physics Canvas HTML5, fully responsive smartphone hingga layar desktop besar.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-11-19',
    livePreviewAvailable: true,
    accentColor: '#A27B5C',
    colorPalette: [
      { hex: '#2C3639', rgb: 'rgb(44, 54, 57)', name: 'Deep Basalt Charcoal', role: 'Kerak Tempa Kurouchi Hitam, Panggung Instrumen Gelap, Bilah Karbon & Tombol Aksi' },
      { hex: '#3F4E4F', rgb: 'rgb(63, 78, 79)', name: 'Natural Slate Waterstone', role: 'Batu Asah Alami Slate Kyoto, Bingkai Kartu, Border Teknikal & Badge Status' },
      { hex: '#A27B5C', rgb: 'rgb(162, 123, 92)', name: 'Roasted Chestnut Wa-Handle', role: 'Gagang Kayu Kastanye Bakar, Aksen CTA Utama, Sabuk Stropping & Harga Investasi' },
      { hex: '#DCD7C9', rgb: 'rgb(220, 215, 201)', name: 'Raw Linen Ecru', role: 'Kain Pembungkus Linen, Lumpur Bubuk Asahan Alami, Kotak Kiribako & Teks Lembut' }
    ]
  },
  {
    id: 'tpl-42',
    slug: 'lumen-artisan-glasscraft',
    title: 'LUMEN (Atelier Kriya Kaca Tiup Borosilikat & Kristal Optik)',
    tagline: 'Kaca tiup borosilikat manual 1.180°C, kristal Neodymium dikroik, dan simulator refraksi prisma caustics',
    description: 'Template website atelier kriya kaca tiup borosilikat dan kristal optik LUMEN dengan palet warna Pale Glacial Aqua (#DEFCF9), Periwinkle Mist (#CADEFC), Neodymium Iris Lilac (#C3BEF0), dan Wisteria Amethyst (#CCA8E9). Dilengkapi simulator refraksi prisma optik dan dispersi kaustik spektral pelangi berbasis Canvas HTML5 dengan kontrol sudut datang sinar (15°-65°), ketebalan dinding kaca (2-12 mm), serta pergeseran warna dikroik Neodymium (Daylight 6500K vs Incandescent 2700K), konfigurator wadah kaca tiup kustom (Murano Decanter, Nordic Carafe, Prismatic Amphora, Glacial Goblet) dengan live SVG render dan grafir segel studio, kalkulator anil termal oven lehr (560°C - 510°C) berdasarkan ketebalan kaca, generator audio dengkringan kristal bernyanyi Web Audio API, etalase 4 karya kaca tiup master, drawer keranjang belanja terintegrasi WhatsApp, dan reservasi workshop tiup kaca privat.',
    category: 'glasscraft',
    tags: ['Glassblowing', 'Borosilicate Glass', 'Dichroic Glass', 'Neodymium Crystal', 'Hot Glass', 'Optic Ribbed', 'Lehr Annealing', 'Artisan Glassware', 'Prismatic Refraction'],
    technologies: ['HTML5', 'Vanilla CSS', 'Vanilla JS', 'Canvas HTML5 Prism Engine', 'Web Audio API Crystal Synthesizer', 'Bespoke Vessel SVG Configurator', 'Anneal Curve Calculator', 'Slide-Over Cart Drawer', 'WhatsApp Concierge'],
    thumbnailSvgType: 'agency',
    previewComponentKey: 'glasscraft-lumen',
    htmlPath: '/templates/glasscraft/lumen-glasscraft.html',
    htmlFolderPath: 'templates/glasscraft/lumen-glasscraft.html',
    features: [
      'Struktur mandiri 1 file (HTML + CSS + JS) tanpa perlu build step, node_modules, atau framework pihak ketiga',
      'Simulator refraksi prisma optik & dispersi kaustik spektral pelangi Canvas HTML5 interaktif dengan Hukum Snellius (n=1.524), kontrol sudut datang (15°-65°) & ketebalan kaca (2-12 mm)',
      'Simulasi fenomena bunglon dikroik Neodymium interaktif yang berubah dari Iris Lilac (#C3BEF0) di siang hari menjadi Wisteria Amethyst (#CCA8E9) di bawah lampu pijar',
      'Konfigurator wadah kaca tiup 4 siluet (Murano Decanter, Nordic Carafe, Amphora Vase, Goblet Pair) dengan 4 warna kaca, 4 tekstur optik, dan grafir segel studio live SVG',
      'Kalkulator termodinamika siklus pendinginan anil oven lehr untuk melepaskan tegangan kisi kristal internal berdasarkan ketebalan dinding kaca',
      'Generator efek audio dengkringan nada kristal bernyanyi murni (587.33 Hz / D5) Web Audio API dengan LFO vibrato lembut dan kontrol hening/aktif',
      'Etalase 4 karya kaca tiup master: Neodymium Carafe Set, Prismatic Botanical Glass Orb, Fluted Glacial Stemware, dan Wisteria Ribbed Amphora Vase',
      'Drawer keranjang belanja slide-over dengan penyesuaian kuantitas, kalkulasi subtotal otomatis, dan ekspor pesanan rapi ke WhatsApp studio',
      'Formulir pendaftaran sesi privat workshop tiup kaca hands-on (120 Menit) bersama master glassblower di Dago Pakar Bandung',
      'Standar craft editorial antislop dengan palet warna kristal pastel (#DEFCF9, #CADEFC, #C3BEF0, #CCA8E9) dan tipografi Cormorant Garamond & JetBrains Mono'
    ],
    usageInstructions: [
      'Buka templates/glasscraft/lumen-glasscraft.html di editor kode Anda.',
      'Sesuaikan data wadah kaca, tekstur optik, dan harga rupiah pada objek JavaScript di dalam tag <script>.',
      'Ganti nomor WhatsApp pemesanan dan reservasi workshop dengan nomor kontak resmi atelier kaca Anda.',
      'Buka file HTML langsung di browser desktop atau smartphone untuk etalase atelier kaca tiup langsung beroperasi.'
    ],
    sourceFiles: [
      {
        filename: 'lumen-glasscraft.html',
        language: 'html',
        content: `<!-- LUMEN — Atelier Kriya Kaca Tiup Borosilikat & Kristal Optik Neodymium -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>LUMEN — Borosilicate Glass & Dichroic Atelier</title>
  <style>
    :root {
      --lumen-aqua: #DEFCF9;
      --lumen-sky: #CADEFC;
      --lumen-lilac: #C3BEF0;
      --lumen-wisteria: #CCA8E9;
      --lumen-ink: #1F1A3A;
      --font-serif: "Cormorant Garamond", Georgia, serif;
      --font-sans: "Plus Jakarta Sans", sans-serif;
      --font-mono: "JetBrains Mono", monospace;
    }
  </style>
</head>
<body>
  <div class="top-ticker">STATUS: STUDIO KACA TIUP AKTIF • TUNGKU: 1.180°C • LEHR: 520°C • BOROSILIKAT 3.3 (COE 33)</div>
  <header>
    <div class="brand">LUMEN</div>
    <nav>Prisma Caustic · Konfigurator Kaca · Termal Lehr · Sains Neodymium · Koleksi Master · Workshop Tiup</nav>
  </header>
  <!-- Full Interactive Glasscraft Atelier: Prism Caustic Canvas, Vessel SVG Config, Lehr Calc & Cart Drawer -->
</body>
</html>`,
        description: 'Single-file standalone HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt website atelier kriya kaca tiup borosilikat dan kristal optik LUMEN dengan palet warna Pale Glacial Aqua (#DEFCF9), Periwinkle Mist (#CADEFC), Neodymium Iris Lilac (#C3BEF0), dan Wisteria Amethyst (#CCA8E9). Dilengkapi simulator refraksi prisma optik dan dispersi kaustik spektral pelangi berbasis Canvas HTML5 dengan Hukum Snellius (n=1.524), kontrol sudut datang sinar (15°-65°), ketebalan dinding kaca (2-12 mm), serta pergeseran warna dikroik Neodymium (Daylight 6500K vs Incandescent 2700K), konfigurator wadah kaca tiup kustom (Murano Decanter, Nordic Carafe, Prismatic Amphora, Glacial Goblet) dengan live SVG render dan grafir segel studio, kalkulator anil termal oven lehr (560°C - 510°C) berdasarkan ketebalan kaca, generator audio dengkringan kristal bernyanyi Web Audio API, etalase 4 karya kaca tiup master (Neodymium Carafe Set, Prismatic Botanical Orb, Fluted Glacial Stemware, Wisteria Ribbed Amphora), formulir reservasi workshop tiup kaca privat 120-menit, serta drawer keranjang belanja terintegrasi WhatsApp.',
      designDirection: 'Master glassblower & optical glasscraft atelier berstandar antislop: Pale Glacial Aqua (#DEFCF9), Periwinkle Mist Sky (#CADEFC), Neodymium Iris Lilac (#C3BEF0), Wisteria Amethyst Petal (#CCA8E9), dan Deep Midnight Nocturne Plum Ink (#1F1A3A). Tipografi Cormorant Garamond, Plus Jakarta Sans, dan JetBrains Mono.',
      layoutAndGrid: 'Top telemetry bar studio kaca dengan suhu tungku 1.180°C dan indeks refraksi n=1.524 real-time, sticky header dengan brand mark kristal prisma L dan navigasi non-wrapping kokoh, hero asimetris 2 kolom dengan panggung simulator prisma kaustik dinamis, konfigurator wadah kaca tiup 4 siluet dengan live SVG rendering, kalkulator siklus anil lehr 2 kolom, grid 4 pilar sains kaca borosilikat, etalase 4 karya kristal tiup master teruji, dan formulir reservasi workshop di Dago Pakar Bandung.',
      typographyAndColor: 'Cormorant Garamond untuk tajuk kuratorial keanggunan seni kaca tiup, Plus Jakarta Sans untuk teks bodi penjelasan termodinamika anil dan sifat serapan Neodymium 580nm, JetBrains Mono untuk indeks refraksi optik (n=1.524), koefisien ekspansi (COE 33), sudut datang (°), durasi jam lehr, mililiter volume, dan rincian harga rupiah.',
      interactions: 'Simulator berkas prisma dan dispersi pelangi spektral Canvas HTML5 interaktif dengan pengalih siang/malam, konfigurator wadah kaca tiup dengan live SVG visualizer dan grafir studio, kalkulator durasi anil lehr oven, synthesizer audio dengkringan kristal Web Audio API, serta slide-over drawer keranjang belanja terintegrasi WhatsApp.',
      technicalRequirements: 'Zero dependencies, single file standalone HTML, procedural optical Snell refraction raytracing physics Canvas HTML5, fully responsive smartphone hingga layar desktop besar.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-11-19',
    livePreviewAvailable: true,
    accentColor: '#CCA8E9',
    colorPalette: [
      { hex: '#DEFCF9', rgb: 'rgb(222, 252, 249)', name: 'Pale Glacial Aqua', role: 'Kaca Kristal Es Mint, Latar Refraksi, Highlight Kilau Prisma & Aksen Goblet' },
      { hex: '#CADEFC', rgb: 'rgb(202, 222, 252)', name: 'Periwinkle Mist Sky', role: 'Langit Fajar, Kaca Optik Bersirip, Border Kartu Spesifikasi & Garis Refraksi' },
      { hex: '#C3BEF0', rgb: 'rgb(195, 190, 240)', name: 'Neodymium Iris Lilac', role: 'Kaca Dikroik Neodymium Cahaya Siang 6500K, Tab Seleksi & Bingkai Wadah' },
      { hex: '#CCA8E9', rgb: 'rgb(204, 168, 233)', name: 'Wisteria Amethyst Petal', role: 'Kaca Dikroik Cahaya Malam 2700K, Tombol CTA Utama, Monogram & Harga' }
    ]
  },
  {
    id: 'tpl-43',
    slug: 'lumina-creative-photography',
    title: 'LUMINA (Studio Foto Potret, Pre-Wedding & Ruang Kreatif)',
    tagline: 'Studio foto profesional untuk potret personal, wisuda, keluarga, dan pre-wedding dengan pencahayaan alami & sunset',
    description: 'Template website studio fotografi kreatif LUMINA dengan palet warna Sunset Coral Rose (#F67280), Dusty Berry Plum (#C06C84), Twilight Slate Lavender (#6C5B7B), dan Deep Ocean Slate Navy (#355C7D). Dilengkapi simulator pencahayaan foto dan nuansa warna (Sunset Golden Hour, Studio Softbox, Pagi Alami, Malam Sinematik) berbasis Canvas HTML5 dengan kontrol exposure dan suhu warna Kelvin, kalkulator interaktif biaya paket foto dan tambahan cetak kanvas/album fisik, galeri portofolio dengan filter kategori instan (Pre-Wedding, Wisuda & Personal, Keluarga, Produk & Brand), synthesizer suara shutter kamera mekanik Web Audio API, serta sistem reservasi tanggal sesi pemotretan terintegrasi WhatsApp.',
    category: 'photography',
    tags: ['Photo Studio', 'Photography', 'Portrait', 'Pre-Wedding', 'Graduation', 'Family Photoshoot', 'Golden Hour', 'Pricing Calculator', 'Natural Light'],
    technologies: ['HTML5', 'Vanilla CSS', 'Vanilla JS', 'Canvas HTML5 Lighting Engine', 'Web Audio API Camera Shutter', 'Interactive Pricing Calculator', 'Portfolio Filter Engine', 'Slide-Over Cart Drawer', 'WhatsApp Concierge'],
    thumbnailSvgType: 'agency',
    previewComponentKey: 'photography-lumina',
    htmlPath: '/templates/photography/lumina-photo-studio.html',
    htmlFolderPath: 'templates/photography/lumina-photo-studio.html',
    features: [
      'Struktur mandiri 1 file (HTML + CSS + JS) tanpa perlu build step, node_modules, atau framework pihak ketiga',
      'Simulator pencahayaan & nuansa foto Canvas HTML5 interaktif dengan 4 preset suasana (Sunset Golden Hour, Studio Softbox, Pagi Alami, Malam Sinematik), slider exposure & white balance Kelvin',
      'Kalkulator biaya paket foto interaktif dengan pemilihan 4 jenis sesi (Wisuda/Personal, Keluarga, Pre-Wedding, Acara) dan checklist tambahan cetak kanvas/album/MUA',
      'Galeri portofolio interaktif dengan filter kategori instan (Semua, Pre-Wedding, Wisuda, Keluarga, Produk)',
      'Synthesizer suara shutter kamera mekanik Web Audio API yang realistis dengan sakelar kontrol audio aktif/bisu',
      'Informasi 4 fasilitas kenyamanan studio (Ruang rias berlampu daylight, lounge kopi gratis, jendela cahaya alami 5 meter, transfer file asli di tempat)',
      'Drawer keranjang pilihan sesi slide-over dengan kalkulasi subtotal otomatis dan format checkout WhatsApp rapi',
      'Formulir pendaftaran tanggal dan waktu sesi foto yang terhubung langsung ke WhatsApp studio',
      'Bahasa Indonesia yang bersahabat, jelas, dan mudah dipahami publik tanpa istilah asing yang membingungkan',
      'Standar craft editorial antislop dengan palet warna senja (#F67280, #C06C84, #6C5B7B, #355C7D) dan tipografi Playfair Display & Plus Jakarta Sans'
    ],
    usageInstructions: [
      'Buka templates/photography/lumina-photo-studio.html di editor kode Anda.',
      'Sesuaikan daftar paket foto, harga, dan portofolio pada objek JavaScript di dalam tag <script>.',
      'Ganti nomor WhatsApp pemesanan dan reservasi dengan nomor kontak resmi studio Anda.',
      'Buka file HTML langsung di browser desktop atau smartphone untuk website studio foto langsung beroperasi.'
    ],
    sourceFiles: [
      {
        filename: 'lumina-photo-studio.html',
        language: 'html',
        content: `<!-- LUMINA — Studio Fotografi Potret, Pre-Wedding & Ruang Kreatif -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>LUMINA — Creative Photo Studio</title>
  <style>
    :root {
      --lumina-coral: #F67280;
      --lumina-berry: #C06C84;
      --lumina-twilight: #6C5B7B;
      --lumina-ocean: #355C7D;
      --font-display: 'Playfair Display', Georgia, serif;
      --font-sans: 'Plus Jakarta Sans', sans-serif;
    }
  </style>
</head>
<body>
  <div class="top-status">STUDIO FOTO BANDUNG • JADWAL SESI SORE GOLDEN HOUR TERSEDIA • KAMERA FULL-FRAME</div>
  <header>
    <div class="brand">LUMINA</div>
    <nav>Simulasi Cahaya · Paket & Biaya · Portofolio · Fasilitas Studio · Jadwal & Booking</nav>
  </header>
  <!-- Full Interactive Photography Studio: Lighting Canvas, Pricing Calculator, Portfolio & Cart Drawer -->
</body>
</html>`,
        description: 'Single-file standalone HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt website studio fotografi kreatif LUMINA dengan palet warna Sunset Coral Rose (#F67280), Dusty Berry Plum (#C06C84), Twilight Slate Lavender (#6C5B7B), dan Deep Ocean Slate Navy (#355C7D). Dilengkapi simulator pencahayaan foto dan nuansa warna (Sunset Golden Hour, Studio Softbox, Pagi Alami, Malam Sinematik) berbasis Canvas HTML5 dengan kontrol exposure dan suhu warna Kelvin, kalkulator interaktif biaya paket foto dan tambahan cetak kanvas/album fisik, galeri portofolio dengan filter kategori instan (Pre-Wedding, Wisuda & Personal, Keluarga, Produk & Brand), synthesizer suara shutter kamera mekanik Web Audio API, serta sistem reservasi tanggal sesi pemotretan terintegrasi WhatsApp.',
      designDirection: 'Creative photography studio & portrait atelier berstandar antislop: Sunset Coral Rose (#F67280), Dusty Berry Plum (#C06C84), Twilight Slate Lavender (#6C5B7B), Deep Ocean Slate Navy (#355C7D), Warm Studio Porcelain (#FFFDFC), dan Deep Navy Charcoal (#1B263B). Tipografi Playfair Display, Plus Jakarta Sans, dan JetBrains Mono.',
      layoutAndGrid: 'Top status bar studio foto dengan status buka dan slot golden hour sore real-time, sticky header dengan brand mark L dan navigasi bersahabat, hero asimetris 2 kolom dengan panggung simulator pencahayaan foto dinamis, kalkulator paket foto interaktif 2 kolom, galeri portofolio dengan filter instan, grid 4 fasilitas studio, dan formulir booking sesi di Dago Pakar Bandung.',
      typographyAndColor: 'Playfair Display untuk tajuk utama kehangatan momen emosional, Plus Jakarta Sans untuk teks bodi penjelasan paket yang jelas dan ramah publik, JetBrains Mono untuk nilai Kelvin (3.600K), exposure EV (+0.3), durasi sesi, dan rincian harga rupiah.',
      interactions: 'Simulator pencahayaan foto Canvas HTML5 dengan visualisasi siluet potret yang merespons nuansa warna dan slider exposure/kelvin, kalkulator paket foto interaktif dengan kalkulasi instan, filter portofolio instan, synthesizer audio shutter kamera Web Audio API, serta slide-over drawer pemesanan terintegrasi WhatsApp.',
      technicalRequirements: 'Zero dependencies, single file standalone HTML, procedural lighting and shadow rendering Canvas HTML5, fully responsive smartphone hingga layar desktop besar.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-11-19',
    livePreviewAvailable: true,
    accentColor: '#F67280',
    colorPalette: [
      { hex: '#F67280', rgb: 'rgb(246, 114, 128)', name: 'Sunset Coral Rose', role: 'Aksen Utama Hangat, Tombol Tindakan CTA, Slider Pencahayaan & Highlight Harga' },
      { hex: '#C06C84', rgb: 'rgb(192, 108, 132)', name: 'Dusty Berry Plum', role: 'Label Kategori Portofolio, Teks Sekunder Elegan & Garis Batas Kartu' },
      { hex: '#6C5B7B', rgb: 'rgb(108, 91, 123)', name: 'Twilight Slate Lavender', role: 'Sub-Heading Lembut, Ikon Fasilitas Studio & Pemisah Konten' },
      { hex: '#355C7D', rgb: 'rgb(53, 92, 125)', name: 'Deep Ocean Slate Navy', role: 'Bilah Status Atas, Kartu Ringkasan Biaya, Header & Footer Kontras Tinggi' }
    ]
  },
  {
    id: 'tpl-44',
    slug: 'kinetic-fitness-gym',
    title: 'KINETIC (Pusat Kebugaran & Gym Modern 24 Jam)',
    tagline: 'Pusat kebugaran modern 24 jam dengan simulator denyut jantung Canvas HTML5, kalkulator BMI & kalori, jadwal kelas, dan pass uji coba gratis',
    description: 'Template website gym dan pusat kebugaran modern KINETIC dengan palet warna Jet Charcoal Black (#212121), Graphite Anthracite (#323232), Deep Petrol Teal (#0D7377), dan Electric Cyber Cyan (#14FFEC). Dilengkapi simulator denyut jantung & pemantauan zona kardio dinamis (ECG Pulse Wave) berbasis Canvas HTML5 dengan pengatur usia dan intensitas latihan, kalkulator interaktif indeks massa tubuh (BMI) dan kebutuhan kalori & protein harian (TDEE), jadwal kelas mingguan lengkap dengan filter hari instan (HIIT, Body Pump, Pilates & Yoga, Muay Thai & Tinju, Indoor Cycling, Bootcamp), komparasi paket membership transparan tanpa biaya tersembunyi, formulir pendaftaran uji coba gratis 1 hari (Free 1-Day Trial Pass), slide-over keranjang membership, serta synthesizer suara detak jantung Web Audio API.',
    category: 'fitness',
    tags: ['Gym', 'Fitness', 'Cardio', 'Heart Rate Simulator', 'BMI Calculator', 'Workout Schedule', 'Membership', 'Free Trial', '24 Hours'],
    technologies: ['HTML5', 'Vanilla CSS', 'Vanilla JS', 'Canvas HTML5 ECG Engine', 'Web Audio API Heartbeat Synthesizer', 'Interactive BMI & Calorie Calculator', 'Class Schedule Filter', 'Slide-Over Cart Drawer', 'WhatsApp Concierge'],
    thumbnailSvgType: 'agency',
    previewComponentKey: 'fitness-kinetic',
    htmlPath: '/templates/fitness/kinetic-fitness-gym.html',
    htmlFolderPath: 'templates/fitness/kinetic-fitness-gym.html',
    features: [
      'Struktur mandiri 1 file (HTML + CSS + JS) tanpa perlu build step, node_modules, atau pustaka eksternal',
      'Simulator denyut jantung & zona kardio Canvas HTML5 interaktif dengan gelombang elektrokardiogram (ECG) neon, slider usia (15-75) & intensitas (50-95%), serta kalkulasi otomatis target BPM dan kkal/jam',
      'Kalkulator BMI & kalori harian interaktif menghitung skor BMI, kategori berat badan, estimasi kalori harian (TDEE), dan target protein harian',
      'Jadwal kelas mingguan lengkap dengan filter hari instan (Semua, Senin, Selasa, Rabu, Kamis, Jumat, Sabtu) untuk 6 jenis kelas latihan unggulan',
      'Transparansi paket membership gym (1 Bulan, 3 Bulan, 12 Bulan VIP, dan 10 Sesi Personal Trainer) tanpa biaya pendaftaran tersembunyi',
      'Pendaftaran uji coba gratis 1 hari (Free 1-Day Trial Pass) dengan integrasi kode voucher instan ke WhatsApp',
      'Drawer slide-over keranjang membership dengan penyesuaian kuantitas dan format pemesanan WhatsApp otomatis',
      'Synthesizer suara detak jantung Web Audio API prosedural dengan tombol sakelar suara aktif/bisu',
      'Bahasa Indonesia yang lugas, memotivasi, dan ramah publik tanpa istilah binaraga gelap yang membingungkan',
      'Standar craft editorial antislop dengan palet warna atletik modern (#212121, #323232, #0D7377, #14FFEC) dan rasio kontras WCAG AAA di atas 14:1'
    ],
    usageInstructions: [
      'Buka templates/fitness/kinetic-fitness-gym.html di editor kode Anda.',
      'Sesuaikan harga paket membership, jadwal kelas, dan nama pelatih pada script JavaScript.',
      'Ganti nomor WhatsApp pemesanan dengan nomor kontak customer service gym Anda.',
      'Buka file HTML langsung di browser desktop atau smartphone untuk website gym langsung aktif.'
    ],
    sourceFiles: [
      {
        filename: 'kinetic-fitness-gym.html',
        language: 'html',
        content: `<!-- KINETIC FITNESS â€” Pusat Kebugaran & Gym Modern 24 Jam -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>KINETIC FITNESS â€” Gym Modern 24 Jam</title>
  <style>
    :root {
      --gym-black: #212121;
      --gym-graphite: #323232;
      --gym-teal: #0D7377;
      --gym-cyan: #14FFEC;
      --font-display: 'Plus Jakarta Sans', sans-serif;
    }
  </style>
</head>
<body>
  <div class="top-status">GYM BUKA 24 JAM NONSTOP â€¢ KAPASITAS NYAMAN 38% â€¢ PELATIH STANDBY</div>
  <header>
    <div class="brand">KINETIC FITNESS</div>
    <nav>Zona Kardio Â· Kalkulator BMI Â· Jadwal Kelas Â· Fasilitas Â· Paket Membership Â· Uji Coba Gratis</nav>
  </header>
  <!-- Full Interactive Gym: Heart Rate Canvas, BMI Calculator, Class Schedule & Cart Drawer -->
</body>
</html>`,
        description: 'Single-file standalone HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt website gym dan pusat kebugaran modern KINETIC dengan palet warna Jet Charcoal Black (#212121), Graphite Anthracite (#323232), Deep Petrol Teal (#0D7377), dan Electric Cyber Cyan (#14FFEC). Dilengkapi simulator denyut jantung & pemantauan zona kardio dinamis (ECG Pulse Wave) berbasis Canvas HTML5 dengan pengatur usia dan intensitas latihan, kalkulator interaktif indeks massa tubuh (BMI) dan kebutuhan kalori & protein harian (TDEE), jadwal kelas mingguan lengkap dengan filter hari instan (HIIT, Body Pump, Pilates & Yoga, Muay Thai & Tinju, Indoor Cycling, Bootcamp), komparasi paket membership transparan tanpa biaya tersembunyi, formulir pendaftaran uji coba gratis 1 hari (Free 1-Day Trial Pass), slide-over keranjang membership, serta synthesizer suara detak jantung Web Audio API.',
      designDirection: 'Modern athletics & commercial fitness center berstandar antislop: Jet Charcoal Black (#212121), Graphite Anthracite (#323232), Deep Petrol Teal (#0D7377), Electric Cyber Cyan (#14FFEC), Crisp White (#FFFFFF), dan Muted Steel Gray (#B0BEC5). Tipografi Plus Jakarta Sans dan JetBrains Mono.',
      layoutAndGrid: 'Top status bar gym dengan telemetri live kapasitas dan jam 24/7 real-time, sticky header dengan brand mark KINETIC dan navigasi ramah publik, hero dinamis dengan statistik keunggulan fasilitas, simulator denyut jantung ECG neon & kalkulator BMI/kalori berdampingan responsif, jadwal kelas mingguan dengan filter tab hari cepat, grid 4 fasilitas gym, komparasi 4 paket membership, formulir uji coba gratis 1 hari, dan slide-over cart drawer.',
      typographyAndColor: 'Plus Jakarta Sans (bobot 400-900) untuk tampilan modern, atletik, dan mudah dibaca, JetBrains Mono untuk metrik detak jantung BPM, skor BMI, kkal/hari, durasi sesi, dan tarif membership rupiah.',
      interactions: 'Simulator detak jantung Canvas HTML5 dengan visualisasi gelombang ECG dinamis yang merespons slider usia dan intensitas latihan, kalkulator BMI & kalori instan, filter jadwal kelas mingguan, synthesizer audio detak jantung Web Audio API, serta slide-over drawer membership terintegrasi WhatsApp.',
      technicalRequirements: 'Zero dependencies, single file standalone HTML, procedural ECG pulse rendering Canvas HTML5, fully responsive smartphone hingga layar desktop besar.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-11-19',
    livePreviewAvailable: true,
    accentColor: '#14FFEC',
    colorPalette: [
      { hex: '#212121', rgb: 'rgb(33, 33, 33)', name: 'Jet Charcoal Black', role: 'Latar Belakang Utama Gym Modern, Fokus & Minim Distraksi Mata' },
      { hex: '#323232', rgb: 'rgb(50, 50, 50)', name: 'Graphite Anthracite', role: 'Permukaan Kartu Fasilitas, Panel Kalkulator & Kontainer Jadwal Kelas' },
      { hex: '#0D7377', rgb: 'rgb(13, 115, 119)', name: 'Deep Petrol Teal', role: 'Aksen Kedalaman, Header Tabel, Tombol Sekunder & Border Kartu Unggulan' },
      { hex: '#14FFEC', rgb: 'rgb(20, 255, 236)', name: 'Electric Cyber Cyan', role: 'Garis Gelombang ECG Neon, Tombol Aksi Utama CTA & Status Gym 24 Jam' }
    ]
  },
  {
    id: 'tpl-45',
    slug: 'redline-motoworks',
    title: 'REDLINE (Bengkel Modifikasi Motor, Servis Rutin & Detailing Kilap)',
    tagline: 'Bengkel motor modern spesialis servis rutin, tune up injeksi, uji dyno test, dan detailing bodi dengan garansi 30 hari',
    description: 'Template website bengkel modifikasi dan servis performa motor REDLINE MOTOWORKS dengan palet warna Obsidian Pitch Black (#000000), Dark Maroon Charcoal (#3D0000), Crimson Blood Red (#950101), dan Electric Racing Scarlet Red (#FF0000). Dilengkapi simulator putaran mesin (RPM) & dyno test interaktif berbasis Canvas HTML5 dengan penggeser gas throttle, lampu shift light redline, dan pembacaan tenaga kuda (HP) & torsi (Nm), kalkulator interaktif estimasi biaya servis & perawatan motor dengan pengali kategori kendaraan dan estimasi durasi waktu, 4 paket servis transparan tanpa biaya tersembunyi, galeri hasil pengerjaan sebelum & sesudah (Before & After), formulir reservasi kedatangan bebas antre, slide-over keranjang pesanan, serta synthesizer suara deru mesin knalpot balap Web Audio API.',
    category: 'automotive',
    tags: ['Automotive', 'Motorcycle Garage', 'Dyno Simulator', 'Tachometer', 'Speed Shop', 'Pricing Calculator', 'Bike Detailing', 'Tune Up', 'Service Booking'],
    technologies: ['HTML5', 'Vanilla CSS', 'Vanilla JS', 'Canvas HTML5 Tachometer Engine', 'Web Audio API Engine Rev Synthesizer', 'Interactive Service Cost Calculator', 'Portfolio Filter Engine', 'Slide-Over Cart Drawer', 'WhatsApp Concierge'],
    thumbnailSvgType: 'agency',
    previewComponentKey: 'automotive-redline',
    htmlPath: '/templates/automotive/redline-motoworks.html',
    htmlFolderPath: 'templates/automotive/redline-motoworks.html',
    features: [
      'Struktur mandiri 1 file (HTML + CSS + JS) tanpa perlu build step, node_modules, atau framework pihak ketiga',
      'Simulator putaran mesin (RPM) & uji dyno Canvas HTML5 interaktif dengan jarum analog mulus, lampu peringatan Redline berkedip, pengatur gas bukaan throttle (0-100%), dan pembacaan HP serta Torsi Nm',
      'Kalkulator estimasi biaya servis interaktif dengan 4 kategori motor (Matic, Maxi Matic, Bebek, Sport) dan checklist jenis perawatan transparan dengan kalkulasi waktu pengerjaan otomatis',
      'Transparansi 4 paket servis unggulan (Servis Ringan Rutin, Servis CVT Bebas Gredek, Tune Up Performa & Dyno, Detailing Kilap Full Ceramic 9H) tanpa biaya pendaftaran atau biaya tambahan tersembunyi',
      'Galeri sebelum & sesudah (Before & After Showcase) dengan filter kategori cepat (Detailing, Performa, Matic)',
      'Synthesizer suara deru mesin motor dan letupan knalpot Web Audio API prosedural dengan tombol sakelar suara aktif/bisu',
      'Informasi 4 jaminan kenyamanan bengkel (Garansi servis 30 hari, suku cadang & oli 100% asli dibuka di depan pemilik, alat presisi digital, ruang tunggu dingin ber-AC & kopi gratis)',
      'Drawer slide-over keranjang belanja paket servis dengan tombol hapus dan pemesanan WhatsApp otomatis',
      'Formulir reservasi jadwal kedatangan servis bebas antre dengan pilihan tanggal dan slot waktu',
      'Bahasa Indonesia yang bersahabat, jelas, dan membumi bagi pemilik sepeda motor tanpa istilah asing atau jargon yang membingungkan',
      'Standar craft editorial antislop dengan palet warna balap bertenaga (#000000, #3D0000, #950101, #FF0000) dan rasio kontras WCAG AAA 21:1'
    ],
    usageInstructions: [
      'Buka templates/automotive/redline-motoworks.html di editor kode Anda.',
      'Sesuaikan tarif servis, jenis motor, dan paket perawatan pada objek JavaScript di dalam script.',
      'Ganti nomor WhatsApp admin bengkel dengan nomor kontak resmi bengkel Anda.',
      'Buka file HTML langsung di browser desktop atau smartphone untuk website bengkel langsung aktif.'
    ],
    sourceFiles: [
      {
        filename: 'redline-motoworks.html',
        language: 'html',
        content: `<!-- REDLINE MOTOWORKS â€” Bengkel Modifikasi Motor, Servis Rutin & Detailing Kilap -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>REDLINE MOTOWORKS â€” Bengkel Performa & Detailing</title>
  <style>
    :root {
      --bg-obsidian: #000000;
      --card-maroon: #1A0202;
      --crimson-red: #950101;
      --scarlet-neon: #FF0000;
      --font-sans: 'Plus Jakarta Sans', system-ui, sans-serif;
    }
  </style>
</head>
<body>
  <div class="top-telemetry-bar">BENGKEL BUKA: 08:00 - 20:00 WIB â€¢ LIFT SERVIS 3/4 TERSEDIA â€¢ DYNO 250HP SIAP</div>
  <header class="main-header">
    <div class="brand-title">REDLINE <span>MOTOWORKS</span></div>
    <nav>Simulator Dyno Â· Hitung Biaya Â· Paket Servis Â· Portofolio Â· Reservasi Jadwal</nav>
  </header>
  <!-- Full Interactive Motorcycle Garage: Tachometer Canvas, Cost Calculator, Packages & Cart Drawer -->
</body>
</html>`,
        description: 'Single-file standalone HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt website bengkel modifikasi dan servis performa motor REDLINE MOTOWORKS dengan palet warna Obsidian Pitch Black (#000000), Dark Maroon Charcoal (#3D0000), Crimson Blood Red (#950101), dan Electric Racing Scarlet Red (#FF0000). Dilengkapi simulator putaran mesin (RPM) & dyno test interaktif berbasis Canvas HTML5 dengan penggeser gas throttle, lampu shift light redline, dan pembacaan tenaga kuda (HP) & torsi (Nm), kalkulator interaktif estimasi biaya servis & perawatan motor dengan pengali kategori kendaraan dan estimasi durasi waktu, 4 paket servis transparan tanpa biaya tersembunyi, galeri hasil pengerjaan sebelum & sesudah (Before & After), formulir reservasi kedatangan bebas antre, slide-over keranjang pesanan, serta synthesizer suara deru mesin knalpot balap Web Audio API.',
      designDirection: 'Modern automotive performance garage & custom motorcycle workshop berstandar antislop: Obsidian Pitch Black (#000000), Dark Maroon Charcoal (#3D0000), Crimson Blood Red (#950101), Electric Racing Scarlet Red (#FF0000), Crisp White (#FFFFFF), dan Soft Platinum Gray (#E0E0E0). Tipografi Plus Jakarta Sans dan JetBrains Mono.',
      layoutAndGrid: 'Top telemetry status bar bengkel dengan status buka, kapasitas meja lift dan jam WIB real-time, sticky header dengan brand mark RL dan navigasi ramah publik, hero dinamis dengan metrik garansi 30 hari & akurasi dyno 0.1 HP, simulator tachometer jarum analog & dyno Canvas HTML5 dengan shift light, kalkulator biaya servis 2 kolom dengan ringkasan sticky, grid 4 paket komplit terpadu, galeri sebelum-sesudah dengan filter tab, 4 jaminan kualitas bengkel, formulir reservasi kedatangan bebas antre, dan slide-over cart drawer.',
      typographyAndColor: 'Plus Jakarta Sans (bobot 400-900) untuk tampilan modern, agresif, dan mudah dibaca, JetBrains Mono untuk metrik putaran mesin RPM, skor tenaga HP, torsi Nm, estimasi durasi menit, dan tarif biaya servis rupiah.',
      interactions: 'Simulator putaran mesin Canvas HTML5 dengan jarum tachometer analog mulus yang merespons slider bukaan gas dan tombol geber balap, kalkulator biaya servis dengan pengali kategori motor dan kalkulasi durasi otomatis, filter galeri sebelum-sesudah instan, synthesizer audio knalpot motor Web Audio API, serta slide-over drawer pesanan servis terintegrasi WhatsApp.',
      technicalRequirements: 'Zero dependencies, single file standalone HTML, procedural tachometer needle and shift light rendering Canvas HTML5, fully responsive smartphone hingga layar desktop lebar.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-11-19',
    livePreviewAvailable: true,
    accentColor: '#FF0000',
    colorPalette: [
      { hex: '#000000', rgb: 'rgb(0, 0, 0)', name: 'Obsidian Pitch Black', role: 'Latar Belakang Utama Bengkel Modern, Sasis Karbon & Aspal Balap' },
      { hex: '#3D0000', rgb: 'rgb(61, 0, 0)', name: 'Dark Maroon Charcoal', role: 'Permukaan Kartu Servis, Bilah Navigasi, Panel Dyno & Kontainer Jadwal' },
      { hex: '#950101', rgb: 'rgb(149, 1, 1)', name: 'Crimson Blood Red', role: 'Garis Batas Kartu Unggulan, Badge Status Mesin & Aksen Tabel Spesifikasi' },
      { hex: '#FF0000', rgb: 'rgb(255, 0, 0)', name: 'Electric Racing Scarlet Red', role: 'Indikator RPM Redline, Jarum Tachometer Analog & Tombol Aksi Utama CTA' }
    ]
  },
  {
    id: 'tpl-46',
    slug: 'solara-energy-systems',
    title: 'SOLARA (Instalasi Panel Surya Atap, Hemat Listrik & Baterai Rumah)',
    tagline: 'Solusi instalasi panel surya atap rumah & bisnis: hemat tagihan listrik hingga 70%, bebas mati lampu, dan garansi performa 25 tahun',
    description: 'Template website penyedia dan kontraktor instalasi panel surya atap (PLTS Atap) SOLARA ECOTECH dengan palet warna Arctic Clean Off-White (#F5F7F8), Solar Amber Gold (#F4CE14), Deep Forest Slate Green (#495E57), dan Charcoal Graphite Slate (#45474B). Dilengkapi simulator interaktif lintasan matahari & produksi daya surya berbasis Canvas HTML5 dengan pengatur waktu hari (06:00 - 18:00 WIB) dan sudut kemiringan atap, kalkulator interaktif penghematan tagihan listrik PLN bulanan dan akumulasi 25 tahun dengan rekomendasi kapasitas kWp, 4 pilihan paket sistem panel surya transparan tanpa biaya tersembunyi, panduan alur pemasangan 4 langkah mudah, 4 jaminan ketenangan konsumen, formulir pengajuan survey lokasi gratis terintegrasi WhatsApp, slide-over keranjang paket sistem, serta synthesizer suara arus murni 50Hz inverter surya Web Audio API.',
    category: 'solar',
    tags: ['Solar Energy', 'Rooftop Solar PV', 'PLTS Atap', 'Electricity Savings', 'Clean Energy', 'Battery Storage', 'Sun Tracker Simulator', 'Cost Calculator', 'Eco Friendly'],
    technologies: ['HTML5', 'Vanilla CSS', 'Vanilla JS', 'Canvas HTML5 Solar Sky Engine', 'Web Audio API 50Hz Sine Synthesizer', 'Interactive Electricity Savings Calculator', 'Slide-Over Cart Drawer', 'WhatsApp Concierge'],
    thumbnailSvgType: 'agency',
    previewComponentKey: 'solar-solara',
    htmlPath: '/templates/solar/solara-energy-systems.html',
    htmlFolderPath: 'templates/solar/solara-energy-systems.html',
    features: [
      'Struktur mandiri 1 file (HTML + CSS + JS) tanpa perlu build step, node_modules, atau pustaka eksternal',
      'Simulator lintasan matahari & produksi listrik surya Canvas HTML5 interaktif dengan slider waktu harian (06:00 - 18:00 WIB), slider sudut atap (10-35°), dan kalkulasi radiasi W/m² serta daya kW seketika',
      'Kalkulator penghematan tagihan listrik PLN interaktif dengan pemilihan 4 golongan daya (1.300 VA s/d 6.600 VA+) dan slider tagihan bulanan menghitung penghematan per bulan, per tahun, dan 25 tahun',
      'Transparansi 4 paket sistem PLTS atap (Rumah Mandiri 1.5 kWp, Hemat Keluarga 3.3 kWp, Daya Maksimal 5.5 kWp, dan Baterai Cadangan 5 kWh Anti Mati Lampu) tanpa biaya tersembunyi',
      'Alur pemasangan 4 langkah mudah dari survey gratis, izin PLN, instalasi rapi tanpa bocor atap, hingga aktivasi pantau HP',
      'Synthesizer frekuensi audio arus murni 50Hz inverter daya surya Web Audio API prosedural dengan tombol sakelar suara aktif/bisu',
      'Informasi 4 jaminan ketenangan konsumen (Garansi performa panel 25 tahun, garansi bebas bocor atap, izin resmi PLN, monitoring digital 24 jam di smartphone)',
      'Drawer slide-over keranjang konsultasi paket sistem dengan tombol hapus dan pemesanan WhatsApp otomatis',
      'Formulir pengajuan survey lokasi dan desain atap gratis dengan pilihan material atap dan data tagihan',
      'Bahasa Indonesia yang bersahabat, jelas, dan membumi bagi keluarga dan pemilik rumah tanpa istilah rumit yang membingungkan',
      'Standar craft editorial antislop dengan palet warna ramah energi (#F5F7F8, #F4CE14, #495E57, #45474B) dan rasio kontras WCAG AAA'
    ],
    usageInstructions: [
      'Buka templates/solar/solara-energy-systems.html di editor kode Anda.',
      'Sesuaikan harga paket PLTS Atap, daya inverter, dan kapasitas panel pada skrip JavaScript.',
      'Ganti nomor WhatsApp konsultasi dengan nomor kontak resmi tim konsultan energi surya Anda.',
      'Buka file HTML langsung di browser desktop atau smartphone untuk website energi surya langsung beroperasi.'
    ],
    sourceFiles: [
      {
        filename: 'solara-energy-systems.html',
        language: 'html',
        content: `<!-- SOLARA ECOTECH â€” Instalasi Panel Surya Atap & Energi Rumah -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>SOLARA ECOTECH â€” Panel Surya Atap Rumah</title>
  <style>
    :root {
      --bg-canvas: #F5F7F8;
      --solar-yellow: #F4CE14;
      --forest-green: #495E57;
      --charcoal-gray: #45474B;
      --font-sans: 'Plus Jakarta Sans', system-ui, sans-serif;
    }
  </style>
</head>
<body>
  <div class="top-telemetry-bar">RADIASI MATAHARI: 5.4 kWh/mÂ² â€¢ SUHU PANEL: 29.5Â°C â€¢ IZIN PLN RESMI</div>
  <header class="main-header">
    <div class="brand-title">SOLARA <span>ECOTECH</span></div>
    <nav>Simulator Matahari Â· Hitung Penghematan Â· Paket PLTS Atap Â· Alur Pemasangan Â· Survey Gratis</nav>
  </header>
  <!-- Full Interactive Solar Energy: Sun Path Canvas, PLN Savings Calculator, Packages & Cart Drawer -->
</body>
</html>`,
        description: 'Single-file standalone HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt website penyedia dan kontraktor instalasi panel surya atap (PLTS Atap) SOLARA ECOTECH dengan palet warna Arctic Clean Off-White (#F5F7F8), Solar Amber Gold (#F4CE14), Deep Forest Slate Green (#495E57), dan Charcoal Graphite Slate (#45474B). Dilengkapi simulator interaktif lintasan matahari & produksi daya surya berbasis Canvas HTML5 dengan pengatur waktu hari (06:00 - 18:00 WIB) dan sudut kemiringan atap, kalkulator interaktif penghematan tagihan listrik PLN bulanan dan akumulasi 25 tahun dengan rekomendasi kapasitas kWp, 4 pilihan paket sistem panel surya transparan tanpa biaya tersembunyi, panduan alur pemasangan 4 langkah mudah, 4 jaminan ketenangan konsumen, formulir pengajuan survey lokasi gratis terintegrasi WhatsApp, slide-over keranjang paket sistem, serta synthesizer suara arus murni 50Hz inverter surya Web Audio API.',
      designDirection: 'Clean modern solar energy architecture & renewable residential contractor berstandar antislop: Arctic Clean Off-White (#F5F7F8), Solar Amber Gold (#F4CE14), Deep Forest Slate Green (#495E57), Charcoal Graphite Slate (#45474B), dan Pure White (#FFFFFF). Tipografi Plus Jakarta Sans dan JetBrains Mono.',
      layoutAndGrid: 'Top telemetry status bar energi surya dengan status radiasi harian dan jam WIB real-time, sticky header dengan brand mark matahari kuning surya dan navigasi ramah publik, hero dinamis dengan metrik penghematan 70% dan garansi 25 tahun, simulator lintasan matahari Canvas HTML5 dengan radiasi W/m² dan daya kW, kalkulator penghematan tagihan listrik PLN 2 kolom dengan kartu hasil hijau botani tua sticky, grid 4 paket sistem komplit terpadu, 4 langkah alur pemasangan, 4 jaminan ketenangan konsumen, formulir pengajuan survey atap gratis, dan slide-over cart drawer.',
      typographyAndColor: 'Plus Jakarta Sans (bobot 400-900) untuk tampilan bersih, optimis, dan terpercaya, JetBrains Mono untuk metrik radiasi W/m², produksi daya kW, persentase beban tertutup %, rupiah penghematan tagihan, dan durasi tahun garansi.',
      interactions: 'Simulator lintasan matahari Canvas HTML5 dengan sinar proyeksi ke atap rumah yang merespons slider jam dan kemiringan atap, kalkulator penghematan tagihan listrik PLN dengan slider nominal tagihan dan kalkulasi 25 tahun instan, synthesizer audio arus murni 50Hz Web Audio API, serta slide-over drawer pesanan sistem PLTS terintegrasi WhatsApp.',
      technicalRequirements: 'Zero dependencies, single file standalone HTML, procedural sun path and house rendering Canvas HTML5, fully responsive smartphone hingga layar monitor lebar.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-11-19',
    livePreviewAvailable: true,
    accentColor: '#F4CE14',
    colorPalette: [
      { hex: '#F5F7F8', rgb: 'rgb(245, 247, 248)', name: 'Arctic Clean Off-White', role: 'Kanvas Latar Belakang Bersih, Terang & Ramah Lingkungan' },
      { hex: '#F4CE14', rgb: 'rgb(244, 206, 20)', name: 'Solar Amber Gold', role: 'Aksen Energi Surya, Sinar Matahari, Tombol CTA Utama & Ikon Daya' },
      { hex: '#495E57', rgb: 'rgb(73, 94, 87)', name: 'Deep Forest Slate Green', role: 'Identitas Energi Hijau, Header Bilah Status & Ringkasan Penghematan' },
      { hex: '#45474B', rgb: 'rgb(69, 71, 75)', name: 'Charcoal Graphite Slate', role: 'Tipografi Tajam Berkarakter, Sasis Panel Surya & Border Halus' }
    ]
  },
  {
    id: 'tpl-47',
    slug: 'dentia-dental-clinic',
    title: 'DENTIA (Klinik Dokter Gigi Keluarga, Behel & Estetika Senyum)',
    tagline: 'Klinik dokter gigi modern & ramah keluarga: scaling gigi, penambalan estetik, pemutihan instan, dan behel dengan bius lembut tanpa rasa takut',
    description: 'Template website klinik dokter gigi keluarga dan estetika senyum DENTIA SMILE STUDIO dengan palet warna Mint Ice Pale Cyan (#E4F9F5), Vibrant Turquoise Aqua (#30E3CA), Deep Marine Seafoam Teal (#11999E), dan Slate Charcoal Pine (#40514E). Dilengkapi simulator interaktif tingkat kecerahan gigi (Shade Guide VITA) berbasis Canvas HTML5 dengan penggeser tingkat keputihan gigi dan indikator pembersihan noda, kalkulator interaktif estimasi biaya perawatan gigi dengan kategori pasien (Dewasa/Anak) dan durasi pengerjaan, 4 pilihan paket perawatan gigi lengkap transparan tanpa biaya dokter tersembunyi, 4 jaminan kenyamanan pasien tanpa rasa takut, formulir reservasi jadwal periksa bebas antre terintegrasi WhatsApp, slide-over keranjang paket perawatan, serta synthesizer musik relaksasi meditatif 432Hz Web Audio API.',
    category: 'dental',
    tags: ['Dental Clinic', 'Dentist', 'Teeth Whitening', 'Dental Braces', 'Teeth Scaling', 'Aesthetic Smile', 'Shade Guide Simulator', 'Pricing Calculator', 'Family Dental'],
    technologies: ['HTML5', 'Vanilla CSS', 'Vanilla JS', 'Canvas HTML5 Teeth Shade Engine', 'Web Audio API 432Hz Meditation Synthesizer', 'Interactive Dental Cost Calculator', 'Slide-Over Cart Drawer', 'WhatsApp Concierge'],
    thumbnailSvgType: 'agency',
    previewComponentKey: 'dental-dentia',
    htmlPath: '/templates/dental/dentia-dental-clinic.html',
    htmlFolderPath: 'templates/dental/dentia-dental-clinic.html',
    features: [
      'Struktur mandiri 1 file (HTML + CSS + JS) tanpa perlu build step, node_modules, atau pustaka eksternal',
      'Simulator tingkat kecerahan gigi (VITA Shade Guide) Canvas HTML5 interaktif dengan slider kecerahan (Level 1-8 / A4-BL1), indikator pembersihan noda kopi/teh, dan efek kilau mutiara sparkle',
      'Kalkulator estimasi biaya perawatan gigi interaktif dengan kategori pasien (Dewasa/Anak) dan checklist tindakan transparan (Scaling, Tambal, Bleaching, Behel, Cabut Gigi Bungsu, Fluoride)',
      'Transparansi 4 paket perawatan gigi keluarga (Senyum Segar Rutin, Behel Senyum Rapi, Pemutihan Gigi Glowing, dan Gigi Anak Ceria) tanpa biaya pendaftaran atau biaya dokter tersembunyi',
      'Informasi 4 jaminan kenyamanan pasien (Bius lembut minim sakit, sterilisasi autoklaf kelas B, ruang privat berlayar TV hiburan, dan konsultasi jujur terbuka)',
      'Synthesizer musik relaksasi meditatif 432Hz Web Audio API prosedural dengan tombol sakelar suara aktif/bisu',
      'Drawer slide-over keranjang pesanan paket perawatan gigi dengan tombol hapus dan pemesanan WhatsApp otomatis',
      'Formulir reservasi jadwal periksa gigi bebas antre dengan pilihan dokter spesialis dan slot waktu',
      'Bahasa Indonesia yang menenangkan, ramah, dan membumi bagi seluruh keluarga tanpa istilah medis yang menakutkan',
      'Standar craft editorial antislop dengan palet warna sejuk higienis (#E4F9F5, #30E3CA, #11999E, #40514E) dan rasio kontras WCAG AAA'
    ],
    usageInstructions: [
      'Buka templates/dental/dentia-dental-clinic.html di editor kode Anda.',
      'Sesuaikan tarif perawatan gigi, nama dokter spesialis, dan paket perawatan pada skrip JavaScript.',
      'Ganti nomor WhatsApp admin klinik dengan nomor kontak resmi klinik gigi Anda.',
      'Buka file HTML langsung di browser desktop atau smartphone untuk website klinik dokter gigi langsung aktif.'
    ],
    sourceFiles: [
      {
        filename: 'dentia-dental-clinic.html',
        language: 'html',
        content: `<!-- DENTIA SMILE STUDIO â€” Klinik Dokter Gigi Keluarga, Behel & Estetika -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>DENTIA SMILE STUDIO â€” Klinik Dokter Gigi Keluarga</title>
  <style>
    :root {
      --bg-mint: #E4F9F5;
      --turquoise-aqua: #30E3CA;
      --deep-teal: #11999E;
      --slate-pine: #40514E;
      --font-sans: 'Plus Jakarta Sans', system-ui, sans-serif;
    }
  </style>
</head>
<body>
  <div class="top-clinical-bar">KLINIK BUKA: 09:00 - 21:00 WIB â€¢ DOKTER SPESIALIS STANDBY â€¢ AUTOKLAF KELAS B</div>
  <header class="main-header">
    <div class="brand-title">DENTIA <span>SMILE STUDIO</span></div>
    <nav>Simulasi Senyum Â· Kalkulator Biaya Â· Paket Perawatan Â· Kenyamanan Pasien Â· Jadwal Periksa</nav>
  </header>
  <!-- Full Interactive Dental Clinic: Teeth Shade Canvas, Cost Calculator, Packages & Cart Drawer -->
</body>
</html>`,
        description: 'Single-file standalone HTML + CSS + JS yang dapat langsung dibuka di browser apa pun.'
      }
    ],
    prompt: {
      summary: 'Prompt website klinik dokter gigi keluarga dan estetika senyum DENTIA SMILE STUDIO dengan palet warna Mint Ice Pale Cyan (#E4F9F5), Vibrant Turquoise Aqua (#30E3CA), Deep Marine Seafoam Teal (#11999E), dan Slate Charcoal Pine (#40514E). Dilengkapi simulator interaktif tingkat kecerahan gigi (Shade Guide VITA) berbasis Canvas HTML5 dengan penggeser tingkat keputihan gigi dan indikator pembersihan noda, kalkulator interaktif estimasi biaya perawatan gigi dengan kategori pasien (Dewasa/Anak) dan durasi pengerjaan, 4 pilihan paket perawatan gigi lengkap transparan tanpa biaya dokter tersembunyi, 4 jaminan kenyamanan pasien tanpa rasa takut, formulir reservasi jadwal periksa bebas antre terintegrasi WhatsApp, slide-over keranjang paket perawatan, serta synthesizer musik relaksasi meditatif 432Hz Web Audio API.',
      designDirection: 'Clean modern aesthetic dental clinic & family dentistry berstandar antislop: Mint Ice Pale Cyan (#E4F9F5), Vibrant Turquoise Aqua (#30E3CA), Deep Marine Seafoam Teal (#11999E), Slate Charcoal Pine (#40514E), dan Pure White (#FFFFFF). Tipografi Plus Jakarta Sans dan JetBrains Mono.',
      layoutAndGrid: 'Top clinical status bar klinik dengan status buka, dokter spesialis standby dan jam WIB real-time, sticky header dengan brand mark gigi toska dan navigasi ramah publik, hero dinamis dengan metrik 100% nyaman dan sterilisasi kelas B, simulator kecerahan gigi Canvas HTML5 dengan shade guide dan kilau mutiara sparkle, kalkulator biaya perawatan 2 kolom dengan kartu hasil slate pine sticky, grid 4 paket komplit terpadu, 4 jaminan kenyamanan pasien, formulir reservasi periksa bebas antre, dan slide-over cart drawer.',
      typographyAndColor: 'Plus Jakarta Sans (bobot 400-900) untuk tampilan hangat, profesional, dan melegakan, JetBrains Mono untuk metrik shade gigi (A3/B1), durasi menit tindakan, persentase kebersihan noda %, dan nominal rupiah biaya perawatan.',
      interactions: 'Simulator kecerahan gigi Canvas HTML5 dengan visualisasi senyum yang merespons slider tingkat keputihan dan tombol pemutihan instan, kalkulator biaya perawatan gigi dengan kategori pasien dan kalkulasi durasi otomatis, synthesizer audio relaksasi meditatif 432Hz Web Audio API, serta slide-over drawer pesanan perawatan terintegrasi WhatsApp.',
      technicalRequirements: 'Zero dependencies, single file standalone HTML, procedural teeth smile and sparkle rendering Canvas HTML5, fully responsive smartphone hingga layar desktop lebar.',
      isReconstructed: false
    },
    featured: true,
    publishedAt: '2026-11-19',
    livePreviewAvailable: true,
    accentColor: '#30E3CA',
    colorPalette: [
      { hex: '#E4F9F5', rgb: 'rgb(228, 249, 245)', name: 'Mint Ice Pale Cyan', role: 'Latar Belakang Kanvas Utama, Higienis, Bersih & Sejuk' },
      { hex: '#30E3CA', rgb: 'rgb(48, 227, 202)', name: 'Vibrant Turquoise Aqua', role: 'Energi Senyum Cerah, Tombol Simulator Pemutihan & Kilau Mutiara' },
      { hex: '#11999E', rgb: 'rgb(17, 153, 158)', name: 'Deep Marine Seafoam Teal', role: 'Identitas Medis Profesional, Tombol CTA Utama & Bilah Status' },
      { hex: '#40514E', rgb: 'rgb(64, 81, 78)', name: 'Slate Charcoal Pine', role: 'Tipografi Tajam Berkarakter, Kartu Ringkasan Kalkulator & Footer' }
    ]
  }
];

// Enrich all templates with their comprehensive AI Master Prompts
TEMPLATES_DATA.forEach((template) => {
  const masterPrompt = getMasterPrompt(template.slug);
  if (masterPrompt) {
    template.prompt.masterPrompt = masterPrompt;
    template.prompt.isReconstructed = true;
  }
});







