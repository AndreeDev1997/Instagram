import React from "react";
import "./TextMain.css";

const TextMain = ({ isDisplayDescription, text }) => (
  <div className="wr-txtM">
    <div className="txtLt-txtM">
      <h1>Instagram</h1>
    </div>
    <div
      className="wrDp-txtM"
      style={{ display: isDisplayDescription ? "block" : "none" }}
    >
      <p className="dp-txtM">{text}</p>
    </div>
  </div>
);

export default TextMain;
