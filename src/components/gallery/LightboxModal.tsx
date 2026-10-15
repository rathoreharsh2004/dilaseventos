import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle, MapPin, Users } from 'lucide-react';
import { PortfolioItem } from '../../types/index.ts';
import { LuxuryImage } from '../ui/LuxuryImage.tsx';
import { BUSINESS_WHATSAPP_NUMBER } from '../../utils/quotation.ts';

interface LightboxModalProps {
  item: PortfolioItem | null;
  items: PortfolioItem[];
  onClose: () => void;
  onNavigate: (newItem: PortfolioItem) => void;
}

export function LightboxModal({
  item,
  items,
  onClose,
  onNavigate,
}: LightboxModalProps) {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [item, items]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % items.length;
    onNavigate(items[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + items.length) % items.length;
    onNavigate(items[prevIdx]);
  };

  const whatsappMessage = `Hola Dilas Eventos, me encanta el diseño de "${item.title}" (${item.categoryLabel}) y deseo consultar disponibilidad y cotización para un evento similar.`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-6 md:p-10 animate-fade-in"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Cerrar vista detallada"
        className="absolute top-6 right-6 z-30 p-2.5 rounded-full bg-[#181512]/80 border border-[#d4a96b]/30 text-[#eedec0] hover:text-white hover:bg-[#d4a96b] hover:text-[#12100e] transition-colors"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev button */}
      <button
        onClick={handlePrev}
        aria-label="Fotografía anterior"
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-[#181512]/80 border border-[#d4a96b]/30 text-[#eedec0] hover:text-[#d4a96b] hover:bg-[#1c1916] transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Next button */}
      <button
        onClick={handleNext}
        aria-label="Fotografía siguiente"
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-[#181512]/80 border border-[#d4a96b]/30 text-[#eedec0] hover:text-[#d4a96b] hover:bg-[#1c1916] transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Modal Content: Split Image & Editorial Details */}
      <div
        className="relative max-w-5xl w-full max-h-[90vh] bg-[#12100e] border border-[#d4a96b]/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left: Image Container */}
        <div className="md:w-3/5 bg-black relative flex items-center justify-center min-h-[300px] md:min-h-[500px]">
          <LuxuryImage
            src={item.imageSrc}
            alt={item.title}
            categoryTag={item.categoryLabel}
            containerClassName="w-full h-full"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right: Curated Editorial Details */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-none border-t md:border-t-0 md:border-l border-[#d4a96b]/20">
          <div>
            <div className="flex items-center gap-2 text-xs font-serif-luxury tracking-widest text-[#d4a96b] uppercase">
              <span>{item.categoryLabel}</span>
              <span className="text-[#d4a96b]/40">·</span>
              <span>{item.year}</span>
            </div>

            <h3 className="mt-2 text-2xl font-serif-luxury text-[#fbf8f3] leading-snug">
              {item.title}
            </h3>

            <div className="mt-4 flex flex-col gap-2 text-xs text-[#eedec0]/75 font-sans-luxury">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#d4a96b] shrink-0" />
                <span>{item.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-[#d4a96b] shrink-0" />
                <span>{item.guestCount}</span>
              </div>
            </div>

            <p className="mt-5 text-xs sm:text-sm text-[#eedec0]/80 font-sans-luxury leading-relaxed border-t border-[#d4a96b]/15 pt-4">
              {item.description}
            </p>

            {/* Color Palette Swatches */}
            <div className="mt-6">
              <span className="text-[11px] uppercase tracking-widest text-[#eedec0]/60 block mb-2 font-sans-luxury">
                Paleta Cromática del Montaje
              </span>
              <div className="flex items-center gap-2">
                {item.palette.map((color, idx) => (
                  <div
                    key={idx}
                    className="w-6 h-6 rounded-full border border-white/20 shadow-sm"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#d4a96b]/20 flex flex-col gap-3">
            <a
              href={`https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 text-xs uppercase tracking-wider font-semibold text-[#12100e] bg-gradient-to-r from-[#d4a96b] to-[#af783c] rounded hover:brightness-110 transition-all shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Cotizar estilo similar</span>
            </a>

            <button
              onClick={onClose}
              className="w-full py-2 text-xs uppercase tracking-wider text-[#eedec0]/70 hover:text-white transition-colors text-center"
            >
              Regresar al portafolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
