import React, { useEffect, useState } from "react";

const Catalogue = () => {
  const [books, setBooks] = useState({
    array: [],
  });

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch("/api", requestOptions)
      .then((response) => response.json())
      .then((data) => setBooks({ array: data }));
    console.log(books);
  }, []);

  return (
    <div>
      <h1>Catalogue</h1>
      {console.log(books)}
      {books.array.map(function (book, i) {
        return <h4>{book.title}</h4>;
      })}
    </div>
  );
};

export default Catalogue;
