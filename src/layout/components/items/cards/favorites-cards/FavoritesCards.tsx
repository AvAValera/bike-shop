import ProductCard from "../product-card/ProductCard";
import Slider, { Settings } from "react-slick";
import NextButton from "../../slider/NextButton";
import PreButton from "../../slider/PreButton";
import { Link } from "react-router-dom";

interface Props {
  header: string,
  cardsArr: {codeItem: number, img: string, name: string, price: number, rating: number, brand: string}[],
  link?: {name: string, url: string} | null
}

export default function FavoritesCards({cardsArr, header, link = null}: Props) {


  const settings: Settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    prevArrow: <PreButton />,
    nextArrow: <NextButton />,
    variableWidth: true,
  };
  return (
    <div className="mb-6">
      <div className="flex items-start justify-between">
        <h2 className="text-black@ font-medium text-2xl mb-6">{header}</h2>
        {link && <Link to={link.url} className="bg-light-gray@ rounded-lg px-[10px] py-2 flex gap-[5px] items-center hover:bg-gray-100@">
          <span className="text-purple@ text-sm font-medium">{link.name}</span>
          <img src="/items/arrow-more.svg" alt="arrow_icon" />
        </Link> }
      </div>
      <Slider {...settings}>
        {
          cardsArr.map(el => <div key={el.codeItem} className="mx-2 py-4">
            <ProductCard
              img={el.img}
              codeItem={el.codeItem}
              name={el.name}
              price={el.price}
              rating={el.rating}
              brand={el.brand}
            />
          </div>)
        }
      </Slider>
    </div>
  );
}
