/**
 * Utility functions for template publication and freshness calculations.
 */

/**
 * Evaluates whether a template is newly published (default threshold: 3 calendar days).
 * Automatically expires and returns false once more than 3 days have elapsed from publishedAt.
 * 
 * @param publishedAt - ISO date string (e.g. '2026-11-19' or '2026-11-18')
 * @param daysThreshold - Maximum number of days to consider as 'new' (default: 3)
 * @returns boolean indicating whether the template is considered new
 */
export function isNewTemplate(publishedAt?: string, daysThreshold: number = 3): boolean {
  if (!publishedAt) return false;

  // Split YYYY-MM-DD components to avoid timezone offset shifts
  const parts = publishedAt.split('-').map(Number);
  let pubTime: number;
  if (parts.length === 3 && !isNaN(parts[0]) && !isNaN(parts[1]) && !isNaN(parts[2])) {
    pubTime = new Date(parts[0], parts[1] - 1, parts[2]).getTime();
  } else {
    pubTime = new Date(publishedAt).getTime();
  }

  if (isNaN(pubTime)) return false;

  const now = Date.now();
  const diffDays = (now - pubTime) / (1000 * 60 * 60 * 24);

  // Return true if published within the threshold days.
  // diffDays >= -0.5 accommodates timezone discrepancies for same-day releases.
  return diffDays >= -0.5 && diffDays <= daysThreshold;
}

/**
 * Calculates the number of days elapsed since the template was published.
 */
export function getTemplateAgeDays(publishedAt?: string): number | null {
  if (!publishedAt) return null;
  const parts = publishedAt.split('-').map(Number);
  let pubTime: number;
  if (parts.length === 3 && !isNaN(parts[0]) && !isNaN(parts[1]) && !isNaN(parts[2])) {
    pubTime = new Date(parts[0], parts[1] - 1, parts[2]).getTime();
  } else {
    pubTime = new Date(publishedAt).getTime();
  }
  if (isNaN(pubTime)) return null;
  return Math.floor((Date.now() - pubTime) / (1000 * 60 * 60 * 24));
}
