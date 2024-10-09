import { cartStore } from "../../../store/cart/cart";

export default function CartInfo() {
  const {cartSum, cartQuantity} = cartStore((state) => state);
  return (
    <div className="w-full lg:w-[300px] flex-none bg-white@ rounded-md border border-gray-200@">
      <div className="px-[30px] py-5 border-b border-gray-200@">
        <h3 className="text-black@ text-2xl font-medium">Your order</h3>
      </div>
      <div className="px-[30px] py-5 border-b border-gray-200@">
        <div className="flex item-center justify-between text-black@ text-xl font-medium mb-[10px]">
          <span>Quantity</span>
          <span>{cartQuantity}</span>
        </div>
        <div className="relative">
          <input className="w-full h-12 border rounded-md border-gray-200@ pr-12" type="text" placeholder="Promo code" />
          <button className="absolute right-1.5 top-1.5 w-9 h-9 bg-light-gray@ rounded-md flex items-center justify-center">
            <img src="/items/arrow-code.svg" alt="arrow" />
          </button>
        </div>
      </div>
      <div className="px-[30px] py-5 mb-10">
        <div className="flex item-center justify-between text-black@ text-xl font-medium mb-[15px]">
          <span>Total</span>
          <span>{cartSum} $</span>
        </div>
        <div>
          <button className="w-full h-[54px] bg-purple@ text-white@ text-lg font-medium rounded-md hover:bg-second-purple@">Order placement</button>
        </div>
      </div>
    </div>
  );
}
