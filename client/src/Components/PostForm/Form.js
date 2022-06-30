import React from "react";
import Style from "./Form.css";

const Form = (props) => {
  return (
    <div>
      <form>
        <label>Title: </label>
        <input
          name="title"
          type="text"
          //   value={this.state.title}
          //   onChange={props.state(value)}
        />
        <br />
        <label>Author: </label>
        <input
          name="author"
          type="text"
          // value={this.state.title}
          // onChange={this.handleInputChange}
        />
        <br />
        <label>Page Count: </label>
        <input
          name="pageCount"
          type="number"
          // value={this.state.title}
          // onChange={this.handleInputChange}
        />
        <br />
        <label>ISBN: </label>
        <input
          name="isbn"
          type="text"
          // value={this.state.title}
          // onChange={this.handleInputChange}
        />
        <br />
        <label>Owner ID: </label>
        <input
          name="ownerId"
          type="text"
          // value={this.state.title}
          // onChange={this.handleInputChange}
        />
      </form>
    </div>
  );
};

export default Form;
