import React from 'react';
import type { Template } from '../../types';
import { TemplateThumbnail } from '../common/TemplateThumbnail';
import { Bookmark, Eye, Code, MessageSquare, Trash2, ArrowRight } from 'lucide-react';
import { getTemplateCommissionUrl } from '../../utils/whatsapp';

interface Props {
  templates: Template[];
  savedIds: string[];
  onSelectTemplate: (template: Template, initialTab?: 'preview' | 'code' | 'prompt') => void;
  onToggleSave: (id: string) => void;
  onNavigateToGallery: () => void;
  onClearCollection: () => void;
}

export const CollectionView: React.FC<Props> = ({
  templates,
  savedIds,
  onSelectTemplate,
  onToggleSave,
  onNavigateToGallery,
  onClearCollection
}) => {
  const savedTemplates = templates.filter(t => savedIds.includes(t.id));

  return (
    <div className="collection-view">
      <div className="container">
        <div className="coll-header">
          <div>
            <span className="mono badge-subtle">KOLEKSI PRIBADI</span>
            <h1 className="coll-heading">Koleksi yang Kamu Simpan</h1>
            <p className="coll-sub">
              Template yang kamu tandai tersimpan di memori browser lokal. Kamu dapat menginspeksi kode sumbernya kapan saja atau menjadikannya acuan untuk memesan website kustom.
            </p>
          </div>

          {savedTemplates.length > 0 && (
            <div className="coll-header-actions">
              <span className="mono coll-count">{savedTemplates.length} TERSIMPAN</span>
              <button className="coll-clear-btn" onClick={onClearCollection}>
                <Trash2 size={13} />
                <span>Hapus Semua</span>
              </button>
            </div>
          )}
        </div>

        {savedTemplates.length === 0 ? (
          <div className="coll-empty">
            <div className="empty-icon mono">
              <Bookmark size={32} />
            </div>
            <h3>Koleksi kamu masih kosong</h3>
            <p>
              Kamu belum menyimpan template apa pun. Klik ikon bookmark pada kartu template di katalog untuk menyimpannya di sini.
            </p>
            <button className="btn-explore-collection" onClick={onNavigateToGallery}>
              <span>Jelajahi Katalog Template</span>
              <ArrowRight size={14} />
            </button>
          </div>
        ) : (
          <div className="templates-grid">
            {savedTemplates.map(template => (
              <div key={template.id} className="template-card">
                <div className="card-thumb-container" onClick={() => onSelectTemplate(template)}>
                  <TemplateThumbnail template={template} />
                  <div className="card-hover-overlay">
                    <span className="overlay-btn">Inspeksi &amp; Preview</span>
                  </div>
                </div>

                <div className="card-content">
                  <div className="card-meta-row">
                    <span className="card-category mono">{template.category.toUpperCase()}</span>
                    <button
                      className="card-save-btn saved"
                      onClick={() => onToggleSave(template.id)}
                      title="Hapus dari koleksi tersimpan"
                      aria-label="Hapus dari koleksi"
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
                      <span>Kode</span>
                    </button>
                    <a
                      href={getTemplateCommissionUrl(template.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-action-commission"
                      title={`Pesan website serupa untuk ${template.title}`}
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
