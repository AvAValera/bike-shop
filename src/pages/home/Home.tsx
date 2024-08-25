import PageLayout from "../../layout/page-layout/PageLayout";
import MainContent from "./main-content/MainContent";
import SliderHome from "./slider/SliderHome";
import Favorites from "./favorites/Favorites";


export default function Home() {
  return (
    <PageLayout>
      <SliderHome />
      <MainContent />
      <Favorites />
    </PageLayout>
  );
}
