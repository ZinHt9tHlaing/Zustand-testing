import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import type { CartItem } from "../types/CartItemTypes";

type CartStore = {
  cart: CartItem[];
};

const initialState: CartStore = {
  cart: [],
};

export const useCartStore = create<CartStore>()(
  immer(() => ({
    ...initialState,
  })),
);
