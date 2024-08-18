import { create } from "zustand";


interface Init {
  cartQuantity: number,
  cartSum: number,
  cartItems: {id: string, name: string}[]
}


export const cartStore = create<Init>(() => ({
  cartQuantity: 0,
  cartItems:[],
  cartSum: 0
}));