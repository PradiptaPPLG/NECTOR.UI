const WHATSAPP_NUMBER = '6285219583336';
export const DISPLAY_PHONE = '+62 852-1958-3336';

export function getTemplateCommissionUrl(templateTitle: string): string {
  const message = `Hi NECTOR.UI! I'm interested in commissioning a custom website inspired by ${templateTitle}. Could you share the available customization options, estimated price, and development timeline?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getGeneralCommissionUrl(inquiryType: string = 'General Inquiry'): string {
  const message = `Hi NECTOR.UI! I'm interested in commissioning a bespoke website (${inquiryType}). Could you share your current availability, customization process, and estimated timeline?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
