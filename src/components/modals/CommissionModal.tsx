import React, { useState } from 'react';
import { X, MessageSquare, ArrowUpRight, ShieldAlert } from 'lucide-react';
import { DISPLAY_PHONE, getTemplateCommissionUrl } from '../../utils/whatsapp';
import type { Template } from '../../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  selectedTemplate?: Template | null;
}

export const CommissionModal: React.FC<Props> = ({ isOpen, onClose, selectedTemplate }) => {
  const [projectScope, setProjectScope] = useState('Website Lengkap Bisnis / UMKM (3-5 Halaman)');
  const [timeline, setTimeline] = useState('Standar (1-2 Minggu)');

  if (!isOpen) return null;

  const targetUrl = selectedTemplate
    ? getTemplateCommissionUrl(selectedTemplate.title)
    : `https://wa.me/6285219583336?text=${encodeURIComponent(
        `Halo NECTOR.UI! Saya ingin berkonsultasi mengenai pembuatan website kustom (${projectScope}, target pengerjaan: ${timeline}). Boleh info ketersediaan jadwal dan estimasi biayanya?`
      )}`;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-window" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-group">
            <span className="mono badge-subtle">KONSULTASI & PEMESANAN</span>
            <h2>Pesan Pembuatan Website Kustom</h2>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Tutup jendela modal">
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          {selectedTemplate ? (
            <div className="modal-template-context">
              <span className="context-label mono">DESAIN INSPIRASI REFERENSI:</span>
              <div className="context-card">
                <strong>{selectedTemplate.title}</strong>
                <p>{selectedTemplate.tagline}</p>
              </div>
            </div>
          ) : (
            <p className="modal-intro">
              NECTOR.UI merancang dan membangun website profesional siap pakai untuk UMKM, studio kreatif, kafe & kuliner, ritel minimarket, hingga portofolio personal di Indonesia.
            </p>
          )}

          <div className="modal-workflow">
            <span className="mono workflow-heading">ALUR KERJA PENGERJAAN</span>
            <div className="workflow-steps">
              <div className="wf-step">
                <span className="wf-num mono">01</span>
                <div>
                  <strong>Konsultasi & Kebutuhan</strong>
                  <p>Diskusi identitas merek, kebutuhan fitur, susunan katalog/menu, dan referensi desain yang diinginkan.</p>
                </div>
              </div>
              <div className="wf-step">
                <span className="wf-num mono">02</span>
                <div>
                  <strong>Desain Eksklusif & Frontend</strong>
                  <p>Perancangan visual berstandar tinggi, tata letak responsif, dan kode mandiri tanpa ketergantungan rumit.</p>
                </div>
              </div>
              <div className="wf-step">
                <span className="wf-num mono">03</span>
                <div>
                  <strong>Uji Responsif & Siap Luncur</strong>
                  <p>Pengujian ketat di layar smartphone hingga desktop, integrasi tombol WhatsApp, dan optimasi kecepatan akses.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-options">
            <div className="opt-field">
              <label className="mono">CAKUPAN PROYEK</label>
              <select value={projectScope} onChange={e => setProjectScope(e.target.value)}>
                <option value="Website Lengkap Bisnis / UMKM (3-5 Halaman)">Website Lengkap Bisnis / UMKM (3-5 Halaman)</option>
                <option value="Landing Page & Etalase Interaktif (1 Halaman)">Landing Page & Etalase Interaktif (1 Halaman)</option>
                <option value="Sistem Kasir POS / Katalog Digital & WhatsApp">Sistem Kasir POS / Katalog Digital & WhatsApp</option>
                <option value="Portofolio Kreatif & Galeri Karya">Portofolio Kreatif & Galeri Karya</option>
                <option value="Undangan Digital & Reservasi Acara">Undangan Digital & Reservasi Acara</option>
              </select>
            </div>

            <div className="opt-field">
              <label className="mono">TARGET WAKTU PENGERJAAN</label>
              <select value={timeline} onChange={e => setTimeline(e.target.value)}>
                <option value="Cepat (3-7 Hari Kerja)">Cepat (3-7 Hari Kerja)</option>
                <option value="Standar (1-2 Minggu)">Standar (1-2 Minggu)</option>
                <option value="Fleksibel / Sesuai Kesepakatan">Fleksibel / Sesuai Kesepakatan</option>
              </select>
            </div>
          </div>

          <div className="modal-disclosure">
            <ShieldAlert size={15} />
            <span>
              Tautan ini akan membuka obrolan langsung via WhatsApp ke <strong>{DISPLAY_PHONE}</strong> dengan draf rincian konsultasi otomatis.
            </span>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-modal-cancel" onClick={onClose}>
            Tutup
          </button>
          <a
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-modal-submit"
            onClick={onClose}
          >
            <MessageSquare size={16} />
            <span>Lanjut ke Konsultasi WhatsApp</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};
