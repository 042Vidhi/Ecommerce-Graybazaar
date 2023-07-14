import {createSlice , PayloadAction} from '@reduxjs/toolkit';
import { RootState } from './store';

export type WishListState = {
    wishListItems: any[]
}

const initialState: WishListState = {
    wishListItems: []
}

export const wishListSlice = createSlice({
    name: 'wishList',
    initialState,
    reducers: {
        addToWishList: (state, action: PayloadAction<any>) => {
            const item = action.payload;
            state.wishListItems.push(item);
        },
        removeFromWishList: (state, action: PayloadAction<any>) => {
            state.wishListItems = state.wishListItems.filter((x: any) => x.id !== action.payload.id);
        }
    }
})

export const { addToWishList, removeFromWishList } = wishListSlice.actions;

export const selectWishList = (state: RootState) => state.wishList;

export default wishListSlice.reducer;