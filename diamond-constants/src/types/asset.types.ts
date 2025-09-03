export interface DiamondAsset {
    img: string;
    value: string;
    saturation: string[];
  }
  
  export interface CauseImage {
    color: string;
    img: string;
  }
  
  export interface FluorescenceImage {
    color: string;
    img: string;
  }
  
  export type AssetImageName = string;
  export type AssetValue = string;
  export type SaturationLevel = string;
  
  export enum FluorescenceStrength {
    FAINT = 'Faint',
    MEDIUM = 'Medium',
    STRONG = 'Strong',
    VERY_STRONG = 'Very Strong'
  }
  
  export enum FluorescenceColor {
    BLUE = 'Blue',
    GREEN = 'Green',
    ORANGE = 'Orange',
    YELLOW = 'Yellow'
  }
  
  export type AssetSearchResult = DiamondAsset | null;
  export type AssetFilterOptions = {
    byValue?: string;
    byImg?: string;
    bySaturation?: string;
    exactMatch?: boolean;
  };