import React from 'react';
import type { Template } from '../../types';
import { ArrowRight, Coffee, Building, Heart, Utensils, Scissors, Flower2, Wheat, Store, Sparkles } from 'lucide-react';

interface Props {
  templates: Template[];
  onSelectCategory: (cat: string) => void;
}

export const CategoriesView: React.FC<Props> = ({
  templates,
  onSelectCategory
}) => {
  const categoryDefs = [
    {
      id: 'padang',
      title: 'Rumah Makan Padang',
      icon: Utensils,
      desc: 'Etalase masakan autentik Minangkabau lengkap dengan sistem kasir POS interaktif dan pemesanan meja.',
      accent: '#7A1F2B'
    },
    {
      id: 'cafe',
      title: 'Cafe & Angkringan',
      icon: Coffee,
      desc: 'Sajian coffee shop artisan, pastry hangat, serta suasana santai angkringan nasi kucing dan sate malam.',
      accent: '#8B4513'
    },
    {
      id: 'beverage',
      title: 'Minuman Segar & Racikan',
      icon: Sparkles,
      desc: 'Minuman dingin racikan buah lokal, herbal segar, dan juice bar dengan palet warna ceria alami.',
      accent: '#486B45'
    },
    {
      id: 'bakery',
      title: 'Artisan Bakery & Patisserie',
      icon: Wheat,
      desc: 'Etalase roti ragi alami (sourdough), croissant berlapis mentega, dan jadwal pemanggangan harian.',
      accent: '#A06B32'
    },
    {
      id: 'florist',
      title: 'Floral & Botanical Studio',
      icon: Flower2,
      desc: 'Studio bunga musiman, rangkaian buket custom, dan pemesanan instalasi botani estetik.',
      accent: '#4A6B53'
    },
    {
      id: 'barber',
      title: 'The Heritage Barber',
      icon: Scissors,
      desc: 'Layanan pangkas rambut pria klasik, hot towel shave, dan sistem booking antrean kursi digital.',
      accent: '#262626'
    },
    {
      id: 'pottery',
      title: 'Studio Keramik & Pottery',
      icon: Store,
      desc: 'Koleksi tembikar tanah liat buatan tangan, workshop keramik akhir pekan, dan galeri pameran.',
      accent: '#99583D'
    },
    {
      id: 'organik',
      title: 'Lokal Organik & Hasil Kebun',
      icon: Store,
      desc: 'Hasil tani sayur organik tanpa pestisida, paket langganan mingguan, dan provenance kebun lokal.',
      accent: '#3E663B'
    }
  ];

  return (
    <div className="categories-view">
      <div className="container">
        <div className="cat-page-header">
          <span className="mono badge-subtle">ARCHIVE INDEX</span>
          <h1 className="cat-page-heading">Browse Design Disciplines</h1>
          <p className="cat-page-sub">
            NECTOR.UI classifies web systems by functional discipline. Every collection is purposefully art-directed according to its subject matter.
          </p>
        </div>

        <div className="categories-full-grid">
          {categoryDefs.map(cat => {
            const count = templates.filter(t => t.category === cat.id).length;
            const Icon = cat.icon;

            return (
              <div
                key={cat.id}
                className="category-card-item"
                onClick={() => {
                  onSelectCategory(cat.id);
                }}
              >
                <div className="cci-top">
                  <div className="cci-icon-box" style={{ color: cat.accent }}>
                    <Icon size={20} />
                  </div>
                  <span className="mono cci-count">{count} TEMPLATES</span>
                </div>

                <h3 className="cci-title">{cat.title}</h3>
                <p className="cci-desc">{cat.desc}</p>

                <div className="cci-action mono">
                  <span>Explore {cat.title}</span>
                  <ArrowRight size={13} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
