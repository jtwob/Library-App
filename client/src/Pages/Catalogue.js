import React, { useEffect, useState } from "react";
import BookCard from "../Components/BookCard/BookCard";
import Row from "react-bootstrap/Row";

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
    <div
      style={
        {
          // padding: "35px",
          // display: "flex",
          // justifyContent: "space-between",
        }
      }
    >
      <h1 style={{ textAlign: "center" }}>Catalogue</h1>
      {console.log(books)}
      <div
        // className="g-4"
        style={{
          backgroundColor: "cyan",
          padding: "35px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Row xs={2} md={3}>
          {books.array.map(function (book, i) {
            return (
              // <h4>{book.title}</h4>;
              <BookCard
                title={book.title}
                author={book.author}
                pageCount={book.pageCount}
                completed={book.completed}
              />
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Catalogue;
