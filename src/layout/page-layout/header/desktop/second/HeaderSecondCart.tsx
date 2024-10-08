import { Link } from "react-router-dom";
import { cartStore } from "../../../../../../store/cart/cart";

export default function HeaderSecondCart() {
  const {cartQuantity} = cartStore(state => state);
  return (
    <Link
      to={"/cart"}
      className="relative flex items-center gap-[10px] px-3 py-1 text-base text-black@ hover-header-btn ml-auto flex-none"
    >
      <img src="/layout/header/cart.svg" alt="cart_icon" />
      <span className="hidden md:inline">Cart</span>
      {
        cartQuantity > 0 && <div className="absolute md:static top-0 right-0 w-5 h-5 text-white@ flex items-center justify-center text-sm bg-orange@ rounded-full">
        {cartQuantity}
      </div>
      }
    </Link>
  );
}
