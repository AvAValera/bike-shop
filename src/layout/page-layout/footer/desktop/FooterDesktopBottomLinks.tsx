import { Link } from "react-router-dom";

export default function FooterDesktopBottomLinks() {
  return (
    <div className="flex items-center gap-10">
      <Link className="text-light-gray@ text-base" to={"#"}>
        Offer
      </Link>
      <Link className="text-light-gray@ text-base" to={"#"}>
        Confidentiality
      </Link>
    </div>
  );
}
