import React, { useState } from 'react';
import type { Template } from '../../types';
import { TemplateThumbnail } from '../common/TemplateThumbnail';
import { ArrowRight, Code, Eye, Bookmark, MessageSquare, Layers, Sparkles } from 'lucide-react';
import { getTemplateCommissionUrl } from '../../utils/whatsapp';

interface Props {
  templates: Template[];
  onSelectTemplate: (template: Template, initialTab?: 'preview' | 'code' | 'prompt') => void;
  onNavigate: (view: string, categoryFilter?: string) => void;
  onToggleSave: (templateId: string) => void;
  isSaved: (templateId: string) => boolean;
}

export const HomeView: React.FC<Props> = ({
  templates,
  onSelectTemplate,
  onNavigate,
  onToggleSave,
  isSaved
}) => {
  const [heroIndex, setHeroIndex] = useState(0);

  const featuredTemplates = templates.filter(t => t.featured);
  const recentTemplates = [...templates].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).slice(0, 4);

  // Prominent hero showcase plates across real templates
  const heroShowcaseList = [
    templates.find(t => t.slug === 'raso-mandeh-padang') || templates[0],
    templates.find(t => t.slug === 'savore-cafe') || templates[1],
    templates.find(t => t.slug === 'senja-angkringan') || templates[2],
    templates.find(t => t.slug === 'sipara-beverage') || templates[3],
  ];

  const currentHeroTemplate = heroShowcaseList[heroIndex] || templates[0];

  const categories = [
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
              <span className="hero-badge">DIGITAL DESIGN ARCHIVE</span>
              <span>EST. 2026</span>
              <span>VERIFIED ANTI-SLOP SPEC</span>
            </div>
            <h1 className="hero-headline">
              Production-grade website templates designed with editorial rigor.
            </h1>
            <p className="hero-paragraph">
              Inspect semantic source code, copy structured AI design prompts, test real responsive viewports, and commission bespoke web projects. Crafted by senior engineers to eliminate generic AI patterns.
            </p>
            <div className="hero-actions">
              <button className="btn-hero-primary" onClick={() => onNavigate('templates')}>
                <span>Explore All Templates ({templates.length})</span>
                <ArrowRight size={15} />
              </button>
              <button className="btn-hero-secondary" onClick={() => onNavigate('categories')}>
                <Layers size={15} />
                <span>Kategori Etalase</span>
              </button>
            </div>
          </div>

          {/* Hero Interactive Spotlight Etalase */}
          <div className="hero-visual-col">
            <div className="hero-etalase-card">
              {/* Etalase Switcher Tabs */}
              <div className="hero-etalase-tabs">
                {heroShowcaseList.map((item, idx) => (
                  <button
                    key={item.id}
                    className={`hero-tab-btn ${heroIndex === idx ? 'active' : ''}`}
                    onClick={() => setHeroIndex(idx)}
                  >
                    <span className="mono">0{idx + 1}</span>
                    <span className="tab-name">{item.title}</span>
                  </button>
                ))}
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
                    <span>Inspect & Preview</span>
                  </button>
                  <a
                    href={getTemplateCommissionUrl(currentHeroTemplate.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-action-commission"
                    onClick={e => e.stopPropagation()}
                  >
                    <Sparkles size={13} />
                    <span>Commission Custom</span>
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
              <span className="section-kicker mono">CURATED HIGHLIGHTS</span>
              <h2 className="section-title">Selected Archive Releases</h2>
            </div>
            <button className="section-link-btn" onClick={() => onNavigate('templates')}>
              <span>View full catalog</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="templates-grid">
            {featuredTemplates.map(template => (
              <div key={template.id} className="template-card">
                <div className="card-thumb-container" onClick={() => onSelectTemplate(template)}>
                  <TemplateThumbnail template={template} />
                  <div className="card-hover-overlay">
                    <span className="overlay-btn">Inspect & Preview</span>
                  </div>
                </div>

                <div className="card-content">
                  <div className="card-meta-row">
                    <span className="card-category mono">{template.category.toUpperCase()}</span>
                    <button
                      className={`card-save-btn ${isSaved(template.id) ? 'saved' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleSave(template.id);
                      }}
                      title={isSaved(template.id) ? 'Remove from collection' : 'Save to collection'}
                      aria-label="Save template"
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
                      <span>Preview</span>
                    </button>
                    <button className="btn-action-ghost" onClick={() => onSelectTemplate(template, 'code')}>
                      <Code size={13} />
                      <span>Code</span>
                    </button>
                    <a
                      href={getTemplateCommissionUrl(template.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-action-commission"
                      title={`Commission similar design for ${template.title}`}
                      onClick={e => e.stopPropagation()}
                    >
                      <MessageSquare size={13} />
                      <span>Commission</span>
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
              <span className="section-kicker mono">SYSTEMATIC TAXONOMY</span>
              <h2 className="section-title">Browse by Discipline & Context</h2>
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
                  <span className="cat-count mono">{cat.count} AVAILABLE</span>
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
              <span className="section-kicker mono">TIMELINE ARCHIVE</span>
              <h2 className="section-title">Recently Published Templates</h2>
            </div>
          </div>

          <div className="recent-table">
            <div className="recent-table-head mono">
              <span>PUBLISHED</span>
              <span>TEMPLATE</span>
              <span>CATEGORY</span>
              <span>TECH STACK</span>
              <span>ACTION</span>
            </div>
            {recentTemplates.map(item => (
              <div key={item.id} className="recent-row" onClick={() => onSelectTemplate(item)}>
                <span className="mono recent-date">{item.publishedAt}</span>
                <span className="recent-name">{item.title}</span>
                <span className="recent-cat mono">{item.category}</span>
                <span className="recent-tech mono">{item.technologies.slice(0, 2).join(', ')}</span>
                <span className="recent-action">
                  <button className="recent-view-btn" onClick={(e) => { e.stopPropagation(); onSelectTemplate(item); }}>
                    Inspect
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
