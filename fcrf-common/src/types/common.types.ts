export interface BaseItem {
    id?: number;
    img?: string;
    value?: string;
  }
  
  export interface SearchOptions {
    exactMatch?: boolean;
    caseSensitive?: boolean;
  }
  
  export interface ValidationResult {
    isValid: boolean;
    errors: string[];
  }
  
  export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
  };
  
  export type ArrayElement<ArrayType extends readonly unknown[]> = 
    ArrayType extends readonly (infer ElementType)[] ? ElementType : never;
  
  export interface PaginationOptions {
    page?: number;
    limit?: number;
  }
  
  export interface SortOptions {
    field: string;
    direction: 'asc' | 'desc';
  }
  
  export interface FilterResult<T> {
    items: T[];
    total: number;
    hasMore: boolean;
  }
  
  export enum DataSource {
    DIAMOND_COLORS = 'diamond-colors',
    DIARY_DIAMOND_COLORS = 'diary-diamond-colors',
    DIAMOND_SHAPES = 'diamond-shapes',
    DIARY_DIAMOND_SHAPES = 'diary-diamond-shapes',
    CAUSE_SHAPES = 'cause-shapes',
    PDF_CAUSE_SHAPES = 'pdf-cause-shapes',
    SHEET_SHAPES = 'sheet-shapes',
    DIAMOND_ORIGINS = 'diamond-origins',
    DIAMOND_ASSETS = 'diamond-assets',
    CAUSE_IMAGES = 'cause-images',
    FLUORESCENCE_IMAGES = 'fluorescence-images'
  }
  
  export type ErrorCode = 
    | 'ITEM_NOT_FOUND'
    | 'INVALID_INPUT'
    | 'VALIDATION_ERROR'
    | 'UNKNOWN_ERROR';
  
  export interface ErrorResult {
    code: ErrorCode;
    message: string;
    details?: any;
  }