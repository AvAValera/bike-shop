import FooterDesktopBottomLinks from "./FooterDesktopBottomLinks";
import { useMediaQuery } from "react-responsive";


export default function FooterDesktopService() {
  const mobile = useMediaQuery({maxWidth: 1024});

  return (
    <div className="flex flex-col items-center md:flex-row lg:flex-col gap-6 px-[15px] text-center  md:text-left md:px-0">
      <div className="px-5 py-[15px] w-full md:w-auto flex items-start gap-[10px] bg-white/10 border border-white/20 rounded-[10px] hover:bg-white/20 cursor-pointer flex-none">
        <img src="/layout/footer/service.svg" alt="service_icon" />
        <div className="flex flex-col text-white@ gap-1">
          <span className="text-sm font-medium">Online Consultation</span>
          <span className="text-xs">Ask questions</span>
        </div>
      </div>
      <div className="flex gap-[10px] flex-none">
        <div className="w-[10px] h-[10px] rounded-full bg-green@ flex items-center justify-center mt-1" >
          <div className="w-[15px] h-[15px] rounded-full bg-green@ animate-ping flex-none" />
        </div>
        <span className="text-white@ text-sm font-medium md:max-w-[150px]">The service is operating as usual</span>
      </div>
      {mobile  && <div className="md:ml-auto flex ">
        <FooterDesktopBottomLinks />
        </div>}
    </div>
  );
}
