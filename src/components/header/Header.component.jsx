import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// firebase
import { auth } from "../../firebase/firebase.utils";

// selectors
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

// icon
import { ReactComponent as Logo } from "../../assets/crown.svg";

// components
import CartIcon from "../cart-icon/CartIcon.component";
import CartDropdown from "../cart-dropdown/CartDropdown.component";

// styles
import {HeaderContainer, LogoConatiner, OptionContainer, OptionDiv, OptionLink} from "./Header.styles";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoConatiner to="/">
      <Logo className="logo" />
    </LogoConatiner>
    <OptionContainer>
      <OptionLink to="/shop">
        Shop
      </OptionLink>
      <OptionLink to="/shop">
        Contact
      </OptionLink>
      {currentUser ? (
        <OptionDiv onClick={() => auth.signOut()}>
          Sign Out
        </OptionDiv>
      ) : (
        <OptionLink to="/signin">
          Sign In
        </OptionLink>
      )}
      <CartIcon />
      {hidden ? null : <CartDropdown />}
    </OptionContainer>
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
