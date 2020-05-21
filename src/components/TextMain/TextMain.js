import React from "react";
import "./TextMain.css";

const TextMain = ({ isDisplayDescription, text }) => (
  <div className="wrapper-textMain">
    <div className="text-tittle">
      <h1>Instagram</h1>
    </div>
    <div
      className="wrapper-description-textMain"
      style={{ display: isDisplayDescription ? "block" : "none" }}
    >
      <p className="description-textMain">{text}</p>
    </div>
  </div>
);

export default TextMain;
