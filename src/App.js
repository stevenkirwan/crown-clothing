import React from "react";
import { Route, Switch } from "react-router-dom";

// components
import { Header } from "./components/header/Header.component";
import { Homepage } from "./pages/homepage/Homepage.component";
import Shop from "./pages/shop/Shop.component";

// styles
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
