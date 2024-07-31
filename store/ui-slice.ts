import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface InitState {
  showMailMenu: boolean
}

const initialState: InitState = {
  showMailMenu: false
};

const UI = createSlice({
  name: "@@UI",
  initialState,
  reducers: { 
    toggleMailMenu (state, action: PayloadAction<boolean>) {
      state.showMailMenu = action!.payload;
      
      if(state.showMailMenu){
        document.body.style.overflow = "hidden";
      }
      else document.body.style.overflow = "visible";
    }
  }
});

export const {toggleMailMenu} = UI.actions;


export default UI.reducer;