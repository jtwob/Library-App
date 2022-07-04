import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/catalogue">
        My Books
      </a>
      <br />
      <a href="/home">New Book</a>
    </nav>
  );
}

export default Nav;
