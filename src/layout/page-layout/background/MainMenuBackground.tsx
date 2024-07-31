import { useAppSelector } from "../../../../store/store";

export default function MainMenuBackground() {
  const { showMailMenu } = useAppSelector((state) => state.UI);

  return (
    <>
      {
        showMailMenu && <div className="absolute top-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-20" />
      }
    </>
  );
}
