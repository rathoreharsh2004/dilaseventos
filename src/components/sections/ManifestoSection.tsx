import { LuxuryImage } from '../ui/LuxuryImage.tsx';

export function ManifestoSection() {
  return (
    <section
      id="manifiesto"
      className="relative py-24 md:py-36 bg-[#0f0e0c] border-t border-[#d4a96b]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Typographic Statement Column */}
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4a96b] font-serif-luxury">
              Manifiesto de Marca
            </span>

            <h2 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-serif-luxury font-normal text-[#fbf8f3] leading-[1.12] [text-wrap:balance]">
              No organizamos solamente eventos.{' '}
              <span className="italic text-gold-gradient block mt-1">
                Diseñamos emociones.
              </span>
            </h2>

            <div className="mt-8 space-y-5 text-sm sm:text-base text-[#eedec0]/80 font-sans-luxury leading-relaxed max-w-xl">
              <p>
                En <strong className="text-[#f4efe8] font-medium">Dilas Eventos</strong>, concebimos cada celebración como una obra de arte viva e irrepetible. Con sede en Fusagasugá y corazón en la hermosa provincia del Sumapaz, combinamos la sensibilidad estética de la alta costura con la rigurosidad técnica de la ingeniería escénica.
              </p>
              <p>
                Desde la primera charla donde escuchamos tus anhelos hasta el instante en que se apagan las luces de la pista, asumimos el diseño integral, la producción lumínica y la logística precisa. Tú solo debes disfrutar del momento que siempre soñaste.
              </p>
            </div>

            {/* Service Pillars Grid */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-[#d4a96b]/20">
              <div>
                <span className="block text-2xl font-serif-luxury text-[#d4a96b]">100%</span>
                <span className="text-xs uppercase tracking-wider text-[#eedec0]/70 font-sans-luxury">
                  Diseño a Medida
                </span>
              </div>
              <div>
                <span className="block text-2xl font-serif-luxury text-[#d4a96b]">Sumapaz</span>
                <span className="text-xs uppercase tracking-wider text-[#eedec0]/70 font-sans-luxury">
                  Presencia Regional
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-2xl font-serif-luxury text-[#d4a96b]">Integral</span>
                <span className="text-xs uppercase tracking-wider text-[#eedec0]/70 font-sans-luxury">
                  Logística & Audio 360
                </span>
              </div>
            </div>
          </div>

          {/* Visual Composition Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-[#d4a96b]/25 shadow-2xl group">
              <LuxuryImage
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80"
                alt="Montaje de gala exclusivo en hacienda campestre de Fusagasugá por Dilas Eventos"
                containerClassName="aspect-[4/5] w-full"
                className="group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e0c]/90 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#14120f]/85 border border-[#d4a96b]/20 backdrop-blur-sm">
                <p className="text-xs font-serif-luxury italic text-[#eedec0]">
                  «La verdadera sofisticación reside en la armonía invisible de cada detalle.»
                </p>
                <span className="mt-1 block text-[10px] uppercase tracking-widest text-[#d4a96b]">
                  Fusagasugá · Cundinamarca
                </span>
              </div>
            </div>

            {/* Delicate ambient decorative frame */}
            <div className="absolute -inset-4 border border-[#d4a96b]/15 rounded-3xl -z-10 translate-x-2 translate-y-2 pointer-events-none hidden sm:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
