import { createSlice } from "@reduxjs/toolkit";


export interface InitState  {
  footerMenu: {
    id: number, 
    name: string,
    data: {id: number, name: string, url: string}[]
  }[]
}

const footerMenu = [
  {id: 1, name: "Customer service", data: [
    {id: 1, name: "My account", url: "#"},
    {id: 2, name: "Order history", url: "#"},
    {id: 3, name: "Gift cards", url: "#"},
    {id: 4, name: "Jenson Pay by tandym", url: "#"},
    {id: 5, name: "Help desk", url: "#"},
    {id: 6, name: "Returns", url: "#"},
  ]},
  {
    id:2, name: "Our Culture", data: [
      {id:1, name: "Affiliate Program", url: "#" },
      {id:2, name: "Store Locations", url: "#" },
      {id:3, name: "Community", url: "#" },
      {id:4, name: "Privacy Policy", url: "#" },
      {id:5, name: "Accessibility Statement", url: "#" },
      {id:6, name: "Terms of Use", url: "#" },
    ]
  },
  {
    id: 3, name: "Company", data: [
      {id: 1, name: "About us", url: "#"},
      {id: 2, name: "Events", url: "#"},
      {id: 3, name: "Gear advisors", url: "#"},
      {id: 4, name: "Careers", url: "#"},
      {id: 5, name: "Warranty", url: "#"},
      {id: 6, name: "Info", url: "#"},
    ]
  },
  {
    id: 4, name: "Help", data: [
      {id: 1, name: "FAQ", url: "#"},
      {id: 2, name: "Help online", url: "#"},
      {id: 3, name: "Gear advisors", url: "#"},
    ]
  }
];

const initialState: InitState = {
  footerMenu
};

const footer = createSlice({
  name: "@@FOTER",
  initialState,
  reducers: {}
});

export default footer.reducer;