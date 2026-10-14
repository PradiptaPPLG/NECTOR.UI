export type Category =
  | 'all'
  | 'ui-templates'
  | 'agency'
  | 'wedding'
  | 'cafe'
  | 'padang'
  | 'beverage'
  | 'bakery'
  | 'florist'
  | 'barber'
  | 'pottery'
  | 'organik'
  | 'buah'
  | 'kasir'
  | 'perpustakaan'
  | 'restaurant'
  | 'hospitality'
  | 'umkm';

export type WeddingSubcategory =
  | 'minimal-editorial'
  | 'romantic-botanical'
  | 'modern-luxury'
  | 'contemporary-traditional'
  | 'elegant-monochrome'
  | 'colorful-celebration';

export interface TemplateFile {
  filename: string;
  language: 'html' | 'css' | 'javascript' | 'typescript' | 'tsx';
  content: string;
  description?: string;
}

export interface TemplatePrompt {
  summary: string;
  designDirection: string;
  layoutAndGrid: string;
  typographyAndColor: string;
  interactions: string;
  technicalRequirements: string;
  isReconstructed?: boolean;
}

export interface Template {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: Category;
  weddingSubcategory?: WeddingSubcategory;
  tags: string[];
  technologies: string[];
  thumbnailSvgType: string;
  previewComponentKey: string;
  htmlPath?: string;
  htmlFolderPath?: string;
  features: string[];
  usageInstructions: string[];
  sourceFiles: TemplateFile[];
  prompt: TemplatePrompt;
  featured: boolean;
  publishedAt: string;
  livePreviewAvailable: boolean;
  accentColor: string;
}

export interface ToastNotification {
  id: string;
  message: string;
  type: 'success' | 'info' | 'copied';
}
