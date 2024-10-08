import { useState } from "react";
import Counter from "../../../layout/components/items/counter/Counter";

interface CartItem {
  codeItem: number;
  name: string;
  quantity: number;
  img: string;
  price: number;
  brand: string;
}


export default function CardListCounter({quantity, price}: CartItem) {
  const [counter, setCounter] = useState<number>(quantity);
  return (
    <div className="w-[300px] flex justify-start items-center">
      <Counter counter={counter} setCounter={setCounter} />
      <span>{quantity * price}</span>
    </div>
  );
}
