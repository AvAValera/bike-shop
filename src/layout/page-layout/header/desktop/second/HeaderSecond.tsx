import HeaderSecondCart from "./HeaderSecondCart";
import HeaderSecondCategory from "./HeaderSecondCategory";
import HeaderSecondMenuBtn from "./HeaderSecondMenuBtn";

export default function HeaderSecond() {
  return (
    <div className="w-full h-[70px] lg:px-5 px-2 xl:px-[90px] flex items-center bg-white@ shadow-[0_5px_20px_0_rgba(44,41,51,0.1)]">
      <HeaderSecondMenuBtn />
      <HeaderSecondCategory />
      <HeaderSecondCart />
    </div>
  );
}
