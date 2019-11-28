import React from 'react';

// styles
import "./customButton.styles.scss";

export const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => (
    <button className={`${isGoogleSignIn ? `google-sign-in` : ``} custom-button`} {...otherProps}>{children}</button>
)