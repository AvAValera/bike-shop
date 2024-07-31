import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import UI from "./ui-slice";
import footer from "./footer-slice";
import menu from "./menu-slice";

const store = configureStore({
  reducer: {
    UI,
    footer,
    menu,
  },
  devTools: true
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;