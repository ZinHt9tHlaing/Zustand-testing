import { useCounterStore } from "./store/store";

const App = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);
  const addPlusTen = useCounterStore((state) => state.addPlusTen);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-md">
        <h1 className="mb-2 text-3xl font-bold">Counter App with Zustand</h1>
        <p className="my-6 border-b-2 border-b-gray-900"></p>
        <h2 className="text-2xl font-medium">
          Count -{" "}
          <span className="rounded-md bg-black px-3 py-0 text-white">
            {count}
          </span>
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4">
          <button
            onClick={increment}
            className="rounded-xl bg-emerald-600 px-2 py-1 text-lg font-semibold text-white transition duration-200 hover:bg-emerald-700 active:scale-90"
          >
            Increment
          </button>
          <button
            onClick={addPlusTen}
            className="rounded-xl bg-yellow-500 px-2 py-1 text-lg font-semibold text-white transition duration-200 hover:bg-yellow-600 active:scale-90"
          >
            AddPlusTen
          </button>
          <button
            onClick={decrement}
            className="rounded-xl bg-blue-600 px-2 py-1 text-lg font-semibold text-white transition duration-200 hover:bg-blue-700 active:scale-90"
          >
            Decrement
          </button>
          <button
            onClick={reset}
            className="rounded-xl bg-red-600 px-2 py-1 text-lg font-semibold text-white transition duration-200 hover:bg-red-700 active:scale-90"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
