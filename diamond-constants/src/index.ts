import DiamondColors from './constants/colors/diamond-colors';

// Constants exports
export * from './constants';

// Types exports
export * from './types';

// Utilities exports
export * from './utils';
// export * from './mappers';
// export * from './validators';

// Version info
export const VERSION = '1.0.0';
export const PACKAGE_NAME = '@your-org/diamond-constants';

// Re-export commonly used items for convenience
export { DiamondColors } from './constants/colors/diamond-colors';
export { DiamondShapes } from './constants/shapes/diamond-shapes';
export { DiamondOrigins } from './constants/origins/origin-images';
export { findColorByValue, findShapeByCode, mapShapeCode } from './utils';
console.log('DiamondConstants' + DiamondColors);

