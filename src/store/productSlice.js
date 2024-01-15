import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    return data;
});

const initialState = {
    products: [],
    selectedProduct: null,
    status: 'idle',
    error: null,
};

export const productSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        setSelectedProduct: (state, action) => {
            const productId = action.payload;
            state.selectedProduct = state.products.products.find((p) => p.id === productId);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});
