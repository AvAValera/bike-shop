import ProductCardInfo from "./ProductCardInfo";
import ProductCardPrice from "./ProductCardPrice";
import { Link } from "react-router-dom";

interface PropsCard {
  img: string;
  codeItem: number;
  rating: number;
  name: string;
  price: number;
}

export default function ProductCard({
  codeItem,
  img,
  name,
  price,
  rating,
}: PropsCard) {
  return (
    <div className="w-[300px] h-[410px] flex-none border border-[#DEDEE2] rounded-[10px] p-[25px] bg-white@ flex flex-col hover:shadow-[0_4px_20px_0_rgba(0,0,0,0.07)] hover:border-[#F4F5F7] duration-300">
      <Link   to={`/item/${codeItem}`}>
        <img
          className="w-[220px] max-h-[220px] mx-auto"
          src={img}
          alt="prod_img"
        />
        <ProductCardInfo codeItem={codeItem} rating={rating} />
        <h2 className="text-black@ text-base font-medium mb-4 h-12">
          {name.substring(0, 60)}
        </h2>
      </Link>
      <ProductCardPrice price={price} codeItem={codeItem} />
    </div>
  );
}
