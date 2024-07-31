import { createSlice } from "@reduxjs/toolkit";


export interface InitState  {
  generalMenu: {id: number, name: string, url: string, icon: string,}[]
}

const generalMenu = [
  {id: 1, name: "Wheels", url: "#", icon: "1.svg"},
  {id: 2, name: "Track", url: "#", icon: "2.svg"},
  {id: 3, name: "Bike parts", url: "#", icon: "3.svg"},
  {id: 4, name: "Gravel parts", url: "#", icon: "4.svg"},
  {id: 5, name: "Chainrings", url: "#", icon: "5.svg"},
  {id: 6, name: "Hubs", url: "#", icon: "6.svg"},
  {id: 7, name: "Cables", url: "#", icon: "7.svg"},
  {id: 8, name: "Brakes", url: "#", icon: "8.svg"},
  {id: 9, name: "Forks", url: "#", icon: "9.svg"},
  {id: 10, name: "Headsets", url: "#", icon: "10.svg"},
  {id: 11, name: "Bikes", url: "#", icon: "11.svg"},
  {id: 12, name: "e-Bikes", url: "#", icon: "12.svg"},
];

const initialState: InitState = {
  generalMenu
};

const menu = createSlice({
  name: "@@MAIN_MENU",
  initialState,
  reducers: {}
});

export default menu.reducer;