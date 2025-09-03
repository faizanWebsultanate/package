export interface DiamondOrigin {
    origin: string;
    Img: string;
  }
  
  export type OriginName = string;
  export type OriginImageName = string;
  
  export interface OriginMapping {
    [key: string]: string;
  }
  
  export enum KnownOrigins {
    ANGOLA_CATOCA = 'Angola - Catoca',
    ANGOLA_LULO = 'Angola - Lulo (Lucapa)',
    AUSTRALIA_ARGYLE = 'Australia - Argyle',
    BOTSWANA_JWANENG = 'Botswana - Jwaneng (De Beers)',
    BOTSWANA_ORAPA = 'Botswana - Orapa',
    BRAZIL_DIAMANTINA = 'Brazil - Diamantina',
    CANADA_DIAVIK = 'Canada - Diavik (Rio Tinto)',
    CANADA_EKATI = 'Canada - Ekati',
    CONGO_KINSHASA = 'Congo - Kinshasa',
    LESOTHO_KAO = 'Lesotho - Kao',
    RUSSIA_ALMAZY_ANABARA = 'Russia - Almazy Anabara',
    SIERRA_LEONE_ZIMMI = 'Sierra Leone - Zimmi',
    SOUTH_AFRICA_ROOIPOORT = 'South Africa - Rooipoort',
    SOUTH_AFRICA_ALEXKOR = 'South Africa - Alexkor',
    SOUTH_AFRICA_DE_PUNT = 'South Africa - De Punt Mine (Trans Hex)',
    SOUTH_AFRICA_FINSCH = 'South Africa - Finsch',
    SOUTH_AFRICA_PREMIER = 'South Africa - Premier (Cullinan, Petra)',
    SOUTH_AFRICA_SOMILUANA = 'South Africa - The Somiluana Mine (Trans Hex)',
    SOUTH_AFRICA_VENETIA = 'South Africa - Venetia',
    SOUTH_AFRICA_WILLIAMSON = 'South Africa - Williamson (Tanzania)',
    ZIMBABWE_MUROWA = 'Zimbabwe - Murowa'
  }
  
  export type OriginSearchResult = DiamondOrigin | null;
  export type OriginFilterOptions = {
    byOrigin?: string;
    byImg?: string;
    exactMatch?: boolean;
  };