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
      {/* <UserRegister /> */}
      <div className="wrapper-containerMain wrapper-container-l">
        <Span />
      </div>
      <div className="wrapper-containerMain wrapper-container-r">
        <div className="wrapper-userLogin-top ">
          <TextMain isDisplayDescription={false} text={""} />
          <LoginForm className="loginForm" />
        </div>
        <div className="wrapper-little-container ">
          ¿No tienes una cuenta?
          <a href="algo" className="ml-1 links">
            Registrate
          </a>
        </div>
        <div className="wrapper-little-container column">
          <div className="wrapper-download">Descarga App</div>
          <div className="wrapper-buttonApp">
            <DownloadButton
              link="https://apps.apple.com/us/app/instagram/id389801252"
              img={imgAppStore}
              information="Descárgalo en"
              app={"App Store"}
            />
            <DownloadButton
              link="https://play.google.com/store/apps/details?id=com.instagram.android&hl=en"
              img={imgPlayStore}
              information="DISPONIBLE EN"
              app={"Google Pay"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
