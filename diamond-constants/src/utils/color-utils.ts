import { DiamondColor, DiaryDiamondColor, ColorFilterOptions, ColorSearchResult } from '../types/color.types';
import { DiamondColors } from '../constants/colors/diamond-colors';
import { DiaryDiamondColors } from '../constants/colors/diary-diamond-colors';

/**
 * Find a diamond color by its value
 */
export function findColorByValue(value: string, useDiaryColors: boolean = false): ColorSearchResult {
  const colors = useDiaryColors ? DiaryDiamondColors : DiamondColors;
  return colors.find(color => color.value === value) || null;
}

/**
 * Find a diamond color by its name
 */
export function findColorByName(name: string, useDiaryColors: boolean = false): ColorSearchResult {
  const colors = useDiaryColors ? DiaryDiamondColors : DiamondColors;
  return colors.find(color => color.name === name) || null;
}

/**
 * Find a diamond color by its image name
 */
export function findColorByImage(img: string, useDiaryColors: boolean = false): ColorSearchResult {
  const colors = useDiaryColors ? DiaryDiamondColors : DiamondColors;
  return colors.find(color => color.img === img) || null;
}

/**
 * Search colors with flexible options
 */
export function searchColors(options: ColorFilterOptions, useDiaryColors: boolean = false): ColorSearchResult[] {
  const colors = useDiaryColors ? DiaryDiamondColors : DiamondColors;
  
  return colors.filter(color => {
    if (options.byName) {
      const match = options.exactMatch 
        ? color.name === options.byName
        : color.name.toLowerCase().includes(options.byName.toLowerCase());
      if (!match) return false;
    }
    
    if (options.byValue) {
      const match = options.exactMatch
        ? color.value === options.byValue
        : color.value.toLowerCase().includes(options.byValue.toLowerCase());
      if (!match) return false;
    }
    
    if (options.byImg) {
      const match = options.exactMatch
        ? color.img === options.byImg
        : color.img.toLowerCase().includes(options.byImg.toLowerCase());
      if (!match) return false;
    }
    
    return true;
  });
}

/**
 * Get all unique color values
 */
export function getUniqueColorValues(useDiaryColors: boolean = false): string[] {
  const colors = useDiaryColors ? DiaryDiamondColors : DiamondColors;
  return [...new Set(colors.map(color => color.value))];
}

/**
 * Get all unique color names
 */
export function getUniqueColorNames(useDiaryColors: boolean = false): string[] {
  const colors = useDiaryColors ? DiaryDiamondColors : DiamondColors;
  return [...new Set(colors.map(color => color.name))];
}

/**
 * Get all unique color images
 */
export function getUniqueColorImages(useDiaryColors: boolean = false): string[] {
  const colors = useDiaryColors ? DiaryDiamondColors : DiamondColors;
  return [...new Set(colors.map(color => color.img))];
}

/**
 * Check if a color value exists
 */
export function isValidColorValue(value: string, useDiaryColors: boolean = false): boolean {
  return findColorByValue(value, useDiaryColors) !== null;
}