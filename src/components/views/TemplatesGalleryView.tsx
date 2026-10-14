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
            <span className="mono badge-subtle">TEMPLATE CATALOG</span>
            <h1 className="gallery-heading">Production Website Templates</h1>
            <p className="gallery-sub">
              Explore meticulously art-directed digital systems. Inspect real source files, test responsive viewports, and copy reconstructed AI prompts.
            </p>
          </div>

          <div className="gallery-stats mono">
            <span>INDEX COUNT: {filteredTemplates.length} OF {templates.length}</span>
            <span>FORMAT: HTML5 / REACT / TS</span>
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
              <option value="featured">Sort: Featured</option>
              <option value="newest">Sort: Newest</option>
              <option value="alphabetical">Sort: Alphabetical (A-Z)</option>
            </select>
          </div>
        </div>

        {/* Grid or Empty State */}
        {filteredTemplates.length === 0 ? (
          <div className="gallery-empty-state">
            <div className="empty-icon mono">00</div>
            <h3>No templates match your criteria</h3>
            <p>
              We couldn't find any design matching "{searchQuery}". Try selecting another category or resetting the search filter.
            </p>
            <button
              className="btn-reset-filters"
              onClick={() => {
                onSearchChange('');
                onSelectCategory('all');
              }}
            >
              Reset Search & Filters
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
                    <span className="overlay-btn">Open Preview & Inspector</span>
                  </div>
                </div>

                {/* Content */}
                <div className="card-content">
                  <div className="card-meta-row">
                    <span className="card-category mono">{template.category.toUpperCase()}</span>
                    <button
                      className={`card-save-btn ${isSaved(template.id) ? 'saved' : ''}`}
                      onClick={() => onToggleSave(template.id)}
                      title={isSaved(template.id) ? 'Remove from collection' : 'Save to collection'}
                      aria-label="Save template"
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
                      title="Open interactive viewport preview"
                    >
                      <Eye size={13} />
                      <span>Preview</span>
                    </button>
                    <button
                      className="btn-action-ghost"
                      onClick={() => onSelectTemplate(template, 'code')}
                      title="Inspect source code"
                    >
                      <Code size={13} />
                      <span>Code</span>
                    </button>
                    <button
                      className="btn-action-ghost"
                      onClick={() => onSelectTemplate(template, 'prompt')}
                      title="Inspect generation prompt"
                    >
                      <Sparkles size={13} />
                      <span>Prompt</span>
                    </button>
                    <a
                      href={getTemplateCommissionUrl(template.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-action-commission"
                      title={`Commission similar design on WhatsApp for ${template.title}`}
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
        )}
      </div>
    </div>
  );
};
