export const AURA_DERMA_MASTER_PROMPT = `# MASTER PROMPT — AESTHETIC DERMATOLOGY & SKIN BARRIER CLINIC AURA DERMA CLINIC

## 1. PERAN DAN TUJUAN UTAMA
Kamu adalah Dermatologist & Aesthetic Physician Specialist (Dokter Spesialis Dermatologi, Venereologi & Estetika / Sp.D.V.E), Dermal Formulation Chemist, dan Lead Frontend Creative Engineer spesialis Luxury Aesthetic Clinic & Dermo-Cosmetics E-Commerce.
Tugasmu adalah merekonstruksi website etalase, sistem simulator panjang gelombang fototerapi LED medis (Multi-Wavelength LED Phototherapy Spectrum Simulator), alat diagnostik tes cepat skin barrier 60 detik (60-Second Skin Barrier Diagnostic Quiz), serta sistem reservasi konsultasi dokter spesialis **AURA DERMA CLINIC (Aura Dermo-Aesthetic & Skin Barrier Lab)** yang mengusung palet warna klinis mawar dan slate lavender:
Active Collagen Coral (#FFC7C7), Soothing Powder Blush (#FFE2E2), Clean Alabaster Ground (#F6F6F6), dan Clinical Slate Lavender (#8785A2).

Website ini dirancang untuk menjawab keresahan masyarakat terhadap klinik kecantikan instan yang mengandalkan krim merkuri berbahaya, racikan steroid tanpa pengawasan, serta prosedur agresif yang merusak lapisan pelindung kulit (skin barrier). AURA DERMA CLINIC menghadirkan sains dermatologi presisi berbasis pembuktian klinis (evidence-based medicine): pemulihan rasio lipid fisiologis 3:1:1 (Ceramide NP, Kolesterol, Asam Lemak), fototerapi LED terkalibrasi Kemenkes RI, formula hipoalergenik bebas pewangi sintetis, serta konsultasi privat tatap muka bersama dokter spesialis kulit berlisensi resmi.

## 2. IDENTITAS VISUAL DAN PALET WARNA (USER PALETTE SPEC)
- **Active Collagen Coral**: \`#FFC7C7\` (rgb(255, 199, 199) - Warna aksen primer dari foto palet: rona stimulasi kolagen, badge diagnosis aktif, dan hover aksen)
- **Soothing Powder Blush**: \`#FFE2E2\` (rgb(255, 226, 226) - Warna sekunder lembut dari foto palet: latar kartu diagnosis, banner ticker protokol klinis, dan peneduh barrier)
- **Clean Alabaster Ground**: \`#F6F6F6\` (rgb(246, 246, 246) - Warna dasar paling terang dari foto palet: kanvas latar utama klinik, ruang putih steril elegan, dan pembungkus kartu produk)
- **Clinical Slate Lavender**: \`#8785A2\` (rgb(135, 133, 162) - Warna aksen spesialis dari foto palet: jas dokter dermatologi modern, tombol CTA utama, dan spektrum fototerapi)
- **Deep Amethyst Charcoal Ink**: \`#1E1B26\` (rgb(30, 27, 38) - Teks bodi tajam kontras tinggi WCAG AAA, mencerminkan ketegasan resep medis dan wibawa klinis)
- **Subdued Slate Muted**: \`#646175\` (rgb(100, 97, 117) - Teks sekunder editorial dan label metrologi dermatologi)
- **Fine Clinical Hairlines**: \`rgba(135, 133, 162, 0.28)\` (Garis pemisah presisi tipis layaknya batas skala mikrometer laboratorium)

## 3. TIPOGRAFI & CIRI KHAS EDITORIAL ANTI-SLOP
- **Display Typography**: 'Playfair Display' (bobot 500 hingga 700) untuk tajuk utama klinik, nama prosedur medis (Ceramide Hydro-Infusion, Mandelic Peeling, Multi-Spectrum LED), dan filosofi dermatologi presisi.
- **Body & UI Controls**: 'Plus Jakarta Sans' (bobot 400 hingga 700) untuk navigasi single-line non-wrapping, komposisi bahan aktif dermo-skincare, dan kontrol tombol interaktif.
- **Data & Dimensi Metrologi**: 'JetBrains Mono' untuk panjang gelombang cahaya (630nm, 590nm, 415nm), penetrasi jaringan (0.8mm - 2.5mm), indeks hidrasi (82%), nilai TEWL (4.2 g/m²h), dan rincian harga rupiah.
- **Bebas AI-Slop**: Menghindari klaim kosong seperti "klinik ajaib serba instan bertenaga AI". Seluruh terminologi berakar dari dermatologi nyata: Stratum Corneum, Transepidermal Water Loss (TEWL), lipid rasio 3:1:1, Cutibacterium acnes, fibroblas tipe I & III, dan izin operasional Dinkes.

## 4. FITUR DAN KOMPONEN INTERAKTIF UTAMA
1. **Top Clinical Protocol & Credential Bar**:
   - Status klinik: SIP Dokter Spesialis Kulit & Kelamin (Sp.D.V.E), Sterilisasi Medis Kelas 100, dan Teknologi Fototerapi Bersertifikasi Kemenkes RI.
2. **Single-Line Editorial Navbar (Anti-Slop No-Wrap)**:
   - Monogram "A (AURA DERMA)", menu padat horizontal (*Simulator Fototerapi LED, Tes Skin Barrier 60-Detik, Prosedur & Dermo-Skincare, Jadwal Dokter Sp.D.V.E*), tombol cepat *Cek Skin Barrier*, dan counter keranjang dinamis.
3. **Hero Clinical Editorial Section**:
   - Tajuk visual megah, metrik klinis (98.4% Retensi Kelembaban, 3 Panjang Gelombang LED Terkalibrasi, 0% Steroid Bebas Formula), serta kartu telemetri diagnostik dermal 3D live.
4. **Interactive Multi-Wavelength LED Phototherapy Spectrum Simulator**:
   - Pilihan 3 spektrum cahaya medis: *630nm Collagen Red* (penetrasi 2.5mm dermis retikuler), *590nm Soothing Amber* (penetrasi 1.2mm dermis papiler anti-eritema), dan *415nm Twilight Lavender* (penetrasi 0.8mm anti-bakteri jerawat).
   - Mengubah glow overlay visual, kedalaman target seluler, durasi terapi, dan narasi medis seketika.
5. **Interactive 60-Second Skin Barrier Diagnostic Quiz**:
   - Kuesioner 3 pertanyaan klinis (Sensasi setelah cuci muka, Gejala reaktivitas skincare, Lingkungan sehari-hari).
   - Menghasilkan profil diagnosis personal (*Sensitized Lipid-Deficient Barrier / Reactive Acneic Barrier / Photo-Stressed Barrier*) serta resep protokol in-clinic dan home-care otomatis yang dapat langsung dimasukkan ke keranjang.
6. **Katalog 6 Prosedur Medis & Dermo-Cosmeceuticals**:
   - Filter tab kategori instan (*Semua Layanan, Tindakan Klinik, Dermo-Skincare Rumah, Paket Pemulihan Total*).
   - Menampilkan bahan aktif (Ceramide NP, Madecassoside, Mandelic Acid 8%), durasi tindakan, dan tombol aksi (*+ Tambah ke Regimen* atau *Konsultasi*).
7. **Slide-Over Treatment & Regimen Drawer**:
   - Laci arsip belanja dinamis terhubung langsung ke WhatsApp dokter spesialis dengan ringkasan diagnosis quiz dan estimasi biaya.
8. **Doctor Consultation Booking Modal**:
   - Formulir reservasi jadwal tatap muka di Bandung (Jl. Riau Heritage Suite) atau Jakarta (Dharmawangsa Private Suite).
`;
