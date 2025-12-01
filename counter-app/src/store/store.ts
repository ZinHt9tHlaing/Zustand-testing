import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type CounterStore = {
  count: number;
};

type State = {
  count: number;
};

type Actions = {
  increment: () => void;
  addPlusTen: () => void;
  decrement: () => void;
  reset: () => void;
};

const initialState: State = {
  count: 0,
};

export const useCounterStore = create<CounterStore & Actions>()(
  immer((set) => ({
    ...initialState,
    increment: () => set((state) => ({ count: state.count + 1 })),
    addPlusTen: () => set((state) => ({ count: state.count + 10 })),
    decrement: () =>
      set((state) => ({ count: state.count === 0 ? 0 : state.count - 1 })),
    reset: () => set(initialState),
  })),
);
