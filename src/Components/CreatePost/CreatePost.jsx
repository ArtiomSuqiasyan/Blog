import React from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

export default class CreatePost extends React.Component {
  render() {
    const logged = localStorage.getItem("user") ? true : false
    return (
      <div>
        <h2>Create post</h2>

        <FormControl fullWidth>
          <InputLabel>Title</InputLabel>
          <Input
            id="title"
            // onChange={this.handleChange("title")}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Info</InputLabel>
          <Input
            id="info"
            multiline
            rows={6}
            // onChange={this.handleChange("info")}
          />
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
        >
          Create Post
        </Button>
      </div>
    );
  }
}
