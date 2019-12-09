import React from 'react';

// components
import CustomButton from "../customButton/CustomButton.component";

//styles
import "./CartDropdown.styles.scss";

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items" />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

export default CartDropdown;