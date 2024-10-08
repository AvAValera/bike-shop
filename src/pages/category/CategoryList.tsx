import ProductCard from "../../layout/components/items/cards/product-card/ProductCard";
import { filtersStore } from "../../../store/filters/filters";
import * as _ from "lodash";
import { useEffect } from "react";

interface Props {
  data: {
    codeItem: number;
    img: string;
    name: string;
    price: number;
    rating: number;
    brand: string;
  }[];
}

export default function CategoryList({ data }: Props) {
  const store = filtersStore((state) => state);

  useEffect(() => {
    store.clearAllFilters();
    const uniqueBrands = _.uniq(data.map(el => el.brand)).sort((a, b) => a.localeCompare(b));
    store.setBrand(uniqueBrands);
  },[data]);

 

  function filterData() {
    return data.filter((el) => {
        
        const nameMatch = store.search.length ? el.name.toLowerCase().includes(store.search.toLowerCase()) : true;

        const brandMatch = store.searchBrand.length ? (store.searchBrand as string[]).includes(el.brand) : true;

        const priceMatch = el.price <= store.price[1] && el.price >= store.price[0];

        const ratingMatch = store.rating === 6 ? true : el.rating === store.rating;

        return nameMatch && brandMatch && priceMatch && ratingMatch;
    });
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
              brand={el.brand}
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