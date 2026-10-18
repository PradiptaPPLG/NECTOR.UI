export const WHATSAPP_NUMBER = '6285219583336';
export const DISPLAY_PHONE = '+62 852-1958-3336';

export interface CustomCommissionData {
  theme: string;
  customTheme?: string;
  visualStyle: string;
  features: string[];
  customFeature?: string;
  timeline: string;
  budgetRange?: string;
  clientName?: string;
  notes?: string;
  templateInspiration?: string;
}

export function buildCustomWebsiteMessage(data: CustomCommissionData): string {
  const brandName = data.clientName?.trim() || 'Klien NECTOR';
  const effectiveTheme = data.customTheme?.trim()
    ? `${data.theme} (${data.customTheme.trim()})`
    : data.theme;

  const featuresList =
    data.features.length > 0
      ? data.features.map(f => `  • ${f}`).join('\n')
      : '  • Standar responsif & optimal';

  const customFeatureLine = data.customFeature?.trim()
    ? `\n  • Fitur Kustom: ${data.customFeature.trim()}`
    : '';

  const notesLine = data.notes?.trim()
    ? `\n📝 Catatan / Referensi Ide:\n"${data.notes.trim()}"\n`
    : '';

  const templateLine = data.templateInspiration?.trim()
    ? `\n✨ Inspirasi Desain: Template ${data.templateInspiration.trim()}\n`
    : '';

  const budgetLine = data.budgetRange?.trim() && data.budgetRange !== 'Fleksibel'
    ? `\n💰 Estimasi Anggaran: ${data.budgetRange.trim()}`
    : '';

  return (
    `Halo NECTOR.UI! Saya ingin memesan pembuatan website kustom dengan spesifikasi berikut:\n\n` +
    `📋 DETAIL SPESIFIKASI PROYEK:\n` +
    `• Nama / Brand: ${brandName}\n` +
    `• Tema / Jenis Web: ${effectiveTheme}\n` +
    `• Karakter Visual: ${data.visualStyle}\n` +
    `• Kebutuhan Fitur:\n${featuresList}${customFeatureLine}\n` +
    `• Target Waktu: ${data.timeline}` +
    `${budgetLine}` +
    `${templateLine}` +
    `${notesLine}\n` +
    `Boleh info ketersediaan jadwal, alur pengerjaan, dan estimasi biayanya? Terima kasih!`
  );
}

export function getCustomCommissionWhatsAppUrl(data: CustomCommissionData): string {
  const message = buildCustomWebsiteMessage(data);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getTemplateCommissionUrl(templateTitle: string): string {
  const message = `Halo NECTOR.UI! Saya tertarik untuk memesan pembuatan website kustom yang terinspirasi dari template ${templateTitle}. Boleh info pilihan kustomisasi, estimasi biaya, dan waktu pengerjaannya?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getGeneralCommissionUrl(inquiryType: string = 'Konsultasi Proyek'): string {
  const message = `Halo NECTOR.UI! Saya ingin berkonsultasi mengenai pembuatan website kustom (${inquiryType}). Boleh info ketersediaan jadwal, alur kerja, dan estimasi biayanya?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

