import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface LuxuryImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  categoryTag?: string;
  priority?: boolean;
}

export function LuxuryImage({
  src,
  alt,
  className = '',
  containerClassName = '',
  categoryTag,
  priority = false,
}: LuxuryImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-[#181512] ${containerClassName}`}
    >
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-[#151310] animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border border-[#d4a96b]/30 border-t-[#d4a96b] animate-spin" />
        </div>
      )}

      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#1c1916] via-[#151311] to-[#0d0c0a] border border-[#d4a96b]/15">
          <div className="w-12 h-12 rounded-full bg-[#d4a96b]/10 flex items-center justify-center mb-3 text-[#d4a96b]">
            <Sparkles className="w-5 h-5 stroke-1" />
          </div>
          <span className="text-xs uppercase tracking-widest text-[#d4a96b]/70 font-serif-luxury mb-1">
            {categoryTag || 'Dilas Eventos'}
          </span>
          <p className="text-sm font-serif-luxury text-[#f4efe8]/90 max-w-xs line-clamp-2">
            {alt}
          </p>
          <span className="mt-3 text-[11px] text-[#eedec0]/40 tracking-wider">
            Fusagasugá · Sumapaz
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          referrerPolicy="no-referrer"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } ${className}`}
        />
      )}
    </div>
  );
}
