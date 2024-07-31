import { Link } from "react-router-dom";
import { Tooltip } from "@chakra-ui/react";

export default function HeaderUser({ text = true }: { text?: boolean }) {
  return (
    <Tooltip label="login or register" openDelay={1000}>
      <Link
        className="flex items-center gap-2 px-2 py-1 ml-auto flex-none hover-header-btn"
        to={"/user/auth"}
      >
        <img src="/layout/header/user.svg" alt="user_icon" />
        {text && (
          <span className="text-black@ text-base  md:hidden lg:inline">
            Login / Register
          </span>
        )}
      </Link>
    </Tooltip>
  );
}
