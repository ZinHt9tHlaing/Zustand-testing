import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type CounterStore = {
  count: number;
};

type State = {
  count: number;
};

const initialState: State = {
  count: 0,
};

export const useCounterStore = create<CounterStore>()(
  persist(
    immer((set) => ({
      ...initialState,
    }))
  )
);
