import React from "react";

const Submit = (props) => {
  return (
    <div>
      <button onClick={() => props.action()}>Submit</button>
    </div>
  );
};

export default Submit;
