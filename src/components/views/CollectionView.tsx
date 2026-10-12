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
            <span className="mono badge-subtle">PERSONAL ARCHIVE</span>
            <h1 className="coll-heading">My Saved Collection</h1>
            <p className="coll-sub">
              Your bookmarked templates are saved locally in your browser storage. Inspect their source code anytime or use them as a reference to commission a tailored website.
            </p>
          </div>

          {savedTemplates.length > 0 && (
            <div className="coll-header-actions">
              <span className="mono coll-count">{savedTemplates.length} SAVED</span>
              <button className="coll-clear-btn" onClick={onClearCollection}>
                <Trash2 size={13} />
                <span>Clear All</span>
              </button>
            </div>
          )}
        </div>

        {savedTemplates.length === 0 ? (
          <div className="coll-empty">
            <div className="empty-icon mono">
              <Bookmark size={32} />
            </div>
            <h3>Your collection is empty</h3>
            <p>
              You haven't bookmarked any website templates yet. Click the bookmark icon on any template card in the catalog to add it here.
            </p>
            <button className="btn-explore-collection" onClick={onNavigateToGallery}>
              <span>Explore Template Catalog</span>
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
                    <span className="overlay-btn">Inspect & Preview</span>
                  </div>
                </div>

                <div className="card-content">
                  <div className="card-meta-row">
                    <span className="card-category mono">{template.category.toUpperCase()}</span>
                    <button
                      className="card-save-btn saved"
                      onClick={() => onToggleSave(template.id)}
                      title="Remove from collection"
                      aria-label="Remove from collection"
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
        )}
      </div>
    </div>
  );
};
