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

//styles
import "./CartDropdown.styles.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }} 
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToprops = createStructuredSelector({
  cartItems: selectCartItems
});
export default withRouter(connect(mapStateToprops)(CartDropdown));
