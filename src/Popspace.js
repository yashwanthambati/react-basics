import React from "react";
import "./Popspace.css";
import { Link } from "react-router-dom";

function Popspace(props) {
  const { image, name, address, hours, id } = props;
  return (
    <div className="Popspace">
      <h1><Link to={`/details/${id}`}>
      {name}
    </Link></h1>

      <Link to={`/details/${id}`}>
        <img
          src={`${process.env.PUBLIC_URL}images/${image}`}
          width="300"
          height="300"
          alt="Hello"
        />
      </Link>
      <div className="hours">{hours}</div>

      <div>{address}</div>
    </div>
  );
}

export default Popspace;
