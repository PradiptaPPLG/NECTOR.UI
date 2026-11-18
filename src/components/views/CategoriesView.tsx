import React from 'react';
import type { Template } from '../../types';
import { ArrowRight, Coffee, Utensils, Scissors, Flower2, Wheat, Store, Sparkles, ShoppingCart, BookOpen, Apple, GraduationCap, PawPrint, Cookie, Shirt, FlaskConical, Footprints, Package, TreePine, Armchair, IceCream2, Waves, Glasses, Cherry, Heart, Briefcase, ShieldCheck, Watch, Compass } from 'lucide-react';

interface Props {
  templates: Template[];
  onSelectCategory: (cat: string) => void;
}

export const CategoriesView: React.FC<Props> = ({
  templates,
  onSelectCategory
}) => {
  const categoryDefs = [
    {
      id: 'architecture',
      title: 'Arsitektur & Cetak Biru Cyanotype',
      icon: Compass,
      desc: 'Atelier gambar kerja & cetak biru arsitektur tropis: inspektor multi-layer CAD interaktif (Arsitektur, Struktur, MEP), simulasi ventilasi silang 1.8 m/s, dan tabel spesifikasi material RKS standar IAI.',
      accent: '#0F4C75'
    },
    {
      id: 'horology',
      title: 'Horologi & Jam Tangan Astronomi',
      icon: Watch,
      desc: 'Atelier pembuatan jam mekanis rumit (Haute Horlogerie): simulator fase bulan sinodik 29.53 hari, tuner frekuensi getaran roda keseimbangan (escapement) Glucydur 2.5Hz - 5.0Hz, dan reservasi salon privat.',
      accent: '#424874'
    },
    {
      id: 'dermatology',
      title: 'Dermatologi & Skin Barrier Lab',
      icon: ShieldCheck,
      desc: 'Klinik dermatologi estetika medis & skin barrier lab: simulator fototerapi LED terkalibrasi 3 panjang gelombang, tes skin barrier 60 detik dengan resep protokol otomatis, dan konsultasi dokter spesialis Sp.D.V.E.',
      accent: '#8785A2'
    },
    {
      id: 'leather',
      title: 'Kriya Kulit Nabati & Saddlery',
      icon: Briefcase,
      desc: 'Atelier kriya kulit sapi penyamakan nabati (veg-tanned): panggung meja kerja 3 kolom, simulator penuaan patina 1.000 hari, studio cap monogram kuningan tekan panas, dan jahitan tangan saddle stitch seumur hidup.',
      accent: '#AD8B73'
    },
    {
      id: 'wedding',
      title: 'Bridal & Gaun Pengantin Couture',
      icon: Heart,
      desc: 'Atelier gaun pengantin sutra kustom: inspektur 4 siluet couture arsitektural, studio perakit veil dengan bordir inisial monogram & tanggal pernikahan live, buku swatch kain sutra gratis, dan reservasi salon privat.',
      accent: '#F2BED1'
    },
    {
      id: 'wagashi',
      title: 'Wagashi & Nerikiri Musiman',
      icon: Cherry,
      desc: 'Atelier kriya manisan tradisional Kyoto: penjelajah 24 kalender mikro-sekki, perakit kotak kayu bento 6-slot (Kiribako Box), simulator 5 dimensi indera nerikiri, dan reservasi seduh teh Chanoyu.',
      accent: '#FF9494'
    },
    {
      id: 'eyewear',
      title: 'Optik & Kacamata Titanium',
      icon: Glasses,
      desc: 'Atelier kacamata Beta-Titanium kriya Sabae Fukui: inspektur 4 siluet frame ikonik, sistem kotak Home Try-On 3-frame gratis, simulator pelapisan lensa Blue-Shield 420nm, dan booking refraksi mata.',
      accent: '#3F72AF'
    },
    {
      id: 'wellness',
      title: 'Hidroterapi & Thermal Bathhouse',
      icon: Waves,
      desc: 'Santuari pemandian termal & terapi kontras glasial: monitor telemetri suhu 4 kolam real-time, perancang ritual kontras 90-menit, transparansi uji laboratorium air tanpa klorin, dan butik garam mandi apothecary.',
      accent: '#71C9CE'
    },
    {
      id: 'gelato',
      title: 'Gelateria & Sorbet Buah',
      icon: IceCream2,
      desc: 'Gelato artigianale Italia lambat & sorbetto buah tropis nusantara: studio racik boks 3-pint thermal es kering, simulator sains overrun & suhu saji -11°C, dan pesan instan via WhatsApp.',
      accent: '#FF933E'
    },
    {
      id: 'furniture',
      title: 'Perabot Kayu Solid & Rotan',
      icon: Armchair,
      desc: 'Studio kriya perabot kayu solid & anyaman rotan lestari: studio kustomisasi material kayu real-time, simulator luas ruang & koridor lintasan gerak, dan layanan White-Glove Delivery.',
      accent: '#1E3B2F'
    },
    {
      id: 'apiculture',
      title: 'Madu Hutan & Apikultur',
      icon: TreePine,
      desc: 'Arsip madu hutan liar Nusantara & botanical pantry: pemilih 4 terroir kanopi hutan, studio racik boks kado flight 3-jar kustom, slider uji kadar air lab SNI, dan keranjang WhatsApp.',
      accent: '#15370D'
    },
    {
      id: 'packaging',
      title: 'Kemasan & Sablon Kustom',
      icon: Package,
      desc: 'Studio kemasan ramah lingkungan & cetak sablon kustom UMKM: visualizer sablon cup/box interaktif, kalkulator grosir MOQ berjenjang (500-10.000 pcs), unduh template die-cut, dan formulir sample kit gratis.',
      accent: '#202734'
    },
    {
      id: 'footwear',
      title: 'Sneakers & Alas Kaki Teknikal',
      icon: Footprints,
      desc: 'Laboratorium rekayasa sepatu teknikal iklim tropis: inspeksi anatomi sol 4-lapis, colorway studio 4-warna samudra, smart size calculator, uji ketahanan lab 1.000 km, dan keranjang WhatsApp.',
      accent: '#1B365D'
    },
    {
      id: 'perfumery',
      title: 'Haute Parfumerie & Wewangian',
      icon: FlaskConical,
      desc: 'Atelier parfum botani & wewangian artisanal: piramida olfaktori interaktif (top/heart/base), custom discovery trio builder (3×5ml), live flacon monogram engraving, dan pemesanan WhatsApp.',
      accent: '#7C0E44'
    },
    {
      id: 'fashion',
      title: 'Fashion & Toko Baju',
      icon: Shirt,
      desc: 'Etalase pemesanan baju & lifewear modern gaya Uniqlo: preview modal produk interaktif, kalkulasi diskon & harga coret, pemilih ukuran (XS-XXL), dan keranjang WhatsApp.',
      accent: '#E60012'
    },
    {
      id: 'donat',
      title: 'Toko Donat & Brioche',
      icon: Cookie,
      desc: 'Aplikasi web penjualan donat kentang & sourdough brioche, pilihan ukuran boks hampers, ekstra topping, dan keranjang WhatsApp.',
      accent: '#B46522'
    },
    {
      id: 'pet',
      title: 'Pet Shop & Cattery',
      icon: PawPrint,
      desc: 'Etalase adopsi kucing ras bersertifikat pedigree, rekam medis vaksin & chip transparan, inspect profil anabul, dan pet care boutique.',
      accent: '#B82E66'
    },
    {
      id: 'sekolah',
      title: 'Sekolah & Akademik',
      icon: GraduationCap,
      desc: 'Meja belajar digital siswa, jadwal pelajaran mingguan, buku agenda tugas & PR, kalkulator rekap nilai rapor, dan timer fokus Pomodoro.',
      accent: '#1F364D'
    },
    {
      id: 'buah',
      title: 'Pasar & Toko Buah',
      icon: Apple,
      desc: 'Penjualan aneka buah segar lokal & impor dengan sistem timbangan digital presisi, brix kemanisan teruji, dan layanan potong higienis.',
      accent: '#2D6A4F'
    },
    {
      id: 'perpustakaan',
      title: 'Perpustakaan & Arsip',
      icon: BookOpen,
      desc: 'Sistem sirkulasi peminjaman buku, katalog rak DDC, ruang baca komunitas, dan bukti pinjam digital.',
      accent: '#234133'
    },
    {
      id: 'kasir',
      title: 'Kasir & POS Minimarket',
      icon: ShoppingCart,
      desc: 'Sistem point-of-sale kasir ritel minimarket modern dengan etalase produk, kalkulasi PPN & kembalian instan, serta struk digital.',
      accent: '#2f6549'
    },
    {
      id: 'padang',
      title: 'Rumah Makan Padang',
      icon: Utensils,
      desc: 'Etalase masakan autentik Minangkabau lengkap dengan sistem kasir POS interaktif dan pemesanan meja.',
      accent: '#7A1F2B'
    },
    {
      id: 'cafe',
      title: 'Cafe & Angkringan',
      icon: Coffee,
      desc: 'Sajian coffee shop artisan, pastry hangat, serta suasana santai angkringan nasi kucing dan sate malam.',
      accent: '#8B4513'
    },
    {
      id: 'beverage',
      title: 'Minuman Segar & Racikan',
      icon: Sparkles,
      desc: 'Minuman dingin racikan buah lokal, herbal segar, dan juice bar dengan palet warna ceria alami.',
      accent: '#486B45'
    },
    {
      id: 'bakery',
      title: 'Artisan Bakery & Patisserie',
      icon: Wheat,
      desc: 'Etalase roti ragi alami (sourdough), croissant berlapis mentega, dan jadwal pemanggangan harian.',
      accent: '#A06B32'
    },
    {
      id: 'florist',
      title: 'Floral & Botanical Studio',
      icon: Flower2,
      desc: 'Studio bunga musiman, rangkaian buket custom, dan pemesanan instalasi botani estetik.',
      accent: '#4A6B53'
    },
    {
      id: 'barber',
      title: 'The Heritage Barber',
      icon: Scissors,
      desc: 'Layanan pangkas rambut pria klasik, hot towel shave, dan sistem booking antrean kursi digital.',
      accent: '#262626'
    },
    {
      id: 'pottery',
      title: 'Studio Keramik & Pottery',
      icon: Store,
      desc: 'Koleksi tembikar tanah liat buatan tangan, workshop keramik akhir pekan, dan galeri pameran.',
      accent: '#99583D'
    },
    {
      id: 'organik',
      title: 'Lokal Organik & Hasil Kebun',
      icon: Store,
      desc: 'Hasil tani sayur organik tanpa pestisida, paket langganan mingguan, dan provenance kebun lokal.',
      accent: '#3E663B'
    }
  ];

  return (
    <div className="categories-view">
      <div className="container">
        <div className="cat-page-header">
          <span className="mono badge-subtle">INDEX KATEGORI</span>
          <h1 className="cat-page-heading">Jelajahi Kategori Desain</h1>
          <p className="cat-page-sub">
            NECTOR.UI mengelompokkan template website berdasarkan fungsi dan bidang usaha nyata. Setiap koleksi dirancang dengan estetika autentik yang disesuaikan dengan karakternya.
          </p>
        </div>

        <div className="categories-full-grid">
          {categoryDefs.map(cat => {
            const count = templates.filter(t => t.category === cat.id).length;
            const Icon = cat.icon;

            return (
              <div
                key={cat.id}
                className="category-card-item"
                onClick={() => {
                  onSelectCategory(cat.id);
                }}
              >
                <div className="cci-top">
                  <div className="cci-icon-box" style={{ color: cat.accent }}>
                    <Icon size={20} />
                  </div>
                  <span className="mono cci-count">{count} TEMPLATE</span>
                </div>

                <h3 className="cci-title">{cat.title}</h3>
                <p className="cci-desc">{cat.desc}</p>

                <div className="cci-action mono">
                  <span>Buka Etalase {cat.title}</span>
                  <ArrowRight size={13} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
