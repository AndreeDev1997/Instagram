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
    <div className="wrM-uLg">
      <div className="wrMC-uLg wrCL-uLg">
        <Span />
      </div>
      <div className="wrMC-uLg wrCR-uLg">
        <div className="wrT-uLg">
          <TextMain isDisplayDescription={false} text={""} />
          <LoginForm />
        </div>
        <div className="wrLtC-uLg ">
          ¿No tienes una cuenta?
          <a href="algo" className="ml-1 link-uLg">
            Registrate
          </a>
        </div>
        <div className="wrLtC-uLg column-uLg">
          <div className="wrDw-uLg">Descarga App</div>
          <div className="wrBtnApp-uLg">
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
