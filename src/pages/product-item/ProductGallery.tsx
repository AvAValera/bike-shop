import Slider from "react-slick";
import { useRef } from "react";


export default function ProductGallery() {
  const sliderRef = useRef<Slider | null>(null);
  
  const settings = {
    dots: false,
    // dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  return (
    <div className="bg-white@ rounded-md border border-gray-200@  p-2 py-5  sm:p-10 mb-0 lg:mb-10">
      <Slider ref={slider => (sliderRef.current = slider)} {...settings}>
        <div className="!flex !justify-center">
          <img className="h-[400px] object-contain" src={"/store/item/1.webp"} />
        </div>
        <div className="!flex !justify-center">
          <img className="h-[400px]" src={"/store/item/2.webp"} />
        </div>
        <div className="!flex !justify-center">
          <img className="h-[400px]" src={"/store/item/3.webp"} />
        </div>
        <div className="!flex !justify-center">
          <img className="h-[400px]" src={"/store/item/4.webp"} />
        </div>
      </Slider>
      <div className="flex items-center gap-2 mt-10">
        <div className="w-1/4 h-[70px]">
        <img className="w-full h-full object-contain cursor-pointer hover:ring-purple@ hover:ring-[1px]" onClick={() => sliderRef.current?.slickGoTo(0)} src="/store/item/1.webp" alt="" />
        </div>
        <div className="w-1/4 h-[70px] ">
        <img className="w-full h-full object-contain cursor-pointer hover:ring-purple@ hover:ring-[1px]" onClick={() => sliderRef.current?.slickGoTo(1)} src="/store/item/2.webp" alt="" />
        </div>
        <div className="w-1/4 h-[70px]">
        <img className="w-full h-full object-contain cursor-pointer hover:ring-purple@ hover:ring-[1px]" onClick={() => sliderRef.current?.slickGoTo(2)} src="/store/item/3.webp" alt="" />
        </div>
        <div className="w-1/4 h-[70px] ">
        <img className="w-full h-full object-contain cursor-pointer hover:ring-purple@ hover:ring-[1px]" onClick={() => sliderRef.current?.slickGoTo(3)} src="/store/item/4.webp" alt="" />
        </div>
      </div> 
    </div>
  );
}
