import { KANTIN_MASTER_PROMPT } from './kantinPrompt';
import { SAVORE_MASTER_PROMPT } from './savorePrompt';
import { BAKERY_MASTER_PROMPT } from './bakeryPrompt';
import { PADANG_MASTER_PROMPT } from './padangPrompt';
import { SAKUMART_MASTER_PROMPT } from './sakumartPrompt';
import { AKSARA_MASTER_PROMPT } from './aksaraPrompt';
import { SENJA_MASTER_PROMPT } from './senjaPrompt';
import { SINAU_MASTER_PROMPT } from './sinauPrompt';
import {
  KALA_SANGRAI_MASTER_PROMPT,
  MIAU_MASTER_PROMPT,
  DOUGH_GLAZE_MASTER_PROMPT,
  BOTANICA_MASTER_PROMPT,
  BARBER_MASTER_PROMPT,
  TANAH_LIAT_MASTER_PROMPT,
  LOKAL_ORGANIK_MASTER_PROMPT,
  SIPARA_MASTER_PROMPT,
  RUKUN_BUAH_MASTER_PROMPT,
} from './otherPrompts';
import { KURA_APPAREL_MASTER_PROMPT } from './fashionPrompt';

export const MASTER_PROMPTS_BY_SLUG: Record<string, string> = {
  'kura-apparel': KURA_APPAREL_MASTER_PROMPT,
  'kantin-sekolah-selasar': KANTIN_MASTER_PROMPT,
  'savore-cafe': SAVORE_MASTER_PROMPT,
  'croissant-atelier-bakery': BAKERY_MASTER_PROMPT,
  'raso-mandeh-resto': PADANG_MASTER_PROMPT,
  'sakumart-pos-system': SAKUMART_MASTER_PROMPT,
  'pustaka-aksara-archive': AKSARA_MASTER_PROMPT,
  'senja-coffee-roastery': SENJA_MASTER_PROMPT,
  'sinau-study-desk': SINAU_MASTER_PROMPT,
  'kala-sangrai-roastery': KALA_SANGRAI_MASTER_PROMPT,
  'miau-cattery-boutique': MIAU_MASTER_PROMPT,
  'dough-and-glaze-donuts': DOUGH_GLAZE_MASTER_PROMPT,
  'botanica-floral-studio': BOTANICA_MASTER_PROMPT,
  'heritage-barber-club': BARBER_MASTER_PROMPT,
  'tanah-liat-pottery': TANAH_LIAT_MASTER_PROMPT,
  'lokal-organik-farm': LOKAL_ORGANIK_MASTER_PROMPT,
  'sipara-artisan-tea': SIPARA_MASTER_PROMPT,
  'rukun-buah-market': RUKUN_BUAH_MASTER_PROMPT,
};

export function getMasterPrompt(slug: string): string | undefined {
  return MASTER_PROMPTS_BY_SLUG[slug];
}

export {
  KANTIN_MASTER_PROMPT,
  SAVORE_MASTER_PROMPT,
  BAKERY_MASTER_PROMPT,
  PADANG_MASTER_PROMPT,
  SAKUMART_MASTER_PROMPT,
  AKSARA_MASTER_PROMPT,
  SENJA_MASTER_PROMPT,
  SINAU_MASTER_PROMPT,
  KALA_SANGRAI_MASTER_PROMPT,
  MIAU_MASTER_PROMPT,
  DOUGH_GLAZE_MASTER_PROMPT,
  BOTANICA_MASTER_PROMPT,
  BARBER_MASTER_PROMPT,
  TANAH_LIAT_MASTER_PROMPT,
  LOKAL_ORGANIK_MASTER_PROMPT,
  SIPARA_MASTER_PROMPT,
  RUKUN_BUAH_MASTER_PROMPT,
  KURA_APPAREL_MASTER_PROMPT,
};
