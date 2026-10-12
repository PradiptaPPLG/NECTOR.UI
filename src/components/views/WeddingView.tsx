import React, { useState } from 'react';
import type { Template } from '../../types';
import { TemplateThumbnail } from '../common/TemplateThumbnail';
import { Eye, Code, MessageSquare, Bookmark, CheckCircle } from 'lucide-react';
import { getTemplateCommissionUrl, getGeneralCommissionUrl } from '../../utils/whatsapp';

interface Props {
  templates: Template[];
  onSelectTemplate: (template: Template, initialTab?: 'preview' | 'code' | 'prompt') => void;
  isSaved: (id: string) => boolean;
  onToggleSave: (id: string) => void;
}

export const WeddingView: React.FC<Props> = ({
  templates,
  onSelectTemplate,
  isSaved,
  onToggleSave
}) => {
  const [activeSubcategory, setActiveSubcategory] = useState<string>('all');

  const weddingTemplates = templates.filter(t => t.category === 'wedding');

  const subcategories = [
    { id: 'all', label: 'All Directions' },
    { id: 'minimal-editorial', label: 'Minimal Editorial (Parisian)' },
    { id: 'romantic-botanical', label: 'Romantic Botanical (Tuscan)' },
  ];

  const filtered = activeSubcategory === 'all'
    ? weddingTemplates
    : weddingTemplates.filter(t => t.weddingSubcategory === activeSubcategory);

  return (
    <div className="wedding-view">
      <div className="container">
        {/* Curated Editorial Wedding Masthead */}
        <div className="wedding-masthead">
          <div className="wm-meta mono">
            <span className="wm-badge">SPECIALIZED ATELIER COLLECTION</span>
            <span>EDITION 2026</span>
          </div>
          <h1 className="wm-headline">
            Contemporary wedding invitations and celebration monographs.
          </h1>
          <p className="wm-desc">
            Moving beyond kitsch floral templates and generic calligraphy scripts. Our wedding collections are art-directed like European literary monographs and luxury architectural dossiers, featuring working RSVP systems and weekend travel schedules.
          </p>

          <div className="wm-highlights-row">
            <div className="wm-stat">
              <span className="mono num">06</span>
              <span className="label">Aesthetic Directions</span>
            </div>
            <div className="wm-stat">
              <span className="mono num">100%</span>
              <span className="label">Live RSVP Logic</span>
            </div>
            <div className="wm-stat">
              <span className="mono num">0ms</span>
              <span className="label">Zero Generic Slop</span>
            </div>
          </div>
        </div>

        {/* Subcategory Filter Tabs */}
        <div className="wedding-filter-bar">
          <span className="w-filter-label mono">DESIGN DIRECTION:</span>
          <div className="w-subcat-tabs">
            {subcategories.map(cat => (
              <button
                key={cat.id}
                className={`w-subcat-btn ${activeSubcategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveSubcategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Templates Showcase */}
        <div className="wedding-grid">
          {filtered.map(template => (
            <div key={template.id} className="wedding-card">
              <div
                className="w-thumb-box"
                onClick={() => onSelectTemplate(template, 'preview')}
              >
                <TemplateThumbnail template={template} />
                <div className="w-overlay">
                  <span>Explore Monograph & RSVP</span>
                </div>
              </div>

              <div className="w-card-body">
                <div className="w-meta-top">
                  <span className="w-subtag mono">{template.weddingSubcategory?.replace('-', ' ').toUpperCase()}</span>
                  <button
                    className={`card-save-btn ${isSaved(template.id) ? 'saved' : ''}`}
                    onClick={() => onToggleSave(template.id)}
                    title={isSaved(template.id) ? 'Remove from collection' : 'Save to collection'}
                    aria-label="Save wedding template"
                  >
                    <Bookmark size={15} />
                  </button>
                </div>

                <h3 className="w-title" onClick={() => onSelectTemplate(template, 'preview')}>
                  {template.title}
                </h3>
                <p className="w-desc">{template.tagline}</p>

                <div className="w-features-list">
                  {template.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="w-feat-item">
                      <CheckCircle size={13} className="w-feat-icon" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="w-actions">
                  <button
                    className="w-btn-primary"
                    onClick={() => onSelectTemplate(template, 'preview')}
                  >
                    <Eye size={13} />
                    <span>Live Preview</span>
                  </button>
                  <button
                    className="w-btn-code"
                    onClick={() => onSelectTemplate(template, 'code')}
                  >
                    <Code size={13} />
                    <span>Inspect Code</span>
                  </button>
                  <a
                    href={getTemplateCommissionUrl(template.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-btn-commission"
                    title={`Commission bespoke wedding website inspired by ${template.title}`}
                  >
                    <MessageSquare size={13} />
                    <span>Commission This Design</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Wedding Commission Atelier Banner */}
        <div className="wedding-commission-dossier">
          <div className="wcd-left">
            <span className="mono wcd-badge">BESPOKE WEDDING SERVICE</span>
            <h2>Commission a Custom Celebration Website</h2>
            <p>
              Collaborate directly with our studio to translate your venue, weekend itinerary, dress code, and guest list into a timeless digital monograph with custom domain hosting.
            </p>
          </div>
          <div className="wcd-right">
            <a
              href={getGeneralCommissionUrl('Custom Wedding Website Commission')}
              target="_blank"
              rel="noopener noreferrer"
              className="wcd-btn"
            >
              <MessageSquare size={16} />
              <span>Inquire via WhatsApp (+62 852-1958-3336)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
