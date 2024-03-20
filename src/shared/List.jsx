import React from "react";
import { Link } from "react-router-dom";

function List() {
  return (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/allflowers">Flowers</Link>
      </li>
      <li>
        <a href="#CallMe">Contact</a>
      </li>
    </>
  );
}

export default List;
