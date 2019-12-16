import { cartActionTypes } from "./cart.types";
import {addItemToCart} from "./cart.utils";

// set the initial state to true so the cart is hidden
const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

/**
 *
 * @param {*} state
 * @param {*} action
 * set the state to INITIAL_STATE.
 * Check action.type. If action.type = `TOGGLE_CART_HIDDEN` spread in current state and payload and cause a re-render.
 * otherwise do nothing.
 */
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems:addItemToCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
