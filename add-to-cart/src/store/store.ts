import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { CartItem } from "../types/CartItemTypes";

type CartStore = {
  cart: CartItem[];
};

type Action = {
  addToCart: (product: CartItem) => void;
  clearCart: () => void;
};

const initialState: CartStore = {
  cart: [],
};

export const useCartStore = create<CartStore & Action>()(
  immer((set) => ({
    ...initialState,
    addToCart: (product) =>
      set((state) => ({ cart: [...state.cart, product] })),
    clearCart: () => set(initialState),
  })),
);
