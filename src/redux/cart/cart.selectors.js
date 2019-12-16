// selectors for cart items 
import { createSelector } from "reselect";

const selectCart = state => state.cart;

// get all cart items
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

// get cart hidden status
export const selectCartHidden = createSelector([selectCart], cart => cart.hidden);

// get total quantity of selected item
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);

// get total price 
export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
);
