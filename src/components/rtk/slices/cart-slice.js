
import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    initialState: [],
    name: 'Cartname',
    reducers: {
        addToCart: (state, action) => {
            const findProduct = state.find((p) => p.id === action.payload.id)
            if (findProduct) {
                findProduct.quantity++
            } else {
                const productClone = { ...action.payload, quantity: 1 }
                state.push(productClone)
            }
        },
        removeSingle: (state, action) => {
            const findProduct = state.find((p) => p.id === action.payload.id)
            if (findProduct.quantity) {
                findProduct.quantity--
            }
        },
        removeFromCart: (state, action) => {
            return state.filter((product) => product.id !== action.payload.id)
        },
        clearCart: (state, action) => {
            return state = []
        },
    }
})

export const { addToCart, removeFromCart, removeSingle, clearCart } = CartSlice.actions
export default CartSlice.reducer