import { create } from 'zustand';
import { Product } from '../entities/Product';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  count: number;
  increment: (product: Product) => void;
  decrement: (product: Product) => void;
  getItemQuantity: (productId: number) => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  count: 0,

  increment: (product: Product) => {
    set((state) => {
      const existingItem = state.items.find(item => item.product.id === product.id);
      if (existingItem) {
        const updatedItems = state.items.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          items: updatedItems,
          count: state.count + 1
        };
      } else {
        const newItem: CartItem = {
          product,
          quantity: 1
        };
         return {
          items: [...state.items, newItem],
          count: state.count + 1
        };
      }
    });
  },

  decrement: (product: Product) => {
    set((state) => {
      const existingItem = state.items.find(item => item.product.id === product.id);
      
      if (!existingItem) {
        return state;
      }

      if (existingItem.quantity === 1) {
        const updatedItems = state.items.filter(item => item.product.id !== product.id);
        
        return {
          items: updatedItems,
          count: state.count - 1
        };
      } else {
        const updatedItems = state.items.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        return {
          items: updatedItems,
          count: state.count - 1
        };
      }
    });
  },

  getItemQuantity: (productId: number) => {
    const item = get().items.find(item => item.product.id === productId);
    return item ? item.quantity : 0;
  },
}));