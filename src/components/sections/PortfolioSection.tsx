import { useState } from 'react';
import { Sparkles, Eye, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../../data/portfolio.ts';
import { PortfolioItem } from '../../types/index.ts';
import { LuxuryImage } from '../ui/LuxuryImage.tsx';
import { LightboxModal } from '../gallery/LightboxModal.tsx';

const FILTER_TABS = [
  { id: 'todas', label: 'Todos los Proyectos' },
  { id: 'boda', label: 'Bodas' },
  { id: 'quinceanera', label: 'Quinceañeras' },
  { id: 'corporativo', label: 'Corporativo' },
  { id: 'detalles', label: 'Montajes & Detalles' },
  { id: 'intimo', label: 'Celebraciones Íntimas' },
];

export function PortfolioSection() {
  const [selectedFilter, setSelectedFilter] = useState('todas');
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  const filteredItems =
    selectedFilter === 'todas'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === selectedFilter);

  return (
    <section
      id="portafolio"
      className="relative py-24 md:py-36 bg-[#0f0e0c] border-t border-[#d4a96b]/10"
      aria-label="Galería y portafolio de montajes de Dilas Eventos"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#d4a96b] font-serif-luxury">
            Portafolio de Autor
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-normal text-[#f4efe8] tracking-tight">
            Escenografías creadas para{' '}
            <span className="italic text-gold-gradient">perdurar en la memoria.</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-[#eedec0]/70 font-sans-luxury">
            Una selección de montajes, bodas campestres en Fusagasugá, galas de 15 años y cenas corporativas en el Sumapaz.
          </p>
        </div>

        {/* Interactive Filter Tabs (Segmented Button Control) */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-14">
          {FILTER_TABS.map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-2 text-xs font-sans-luxury tracking-wider rounded-full transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#d4a96b] text-[#12100e] font-semibold shadow-md'
                    : 'bg-[#181512] text-[#eedec0]/70 border border-[#d4a96b]/20 hover:border-[#d4a96b]/40 hover:text-[#f4efe8]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Asymmetrical Editorial Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, idx) => {
            // Apply varied heights for editorial asymmetry
            const isTall = idx % 3 === 1;
            return (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`group relative rounded-2xl overflow-hidden border border-[#d4a96b]/20 bg-[#14120f] cursor-pointer shadow-xl transition-all duration-500 hover:border-[#d4a96b]/60 ${
                  isTall ? 'sm:row-span-2' : ''
                }`}
              >
                <div className={`relative w-full ${isTall ? 'h-[460px] sm:h-full min-h-[380px]' : 'h-[320px]'}`}>
                  <LuxuryImage
                    src={item.imageSrc}
                    alt={item.title}
                    categoryTag={item.categoryLabel}
                    containerClassName="w-full h-full"
                    className="group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Subtle Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] via-[#0a0908]/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                  {/* Card Content Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    {/* Top Tag & Quick Action */}
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-widest text-[#d4a96b] font-serif-luxury">
                        {item.categoryLabel}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#181512]/80 border border-[#d4a96b]/30 flex items-center justify-center text-[#eedec0] opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-105">
                        <Eye className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Bottom Title, Location, and Hover Reveal */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif-luxury text-[#fbf8f3] group-hover:text-[#d4a96b] transition-colors">
                        {item.title}
                      </h3>
                      <div className="mt-2 flex items-center gap-2 text-xs text-[#eedec0]/70 font-sans-luxury">
                        <span>{item.location}</span>
                        <span className="text-[#d4a96b]/40">·</span>
                        <span>{item.guestCount}</span>
                      </div>
                      
                      <div className="mt-3 flex items-center gap-1.5 text-xs text-[#d4a96b] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>Ver detalles y paleta</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparent Attribution / Note */}
        <div className="mt-12 text-center text-[11px] text-[#eedec0]/50 font-sans-luxury max-w-xl mx-auto flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#d4a96b]/60 shrink-0" />
          <span>
            Portafolio editorial de inspiración técnica. Cada boda y gala se diseña exclusivamente a la medida de la locación y el anhelo del cliente.
          </span>
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={activeItem}
        items={filteredItems}
        onClose={() => setActiveItem(null)}
        onNavigate={(newItem) => setActiveItem(newItem)}
      />
    </section>
  );
}
