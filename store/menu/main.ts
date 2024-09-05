import { create } from "zustand";




const generalMenu = [
  {id: 11, name: "Bikes", url: "/category/bikes", icon: "11.svg"},
  {id: 7, name: "Brackets", url: "/category/brackets", icon: "1.svg"},
  {id: 8, name: "Cassettes", url: "/category/cassettes", icon: "8.svg"},
  {id: 6, name: "Chains", url: "/category/chains", icon: "6.svg"},
  {id: 10, name: "Chainrings", url: "/category/chainrings", icon: "10.svg"},
  {id: 12, name: "E-Bikes", url: "/category/ebikes", icon: "12.svg"},
  {id: 3, name: "Forks", url: "/category/forks", icon: "3.svg"},
  {id: 4, name: "Groups", url: "/category/groups", icon: "4.svg"},
  {id: 9, name: "Helmets", url: "/category/helmets", icon: "9.svg"},
  {id: 5, name: "Pedals", url: "/category/pedals", icon: "5.svg"},
  {id: 2, name: "Stems", url: "/category/steams", icon: "2.svg"},
  {id: 1, name: "Wheels", url: "/category/wheels", icon: "7.svg"},
];
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

export const mainMenuStore = create(() =>({
  generalMenu,
  footerMenu
}));