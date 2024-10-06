import {useEffect, useState} from "react";
import Counter from "../../../layout/components/items/counter/Counter";
import Rating from "../../../utils/Rating";
import ProductInfoColor from "./ProductInfoColor";
import ProductInfoSize from "./ProductInfoSize";

interface Props {
  codeItem: number;
  img: string;
  name: string;
  price: number;
  rating: number;
  brand: string;
}

export default function ProductInfo({
  brand,
  codeItem,
  name,
  price,
  rating,
}: Props) {
  const [counter, setCounter] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(price);

  useEffect(() => {
    setTotalPrice(price * counter);
  }, [counter, price]);

  return (
    <div className=" lg:w-1/2 pt-4 lg:pt-12">
      <div className="lg:sticky top-10 p-4 sm:p-10 bg-white@ rounded-md border border-gray-200@">
        <h4>{brand}</h4>
        <h2 className="text-2xl text-black@ font-medium mb-3">{name}</h2>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2"><Rating rate={rating} /> <span className="text-gray-400@">({rating})</span></div>
          <span>Part #: {codeItem}</span>
        </div>
        <ProductInfoColor />
        <ProductInfoSize />
        <h3 className="text-black@ text-4xl font-bold my-10">{totalPrice}$</h3>
        <div className="flex gap-2 items-center">
          <Counter counter={counter} setCounter={setCounter} />
          <button className="w-full h-[54px] bg-purple@ rounded-md text-white@ text-lg font-medium hover:bg-second-purple@">Add to Card</button>
        </div>
      </div>
    </div>
  );
}
