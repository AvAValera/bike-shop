import { Tooltip } from "@chakra-ui/react";

export default function HeaderPhone() {
  return (
    <Tooltip label="contact us" openDelay={1000}>
      <a
        className="flex items-center gap-[10px] px-2 py-1 mr-2 flex-none hover-header-btn"
        href="tel:+12312333"
      >
        <img src="/layout/header/phone.svg" alt="phone_icon" />
        <span className="text-xl font-bold tracking-tight hidden lg:inline">
          +1 (677) 123-12-45
        </span>
      </a>
    </Tooltip>
  );
}
