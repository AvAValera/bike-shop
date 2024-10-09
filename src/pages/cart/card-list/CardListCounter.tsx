import { useState, useEffect } from "react";
import Counter from "../../../layout/components/items/counter/Counter";
import { cartStore } from "../../../../store/cart/cart";

interface CartItem {
  codeItem: number;
  name: string;
  quantity: number;
  img: string;
  price: number;
  brand: string;
}


export default function CardListCounter({quantity, price, codeItem}: CartItem) {
  const [counter, setCounter] = useState<number>(quantity);
  const [total, setTotal] = useState<number>(quantity * price);
  const {setQuantity, deleteCart} = cartStore(state => state);

  useEffect(() => {
    
      setQuantity(codeItem, counter);
      setTotal(counter * price);
    
  }, [counter]);


  return (
    <div className="w-full h-full md:w-[300px] flex-none flex justify-between items-center">
      <Counter counter={counter} setCounter={setCounter} />
      <span className="w-1/3 text-center text-black@ text-base font-bold">{total} $</span>
      <button onClick={() => deleteCart(codeItem)} className="py-2 pl-2 ml-auto stroke-[2px] stroke-gray-400@ hover:stroke-[2.5px]">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5 hover:stroke-red@"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
      </button>
    </div>
  );
}
