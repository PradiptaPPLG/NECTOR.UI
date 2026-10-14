const WHATSAPP_NUMBER = '6285219583336';
export const DISPLAY_PHONE = '+62 852-1958-3336';

export function getTemplateCommissionUrl(templateTitle: string): string {
  const message = `Halo NECTOR.UI! Saya tertarik untuk memesan pembuatan website kustom yang terinspirasi dari template ${templateTitle}. Boleh info pilihan kustomisasi, estimasi biaya, dan waktu pengerjaannya?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getGeneralCommissionUrl(inquiryType: string = 'Konsultasi Proyek'): string {
  const message = `Halo NECTOR.UI! Saya ingin berkonsultasi mengenai pembuatan website kustom (${inquiryType}). Boleh info ketersediaan jadwal, alur kerja, dan estimasi biayanya?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
