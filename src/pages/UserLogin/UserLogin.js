import React from "react";

import LoginForm from "../../components/LoginForm/LoginForm";
import TextMain from "../../components/TextMain/TextMain";
import DownloadButton from "../../components/DownloadButton/DownloadButton";
import imgAppStore from "../../assets/img/appStore.png";
import imgPlayStore from "../../assets/img/playStore.png";
import "./UserLogin.css";
import Span from "../../components/Span/Span";

const UserLogin = () => {
  return (
    <div className="main-wrapper">
      <div className="wrapper-left">
        <Span />
      </div>

      <div className="wrapper-right">
        <div className="wrapper-userLogin-top">
          <TextMain isDisplayDescription={false} text={""} />
          <LoginForm />
        </div>

        <div className="wrapper-min-box">
          ¿No tienes una cuenta?
          <a href="algo" className="ml-1 links">
            Registrate
          </a>
        </div>
        <div className="wrapper-da">
          <div className="center-block">Descarga App</div>
          <div className="wrapper-buttonApp">
            <DownloadButton
              img={imgAppStore}
              information="Descárgalo en"
              app={"App Store"}
            />
            <DownloadButton
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
