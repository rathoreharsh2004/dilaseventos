export type EventType = 
  | 'boda'
  | 'quinceanera'
  | 'corporativo'
  | 'intimo'
  | 'otro';

export interface ExperienceCategory {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  imageSrc: string;
  imageAlt: string;
  tag: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: EventType | 'detalles';
  categoryLabel: string;
  location: string;
  year: string;
  guestCount: string;
  description: string;
  palette: string[];
  imageSrc: string;
  aspectRatio?: 'tall' | 'wide' | 'square';
}

export interface EnquiryFormData {
  fullName: string;
  whatsapp: string;
  email: string;
  eventType: EventType;
  eventDate: string;
  location: string;
  guestCount: string;
  budgetRange: string;
  notes: string;
}
