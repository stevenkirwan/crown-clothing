import React from 'react';
import {Link} from "react-router-dom";

// icon
import { ReactComponent as Logo } from "../../assets/crown.svg";

// styles
import "./Header.styles.scss";

export const Header = () => (
    <div className="header">
        <Link to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link to="/shop" className="option">Shop</Link>
            <Link to="/shop" className="option">Contact</Link>
        </div>
    </div>
)