import React from 'react';

// styles
import "./CustomButton.styles.scss";

const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => (
    <button className={`${isGoogleSignIn ? `google-sign-in` : ``} custom-button`} {...otherProps}>{children}</button>
)

export default CustomButton;