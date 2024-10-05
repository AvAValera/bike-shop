import { create } from "zustand";

interface InitState {
  search: string;
  brand: string[] | [];
  searchBrand: string[] | [];
  rating: number;
  price: [number, number];
  setSearch: (search: string) => void;
  setBrand: (brand: string[]) => void;
  setSearchBrand: (brand: string[]) => void;
  setRating: (rating: number) => void;
  setPrice: (price: [number, number]) => void;
  clearAllFilters: () => void;
}

export const filtersStore = create<InitState>()(
  (set) => ({
    search: "",
    brand: [],
    searchBrand: [],
    price: [0, 30000],
    rating: 6,
    setSearch: (search) => set(() => ({ search })),
    setBrand: (brand) => set(() => ({ brand })),
    setSearchBrand: (searchBrand) => set(() => ({ searchBrand })),
    setRating: (rating) => set(() => ({ rating })),
    setPrice: (price) => set(() => ({ price })),
    clearAllFilters: () =>
      set(() => ({
        search: "",
        brand: [],
        searchBrand: [],
        price: [0, 30000],
        rating: 6,
      })),
  })
);
