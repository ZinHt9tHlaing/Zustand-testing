import { useCartStore } from "../store/store";

const Cart = () => {
  const cartItem = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);

  return (
    <div className="mb-5 text-center">
      <h2 className="text-2xl font-medium">Your Cart is ({cartItem.length})</h2>
      <button
        onClick={clearCart}
        className="select-none rounded-lg bg-red-600 px-4 py-2 text-white transition duration-200 hover:bg-red-700 active:scale-90"
      >
        Clear
      </button>
      <div className="my-3">
        {cartItem.length === 0 ? (
          <p className="font-medium text-red-600">No Products in your cart</p>
        ) : (
          <>
            {cartItem.map((item) => (
              <p key={item.id}>
                {item.title} - ${item.price}
              </p>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
