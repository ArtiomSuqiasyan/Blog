import React from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

export default class CreatePost extends React.Component {
  state = {
    title: "",
    info: "",
    method: "",
    userId: JSON.parse(localStorage.getItem("currentUser"))[0].id,
    postId: 1
  };

  handleChange = (props) => (event) => {
    this.setState({ ...props, [props]: event.target.value });
  };

  handleSubmit = () => {
    const prevLocalStorage = JSON.parse(localStorage.getItem("posts"));
    const currentPost = [
      ...prevLocalStorage,
      {
        title: this.state.title,
        info: this.state.info,
        method: this.state.method,
        userId: this.state.userId,
        postId: this.state.postId
      },
    ];
    localStorage.setItem("posts", JSON.stringify(currentPost));
    this.setState((prevId) =>{
      return {
      title: "",
      info: "",
      method: "",
      postId: prevId.postId + 1
      }
    });
  };

  render() {
    const emptyInputValues =
      this.state.title === "" ||
      this.state.info === "" ||
      this.state.method === "";
    return (
      <div>
        <h2>Create post</h2>

        <FormControl fullWidth>
          <InputLabel>Title</InputLabel>
          <Input
            id="title"
            value={this.state.title}
            onChange={this.handleChange("title")}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Info</InputLabel>
          <Input
            id="info"
            value={this.state.info}
            onChange={this.handleChange("info")}
            multiline
            rows={2}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Method</InputLabel>
          <Input
            id="method"
            value={this.state.method}
            onChange={this.handleChange("method")}
            multiline
            rows={6}
          />
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          onClick={this.handleSubmit}
          disabled={emptyInputValues}
        >
          Create Post
        </Button>
      </div>
    );
  }
}
