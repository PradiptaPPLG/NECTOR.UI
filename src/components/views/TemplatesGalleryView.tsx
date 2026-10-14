import React, { useState, useMemo } from 'react';
import type { Template } from '../../types';
import { TemplateThumbnail } from '../common/TemplateThumbnail';
import { Eye, Code, Sparkles, MessageSquare, Bookmark, ArrowUpDown } from 'lucide-react';
import { getTemplateCommissionUrl } from '../../utils/whatsapp';

interface Props {
  templates: Template[];
  onSelectTemplate: (template: Template, initialTab?: 'preview' | 'code' | 'prompt') => void;
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  isSaved: (id: string) => boolean;
  onToggleSave: (id: string) => void;
}

export const TemplatesGalleryView: React.FC<Props> = ({
  templates,
  onSelectTemplate,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  isSaved,
  onToggleSave
}) => {
  const [sortBy, setSortBy] = useState<'featured' | 'newest' | 'alphabetical'>('featured');

  const categories = [
    { id: 'all', label: 'Semua Etalase' },
    { id: 'buah', label: 'Toko Buah' },
    { id: 'perpustakaan', label: 'Perpustakaan' },
    { id: 'kasir', label: 'Kasir & POS' },
    { id: 'padang', label: 'RM Padang' },
    { id: 'cafe', label: 'Cafe & Angkringan' },
    { id: 'beverage', label: 'Minuman Segar' },
    { id: 'bakery', label: 'Bakery' },
    { id: 'florist', label: 'Florist' },
    { id: 'barber', label: 'Barber' },
    { id: 'pottery', label: 'Keramik' },
    { id: 'organik', label: 'Lokal Organik' },
  ];

  const filteredTemplates = useMemo(() => {
    let result = templates.filter(t => {
      const matchCat = selectedCategory === 'all' || t.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        t.title.toLowerCase().includes(q) ||
        t.tagline.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q) ||
        t.tags.some(tag => tag.toLowerCase().includes(q)) ||
        t.technologies.some(tech => tech.toLowerCase().includes(q));

      return matchCat && matchQuery;
    });

    if (sortBy === 'newest') {
      result.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    } else if (sortBy === 'alphabetical') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      // featured first, then newest
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [templates, selectedCategory, searchQuery, sortBy]);

  return (
    <div className="gallery-view">
      <div className="container">
        {/* Page Header */}
        <div className="gallery-header">
          <div className="gallery-title-group">
            <span className="mono badge-subtle">KATALOG TEMPLATE</span>
            <h1 className="gallery-heading">Koleksi Template Website Siap Pakai</h1>
            <p className="gallery-sub">
              Eksplorasi sistem web fungsional yang dirancang cermat. Inspeksi kode sumber asli, uji responsivitas viewport layar, dan salin prompt AI terstruktur.
            </p>
          </div>

          <div className="gallery-stats mono">
            <span>JUMLAH INDEX: {filteredTemplates.length} DARI {templates.length}</span>
            <span>FORMAT: HTML5 / VANILLA CSS / JS</span>
          </div>
        </div>

        {/* Filter and Sort Toolbar */}
        <div className="gallery-toolbar">
          <div className="category-tabs">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => onSelectCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="sort-controls">
            <ArrowUpDown size={14} className="sort-icon" />
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as any)}
              className="sort-select mono"
            >
              <option value="featured">Urutkan: Unggulan</option>
              <option value="newest">Urutkan: Terbaru</option>
              <option value="alphabetical">Urutkan: Abjad (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Grid or Empty State */}
        {filteredTemplates.length === 0 ? (
          <div className="gallery-empty-state">
            <div className="empty-icon mono">00</div>
            <h3>Tidak ada template yang sesuai kriteria</h3>
            <p>
              Kami tidak menemukan desain yang cocok dengan "{searchQuery}". Coba pilih kategori lain atau atur ulang filter pencarian.
            </p>
            <button
              className="btn-reset-filters"
              onClick={() => {
                onSearchChange('');
                onSelectCategory('all');
              }}
            >
              Reset Pencarian & Filter
            </button>
          </div>
        ) : (
          <div className="templates-grid">
            {filteredTemplates.map(template => (
              <div key={template.id} className="template-card">
                {/* Visual Thumbnail */}
                <div
                  className="card-thumb-container"
                  onClick={() => onSelectTemplate(template, 'preview')}
                >
                  <TemplateThumbnail template={template} />
                  <div className="card-hover-overlay">
                    <span className="overlay-btn">Buka Pratinjau & Inspeksi</span>
                  </div>
                </div>

                {/* Content */}
                <div className="card-content">
                  <div className="card-meta-row">
                    <span className="card-category mono">{template.category.toUpperCase()}</span>
                    <button
                      className={`card-save-btn ${isSaved(template.id) ? 'saved' : ''}`}
                      onClick={() => onToggleSave(template.id)}
                      title={isSaved(template.id) ? 'Hapus dari koleksi tersimpan' : 'Simpan ke koleksi pribadi'}
                      aria-label="Simpan template"
                    >
                      <Bookmark size={15} />
                    </button>
                  </div>

                  <h2
                    className="card-title"
                    onClick={() => onSelectTemplate(template, 'preview')}
                  >
                    {template.title}
                  </h2>
                  <p className="card-desc">{template.tagline}</p>

                  <div className="card-tech-chips mono">
                    {template.technologies.slice(0, 3).map((tech, i) => (
                      <span key={i} className="tech-chip">{tech}</span>
                    ))}
                  </div>

                  {/* Actions Hierarchy */}
                  <div className="card-actions-row">
                    <button
                      className="btn-action-primary"
                      onClick={() => onSelectTemplate(template, 'preview')}
                      title="Buka pratinjau viewport interaktif"
                    >
                      <Eye size={13} />
                      <span>Pratinjau</span>
                    </button>
                    <button
                      className="btn-action-ghost"
                      onClick={() => onSelectTemplate(template, 'code')}
                      title="Inspeksi kode sumber"
                    >
                      <Code size={13} />
                      <span>Kode</span>
                    </button>
                    <button
                      className="btn-action-ghost"
                      onClick={() => onSelectTemplate(template, 'prompt')}
                      title="Inspeksi spesifikasi prompt AI"
                    >
                      <Sparkles size={13} />
                      <span>Prompt</span>
                    </button>
                    <a
                      href={getTemplateCommissionUrl(template.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-action-commission"
                      title={`Pesan website serupa via WhatsApp untuk ${template.title}`}
                      onClick={e => e.stopPropagation()}
                    >
                      <MessageSquare size={13} />
                      <span>Pesan Kustom</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
