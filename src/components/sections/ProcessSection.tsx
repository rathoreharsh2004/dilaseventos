import { MessageSquare, Palette, Clock, Sparkles } from 'lucide-react';

const STEPS = [
  {
    number: '01',
    title: 'Escuchamos tu idea',
    subtitle: 'Primera consulta & definición de visión',
    icon: MessageSquare,
    description:
      'Nos reunimos en Fusagasugá o de manera virtual para conocer tu historia, estilo deseado, número de invitados y presupuesto estimado. Establecemos las bases creativas de la celebración.',
    deliverable: 'Moodboard conceptual preliminar y propuesta presupuestal estimada.',
  },
  {
    number: '02',
    title: 'Diseñamos la experiencia',
    subtitle: 'Planos 3D, botánica y curaduría',
    icon: Palette,
    description:
      'Modelamos la distribución espacial, seleccionamos las paletas florales, iluminación escénica, mobiliario y vajilla. Te presentamos renders y muestras tangibles de textiles y papelería.',
    deliverable: 'Dossier de diseño integral y cronograma maestro.',
  },
  {
    number: '03',
    title: 'Coordinamos cada detalle',
    subtitle: 'Logística técnica y proveedores élite',
    icon: Clock,
    description:
      'Articulamos catering, sonido profesional, generadores eléctricos, permisos y protocolo. Ensayamos tiempos de entrada, iluminación por momentos y contingencias climáticas.',
    deliverable: 'Minuto a minuto oficial y supervisión técnica en locación.',
  },
  {
    number: '04',
    title: 'Hacemos realidad el momento',
    subtitle: 'Ejecución impecable en vivo',
    icon: Sparkles,
    description:
      'Nuestro equipo de montaje y coordinación en sitio cuida cada segundo del evento. Tú y tus invitados disfrutan de una experiencia sublime sin preocuparse por ningún aspecto operativo.',
    deliverable: 'Celebración perfecta y recuerdos que permanecerán para siempre.',
  },
];

export function ProcessSection() {
  return (
    <section
      id="proceso"
      className="relative py-24 md:py-36 bg-[#0c0b09] border-t border-[#d4a96b]/10"
      aria-label="Metodología y proceso de diseño de eventos"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#d4a96b] font-serif-luxury">
            Metodología Dilas
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-normal text-[#f4efe8] tracking-tight">
            El camino hacia un evento{' '}
            <span className="italic text-gold-gradient">impecable.</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-[#eedec0]/70 font-sans-luxury">
            Combinamos dirección artística con ingeniería logística para que disfrutes tanto del proceso como del gran día.
          </p>
        </div>

        {/* 4-Step Process Grid with Connecting Line */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative p-7 rounded-2xl bg-[#14120f] border border-[#d4a96b]/20 flex flex-col justify-between hover:border-[#d4a96b]/50 transition-all duration-300 shadow-xl group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-serif-luxury font-light text-[#d4a96b]/50 group-hover:text-[#d4a96b] transition-colors">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#1c1916] border border-[#d4a96b]/25 flex items-center justify-center text-[#d4a96b] group-hover:bg-[#d4a96b] group-hover:text-[#12100e] transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-serif-luxury text-[#fbf8f3] group-hover:text-[#d4a96b] transition-colors">
                    {step.title}
                  </h3>
                  <span className="text-xs text-[#eedec0]/60 font-sans-luxury block mt-1">
                    {step.subtitle}
                  </span>

                  <p className="mt-4 text-xs sm:text-sm text-[#eedec0]/75 font-sans-luxury leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Deliverable Box */}
                <div className="mt-6 pt-4 border-t border-[#d4a96b]/15">
                  <span className="text-[10px] uppercase tracking-wider text-[#d4a96b]/80 block font-sans-luxury">
                    Entregable clave:
                  </span>
                  <p className="mt-1 text-xs text-[#eedec0]/90 font-serif-luxury italic">
                    {step.deliverable}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#161411] border border-[#d4a96b]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-serif-luxury text-[#fbf8f3]">
              ¿Tienes una fecha en mente para tu celebración?
            </h4>
            <p className="text-xs text-[#eedec0]/70 font-sans-luxury mt-1">
              Las fechas para temporada alta en haciendas de Fusagasugá y Chinauta se reservan con varios meses de anticipación.
            </p>
          </div>
          <a
            href="#contacto"
            className="shrink-0 px-6 py-3 text-xs uppercase tracking-wider font-semibold text-[#12100e] bg-gradient-to-r from-[#d4a96b] to-[#c5924b] rounded hover:brightness-110 transition-all shadow-md whitespace-nowrap"
          >
            Consultar disponibilidad
          </a>
        </div>
      </div>
    </section>
  );
}
