import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Authorization from "./Components/SignIn/Authorization";
import CreatePost from "./Pages/CreatePost/CreatePost";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Privacy from "./Pages/Privacy/Privacy";
import Terms from "./Pages/Terms/Terms";
import { Redirect } from "react-router";
import Login from "./Components/Login/Login"
import Logout from "./Components/LogOut/LogOut"

export default class Blog extends React.Component {
  state = {
    posts: JSON.parse(localStorage.getItem("posts")) || [],
    logged: false,
  };

  handleAuthorization = (props) => (e) => {
    e.stopPropagation();
    this.setState({ logged: !this.state.logged });
    localStorage.setItem(`${props.name}`, JSON.stringify(props));
  };

  handleAddPost = (prop) => (e) => {
    e.stopPropagation();
    this.setState(({ posts }) => ({ posts: [...posts, prop] }));
  };

  render() {
    localStorage.setItem("posts", JSON.stringify(this.state.posts));
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
          <Route path="/sign-in">
            <Authorization />
          </Route>
         
          {localStorage.getItem("currentUser") ? 
          <Route path="/logout">
            <Logout />
          </Route>   :
          <Route path="/login">
             <Login />
          </Route>
          }

          <Route path="/create-post">
            {localStorage.getItem("currentUser") ? (
              <CreatePost />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
        </Switch>
      </Router>
    );
  }
}
