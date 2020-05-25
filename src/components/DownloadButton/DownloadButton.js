import React from "react";
import "./DownloadButton.css";

const DownloadButton = ({ link, img, information, app }) => (
  <a href={link} className="content" target="_blank" >
    <div className="wrapper-img">
      <img className="img-logo click" src={img} alt="text-instagram" />
    </div>
    <div className="wrapper-info">
      <div className="text-information">{information}</div>
      <div className="text-app">{app}</div>
    </div>
  </a>
);

export default DownloadButton;
