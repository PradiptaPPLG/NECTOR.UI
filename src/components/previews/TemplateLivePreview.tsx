import React, { useState } from 'react';
import type { Template } from '../../types';
import { ExternalLink, RotateCw, FileCode } from 'lucide-react';

interface Props {
  template: Template;
  viewportWidth: '100%' | '768px' | '375px';
  onToast: (msg: string) => void;
}

export const TemplateLivePreview: React.FC<Props> = ({ template, viewportWidth, onToast }) => {
  const [iframeKey, setIframeKey] = useState(0);

  return (
    <div className="preview-canvas-wrapper" style={{ width: viewportWidth }}>
      <div className="iframe-controls-bar">
        <div className="iframe-meta-left mono">
          <span className="live-dot">●</span>
          <span className="file-badge"><FileCode size={13} /> {template.htmlFolderPath || template.htmlPath}</span>
          <span className="reload-hint">(Edit file ini langsung & klik reload)</span>
        </div>
        <div className="iframe-actions-right">
          <button
            className="btn-iframe-reload mono"
            onClick={() => {
              setIframeKey(k => k + 1);
              onToast('Template HTML dimuat ulang!');
            }}
            title="Reload HTML untuk melihat editan terbaru dari file"
          >
            <RotateCw size={13} />
            <span>Reload HTML</span>
          </button>
          <a
            href={template.htmlPath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-iframe-open-tab mono"
            title="Buka template mandiri ini di tab baru"
          >
            <ExternalLink size={13} />
            <span>Buka di Tab Baru</span>
          </a>
        </div>
      </div>
      <div className="iframe-frame-holder">
        <iframe
          key={iframeKey}
          src={template.htmlPath}
          title={template.title}
          className="live-template-iframe"
        />
      </div>
    </div>
  );
};

