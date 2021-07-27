import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreatePost from "./Pages/CreatePost/CreatePost";
import About from "./Pages/About/About";
import Terms from "./Pages/Terms/Terms";
import Privacy from "./Pages/Privacy/Privacy";
import SignIn from "./Components/SignIn/SignIn";
import Home from "./Pages/Home/Home";
import LogOut from "./Components/LogOut/LogOut"

export default class Blog extends React.Component {
  state = {
    posts: [],
    users: [],
    loged: false,
  };

  handleAddPost = (prop) => (e) => {
    e.stopPropagation();
    this.setState(({ posts }) => ({ posts: [...posts, prop] }));
  };

  render() {
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
            {(this.state.loged && <LogOut />) || <SignIn />}
          </Route>
          <Route path="/create-post">
            <CreatePost />
          </Route>
        </Switch>
      </Router>
    );
  }
}
          