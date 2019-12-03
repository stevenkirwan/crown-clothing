import React from "react";

// styles
import "./SignInAndSignUp.styles.scss";

// components
import SignIn from "../../components/signIn/SignIn.component";
import SignUp from "../../components/signup/Signup.component";

export const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);
