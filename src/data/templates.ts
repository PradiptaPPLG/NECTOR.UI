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







