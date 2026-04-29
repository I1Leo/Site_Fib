import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TCartItem } from "../types/cart";

export type TInitialState = {
    isOpen: boolean,
    cartArr: TCartItem[],
    amount: number,
    totalPrice: number
}

const initialState: TInitialState = {
   isOpen: false,
   cartArr: [],
   amount: 0,
   totalPrice: 0
}

const recalculate = (state: TInitialState) => {
    state.amount = state.cartArr.reduce((sum, item) => sum + item.amount, 0);
    state.totalPrice = state.cartArr.reduce((sum, item) => sum + item.price * item.amount, 0);
};

export const cartSlice = createSlice({
    name: "CartSlice",
    initialState,
    reducers: {
        toggleCart(state) {
            state.isOpen = !state.isOpen;
        },
        addItem(state, action: PayloadAction<TCartItem>) {
            const exists = state.cartArr.find(i => i.id === action.payload.id);
            if (!exists) {
                state.cartArr.push(action.payload);
                recalculate(state);
            }
        },
        removeItemById(state, action: PayloadAction<string>) {
            state.cartArr = state.cartArr.filter(i => i.id !== action.payload);
            recalculate(state);
        },
        increaseItemAmount(state, action: PayloadAction<string>) {
            const item = state.cartArr.find(i => i.id === action.payload);
            if (item) {
                item.amount += 1;
                recalculate(state);
            }
        },
        decreaseItemAmount(state, action: PayloadAction<string>) {
            const item = state.cartArr.find(i => i.id === action.payload);
            if (item) {
                item.amount -= 1;
                if (item.amount <= 0) {
                    state.cartArr = state.cartArr.filter(i => i.id !== action.payload);
                }
                recalculate(state);
            }
        }
    }
})

export const { toggleCart, addItem, removeItemById, increaseItemAmount, decreaseItemAmount } = cartSlice.actions;
