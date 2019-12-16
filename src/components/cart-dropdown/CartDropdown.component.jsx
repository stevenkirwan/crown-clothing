import React from "react";
import { connect } from "react-redux";
// components
import CustomButton from "../customButton/CustomButton.component";
import CartItem from "../cart-item/CartItem.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";

//styles
import "./CartDropdown.styles.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToprops = state => ({
  cartItems: selectCartItems(state)
});
export default connect(mapStateToprops)(CartDropdown);
