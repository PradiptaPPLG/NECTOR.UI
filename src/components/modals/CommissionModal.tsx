import React, { useState, useEffect } from 'react';
import {
  X,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  MessageSquare,
  Check,
  Copy,
  Store,
  Utensils,
  Building2,
  Receipt,
  Palette,
  Calendar,
  PenTool,
  ShieldCheck
} from 'lucide-react';
import {
  DISPLAY_PHONE,
  buildCustomWebsiteMessage,
  getCustomCommissionWhatsAppUrl,

  type CustomCommissionData
} from '../../utils/whatsapp';
import type { Template } from '../../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  selectedTemplate?: Template | null;
  onToast?: (message: string, type?: 'success' | 'info' | 'copied') => void;
}

const THEME_OPTIONS = [
  {
    id: 'buah',
    title: 'Pasar & Toko Buah / Ritel Bahan Segar',
    tag: 'E-Commerce & Etalase',
    desc: 'Katalog buah & sayur segar, perhitungan berat/gram presisi, checkout langsung ke WhatsApp.',
    icon: Store
  },
  {
    id: 'fnb',
    title: 'Kafe, Restoran & Kuliner (F&B)',
    tag: 'Menu & Reservasi',
    desc: 'Daftar menu makanan & minuman artisan, foto sajian menggugah selera, info reservasi meja.',
    icon: Utensils
  },
  {
    id: 'company',
    title: 'Profil Usaha & Perusahaan (Company Profile)',
    tag: 'Kredibilitas Bisnis',
    desc: 'Company profile kredibel, etalase layanan profesional, legalitas, portofolio & testimoni.',
    icon: Building2
  },
  {
    id: 'pos',
    title: 'Sistem Kasir POS / Minimarket Retail',
    tag: 'Aplikasi Web Kasir',
    desc: 'Antarmuka kasir cepat, scan barcode/etalase instan, kalkulasi kembalian & struk digital.',
    icon: Receipt
  },
  {
    id: 'portfolio',
    title: 'Portofolio Kreatif & Studio Desain',
    tag: 'Galeri & Showcase',
    desc: 'Tampilan karya beresolusi tinggi, tata letak editorial estetik untuk arsitek, fotografer & kreator.',
    icon: Palette
  },
  {
    id: 'invitation',
    title: 'Undangan Digital & Landing Page Acara',
    tag: 'Event & Undangan',
    desc: 'Halaman acara eksklusif, countdown waktu, peta petunjuk lokasi & konfirmasi kehadiran RSVP.',
    icon: Calendar
  },
  {
    id: 'custom',
    title: 'Tema Kustom / Model Bisnis Spesifik',
    tag: 'Ide Mandiri',
    desc: 'Punya konsep atau alur bisnis unik? Deskripsikan kebutuhan spesifik Anda secara bebas.',
    icon: PenTool
  }
];

const STYLE_OPTIONS = [
  {
    id: 'editorial',
    title: 'Editorial & Minimalis Klasik',
    desc: 'Tipografi serif Newsreader anggun, tata letak majalah seni berjarak lapang, nuansa tenang dan berkelas.',
    colorTag: '#141416 / #FAF9F5'
  },
  {
    id: 'tech',
    title: 'Modern Sleek & High-Tech',
    desc: 'Garis geometri tajam, tipografi sans-serif presisi, tata letak terstruktur, profesional dan futuristik.',
    colorTag: 'Sleek Clean Grid'
  },
  {
    id: 'artisan',
    title: 'Artisan, Warm & Earthy',
    desc: 'Palet warm paper, aksen terracotta editorial, tekstur hangat sentuhan tangan, natural dan ramah.',
    colorTag: '#C44525 Terracotta'
  },
  {
    id: 'vibrant',
    title: 'Vibrant & Energetik',
    desc: 'Warna berani dengan kontras dinamis, tata letak ekspresif, sangat cocok untuk brand muda dan kreatif.',
    colorTag: 'Bold Expression'
  },
  {
    id: 'dark',
    title: 'Dark Mode Mewah & Eksklusif',
    desc: 'Latar deep charcoal & obsidian, aksen hairline kontras tinggi, kesan premium, tenang, dan prestisius.',
    colorTag: 'Deep Charcoal Noir'
  }
];

