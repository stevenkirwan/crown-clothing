import React from 'react';

// styles
import "./customButton.styles.scss";

export const CustomButton = ({children, ...otherProps}) => (
    <button className="custom-button" {...otherProps}>{children}</button>
)