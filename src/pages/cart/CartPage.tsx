import PageLayout from "../../layout/page-layout/PageLayout";
import CartList from "./card-list/CartList";
import CartInfo from "./CartInfo";
import { cartStore } from "../../../store/cart/cart";

export default function CartPage() {
  const cartItems = cartStore(state => state.cartItems);

  return (
    <PageLayout title="CART">
      <div className="max-w-[1440px] px-2 md:px-10 min-[1440px]:px-0 pb-[60px] mx-auto">
        <h2 className="text-black@ text-2xl font-medium mt-[30px] mb-5">Cart</h2>
        {
          cartItems.length ?
          <div className="flex flex-col items-start gap-5 lg:flex-row">
          <CartList />
          <CartInfo />
        </div>:
          <div className="w-full my-[150px]">
          <h2 className="text-gray-300@ text-center text-[7vw] font-bold">
            cart is empty
          </h2>
        </div>
        }
      </div>
    </PageLayout>
  );
}

