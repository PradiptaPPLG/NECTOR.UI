import React from 'react';
import { DISPLAY_PHONE, getGeneralCommissionUrl } from '../../utils/whatsapp';
import { MessageSquare, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface Props {
  onNavigate: (view: string, categoryFilter?: string) => void;
}

export const Footer: React.FC<Props> = ({ onNavigate }) => {
  return (
    <footer className="global-footer">
      <div className="container footer-inner">
        {/* Top Commission Banner */}
        <div className="footer-commission-banner">
          <div className="fc-left">
            <span className="fc-tag mono">LAYANAN DESAIN KUSTOM</span>
            <h2 className="fc-title">Punya visi desain spesifik untuk bisnismu?</h2>
            <p className="fc-desc">
              Kami merancang dan membangun website fungsional berstandar tinggi untuk studio arsitektur, pendiri independen, ritel UMKM, hingga perayaan pernikahan.
            </p>
          </div>
          <div className="fc-right">
            <a
              href={getGeneralCommissionUrl('Custom Project Commission')}
              target="_blank"
              rel="noopener noreferrer"
              className="fc-cta-btn"
            >
              <MessageSquare size={16} />
              <span>Konsultasi via WhatsApp</span>
              <ArrowUpRight size={14} />
            </a>
            <div className="fc-contact-meta mono">
              <span>WhatsApp: {DISPLAY_PHONE}</span>
              <span>Ketersediaan: 2 Proyek / Bulan</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-line"></div>

        {/* Navigation & Archive Columns */}
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <div className="footer-wordmark">
              <span className="brand-accent-box">N</span>
              <span className="brand-name">NECTOR.UI</span>
            </div>
            <p className="footer-bio">
              Arsip kurasi desain digital dan laboratorium komponen frontend siap pakai. Dibangun dengan tipografi terarah, standar bebas slop, dan kode sumber fungsional.
            </p>
            <div className="footer-antislop-badge mono">
              <ShieldCheck size={14} />
              <span>STANDAR KUALITAS BEBAS AI-SLOP</span>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title mono">JELAJAHI KATALOG</h4>
            <ul className="footer-links">
              <li><button onClick={() => onNavigate('templates')}>Katalog Template</button></li>
              <li><button onClick={() => onNavigate('categories')}>Semua Kategori</button></li>
              <li><button onClick={() => onNavigate('collection')}>Koleksi Tersimpan</button></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title mono">KATEGORI ETALASE</h4>
            <ul className="footer-links">
              <li><button onClick={() => onNavigate('templates', 'perpustakaan')}>Perpustakaan & Arsip</button></li>
              <li><button onClick={() => onNavigate('templates', 'kasir')}>Kasir & POS Minimarket</button></li>
              <li><button onClick={() => onNavigate('templates', 'padang')}>Rumah Makan Padang</button></li>
              <li><button onClick={() => onNavigate('templates', 'cafe')}>Cafe & Angkringan</button></li>
              <li><button onClick={() => onNavigate('templates', 'beverage')}>Minuman Segar</button></li>
              <li><button onClick={() => onNavigate('templates', 'bakery')}>Artisan Bakery</button></li>
              <li><button onClick={() => onNavigate('templates', 'barber')}>The Barber</button></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title mono">DIREKTORI STUDIO</h4>
            <div className="footer-meta-block mono">
              <div>LOKASI: JAKARTA & BANDUNG</div>
              <div>WHATSAPP: {DISPLAY_PHONE}</div>
              <div>INSPEKTUR: HIGHLIGHT SINTAKS</div>
              <div>MESIN PROMPT: SPESIFIKASI REKONSTRUKSI</div>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Anti-Slop Credit */}
        <div className="footer-bottom">
          <div className="fb-copy mono">
            © 2026 NECTOR.UI. HAK CIPTA DILINDUNGI. KUALITAS DAN KERAJINAN TANGAN.
          </div>
          <div className="fb-rules mono">
            <span>TANPA KOMPONEN PALSU</span>
            <span>·</span>
            <span>TANPA METRIK SINTETIS</span>
            <span>·</span>
            <span>KODE SUMBER NYATA & BERFUNGSI</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
