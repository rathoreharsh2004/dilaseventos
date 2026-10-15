import { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { EXPERIENCES } from '../../data/experiences.ts';
import { LuxuryImage } from '../ui/LuxuryImage.tsx';
import { ExperienceCategory } from '../../types/index.ts';

interface ExperiencesSectionProps {
  onSelectCategory?: (category: ExperienceCategory) => void;
}

export function ExperiencesSection({ onSelectCategory }: ExperiencesSectionProps) {
  const [activeId, setActiveId] = useState<string>(EXPERIENCES[0].id);

  return (
    <section
      id="experiencias"
      className="relative py-24 md:py-36 bg-[#0c0b09] border-t border-[#d4a96b]/10"
      aria-label="Categorías de experiencias y tipos de eventos"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4a96b] font-serif-luxury">
              Nuestras Especialidades
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-normal text-[#f4efe8] tracking-tight">
              Celebraciones que trascienden{' '}
              <span className="italic text-gold-gradient">lo convencional.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#eedec0]/70 font-sans-luxury max-w-md">
            Cada ocasión posee un lenguaje propio. Desarrollamos montajes únicos para bodas, quinceañeras y encuentros de alto nivel en Fusagasugá y el Sumapaz.
          </p>
        </div>

        {/* Asymmetrical Editorial Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Categories Accordion / Selector (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            {EXPERIENCES.map((exp) => {
              const isActive = exp.id === activeId;
              return (
                <div
                  key={exp.id}
                  onClick={() => {
                    setActiveId(exp.id);
                    if (onSelectCategory) onSelectCategory(exp);
                  }}
                  onMouseEnter={() => setActiveId(exp.id)}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? 'bg-[#181512] border-[#d4a96b]/40 shadow-xl'
                      : 'bg-[#12100e]/60 border-white/5 hover:border-[#d4a96b]/20 hover:bg-[#14120f]'
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveId(exp.id);
                    }
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono text-[#d4a96b]/70 tracking-widest">
                        {exp.code}
                      </span>
                      <h3
                        className={`text-lg sm:text-xl font-serif-luxury transition-colors ${
                          isActive ? 'text-[#fbf8f3] font-medium' : 'text-[#eedec0]/75'
                        }`}
                      >
                        {exp.title}
                      </h3>
                    </div>
                    <ArrowUpRight
                      className={`w-4 h-4 transition-all duration-300 ${
                        isActive
                          ? 'text-[#d4a96b] translate-x-0.5 -translate-y-0.5'
                          : 'text-white/20'
                      }`}
                    />
                  </div>

                  {isActive && (
                    <div className="mt-4 pt-4 border-t border-[#d4a96b]/15 transition-opacity duration-300">
                      <p className="text-xs sm:text-sm text-[#eedec0]/80 font-sans-luxury leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="mt-4 space-y-1.5">
                        {exp.highlights.slice(0, 3).map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-xs text-[#eedec0]/70"
                          >
                            <Check className="w-3.5 h-3.5 text-[#d4a96b] shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-5">
                        <a
                          href="#contacto"
                          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#d4a96b] font-medium hover:underline"
                        >
                          <span>Cotizar {exp.title}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Immersive Visual Showcase (7 cols) */}
          <div className="lg:col-span-7 relative min-h-[420px] lg:min-h-full rounded-2xl overflow-hidden border border-[#d4a96b]/25 shadow-2xl">
            {EXPERIENCES.map((exp) => {
              const isSelected = exp.id === activeId;
              return (
                <div
                  key={exp.id}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    isSelected ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <LuxuryImage
                    src={exp.imageSrc}
                    alt={exp.imageAlt}
                    categoryTag={exp.tag}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover scale-100 hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c0a] via-[#0d0c0a]/40 to-transparent pointer-events-none" />

                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-8 left-8 right-8 p-6 rounded-xl bg-[#14120f]/90 border border-[#d4a96b]/25 backdrop-blur-md">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <span className="text-[11px] uppercase tracking-widest text-[#d4a96b]">
                          {exp.tag} · Dilas Eventos
                        </span>
                        <h4 className="mt-1 text-xl sm:text-2xl font-serif-luxury text-[#fbf8f3]">
                          {exp.subtitle}
                        </h4>
                      </div>
                      <a
                        href="#contacto"
                        className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs uppercase tracking-wider font-semibold text-[#12100e] bg-[#d4a96b] rounded hover:brightness-110 transition-all shrink-0"
                      >
                        Cotizar
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
