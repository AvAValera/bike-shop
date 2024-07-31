import FooterDesktopBottomLinks from "./FooterDesktopBottomLinks";
import { useMediaQuery } from 'react-responsive';


export default function FooterDesktopCopyright() {
  const desktop = useMediaQuery({minWidth: 1024});

  return (
    <div className=" py-7 flex items-center justify-between">
      <h2 className="text-white@ text-base">Copyright © «Bike» 2024. All rights reserved.</h2>
      <div className="flex items-center gap-[10px]">
        <img src="/layout/footer/visa.svg" alt="pay_icon" />
        <img src="/layout/footer/master.svg" alt="pay_icon" />
        <img className="h-[36px] rounded" src="/layout/footer/paypal.svg" alt="pay_icon" />
      </div>
        {desktop && <FooterDesktopBottomLinks />}
    </div>
  );
}
