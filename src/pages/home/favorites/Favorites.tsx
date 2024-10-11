import FavoritesCards from "../../../layout/components/items/cards/favorites-cards/FavoritesCards";
import bikes from "../../../../data/bikes.json";
import brakets from "../../../../data/brackets.json";
import fork from "../../../../data/forks.json";
import pedals from "../../../../data/pedals.json";
import steams from "../../../../data/steams.json";
import { useInView } from "react-intersection-observer";


export default function Favorites() {
  const {ref, inView} = useInView({
    rootMargin: "50px",
    triggerOnce: true
  });
  return (
    <div ref={ref} className="bg-white w-full ">
      {
        inView && 
        <div className=" md:mx-5 lg:mx-[90px] p-3 py-[60px] max-w-[1440px] min-[1440px]:mx-auto ">
        <FavoritesCards header="Bikes" cardsArr={bikes.slice(0, 6)} link={{name: "All bikes", url: "/category/bikes"}} />
        <FavoritesCards
          header="Favorites"
          cardsArr={[
            fork[0],
            pedals[1],
            steams[1],
            steams[2],
            brakets[0],
            pedals[2],
          ]}
        />
      </div>
      }
    </div>
  );
}
