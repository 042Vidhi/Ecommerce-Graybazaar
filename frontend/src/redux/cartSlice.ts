import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

// Define a type for the slice state
export type CartState = {
    cartItems: any[]
}

// Define the initial state using that type
const initialState: CartState = {
    cartItems: []
}

export const cartSlice = createSlice({
    name: 'cart',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<any>) => {
            const item = action.payload;
            state.cartItems.push(item);
      
        },
        removeFromCart: (state, action: PayloadAction<any>) => {
            state.cartItems = state.cartItems.filter((x: any) => x.id !== action.payload.id);
        }   
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;