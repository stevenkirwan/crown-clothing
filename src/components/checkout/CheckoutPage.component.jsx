import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// selectors
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";

// components
import CheckoutItem from "../checkoutItem/CheckoutItem.component";

// styles
import {Checkout, CheckoutHeader, CheckoutHeaderBlock, CheckoutTotal} from "./CheckoutPage.styles";

const CheckoutPage = ({ cartItems, total }) => (
  <Checkout>
    <CheckoutHeader>
      <CheckoutHeaderBlock>
        <span>Product</span>
      </CheckoutHeaderBlock>
      <CheckoutHeaderBlock>
        <span>Description</span>
      </CheckoutHeaderBlock>
      <CheckoutHeaderBlock>
        <span>Quantity</span>
      </CheckoutHeaderBlock>
      <CheckoutHeaderBlock>
        <span>Price</span>
      </CheckoutHeaderBlock>
      <CheckoutHeaderBlock>
        <span>Remove</span>
      </CheckoutHeaderBlock>
    </CheckoutHeader>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <CheckoutTotal>
      <span>TOTAL: ${total}</span>
    </CheckoutTotal>
  </Checkout>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
