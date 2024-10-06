
interface Props {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>
}

export default function Counter({counter=1, setCounter}: Props) {

  return (
    <>
      <div className="w-[120px] h-10 bg-[#F1F2F4] rounded-[58px] flex items-center justify-between p-[5px] flex-none">
        <button
          onClick={() => setCounter((pre) => (pre === 1 ? 1 : pre - 1))}
          className="w-[30px] h-[30px] rounded-full bg-white@ shadow-[0_2px_5px_0_rgba(0,0,0,0.07)] flex items-center justify-center"
        >
          <img src="/items/minus.svg" alt="" />
        </button>
        <span className="text-black@ text-lg font-medium">{counter}</span>
        <button
          onClick={() => setCounter((pre) => pre + 1)}
          className="w-[30px] h-[30px] rounded-full bg-white@ shadow-[0_2px_5px_0_rgba(0,0,0,0.07)] flex items-center justify-center"
        >
          <img src="/items/plus.svg" alt="" />
        </button>
      </div>
    </>
  );
}
