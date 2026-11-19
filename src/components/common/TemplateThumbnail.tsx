import React, { useRef, useState, useEffect } from 'react';
import type { Template } from '../../types';
import { BrowserFrame } from './BrowserFrame';
import { isNewTemplate } from '../../utils/templateDate';

interface Props {
  template: Template;
  showBrowserChrome?: boolean;
  showNewBadge?: boolean;
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
          // Virtual desktop viewport width is 1280px (Standard HD desktop)
          setScale(width / 1280);
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
          width: '1280px',
          height: '800px',
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

export const TemplateThumbnail: React.FC<Props> = ({
  template,
  showBrowserChrome = true,
  showNewBadge = true,
}) => {
  const { slug, title, htmlPath, publishedAt } = template;
  const isNew = showNewBadge && isNewTemplate(publishedAt);

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
    'pustaka-aksara-perpustakaan': 'https://pustaka-aksara.id',
    'rukun-buah-segar': 'https://rukunbuah.pasar.id',
    'sinau-study-workspace': 'https://sinau-belajar.id',
    'kala-sangrai-roastery': 'https://kalasangrai.roastery.id',
    'kantin-sekolah-selasar': 'https://kantin-selasar.sch.id',
    'miau-cattery-boutique': 'https://miau.cattery.id',
    'dough-and-glaze-donat': 'https://doughglaze.id',
    'kura-apparel': 'https://kura-apparel.nector.ui',
    'maison-nocturne-parfumerie': 'https://maison-nocturne.parfum.id',
    'arung-technical-footwear': 'https://arung-footwear.nector.ui',
    'kemas-lab-packaging': 'https://kemaslab.nector.ui',
    'wana-wild-honey': 'https://wana-honey.nector.ui',
    'kayan-solid-furniture': 'https://kayan-furniture.nector.ui',
    'sola-artisan-gelato': 'https://solagelato.nector.ui',
    'svala-nordic-bathhouse': 'https://svalabathhouse.nector.ui',
    'verra-japanese-eyewear': 'https://verraoptics.nector.ui',
    'chidori-kyoto-wagashi': 'https://chidoriasahi.nector.ui',
    'etoile-bridal-couture': 'https://etoilecouture.nector.ui',
    'tatah-artisanal-leather': 'https://tatah.leather.nector.ui',
    'aura-derma-clinic': 'https://auraderma.nector.ui',
    'celeste-astronomical-horology': 'https://celeste.horlogerie.nector.ui',
    'cyano-blueprint-architecture': 'https://cyano.architecture.nector.ui',
    'resonance-analog-audio': 'https://resonance.audio.nector.ui',
    'axis-mechanical-keyboards': 'https://axis.keyboards.nector.ui',
    'somna-sleep-sanctuary': 'https://somna.sleep.nector.ui',
  };

  const domainUrl = urlMap[slug] || `https://${slug}.nector.ui`;

  const content = (
    <div className="thumb-live-webpage-stage">
      <ScaledIframeThumbnail htmlPath={htmlPath || ''} title={title} />
    </div>
  );

  if (!showBrowserChrome) {
    return (
      <div className="template-thumb-canvas" style={{ position: 'relative' }}>
        {isNew && (
          <span className="badge-new-template badge-floating-corner" title="Template baru dirilis dalam 3 hari terakhir">
            NEW
          </span>
        )}
        {content}
      </div>
    );
  }

  return (
    <BrowserFrame url={domainUrl} title={title} hasNewBadge={isNew}>
      {content}
    </BrowserFrame>
  );
};




