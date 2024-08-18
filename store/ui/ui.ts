import { create } from "zustand";

interface InitState {
  showMailMenu: boolean;
  toggleMainMenu: (isOpen: boolean) => void;
}

export const uiStore = create<InitState>((set) => ({
  showMailMenu: false,
  toggleMainMenu: (isOpen) => set(() => {
    const newShowMailMenu = isOpen;

    if (newShowMailMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    return { showMailMenu: newShowMailMenu };
  }),
}));