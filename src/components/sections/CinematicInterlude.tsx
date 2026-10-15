import { LuxuryImage } from '../ui/LuxuryImage.tsx';

export function CinematicInterlude() {
  return (
    <section
      className="relative w-full h-[380px] sm:h-[450px] md:h-[520px] flex items-center justify-center overflow-hidden border-y border-[#d4a96b]/20"
      aria-label="Interludio visual cinematográfico"
    >
      {/* Background Cinematic Visual */}
      <LuxuryImage
        src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=85"
        alt="Atmósfera nocturna de celebración iluminada con velas y luces cálidas por Dilas Eventos"
        containerClassName="absolute inset-0 w-full h-full"
        className="w-full h-full object-cover scale-105"
      />

      {/* Atmospheric Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/85" />
      <div className="absolute inset-0 bg-[#0f0e0c]/40" />

      {/* Interlude Typographic Statement */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="text-[11px] uppercase tracking-[0.3em] text-[#d4a96b] font-serif-luxury block mb-4">
          Atmósfera & Emoción
        </span>

        <blockquote className="text-3xl sm:text-5xl md:text-6xl font-serif-luxury font-normal text-[#fbf8f3] italic leading-tight [text-wrap:balance]">
          «Los mejores recuerdos comienzan{' '}
          <span className="text-gold-gradient block sm:inline">
            con una gran idea.»
          </span>
        </blockquote>

        <p className="mt-6 text-xs sm:text-sm uppercase tracking-[0.2em] text-[#eedec0]/75 font-sans-luxury">
          Fusagasugá · Sumapaz · Colombia
        </p>
      </div>
    </section>
  );
}
