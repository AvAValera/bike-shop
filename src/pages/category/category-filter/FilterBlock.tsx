import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex
} from '@chakra-ui/react';
import FilterRating from './FilterRating';
import FilterPrice from './FilterPrice';

export default function FilterBlock() {
  return (
    <div>
      <Accordion  allowMultiple defaultIndex={[0,1]}>
        <AccordionItem  borderTop={"none"} >
          <AccordionButton px={0}><Flex justify={"space-between"} w={"100%"} px={5}><span className='text-lg font-medium'>Rating</span><AccordionIcon/></Flex></AccordionButton>
          <AccordionPanel px={5}>
            <FilterRating />
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem  borderBottom={"none"}>
          <AccordionButton px={0}><Flex justify={"space-between"} w={"100%"} px={5}><span className='text-lg font-medium'>Price</span><AccordionIcon/></Flex></AccordionButton>
          <AccordionPanel px={5}>
            <FilterPrice />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
