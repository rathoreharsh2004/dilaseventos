import type { EnquiryFormData } from '../types/index.ts';

export const BUSINESS_WHATSAPP_NUMBER = '573144710728';
export const BUSINESS_INSTAGRAM_URL = 'https://www.instagram.com/dilas.eventos/';

export const EVENT_TYPE_LABELS: Record<string, string> = {
  boda: 'Boda Exclusiva',
  quinceanera: 'Quinceañera de Gala',
  corporativo: 'Evento Corporativo / Institucional',
  intimo: 'Celebración Íntima / Baby Shower',
  otro: 'Celebración Especial Personalizada',
};

export const BUDGET_RANGES = [
  { value: '8m-15m', label: '$8.000.000 – $15.000.000 COP' },
  { value: '15m-30m', label: '$15.000.000 – $30.000.000 COP' },
  { value: '30m-60m', label: '$30.000.000 – $60.000.000 COP' },
  { value: '60m+', label: 'Más de $60.000.000 COP (Producción Gran Escala)' },
  { value: 'por-definir', label: 'Por asesorar según propuesta de diseño' },
];

export const GUEST_COUNT_OPTIONS = [
  '20 – 50 invitados (Íntimo)',
  '50 – 100 invitados (Mediano)',
  '100 – 200 invitados (Magno)',
  'Más de 200 invitados (Gran Gala)',
];

/**
 * Validates a Colombian or international WhatsApp phone number.
 */
export function validatePhoneNumber(phone: string): { isValid: boolean; error?: string } {
  const cleaned = phone.replace(/[\s\-\(\)\+]/g, '');
  if (!cleaned) {
    return { isValid: false, error: 'El número de WhatsApp es requerido.' };
  }
  if (!/^\d+$/.test(cleaned)) {
    return { isValid: false, error: 'El número solo debe contener dígitos.' };
  }
  if (cleaned.length < 10) {
    return { isValid: false, error: 'El número debe contener al menos 10 dígitos.' };
  }
  return { isValid: true };
}

/**
 * Validates the enquiry form data.
 */
export function validateEnquiryForm(data: Partial<EnquiryFormData>): {
  isValid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 3) {
    errors.fullName = 'Por favor ingresa tu nombre completo (mínimo 3 caracteres).';
  }

  const phoneValidation = validatePhoneNumber(data.whatsapp || '');
  if (!phoneValidation.isValid && phoneValidation.error) {
    errors.whatsapp = phoneValidation.error;
  }

  if (data.email && data.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = 'El correo electrónico no tiene un formato válido.';
  }

  if (!data.eventType) {
    errors.eventType = 'Por favor selecciona el tipo de evento.';
  }

  if (!data.eventDate || !data.eventDate.trim()) {
    errors.eventDate = 'Por favor indica la fecha aproximada o deseada.';
  }

  if (!data.location || data.location.trim().length < 2) {
    errors.location = 'Por favor indica el lugar o municipio previsto (ej. Fusagasugá, Chinauta).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Formats a clean, high-end Spanish text message for WhatsApp pre-fill.
 */
export function generateWhatsAppMessage(data: EnquiryFormData): string {
  const eventLabel = EVENT_TYPE_LABELS[data.eventType] || data.eventType;
  const budgetObj = BUDGET_RANGES.find((b) => b.value === data.budgetRange);
  const budgetLabel = budgetObj ? budgetObj.label : (data.budgetRange || 'A convenir');

  return (
    `✨ *SOLICITUD DE COTIZACIÓN · DILAS EVENTOS*\n\n` +
    `Hola equipo de Dilas Eventos, deseo agendar una asesoría y solicitar una propuesta para mi evento:\n\n` +
    `👤 *Cliente:* ${data.fullName.trim()}\n` +
    `🎉 *Tipo de Evento:* ${eventLabel}\n` +
    `📅 *Fecha Tentativa:* ${data.eventDate.trim()}\n` +
    `📍 *Lugar / Municipio:* ${data.location.trim()}\n` +
    `👥 *Número de Invitados:* ${data.guestCount || 'Por definir'}\n` +
    `💰 *Rango de Presupuesto:* ${budgetLabel}\n` +
    (data.email ? `✉️ *Correo Electrónico:* ${data.email.trim()}\n` : '') +
    (data.notes ? `📝 *Detalles Adicionales:* ${data.notes.trim()}\n\n` : '\n') +
    `Quedo atento(a) a su respuesta para dar el siguiente paso. ¡Muchas gracias!`
  );
}

/**
 * Constructs the full wa.me link with encoded message.
 */
export function buildWhatsAppLink(data: EnquiryFormData): string {
  const message = generateWhatsAppMessage(data);
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encoded}`;
}
