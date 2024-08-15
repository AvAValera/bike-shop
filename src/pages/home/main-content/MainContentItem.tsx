import { Link } from "react-router-dom";
import * as _ from "lodash";


export default function MainContentItem({name, url, icon }:{id: number, name: string, url: string, icon: string}) {
  const randomItems = _.random(100, 999);
  
  return (
    <Link to={url} className="bg-white@ h-[162px] sm:h-[100px]  rounded-[20px] sm:rounded-none shadow-[0_4px_10px_0_rgba(46,16,102,0.05)] border-light-gray@ border sm:border-none sm:shadow-none">
      <div className="p-[30px] relative flex gap-5 flex-col sm:flex-row items-start w-full h-full  sm:hover:shadow-[0_4px_10px_0_rgba(0,0,0,0.1)]">
        <img className="w-10" src={`/layout/menu/${icon}`} alt="icon" />
        <div>
          <h2 className="text-black@ font-medium text-lg sm:text-base sm:font-normal">{name}</h2>
          <span className="text-gray-400@ text-xs">{randomItems} items</span>
        </div>
      </div>
    </Link>
  );
}
