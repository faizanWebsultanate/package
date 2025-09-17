# Diamond Constants

A comprehensive npm package containing diamond-related constants, utilities, and type definitions for use across frontend, backend, and mobile applications.

## Installation

```bash
npm install @your-org/diamond-constants
```

## Features

- **Comprehensive Data**: Diamond colors, shapes, origins, and assets
- **Type Safety**: Full TypeScript support with detailed type definitions
- **Multiple Formats**: CommonJS, ES Modules, and UMD builds
- **Tree Shaking**: Optimized for bundlers to eliminate unused code
- **Utilities**: Helper functions for searching, mapping, and validation
- **Cross-Platform**: Works with React, Vue, Angular, Node.js, React Native

## Quick Start

```typescript
// Import everything
import * as DiamondConstants from '@your-org/diamond-constants';

// Import specific modules
import { DiamondColors, DiamondShapes } from '@your-org/diamond-constants';
import { findColorByValue, mapShapeCode } from '@your-org/diamond-constants';

// Import from specific paths
import { DiamondColors } from '@your-org/diamond-constants/colors';
import { findShapeByCode } from '@your-org/diamond-constants/utils';
```

## Usage Examples

### Colors

```typescript
import { DiamondColors, findColorByValue, searchColors } from '@your-org/diamond-constants';

// Find a specific color
const yellowColor = findColorByValue('Yellow');

// Search colors
const pinkColors = searchColors({ byName: 'pink' });

// Get all colors
console.log(DiamondColors);
```

### Shapes

```typescript
import { DiamondShapes, findShapeByCode, mapShapeCode } from '@your-org/diamond-constants';

// Map shape code to name
const shapeName = mapShapeCode('CIRC'); // Returns 'Round'

// Find shape by value
const roundShape = findShapeByValue('Round');
```

### Advanced Search

```typescript
import { advancedSearch, fuzzySearch } from '@your-org/diamond-constants';

// Advanced search with pagination and sorting
const results = advancedSearch(
  DiamondColors,
  'blue',
  ['name', 'value'],
  {
    sortOptions: { field: 'name', direction: 'asc' },
    paginationOptions: { page: 1, limit: 10 }
  }
);

// Fuzzy search for approximate matches
const fuzzyResults = fuzzySearch(DiamondColors, 'yelow', ['name', 'value'], 0.6);
```

## API Reference

### Constants

- `DiamondColors` - Array of diamond color objects
- `DiaryDiamondColors` - Extended diamond colors for diary use
- `DiamondShapes` - Array of diamond shape objects  
- `DiaryDiamondShapes` - Extended diamond shapes for diary use
- `DiamondOrigins` - Array of diamond origin objects
- `DiaryCauseShape` - Shape code to shape name mappings

### Utilities

#### Color Utils
- `findColorByValue(value, useDiary?)` - Find color by value
- `findColorByName(name, useDiary?)` - Find color by name
- `searchColors(options, useDiary?)` - Search colors with filters
- `getUniqueColorValues(useDiary?)` - Get all unique color values

#### Shape Utils
- `findShapeByValue(value, useDiary?)` - Find shape by value
- `findShapeByCode(code)` - Find shape by code
- `mapShapeCode(code)` - Map shape code to name
- `getCodesForShape(shapeName)` - Get all codes for a shape

#### Search Utils
- `searchItems(items, term, fields, options?)` - Generic search
- `advancedSearch(items, term, fields, options?)` - Advanced search with sorting/pagination
- `fuzzySearch(items, term, fields, threshold?)` - Fuzzy search
- `paginateItems(items, options?)` - Paginate results

#### Validation Utils
- `validateDiamondColor(color)` - Validate color object
- `validateDiamondShape(shape)` - Validate shape object
- `validateRequiredFields(obj, fields)` - Validate required fields

## Types

The package exports comprehensive TypeScript types:

```typescript
import { 
  DiamondColor, 
  DiamondShape, 
  DiamondOrigin,
  ColorFilterOptions,
  ShapeFilterOptions,
  ValidationResult 
} from '@your-org/diamond-constants';
```

## Configuration

### Frontend (React/Vue/Angular)
```typescript
import { DiamondColors } from '@your-org/diamond-constants/colors';
```

### Backend (Node.js)
```javascript
const { DiamondColors } = require('@your-org/diamond-constants');
// Or with ES modules
import { DiamondColors } from '@your-org/diamond-constants';
```

### Mobile (React Native)
```typescript
import { DiamondShapes, findShapeByCode } from '@your-org/diamond-constants';
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For questions and support, please open an issue on GitHub or contact the maintainers.