import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
// import Search from "./components/Search";
// import Results from "./components/Results";
import Saved from "./components/Saved";


const App = () => (
    <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/saved" component={Saved} />
    </div>
  </Router>
);

export default App;
