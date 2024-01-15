import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: [],
}

export const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: initialState,
    reducers: {
        addToFavorites: (state, action) => {
            const { product } = action.payload;
            const existingIndex = state.favorites.findIndex(item => item.product.id === product.id);

            if (existingIndex !== -1) {
                state.favorites.splice(existingIndex, 1);
            } else {
                state.favorites.push({ product });
            }
        },
    }
})


