import { ExperienceCategory } from '../types/index.ts';

export const EXPERIENCES: ExperienceCategory[] = [
  {
    id: 'bodas',
    code: '01',
    title: 'Bodas de Autor',
    subtitle: 'El inicio de su historia más bella',
    description:
      'Transformamos haciendas, jardines y espacios patrimoniales en atmósferas románticas inolvidables. Diseñamos altares florales de ensueño, banquetes a la luz de las velas y experiencias sensoriales que trascienden en el tiempo.',
    highlights: [
      'Ceremonias al aire libre y en recintos coloniales',
      'Montaje de mobiliario imperial y cristalería fina',
      'Iluminación arquitectónica cálida y fuegos fríos',
      'Coordinación integral de tiempos y protocolo',
    ],
    imageSrc: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Recepción nupcial de gala con arreglos florales románticos y velas cálidas',
    tag: 'Bodas',
  },
  {
    id: 'quinceanera',
    code: '02',
    title: 'Quinceañeras Inolvidables',
    subtitle: 'Una noche mágica que marcará su vida',
    description:
      'Celebraciones de 15 años concebidas como auténticas pasarelas de alta costura o jardines encantados. Cada entrada triunfal, coreografía de vals y show de luces se programa milimétricamente para que la quinceañera brille con luz propia.',
    highlights: [
      'Pistas de baile LED infinitas y pasarelas de cristal',
      'Zonas temáticas fotográficas y photobooth de lujo',
      'Ingeniería de iluminación escénica y efectos especiales',
      'Curaduría de cócteles sin licor y mesa de postres gourmet',
    ],
    imageSrc: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Gala de quinceañera con diseño escénico moderno y candelabros',
    tag: 'Quinceañeras',
  },
  {
    id: 'corporativo',
    code: '03',
    title: 'Eventos Corporativos & Galas',
    subtitle: 'Impacto de marca con rigor institucional',
    description:
      'Lanzamientos de producto, asambleas empresariales, congresos y cenas de fin de año con los más altos estándares corporativos. Integramos tecnología audiovisual de vanguardia con un diseño sobrio y sofisticado.',
    highlights: [
      'Escenografías modulares y branding espacial inmersivo',
      'Pantallas LED de alta definición y microfonía profesional',
      'Catering ejecutivo de alta cocina y estaciones de autor',
      'Logística estricta de registro y acreditación de invitados',
    ],
    imageSrc: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Salón corporativo de conferencia y gala con iluminación escénica dorada',
    tag: 'Corporativo',
  },
  {
    id: 'intimo',
    code: '04',
    title: 'Celebraciones Íntimas & Baby Showers',
    subtitle: 'La belleza de los detalles cercanos',
    description:
      'Reuniones familiares exclusivas, aniversarios, cumpleaños especiales y baby showers diseñados con delicadeza artística. Creamos un ambiente acogedor donde cada invitado se siente profundamente honrado.',
    highlights: [
      'Mesas estilo banquete boutique con vajilla de diseño',
      'Paletas de colores naturales y fibras botánicas finas',
      'Espacios lounge contemporáneos con textiles suaves',
      'Fotografía editorial de momentos familiares espontáneos',
    ],
    imageSrc: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Celebración íntima con montaje floral delicado y detalles en oro mate',
    tag: 'Celebraciones Íntimas',
  },
  {
    id: 'produccion',
    code: '05',
    title: 'Diseño, Producción & Logística Integral',
    subtitle: 'El engranaje técnico detrás de la magia',
    description:
      'No dejamos nada al azar. Disponemos de carpas estructurales de cristal, sistemas de audio Line Array, generadores eléctricos de respaldo, trusses y un equipo humano con amplia experiencia en Fusagasugá y la región del Sumapaz.',
    highlights: [
      'Planos de distribución 3D y simulación de flujos de personas',
      'Infraestructura técnica para espacios abiertos y campestres',
      'Permisos locales, cronograma minuto a minuto y seguridad',
      'Supervisión continua en sitio hasta el último minuto',
    ],
    imageSrc: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Producción de evento con rigging, iluminación arquitectónica y sonido profesional',
    tag: 'Producción Integral',
  },
];
