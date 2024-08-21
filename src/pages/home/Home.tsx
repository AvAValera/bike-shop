import ProductCard from "../../layout/components/items/cards/product-card/ProductCard";
import PageLayout from "../../layout/page-layout/PageLayout";
import MainContent from "./main-content/MainContent";
import SliderHome from "./slider/SliderHome";


export default function Home() {
  return (
    <PageLayout>
      <SliderHome />
      <MainContent />
      <ProductCard img="/store/chainrings/1.webp" name="Shimano Dura-Ace 9000 11-Speed Chainrings." codeItem={12333212} price={125.00} rating={4}  />
    </PageLayout>
  );
}
