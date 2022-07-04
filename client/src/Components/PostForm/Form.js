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
          // value={""}
          onChange={(event) => props.handler(event)}
        />
        <br />
        <label>Author: </label>
        <input
          name="author"
          type="text"
          // value={""}
          onChange={(event) => props.handler(event)}
        />
        <br />
        <label>Page Count: </label>
        <input
          name="pageCount"
          type="number"
          // value={-1}
          onChange={(event) => props.handler(event)}
        />
        <br />
        <label>ISBN: </label>
        <input
          name="isbn"
          type="text"
          // value={""}
          onChange={(event) => props.handler(event)}
        />
        <br />
        <label>Owner ID: </label>
        <input
          name="ownerId"
          type="text"
          // value={""}
          onChange={(event) => props.handler(event)}
        />
      </form>
    </div>
  );
};

export default Form;
