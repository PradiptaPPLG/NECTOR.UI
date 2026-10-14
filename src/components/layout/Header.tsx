import { useState } from 'react';
import { Search, Bookmark, Moon, Sun, Menu, X, ArrowUpRight } from 'lucide-react';

interface Props {
  activeNav: string;
  onNavigate: (view: string, categoryFilter?: string) => void;
  savedCount: number;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onOpenCommissionModal: () => void;
}

export const Header: React.FC<Props> = ({
  activeNav,
  onNavigate,
  savedCount,
  theme,
  onToggleTheme,
  searchQuery,
  onSearchChange,
  onOpenCommissionModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const navItems = [
    { id: 'home', label: 'Beranda' },
    { id: 'templates', label: 'Katalog Template' },
    { id: 'categories', label: 'Kategori' },
    { id: 'collection', label: `Koleksi Saya${savedCount > 0 ? ` (${savedCount})` : ''}` },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="global-masthead">
      <div className="masthead-container">
        {/* Brand Wordmark */}
        <div className="brand-group">
          <button className="brand-logo" onClick={() => handleNavClick('home')}>
            <span className="brand-accent-box">N</span>
            <span className="brand-name">NECTOR<span className="brand-dot">.</span>UI</span>
          </button>
          <span className="brand-edition mono">ARSIP '26</span>
        </div>

        {/* Desktop Primary Navigation */}
        <nav className="desktop-nav" aria-label="Navigasi Utama">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`nav-link ${activeNav === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Global Controls */}
        <div className="header-actions">
          {/* Search Input */}
          <div className={`search-container ${isSearchActive ? 'expanded' : ''}`}>
            <Search size={15} className="search-icon" />
            <input
              type="text"
              placeholder="Cari template, teknologi, kategori..."
              value={searchQuery}
              onChange={e => onSearchChange(e.target.value)}
              onFocus={() => setIsSearchActive(true)}
              onBlur={() => !searchQuery && setIsSearchActive(false)}
              className="search-input"
            />
            {searchQuery && (
              <button className="clear-search" onClick={() => onSearchChange('')}>
                <X size={13} />
              </button>
            )}
          </div>

          {/* Saved Items Quick Trigger */}
          <button
            className="action-icon-btn collection-btn"
            onClick={() => handleNavClick('collection')}
            title="Koleksi Tersimpan"
            aria-label="Lihat Koleksi Tersimpan"
          >
            <Bookmark size={16} />
            {savedCount > 0 && <span className="counter-badge mono">{savedCount}</span>}
          </button>

          {/* Theme Switcher */}
          <button
            className="action-icon-btn theme-toggle-btn"
            onClick={onToggleTheme}
            title={`Beralih ke Mode ${theme === 'light' ? 'Gelap' : 'Terang'}`}
            aria-label="Ganti tema tampilan"
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          {/* Commission CTA */}
          <button
            className="btn-commission-header"
            onClick={onOpenCommissionModal}
          >
            <span>Pesan Website Kustom</span>
            <ArrowUpRight size={14} />
          </button>

          {/* Mobile Hamburger Menu */}
          <button
            className="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Buka Menu Navigasi"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <div className="mobile-search-row">
            <Search size={15} />
            <input
              type="text"
              placeholder="Cari template..."
              value={searchQuery}
              onChange={e => onSearchChange(e.target.value)}
              className="mobile-search-input"
            />
          </div>
          <div className="mobile-nav-links">
            {navItems.map(item => (
              <button
                key={item.id}
                className={`mobile-nav-item ${activeNav === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                <span>{item.label}</span>
                {item.id === 'collection' && savedCount > 0 && (
                  <span className="mono badge-small">{savedCount} tersimpan</span>
                )}
              </button>
            ))}
          </div>
          <div className="mobile-drawer-footer">
            <button
              className="mobile-commission-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommissionModal();
              }}
            >
              Pesan Website Kustom (WhatsApp)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
