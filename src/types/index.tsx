export interface Items {
  quantity: number;
  product: {
    imageObjects: {
      extraLarge: string;
      featured: boolean;
      large: string;
      medium: string;
      small: string;
      thumbnail: string;
      valid: boolean;
    };
    name: string;
    priceSpecification: {
      discount: number;
      maxPrice: number;
      originalPrice: number;
      percent: number;
      price: number;
      sku: string;
    };
  };
}

export interface ImageObject {
  extraLarge: string;
  featured: boolean;
  large: string;
  medium: string;
  small: string;
  thumbnail: string;
  valid: boolean;
}
export interface IData {
  forEach?: any;
  quantity: number;
  product: {
    imageObjects: {
      [0]: ImageObject;
    };
    name: string;
    priceSpecification: {
      discount: number;
      maxPrice: number;
      originalPrice: number;
      percent: number;
      price: number;
      sku: string;
    };
  };
}
