import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface CartItem {
  codeItem: number;
  name: string;
  quantity: number;
  img: string;
  price: number;
  brand: string;
}

interface Init {
  cartQuantity: number;
  cartSum: number;
  cartItems: CartItem[] | [];
  addCart: (item: CartItem) => void;
  setQuantity: (codeItem: number, quantity: number) => void;
  deleteCart: (codeItem: number) => void;
  deleteAllCart: () => void;
}

export const cartStore = create<Init>()(
  devtools((set) => ({
    cartQuantity: 0,
    cartItems: [],
    cartSum: 0,
    setQuantity: (codeItem, quantity) =>
      set((state) => {
        const newArrQuantity = state.cartItems.map((el) =>
          el.codeItem === codeItem ? { ...el, quantity } : el
        );
        const newCartSum = newArrQuantity.reduce(
          (sum, el) => sum + el.price * el.quantity,
          0
        );
        return { cartItems: newArrQuantity, cartSum: newCartSum };
      }),
    addCart: (item) =>
      set((state) => {
        let resultArr;
        let isNewItem = false;

        const itemExists = state.cartItems.find(
          (el) => el.codeItem === item.codeItem
        );
        if (itemExists) {
          resultArr = state.cartItems.map((el) =>
            el.codeItem === item.codeItem
              ? { ...el, quantity: el.quantity + item.quantity }
              : el
          );
        } else {
          resultArr = [...state.cartItems, item];
          isNewItem = true;
        }
        const newCartSum = resultArr.reduce(
          (sum, el) => sum + el.price * el.quantity,
          0
        );

        return {
          cartItems: resultArr,
          cartQuantity: state.cartQuantity + (isNewItem ? 1 : 0),
          cartSum: newCartSum,
        };
      }),
    deleteCart: (codeItem) =>
      set((state) => {
        const resultArr = state.cartItems.filter(
          (el) => el.codeItem !== codeItem
        );

        const newCartSum = resultArr.reduce(
          (sum, el) => sum + el.price * el.quantity,
          0
        );

        return {
          cartItems: resultArr,
          cartSum: newCartSum,
          cartQuantity: resultArr.length,
        };
      }),
    deleteAllCart: () =>
      set(() => ({ cartItems: [], cartQuantity: 0, cartSum: 0 })),
  }))
);
