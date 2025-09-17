import { PaginationOptions, SortOptions, FilterResult } from '../types/common.types';
import { DiamondColor, DiaryDiamondColor } from '../types/color.types';
import { DiamondShape, DiaryDiamondShape } from '../types/shape.types';

/**
 * Generic search function for any array of objects
 */
export function searchItems<T>(
  items: T[],
  searchTerm: string,
  searchFields: (keyof T)[],
  options: { caseSensitive?: boolean; exactMatch?: boolean } = {}
): T[] {
  if (!searchTerm.trim()) return items;

  const { caseSensitive = false, exactMatch = false } = options;
  const normalizedSearchTerm = caseSensitive ? searchTerm : searchTerm.toLowerCase();

  return items.filter(item => {
    return searchFields.some(field => {
      const fieldValue = String(item[field]);
      const normalizedFieldValue = caseSensitive ? fieldValue : fieldValue.toLowerCase();

      return exactMatch
        ? normalizedFieldValue === normalizedSearchTerm
        : normalizedFieldValue.includes(normalizedSearchTerm);
    });
  });
}

/**
 * Paginate array of items
 */
export function paginateItems<T>(
  items: T[],
  options: PaginationOptions = {}
): FilterResult<T> {
  const { page = 1, limit = 10 } = options;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedItems = items.slice(startIndex, endIndex);

  return {
    items: paginatedItems,
    total: items.length,
    hasMore: endIndex < items.length
  };
}

/**
 * Sort array of items
 */
export function sortItems<T>(
  items: T[],
  sortOptions: SortOptions
): T[] {
  const { field, direction } = sortOptions;

  return [...items].sort((a, b) => {
    const aValue = String((a as any)[field]);
    const bValue = String((b as any)[field]);

    const comparison = aValue.localeCompare(bValue, undefined, {
      numeric: true,
      sensitivity: 'base'
    });

    return direction === 'desc' ? -comparison : comparison;
  });
}

/**
 * Advanced search with filtering, sorting, and pagination
 */
export function advancedSearch<T>(
  items: T[],
  searchTerm: string,
  searchFields: (keyof T)[],
  options: {
    searchOptions?: { caseSensitive?: boolean; exactMatch?: boolean };
    sortOptions?: SortOptions;
    paginationOptions?: PaginationOptions;
  } = {}
): FilterResult<T> {
  let results = searchItems(items, searchTerm, searchFields, options.searchOptions);

  if (options.sortOptions) {
    results = sortItems(results, options.sortOptions);
  }

  if (options.paginationOptions) {
    return paginateItems(results, options.paginationOptions);
  }

  return {
    items: results,
    total: results.length,
    hasMore: false
  };
}

/**
 * Fuzzy search implementation for approximate matching
 */
export function fuzzySearch<T>(
  items: T[],
  searchTerm: string,
  searchFields: (keyof T)[],
  threshold: number = 0.6
): Array<T & { score: number }> {
  if (!searchTerm.trim()) return items.map(item => ({ ...item, score: 1 }));

  const results = items.map(item => {
    let maxScore = 0;

    searchFields.forEach(field => {
      const fieldValue = String(item[field]).toLowerCase();
      const score = calculateSimilarity(searchTerm.toLowerCase(), fieldValue);
      maxScore = Math.max(maxScore, score);
    });

    return { ...item, score: maxScore };
  });

  return results
    .filter(result => result.score >= threshold)
    .sort((a, b) => b.score - a.score);
}

/**
 * Calculate similarity between two strings (Levenshtein distance based)
 */
function calculateSimilarity(str1: string, str2: string): number {
  const matrix = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null));

  for (let i = 0; i <= str1.length; i++) matrix[0][i] = i;
  for (let j = 0; j <= str2.length; j++) matrix[j][0] = j;

  for (let j = 1; j <= str2.length; j++) {
    for (let i = 1; i <= str1.length; i++) {
      const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1,
        matrix[j - 1][i] + 1,
        matrix[j - 1][i - 1] + indicator
      );
    }
  }

  const distance = matrix[str2.length][str1.length];
  const maxLength = Math.max(str1.length, str2.length);
  return maxLength === 0 ? 1 : (maxLength - distance) / maxLength;
}

/**
 * Find similar items based on multiple criteria
 */
export function findSimilarItems<T>(
  items: T[],
  targetItem: T,
  compareFields: (keyof T)[],
  maxResults: number = 5
): T[] {
  const scores = items.map(item => {
    if (item === targetItem) return { item, score: -1 }; // Exclude the target item itself

    let totalScore = 0;
    compareFields.forEach(field => {
      const targetValue = String(targetItem[field]).toLowerCase();
      const itemValue = String(item[field]).toLowerCase();
      totalScore += calculateSimilarity(targetValue, itemValue);
    });

    return { item, score: totalScore / compareFields.length };
  });

  return scores
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults)
    .map(({ item }) => item);
}