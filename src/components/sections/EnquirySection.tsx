import { useState, useId } from 'react';
import {
  MessageCircle,
  Calendar,
  MapPin,
  Users,
  DollarSign,
  Send,
  CheckCircle2,
  Copy,
  Sparkles,
} from 'lucide-react';
import {
  validateEnquiryForm,
  buildWhatsAppLink,
  generateWhatsAppMessage,
  BUDGET_RANGES,
  GUEST_COUNT_OPTIONS,
  BUSINESS_WHATSAPP_NUMBER,
} from '../../utils/quotation.ts';
import { EnquiryFormData, EventType } from '../../types/index.ts';

export function EnquirySection() {
  const formId = useId();
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    whatsapp: '',
    email: '',
    eventType: 'boda',
    eventDate: '',
    location: 'Fusagasugá',
    guestCount: GUEST_COUNT_OPTIONS[1],
    budgetRange: '15m-30m',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateEnquiryForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitted(true);
    const link = buildWhatsAppLink(formData);
    // Open WhatsApp in new tab with the structured proposal
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const handleCopyMessage = () => {
    const text = generateWhatsAppMessage(formData);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contacto"
      className="relative py-24 md:py-36 bg-[#0f0e0c] border-t border-[#d4a96b]/15"
      aria-label="Formulario de cotización y contacto por WhatsApp"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#d4a96b] font-serif-luxury">
            Comencemos a Planear
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-normal text-[#f4efe8] tracking-tight">
            Cuéntanos qué estás{' '}
            <span className="italic text-gold-gradient">imaginando.</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-[#eedec0]/70 font-sans-luxury">
            Diligencia el formulario y te generaremos de inmediato una solicitud de cotización formal dirigida directamente a nuestro equipo en WhatsApp (+57 314 471 0728).
          </p>
        </div>

        {/* Form Container */}
        <div className="rounded-3xl bg-[#14120f] border border-[#d4a96b]/30 p-6 sm:p-10 md:p-12 shadow-2xl">
          {isSubmitted ? (
            <div className="py-8 text-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#d4a96b]/20 text-[#d4a96b] flex items-center justify-center mx-auto mb-4 border border-[#d4a96b]/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif-luxury text-[#fbf8f3]">
                ¡Tu cotización ha sido generada con éxito!
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#eedec0]/80 font-sans-luxury max-w-lg mx-auto">
                Hemos preparado tu mensaje formal para WhatsApp con todos los detalles de tu evento. Si la ventana de WhatsApp no se abrió automáticamente, pulsa el botón a continuación:
              </p>

              {/* Message preview box */}
              <div className="mt-6 max-w-xl mx-auto p-5 rounded-xl bg-[#1a1714] border border-[#d4a96b]/20 text-left text-xs font-mono text-[#eedec0]/80 whitespace-pre-wrap leading-relaxed max-h-60 overflow-y-auto">
                {generateWhatsAppMessage(formData)}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={buildWhatsAppLink(formData)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs uppercase tracking-wider font-semibold text-[#12100e] bg-gradient-to-r from-[#d4a96b] to-[#c5924b] rounded hover:brightness-110 transition-all shadow-xl"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Abrir WhatsApp (+57 314 471 0728)</span>
                </a>

                <button
                  onClick={handleCopyMessage}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs uppercase tracking-wider font-medium text-[#eedec0] border border-[#d4a96b]/30 rounded hover:bg-[#d4a96b]/10 transition-colors"
                >
                  <Copy className="w-4 h-4" />
                  <span>{copied ? '¡Copiado al portapapeles!' : 'Copiar mensaje'}</span>
                </button>
              </div>

              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 text-xs text-[#d4a96b]/80 hover:text-[#d4a96b] underline"
              >
                Editar información y generar nueva solicitud
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Row 1: Name and WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor={`${formId}-fullName`}
                    className="block text-xs uppercase tracking-wider text-[#eedec0]/90 font-sans-luxury mb-2"
                  >
                    Nombre completo <span className="text-[#d4a96b]">*</span>
                  </label>
                  <input
                    id={`${formId}-fullName`}
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Ej. Carolina Mendoza"
                    className={`w-full px-4 py-3 rounded-xl bg-[#1c1916] border text-sm text-[#f4efe8] placeholder-[#eedec0]/30 focus:outline-none transition-colors ${
                      errors.fullName
                        ? 'border-red-500/80 focus:border-red-500'
                        : 'border-[#d4a96b]/20 focus:border-[#d4a96b]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-400 font-sans-luxury">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor={`${formId}-whatsapp`}
                    className="block text-xs uppercase tracking-wider text-[#eedec0]/90 font-sans-luxury mb-2"
                  >
                    Número de WhatsApp <span className="text-[#d4a96b]">*</span>
                  </label>
                  <input
                    id={`${formId}-whatsapp`}
                    name="whatsapp"
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="Ej. +57 314 471 0728 o 3101234567"
                    className={`w-full px-4 py-3 rounded-xl bg-[#1c1916] border text-sm text-[#f4efe8] placeholder-[#eedec0]/30 focus:outline-none transition-colors ${
                      errors.whatsapp
                        ? 'border-red-500/80 focus:border-red-500'
                        : 'border-[#d4a96b]/20 focus:border-[#d4a96b]'
                    }`}
                  />
                  {errors.whatsapp && (
                    <p className="mt-1 text-xs text-red-400 font-sans-luxury">
                      {errors.whatsapp}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Email (Optional) & Event Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor={`${formId}-email`}
                    className="block text-xs uppercase tracking-wider text-[#eedec0]/70 font-sans-luxury mb-2"
                  >
                    Correo electrónico <span className="text-[10px] text-[#eedec0]/40">(Opcional)</span>
                  </label>
                  <input
                    id={`${formId}-email`}
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="correo@ejemplo.com"
                    className={`w-full px-4 py-3 rounded-xl bg-[#1c1916] border text-sm text-[#f4efe8] placeholder-[#eedec0]/30 focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-red-500/80 focus:border-red-500'
                        : 'border-[#d4a96b]/20 focus:border-[#d4a96b]'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400 font-sans-luxury">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor={`${formId}-eventType`}
                    className="block text-xs uppercase tracking-wider text-[#eedec0]/90 font-sans-luxury mb-2"
                  >
                    Tipo de evento <span className="text-[#d4a96b]">*</span>
                  </label>
                  <select
                    id={`${formId}-eventType`}
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#1c1916] border border-[#d4a96b]/20 text-sm text-[#f4efe8] focus:outline-none focus:border-[#d4a96b] transition-colors"
                  >
                    <option value="boda">Boda de Ensueño</option>
                    <option value="quinceanera">Quinceañera de Gala (15 Años)</option>
                    <option value="corporativo">Evento Corporativo / Empresarial</option>
                    <option value="intimo">Celebración Íntima / Baby Shower</option>
                    <option value="otro">Celebración Personalizada Especial</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Event Date & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor={`${formId}-eventDate`}
                    className="block text-xs uppercase tracking-wider text-[#eedec0]/90 font-sans-luxury mb-2 flex items-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#d4a96b]" />
                    <span>Fecha estimada del evento <span className="text-[#d4a96b]">*</span></span>
                  </label>
                  <input
                    id={`${formId}-eventDate`}
                    name="eventDate"
                    type="text"
                    required
                    value={formData.eventDate}
                    onChange={handleChange}
                    placeholder="Ej. Noviembre 2026 o 15/12/2026"
                    className={`w-full px-4 py-3 rounded-xl bg-[#1c1916] border text-sm text-[#f4efe8] placeholder-[#eedec0]/30 focus:outline-none transition-colors ${
                      errors.eventDate
                        ? 'border-red-500/80 focus:border-red-500'
                        : 'border-[#d4a96b]/20 focus:border-[#d4a96b]'
                    }`}
                  />
                  {errors.eventDate && (
                    <p className="mt-1 text-xs text-red-400 font-sans-luxury">
                      {errors.eventDate}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor={`${formId}-location`}
                    className="block text-xs uppercase tracking-wider text-[#eedec0]/90 font-sans-luxury mb-2 flex items-center gap-1.5"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#d4a96b]" />
                    <span>Lugar / Municipio previsto <span className="text-[#d4a96b]">*</span></span>
                  </label>
                  <input
                    id={`${formId}-location`}
                    name="location"
                    type="text"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Ej. Hacienda en Chinauta, Salón en Fusagasugá"
                    className={`w-full px-4 py-3 rounded-xl bg-[#1c1916] border text-sm text-[#f4efe8] placeholder-[#eedec0]/30 focus:outline-none transition-colors ${
                      errors.location
                        ? 'border-red-500/80 focus:border-red-500'
                        : 'border-[#d4a96b]/20 focus:border-[#d4a96b]'
                    }`}
                  />
                  {errors.location && (
                    <p className="mt-1 text-xs text-red-400 font-sans-luxury">
                      {errors.location}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 4: Guest count & Estimated Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor={`${formId}-guestCount`}
                    className="block text-xs uppercase tracking-wider text-[#eedec0]/90 font-sans-luxury mb-2 flex items-center gap-1.5"
                  >
                    <Users className="w-3.5 h-3.5 text-[#d4a96b]" />
                    <span>Número aproximado de invitados</span>
                  </label>
                  <select
                    id={`${formId}-guestCount`}
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#1c1916] border border-[#d4a96b]/20 text-sm text-[#f4efe8] focus:outline-none focus:border-[#d4a96b] transition-colors"
                  >
                    {GUEST_COUNT_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor={`${formId}-budgetRange`}
                    className="block text-xs uppercase tracking-wider text-[#eedec0]/90 font-sans-luxury mb-2 flex items-center gap-1.5"
                  >
                    <DollarSign className="w-3.5 h-3.5 text-[#d4a96b]" />
                    <span>Presupuesto estimado en COP</span>
                  </label>
                  <select
                    id={`${formId}-budgetRange`}
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#1c1916] border border-[#d4a96b]/20 text-sm text-[#f4efe8] focus:outline-none focus:border-[#d4a96b] transition-colors"
                  >
                    {BUDGET_RANGES.map((b) => (
                      <option key={b.value} value={b.value}>
                        {b.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 5: Notes & Details */}
              <div>
                <label
                  htmlFor={`${formId}-notes`}
                  className="block text-xs uppercase tracking-wider text-[#eedec0]/90 font-sans-luxury mb-2"
                >
                  Detalles adicionales, temáticas o deseos específicos
                </label>
                <textarea
                  id={`${formId}-notes`}
                  name="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Cuéntanos sobre los colores que te encantan, el estilo musical, catering o cualquier solicitud especial..."
                  className="w-full px-4 py-3 rounded-xl bg-[#1c1916] border border-[#d4a96b]/20 text-sm text-[#f4efe8] placeholder-[#eedec0]/30 focus:outline-none focus:border-[#d4a96b] transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-[#eedec0]/60 font-sans-luxury">
                  <Sparkles className="w-4 h-4 text-[#d4a96b]" />
                  <span>Sin compromiso · Asesoría personalizada en Fusagasugá</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs uppercase tracking-wider font-semibold text-[#12100e] bg-gradient-to-r from-[#d4a96b] to-[#c5924b] rounded-xl hover:brightness-110 active:scale-[0.98] transition-all shadow-xl"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Generar cotización por WhatsApp</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
