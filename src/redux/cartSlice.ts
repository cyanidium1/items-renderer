// cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  name: string;
  portionSize: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const loadCartState = (): CartState => {
  const storedState = localStorage.getItem("cartState");
  return storedState ? JSON.parse(storedState) : { items: [] };
};

const saveCartState = (state: CartState) => {
  localStorage.setItem("cartState", JSON.stringify(state));
};

const initialCartState: CartState = loadCartState();

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const newItem: CartItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.items.push(newItem);
      }

      saveCartState(state);
    },
    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index !== -1) {
        state.items.splice(index, 1);
      }

      saveCartState(state);
    },
    clearCart: (state) => {
      state.items = [];

      saveCartState(state);
    },
    decrementQuantity: (state, action: PayloadAction<{ id: string }>) => {
      const item = state.items.find((item) => item.id === action.payload.id);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }

      saveCartState(state);
    },
    incrementQuantity: (state, action: PayloadAction<{ id: string }>) => {
      const item = state.items.find((item) => item.id === action.payload.id);

      if (item) {
        item.quantity += 1;
      }

      saveCartState(state);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decrementQuantity,
  incrementQuantity,
  clearCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
