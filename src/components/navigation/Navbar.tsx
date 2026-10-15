import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { BUSINESS_WHATSAPP_NUMBER } from '../../utils/quotation.ts';

const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#experiencias', label: 'Experiencias' },
  { href: '#transformacion', label: 'Transformación 3D' },
  { href: '#portafolio', label: 'Portafolio' },
  { href: '#proceso', label: 'Proceso' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0f0e0c]/90 backdrop-blur-md border-b border-[#d4a96b]/15 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element, no subtitle clutter) */}
        <a
          href="#inicio"
          className="text-lg md:text-xl font-serif-luxury tracking-[0.2em] font-medium text-[#f4efe8] hover:text-[#d4a96b] transition-colors whitespace-nowrap shrink-0 uppercase"
        >
          Dilas Eventos
        </a>

        {/* Zone 2: 4-5 single-line clean nav links */}
        <nav
          className="hidden md:flex items-center gap-7 text-xs uppercase tracking-[0.16em] font-sans-luxury text-[#eedec0]/80"
          aria-label="Navegación principal"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#d4a96b] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#d4a96b] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary CTA Button */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent(
              'Hola Dilas Eventos, deseo solicitar información y agendar una asesoría para mi evento.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-medium text-[#12100e] bg-gradient-to-r from-[#d4a96b] to-[#c5924b] rounded hover:brightness-110 active:scale-[0.98] transition-all whitespace-nowrap shrink-0 shadow-md"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>Cotizar WhatsApp</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileMenuOpen}
            className="md:hidden p-2 text-[#eedec0] hover:text-[#d4a96b] transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[61px] bg-[#12100e] border-b border-[#d4a96b]/20 px-6 py-6 shadow-2xl transition-all">
          <nav className="flex flex-col gap-4 text-sm font-serif-luxury tracking-wider text-[#eedec0]">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="py-2 border-b border-white/5 hover:text-[#d4a96b] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={closeMenu}
              className="py-2 text-[#d4a96b] font-medium border-b border-white/5"
            >
              Formulario de Cotización
            </a>
            <a
              href={`https://wa.me/${BUSINESS_WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-3 flex items-center justify-center gap-2 py-3 text-xs uppercase tracking-wider font-semibold text-[#12100e] bg-[#d4a96b] rounded"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Contactar por WhatsApp</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
