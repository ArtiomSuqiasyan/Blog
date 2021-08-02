import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import classes from "./SignIn.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import getID from "../../helpers/getID";
import { Redirect } from "react-router-dom";

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      email: "",
      password: "",
      isExistEmail: "",
      isValidName: false,
      isValidSurname: false,
      isValidEmail: false,
      isValidPassword: false,
    };
  }

  handleChangeName = (e) => {
    this.setState({ name: e.target.value });
    const nameCheck = /^[a-zA-Z ]{1,30}$/;
    const isValid = nameCheck.test(e.target.value);
    if (isValid) {
      this.setState({ isValidName: true });
    } else if (e.target.value === "") {
      this.setState({ isValidName: false });
    } else {
      this.setState({
        isValidName: false,
      });
    }
  };

  handleChangeSurname = (e) => {
    this.setState({ surname: e.target.value });
    const surnameCheck = /^[a-zA-Z ]{1,30}$/;
    const isValid = surnameCheck.test(e.target.value);
    if (isValid) {
      this.setState({ isValidSurname: true });
    } else if (e.target.value === "") {
      this.setState({ isValidSurname: false });
    } else {
      this.setState({
        isValidSurname: false,
      });
    }
  };

  handleChangeEmail = (e) => {
    const users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];

    for (let i = 0; i < users.length; i++) {
      if (users[i].email === e.target.value) {
        this.setState({
          isExistEmail: "You're registered, please login",
        });
        break;
      } else {
        this.setState({
          isExistEmail: "",
        });
      }
    }

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
    localStorage.setItem(
      "users",
      JSON.stringify([
        ...users,
        {
          id: getID(users),
          name: this.state.name,
          surname: this.state.surname,
          email: this.state.email,
          password: this.state.password,
          isLoged: true,
        },
      ])
    );
    <Redirect to="/create-post"/>;
    

  };

  render() {
    const checkValidation =
      this.state.isValidEmail &&
      this.state.isValidPassword &&
      this.state.isValidName &&
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
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                value={this.state.name}
                variant="outlined"
                margin="normal"
                autoFocus
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                onChange={this.handleChangeName}
              />
              <TextField
                value={this.state.surname}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="surname"
                label="Surname"
                name="surname"
                onChange={this.handleChangeSurname}
              />
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
                Sign in
              </Button>
            </form>
          </div>
        </Container>
        <Footer />
      </>
    );
  }
}
