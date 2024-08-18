
import Slider, {Settings} from "react-slick";
import NextButton from "../../../layout/components/items/slider/NextButton";
import PreButton from "../../../layout/components/items/slider/PreButton";

export default function SliderHome() {


  const settings: Settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <PreButton />,
    nextArrow: <NextButton />
  };

  return (
    <div className="h-[230px] md:h-[420px] mt-[30px] mx-8 lg:mx-[90px] mb-5 md:mb-10">
      <Slider {...settings} >
        <div className=" h-[230px] md:h-[420px] bg-[url('/home/slider/1.jpg')] bg-cover bg-center bg-no-repeat rounded-[30px]" />
        <div className=" h-[230px] md:h-[420px] bg-[url('/home/slider/2.jpg')] bg-cover bg-center bg-no-repeat rounded-[30px]" />
        <div className=" h-[230px] md:h-[420px] bg-[url('/home/slider/3.jpg')] bg-cover bg-center bg-no-repeat rounded-[30px]" />
      </Slider>
    </div>
  );
}
