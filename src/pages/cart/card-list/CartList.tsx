import CardListHeader from "./CardListHeader";
import { cartStore } from "../../../../store/cart/cart";
import CardListCounter from "./CardListCounter";

export default function CartList() {
  const store = cartStore((state) => state);

  return (
    <div className="w-full bg-white@ rounded-md border border-gray-200@">
      <CardListHeader />
      <ul>
        {store.cartItems.map((el) => (
          <div
            key={el.codeItem}
            className="w-full md:h-[120px] flex flex-col items-start md:flex-row gap-2 md:item-center justify-between border-t border-gray-200@ p-5"
          >
            <div className=" flex gap-5 item-center">
              <img className="w-20 flex-none" src={el.img} alt="img_prod" />
              <div className="flex flex-col gap-[5px]">
                <h3 className="text-black@ text-lg font-medium">{el.brand}</h3>
                <h4 className="max-h-[50px] text-black@ text-base text-clip overflow-hidden">{el.name}</h4>
              </div>
            </div>
            <CardListCounter {...el} />
          </div>
        ))}
      </ul>
    </div>
  );
}
