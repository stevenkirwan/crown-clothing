import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { auth, currebtUserProfileData } from "./firebase/firebase.utils";

// components
import { Header } from "./components/header/Header.component";
import { Homepage } from "./pages/homepage/Homepage.component";
import Shop from "./pages/shop/Shop.component";
import { SignInAndSignUp } from "./pages/signInAndSignUp/SignInAndSignUp.component";

// styles
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: null };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await currebtUserProfileData(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: { id: snapShot.id, ...snapShot.data() }
          })
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
