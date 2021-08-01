import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import classes from "./Login.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isExistEmail: "",
      isValidEmail: false,
      isValidPassword: false,
    };
  }

  handleChangeEmail = (e) => {
    this.setState({ email: e.target.value });
    const mailCheck =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const isValid = mailCheck.test(e.target.value);
    if (isValid) {
      this.setState({ isValidEmail: true });
    } else if (e.target.value === "") {
      this.setState({ isValidEmail: false });
    } else {
      this.setState({
        isValidEmail: false,
      });
    }
  };

  handleChangePassword = (e) => {
    this.setState({ password: e.target.value });
    const passwordCheck =
      /^(?=.*[0-9])(?=.*[!@#$%^&*?])[a-zA-Z0-9!@#$%^&*?]{6,16}$/;
    const isValid = passwordCheck.test(e.target.value);
    if (isValid) {
      this.setState({ isValidPassword: true });
    } else if (e.target.value === "") {
      this.setState({ isValidPassword: false });
    } else {
      this.setState({
        isValidPassword: false,
      });
    }
  };

  onRegister = () => {
    const users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];

    let getEmail = false;
    let id
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === this.state.email) {
        getEmail = true;
        id = i
      }
    }
    if (!getEmail) {
      this.setState({
        isExistEmail: "Email not found, please register",
      });
    } else if(users[id].password === this.state.password) {
      this.setState({
        isExistEmail: "",
      });
      users[id].isLoged = true;
      JSON.stringify(localStorage.setItem("users", users))
      
    } else {
      alert("wrong password")
    }

    
  };

  render() {
    const checkValidation =
      this.state.isValidEmail &&
      this.state.isValidPassword &&
      !this.state.isExistEmail;
    return (
      <>
        <Header />
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                value={this.state.email}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={this.handleChangeEmail}
              />
              <p>{this.state.isExistEmail}</p>
              <TextField
                value={this.state.password}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={this.handleChangePassword}
              />
              <Button
                className={classes.submit}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={!checkValidation}
                onClick={this.onRegister}
              >
                Log in
              </Button>
            </form>
          </div>
        </Container>
        <Footer />
      </>
    );
  }
}
