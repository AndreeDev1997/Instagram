import React, { useState } from "react";
import DownloadButton from "../../components/DownloadButton/DownloadButton";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import appStore from "../../assets/img/appStore.png";
import playStore from "../../assets/img/playStore.png";
import TextMain from "../../components/TextMain/TextMain";
import "./UserRegister.css";

const UserRegister = () => {
  const [form, setForm] = useState({
    name: "",
    username: "",
    account: "",
    password: "",
  });

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost/instagramPHP/operation/userRegister.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((resp) => {
        if (resp.status === 201) {
          setForm({
            name: "",
            username: "",
            account: "",
            password: "",
          });
          alert("Se registró correctamente.");
        }
      })
      .catch((error) => console.log(error));
  };
  //wrLtC - uLg;
  return (
    <div className="wrM-uRg">
      <div className="wrMC-uRg">
        <div className="wrT-uRg wrCR-uRg">
          <TextMain
            isDisplayDescription={true}
            text="Regístrate para ver fotos y videos de tus amigos."
          />
          <RegisterForm
            onChange={handleChange}
            onSubmit={handleSubmit}
            form={form}
          />
        </div>

        <div className="wrLtC-uRg">
          ¿Tienes una cuenta?
          <a href="cuenta" className="ml-1 links-Ur">
            Inicia sesión
          </a>
        </div>
        <div className="wrLtC-uRg column-uRg">
          <div className="wrDw-uRg">Descarga la aplicación.</div>

          <div className="wrBtnApp-uRg">
            <DownloadButton
              link="https://apps.apple.com/us/app/instagram/id389801252"
              img={appStore}
              information={"Descargate en el"}
              app={"App Store"}
            />
            <DownloadButton
              link="https://play.google.com/store/apps/details?id=com.instagram.android&hl=en"
              img={playStore}
              information={"DISPONIBLE EN"}
              app={"Google Play"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
