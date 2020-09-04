import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
