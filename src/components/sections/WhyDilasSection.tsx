import { Compass, ShieldCheck, HeartHandshake, Sparkles, Truck } from 'lucide-react';

const COMMITMENTS = [
  {
    icon: Sparkles,
    title: 'Diseño Personalizado',
    description:
      'No creemos en paquetes prediseñados idénticos. Cada boda, quinceañera o gala se conceptualiza a partir de tu paleta cromática favorita, tu personalidad y la arquitectura del recinto.',
  },
  {
    icon: Compass,
    title: 'Atención Obsesiva al Detalle',
    description:
      'Desde la inclinación de las copas de cristal hasta el ángulo de los reflectores cálidos sobre la pista de baile, revisamos cada elemento estético con rigor milimétrico.',
  },
  {
    icon: HeartHandshake,
    title: 'Acompañamiento Integral',
    description:
      'Te brindamos asesoría continua desde el primer día. Resolvemos dudas de protocolo, asesoramos en elección de menú y estamos presentes durante todo el montaje.',
  },
  {
    icon: Truck,
    title: 'Infraestructura & Logística Propia',
    description:
      'Mobiliario seleccionado, carpas, sistemas de iluminación escénica y equipo de sonido operados directamente por nosotros para asegurar fiabilidad y puntualidad absoluta.',
  },
  {
    icon: ShieldCheck,
    title: 'Experiencia en Fusagasugá & Sumapaz',
    description:
      'Conocemos las haciendas, fincas, salones y particularidades climáticas de nuestra región, lo que nos permite anticipar cualquier contingencia y garantizar una ejecución serena.',
  },
];

export function WhyDilasSection() {
  return (
    <section
      className="relative py-24 md:py-36 bg-[#0f0e0c] border-t border-[#d4a96b]/10"
      aria-label="Por qué elegir a Dilas Eventos"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#d4a96b] font-serif-luxury">
            Compromiso de Excelencia
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-normal text-[#f4efe8] tracking-tight">
            Nuestros principios de{' '}
            <span className="italic text-gold-gradient">servicio y confianza.</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-[#eedec0]/70 font-sans-luxury">
            Garantizamos serenidad, transparencia y alta calidad en cada etapa de la producción.
          </p>
        </div>

        {/* 5-Pillar Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {COMMITMENTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-8 rounded-2xl bg-[#14120f] border border-[#d4a96b]/20 hover:border-[#d4a96b]/50 transition-all duration-300 ${
                  idx === 0 ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-full bg-[#1c1916] border border-[#d4a96b]/30 flex items-center justify-center text-[#d4a96b] mb-6">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-serif-luxury text-[#fbf8f3]">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#eedec0]/80 font-sans-luxury leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
