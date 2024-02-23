import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cart.slice';

const reducer = {
  cart: cartReducer,
};

const makeStore = configureStore({
  reducer,
});

export default makeStore;