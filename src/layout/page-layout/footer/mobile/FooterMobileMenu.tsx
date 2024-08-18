import { Link } from "react-router-dom";
import { mainMenuStore } from "../../../../../store/menu/main";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
} from "@chakra-ui/react";

export default function FooterMobileMenu() {
  const {footerMenu} = mainMenuStore(state => state);
  return (
    <div className="mb-5">
      <Accordion allowMultiple >
        {footerMenu.map((el) => (
          <AccordionItem key={el.id} border={"none"}>
            <h2 className="text-white text-lg font-medium">
              <AccordionButton>
                <Flex alignItems={"center"} justifyContent={"space-between"} width="100%">
                  {el.name}
                  <AccordionIcon color={"white"} />
                </Flex>
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <ul>
                {
                  el.data.map(el => <li key={el.id} className="mb-[6px]">
                    <Link to={el.url} className="text-base text-gray-300@">
                      {el.name}
                    </Link>
                  </li>)
                }
              </ul>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
