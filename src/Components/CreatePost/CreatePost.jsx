import React from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

export default class CreatePost extends React.Component {
//   constructor(props){
//     super(props)
//   this.state = {
//     title: "",
//     info: "",
//   };
// }

  // handleChange = (props) => (event) => {
  //   this.setState({ ...props, [props]: event.target.value });
  // };

  // handleSubmit = () => {
  //   localStorage.setItem(`${this.state.name}`, JSON.stringify(this.state));
  // };

  render() {
      // const {onClick, loged} = this.props;
    return (
      <div>
        <h2>Create post</h2>

        <FormControl fullWidth>
          <InputLabel>Title</InputLabel>
          <Input
            id="title"
            // value={this.state.weight}
            // onChange={this.handleChange("title")}
          />
        </FormControl>

        <FormControl fullWidth>
          <InputLabel>Info</InputLabel>
          <Input
            id="info"
            // value={this.state.weight}
            multiline
            rows={6}
            // onChange={this.handleChange("info")}
          />
        </FormControl>

        <Button
          variant="contained"
          // onClick={onClick(this.state)}
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