import Slider, {Settings} from "react-slick";

export default function SliderHome() {
  const settings: Settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  return (
    <div className="h-[230px] md:h-[420px] mt-[30px] mx-5 lg:mx-[90px] rounded-[30px] overflow-hidden">
      <Slider {...settings} >
        <div className=" h-[230px] md:h-[420px] bg-[url('/home/slider/1.jpg')] bg-cover bg-center bg-no-repeat" />
        <div className=" h-[230px] md:h-[420px] bg-[url('/home/slider/2.jpg')] bg-cover bg-center bg-no-repeat" />
        <div className=" h-[230px] md:h-[420px] bg-[url('/home/slider/3.jpg')] bg-cover bg-center bg-no-repeat" />
      </Slider>
    </div>
  );
}
