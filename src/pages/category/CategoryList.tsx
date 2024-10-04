import ProductCard from "../../layout/components/items/cards/product-card/ProductCard";
import { filtersStore } from "../../../store/filters/filters";

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
  const store = filtersStore((state) => state);

  function filterData() {
    const result = data;
    return result.filter(
      (el) =>
        el.price <= store.price[1] &&
        el.price >= store.price[0] &&
        (store.rating === 6 ? el : el.rating === store.rating)
    );
  }

  return (
    <>
      {filterData().length ? (
        <div className="grid gap-[10px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 min-[2500px]:grid-cols-6 mx-auto">
          {filterData().map((el) => (
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
      ) : (
        <div className="w-full flex justify-center items-center">
          <h2 className="text-3xl md:text-6xl text-center font-bold text-gray-200@">No products were found for the filter request</h2>
        </div>
      )}
    </>
  );
}
