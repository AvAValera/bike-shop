import {
  Tooltip,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";

export default function HeaderLanguage() {
  const languageData = [
    { id: 1, name: "EN ", img: "/layout/header/flags/usa.svg" },
    { id: 2, name: "DE", img: "/layout/header/flags/de.svg" },
    { id: 3, name: "UA", img: "/layout/header/flags/ua.svg" },
  ];
  const [flagImg, setFlagImg] = useState<string>(languageData[0].img);

  return (
    <Menu>
      <Tooltip label="language" openDelay={1000}>
        <MenuButton
          outlineOffset={"none"}
          pl={3}
          pr={1}
          py={2}
          className=" hover-header-btn flex-none"
        >
          <Flex gap={1} alignItems={"center"}>
            <img className="w-6 h-5" src={flagImg} alt="flag_icon" />
            <img
              className="w-5 h-5"
              src="/layout/header/arrow.svg"
              alt="arrow_icon"
            />
          </Flex>
        </MenuButton>
      </Tooltip>
      <MenuList minW={"none"} w={"fit-content"} p={"15px"}>
        {languageData.map((el) => (
          <MenuItem borderRadius={"6px"} _hover={{ bg: "#F4F5F7" }} key={el.id} onClick={() => setFlagImg(el.img)}>
            <Flex alignItems={"center"} gap={"15px"}>
              <img className="w-6 " src={el.img} alt="" />
              <span className="text-black@ text-xl font-medium">{el.name}</span>
            </Flex>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
