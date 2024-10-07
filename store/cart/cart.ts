import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface CartItem {
  codeItem: number;
  quantity: number;
}

interface Init {
  cartQuantity: number;
  cartSum: number;
  cartItems: CartItem[] | [];
  addCart: (item: CartItem) => void;
  deleteCart: (arr: CartItem[] | []) => void;
}

export const cartStore = create<Init>()(
  devtools((set) => ({
    cartQuantity: 0,
    cartItems: [],
    cartSum: 0,
    addCart: (item) =>
      set((state) => {
        let resultArr;
        let isNewItem = false;

        const itemExists = state.cartItems.find(el => el.codeItem === item.codeItem);
        if (itemExists) {
         resultArr = state.cartItems.map(el =>
            el.codeItem === item.codeItem ? { ...el, quantity: el.quantity + 1 } : el
          );
        } else {
          resultArr = [...state.cartItems, item];
          isNewItem = true;
        }

        return { cartItems: resultArr, cartQuantity: state.cartQuantity + (isNewItem ? 1 : 0)};
      }),
    deleteCart: (arr) => set(() => ({ cartItems: arr })),
  }))
);