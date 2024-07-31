import { Flex, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useAppSelector } from "../../../../../../store/store";
import { Link } from "react-router-dom";

export default function HeaderMobileSecondBtn() {
  const { generalMenu } = useAppSelector((state) => state.menu);
  return (
    <Menu>
      <MenuButton flex={"none"} className="w-11 h-11 bg-purple@ rounded-lg">
        <Flex alignItems={"center"} justifyContent={"center"}>
          <img src="/layout/header/menu-btn.svg" alt="menu_icon" />
        </Flex>
      </MenuButton>
      <MenuList w={"98vw"} position={"absolute"} left={"-10px"}>
        <menu>
          {generalMenu.map((el) => (
            <MenuItem key={el.id} _hover={{bg: "none"}} _focus={{bg: "none"}}>
              <nav className="w-full rounded-xl overflow-hidden">
                <Link to={el.url} className="w-full px-5 py-[14px] flex items-center gap-[15px] bg-light-gray@">
                  <img className="w-8 h-8" src={`/layout/menu/${el.icon}`} alt="icon_menu" />
                  <span className="text-black@ text-sm">{el.name}</span>
                </Link>
              </nav>
            </MenuItem>
          ))}
        </menu>
      </MenuList>
    </Menu>
  );
}
