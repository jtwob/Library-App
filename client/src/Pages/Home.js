import React, { useState } from "react";
import Form from "./../Components/PostForm/Form";
import Submit from "./../Components/SubmitButton/Submit";

const Home = () => {
  const [bookState, setBookState] = useState({
    title: "",
    author: "",
    pageCount: -1,
    isbn: "",
    ownerId: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookState({ ...bookState, [name]: value });
  };

  const postHandler = () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...bookState }),
    };
    fetch("/api", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h1>Library-App</h1>
      <Form handler={handleInputChange} />
      <Submit action={postHandler} />
      <br />
      <h2>{bookState.title}</h2>
    </div>
  );
};

export default Home;
