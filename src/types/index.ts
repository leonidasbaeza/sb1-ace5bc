export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  imageUrl: string;
  stock: number;
  brand: string;
  weight?: string;
  servings?: number;
}

export type Category =
  | 'whey-protein'
  | 'pre-workout'
  | 'creatine'
  | 'bcaa'
  | 'vitamins'
  | 'weight-gainers'
  | 'protein-bars'
  | 'amino-acids'
  | 'fat-burners'
  | 'accessories';

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  isAdmin: boolean;
  name?: string;
}