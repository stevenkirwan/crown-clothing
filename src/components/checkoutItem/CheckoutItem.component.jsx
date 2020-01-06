import React from "react";
import { connect } from "react-redux";

// actions
import { clearItemFromCart, addItem, removeItem } from "../../redux/cart/cart.actions";
// styles
import {CheckoutItemContainer, CheckoutItemImage, CheckoutItemBlock, CheckoutItemQuantity, CheckoutItemRemove} from "./CheckoutItem.styles";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <CheckoutItemImage>
        <img src={imageUrl} alt="item" />
      </CheckoutItemImage>
      <CheckoutItemBlock>{name}</CheckoutItemBlock>
      <CheckoutItemQuantity>
        <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
      </CheckoutItemQuantity>
      <CheckoutItemBlock>{price}</CheckoutItemBlock>
      <CheckoutItemRemove onClick={() => clearItem(cartItem)}>
        &#9747;
      </CheckoutItemRemove>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
