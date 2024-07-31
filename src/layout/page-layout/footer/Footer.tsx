import FooterDesktop from "./desktop/FooterDesktop";
import FooterMobile from "./mobile/FooterMobile";
import { useMediaQuery } from "react-responsive";

export default function Footer() {
  const desktop = useMediaQuery({minWidth: 768});

  return <footer>{desktop ? <FooterDesktop /> : <FooterMobile />}</footer>;
}
