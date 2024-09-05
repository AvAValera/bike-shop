

export default function CategoryFilterMobileBtn() {
  return (
    <button className="w-full h-[60px] sm:h-[80px] bg-white@ rounded shadow-[0_2px_5px_0_rgba(0,0,0,0.05)] p-[10px]">
      <div className="border border-gray-200@ rounded w-full h-full flex justify-center items-center gap-[15px]">
        <img src="/items/filter.svg" alt="filter_icon" />
        <span className="text-black@ font-medium text-lg">Filters</span>
      </div>
    </button>
  );
}
