import FavoritesCards from "../../../layout/components/items/cards/favorites-cards/FavoritesCards";
import bikes from "../../../../data/bikes.json";
import brakets from "../../../../data/brackets.json";
import fork from "../../../../data/forks.json";
import pedals from "../../../../data/pedals.json";
import steams from "../../../../data/steams.json";
export default function Favorites() {
  return (
    <div className="bg-white w-full ">
      <div className="mx-[15px] md:mx-5 lg:mx-[90px] py-[60px]">
        <FavoritesCards header="Bikes" cardsArr={bikes.slice(0, 6)} link={{name: "All bikes", url: "#"}} />
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
    </div>
  );
}
