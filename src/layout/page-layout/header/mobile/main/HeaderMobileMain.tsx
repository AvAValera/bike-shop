import HeaderLogo from "../../components/HeaderLogo";
import HeaderPlace from "../../components/HeaderPlace";
import HeaderUser from "../../components/HeaderUser";
import HeaderSecondCart from "../../desktop/second/HeaderSecondCart";
import HeaderMobileBurgerBtn from "./HeaderMobileBurgerBtn";

export default function HeaderMobileMain() {
  return (
    <div className="w-full h-[60px] bg-white border-b-[1px] min-[375px]:px-[15px] flex items-center justify-between">
      <div className="flex item-center">
        <HeaderMobileBurgerBtn />
        <HeaderLogo />
      </div>
      <div className="flex items-center">
        <HeaderPlace />
        <HeaderSecondCart />
        <HeaderUser text={false} />
      </div>
    </div>
  );
}
