import { uiStore } from "../../../../store/ui/ui";

export default function MainMenuBackground() {
  const { showMailMenu } = uiStore((state) => state);

  return (
    <>
      {showMailMenu && (
        <div className="absolute top-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-20" />
      )}
    </>
  );
}
