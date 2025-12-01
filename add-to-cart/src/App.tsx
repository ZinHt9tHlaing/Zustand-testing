import Cart from "./components/Cart";
import { FakeData } from "./data/FakeData";
import { useCartStore } from "./store/store";
import type { CartItem } from "./types/CartItemTypes";

const App = () => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleOnClick = (data: CartItem) => {
    addToCart({ id: data.id, title: data.title, price: data.price });
  };

  return (
    <div className="flex min-h-screen justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Products Cart
        </h1>

        <Cart />
        <div className="space-y-4">
          {FakeData.map((data) => (
            <div
              key={data.id}
              className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm transition duration-300 hover:shadow-md"
            >
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {data.title}
                </h2>
                <p className="text-gray-500">${data.price}</p>
              </div>

              <div className="space-x-3">
                <button
                  onClick={() => handleOnClick(data)}
                  className="select-none rounded-lg bg-blue-600 px-4 py-2 text-white transition duration-200 hover:bg-blue-700 active:scale-90"
                >
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
