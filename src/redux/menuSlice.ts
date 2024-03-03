// menuSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MenuState {
  menu: MenuItem[];
}

interface MenuItem {
  name: string;
  items: Array<any>;
}

const initialState: MenuState = {
  menu: [],
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenu: (state, action: PayloadAction<MenuItem[]>) => {
      state.menu = action.payload;
    },
  },
});

export const { setMenu } = menuSlice.actions;

export default menuSlice.reducer;
