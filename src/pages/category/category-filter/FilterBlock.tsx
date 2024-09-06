import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex
} from '@chakra-ui/react';

export default function FilterBlock() {
  return (
    <div>
      <Accordion  allowMultiple defaultIndex={[0,1]}>
        <AccordionItem  borderTop={"none"} >
          <AccordionButton px={0}><Flex justify={"space-between"} w={"100%"} px={5}><span>Rating</span><AccordionIcon/></Flex></AccordionButton>
          <AccordionPanel px={5}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum inventore numquam sed, doloribus et maxime illo repellendus sit ea reprehenderit. Tenetur quia rerum quae corporis, incidunt pariatur neque ratione enim.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem  borderBottom={"none"}>
          <AccordionButton px={0}><Flex justify={"space-between"} w={"100%"} px={5}><span>Rating</span><AccordionIcon/></Flex></AccordionButton>
          <AccordionPanel px={5}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum inventore numquam sed, doloribus et maxime illo repellendus sit ea reprehenderit. Tenetur quia rerum quae corporis, incidunt pariatur neque ratione enim.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
