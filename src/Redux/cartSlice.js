import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        data: [],
        totalCartLength: 0
    },
    reducers: {
        addToCart: (state, action) => {
            const dat = state.data.findIndex(item => item.id === action.payload.id)
            if (dat >= 0) {
                state.data[dat].cartQuantity += 1
                let p = state.data[dat].price * state.data[dat].cartQuantity
                state.data[dat].totalPrice = p

            }
            else {
                const temp = {
                    ...action.payload,
                    cartQuantity: 1,
                    totalPrice: action.payload.price,
                }
                state.totalCartLength += 1
                state.data.push(temp)
            }
            localStorage.setItem('cartData', JSON.stringify(state))
        },
        cartQuantity: (state, action) => {
            const index = state.data.findIndex(item => item.id === action.payload.cartProduct.id)
            if (index >= 0) {
                if (action.payload.type === "INC") {
                    state.data[index].cartQuantity += 1
                    let p = state.data[index].price * state.data[index].cartQuantity
                    state.data[index].totalPrice = p
                }
                if (action.payload.type === "DEC") {
                    if (state.data[index].cartQuantity > 1) {
                        state.data[index].cartQuantity -= 1
                        let p = state.data[index].price * state.data[index].cartQuantity
                        state.data[index].totalPrice = p
                    }

                }
                localStorage.setItem('cartData', JSON.stringify(state))
            }
        },
        reomoveProductFromCart: (state, action) => {
            const temp = state.data.filter((item) => item.id !== action.payload)
            state.data = temp
            state.totalCartLength -= 1
            localStorage.setItem('cartData', JSON.stringify(state))
        },
        clearCart: (state, action) => {
            state.data = []
            state.totalCartLength = 0
            localStorage.setItem('cartData', JSON.stringify(state))
        }
    }
})

export const { addToCart, cartQuantity, reomoveProductFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer