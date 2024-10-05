import { filtersStore } from "../../../../store/filters/filters";

export default function FilterBrand() {
  const store = filtersStore((state) => state);
  return (
    <div>
      <div className="mb-[17px]">
        <input
          className="w-full h-10 border-gray-200@ rounded px-5 py-[10px] text-sm placeholder:text-gray-500@ text-black@ focus:ring-purple@"
          placeholder="Quick search"
          type="text"
          onChange={(e) => store.setSearch(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-[10px]">
        {store.brand.map((el, i) => (
          <div key={el + i} className="flex gap-[10px] items-center">
            <input
              className="w-5 h-5 border-gray-200@ rounded checked:bg-purple@ text-purple@ focus:ring-purple@ cursor-pointer"
              type="checkbox"
              name={el}
              id={"brand" + el + i}
              onChange={(e) =>
                e.target.checked
                  ? store.setSearchBrand([...store.searchBrand, el])
                  : store.setSearchBrand(
                      store.searchBrand.filter((name) => name !== el)
                    )
              }
            />
            <label htmlFor={"brand" + el + i} className="text-black@ text-base">
              {el}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
