import React from "react";
import { Route } from "react-router-dom";

// components
import { Homepage } from "./pages/homepage/Homepage.component";
import Shop from "./pages/shop/Shop.component";

// styles
import "./App.css";

function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop" component={Shop} />
    </div>
  );
}

export default App;
