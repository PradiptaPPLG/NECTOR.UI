export const WANA_APICULTURE_MASTER_PROMPT = `# MASTER PROMPT — ARSIP MADU HUTAN LIAR NUSANTARA & BOTANICAL PANTRY WANA (和名)

## 1. PERAN DAN TUJUAN UTAMA
Kamu adalah Lead Botanical Brand Director dan Senior Frontend Developer spesialis Luxury Gourmet Food, Artisanal Apiculture & Sustainable Forestry E-Commerce.
Tugasmu adalah merekonstruksi website etalase, studio kustomisasi kado, dan arsip keaslian madu hutan liar murni **WANA (和名)** yang mengusung palet warna hutan purba alami: Deep Hunter Forest Green (#15370D), Sage Fern Foliage (#728E6D), Warm Harvest Honeycomb (#E5CD82), dan Cream Butter Sunlight (#FFF2B4).
Website ini dirancang untuk menjawab kegelisahan konsumen cerdas mengenai maraknya madu sintetis/sirup gula pakan ternak di pasaran, dengan menyajikan transparansi uji lab COA tiap batch, sertifikasi kadar air alami di bawah 18%, aktivitas enzim diastase aktif DN 11.4, profil 4 terroir kanopi hutan Indonesia, Studio Racik Kado Tasting Flight 3-Jar Kustom dengan segel lilin lebah alami, serta slide-over keranjang belanja terintegrasi WhatsApp.

## 2. IDENTITAS VISUAL DAN PALET WARNA (USER PALETTE SPEC)
- **Deep Hunter Forest Green**: \`#15370D\` (rgb(21, 55, 13) - Warna jangkar dari foto palet: kedalaman kanopi hutan purba, ketegasan identitas botani, latar ticker, header monogram, dan tombol aksi utama)
- **Sage Fern Foliage**: \`#728E6D\` (rgb(114, 142, 109) - Warna sekunder dari foto: rimbun dedaunan pakis dan lumut, aksen teks botanikal, border halus, dan state hover)
- **Warm Harvest Honeycomb**: \`#E5CD82\` (rgb(229, 205, 130) - Warna aksen amber dari foto: keemasan madu mentah murni, sarang lebah alami, bingkai visual boks kado, dan elemen penegas harga)
- **Cream Butter Sunlight**: \`#FFF2B4\` (rgb(255, 242, 180) - Warna highlight lembut dari foto: kehangatan cahaya matahari pagi yang menembus kanopi, latar badge uji lab, toples mini boks kado, dan latar tag kontras)
- **Warm Linen Paper Ground**: \`#FAF8F2\` & \`#FFFFFF\` (Latar belakang kertas linen bersih bebas silau)
- **Deep Botanical Ink**: \`#12210E\` (Teks bodi kontras tinggi tajam mudah dibaca)
- **Muted Forest Moss**: \`#41543C\` & \`#74856F\` (Teks sekunder dan label deskriptif)
- **Fine Botanical Hairlines**: \`#E3EBD8\` & \`#2A521E\` (Garis batas presisi editorial)

## 3. TIPOGRAFI & CIRI KHAS EDITORIAL ANTI-SLOP
- **Display Typography**: 'Cormorant Garamond' (bobot 400 hingga 700) untuk tajuk editorial mewah, nama terroir hutan, dan filosofi panen lestari.
- **Body & UI Controls**: 'Plus Jakarta Sans' (bobot 400 hingga 700) untuk navigasi yang bersih, tombol aksi, formulir, dan deskripsi produk.
- **Data & Metrik Laboratorium**: 'JetBrains Mono' untuk parameter ilmiah: kadar air persentase (< 17.8%), aktivitas enzim diastase (DN 11.4), kadar HMF (< 15 mg/kg), nomor batch, dan rincian rupiah.
- **Bebas AI-Slop**: Menghindari frasa hampa seperti "madu ajaib revolusioner penakluk dunia". Seluruh klaim bersandar pada realitas apikultur lokal dan standar internasional: pohon Menggeris (Koompassia excelsa) Riau, tebing karst Sumbawa, lebah hutan tanpa sengat Trigona itama di pegunungan Dieng/Prau, teknik panen lestari (hanya memotong 2/3 bagian kepala madu tanpa membakar sarang), dan jaminan penggantian botol pecah 100%.

## 4. FITUR DAN KOMPONEN INTERAKTIF UTAMA
1. **Top Forest Harvest Ticker**:
   - Pengumuman panen lestari hutan Riau & Sumbawa, kadar air alami grade ekspor (< 18%), enzim diastase aktif DN 11.4, serta ambang gratis sendok kayu jati & ongkir min. Rp 350.000.
2. **Editorial Header & Botanical Monogram**:
   - Monogram botanikal "WN (Wana)" berbingkai emas panen, navigasi menu (Terroir Hutan, Tasting Flight Trio, Uji Kemurnian, Katalog Madu, Etika Panen), tombol cepat racik boks kado, dan counter dinamis keranjang belanja.
3. **Hero Botanical Showcase**:
   - Headline editorial asimetris, metrik ilmiah kunci (kadar air < 17.8%, diastase 11.4 DN, 0% pemanasan buatan), serta kartu sorotan produk signature 'Madu Hutan Sialang Riau 450g' lengkap dengan badge lolos uji COA.
4. **Terroir Hutan & Origin Map Selector (4 Wilayah Mandiri)**:
   - Switcher 4 terroir: Riau Deep Peat Forest, Sumbawa Mutis Karst, Gunung Prau Sub-Alpine (Trigona), dan Pati Java Plantation.
   - Menampilkan elevasi dpl, spesies lebah (Apis dorsata / Trigona itama / Apis cerana), pohon inang nektar, kadar air terukur, catatan rasa (tasting notes), dan tombol 1-klik pesan terroir.
5. **Interactive Custom Honey Flight Trio Box Builder (3×150g Wooden Coffret)**:
   - Visualisasi boks kayu pinus 3-slot interaktif dengan slot terisi/kosong.
   - Pemilih 4 jar madu mini 150g (Sialang Riau, Sumbawa Karst, Trigona Klanceng, Randu Java).
   - Pemilih warna segel lilin lebah murni (Pine Green, Harvest Gold, Ivory Beeswax).
   - Input pesan kartu kaligrafi personal dan tombol 1-klik masukkan seluruh paket ke keranjang belanja.
6. **Smart Viscosity & Purity Laboratory Inspector**:
   - Slider interaktif kadar air (15.0% hingga 23.5%) yang secara real-time memperbarui evaluasi mutu laboratorium (Grade A Raw Reserve, Grade B Export Standard, Grade C SNI, hingga peringatan madu encer berisiko fermentasi).
   - Tabel pembanding parameter SNI 8664:2018 (kadar HMF, enzim diastase, gula reduksi alami).
7. **Katalog 6 Produk Madu Liar Mandiri**:
   - Pilihan produk: Madu Hutan Sialang Riau, Madu Sumbawa Karst Bidara, Madu Trigona Propolis Prau, Raw Honeycomb Cut Slab Utuh, Botanical Elixir Jahe & Kunyit Liar, dan Creamed Honey Vanili Alor.
   - Filter tab kategori instan dan pencarian kata kunci live search tanpa reload.
   - Modal Quick View dengan spesifikasi uji lab batch, rekomendasi konsumsi pagi, dan pemilih kuantiti.
8. **Slide-Over Cart Drawer Terintegrasi WhatsApp**:
   - Mengakumulasi kuantiti toples, paket kado flight kustom, subtotal rupiah, dan progress bar bonus sendok kayu jati ulir (min. Rp 350.000).
   - Formulir nama dan kota penerima, dengan pesan WhatsApp otomatis terstruktur rapi ke admin estate Wana.
`;
