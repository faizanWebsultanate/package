export interface DiamondColor {
    id: number;
    img: string;
    name: string;
    value: string;
  }
  
  export interface DiaryDiamondColor extends DiamondColor {
    // Same structure as DiamondColor but for diary-specific colors
  }
  
  export interface CauseImage {
    color: string;
    img: string;
  }
  
  export interface FluorescenceImage {
    color: string;
    img: string;
  }
  
  export interface DiamondAsset {
    img: string;
    value: string;
    saturation: string[];
  }
  
  export type ColorValue = string;
  export type ColorName = string;
  export type ColorImageName = string;
  
  export interface ColorMapping {
    [key: string]: string;
  }
  
  export enum SaturationLevel {
    FAINT = 'Faint',
    VERY_LIGHT = 'Very Light',
    LIGHT = 'Light',
    FANCY_LIGHT = 'Fancy Light',
    FANCY = 'Fancy',
    FANCY_INTENSE = 'Fancy Intense',
    FANCY_VIVID = 'Fancy Vivid',
    FANCY_DEEP = 'Fancy Deep',
    FANCY_DARK = 'Fancy Dark'
  }
  
  export type ColorSearchResult = DiamondColor | DiaryDiamondColor | null;
  export type ColorFilterOptions = {
    byName?: string;
    byValue?: string;
    byImg?: string;
    exactMatch?: boolean;
  };