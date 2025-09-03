import { ValidationResult } from '../types/common.types';
import { DiamondColor, DiaryDiamondColor } from '../types/color.types';
import { DiamondShape, DiaryDiamondShape } from '../types/shape.types';
import { DiamondOrigin } from '../types/origin.types';

/**
 * Validate diamond color object structure
 */
export function validateDiamondColor(color: any): ValidationResult {
  const errors: string[] = [];

  if (!color) {
    errors.push('Color object is required');
    return { isValid: false, errors };
  }

  if (typeof color.id !== 'number') {
    errors.push('Color id must be a number');
  }

  if (typeof color.img !== 'string' || !color.img.trim()) {
    errors.push('Color img must be a non-empty string');
  }

  if (typeof color.name !== 'string' || !color.name.trim()) {
    errors.push('Color name must be a non-empty string');
  }

  if (typeof color.value !== 'string' || !color.value.trim()) {
    errors.push('Color value must be a non-empty string');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Validate diamond shape object structure
 */
export function validateDiamondShape(shape: any): ValidationResult {
  const errors: string[] = [];

  if (!shape) {
    errors.push('Shape object is required');
    return { isValid: false, errors };
  }

  if (typeof shape.id !== 'number') {
    errors.push('Shape id must be a number');
  }

  if (typeof shape.img !== 'string' || !shape.img.trim()) {
    errors.push('Shape img must be a non-empty string');
  }

  if (typeof shape.value !== 'string' || !shape.value.trim()) {
    errors.push('Shape value must be a non-empty string');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Validate diamond origin object structure
 */
export function validateDiamondOrigin(origin: any): ValidationResult {
  const errors: string[] = [];

  if (!origin) {
    errors.push('Origin object is required');
    return { isValid: false, errors };
  }

  if (typeof origin.origin !== 'string' || !origin.origin.trim()) {
    errors.push('Origin name must be a non-empty string');
  }

  if (typeof origin.Img !== 'string' || !origin.Img.trim()) {
    errors.push('Origin image must be a non-empty string');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Validate array of diamond colors
 */
export function validateDiamondColorsArray(colors: any[]): ValidationResult {
  const errors: string[] = [];

  if (!Array.isArray(colors)) {
    errors.push('Colors must be an array');
    return { isValid: false, errors };
  }

  colors.forEach((color, index) => {
    const validation = validateDiamondColor(color);
    if (!validation.isValid) {
      errors.push(`Color at index ${index}: ${validation.errors.join(', ')}`);
    }
  });

  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Validate array of diamond shapes
 */
export function validateDiamondShapesArray(shapes: any[]): ValidationResult {
  const errors: string[] = [];

  if (!Array.isArray(shapes)) {
    errors.push('Shapes must be an array');
    return { isValid: false, errors };
  }

  shapes.forEach((shape, index) => {
    const validation = validateDiamondShape(shape);
    if (!validation.isValid) {
      errors.push(`Shape at index ${index}: ${validation.errors.join(', ')}`);
    }
  });

  return {
    isValid: errors.length === 0,
    errors
  };
}

/**
 * Check for duplicate values in an array
 */
export function checkForDuplicates<T>(array: T[], keySelector: (item: T) => string): string[] {
  const seen = new Map<string, number[]>();
  const duplicates: string[] = [];

  array.forEach((item, index) => {
    const key = keySelector(item);
    if (seen.has(key)) {
      seen.get(key)!.push(index);
    } else {
      seen.set(key, [index]);
    }
  });

  seen.forEach((indices, key) => {
    if (indices.length > 1) {
      duplicates.push(`Duplicate key "${key}" found at indices: ${indices.join(', ')}`);
    }
  });

  return duplicates;
}

/**
 * Validate that required fields are present
 */
export function validateRequiredFields(obj: any, requiredFields: string[]): ValidationResult {
  const errors: string[] = [];

  requiredFields.forEach(field => {
    if (!(field in obj) || obj[field] === null || obj[field] === undefined) {
      errors.push(`Required field "${field}" is missing`);
    } else if (typeof obj[field] === 'string' && !obj[field].trim()) {
      errors.push(`Required field "${field}" cannot be empty`);
    }
  });

  return {
    isValid: errors.length === 0,
    errors
  };
}