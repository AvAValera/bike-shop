import { Link } from "react-router-dom";

export default function HeaderLogo() {
  return (
    <Link to={"/"} className="flex items-center gap-[10px] mr-[15px] flex-none">
      <img className="h-10" src="/logo/logo.svg" alt="logo_img" />
      <h2 className="text-2xl font-bold text-second-purple@ hidden min-[375px]:inline">BIKE</h2>
    </Link>
  );
}
