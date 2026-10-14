import React, { useRef, useState, useEffect } from 'react';
import type { Template } from '../../types';
import { BrowserFrame } from './BrowserFrame';

interface Props {
  template: Template;
  showBrowserChrome?: boolean;
}

const ScaledIframeThumbnail: React.FC<{ htmlPath: string; title: string }> = ({ htmlPath, title }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.28);

  useEffect(() => {
    if (!containerRef.current) return;
    const updateScale = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        if (width > 0) {
          // Virtual desktop viewport width is 1200px
          setScale(width / 1200);
        }
      }
    };
    updateScale();
    const ro = new ResizeObserver(updateScale);
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '210px',
        position: 'relative',
        overflow: 'hidden',
        pointerEvents: 'none',
        backgroundColor: '#ffffff',
      }}
    >
      <iframe
        src={htmlPath}
        title={title}
        loading="lazy"
        tabIndex={-1}
        scrolling="no"
        style={{
          width: '1200px',
          height: '750px',
          border: 'none',
          position: 'absolute',
          top: 0,
          left: 0,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          pointerEvents: 'none',
          display: 'block',
        }}
      />
    </div>
  );
};

export const TemplateThumbnail: React.FC<Props> = ({ template, showBrowserChrome = true }) => {
  const { slug, title, htmlPath } = template;

  const urlMap: Record<string, string> = {
    'savore-cafe': 'https://savore.bandung/cafe',
    'senja-angkringan': 'https://senja.angkringan/menu',
    'raso-mandeh-padang': 'https://rasomandeh.id/etalase',
    'sipara-beverage': 'https://sipara.fresh/drinks',
    'croissant-atelier-bakery': 'https://maison-levain.id',
    'floreale-artisan-florist': 'https://botanica-florist.id',
    'gentlemen-cut-barber': 'https://heritage-barber.id',
    'studio-keramik-tanah': 'https://tanahliat.id',
    'kebun-sayur-organik': 'https://lokal-organik.id',
    'sakumart-pos': 'https://sakumart.pos.id',
  };

  const domainUrl = urlMap[slug] || `https://${slug}.nector.ui`;

  const content = (
    <div className="thumb-live-webpage-stage">
      <ScaledIframeThumbnail htmlPath={htmlPath || ''} title={title} />
    </div>
  );

  if (!showBrowserChrome) {
    return <div className="template-thumb-canvas">{content}</div>;
  }

  return (
    <BrowserFrame url={domainUrl} title={title}>
      {content}
    </BrowserFrame>
  );
};




