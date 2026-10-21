import type { MasterPromptSection, TemplatePrompt } from '../types';

/**
 * Parses markdown master prompt into structured sections based on '## ' headers.
 */
export function parseMasterPrompt(markdown: string): MasterPromptSection[] {
  if (!markdown || !markdown.trim()) return [];

  const lines = markdown.split(/\r?\n/);
  const sections: MasterPromptSection[] = [];
  let currentTitle = '';
  let currentNumber = '';
  let currentLines: string[] = [];
  let sectionIndex = 1;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const isMainH2 = line.startsWith('## ') && !line.startsWith('### ');

    if (isMainH2) {
      if (currentTitle) {
        sections.push({
          id: `sec-${sectionIndex}-${slugify(currentTitle)}`,
          number: currentNumber || String(sectionIndex).padStart(2, '0'),
          title: currentTitle,
          content: currentLines.join('\n').trim(),
        });
        sectionIndex++;
      }

      // Extract number and clean title
      const rawHeader = line.replace(/^##\s+/, '').trim();
      const numMatch = rawHeader.match(/^(\d+)\.\s*(.+)$/);
      if (numMatch) {
        currentNumber = numMatch[1].padStart(2, '0');
        currentTitle = numMatch[2].trim();
      } else {
        currentNumber = String(sectionIndex).padStart(2, '0');
        currentTitle = rawHeader;
      }
      currentLines = [];
    } else {
      currentLines.push(line);
    }
  }

  // Push final section
  if (currentTitle) {
    sections.push({
      id: `sec-${sectionIndex}-${slugify(currentTitle)}`,
      number: currentNumber || String(sectionIndex).padStart(2, '0'),
      title: currentTitle,
      content: currentLines.join('\n').trim(),
    });
  }

  return sections;
}

/**
 * Builds fallback structured sections when masterPrompt is not explicitly set.
 */
export function getPromptSections(prompt: TemplatePrompt): MasterPromptSection[] {
  if (prompt.masterPrompt) {
    const parsed = parseMasterPrompt(prompt.masterPrompt);
    if (parsed.length > 0) return parsed;
  }

  return [
    {
      id: 'sec-01-design-direction',
      number: '01',
      title: 'ARAH DESAIN & IDENTITAS MEREK',
      content: prompt.designDirection,
    },
    {
      id: 'sec-02-layout-grid',
      number: '02',
      title: 'TATA LETAK, SISTEM GRID & RITME DESAIN',
      content: prompt.layoutAndGrid,
    },
    {
      id: 'sec-03-typography-color',
      number: '03',
      title: 'KOMBINASI TIPOGRAFI & PALET WARNA',
      content: prompt.typographyAndColor,
    },
    {
      id: 'sec-04-interactions',
      number: '04',
      title: 'INTERAKSI FISIK & MIKROANIMASI',
      content: prompt.interactions,
    },
    {
      id: 'sec-05-technical',
      number: '05',
      title: 'AKSESIBILITAS & PERSYARATAN TEKNIS',
      content: prompt.technicalRequirements,
    },
  ];
}

/**
 * Estimates prompt metrics: words, characters, tokens.
 */
export function calculatePromptMetrics(text: string) {
  const charCount = text.length;
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  // Standard heuristic for bilingual markdown/code prompts: ~1 token per 3.8 chars or 1.2 tokens per word
  const tokenEstimate = Math.round(words * 1.25);
  return { charCount, words, tokenEstimate };
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}
