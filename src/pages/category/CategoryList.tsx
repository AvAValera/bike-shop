import ProductCard from "../../layout/components/items/cards/product-card/ProductCard";

interface Props {
  data: {
    codeItem: number;
    img: string;
    name: string;
    price: number;
    rating: number;
  }[];
}

export default function CategoryList({ data }: Props) {
  return (
    <div className="grid gap-[10px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 min-[2500px]:grid-cols-6 mx-auto">
      {data.map((el) => (
        <ProductCard
          key={el.codeItem}
          codeItem={el.codeItem}
          img={el.img}
          name={el.name}
          price={el.price}
          rating={el.rating}
          responsive
        />
      ))}
    </div>
  );
}
