

export default function HeaderSearch() {
  return (
    <div className="relative w-[430px] mr-[15px]">
      <input className="w-full h-11 rounded-[6px] bg-light-gray@ border-[1px] border-gray-100@ text-gray-500@ pl-5 pr-10 py-[13px] focus:ring-purple@" type="text" placeholder="Type name or part number" />
      <div className="absolute right-2 top-2.5">
        <img src="/layout/header/search.png" alt="search_icon" />      
      </div> 
    </div>
  );
}
