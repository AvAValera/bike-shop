import HeaderSearch from "../../components/HeaderSearch";
import HeaderMobileSecondBtn from "./HeaderMobileSecondBtn";


export default function HeaderMobileSecond() {
  return (
    <div className="w-full h-[69px] px-[15px] flex items-center gap-[10px] bg-white@ shadow-[0_5px_20px_0_rgba(44,41,51,0.1)]">
      <HeaderMobileSecondBtn />
      <HeaderSearch />
    </div>
  );
}
