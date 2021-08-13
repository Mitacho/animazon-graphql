export interface MainCard {
  title: string;
  image: string;
};

export interface Animal {
  id: string;
  image: string;
  title: string;
  rating?: number;
  price: string;
  description: Array<string>,
  stock: number;
  onSale: boolean;
  slug: string;
  category: string;
};

export interface Category {
  id: string;
  image: string;
  category: string;
  slug: string;
};