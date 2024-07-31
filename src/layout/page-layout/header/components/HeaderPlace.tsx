import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Tooltip,
} from "@chakra-ui/react";

export default function HeaderPlace() {
  const showLocation = useMediaQuery({minWidth: 320});
  const locationCitys = [
    { id: 1, name: "Boston" },
    { id: 2, name: "New york" },
    { id: 3, name: "Berlin" },
    { id: 4, name: "Köln" },
  ];
  const [city, setCity] = useState<string>(locationCitys[0].name);
  return (
    <>
      {
        showLocation && 
        <Menu>
      <Tooltip label="location" openDelay={1000}>
        <MenuButton className="hover-header-btn flex-non" p={2} outlineOffset={"none"}>
          <Flex gap={1}>
            <img src="/layout/header/marker.svg" alt="" />
            <span className="text-base text-black@ whitespace-nowrap hidden lg:inline">{city}</span>
          </Flex>
        </MenuButton>
      </Tooltip>
      <MenuList p={"15px"}>
        {locationCitys.map((el) => (
          <MenuItem
            _focus={{ bg: "#F4F5F7" }}
            key={el.id}
            bg={"none"}
            _hover={{ bg: "#F4F5F7" }}
            borderRadius={"6px"}
            h={"62px"}
            w={"250px"}
            onClick={() => setCity(el.name)}
          >
            <div className="flex items-center gap-[15px] w-full">
              <div className="w-11 h-11 flex justify-center items-center rounded-md bg-white@ border border-gray-100@ shadow-[0_4px_20px_0_rgba(0,0,0,0.07)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-purple@"
                >
                  <path d="M19.006 3.705a.75.75 0 1 0-.512-1.41L6 6.838V3a.75.75 0 0 0-.75-.75h-1.5A.75.75 0 0 0 3 3v4.93l-1.006.365a.75.75 0 0 0 .512 1.41l16.5-6Z" />
                  <path
                    fillRule="evenodd"
                    d="M3.019 11.114 18 5.667v3.421l4.006 1.457a.75.75 0 1 1-.512 1.41l-.494-.18v8.475h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3v-9.129l.019-.007ZM18 20.25v-9.566l1.5.546v9.02H18Zm-9-6a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75H9Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-black@ text-xl font-medium">{el.name}</span>
              {el.name === city && (
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
      }
    </>
  );
}

// flex items-center gap-1 p-2 mr-2 hover-header-btn flex-none
