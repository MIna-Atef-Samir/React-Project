
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cart-slice';
import ProductSlice from './slices/products-slice';
export const Store = configureStore({
    reducer: {
        products: ProductSlice,
        cart: cartSlice
    }
})