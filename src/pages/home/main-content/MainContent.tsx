import { useAppSelector } from "../../../../store/store";
import MainContentItem from "./MainContentItem";

export default function MainContent() {
  const {generalMenu} = useAppSelector(state => state.menu);
  
  return (
    <>
      <div className=" mx-[15px] md:mx-5 lg:mx-[90px] bg-white@ rounded-[10px] sm:shadow-[0_4px_10px_0_rgba(46,16,102,0.05)] sm:border-[#e8e3e3] sm:border overflow-hidden mb-10">
        <div className="grid min-[375px]:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-[1px] bg-bg-gray@ sm:bg-[#e8e3e3]">
          {
            generalMenu.map(el => <MainContentItem key={el.id} {...el} />)
          }
        </div>
      </div> 
    </>
  );
}
