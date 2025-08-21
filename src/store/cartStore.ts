import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartItem {
  id: number;
  quantity: number;
  price: number;
  title: string;
  image?: string;
}

interface CartStore {
    items: CartItem[];
    addItem: (product: Omit<CartItem, "quantity">) => void;
    removeItem: (id: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
    clearCart: () => void;
    getTotalItems: () => number;
    getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>() (
    persist(
        (set, get) => ({
            items: [],
            addItem: (product) => {
                set((state) => {
                    // to check if item already exists in tha cart
                    const itemExist = state.items.find(item => item.id === product.id);
                    if(itemExist) {
                        return {
                            items: state.items.map(item => 
                                item.id === product.id ? {...item, quantity: item.quantity + 1} : item
                            )
                        };
                    }
                    return {
                        items: [...state.items, {...product, quantity: 1}]
                    };
                });
            },
            removeItem: (id) => {
                set((state) => ({
                    items: state.items.filter(item => item.id !== id)
                }))
            },
            updateQuantity: (id, quantity) => {
                if(quantity <= 0) {
                    get().removeItem(id);
                    return;
                }
                set((state) => ({
                    items: state.items.map(item => item.id === id ? {...item, quantity} : item)
                }));
            },
            clearCart: () => set({items: []}),
            getTotalItems: () => {
                return get().items.reduce((total, item) => total + item.quantity, 0);
            }, 
            getTotalPrice: () => {
                return get().items.reduce((total, item) => total + (item.price * item.quantity), 0)
            }
        }),
        {
            name: "cart-storage",
        }
    )
)