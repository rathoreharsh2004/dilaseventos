import { Instagram, ArrowUpRight, Heart, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_INSTAGRAM_URL } from '../../utils/quotation.ts';

const SAMPLE_STORIES = [
  {
    caption: 'Montaje de iluminación cálida y orquídeas en Chinauta',
    tag: '#BodasFusagasugá',
    likes: '142',
  },
  {
    caption: 'Entrada triunfal con pista iluminada en los 15 de Valentina',
    tag: '#QuinceañeraDilas',
    likes: '189',
  },
  {
    caption: 'Cena de gala empresarial y premiación anual',
    tag: '#EventosSumapaz',
    likes: '96',
  },
  {
    caption: 'Detalles de cristalería fina y caligrafía personalizada',
    tag: '#WeddingDesign',
    likes: '230',
  },
];

export function InstagramProofSection() {
  return (
    <section
      className="relative py-24 md:py-36 bg-[#0c0b09] border-t border-[#d4a96b]/10"
      aria-label="Conexión con Instagram oficial de Dilas Eventos"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Editorial Instagram Feature Card */}
        <div className="rounded-3xl bg-gradient-to-br from-[#181512] via-[#14120f] to-[#0d0c0a] border border-[#d4a96b]/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Brand Account Info */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d4a96b]/30 bg-[#1e1a16] text-[11px] font-sans-luxury tracking-wider text-[#d4a96b] uppercase mb-4">
                <Instagram className="w-3.5 h-3.5" />
                <span>Comunidad en Vivo</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif-luxury font-normal text-[#f4efe8]">
                Sigue el día a día de nuestros montajes en{' '}
                <span className="italic text-gold-gradient block">
                  @dilas.eventos
                </span>
              </h2>

              <p className="mt-4 text-xs sm:text-sm text-[#eedec0]/80 font-sans-luxury leading-relaxed">
                Descubre videos en tiempo real, pruebas de iluminación, flores recién llegadas y las emociones de nuestros clientes durante el desarrollo de cada celebración en Fusagasugá y el Sumapaz.
              </p>

              <div className="mt-4 flex items-center gap-2 text-xs text-[#eedec0]/60">
                <MapPin className="w-3.5 h-3.5 text-[#d4a96b]" />
                <span>Fusagasugá – Sumapaz, Colombia</span>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <a
                  href={BUSINESS_INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-semibold text-[#12100e] bg-gradient-to-r from-[#d4a96b] to-[#c5924b] rounded hover:brightness-110 transition-all shadow-md"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Ver perfil de Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Grid of Live Feed Highlights */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SAMPLE_STORIES.map((story, idx) => (
                <a
                  key={idx}
                  href={BUSINESS_INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-5 rounded-xl bg-[#1c1916]/80 border border-[#d4a96b]/20 hover:border-[#d4a96b]/60 transition-all block"
                >
                  <div className="flex items-center justify-between text-[11px] text-[#eedec0]/60 mb-2">
                    <span className="font-serif-luxury text-[#d4a96b]">
                      @dilas.eventos
                    </span>
                    <div className="flex items-center gap-1 text-[#eedec0]/40">
                      <Heart className="w-3 h-3 text-[#d4a96b]/70 fill-current" />
                      <span>{story.likes}</span>
                    </div>
                  </div>
                  <p className="text-xs font-serif-luxury text-[#f4efe8] group-hover:text-[#d4a96b] transition-colors leading-snug">
                    «{story.caption}»
                  </p>
                  <span className="mt-3 block text-[10px] text-[#eedec0]/50 font-sans-luxury">
                    {story.tag}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Note on Authenticity */}
        <div className="mt-8 text-center text-xs text-[#eedec0]/50 font-sans-luxury flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#d4a96b]/60" />
          <span>
            Compromiso de autenticidad: Conéctate directamente con nuestras redes para conocer los últimos eventos y reseñas reales de nuestros anfitriones.
          </span>
        </div>
      </div>
    </section>
  );
}
