import FooterDesktopService from "../desktop/FooterDesktopService";
import FooterMobileCopyright from "./FooterMobileCopyright";
import FooterMobileMenu from "./FooterMobileMenu";


export default function FooterMobile() {
  return (
    <div className="w-full h-full pb-4 pt-[30px] px-[15px] bg-bg-footer@">
      <FooterMobileMenu />
      <FooterDesktopService />
      <FooterMobileCopyright />
    </div>
  );
}
