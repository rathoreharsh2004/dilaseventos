import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validatePhoneNumber,
  validateEnquiryForm,
  generateWhatsAppMessage,
  buildWhatsAppLink,
  BUSINESS_WHATSAPP_NUMBER,
} from './quotation.ts';

test('validatePhoneNumber accepts valid 10-digit and international numbers', () => {
  assert.equal(validatePhoneNumber('+57 314 471 0728').isValid, true);
  assert.equal(validatePhoneNumber('3144710728').isValid, true);
  assert.equal(validatePhoneNumber('573144710728').isValid, true);
});

test('validatePhoneNumber rejects invalid or too short numbers', () => {
  assert.equal(validatePhoneNumber('12345').isValid, false);
  assert.equal(validatePhoneNumber('').isValid, false);
  assert.equal(validatePhoneNumber('abc-def-ghij').isValid, false);
});

test('validateEnquiryForm catches missing mandatory fields', () => {
  const result = validateEnquiryForm({
    fullName: '',
    whatsapp: '123',
    eventType: undefined,
  });
  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.whatsapp);
  assert.ok(result.errors.eventType);
});

test('validateEnquiryForm passes when valid fields are supplied', () => {
  const result = validateEnquiryForm({
    fullName: 'Camila Rodriguez',
    whatsapp: '+57 310 987 6543',
    eventType: 'boda',
    eventDate: '2026-11-20',
    location: 'Chinauta, Cundinamarca',
    guestCount: '100 – 200 invitados (Magno)',
    budgetRange: '30m-60m',
  });
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('generateWhatsAppMessage creates elegant Spanish template with correct business details', () => {
  const msg = generateWhatsAppMessage({
    fullName: 'David Morales',
    whatsapp: '3144710728',
    email: 'david@example.com',
    eventType: 'quinceanera',
    eventDate: '2026-12-15',
    location: 'Fusagasugá',
    guestCount: '50 – 100 invitados (Mediano)',
    budgetRange: '15m-30m',
    notes: 'Temática jardín nocturno con iluminación cálida',
  });

  assert.ok(msg.includes('DILAS EVENTOS'));
  assert.ok(msg.includes('David Morales'));
  assert.ok(msg.includes('Quinceañera de Gala'));
  assert.ok(msg.includes('Fusagasugá'));
  assert.ok(msg.includes('$15.000.000 – $30.000.000 COP'));
});

test('buildWhatsAppLink generates valid wa.me URL with phone 573144710728', () => {
  const link = buildWhatsAppLink({
    fullName: 'Elena Gomez',
    whatsapp: '3144710728',
    email: '',
    eventType: 'corporativo',
    eventDate: '2026-10-30',
    location: 'Fusagasugá',
    guestCount: '100 – 200 invitados (Magno)',
    budgetRange: '30m-60m',
    notes: '',
  });

  assert.ok(link.startsWith(`https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=`));
  assert.ok(link.includes(encodeURIComponent('Elena Gomez')));
});
