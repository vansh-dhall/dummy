export type Page = 'home' | 'products' | 'about' | 'blog' | 'contact';

export interface Product {
  id: number;
  name: string;
  price: string;
  numericPrice: number;
  sizes: string[];
  material: string;
  description: string;
  image: string;
  category: string;
  color: string;
}

export interface CartItem extends Product {
  cartItemId: string;
  selectedSize: string;
  quantity: number;
}
