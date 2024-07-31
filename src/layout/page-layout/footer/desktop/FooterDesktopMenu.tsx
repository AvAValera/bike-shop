import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../../store/store";
import FooterDesktopService from "./FooterDesktopService";

export default function FooterDesktopMenu() {
  const {footerMenu} = useAppSelector(state => state.footer);
  
  return (
    <>
     <div className="grid grid-cols-[auto_auto_auto_auto] gap-x-10 gap-y-[30px] lg:grid-cols-[1fr_1fr_1fr_1fr_250px] lg:gap-0  pb-10 border-b border-white/15">
        {
          footerMenu.map(el => <ul key={el.id} >
            <h2 className="text-white@ text-base font-medium mb-5">{el.name}</h2>
            {
              el.data.map(el => <li key={el.id}>
                <Link to={el.url} className="text-sm text-gray-300@ mb-2 hover:text-white@ ">
                  {el.name}
                </Link>
              </li>)
            }
          </ul>)
        }
        <div className="grid-none col-span-4 lg:col-span-1">
          <FooterDesktopService />
        </div>
      </div> 
    </>
  );
}
