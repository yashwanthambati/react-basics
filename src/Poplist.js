import React from "react";
import Popspace from "./Popspace";
import "./Poplist.css";
import data from "./sfpopos-data.json";

function Poplist() {
  const spaces = data.map((obj,i) => {
    const { images, title, address,hours } = obj;
    return (<Popspace id={i} key={title} name={title} address={address} image={images[0]} hours={hours} />)
  });
  return <div className="Poplist">{spaces}</div>;
}

export default Poplist;
