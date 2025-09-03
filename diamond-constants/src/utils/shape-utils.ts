import { DiamondShape, DiaryDiamondShape, CauseShape, ShapeFilterOptions, ShapeSearchResult } from '../types/shape.types';
import { DiamondShapes } from '../constants/shapes/diamond-shapes';
import { DiaryDiamondShapes } from '../constants/shapes/diary-diamond-shapes';
import { DiaryCauseShape } from '../constants/shapes/cause-shapes';

/**
 * Find a diamond shape by its value
 */
export function findShapeByValue(value: string, useDiaryShapes: boolean = false): ShapeSearchResult {
  const shapes = useDiaryShapes ? DiaryDiamondShapes : DiamondShapes;
  return shapes.find(shape => shape.value === value) || null;
}

/**
 * Find a diamond shape by its image name
 */
export function findShapeByImage(img: string, useDiaryShapes: boolean = false): ShapeSearchResult {
  const shapes = useDiaryShapes ? DiaryDiamondShapes : DiamondShapes;
  return shapes.find(shape => shape.img === img) || null;
}

/**
 * Find shape by code (from cause shape mappings)
 */
export function findShapeByCode(code: string): string | null {
  const causeShape = DiaryCauseShape.find(cs => cs.code === code);
  return causeShape ? causeShape.shape : null;
}

/**
 * Map shape code to shape name
 */
export function mapShapeCode(code: string): string {
  const shape = findShapeByCode(code);
  return shape || 'Unknown Shape';
}

/**
 * Get all shape codes for a specific shape
 */
export function getCodesForShape(shapeName: string): string[] {
  return DiaryCauseShape
    .filter(cs => cs.shape === shapeName)
    .map(cs => cs.code);
}

/**
 * Search shapes with flexible options
 */
export function searchShapes(options: ShapeFilterOptions, useDiaryShapes: boolean = false): ShapeSearchResult[] {
  const shapes = useDiaryShapes ? DiaryDiamondShapes : DiamondShapes;
  
  return shapes.filter(shape => {
    if (options.byValue) {
      const match = options.exactMatch 
        ? shape.value === options.byValue
        : shape.value.toLowerCase().includes(options.byValue.toLowerCase());
      if (!match) return false;
    }
    
    if (options.byImg) {
      const match = options.exactMatch
        ? shape.img === options.byImg
        : shape.img.toLowerCase().includes(options.byImg.toLowerCase());
      if (!match) return false;
    }
    
    if (options.byCode) {
      const shapeFromCode = findShapeByCode(options.byCode);
      if (!shapeFromCode || shapeFromCode !== shape.value) return false;
    }
    
    return true;
  });
}

/**
 * Get all unique shape values
 */
export function getUniqueShapeValues(useDiaryShapes: boolean = false): string[] {
  const shapes = useDiaryShapes ? DiaryDiamondShapes : DiamondShapes;
  return [...new Set(shapes.map(shape => shape.value))];
}

/**
 * Get all available shape codes
 */
export function getAllShapeCodes(): string[] {
  return DiaryCauseShape.map(cs => cs.code);
}

/**
 * Check if a shape value exists
 */
export function isValidShapeValue(value: string, useDiaryShapes: boolean = false): boolean {
  return findShapeByValue(value, useDiaryShapes) !== null;
}

/**
 * Check if a shape code exists
 */
export function isValidShapeCode(code: string): boolean {
  return findShapeByCode(code) !== null;
}