import React from 'react';
import type { Template } from '../../types';
import { ArrowRight, Coffee, Utensils, Scissors, Flower2, Wheat, Store, Sparkles, ShoppingCart, BookOpen, Apple, GraduationCap, PawPrint, Cookie, Shirt, FlaskConical, Footprints, Package, TreePine, Armchair, IceCream2, Waves, Glasses, Cherry, Heart, Briefcase, ShieldCheck, Watch, Compass, Headphones, Keyboard, Moon, Paintbrush, Anchor, Palette, Guitar, Bike, Hammer, GlassWater, Camera, Dumbbell, Gauge, Sun, Smile, Flame, Leaf, Cake, Droplets } from 'lucide-react';

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
      id: 'pudding',
      title: 'Puding Sutra Buah Asli & Hampers',
      icon: Cherry,
      desc: 'Dapur puding sutra lembut (silky pudding) dalam jar kaca steril berlapis saus stroberi, raspberry, dan vanila murni: eksklusif hampers arisan & lamaran, inspektor lapisan puding, kalkulator porsi acara, dan pemesanan WhatsApp instan.',
      accent: '#850E35'
    },
    {
      id: 'flower',
      title: 'Bunga Abadi (Preserved) & Buket Wisuda',
      icon: Flower2,
      desc: 'Atelier bunga abadi mawar preserved asli tahan 3-5 tahun tanpa air, kubah kaca cloche lampu LED fairy lights, buket bunga kering wisuda, box akrilik seserahan kustom, dan pemesanan WhatsApp instan.',
      accent: '#8675A9'
    },
    {
      id: 'soap',
      title: 'Sabun Mandi Alami & Kulit Sensitif',
      icon: Droplets,
      desc: 'Studio sabun batang proses dingin (cold-process) berbasis minyak nabati murni, susu kambing & lempung alami: penemu sabun sesuai tipe kulit, perakit bundling kustom 3 atau 4 sabun, dan pemesanan WhatsApp instan.',
      accent: '#99DDCC'
    },
    {
      id: 'cake',
      title: 'Kue Bento & Tartlet Manis',
      icon: Cake,
      desc: 'Studio kue bento (Korean lunchbox cake) kustom & mini fruit tartlet: pengetik tulisan ucapan langsung di atas kue (Live Lettering Preview), pemilih warna dasar krim pastel, paket lilin unik, dan checkout WhatsApp instan.',
      accent: '#FEBBCC'
    },
    {
      id: 'tea',
      title: 'Teh Artisan & Tisane Herbal',
      icon: Leaf,
      desc: 'Atelier daun teh petik pucuk pegunungan Jawa Barat & tisane bunga herbal alami: panduan seduh interaktif (Brewing Ratio & Timer), filter suasana hati & kafein, perakit custom gift hampers teh, dan pemesanan WhatsApp instan.',
      accent: '#99A799'
    },
    {
      id: 'aquascape',
      title: 'Akuaskap & Ikan Hias Tropis',
      icon: Waves,
      desc: 'Atelier akuaskap dan ekosistem air tawar tropis Indonesia: set akuarium kaca rimless optic-clear, tanaman air steril bebas alga, kalkulator volume liter air & kapasitas ikan, serta garansi 100% ikan hidup sampai tujuan.',
      accent: '#2C74B3'
    },
    {
      id: 'beauty',
      title: 'Kosmetik Bibir & Perawatan Alami',
      icon: Sparkles,
      desc: 'Toko kosmetik bibir lokal alami bersertifikasi BPOM & Halal MUI: lip velvet tekstur awan ringan, lip tint biji anggur transferproof, penemu warna undertone kulit, dan perakit paket kado 3 shade dengan layanan ukir nama tube gratis.',
      accent: '#E23E57'
    },
    {
      id: 'baby',
      title: 'Pakaian Bayi Katun Bambu & Hampers Lahiran',
      icon: Heart,
      desc: 'Toko pakaian bayi katun serat bambu organik bersertifikat SNI & OEKO-TEX, adem anti-alergi, bebas kancing beracun, serta studio hampers kado melahirkan eksklusif dengan kartu ucapan kustom live-preview dan panduan ukuran bayi.',
      accent: '#748DA6'
    },
    {
      id: 'cookies',
      title: 'Kue Kering Mentega & Hampers Hari Raya',
      icon: Cookie,
      desc: 'Toko kue kering mentega Wijsman asli, nastar lumer selai nanas madu Subang, kastengel keju edam tua, putri salju mede, dan hampers hari raya elegan: penemu rasa & tekstur kue, perakit custom hampers lebaran dengan kartu ucapan gratis, dan kalkulator toples tamu.',
      accent: '#D3756B'
    },
    {
      id: 'craft',
      title: 'Kriya Anyaman Rotan & Bambu',
      icon: Store,
      desc: 'Kerajinan anyaman rotan alam & bambu apus ramah lingkungan: simulator ukuran ruangan interaktif (Room Size Visualizer), perakit kado pindahan rumah dengan tag ukir kayu gratis, dan tudung saji anti-lalat.',
      accent: '#776B5D'
    },
    {
      id: 'candlery',
      title: 'Lilin Aromaterapi & Hampers Rumah',
      icon: Flame,
      desc: 'Lilin aromaterapi kedelai alami (100% natural soy wax), reed diffuser & paket hampers kado kustom: kuis 2 langkah penemu aroma ruangan, perakit paket hadiah dengan kartu ucapan gratis, dan kalkulator durasi jam nyala.',
      accent: '#FFC7C7'
    },
    {
      id: 'dental',
      title: 'Klinik Dokter Gigi & Estetika Senyum',
      icon: Smile,
      desc: 'Klinik dokter gigi keluarga, behel & pemutihan gigi: simulator tingkat kecerahan gigi (Shade Guide) Canvas HTML5, kalkulator biaya perawatan transparan, dan reservasi jadwal periksa bebas antre.',
      accent: '#30E3CA'
    },
    {
      id: 'solar',
      title: 'Panel Surya Atap & Energi Rumah',
      icon: Sun,
      desc: 'Solusi instalasi panel surya atap (PLTS Atap) & baterai cadangan: simulator lintasan matahari Canvas HTML5, kalkulator penghematan tagihan listrik PLN hingga 70%, dan permohonan survey lokasi gratis.',
      accent: '#F4CE14'
    },
    {
      id: 'automotive',
      title: 'Bengkel Modifikasi Motor & Detailing',
      icon: Gauge,
      desc: 'Bengkel modifikasi performa motor, servis rutin & detailing kilap: simulator putaran mesin (RPM) & dyno test Canvas HTML5, kalkulator estimasi biaya servis transparan, galeri hasil pengerjaan, dan suara deru mesin Web Audio API.',
      accent: '#FF0000'
    },
    {
      id: 'fitness',
      title: 'Pusat Kebugaran & Gym Modern',
      icon: Dumbbell,
      desc: 'Pusat kebugaran 24 jam dengan simulator denyut jantung & zona kardio Canvas HTML5 neon, kalkulator BMI & kebutuhan kalori harian, jadwal kelas mingguan lengkap, dan pemesanan tiket uji coba gratis.',
      accent: '#14FFEC'
    },
    {
      id: 'photography',
      title: 'Studio Foto Potret & Pre-Wedding',
      icon: Camera,
      desc: 'Studio fotografi potret personal, wisuda, keluarga, dan pre-wedding dengan pencahayaan alami & sunset: simulator pencahayaan Canvas HTML5, kalkulator biaya paket foto instan, portofolio interaktif, dan efek suara shutter kamera.',
      accent: '#F67280'
    },
    {
      id: 'glasscraft',
      title: 'Kaca Tiup Borosilikat & Kristal Neodymium',
      icon: GlassWater,
      desc: 'Atelier kriya kaca tiup borosilikat manual 1.180°C & kristal optik Neodymium dikroik: simulator refraksi prisma spektral Canvas HTML5, kalkulator anil termal oven lehr, konfigurator wadah SVG, dan Web Audio dengkrik kristal.',
      accent: '#CCA8E9'
    },
    {
      id: 'cutlery',
      title: 'Pisau Tempa Damaskus & Asahan Alami',
      icon: Hammer,
      desc: 'Atelier pisau dapur tempa tangan 67 lapis damaskus & lab asahan batu alami Kyoto: simulator garis Suminagashi & bevel cembung Hamaguri Canvas HTML5, konfigurator gagang Wa-Handle, diagram vektor CAD 4 geometri bilah, dan Web Audio asahan.',
      accent: '#A27B5C'
    },
    {
      id: 'cycling',
      title: 'Sepeda Balap Titanium & Lab Aerodinamika',
      icon: Bike,
      desc: 'Atelier sepeda balap titanium kustom Grade-9 3Al-2.5V & lab terowongan angin: simulator garis arus aerodinamika (CdA) Canvas HTML5, kalkulator biomekanika stack & reach, konfigurator frame 3 platform, dan soundscape Web Audio deru angin.',
      accent: '#3FC1C9'
    },
    {
      id: 'lutherie',
      title: 'Gitar Akustik Solid & Lutherie',
      icon: Guitar,
      desc: 'Atelier kriya gitar akustik kayu solid & laboratorium tonewood: simulator pola getar resonansi Chladni Canvas HTML5, kalkulator kecepatan suara tonewood E/ρ, konfigurator bodi pre-war, dan konsultasi voicing luthier.',
      accent: '#BF9270'
    },
    {
      id: 'stationery',
      title: 'Cat Air Madu & Kriya Seni Rupa',
      icon: Palette,
      desc: 'Atelier cat air madu botani & pigmen mineral semi-mulia: simulator dispersi basah-di-atas-basah (wet-on-wet) Canvas HTML5 dengan efek granulasi kristal garam, kalkulator formulasi madu humektan, dan perakit palet saku kayu kenari 12-pan.',
      accent: '#FFB6B9'
    },
    {
      id: 'maritime',
      title: 'Kriya Perahu & Arsitektur Maritim',
      icon: Anchor,
      desc: 'Galangan perahu kayu kriya Skandinavia & arsitektur maritim pesisir: simulator hidrodinamika gelombang garis air Canvas HTML5, kalkulator waktu kukus iga ek 100°C, konfigurator perahu lunas clinker, dan etalase kriya dayung Sitka Spruce.',
      accent: '#6096B4'
    },
    {
      id: 'interior',
      title: 'Plaster Mineral & Limewash Arsitektur',
      icon: Paintbrush,
      desc: 'Atelier cat limewash mineral alami & plaster dinding bernapas: simulator teknik sapuan kuas silang (Cross-Hatch) sudut matahari 15°-90°, komparator permeabilitas uap Sd 0.02m vs cat lateks, dan kalkulator luas kaleng cat.',
      accent: '#967E76'
    },
    {
      id: 'sleep',
      title: 'Ergonomi Tidur & Riset Sirkadian',
      icon: Moon,
      desc: 'Atelier ergonomi tidur, matras lateks organik 7-zona & riset sirkadian: simulator spektrum cahaya 24-jam Kelvin 1.800K-6.500K, kalkulator postur tulang belakang & kepadatan Dunlop, serta soundscape gelombang otak Delta 2.5Hz.',
      accent: '#B1B2FF'
    },
    {
      id: 'keyboards',
      title: 'Keyboard Mekanikal & Lab Switch',
      icon: Keyboard,
      desc: 'Atelier keyboard mekanikal kustom: tester gaya aktuasi switch (Force Curve) & simulator suara typing, inspektor 6 lapisan gasket mount Poron, dan sasis billet aluminium 6063 CNC.',
      accent: '#08D9D6'
    },
    {
      id: 'audio',
      title: 'Audio Analog & Akustik Hi-Fi',
      icon: Headphones,
      desc: 'Atelier audio analog & laboratorium akustik: kalibrator jarum VU meter analog ganda, penguat tabung trioda Class-A 300B, DAC tangga resistor diskrit R-2R, dan reservasi salon dengar privat IEC-60268.',
      accent: '#27374D'
    },
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
