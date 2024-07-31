import { useState } from "react";
import {
  Tooltip,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
} from "@chakra-ui/react";

export default function HeaderPrice() {
  const financeData = [
    { id: 1, name: "USD", img: "/layout/header/dollar.svg" },
    { id: 2, name: "EUR", img: "/layout/header/euro.svg" },
    { id: 3, name: "UAH", img: "/layout/header/hryvna.svg" },
  ];
  const [price, setPrice] = useState<{id: number, name: string, img: string}>(financeData[0]);

  return (
    <Menu>
      <Tooltip label="select currency" openDelay={1000}>
        <MenuButton
          outlineOffset={"none"}
          pl={3}
          pr={1}
          py={2}
          mr={2}
          className="hover-header-btn flex-none"
        >
          <Flex alignItems={"center"} gap={1}>
            <span className="text-sm text-black@ font-medium">{price.name}</span>
            <img
              className="w-5 h-5"
              src="/layout/header/arrow.svg"
              alt="arrow_icon"
            />
          </Flex>
        </MenuButton>
      </Tooltip>
      <MenuList p={"15px"}>
        {financeData.map((el) => (
          <MenuItem
            onClick={() => setPrice(el)}
            _focus={{ bg: "#F4F5F7" }}
            key={el.id}
            bg={"none"}
            _hover={{ bg: "#F4F5F7" }}
            borderRadius={"6px"}
            h={"62px"}
          >
            <div className="flex items-center gap-[15px] w-full">
              <div className="w-11 h-11 flex justify-center items-center rounded-md bg-white@ border border-gray-100@ shadow-[0_4px_20px_0_rgba(0,0,0,0.07)]">
                <img  src={el.img} alt="money_icon" />
              </div>
              <span className="text-black@ text-xl font-medium">{el.name}</span>
              {el.name === price.name && (
                <img
                  className="ml-auto"
                  src="/layout/header/checked.svg"
                  alt="check_icon"
                />
              )}
            </div>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
