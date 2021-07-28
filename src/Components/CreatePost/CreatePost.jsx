import React from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

export default class CreatePost extends React.Component {
  render() {
    return (
      <div>
        <h2>Create post</h2>

        <FormControl fullWidth>
          <InputLabel>Title</InputLabel>
          <Input
            id="title"
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Info</InputLabel>
          <Input
            id="info"
            multiline
            rows={2}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Method</InputLabel>
          <Input
            id="method"
            multiline
            rows={6}
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
