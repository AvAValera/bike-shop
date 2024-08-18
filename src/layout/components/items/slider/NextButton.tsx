import { CustomArrowProps } from "react-slick";

export default function NextButton(props: CustomArrowProps) {
  const {onClick} = props;
    return <button className="w-10 h-10 bg-white@ hover:bg-light-gray@ absolute flex items-center justify-center top-1/2 -translate-y-1/2 -right-5 z-10 rounded-[10px] shadow-[0px_4px_10px_0px_rgba(46,16,102,0.25)]" onClick={onClick}>
      <img src="/home/slider/next_btn.svg" alt="next_btn_icon" />
    </button>;
}
