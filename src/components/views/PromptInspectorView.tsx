import React, { useState, useMemo } from 'react';
import {
  Copy,
  Check,
  Download,
  FileText,
  Sliders,
  Code,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Palette,
  Layers,
  Zap,
} from 'lucide-react';
import type { Template, MasterPromptSection } from '../../types';
import { getPromptSections, calculatePromptMetrics } from '../../utils/promptParser';

interface PromptInspectorViewProps {
  template: Template;
  onToast: (msg: string) => void;
}

export const PromptInspectorView: React.FC<PromptInspectorViewProps> = ({
  template,
  onToast,
}) => {
  const [viewMode, setViewMode] = useState<'structured' | 'raw' | 'parameters'>('structured');
  const [copiedFull, setCopiedFull] = useState(false);
  const [copiedSectionId, setCopiedSectionId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Parse prompt sections
  const sections = useMemo(() => {
    return getPromptSections(template.prompt);
  }, [template.prompt]);

  // Build full markdown prompt text
  const fullPromptText = useMemo(() => {
    if (template.prompt.masterPrompt) {
      return template.prompt.masterPrompt;
    }
    return `# MASTER PROMPT — REKONSTRUKSI ${template.title.toUpperCase()}

## 1. RINGKASAN & IDENTITAS
${template.prompt.summary}

## 2. ARAH DESAIN & IDENTITAS MEREK
${template.prompt.designDirection}

## 3. TATA LETAK & SISTEM GRID
${template.prompt.layoutAndGrid}

## 4. KOMBINASI TIPOGRAFI & PALET WARNA
${template.prompt.typographyAndColor}

## 5. INTERAKSI FISIK & MIKROANIMASI
${template.prompt.interactions}

## 6. AKSESIBILITAS & PERSYARATAN TEKNIS
${template.prompt.technicalRequirements}
`;
  }, [template]);

  // Calculate metrics
  const metrics = useMemo(() => {
    return calculatePromptMetrics(fullPromptText);
  }, [fullPromptText]);

  // Copy full prompt handler
  const handleCopyFullPrompt = () => {
    navigator.clipboard.writeText(fullPromptText);
    setCopiedFull(true);
    onToast(`Seluruh Master Prompt (${metrics.words.toLocaleString()} kata) berhasil disalin!`);
    setTimeout(() => setCopiedFull(false), 2000);
  };

  // Download markdown prompt file
  const handleDownloadMarkdown = () => {
    const blob = new Blob([fullPromptText], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${template.slug}-master-prompt.md`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    onToast(`Berkas master prompt ${template.slug}-master-prompt.md berhasil diunduh!`);
  };

  // Copy individual section handler
  const handleCopySection = (sec: MasterPromptSection) => {
    const sectionText = `## ${sec.number}. ${sec.title}\n\n${sec.content}`;
    navigator.clipboard.writeText(sectionText);
    setCopiedSectionId(sec.id);
    onToast(`Bagian [${sec.number} ${sec.title}] berhasil disalin!`);
    setTimeout(() => setCopiedSectionId(null), 2000);
  };

  // Filtered sections if user selects quick jump/filter
  const displayedSections = useMemo(() => {
    if (!activeFilter) return sections;
    return sections.filter((s) => s.id === activeFilter);
  }, [sections, activeFilter]);

  // Helper to render markdown text with color swatches & formatting
  const renderFormattedContent = (content: string) => {
    const lines = content.split('\n');

    return (
      <div className="prompt-rendered-content">
        {lines.map((line, idx) => {
          const trimmed = line.trim();

          // Empty line
          if (!trimmed) {
            return <div key={idx} className="prc-spacer" />;
          }

          // Subheaders: ###
          if (trimmed.startsWith('### ')) {
            return (
              <h4 key={idx} className="prc-subheading">
                {trimmed.replace(/^###\s+/, '')}
              </h4>
            );
          }

          // Sub-subheaders: ####
          if (trimmed.startsWith('#### ')) {
            return (
              <h5 key={idx} className="prc-sub-subheading">
                {trimmed.replace(/^####\s+/, '')}
              </h5>
            );
          }

          // Bullet points
          if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
            const itemText = trimmed.replace(/^[-*]\s+/, '');
            return (
              <div key={idx} className="prc-bullet-row">
                <span className="prc-bullet-dot">●</span>
                <span className="prc-bullet-text">{formatInlineFormatting(itemText)}</span>
              </div>
            );
          }

          // Numbered items
          const numMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);
          if (numMatch) {
            return (
              <div key={idx} className="prc-num-row">
                <span className="prc-num-badge mono">{numMatch[1].padStart(2, '0')}</span>
                <span className="prc-num-text">{formatInlineFormatting(numMatch[2])}</span>
              </div>
            );
          }

          // Standard paragraph
          return (
            <p key={idx} className="prc-p">
              {formatInlineFormatting(line)}
            </p>
          );
        })}
      </div>
    );
  };

  // Helper to parse bold, code, and hex colors
  const formatInlineFormatting = (text: string) => {
    // Regex matches:
    // 1. `code`
    // 2. **bold**
    // 3. Hex colors #FFFFFF or #FFF
    const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*|#[0-9a-fA-F]{6}\b|#[0-9a-fA-F]{3}\b)/g);

    return parts.map((part, i) => {
      if (part.startsWith('`') && part.endsWith('`')) {
        return (
          <code key={i} className="prc-inline-code mono">
            {part.slice(1, -1)}
          </code>
        );
      }
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="prc-strong">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (/^#[0-9a-fA-F]{3,6}$/.test(part)) {
        return (
          <span key={i} className="prc-color-chip mono">
            <span className="prc-color-preview" style={{ backgroundColor: part }} />
            <span>{part}</span>
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div className="prompt-inspector-card">
      {/* Top Header Card */}
      <div className="prompt-topbar">
        <div className="pt-title-group">
          <div className="pt-badge-row mono">
            <span className="badge-subtle">
              <Sparkles size={12} className="inline-icon" />
              {template.prompt.masterPrompt
                ? 'MASTER PROMPT AI REKONSTRUKSI PIXEL-PERFECT'
                : 'SPESIFIKASI ASLI NECTOR'}
            </span>
            <span className="badge-verified">
              <ShieldCheck size={12} className="inline-icon" />
              STANDAR ANTI-SLOP TERUJI
            </span>
          </div>

          <h2 className="pt-main-title">Prompt AI & Cetak Biru Rekonstruksi Desain</h2>
          <p className="prompt-summary-text">{template.prompt.summary}</p>

          {/* Metric Pills */}
          <div className="prompt-metrics-bar mono">
            <span className="pm-pill">
              <strong>{sections.length}</strong> Bab Spesifikasi
            </span>
            <span className="pm-pill">
              <strong>~{metrics.words.toLocaleString()}</strong> Kata
            </span>
            <span className="pm-pill">
              <strong>~{metrics.tokenEstimate.toLocaleString()}</strong> Estimasi Token AI
            </span>
            <span className="pm-pill target-models">
              Target: Claude 3.7 / Gemini 2.5 / GPT-4o / Antigravity
            </span>
          </div>
        </div>

        {/* Global Prompt Actions */}
        <div className="pt-actions-group">
          <button
            className={`btn-copy-full-prompt ${copiedFull ? 'copied' : ''}`}
            onClick={handleCopyFullPrompt}
            title="Salin seluruh instruksi prompt AI dalam format Markdown"
          >
            {copiedFull ? <Check size={14} color="#FFFFFF" /> : <Copy size={14} />}
            <span>{copiedFull ? 'Seluruh Prompt Tersalin!' : 'Salin Seluruh Master Prompt'}</span>
          </button>

          <button
            className="btn-download-prompt"
            onClick={handleDownloadMarkdown}
            title="Unduh master prompt sebagai file .md untuk digunakan di Cursor/Claude/Antigravity"
          >
            <Download size={14} />
            <span>Unduh .MD</span>
          </button>
        </div>
      </div>

      {/* View Mode Switcher & Quick Navigation */}
      <div className="prompt-controls-row">
        <div className="prompt-tabs-nav">
          <button
            className={`pt-tab-btn ${viewMode === 'structured' ? 'active' : ''}`}
            onClick={() => {
              setViewMode('structured');
              setActiveFilter(null);
            }}
          >
            <Layers size={14} />
            <span>Cetak Biru Terstruktur ({sections.length} Bab)</span>
          </button>
          <button
            className={`pt-tab-btn ${viewMode === 'raw' ? 'active' : ''}`}
            onClick={() => setViewMode('raw')}
          >
            <Code size={14} />
            <span>Teks Mentah Prompt (Raw Markdown)</span>
          </button>
          <button
            className={`pt-tab-btn ${viewMode === 'parameters' ? 'active' : ''}`}
            onClick={() => setViewMode('parameters')}
          >
            <Sliders size={14} />
            <span>Parameter Desain Inti</span>
          </button>
        </div>

        {/* Quick jump navigation (only in structured view) */}
        {viewMode === 'structured' && (
          <div className="prompt-quick-jump mono">
            <span className="pqj-label">Lompat Cepat:</span>
            <div className="pqj-pills">
              {activeFilter && (
                <button className="pqj-pill reset" onClick={() => setActiveFilter(null)}>
                  ✕ Tampilkan Semua
                </button>
              )}
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  className={`pqj-pill ${activeFilter === sec.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(activeFilter === sec.id ? null : sec.id)}
                  title={sec.title}
                >
                  <span>{sec.number}</span>
                  <span className="pqj-name">{sec.title.split('—')[0].trim()}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* VIEW 1: STRUCTURED SECTIONS */}
      {viewMode === 'structured' && (
        <div className="prompt-sections-stack">
          {displayedSections.map((sec) => {
            const isCopied = copiedSectionId === sec.id;
            const isWarningSec =
              sec.title.includes('LARANGAN') || sec.title.includes('JANGAN');
            const isCriteriaSec =
              sec.title.includes('KRITERIA') || sec.title.includes('PRIORITAS');

            return (
              <div
                key={sec.id}
                id={sec.id}
                className={`prompt-block ${isWarningSec ? 'pb-warning' : ''} ${
                  isCriteriaSec ? 'pb-criteria' : ''
                }`}
              >
                <div className="pb-header mono">
                  <div className="pb-header-left">
                    <span className="pb-num">{sec.number}</span>
                    <span className="pb-title">{sec.title}</span>
                  </div>

                  <button
                    className={`btn-copy-section ${isCopied ? 'copied' : ''}`}
                    onClick={() => handleCopySection(sec)}
                    title={`Salin bab ${sec.number} saja`}
                  >
                    {isCopied ? <Check size={12} color="#C44525" /> : <Copy size={12} />}
                    <span>{isCopied ? 'Tersalin' : 'Salin Bagian'}</span>
                  </button>
                </div>

                <div className="pb-body">
                  {renderFormattedContent(sec.content)}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* VIEW 2: RAW MARKDOWN VIEWER */}
      {viewMode === 'raw' && (
        <div className="prompt-raw-container">
          <div className="prc-top mono">
            <span className="prc-filename font-bold">{template.slug}-master-prompt.md</span>
            <button className="btn-copy-section" onClick={handleCopyFullPrompt}>
              {copiedFull ? <Check size={12} color="#C44525" /> : <Copy size={12} />}
              <span>{copiedFull ? 'Tersalin!' : 'Salin Markdown'}</span>
            </button>
          </div>
          <pre className="prompt-raw-pre mono">
            <code>{fullPromptText}</code>
          </pre>
        </div>
      )}

      {/* VIEW 3: CORE PARAMETERS */}
      {viewMode === 'parameters' && (
        <div className="prompt-parameters-grid">
          <div className="param-card">
            <div className="param-header mono">
              <Palette size={14} color="#C44525" />
              <span>01 ARAH DESAIN & IDENTITAS MEREK</span>
            </div>
            <p className="param-text">{template.prompt.designDirection}</p>
          </div>

          <div className="param-card">
            <div className="param-header mono">
              <Layers size={14} color="#C44525" />
              <span>02 TATA LETAK, SISTEM GRID & RITME</span>
            </div>
            <p className="param-text">{template.prompt.layoutAndGrid}</p>
          </div>

          <div className="param-card">
            <div className="param-header mono">
              <FileText size={14} color="#C44525" />
              <span>03 KOMBINASI TIPOGRAFI & WARNA</span>
            </div>
            <p className="param-text">{template.prompt.typographyAndColor}</p>
          </div>

          <div className="param-card">
            <div className="param-header mono">
              <Zap size={14} color="#C44525" />
              <span>04 INTERAKSI FISIK & MIKROANIMASI</span>
            </div>
            <p className="param-text">{template.prompt.interactions}</p>
          </div>

          <div className="param-card full-width">
            <div className="param-header mono">
              <CheckCircle2 size={14} color="#C44525" />
              <span>05 PERSYARATAN TEKNIS & AKSESIBILITAS</span>
            </div>
            <p className="param-text">{template.prompt.technicalRequirements}</p>
          </div>
        </div>
      )}
    </div>
  );
};
