import React from 'react';

// styles
import {CustomButtonContainer} from "./CustomButton.styles";

const CustomButton = ({children, ...props}) => (
    <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
)

export default CustomButton;