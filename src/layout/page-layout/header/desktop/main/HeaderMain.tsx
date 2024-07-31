import HeaderLanguage from "../../components/HeaderLanguage";
import HeaderLogo from "../../components/HeaderLogo";
import HeaderPhone from "../../components/HeaderPhone";
import HeaderPlace from "../../components/HeaderPlace";
import HeaderPrice from "../../components/HeaderPrice";
import HeaderSearch from "../../components/HeaderSearch";
import HeaderUser from "../../components/HeaderUser";


export default function HeaderMain() {
  return (
    <div className="h-[70px] w-full flex items-center bg-white@ px-2 lg:px-5 xl:px-[90px] border-b-[1px] border-gray-100">
      <HeaderLogo />
      <HeaderSearch />
      <HeaderPlace />
      <HeaderPhone />
      <HeaderLanguage />
      <HeaderPrice />
      <HeaderUser />
    </div>
  );
}
