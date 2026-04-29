import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './cart';

const rootReducer = combineSlices(
	cartSlice
);



export const store = configureStore({
	reducer: { root: rootReducer },
});
