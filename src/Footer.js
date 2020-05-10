import React from "react";
import "./Footer.css";

function Footer() {
  let year = new Date();
  return (
    <div className="footer">
      <h2>Yashwanth   <span>{year.getFullYear()}</span></h2>
     
    </div>
  );
}

export default Footer;
