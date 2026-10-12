import React, { useState, useEffect, useMemo, useRef } from 'react';
import type { Template } from '../../types';
import { TemplateLivePreview } from '../previews/TemplateLivePreview';
import {
  ArrowLeft,
  Monitor,
  Tablet,
  Smartphone,
  Code,
  Sparkles,
  Eye,
  Copy,
  Check,
  Bookmark,
  MessageSquare,
  ArrowUpRight,
  Terminal,
  FileCode,
  Layers,
  CheckCircle,
  Download,
  ExternalLink,
  RefreshCw
} from 'lucide-react';
import { getTemplateCommissionUrl } from '../../utils/whatsapp';

interface Props {
  template: Template;
  onBack: () => void;
  isSaved: boolean;
  onToggleSave: () => void;
  onToast: (msg: string) => void;
  initialTab?: 'preview' | 'code' | 'prompt';
}

export const TemplateDetailView: React.FC<Props> = ({
  template,
  onBack,
  isSaved,
  onToggleSave,
  onToast,
  initialTab = 'preview'
}) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'prompt'>(initialTab);
  const [viewportWidth, setViewportWidth] = useState<'100%' | '768px' | '375px'>('100%');
  const [selectedFileIdx, setSelectedFileIdx] = useState<number>(0);
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [loadedSourceCode, setLoadedSourceCode] = useState<string | null>(null);
  const [isLoadingSource, setIsLoadingSource] = useState(false);
  const codeSectionRef = useRef<HTMLElement>(null);

  // Synchronize activeTab when initialTab or template changes and scroll to code if code tab
  useEffect(() => {
    setActiveTab(initialTab);
    setSelectedFileIdx(0);
    if (initialTab === 'code') {
      const timer = setTimeout(() => {
        codeSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [initialTab, template.id]);

  // Dynamically load the full standalone HTML file from disk via template.htmlPath
  useEffect(() => {
    setLoadedSourceCode(null);
    if (template.htmlPath) {
      setIsLoadingSource(true);
      fetch(template.htmlPath)
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          return res.text();
        })
        .then((text) => {
          setLoadedSourceCode(text);
        })
        .catch((err) => {
          console.warn('Could not fetch standalone HTML file:', err);
        })
        .finally(() => {
          setIsLoadingSource(false);
        });
    }
  }, [template.id, template.htmlPath]);

  const selectedFile = template.sourceFiles[selectedFileIdx] || template.sourceFiles[0];

  const primaryFileName = useMemo(() => {
    if (template.htmlPath) {
      return template.htmlPath.split('/').pop() || `${template.slug}.html`;
    }
    return template.sourceFiles[0]?.filename || `${template.slug}.html`;
  }, [template.htmlPath, template.sourceFiles, template.slug]);

  const activeFileName = (selectedFileIdx === 0 && template.htmlPath)
    ? primaryFileName
    : selectedFile?.filename || primaryFileName;

  const activeFilePath = (selectedFileIdx === 0 && template.htmlPath)
    ? (template.htmlFolderPath || template.htmlPath.replace(/^\//, ''))
    : (template.htmlFolderPath || selectedFile?.filename || primaryFileName);

  const activeContent = useMemo(() => {
    // If viewing the primary file and full standalone code was fetched, display it
    if (selectedFileIdx === 0 && loadedSourceCode) {
      return loadedSourceCode;
    }
    return selectedFile?.content || '';
  }, [selectedFileIdx, loadedSourceCode, selectedFile]);

  const lineCount = useMemo(() => {
    if (!activeContent) return 0;
    return activeContent.split('\n').length;
  }, [activeContent]);

  const fileSizeKb = useMemo(() => {
    if (!activeContent) return '0.0';
    return (new Blob([activeContent]).size / 1024).toFixed(1);
  }, [activeContent]);

  const lineNumbersText = useMemo(() => {
    return Array.from({ length: lineCount }, (_, i) => i + 1).join('\n');
  }, [lineCount]);

  const handleCopyCode = () => {
    if (!activeContent) return;
    navigator.clipboard.writeText(activeContent);
    setCopiedCode(true);
    onToast(`Source file ${activeFileName} (${lineCount} baris) tersalin ke clipboard!`);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleDownloadCode = () => {
    if (!activeContent) return;
    const blob = new Blob([activeContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = activeFileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    onToast(`File ${activeFileName} (${fileSizeKb} KB) berhasil diunduh!`);
  };

  const handleCopyFullPrompt = () => {
    const fullPromptText = `PROMPT SPECIFICATION FOR ${template.title.toUpperCase()}

DESIGN DIRECTION:
${template.prompt.designDirection}

LAYOUT & GRID:
${template.prompt.layoutAndGrid}

TYPOGRAPHY & COLOR PALETTE:
${template.prompt.typographyAndColor}

INTERACTIVE STATES:
${template.prompt.interactions}

TECHNICAL REQUIREMENTS:
${template.prompt.technicalRequirements}
`;
    navigator.clipboard.writeText(fullPromptText);
    setCopiedPrompt(true);
    onToast(`AI Prompt specification copied to clipboard!`);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <div className="template-detail-view">
      {/* Detail Top Subheader */}
      <div className="detail-topbar">
        <div className="container detail-topbar-inner">
          <button className="btn-back-catalog" onClick={onBack}>
            <ArrowLeft size={16} />
            <span>Back to Catalog</span>
          </button>

          <div className="detail-top-tabs">
            <button
              className={`top-tab-btn ${activeTab === 'preview' ? 'active' : ''}`}
              onClick={() => setActiveTab('preview')}
            >
              <Eye size={15} />
              <span>Live Preview</span>
            </button>
            <button
              className={`top-tab-btn ${activeTab === 'code' ? 'active' : ''}`}
              onClick={() => setActiveTab('code')}
            >
              <Code size={15} />
              <span>Code Inspector ({template.sourceFiles.length})</span>
            </button>
            <button
              className={`top-tab-btn ${activeTab === 'prompt' ? 'active' : ''}`}
              onClick={() => setActiveTab('prompt')}
            >
              <Sparkles size={15} />
              <span>AI Prompt Engine</span>
            </button>
          </div>

          <div className="detail-top-actions">
            <button
              className={`btn-top-save ${isSaved ? 'saved' : ''}`}
              onClick={onToggleSave}
              title={isSaved ? 'Saved in collection' : 'Save to collection'}
            >
              <Bookmark size={15} />
              <span>{isSaved ? 'Saved' : 'Save'}</span>
            </button>
            <a
              href={getTemplateCommissionUrl(template.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-top-commission"
              title="Open WhatsApp consultation"
            >
              <MessageSquare size={15} />
              <span>Commission Similar</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </div>

      <div className="container detail-content-body">
        {/* Template Metadata Dossier Header */}
        <section className="detail-header-card">
          <div className="dhc-left">
            <div className="dhc-meta-row mono">
              <span className="badge-category">{template.category.toUpperCase()}</span>
              {template.weddingSubcategory && (
                <span className="badge-wedding">{template.weddingSubcategory.toUpperCase()}</span>
              )}
              <span>RELEASED: {template.publishedAt}</span>
              <span className="status-live">● VERIFIED PRODUCTION CODE</span>
            </div>
            <h1 className="dhc-title">{template.title}</h1>
            <p className="dhc-tagline">{template.tagline}</p>
            <p className="dhc-desc">{template.description}</p>
          </div>

          <div className="dhc-right">
            <div className="dhc-tech-box">
              <span className="mono dhc-box-label">ENGINEERING STACK</span>
              <div className="dhc-tech-pills mono">
                {template.technologies.map((t, idx) => (
                  <span key={idx} className="tech-pill">{t}</span>
                ))}
              </div>
            </div>

            <div className="dhc-commission-box">
              <span className="mono dhc-box-label">COMMISSIONING DIRECTIVE</span>
              <p className="dhc-box-p">
                Want this design customized for your business with bespoke copy, custom brand identity, and production hosting?
              </p>
              <a
                href={getTemplateCommissionUrl(template.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-inquire-whatsapp"
              >
                <span>Inquire on WhatsApp (+62 852-1958-3336)</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* TAB 1: LIVE PREVIEW */}
        {activeTab === 'preview' && (
          <section className="detail-preview-section">
            <div className="viewport-controls-bar">
              <div className="vc-left">
                <span className="mono vc-label">VIEWPORT EMULATOR:</span>
                <div className="viewport-buttons-group">
                  <button
                    className={`vp-btn ${viewportWidth === '100%' ? 'active' : ''}`}
                    onClick={() => setViewportWidth('100%')}
                    title="Desktop (100% / 1440px)"
                  >
                    <Monitor size={15} />
                    <span>Desktop (1440px)</span>
                  </button>
                  <button
                    className={`vp-btn ${viewportWidth === '768px' ? 'active' : ''}`}
                    onClick={() => setViewportWidth('768px')}
                    title="Tablet (768px)"
                  >
                    <Tablet size={15} />
                    <span>Tablet (768px)</span>
                  </button>
                  <button
                    className={`vp-btn ${viewportWidth === '375px' ? 'active' : ''}`}
                    onClick={() => setViewportWidth('375px')}
                    title="Mobile (375px)"
                  >
                    <Smartphone size={15} />
                    <span>Mobile (375px)</span>
                  </button>
                </div>
              </div>

              <div className="vc-right mono">
                <span className="vc-notice">
                  {template.livePreviewAvailable ? '● LIVE INTERACTIVE IMPLEMENTATION' : '○ STATIC MOCKUP'}
                </span>
              </div>
            </div>

            {/* Live Interactive Viewport Display */}
            <div className="viewport-display-stage">
              <div className="viewport-outer-container">
                <TemplateLivePreview
                  template={template}
                  viewportWidth={viewportWidth}
                  onToast={onToast}
                />
              </div>
            </div>

            {/* Feature Checklist & Usage Instructions */}
            <div className="detail-info-grid">
              <div className="info-card">
                <h3 className="info-title">
                  <CheckCircle size={17} color="#C44525" />
                  <span>Implemented Architecture Features</span>
                </h3>
                <ul className="features-checklist">
                  {template.features.map((feat, idx) => (
                    <li key={idx} className="feat-li">
                      <span className="bullet mono">0{idx + 1}</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="info-card">
                <h3 className="info-title">
                  <Terminal size={17} color="#141416" />
                  <span>Deployment & Usage Guidelines</span>
                </h3>
                <ol className="usage-steps-list">
                  {template.usageInstructions.map((inst, idx) => (
                    <li key={idx} className="usage-li">
                      <span>{inst}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>
        )}

        {/* TAB 2: CODE INSPECTOR */}
        {activeTab === 'code' && (
          <section ref={codeSectionRef} className="detail-code-section">
            <div className="code-inspector-container">
              {/* File Tree Navigator */}
              <div className="file-tree-sidebar">
                <div className="ft-header mono">
                  <Layers size={14} />
                  <span>PROJECT SOURCE FILES</span>
                </div>
                <div className="ft-list">
                  {template.sourceFiles.map((file, idx) => {
                    const itemFileName = (idx === 0 && template.htmlPath)
                      ? primaryFileName
                      : file.filename;
                    return (
                      <button
                        key={file.filename}
                        className={`ft-item mono ${selectedFileIdx === idx ? 'active' : ''}`}
                        onClick={() => setSelectedFileIdx(idx)}
                      >
                        <FileCode size={14} className="ft-icon" />
                        <div className="ft-item-texts">
                          <span className="ft-name">{itemFileName}</span>
                          {idx === 0 && template.htmlPath && (
                            <span className="ft-badge-standalone">STANDALONE (HTML+CSS+JS)</span>
                          )}
                        </div>
                        <span className="ft-lang">{file.language.toUpperCase()}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="ft-footer">
                  <div className="ft-source-path mono">
                    <span className="ft-path-label">LOKASI FILE:</span>
                    <span className="ft-path-val">{activeFilePath}</span>
                  </div>
                  <span className="mono ft-note">
                    File mandiri produksi dengan kode lengkap dan siap jalan tanpa build tool.
                  </span>
                </div>
              </div>

              {/* Code Content Area */}
              <div className="code-content-pane">
                <div className="cc-header">
                  <div className="cc-file-info mono">
                    <span className="cc-filename font-bold">{activeFileName}</span>
                    <span className="cc-badge-metric">{lineCount.toLocaleString()} baris</span>
                    <span className="cc-badge-metric">{fileSizeKb} KB</span>
                    {template.htmlPath && selectedFileIdx === 0 && (
                      <span className="cc-badge-status">● VERIFIED STANDALONE</span>
                    )}
                  </div>

                  <div className="cc-actions">
                    {template.htmlPath && (
                      <a
                        href={template.htmlPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-code-action"
                        title="Buka file HTML langsung di tab browser baru"
                      >
                        <ExternalLink size={13} />
                        <span>Buka di Tab Baru ↗</span>
                      </a>
                    )}
                    <button
                      className="btn-code-action"
                      onClick={handleDownloadCode}
                      title={`Unduh file ${activeFileName} lengkap ini`}
                    >
                      <Download size={13} />
                      <span>Unduh {activeFileName}</span>
                    </button>
                    <button className={`btn-copy-code ${copiedCode ? 'copied' : ''}`} onClick={handleCopyCode}>
                      {copiedCode ? <Check size={14} color="#FFFFFF" /> : <Copy size={14} />}
                      <span>{copiedCode ? 'Tersalin!' : `Salin Kode (${lineCount} Baris)`}</span>
                    </button>
                  </div>
                </div>

                {isLoadingSource ? (
                  <div className="code-loading-container mono">
                    <RefreshCw size={18} className="spin-icon" />
                    <span>Memuat source code lengkap dari {template.htmlPath}...</span>
                  </div>
                ) : (
                  <div className="cc-code-viewer mono">
                    <button
                      className={`btn-code-floating-copy ${copiedCode ? 'copied' : ''}`}
                      onClick={handleCopyCode}
                      title="Salin seluruh isi kode ke clipboard"
                    >
                      {copiedCode ? <Check size={13} color="#FFFFFF" /> : <Copy size={13} />}
                      <span>{copiedCode ? 'Kode Tersalin!' : 'Salin Kode'}</span>
                    </button>
                    <div className="code-viewer-layout">
                      <pre className="code-line-gutter" aria-hidden="true">
                        {lineNumbersText}
                      </pre>
                      <pre className="code-pre">
                        <code>{activeContent}</code>
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* TAB 3: PROMPT INSPECTOR */}
        {activeTab === 'prompt' && (
          <section className="detail-prompt-section">
            <div className="prompt-inspector-card">
              <div className="prompt-topbar">
                <div className="pt-title-group">
                  <span className="mono badge-subtle">
                    {template.prompt.isReconstructed ? 'SUGGESTED / RECONSTRUCTED SPEC' : 'ORIGINAL CRAFT SPEC'}
                  </span>
                  <h2>AI Prompt & Art Direction Blueprint</h2>
                  <p className="prompt-summary-text">{template.prompt.summary}</p>
                </div>

                <button className="btn-copy-full-prompt" onClick={handleCopyFullPrompt}>
                  {copiedPrompt ? <Check size={14} color="#C44525" /> : <Copy size={14} />}
                  <span>{copiedPrompt ? 'Copied Full Spec' : 'Copy Complete Prompt Spec'}</span>
                </button>
              </div>

              <div className="prompt-sections-stack">
                <div className="prompt-block">
                  <div className="pb-header mono">
                    <span className="pb-num">01</span>
                    <span>DESIGN DIRECTION & BRAND IDENTITY</span>
                  </div>
                  <div className="pb-body">
                    <p>{template.prompt.designDirection}</p>
                  </div>
                </div>

                <div className="prompt-block">
                  <div className="pb-header mono">
                    <span className="pb-num">02</span>
                    <span>LAYOUT, GRID & ASYMMETRIC RHYTHM</span>
                  </div>
                  <div className="pb-body">
                    <p>{template.prompt.layoutAndGrid}</p>
                  </div>
                </div>

                <div className="prompt-block">
                  <div className="pb-header mono">
                    <span className="pb-num">03</span>
                    <span>TYPOGRAPHY PAIRING & RESTRAINED PALETTE</span>
                  </div>
                  <div className="pb-body">
                    <p>{template.prompt.typographyAndColor}</p>
                  </div>
                </div>

                <div className="prompt-block">
                  <div className="pb-header mono">
                    <span className="pb-num">04</span>
                    <span>PHYSICAL INTERACTIONS & MICROANIMATIONS</span>
                  </div>
                  <div className="pb-body">
                    <p>{template.prompt.interactions}</p>
                  </div>
                </div>

                <div className="prompt-block">
                  <div className="pb-header mono">
                    <span className="pb-num">05</span>
                    <span>ACCESSIBILITY & TECHNICAL REQUIREMENTS</span>
                  </div>
                  <div className="pb-body">
                    <p>{template.prompt.technicalRequirements}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
