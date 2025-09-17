import { DiamondColor, DiaryDiamondColor } from '../types/color.types';
import { DiamondShape, DiaryDiamondShape } from '../types/shape.types';
import { DiamondOrigin } from '../types/origin.types';
import { findShapeByCode } from './shape-utils';

/**
 * Create a mapping from color values to image names
 */
export function createColorValueToImageMap(colors: DiamondColor[] | DiaryDiamondColor[]): Map<string, string> {
  const map = new Map<string, string>();
  colors.forEach(color => {
    map.set(color.value, color.img);
  });
  return map;
}

/**
 * Create a mapping from color names to values
 */
export function createColorNameToValueMap(colors: DiamondColor[] | DiaryDiamondColor[]): Map<string, string> {
  const map = new Map<string, string>();
  colors.forEach(color => {
    map.set(color.name, color.value);
  });
  return map;
}

/**
 * Create a mapping from shape values to image names
 */
export function createShapeValueToImageMap(shapes: DiamondShape[] | DiaryDiamondShape[]): Map<string, string> {
  const map = new Map<string, string>();
  shapes.forEach(shape => {
    map.set(shape.value, shape.img);
  });
  return map;
}

/**
 * Create a mapping from origin names to image names
 */
export function createOriginToImageMap(origins: DiamondOrigin[]): Map<string, string> {
  const map = new Map<string, string>();
  origins.forEach(origin => {
    map.set(origin.origin, origin.Img);
  });
  return map;
}

/**
 * Batch map shape codes to shape names
 */
export function batchMapShapeCodes(codes: string[]): Map<string, string> {
  const map = new Map<string, string>();
  codes.forEach(code => {
    const shape = findShapeByCode(code);
    if (shape) {
      map.set(code, shape);
    }
  });
  return map;
}

/**
 * Create reverse mapping from shape names to codes
 */
export function createShapeNameToCodesMap(): Map<string, string[]> {
  const map = new Map<string, string[]>();
  
  // You would import your cause shapes here
  // For now, using a simplified version
  const sampleMappings = [
    { code: 'CIRC', shape: 'Round' },
    { code: 'OB', shape: 'Oval' },
    { code: 'PB', shape: 'Pear' },
    { code: 'HB', shape: 'Heart' },
    { code: 'EM', shape: 'Emerald' },
    { code: 'CB', shape: 'Cushion' },
    { code: 'MMB', shape: 'Marquise' },
  ];

  sampleMappings.forEach(mapping => {
    const existing = map.get(mapping.shape) || [];
    map.set(mapping.shape, [...existing, mapping.code]);
  });

  return map;
}

/**
 * Normalize color value for consistent mapping
 */
export function normalizeColorValue(value: string): string {
  return value.toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/[\/\\]/g, '')
    .trim();
}

/**
 * Normalize shape value for consistent mapping
 */
export function normalizeShapeValue(value: string): string {
  return value.toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/[\/\\]/g, ' ')
    .trim();
}