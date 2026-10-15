import { ArrowUp, Instagram, MessageCircle, MapPin, Phone } from 'lucide-react';
import {
  BUSINESS_INSTAGRAM_URL,
  BUSINESS_WHATSAPP_NUMBER,
} from '../../utils/quotation.ts';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a0908] border-t border-[#d4a96b]/15 pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5">
            <a
              href="#inicio"
              className="text-2xl font-serif-luxury tracking-[0.2em] font-normal text-[#f4efe8] uppercase"
            >
              Dilas Eventos
            </a>
            <p className="mt-4 text-xs sm:text-sm text-[#eedec0]/70 font-sans-luxury leading-relaxed max-w-sm">
              Diseño, producción y logística de eventos memorables en Fusagasugá, Chinauta y la región del Sumapaz. Creamos momentos extraordinarios con rigor escénico y pasión por la elegancia.
            </p>

            <div className="mt-6 flex items-center gap-4 text-xs text-[#eedec0]/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#d4a96b]" />
                <span>Fusagasugá – Sumapaz, Colombia</span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={BUSINESS_INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram oficial de Dilas Eventos"
                className="w-10 h-10 rounded-full bg-[#161411] border border-[#d4a96b]/30 flex items-center justify-center text-[#eedec0] hover:text-[#d4a96b] hover:border-[#d4a96b] transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${BUSINESS_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp directo de Dilas Eventos"
                className="w-10 h-10 rounded-full bg-[#161411] border border-[#d4a96b]/30 flex items-center justify-center text-[#eedec0] hover:text-[#d4a96b] hover:border-[#d4a96b] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links (3 cols) */}
          <div className="lg:col-span-3">
            <span className="text-xs uppercase tracking-widest text-[#d4a96b] font-serif-luxury block mb-4">
              Navegación
            </span>
            <ul className="space-y-2.5 text-xs font-sans-luxury text-[#eedec0]/80">
              <li>
                <a href="#inicio" className="hover:text-[#d4a96b] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#manifiesto" className="hover:text-[#d4a96b] transition-colors">
                  Manifiesto de Marca
                </a>
              </li>
              <li>
                <a href="#experiencias" className="hover:text-[#d4a96b] transition-colors">
                  Experiencias & Tipos de Evento
                </a>
              </li>
              <li>
                <a href="#transformacion" className="hover:text-[#d4a96b] transition-colors">
                  Transformación 3D Interactiva
                </a>
              </li>
              <li>
                <a href="#portafolio" className="hover:text-[#d4a96b] transition-colors">
                  Portafolio & Galería
                </a>
              </li>
              <li>
                <a href="#proceso" className="hover:text-[#d4a96b] transition-colors">
                  Metodología en 4 Pasos
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-[#d4a96b] transition-colors">
                  Cotización en Línea
                </a>
              </li>
            </ul>
          </div>

          {/* Services & Contact (4 cols) */}
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-widest text-[#d4a96b] font-serif-luxury block mb-4">
              Contacto Directo
            </span>
            <div className="space-y-3 text-xs font-sans-luxury text-[#eedec0]/80">
              <p>
                Atención personalizada para agendamiento de visitas técnicas y citas de diseño en Fusagasugá:
              </p>
              <div className="flex items-center gap-2 pt-2">
                <Phone className="w-3.5 h-3.5 text-[#d4a96b]" />
                <a
                  href={`tel:+573144710728`}
                  className="hover:text-[#d4a96b] transition-colors"
                >
                  +57 314 471 0728
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-[#d4a96b]" />
                <a
                  href={`https://wa.me/${BUSINESS_WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#d4a96b] transition-colors"
                >
                  WhatsApp: +57 314 471 0728
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-[#d4a96b]" />
                <a
                  href={BUSINESS_INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#d4a96b] transition-colors"
                >
                  Instagram: @dilas.eventos
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans-luxury text-[#eedec0]/50">
          <p>© {currentYear} Dilas Eventos. Todos los derechos reservados. Fusagasugá, Cundinamarca.</p>

          <button
            onClick={scrollToTop}
            aria-label="Volver arriba"
            className="flex items-center gap-1.5 text-[#d4a96b] hover:text-white transition-colors"
          >
            <span>Subir al inicio</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
