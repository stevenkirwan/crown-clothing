import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// firebase
import { auth } from "../../firebase/firebase.utils";

// icon
import { ReactComponent as Logo } from "../../assets/crown.svg";

// styles
import "./Header.styles.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        Shop
      </Link>
      <Link to="/shop" className="option">
        Contact
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          Sign Out
        </div>
      ) : (
        <Link to="/signin" className="option">
          Sign In
        </Link>
      )}
    </div>
  </div>
);

const mapStateToProps = state => ({ currentUser: state.user.currentUser });

export default connect(mapStateToProps)(Header);
