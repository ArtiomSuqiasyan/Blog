import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Terms from "./Pages/Terms/Terms";
import Privacy from "./Pages/Privacy/Privacy";
import Home from "./Pages/Home/Home";
import SignIn from "./Pages/authentication/authentication";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/privacy">
          <Privacy />
        </Route>
        <Route path="/terms">
          <Terms />
        </Route>
        <Route path="/login">
          <SignIn />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
