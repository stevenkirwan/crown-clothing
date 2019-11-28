import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { auth } from "./firebase/firebase.utils";

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

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
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
