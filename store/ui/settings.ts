import { create } from "zustand";
import {persist} from "zustand/middleware";

interface InitState {
  location: string,
  language: string,
  currency: string,
  setLocation: (loc: "Boston" | "New York" | "Berlin" | "Köln" | string) => void,
  setLanguage: (lang: "EN" | "DE" | "UA") => void,
  setCurrency: (curr: "USD" | "EUR" | "UAH") => void
}


export const settings = create<InitState>()(
  persist((set) => ({
    location: "Boston",
    language: "EN",
    currency: "USD",
    setLocation: (loc) => set(() => ({location: loc})),
    setLanguage: (lang) => set(() => ({language: lang})),
    setCurrency: (curr) => set(() => ({currency: curr})),
  }), {name: "settings"})
);