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
import { MAISON_NOCTURNE_MASTER_PROMPT } from './perfumeryPrompt';
import { ARUNG_FOOTWEAR_MASTER_PROMPT } from './footwearPrompt';
import { KEMAS_LAB_MASTER_PROMPT } from './packagingPrompt';
import { WANA_APICULTURE_MASTER_PROMPT } from './apiculturePrompt';
import { KAYAN_FURNITURE_MASTER_PROMPT } from './furniturePrompt';
import { SOLA_GELATO_MASTER_PROMPT } from './gelatoPrompt';
import { SVALA_BATHHOUSE_MASTER_PROMPT } from './wellnessPrompt';
import { VERRA_OPTICS_MASTER_PROMPT } from './eyewearPrompt';
import { CHIDORI_WAGASHI_MASTER_PROMPT } from './wagashiPrompt';
import { ETOILE_BRIDAL_MASTER_PROMPT } from './bridalPrompt';
import { TATAH_LEATHER_MASTER_PROMPT } from './leatherPrompt';
import { AURA_DERMA_MASTER_PROMPT } from './dermaPrompt';
import { CELESTE_HORLOGERIE_MASTER_PROMPT } from './horologyPrompt';
import { CYANO_ARCHITECTURE_MASTER_PROMPT } from './architecturePrompt';
import { RESONANCE_AUDIO_MASTER_PROMPT } from './audioPrompt';
import { AXIS_KEYBOARDS_MASTER_PROMPT } from './keyboardPrompt';
import { SOMNA_SLEEP_MASTER_PROMPT } from './sleepPrompt';
import { KORU_LIMEWASH_MASTER_PROMPT } from './interiorPrompt';
import { HAVN_BOATCRAFT_MASTER_PROMPT } from './maritimePrompt';
import { AURELIA_WATERCOLOR_MASTER_PROMPT } from './stationeryPrompt';
import { LIGNUM_LUTHERIE_MASTER_PROMPT } from './lutheriePrompt';
import { AEROVELO_CYCLING_MASTER_PROMPT } from './cyclingPrompt';
import { FORJA_CUTLERY_MASTER_PROMPT } from './cutleryPrompt';
import { LUMEN_GLASSCRAFT_MASTER_PROMPT } from './glasscraftPrompt';
import { LUMINA_PHOTOGRAPHY_MASTER_PROMPT } from './photographyPrompt';
import { KINETIC_FITNESS_MASTER_PROMPT } from './fitnessPrompt';
import { REDLINE_AUTOMOTIVE_MASTER_PROMPT } from './automotivePrompt';

export const MASTER_PROMPTS_BY_SLUG: Record<string, string> = {
  'redline-motoworks': REDLINE_AUTOMOTIVE_MASTER_PROMPT,
  'kinetic-fitness-gym': KINETIC_FITNESS_MASTER_PROMPT,
  'lumina-creative-photography': LUMINA_PHOTOGRAPHY_MASTER_PROMPT,
  'lumen-artisan-glasscraft': LUMEN_GLASSCRAFT_MASTER_PROMPT,
  'forja-damascus-cutlery': FORJA_CUTLERY_MASTER_PROMPT,
  'aerovelo-titanium-bicycles': AEROVELO_CYCLING_MASTER_PROMPT,
  'lignum-acoustic-lutherie': LIGNUM_LUTHERIE_MASTER_PROMPT,
  'aurelia-botanical-watercolor': AURELIA_WATERCOLOR_MASTER_PROMPT,
  'havn-wooden-boatcraft': HAVN_BOATCRAFT_MASTER_PROMPT,
  'koru-mineral-limewash': KORU_LIMEWASH_MASTER_PROMPT,
  'somna-sleep-sanctuary': SOMNA_SLEEP_MASTER_PROMPT,
  'axis-mechanical-keyboards': AXIS_KEYBOARDS_MASTER_PROMPT,
  'resonance-analog-audio': RESONANCE_AUDIO_MASTER_PROMPT,
  'cyano-blueprint-architecture': CYANO_ARCHITECTURE_MASTER_PROMPT,
  'celeste-astronomical-horology': CELESTE_HORLOGERIE_MASTER_PROMPT,
  'aura-derma-clinic': AURA_DERMA_MASTER_PROMPT,
  'tatah-artisanal-leather': TATAH_LEATHER_MASTER_PROMPT,
  'etoile-bridal-couture': ETOILE_BRIDAL_MASTER_PROMPT,
  'chidori-kyoto-wagashi': CHIDORI_WAGASHI_MASTER_PROMPT,
  'verra-japanese-eyewear': VERRA_OPTICS_MASTER_PROMPT,
  'svala-nordic-bathhouse': SVALA_BATHHOUSE_MASTER_PROMPT,
  'sola-artisan-gelato': SOLA_GELATO_MASTER_PROMPT,
  'kayan-solid-furniture': KAYAN_FURNITURE_MASTER_PROMPT,
  'wana-wild-honey': WANA_APICULTURE_MASTER_PROMPT,
  'kemas-lab-packaging': KEMAS_LAB_MASTER_PROMPT,
  'arung-technical-footwear': ARUNG_FOOTWEAR_MASTER_PROMPT,
  'maison-nocturne-parfumerie': MAISON_NOCTURNE_MASTER_PROMPT,
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
  MAISON_NOCTURNE_MASTER_PROMPT,
  ARUNG_FOOTWEAR_MASTER_PROMPT,
  SVALA_BATHHOUSE_MASTER_PROMPT,
  VERRA_OPTICS_MASTER_PROMPT,
  CHIDORI_WAGASHI_MASTER_PROMPT,
  ETOILE_BRIDAL_MASTER_PROMPT,
  TATAH_LEATHER_MASTER_PROMPT,
  AURA_DERMA_MASTER_PROMPT,
  CELESTE_HORLOGERIE_MASTER_PROMPT,
  CYANO_ARCHITECTURE_MASTER_PROMPT,
  RESONANCE_AUDIO_MASTER_PROMPT,
  AXIS_KEYBOARDS_MASTER_PROMPT,
  SOMNA_SLEEP_MASTER_PROMPT,
  KORU_LIMEWASH_MASTER_PROMPT,
  HAVN_BOATCRAFT_MASTER_PROMPT,
  AURELIA_WATERCOLOR_MASTER_PROMPT,
  LIGNUM_LUTHERIE_MASTER_PROMPT,
  AEROVELO_CYCLING_MASTER_PROMPT,
  FORJA_CUTLERY_MASTER_PROMPT,
  LUMEN_GLASSCRAFT_MASTER_PROMPT,
  LUMINA_PHOTOGRAPHY_MASTER_PROMPT,
  KINETIC_FITNESS_MASTER_PROMPT,
  REDLINE_AUTOMOTIVE_MASTER_PROMPT,
};
