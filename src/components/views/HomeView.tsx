import React, { useState, useMemo } from 'react';
import type { Template } from '../../types';
import { TemplateThumbnail } from '../common/TemplateThumbnail';
import { ArrowRight, Code, Eye, Bookmark, MessageSquare, Layers, Sparkles } from 'lucide-react';
import { getTemplateCommissionUrl } from '../../utils/whatsapp';
import { isNewTemplate } from '../../utils/templateDate';

interface Props {
  templates: Template[];
  onSelectTemplate: (template: Template, initialTab?: 'preview' | 'code' | 'prompt' | 'color') => void;
  onNavigate: (view: string, categoryFilter?: string) => void;
  onToggleSave: (templateId: string) => void;
  isSaved: (templateId: string) => boolean;
  onOpenCommission?: (template?: Template) => void;
}

const parseTemplateIdNum = (id: string): number => {
  const match = id.match(/\d+/);
  return match ? parseInt(match[0], 10) : 0;
};

const compareNewest = (a: Template, b: Template) => {
  const dateDiff = new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  if (dateDiff !== 0) return dateDiff;
  return parseTemplateIdNum(b.id) - parseTemplateIdNum(a.id);
};

export const HomeView: React.FC<Props> = ({
  templates,
  onSelectTemplate,
  onNavigate,
  onToggleSave,
  isSaved,
  onOpenCommission
}) => {
  const [heroIndex, setHeroIndex] = useState(0);

  const featuredTemplates = useMemo(() => {
    return [...templates].filter(t => t.featured).sort(compareNewest);
  }, [templates]);

  const recentTemplates = useMemo(() => {
    return [...templates].sort(compareNewest).slice(0, 6);
  }, [templates]);

  // Prominent hero showcase plates across real templates sorted newest first
  const heroShowcaseList = useMemo(() => {
    return [...templates].sort(compareNewest).slice(0, 24);
  }, [templates]);

  const currentHeroTemplate = heroShowcaseList[heroIndex] || templates[0];

  const categories = [
    { id: 'candlery', label: 'Lilin Aromaterapi & Hampers Rumah', count: templates.filter(t => t.category === 'candlery').length, desc: 'Lilin aromaterapi kedelai alami, reed diffuser & hampers kado kustom: kuis 2 langkah penemu aroma, perakit hampers dengan kartu ucapan gratis, dan kalkulator durasi nyala 55 jam' },
    { id: 'dental', label: 'Klinik Dokter Gigi & Estetika Senyum', count: templates.filter(t => t.category === 'dental').length, desc: 'Klinik dokter gigi keluarga, behel & pemutihan gigi: simulator shade kecerahan gigi Canvas HTML5, kalkulator biaya transparan, dan reservasi periksa bebas antre' },
    { id: 'solar', label: 'Panel Surya Atap & Energi Rumah', count: templates.filter(t => t.category === 'solar').length, desc: 'Instalasi panel surya atap & baterai: simulator lintasan matahari Canvas HTML5, kalkulator penghematan tagihan PLN hingga 70%, dan survey gratis' },
    { id: 'automotive', label: 'Bengkel Modifikasi Motor & Detailing', count: templates.filter(t => t.category === 'automotive').length, desc: 'Bengkel motor performa, servis rutin & detailing kilap: simulator RPM & dyno Canvas HTML5, kalkulator biaya servis, dan suara knalpot Web Audio API' },
    { id: 'fitness', label: 'Pusat Kebugaran & Gym Modern', count: templates.filter(t => t.category === 'fitness').length, desc: 'Pusat gym 24 jam dengan simulator denyut jantung & kardio Canvas HTML5 neon, kalkulator BMI & kalori, jadwal kelas, dan pass uji coba gratis' },
    { id: 'photography', label: 'Studio Foto Potret & Pre-Wedding', count: templates.filter(t => t.category === 'photography').length, desc: 'Studio foto potret personal, wisuda, keluarga & pre-wedding: simulator pencahayaan alami Canvas HTML5, kalkulator paket instan, dan portofolio interaktif' },
    { id: 'glasscraft', label: 'Kaca Tiup Borosilikat & Kristal Neodymium', count: templates.filter(t => t.category === 'glasscraft').length, desc: 'Atelier kriya kaca tiup 1.180°C & kristal optik Neodymium dikroik: simulator refraksi prisma spektral Canvas HTML5, kalkulator anil oven lehr, dan konfigurator wadah SVG' },
    { id: 'cutlery', label: 'Pisau Tempa Damaskus & Asahan Alami', count: templates.filter(t => t.category === 'cutlery').length, desc: 'Atelier pisau dapur tempa tangan 67 lapis damaskus & lab asahan batu alami: simulator Suminagashi & Hamaguri Canvas HTML5, konfigurator Wa-Handle & CAD 4 geometri bilah' },
    { id: 'cycling', label: 'Sepeda Balap Titanium & Terowongan Angin', count: templates.filter(t => t.category === 'cycling').length, desc: 'Atelier sepeda balap titanium kustom Grade-9 & lab aerodinamika: simulator streamline CdA Canvas HTML5, kalkulator biomekanika stack & reach, konfigurator 3 platform, dan soundscape Web Audio' },
    { id: 'lutherie', label: 'Gitar Akustik Solid & Lutherie', count: templates.filter(t => t.category === 'lutherie').length, desc: 'Atelier kriya gitar akustik kayu solid & laboratorium tonewood: simulator resonansi Chladni Canvas HTML5, kalkulator kecepatan suara & konfigurator bodi pre-war' },
    { id: 'stationery', label: 'Cat Air Madu & Kriya Seni Rupa', count: templates.filter(t => t.category === 'stationery').length, desc: 'Atelier cat air madu botani & pigmen mineral murni: simulator dispersi basah-di-atas-basah Canvas HTML5, kalkulator formulasi madu & racik 12-pan' },
    { id: 'maritime', label: 'Kriya Perahu & Arsitektur Maritim', count: templates.filter(t => t.category === 'maritime').length, desc: 'Galangan kapal kayu kriya Skandinavia & perahu lunas clinker: simulator hidrodinamika gelombang garis air Canvas HTML5, kalkulator uap iga ek & kriya dayung' },
    { id: 'interior', label: 'Cat Limewash & Plaster Dinding', count: templates.filter(t => t.category === 'interior').length, desc: 'Atelier cat mineral kapur tohor & dinding bernapas: simulator tekstur kuas silang Canvas HTML5, kalkulator Sd permeabilitas uap & 3 skenario ruang' },
    { id: 'sleep', label: 'Ergonomi Tidur & Sirkadian', count: templates.filter(t => t.category === 'sleep').length, desc: 'Atelier tidur & sirkadian: simulator spektrum 24-jam Kelvin 1.800K-6.500K, kontur lateks 7-zona & soundscape Delta' },
    { id: 'keyboards', label: 'Keyboard Mekanikal Kustom', count: templates.filter(t => t.category === 'keyboards').length, desc: 'Atelier keyboard mekanikal: tester kurva gaya aktuasi switch, inspektor 6 lapisan gasket mount & sasis CNC 6063' },
    { id: 'audio', label: 'Audio Analog & Akustik Hi-Fi', count: templates.filter(t => t.category === 'audio').length, desc: 'Atelier audio analog & akustik: kalibrator jarum VU meter analog ganda, penguat tabung trioda 300B & reservasi salon dengar privat' },
    { id: 'architecture', label: 'Arsitektur & Cetak Biru Cyanotype', count: templates.filter(t => t.category === 'architecture').length, desc: 'Atelier gambar kerja & cetak biru arsitektur tropis: inspektor multi-layer CAD interaktif, sirkulasi angin 1.8 m/s & tabel material RKS' },
    { id: 'horology', label: 'Horologi & Jam Tangan Astronomi', count: templates.filter(t => t.category === 'horology').length, desc: 'Atelier jam mekanis Haute Horlogerie: simulator fase bulan sinodik 29.53 hari, tuner roda keseimbangan 2.5Hz - 5.0Hz & salon privat' },
    { id: 'dermatology', label: 'Dermatologi & Skin Barrier', count: templates.filter(t => t.category === 'dermatology').length, desc: 'Klinik dermatologi estetika, fototerapi LED 3-gelombang, tes skin barrier 60 detik & dokter Sp.D.V.E' },
    { id: 'leather', label: 'Kulit Nabati & Saddlery', count: templates.filter(t => t.category === 'leather').length, desc: 'Atelier kriya kulit penyamakan nabati, panggung meja kerja 3 kolom, simulator patina 1.000 hari & cap monogram' },
    { id: 'wedding', label: 'Bridal & Gaun Pengantin', count: templates.filter(t => t.category === 'wedding').length, desc: 'Atelier gaun pengantin sutra kustom, inspektur 4 siluet couture, studio veil monogram & fitting privat' },
    { id: 'wagashi', label: 'Wagashi & Nerikiri', count: templates.filter(t => t.category === 'wagashi').length, desc: 'Atelier kriya manisan tradisional Kyoto, kalender 24-sekki, perakit kotak 6-slot & Chanoyu' },
    { id: 'eyewear', label: 'Optik & Kacamata', count: templates.filter(t => t.category === 'eyewear').length, desc: 'Atelier kacamata Beta-Titanium kriya Sabae, simulator lensa Blue-Shield & kotak Home Try-On' },
    { id: 'wellness', label: 'Hidroterapi & Bathhouse', count: templates.filter(t => t.category === 'wellness').length, desc: 'Santuari pemandian termal Nordik, telemetri suhu 4 kolam live, ritual kontras 90-menit & lab air murni' },
    { id: 'gelato', label: 'Gelato & Sorbet', count: templates.filter(t => t.category === 'gelato').length, desc: 'Gelato artigianale Italia lambat, boks 3-pint pendingin dry ice & sains overrun' },
    { id: 'furniture', label: 'Perabot Kayu & Rotan', count: templates.filter(t => t.category === 'furniture').length, desc: 'Studio perabot kayu solid SVLK, studio kustomisasi material live & simulasi luas ruang' },
    { id: 'apiculture', label: 'Madu Hutan & Apikultur', count: templates.filter(t => t.category === 'apiculture').length, desc: 'Arsip madu hutan liar Nusantara, pemilih 4 terroir kanopi hutan, flight builder & uji kadar air lab' },
    { id: 'packaging', label: 'Kemasan & Sablon Kustom', count: templates.filter(t => t.category === 'packaging').length, desc: 'Studio kemasan ramah lingkungan, visualizer sablon cup/box live & kalkulator grosir MOQ' },
    { id: 'footwear', label: 'Sneakers & Sepatu', count: templates.filter(t => t.category === 'footwear').length, desc: 'Rekayasa sepatu teknikal iklim tropis, inspeksi anatomi sol, colorway studio & size calculator' },
    { id: 'perfumery', label: 'Parfum & Aromatik', count: templates.filter(t => t.category === 'perfumery').length, desc: 'Atelier haute parfumerie botani, piramida olfaktori, discovery set & monogram studio' },
    { id: 'fashion', label: 'Fashion & Toko Baju', count: templates.filter(t => t.category === 'fashion').length, desc: 'Etalase baju & lifewear modern gaya Uniqlo, preview modal interaktif & diskon' },
    { id: 'sekolah', label: 'Sekolah & Akademik', count: templates.filter(t => t.category === 'sekolah').length, desc: 'Meja belajar digital siswa, jadwal pelajaran mingguan, agenda tugas & rekap nilai rapor' },
    { id: 'buah', label: 'Pasar & Toko Buah', count: templates.filter(t => t.category === 'buah').length, desc: 'Penjualan buah segar lokal & impor dengan timbangan digital presisi dan garansi manis' },
    { id: 'perpustakaan', label: 'Perpustakaan & Arsip', count: templates.filter(t => t.category === 'perpustakaan').length, desc: 'Sistem sirkulasi peminjaman buku, katalog rak DDC & ruang baca fisik' },
    { id: 'kasir', label: 'Kasir & POS Retail', count: templates.filter(t => t.category === 'kasir').length, desc: 'Sistem POS kasir minimarket modern, etalase barcode & kalkulasi instan' },
    { id: 'padang', label: 'Rumah Makan Padang', count: templates.filter(t => t.category === 'padang').length, desc: 'Etalase masakan minang & POS kasir modern' },
    { id: 'cafe', label: 'Cafe & Angkringan', count: templates.filter(t => t.category === 'cafe').length, desc: 'Coffee shop artisan, pastry & angkringan malam' },
    { id: 'beverage', label: 'Minuman Segar', count: templates.filter(t => t.category === 'beverage').length, desc: 'Minuman racikan lokal, juice bar & herbal' },
    { id: 'bakery', label: 'Artisan Bakery', count: templates.filter(t => t.category === 'bakery').length, desc: 'Roti sourdough, croissant & patisserie' },
    { id: 'florist', label: 'Floral Studio', count: templates.filter(t => t.category === 'florist').length, desc: 'Florist artisan & botanical gift atelier' },
    { id: 'barber', label: 'The Barber', count: templates.filter(t => t.category === 'barber').length, desc: 'Gentlemen grooming & potong rambut klasik' },
    { id: 'pottery', label: 'Studio Keramik', count: templates.filter(t => t.category === 'pottery').length, desc: 'Keramik buatan tangan & workshop tanah liat' },
    { id: 'organik', label: 'Lokal Organik', count: templates.filter(t => t.category === 'organik').length, desc: 'Hasil panen segar, sayuran hidroponik & toko sehat' },
  ];

  return (
    <div className="home-view">
      {/* Editorial Hero Section with Interactive Browser Etalase */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-text-col">
            <div className="hero-meta mono">
              <span className="hero-badge">ARSIP DESAIN DIGITAL</span>
              <span>EST. 2026</span>
              <span>STANDAR BEBAS AI-SLOP</span>
            </div>
            <h1 className="hero-headline">
              Template website siap pakai dengan standar editorial tinggi.
            </h1>
            <p className="hero-paragraph">
              Inspeksi kode sumber semantik, salin prompt desain terstruktur, uji responsivitas layar nyata, dan pesan website kustom. Dirancang cermat tanpa pola generik AI.
            </p>
            <div className="hero-actions">
              <button className="btn-hero-primary" onClick={() => onNavigate('templates')}>
                <span>Jelajahi Semua Template ({templates.length})</span>
                <ArrowRight size={15} />
              </button>
              <button className="btn-hero-secondary" onClick={() => onNavigate('categories')}>
                <Layers size={15} />
                <span>Kategori Etalase</span>
              </button>
            </div>

            {/* Custom Website Commission Trigger Callout */}
            <div className="hero-custom-box">
              <button
                type="button"
                className="btn-hero-custom"
                onClick={() => onOpenCommission && onOpenCommission()}
                aria-label="Buka formulir pembuatan website custom"
              >
                <div className="hero-custom-left">
                  <div className="hero-custom-badge mono">
                    <span className="hero-pulse-dot" />
                    <span>STUDIO KOMISI KHUSUS</span>
                    <span className="hero-badge-sep">·</span>
                    <span>KUESIONER 1 MENIT</span>
                  </div>
                  <div className="hero-custom-title-row">
                    <span className="hero-custom-title">
                      Saya ingin membuat website custom
                    </span>
                    <span className="hero-custom-arrow">→</span>
                  </div>
                  <p className="hero-custom-desc">
                    Pilih tema aplikasi, preferensi visual & requirement fitur — draf otomatis terkirim ke WhatsApp untuk diskusi langsung.
                  </p>
                </div>
                <div className="hero-custom-sparkle-col">
                  <div className="hero-custom-icon-chip">
                    <Sparkles size={18} />
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Hero Interactive Spotlight Etalase */}
          <div className="hero-visual-col">
            <div className="hero-etalase-card">
              {/* Etalase Switcher Tabs */}
              <div className="hero-etalase-tabs">
                {heroShowcaseList.map((item, idx) => {
                  const shortName = item.title.split('(')[0].trim();
                  return (
                    <button
                      key={item.id}
                      className={`hero-tab-btn ${heroIndex === idx ? 'active' : ''}`}
                      onClick={() => setHeroIndex(idx)}
                      title={item.title}
                    >
                      <span className="mono">0{idx + 1}</span>
                      <span className="tab-name">{shortName}</span>
                    </button>
                  );
                })}
              </div>

              {/* Realistic Browser Window Display */}
              <div className="hero-browser-viewport" onClick={() => onSelectTemplate(currentHeroTemplate)}>
                <TemplateThumbnail template={currentHeroTemplate} />
              </div>

              {/* Browser Bottom Metadata & Fast Actions */}
              <div className="hero-etalase-footer">
                <div className="hef-info">
                  <div className="hef-badge-row">
                    <span className="mono badge-small">{currentHeroTemplate.category.toUpperCase()}</span>
                    <span className="mono hef-tech">{currentHeroTemplate.technologies.slice(0, 3).join(' · ')}</span>
                  </div>
                  <h3 className="hef-title">{currentHeroTemplate.title}</h3>
                  <p className="hef-desc">{currentHeroTemplate.tagline}</p>
                </div>

                <div className="hef-buttons">
                  <button
                    className="btn-action-primary"
                    onClick={() => onSelectTemplate(currentHeroTemplate)}
                  >
                    <Eye size={13} />
                    <span>Inspeksi & Pratinjau</span>
                  </button>
                  <a
                    href={getTemplateCommissionUrl(currentHeroTemplate.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-action-commission"
                    onClick={e => e.stopPropagation()}
                  >
                    <Sparkles size={13} />
                    <span>Pesan Versi Kustom</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-kicker mono">KOLEKSI UNGGULAN</span>
              <h2 className="section-title">Rilisan Template Terpilih</h2>
            </div>
            <button className="section-link-btn" onClick={() => onNavigate('templates')}>
              <span>Lihat semua katalog</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="templates-grid">
            {featuredTemplates.map(template => (
              <div key={template.id} className="template-card">
                <div className="card-thumb-container" onClick={() => onSelectTemplate(template)}>
                  <TemplateThumbnail template={template} />
                  <div className="card-hover-overlay">
                    <span className="overlay-btn">Inspeksi & Pratinjau</span>
                  </div>
                </div>

                <div className="card-content">
                  <div className="card-meta-row">
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <span className="card-category mono">{template.category.toUpperCase()}</span>
                      {isNewTemplate(template.publishedAt) && (
                        <span className="badge-new-template" title="Template baru dirilis dalam 3 hari terakhir">BARU</span>
                      )}
                    </div>
                    <button
                      className={`card-save-btn ${isSaved(template.id) ? 'saved' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleSave(template.id);
                      }}
                      title={isSaved(template.id) ? 'Hapus dari koleksi tersimpan' : 'Simpan ke koleksi pribadi'}
                      aria-label="Simpan template"
                    >
                      <Bookmark size={15} />
                    </button>
                  </div>

                  <h3 className="card-title" onClick={() => onSelectTemplate(template)}>
                    {template.title}
                  </h3>
                  <p className="card-desc">{template.tagline}</p>

                  <div className="card-tech-chips mono">
                    {template.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="tech-chip">{tech}</span>
                    ))}
                  </div>

                  <div className="card-actions-row">
                    <button className="btn-action-primary" onClick={() => onSelectTemplate(template, 'preview')}>
                      <Eye size={13} />
                      <span>Pratinjau</span>
                    </button>
                    <button className="btn-action-ghost" onClick={() => onSelectTemplate(template, 'code')}>
                      <Code size={13} />
                      <span>Kode</span>
                    </button>
                    <a
                      href={getTemplateCommissionUrl(template.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-action-commission"
                      title={`Pesan website serupa untuk ${template.title}`}
                      onClick={e => e.stopPropagation()}
                    >
                      <MessageSquare size={13} />
                      <span>Pesan Kustom</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse By Category */}
      <section className="categories-browse-section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-kicker mono">KLASIFIKASI SISTEMATIS</span>
              <h2 className="section-title">Jelajahi Berdasarkan Kategori & Bidang</h2>
            </div>
          </div>

          <div className="categories-mosaic">
            {categories.map(cat => (
              <div
                key={cat.id}
                className="category-tile"
                onClick={() => {
                  if (cat.id === 'wedding') {
                    onNavigate('wedding');
                  } else {
                    onNavigate('templates', cat.id);
                  }
                }}
              >
                <div className="cat-top">
                  <span className="cat-count mono">{cat.count} TEMPLATE</span>
                  <ArrowRight size={14} className="cat-arrow" />
                </div>
                <h3 className="cat-title">{cat.label}</h3>
                <p className="cat-desc">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recently Added Section */}
      <section className="recent-section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-kicker mono">LINIMASA RILISAN</span>
              <h2 className="section-title">Template yang Baru Diterbitkan</h2>
            </div>
          </div>

          <div className="recent-table">
            <div className="recent-table-head mono">
              <span>TANGGAL</span>
              <span>NAMA TEMPLATE</span>
              <span>KATEGORI</span>
              <span>TEKNOLOGI</span>
              <span>AKSI</span>
            </div>
            {recentTemplates.map(item => (
              <div key={item.id} className="recent-row" onClick={() => onSelectTemplate(item)}>
                <span className="mono recent-date">{item.publishedAt}</span>
                <span className="recent-name">{item.title}</span>
                <span className="recent-cat mono">{item.category}</span>
                <span className="recent-tech mono">{item.technologies.slice(0, 2).join(', ')}</span>
                <span className="recent-action">
                  <button className="recent-view-btn" onClick={(e) => { e.stopPropagation(); onSelectTemplate(item); }}>
                    Inspeksi
                  </button>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