const FEATURE_OPTIONS = [
  'Desain 100% Responsif Layar Smartphone & Tablet',
  'Integrasi Checkout & Pesanan Otomatis ke WhatsApp',
  'Katalog Produk Interaktif & Kalkulator Total Harga',
  'Formulir Kontak, Booking Jadwal atau Reservasi Meja',
  'Optimasi Kecepatan Akses Kilat & Standar Bebas AI-Slop',
  'Animasi Mikro Interaktif & Transisi Halus (Smooth Motion)',
  'Dukungan Multi-Bahasa (Bahasa Indonesia & English)',
  'Fitur Struk Digital / Ringkasan Pembelian Siap Simpan',
  'Peta Interaktif & Petunjuk Arah Lokasi (Google Maps)',
  'Integrasi Galeri Foto / Media Portofolio Interaktif'
];

const TIMELINE_OPTIONS = [
  { id: 'express', label: 'Cepat / Prioritas (3 - 7 Hari Kerja)', desc: 'Untuk peluncuran segera atau event terdekat' },
  { id: 'standard', label: 'Standar Pengerjaan (1 - 2 Minggu)', desc: 'Waktu ideal untuk iterasi dan penyempurnaan' },
  { id: 'flexible', label: 'Fleksibel / Sesuai Skala Proyek', desc: 'Fokus pada kedalaman fitur dan kompleksitas' }
];

function getInitialThemeId(template?: Template | null): string {
  if (!template) return 'buah';
  if (template.category === 'buah') return 'buah';
  if (['cafe', 'padang', 'beverage', 'bakery'].includes(template.category)) return 'fnb';
  if (['kasir'].includes(template.category)) return 'pos';
  if (['perpustakaan', 'sekolah', 'pottery', 'florist', 'barber'].includes(template.category)) return 'company';
  return 'custom';
}

