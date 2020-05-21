import React from "react";
import "./DownloadButton.css";

const DownloadButton = ({ img, information, app }) => (
  <div className="content">
    <div className="wrapper-img">
      <img className="img-logo" src={img} alt="text-instagram" />
    </div>
    <div className="wrapper-info">
      <div className="text-information">{information}</div>
      <div className="text-app">{app}</div>
    </div>
  </div>
);

export default DownloadButton;
