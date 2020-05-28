import React from "react";
import "./DownloadButton.css";

const DownloadButton = ({ link, img, information, app }) => (
  <a
    href={link}
    className="cnt-dwBtn"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="wrImg-dwBtn">
      <img className="imgLg-dwBtn ck-dwBtn" src={img} alt="text-instagram" />
    </div>
    <div className="wrInfo-dwBtn">
      <div className="txtInfo-dwBtn">{information}</div>
      <div className="txtApp-dwBtn">{app}</div>
    </div>
  </a>
);

export default DownloadButton;
