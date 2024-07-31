import { useRef } from "react";
import {
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  DrawerBody, DrawerHeader, Divider
} from "@chakra-ui/react";
import HeaderUser from "../../components/HeaderUser";
import { useAppSelector } from "../../../../../../store/store";
import { Link } from "react-router-dom";

export default function HeaderMobileBurgerBtn() {
  const burgerBtnRef = useRef<HTMLButtonElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {generalMenu} = useAppSelector(state => state.menu);
  
  return (
    <>
      <Button ref={burgerBtnRef} bg={"none"} onClick={onOpen} flex={"none"}>
        <img src="/layout/header/burger-btn.svg" alt="burger_icon" />
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent >
          <DrawerCloseButton left={2} top={4} />
          <DrawerHeader ml={"auto"}>
            <HeaderUser />
          </DrawerHeader>
          <Divider />
          <DrawerBody>
            <ul className="py-2">
              {
                generalMenu.map(el => <li key={el.id} className="mb-[10px]">
                  <Link onClick={onClose} to={el.url} className="text-base font-medium">
                    {el.name}
                  </Link>
                </li>)
              }
            </ul>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
