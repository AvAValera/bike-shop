
import Slider, {Settings, CustomArrowProps} from "react-slick";

export default function SliderHome() {


  function PreButton(props: CustomArrowProps) {
    const {onClick} = props;
    return <button className="w-10 h-10 bg-white@ hover:bg-light-gray@ absolute flex items-center justify-center top-1/2 -translate-y-1/2 -left-5 z-10 rounded-[10px] shadow-[0px_4px_10px_0px_rgba(46,16,102,0.25)]" onClick={onClick}>
      <img src="/home/slider/pre_btn.svg" alt="pre_btn_icon" />
    </button>;
  }
  function NextButton(props: CustomArrowProps){
    const {onClick} = props;
    return <button className="w-10 h-10 bg-white@ hover:bg-light-gray@ absolute flex items-center justify-center top-1/2 -translate-y-1/2 -right-5 z-10 rounded-[10px] shadow-[0px_4px_10px_0px_rgba(46,16,102,0.25)]" onClick={onClick}>
      <img src="/home/slider/next_btn.svg" alt="next_btn_icon" />
    </button>;
  }

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
