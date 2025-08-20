import { ReactNode } from 'react';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  products: Product[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  isLoggedIn: boolean;
}

export interface AppContextProps {
  cart: CartItem[];
  user: User | null;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  login: (user: User) => void;
  logout: () => void;
}

export interface PropsWithChildren {
  children: ReactNode;
}

export default {}; // Default export for module compatibility