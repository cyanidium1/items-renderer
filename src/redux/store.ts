// store.ts
import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cartSlice'; // Update import statement
import menuReducer from './menuSlice';

const store = configureStore({
    reducer: {
        menuState: menuReducer,
        cart: cartReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
