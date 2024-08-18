import { Flex, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { mainMenuStore } from "../../../../../../store/menu/main";
import { uiStore } from "../../../../../../store/ui/ui";

export default function HeaderSecondMenuBtn() {
  const {showMailMenu, toggleMainMenu} = uiStore(state => state);
  const {generalMenu} = mainMenuStore(state => state);
  return (
    <Menu onClose={() => toggleMainMenu(false)}>
      <MenuButton
        position={"relative"}
        zIndex={30}
        h={"44px"}
        p={"10px"}
        className="bg-purple@ hover:bg-second-purple@ rounded-lg mr-5 flex-none"
        onClick={() => toggleMainMenu(!showMailMenu)}
      >
        <Flex justifyContent={"center"} alignItems={"center"} gap={"10px"}>
          <img src="/layout/header/menu-btn.svg" alt="menu-btn_icon" />
          <span className="text-white@ text-lg hidden lg:inline">
            All category
          </span>
        </Flex>
      </MenuButton>
      <MenuList
        p={5}
        position={"relative"}
        rounded={"10px"}
        zIndex={30}
        className="w-[90vw] lg:w-[80vw] z-50"
      >
        <>
          <menu className="grid grid-cols-4 grid-rows-subgrid">
            {generalMenu.map((el) => (
                <MenuItem key={el.id} rounded={"10px"} _hover={{bg: "none"}} _focus={{bg: "none"}}>
              <nav  className="w-full rounded-[10px] overflow-hidden hover:text-purple-700" >
                <Link
                  to={el.url}
                  className="flex items-center gap-[15px] px-5 py-[14px] hover:bg-light-gray@ rounded-[10xp] hover:text-second-purple@"
                  >
                  <img
                    className="w-[32px] h-[32px]"
                    src={`/layout/menu/${el.icon}`}
                    alt=""
                  />
                  <span className="text-black@ whitespace-nowrap">
                    {el.name}
                  </span>
                </Link>
              </nav>
              </MenuItem>
            ))}
            <img className="col-start-4 col-span-1 row-start-1 row-span-5 rounded-[10px] m-auto hidden lg:block" src="/layout/menu/menu-banner.jpg" alt="menu_photo" />
          </menu>
        </>
      </MenuList>
    </Menu>
  );
}
