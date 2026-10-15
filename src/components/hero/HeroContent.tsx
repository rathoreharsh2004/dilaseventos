import { ArrowDown, Sparkles } from 'lucide-react';
import { HeroScene } from './HeroScene.tsx';

export function HeroContent() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 overflow-hidden bg-radial from-[#181512] via-[#0f0e0c] to-[#0a0908]"
    >
      {/* 3D WebGL Background Scene */}
      <HeroScene />

      {/* Atmospheric Vignette & Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c] via-transparent to-[#0f0e0c]/60 pointer-events-none" />
      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/70 pointer-events-none" />

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center my-auto">
        {/* Subtle Kicker */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-[#d4a96b]/30 bg-[#161411]/60 text-xs font-serif-luxury tracking-[0.25em] text-[#eedec0] uppercase">
          <Sparkles className="w-3 h-3 text-[#d4a96b]" />
          <span>Fusagasugá · Sumapaz · Colombia</span>
        </div>

        {/* Marquee Headline with measured optical contrast */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif-luxury font-normal tracking-tight text-[#fbf8f3] leading-[1.08] max-w-4xl mx-auto [text-wrap:balance] drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
          Every Moment Deserves to Become{' '}
          <span className="italic font-light text-gold-shimmer">
            Extraordinary.
          </span>
        </h1>

        {/* Supporting Copy in Spanish with subtle shadow */}
        <p className="mt-6 text-base sm:text-lg md:text-xl font-serif-luxury italic text-[#eedec0] max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
          Diseñamos experiencias inolvidables. Celebramos historias. Creamos
          recuerdos que permanecen.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contacto"
            className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-[0.18em] font-semibold text-[#12100e] bg-gradient-to-r from-[#e2c597] via-[#d4a96b] to-[#af783c] rounded hover:brightness-110 active:scale-[0.98] transition-all shadow-xl"
          >
            Diseña tu evento
          </a>
          <a
            href="#experiencias"
            className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-[0.18em] font-medium text-[#f4efe8] border border-[#d4a96b]/40 bg-[#161411]/80 backdrop-blur-sm rounded hover:bg-[#d4a96b]/15 hover:border-[#d4a96b] active:scale-[0.98] transition-all"
          >
            Explora nuestras experiencias
          </a>
        </div>
      </div>

      {/* Bottom Trust & Scroll Indicator Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-10 border-t border-[#d4a96b]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans-luxury text-[#eedec0]/70">
        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-3 gap-y-1 tracking-wider text-[11px] sm:text-xs text-center sm:text-left">
          <span>Bodas de Autor</span>
          <span className="text-[#d4a96b]/40">·</span>
          <span>Quinceañeras</span>
          <span className="text-[#d4a96b]/40">·</span>
          <span>Galas Corporativas</span>
          <span className="text-[#d4a96b]/40">·</span>
          <span>Producción Técnica</span>
        </div>

        <a
          href="#manifiesto"
          aria-label="Desplazarse al manifiesto"
          className="flex items-center gap-2 text-[#d4a96b]/80 hover:text-[#d4a96b] transition-colors py-1 group"
        >
          <span className="uppercase tracking-[0.15em] text-[11px]">Descubre más</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
