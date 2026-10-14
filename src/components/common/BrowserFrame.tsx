import { Lock, RefreshCw, ExternalLink, X } from 'lucide-react';

interface Props {
  url?: string;
  title?: string;
  children: React.ReactNode;
  aspectRatio?: string;
  className?: string;
  onRefresh?: () => void;
  onExternal?: () => void;
}

export const BrowserFrame: React.FC<Props> = ({
  url = 'https://nector-archive.ui/preview',
  title,
  children,
  aspectRatio = '16/10',
  className = '',
  onRefresh,
  onExternal
}) => {
  return (
    <div className={`browser-frame-container ${className}`}>
      {/* Browser Chrome Header */}
      <div className="browser-chrome-bar">
        {/* Traffic Light Window Controls */}
        <div className="traffic-lights-group">
          <span className="traffic-dot close" title="Tutup"></span>
          <span className="traffic-dot minimize" title="Perkecil"></span>
          <span className="traffic-dot maximize" title="Perbesar"></span>
        </div>

        {/* Browser Tabs (if title provided) */}
        {title && (
          <div className="browser-tab-active">
            <span className="tab-title mono">{title}</span>
            <X size={10} className="tab-close" />
          </div>
        )}

        {/* Address Bar */}
        <div className="browser-address-bar">
          <Lock size={11} className="padlock-icon" />
          <span className="browser-url-text mono">{url}</span>
          {onRefresh && (
            <button className="browser-tool-btn" onClick={onRefresh} title="Muat ulang tampilan">
              <RefreshCw size={11} />
            </button>
          )}
        </div>

        {/* Browser Action Tools */}
        <div className="browser-tools-right">
          {onExternal && (
            <button className="browser-tool-btn" onClick={onExternal} title="Buka di tab baru">
              <ExternalLink size={12} />
            </button>
          )}
          <span className="browser-badge mono">SSL 256-BIT</span>
        </div>
      </div>

      {/* Browser Viewport Body */}
      <div className="browser-viewport-body" style={{ aspectRatio }}>
        {children}
      </div>
    </div>
  );
};
