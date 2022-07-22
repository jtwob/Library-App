import React from "react";
import Card from "react-bootstrap/Card";

const BookCard = (props) => {
  return (
    <Card style={{ width: "18rem", marginRight: "25px" }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.author}
        </Card.Subtitle>
        <Card.Text>No. of Pages: {props.pageCount}</Card.Text>
        <Card.Text>Completed: {props.completed ? "True" : "False"}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BookCard;
