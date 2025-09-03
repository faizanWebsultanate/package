export interface DiamondShape {
    id: number;
    img: string;
    value: string;
  }
  
  export interface DiaryDiamondShape extends DiamondShape {
    // Same structure as DiamondShape but for diary-specific shapes
  }
  
  export interface CauseShape {
    code: string;
    shape: string;
  }
  
  export interface PdfCauseShape extends CauseShape {
    // Same structure as CauseShape but for PDF-specific mappings
  }
  
  export interface SheetShape extends CauseShape {
    // Same structure as CauseShape but for sheet-specific mappings
  }
  
  export type ShapeValue = string;
  export type ShapeCode = string;
  export type ShapeImageName = string;
  
  export interface ShapeMapping {
    [key: string]: string;
  }
  
  export enum StandardShapes {
    ROUND = 'Round',
    OVAL = 'Oval',
    PEAR = 'Pear',
    HEART = 'Heart',
    EMERALD = 'Emerald',
    CUSHION = 'Cushion',
    RADIANT = 'Radiant',
    MARQUISE = 'Marquise',
    PRINCESS = 'Princess',
    HEXAGON = 'Hexagon',
    TRIANGULAR_BRILLIANT = 'Triangular Brilliant',
    OCTAGON = 'Octagon',
    TRILLIANT = 'Trilliant',
    KITE = 'Kite',
    SHIELD = 'Shield'
  }
  
  export type ShapeSearchResult = DiamondShape | DiaryDiamondShape | null;
  export type ShapeFilterOptions = {
    byValue?: string;
    byImg?: string;
    byCode?: string;
    exactMatch?: boolean;
  };