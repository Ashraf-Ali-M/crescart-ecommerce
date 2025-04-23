import { createSlice } from '@reduxjs/toolkit'

let initialState = [];
try {
    const stored = localStorage.getItem('cart');
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        initialState = parsed;
      }
    }
  } catch (error) {
    console.error("Cart load error", error);
  }

console.log(initialState)


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.push(action.payload)
        },
        deleteFromCart(state, action) {
            return state.filter(item => item.id != action.payload.id);
        },
        incrementQuantity(state, action) {
            return state.map(item => {
                if (item.id === action.payload) {
                    return { ...item, quantity: (item.quantity || 1) + 1 };
                }
                return item;
            });
        },
        decrementQuantity(state, action) {
            return state.map(item => {
                if (item.id === action.payload && (item.quantity || 1) > 1) {
                    return { ...item, quantity: (item.quantity || 1) - 1 };
                }
                return item;
            });
        },        
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, deleteFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions

export default cartSlice.reducer