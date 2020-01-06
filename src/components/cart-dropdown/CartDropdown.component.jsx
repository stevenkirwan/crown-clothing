import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
// components
import CustomButton from "../customButton/CustomButton.component";
import CartItem from "../cart-item/CartItem.component";

// selectors
import { selectCartItems } from "../../redux/cart/cart.selectors";

// actions
import { toggleCartHidden } from "../../redux/cart/cart.actions";

// styles 
import {CartDropdownContainer, CartItems, EmptyMessage} from "./CartDropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItems>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessage>Your cart is empty</EmptyMessage>
      )}
    </CartItems>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }} 
    >
      GO TO CHECKOUT
    </CustomButton>
  </CartDropdownContainer>
);

const mapStateToprops = createStructuredSelector({
  cartItems: selectCartItems
});
export default withRouter(connect(mapStateToprops)(CartDropdown));
