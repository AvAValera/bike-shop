import HeaderDesktop from "./desktop/HeaderDesktop";
import HeaderMobile from "./mobile/HeaderMobile";
import { useMediaQuery } from "react-responsive";

export default function Header() {
  const desktop = useMediaQuery({minWidth: 768});
  return (
    <>
      {desktop ? <HeaderDesktop />: <HeaderMobile />}
    </>
  );
}
