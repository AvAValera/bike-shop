import FooterDesktopCopyright from "./FooterDesktopCopyright";
import FooterDesktopMenu from "./FooterDesktopMenu";


export default function FooterDesktop() {
  return (
    <div className="w-full px-5 lg:px-[30px] xl:px-[90px] pt-10 bg-bg-footer@ min-[1440px]:px-0">
      <div className="max-w-[1440px] mx-auto">
      <FooterDesktopMenu />
      <FooterDesktopCopyright />
      </div>
    </div>
  );
}
