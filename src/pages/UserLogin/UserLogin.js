import React from "react";

import LoginForm from "../../components/LoginForm/LoginForm";
import TextMain from "../../components/TextMain/TextMain";
import DownloadButton from "../../components/DownloadButton/DownloadButton";
import imgAppStore from "../../assets/img/appStore.png";
import imgPlayStore from "../../assets/img/playStore.png";
import "./UserLogin.css";
import Span from "../../components/Span/Span";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import UserRegister from "../UserRegister/UserRegister";

const UserLogin = () => {
  return (
    <div className="main-wrapper">
      <UserRegister />
    </div>
  );
};

export default UserLogin;
