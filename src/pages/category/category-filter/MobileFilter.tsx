import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import FilterBlock from "./FilterBlock";

interface Props {
  isOpen: boolean;
  setIsOpenFilters: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileFilter({ isOpen, setIsOpenFilters }: Props) {
  return (
    <>
      <Drawer
        placement={"top"}
        onClose={() => setIsOpenFilters(false)}
        isOpen={isOpen}
        size={"xl"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Filters</DrawerHeader>
          <DrawerCloseButton mt={2} />
          <DrawerBody>
            <div className=" h-[70vh] py-4">
              <FilterBlock />
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