export const CommissionModal: React.FC<Props> = ({
  isOpen,
  onClose,
  selectedTemplate,
  onToast
}) => {
  // Step state: 1: Theme, 2: Style, 3: Features, 4: Summary/WhatsApp
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(() => {
    if (typeof window !== 'undefined') {
      const p = new URLSearchParams(window.location.search).get('step');
      if (p === '2') return 2;
      if (p === '3') return 3;
      if (p === '4') return 4;
    }
    return 1;
  });

  // Form State
  const [prevTemplateId, setPrevTemplateId] = useState<string | undefined>(selectedTemplate?.id);
  const [selectedThemeId, setSelectedThemeId] = useState<string>(() => getInitialThemeId(selectedTemplate));
  const [customThemeText, setCustomThemeText] = useState<string>('');
  const [selectedStyleId, setSelectedStyleId] = useState<string>('editorial');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'Desain 100% Responsif Layar Smartphone & Tablet',
    'Integrasi Checkout & Pesanan Otomatis ke WhatsApp',
    'Optimasi Kecepatan Akses Kilat & Standar Bebas AI-Slop'
  ]);
  const [customFeatureText, setCustomFeatureText] = useState<string>('');
  const [selectedTimeline, setSelectedTimeline] = useState<string>('Standar Pengerjaan (1 - 2 Minggu)');
  const [budgetRange, setBudgetRange] = useState<string>('Fleksibel');
  const [clientName, setClientName] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isCopied, setIsCopied] = useState<boolean>(false);

  // Sync template context if opened from a specific template without useEffect
  if (selectedTemplate?.id !== prevTemplateId) {
    setPrevTemplateId(selectedTemplate?.id);
    setSelectedThemeId(getInitialThemeId(selectedTemplate));
  }


  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentThemeObj = THEME_OPTIONS.find(t => t.id === selectedThemeId) || THEME_OPTIONS[0];
  const currentStyleObj = STYLE_OPTIONS.find(s => s.id === selectedStyleId) || STYLE_OPTIONS[0];

  const commissionData: CustomCommissionData = {
    theme: currentThemeObj.title,
    customTheme: selectedThemeId === 'custom' ? customThemeText : undefined,
    visualStyle: currentStyleObj.title,
    features: selectedFeatures,
    customFeature: customFeatureText,
    timeline: selectedTimeline,
    budgetRange: budgetRange !== 'Fleksibel' ? budgetRange : undefined,
    clientName: clientName,
    notes: notes,
    templateInspiration: selectedTemplate ? selectedTemplate.title : undefined
  };

  const formattedMessage = buildCustomWebsiteMessage(commissionData);
  const targetWhatsAppUrl = getCustomCommissionWhatsAppUrl(commissionData);

  const toggleFeature = (feature: string) => {
    setSelectedFeatures(prev =>
      prev.includes(feature) ? prev.filter(f => f !== feature) : [...prev, feature]
    );
  };

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(formattedMessage);
      setIsCopied(true);
      if (onToast) onToast('Teks pesanan berhasil disalin ke clipboard!', 'copied');
      setTimeout(() => setIsCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleFinalSubmit = () => {
    if (onToast) onToast('Membuka WhatsApp ke ' + DISPLAY_PHONE + '...', 'info');
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-window custom-wizard-window" onClick={e => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <div className="modal-header-badge-row mono">
              <span className="badge-subtle">STUDIO KOMISI KHUSUS</span>
              <span className="step-count">LANGKAH {currentStep} DARI 4</span>
            </div>
            <h2>Pesan Pembuatan Website Custom</h2>
            {selectedTemplate && (
              <p className="modal-selected-template-note mono">
                Inspirasi Proyek: <strong>{selectedTemplate.title}</strong> ({selectedTemplate.category.toUpperCase()})
              </p>
            )}
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Tutup jendela modal">
            <X size={18} />
          </button>
        </div>

        {/* Step Indicator Tabs */}
        <div className="wizard-step-bar">
          <button
            type="button"
            className={`wizard-step-tab ${currentStep === 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}`}
            onClick={() => setCurrentStep(1)}
          >
            <span className="wizard-step-num mono">01</span>
            <span className="wizard-step-label">Tema Aplikasi</span>
          </button>
          <div className="wizard-step-sep" />
          <button
            type="button"
            className={`wizard-step-tab ${currentStep === 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}`}
            onClick={() => setCurrentStep(2)}
          >
            <span className="wizard-step-num mono">02</span>
            <span className="wizard-step-label">Gaya Visual</span>
          </button>
          <div className="wizard-step-sep" />
          <button
            type="button"
            className={`wizard-step-tab ${currentStep === 3 ? 'active' : ''} ${currentStep > 3 ? 'completed' : ''}`}
            onClick={() => setCurrentStep(3)}
          >
            <span className="wizard-step-num mono">03</span>
            <span className="wizard-step-label">Requirement Fitur</span>
          </button>
          <div className="wizard-step-sep" />
          <button
            type="button"
            className={`wizard-step-tab ${currentStep === 4 ? 'active' : ''}`}
            onClick={() => setCurrentStep(4)}
          >
            <span className="wizard-step-num mono">04</span>
            <span className="wizard-step-label">Draf WhatsApp</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="modal-body wizard-modal-body">
          {/* STEP 1: THEME SELECTION */}
          {currentStep === 1 && (
            <div className="wizard-step-content animate-fade">
              <div className="wizard-section-intro">
                <span className="mono wizard-eyebrow">PERTANYAAN 01</span>
                <h3>Seperti apa tema atau jenis website yang ingin Anda buat?</h3>
                <p>Pilih kategori yang paling mendekati model bisnis atau kebutuhan aplikasi web Anda.</p>
              </div>

              <div className="wizard-grid-themes">
                {THEME_OPTIONS.map(opt => {
                  const IconComp = opt.icon;
                  const isSelected = selectedThemeId === opt.id;
                  return (
                    <button
                      type="button"
                      key={opt.id}
                      className={`wizard-card-theme ${isSelected ? 'selected' : ''}`}
                      onClick={() => setSelectedThemeId(opt.id)}
                    >
                      <div className="wct-header">
                        <div className="wct-icon-wrap">
                          <IconComp size={18} />
                        </div>
                        <span className="wct-tag mono">{opt.tag}</span>
                      </div>
                      <h4 className="wct-title">{opt.title}</h4>
                      <p className="wct-desc">{opt.desc}</p>
                      <div className="wct-indicator">
                        {isSelected && <Check size={14} className="check-icon" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {selectedThemeId === 'custom' && (
                <div className="wizard-custom-input-box animate-fade">
                  <label htmlFor="customThemeField" className="mono input-label">
                    TULISKAN TEMA ATAU MODEL APLIKASI WEB ANDA:
                  </label>
                  <input
                    id="customThemeField"
                    type="text"
                    value={customThemeText}
                    onChange={e => setCustomThemeText(e.target.value)}
                    placeholder="Contoh: Platform Booking Konsultasi Arsitektur, Web Reservasi Sewa Villa, dll."
                    className="wizard-text-input"
                    autoFocus
                  />
                </div>
              )}
            </div>
          )}

          {/* STEP 2: VISUAL STYLE SELECTION */}
          {currentStep === 2 && (
            <div className="wizard-step-content animate-fade">
              <div className="wizard-section-intro">
                <span className="mono wizard-eyebrow">PERTANYAAN 02</span>
                <h3>Bagaimana karakter visual & estetika yang Anda sukai?</h3>
                <p>NECTOR.UI merancang setiap website secara eksklusif dengan cita rasa editorial tinggi tanpa pola AI generik.</p>
              </div>

              <div className="wizard-style-list">
                {STYLE_OPTIONS.map(opt => {
                  const isSelected = selectedStyleId === opt.id;
                  return (
                    <div
                      key={opt.id}
                      className={`wizard-style-card ${isSelected ? 'selected' : ''}`}
                      onClick={() => setSelectedStyleId(opt.id)}
                    >
                      <div className="wsc-radio">
                        <div className={`radio-circle ${isSelected ? 'checked' : ''}`}>
                          {isSelected && <div className="radio-dot" />}
                        </div>
                      </div>
                      <div className="wsc-content">
                        <div className="wsc-top">
                          <strong className="wsc-title">{opt.title}</strong>
                          <span className="wsc-badge mono">{opt.colorTag}</span>
                        </div>
                        <p className="wsc-desc">{opt.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: REQUIREMENT SELECTION */}
          {currentStep === 3 && (
            <div className="wizard-step-content animate-fade">
              <div className="wizard-section-intro">
                <span className="mono wizard-eyebrow">PERTANYAAN 03 (REQUIREMENT SELECTION)</span>
                <h3>Fitur dan kebutuhan apa saja yang perlu ada di website Anda?</h3>
                <p>Pilih satu atau beberapa modul fitur yang diinginkan. Anda juga dapat menambahkan permintaan khusus.</p>
              </div>

              <div className="wizard-feature-grid">
                {FEATURE_OPTIONS.map((feat, idx) => {
                  const isChecked = selectedFeatures.includes(feat);
                  return (
                    <label
                      key={idx}
                      className={`wizard-feature-item ${isChecked ? 'active' : ''}`}
                      onClick={() => toggleFeature(feat)}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => {}} // handled by parent div
                        className="sr-only"
                      />
                      <div className={`feature-checkbox ${isChecked ? 'checked' : ''}`}>
                        {isChecked && <Check size={13} />}
                      </div>
                      <span className="feature-text">{feat}</span>
                    </label>
                  );
                })}
              </div>

              <div className="wizard-custom-feature-box">
                <label htmlFor="customFeatureField" className="mono input-label">
                  REQUEST FITUR TAMBAHAN LAINNYA (OPSIONAL):
                </label>
                <input
                  id="customFeatureField"
                  type="text"
                  value={customFeatureText}
                  onChange={e => setCustomFeatureText(e.target.value)}
                  placeholder="Contoh: Integrasi payment gateway Midtrans / Xendit, QRIS dinamis, integrasi database Supabase..."
                  className="wizard-text-input"
                />
              </div>
            </div>
          )}

          {/* STEP 4: SUMMARY & WHATSAPP REDIRECT */}
          {currentStep === 4 && (
            <div className="wizard-step-content animate-fade">
              <div className="wizard-section-intro">
                <span className="mono wizard-eyebrow">LANGKAH TERAKHIR (KONFIRMASI & WHATSAPP)</span>
                <h3>Lengkapi info singkat & tinjau pesan pesanan Anda</h3>
                <p>
                  Pesan di bawah ini telah otomatis terformat sesuai pilihan Anda dan siap dikirimkan ke WhatsApp resmi NECTOR.UI.
                </p>
              </div>

              {/* Client Info Inputs */}
              <div className="wizard-summary-form-grid">
                <div className="ws-field">
                  <label htmlFor="brandNameInput" className="mono input-label">
                    NAMA ANDA / NAMA USAHA / BRAND:
                  </label>
                  <input
                    id="brandNameInput"
                    type="text"
                    value={clientName}
                    onChange={e => setClientName(e.target.value)}
                    placeholder="Contoh: Kopi Senja / PT Nusantara / Nama Anda"
                    className="wizard-text-input"
                  />
                </div>

                <div className="ws-field">
                  <label htmlFor="timelineSelect" className="mono input-label">
                    TARGET WAKTU PENGERJAAN:
                  </label>
                  <select
                    id="timelineSelect"
                    value={selectedTimeline}
                    onChange={e => setSelectedTimeline(e.target.value)}
                    className="wizard-select-input"
                  >
                    {TIMELINE_OPTIONS.map(opt => (
                      <option key={opt.id} value={opt.label}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="ws-field">
                  <label htmlFor="budgetSelect" className="mono input-label">
                    ESTIMASI ANGGARAN (OPSIONAL):
                  </label>
                  <select
                    id="budgetSelect"
                    value={budgetRange}
                    onChange={e => setBudgetRange(e.target.value)}
                    className="wizard-select-input"
                  >
                    <option value="Fleksibel">Fleksibel (Sesuai kesepakatan fitur)</option>
                    <option value="Rp 1.000.000 - Rp 2.500.000">Rp 1.000.000 - Rp 2.500.000 (Landing Page / Etalase Ringkas)</option>
                    <option value="Rp 2.500.000 - Rp 5.000.000">Rp 2.500.000 - Rp 5.000.000 (Website Lengkap & POS/WA Checkout)</option>
                    <option value="Di atas Rp 5.000.000">Di atas Rp 5.000.000 (Proyek Skala Penuh & Kustomisasi Tinggi)</option>
                  </select>
                </div>

                <div className="ws-field ws-field-full">
                  <label htmlFor="notesInput" className="mono input-label">
                    CATATAN KHUSUS ATAU REFERENSI TAMPILAN (OPSIONAL):
                  </label>
                  <textarea
                    id="notesInput"
                    rows={2}
                    value={notes}
                    onChange={e => setNotes(e.target.value)}
                    placeholder="Tuliskan jika ada preferensi warna tertentu, link website referensi, atau instruksi khusus lainnya..."
                    className="wizard-textarea"
                  />
                </div>
              </div>

              {/* WhatsApp Message Preview Bubble */}
              <div className="whatsapp-preview-card">
                <div className="wpc-header">
                  <div className="wpc-title-row">
                    <MessageSquare size={15} className="wa-icon" />
                    <span className="mono">PRATINJAU DRAF PESAN WHATSAPP</span>
                  </div>
                  <button
                    type="button"
                    className="btn-wpc-copy mono"
                    onClick={handleCopyMessage}
                    title="Salin isi pesan"
                  >
                    {isCopied ? (
                      <>
                        <Check size={12} />
                        <span>TERSALIN</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>SALIN TEKS</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="wpc-message-box">
                  <pre className="wpc-pre">{formattedMessage}</pre>
                </div>
                <div className="wpc-footer-meta mono">
                  <ShieldCheck size={14} />
                  <span>TUJUAN WHATSAPP: {DISPLAY_PHONE} · RESPON CEPAT 7 HARI</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Controls Footer */}
        <div className="modal-footer wizard-modal-footer">
          <div className="footer-left">
            {currentStep > 1 && (
              <button
                type="button"
                className="btn-wizard-back"
                onClick={() => setCurrentStep((prev) => (prev - 1) as 1 | 2 | 3 | 4)}
              >
                <ArrowLeft size={15} />
                <span>Sebelumnya</span>
              </button>
            )}
            {currentStep === 1 && (
              <button type="button" className="btn-modal-cancel" onClick={onClose}>
                Tutup
              </button>
            )}
          </div>

          <div className="footer-right">
            {currentStep < 4 ? (
              <button
                type="button"
                className="btn-wizard-next"
                onClick={() => setCurrentStep((prev) => (prev + 1) as 1 | 2 | 3 | 4)}
              >
                <span>Langkah Selanjutnya</span>
                <ArrowRight size={15} />
              </button>
            ) : (
              <a
                href={targetWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wizard-submit"
                onClick={handleFinalSubmit}
              >
                <MessageSquare size={16} />
                <span>Kirim Pesanan ke WhatsApp</span>
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
