import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface InitState {
  rating: number,
  price: [number, number],
  type: string,
  setRating: (rating: number) => void,
  setPrice: (price: [number, number]) => void,
  setType: (type: "premium" | "normal" | "all") => void
}

export const filtersStore = create<InitState>()(
  devtools(
    (set) => ({
      price: [0, 30000],
      rating: 6,
      type: "all",
      setRating: (rating) => set(() => ({rating})),
      setPrice: (price) => set(() => ({price})),
      setType: (type) => set(() => ({type}))
    })
  )
);