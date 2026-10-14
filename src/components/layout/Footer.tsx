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
            <span className="fc-tag mono">BESPOKE CLIENT SERVICE</span>
            <h2 className="fc-title">Have a specific design vision in mind?</h2>
            <p className="fc-desc">
              We design and engineer tailored websites for architectural studios, independent founders, private estates, and luxury wedding celebrations.
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
              <span>Commission via WhatsApp</span>
              <ArrowUpRight size={14} />
            </a>
            <div className="fc-contact-meta mono">
              <span>Direct: {DISPLAY_PHONE}</span>
              <span>Availability: 2 Projects / Month</span>
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
              A curated digital design archive and frontend component laboratory. Built with deliberate typography, non-slop standards, and functional source code.
            </p>
            <div className="footer-antislop-badge mono">
              <ShieldCheck size={14} />
              <span>VERIFIED ANTI-SLOP CRAFT SPEC</span>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title mono">EXPLORE CATALOG</h4>
            <ul className="footer-links">
              <li><button onClick={() => onNavigate('templates')}>Etalase Templates</button></li>
              <li><button onClick={() => onNavigate('categories')}>Semua Kategori</button></li>
              <li><button onClick={() => onNavigate('collection')}>My Saved Collection</button></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title mono">CURATED DISCIPLINES</h4>
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
            <h4 className="footer-col-title mono">STUDIO DIRECTORY</h4>
            <div className="footer-meta-block mono">
              <div>LOCATION: JAKARTA & COPENHAGEN</div>
              <div>WHATSAPP: {DISPLAY_PHONE}</div>
              <div>INSPECTOR: SYNTAX HIGHLIGHTED</div>
              <div>PROMPT ENGINE: RECONSTRUCTED SPEC</div>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Anti-Slop Credit */}
        <div className="footer-bottom">
          <div className="fb-copy mono">
            © 2026 NECTOR.UI. ALL RIGHTS RESERVED. CRAFT OVER DECORATION.
          </div>
          <div className="fb-rules mono">
            <span>NO PLACEHOLDER CARDS</span>
            <span>·</span>
            <span>NO SYNTHETIC METRICS</span>
            <span>·</span>
            <span>PURE USABLE CODE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
