type StudioContact = { email: string | null; phone: string | null; whatsapp: string | null };

export function studioContactLinks({ email, phone, whatsapp }: StudioContact) {
  const e164 = /^\+[1-9][0-9]{6,14}$/;
  if (email !== null && !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(email)) throw new Error('Set contact.email to a confirmed studio email address or null.');
  if (phone !== null && !e164.test(phone)) throw new Error('Set contact.phone to a confirmed international number or null.');
  if (whatsapp !== null && !e164.test(whatsapp)) throw new Error('Set contact.whatsapp to a confirmed international WhatsApp number or null.');
  return [
    ...(email ? [{ kind: 'email' as const, href: 'mailto:' + email, text: email }] : []),
    ...(phone ? [{ kind: 'phone' as const, href: 'tel:' + phone, text: phone }] : []),
    ...(whatsapp ? [{ kind: 'whatsapp' as const, href: 'https://wa.me/' + whatsapp.slice(1) }] : []),
  ];
}
