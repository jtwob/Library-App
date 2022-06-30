import React, { useState } from "react";
import Form from "./../Components/PostForm/Form";

const Home = () => {
  const [bookState, setBookState] = useState({
    title: "",
    author: "",
    pageCount: -1,
    isbn: "",
    ownerId: "",
  });

  const handleInputChange = (value) => {
    setBookState(value);
  };
  return (
    <div>
      <h1>Library-App</h1>
      <Form state={handleInputChange} />
    </div>
  );
};

export default Home;
