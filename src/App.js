import React from "react";
import { Route } from "react-router-dom";

// components
import { Homepage } from "./pages/homepage/Homepage.component";

// styles
import "./App.css";

function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
    </div>
  );
}

export default App;
