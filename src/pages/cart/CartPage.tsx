import PageLayout from "../../layout/page-layout/PageLayout";
import CartList from "./card-list/CartList";
import CartInfo from "./CartInfo";

export default function CartPage() {


  return (
    <PageLayout title="CART">
      <div className="max-w-[1440px] px-2 md:px-10 min-[1440px]:px-0 pb-[60px] mx-auto">
        <h2 className="text-black@ text-2xl font-medium mt-[30px] mb-5">Cart</h2>
        <div className="flex items-start gap-5">
          <CartList />
          <CartInfo />
        </div>
      </div>
    </PageLayout>
  );
}
