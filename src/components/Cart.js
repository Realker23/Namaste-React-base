import {useDispatch, useSelector} from "react-redux";
import {CDN_ITEM_IMAGE} from "../utils/constants";
import {clearItem, removeItem} from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItem = useSelector((store) => {
    // console.log(store);
    return store.cart.items;
  });
  const dispatch = useDispatch();
  const deleteItem = (item) => {
    // console.log(item);
    dispatch(removeItem(item));
  };
  console.log(cartItem);
  const handleClearCart = () => {
    dispatch(clearItem());
  };
  if (cartItem.length == 0) {
    return (
      <div className="text-center">
        <h1>Your cart is empty</h1>
      </div>
    );
  } else {
    return (
      <div className="w-6/12 m-auto p-4 bg-green-500 rounded-lg mt-8">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="font-bold text-xl">Cart</h1>

          <button
            className="bg-green-600 text-white rounded-xl border-black px-1 border mt-1"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>

        {/* {cartItem.map((i) => {
          return (
            <div
              key={i.card.info.id}
              className="p-4 border-b-2 flex justify-between items-center"
            >
              <div className="w-9/12">
                <div>
                  <p className="text-base font-medium">{i.card.info.name}</p>
                  <p>
                    ₹ {(i.card.info.price || i.card.info.defaultPrice) / 100}
                  </p>
                </div>
                <div className="text-sm ">{i.card.info.description}</div>
              </div>
              <div className="relative">
                <img
                  className="w-28 h-24 rounded-md object-cover"
                  src={CDN_ITEM_IMAGE + i.card.info.imageId}
                />
                <button
                  className="absolute border-[1px] rounded-lg border-black top-[85%] left-[40%] px-[6px] bg-green-100"
                  onClick={() => deleteItem(i)}
                >
                  -
                </button>
              </div>
            </div>
          );
        })} */}
        <ItemList list={cartItem} />
      </div>
    );
  }
};

export default Cart;
