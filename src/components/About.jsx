import React from "react";

function About() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="about">
          <div className="titulo">
            <h2>Sobre mi</h2>
          </div>
          <div className="bio">
            <p>
              Soy Jesus Cortes Morales, Desarrollador Web.
              <br />
              Me encanta codear y tengo la fortuna de hacer esto como mi
              trabajo.
            </p>
            <p>
              Actualmente trabajo para THK Marketing, principalmente
              desarrollando sitios web. Tengo una gran pasión por <b>React</b> y
              <b> JavaScript</b> pero también trabajo con PHP y WordPress.
            </p>
            <p>
              Mi objetivo con esta web es documentar y compartir todo lo que
              aprenda a lo largo de mi carrera, para orientar a desarrolladores
              que como yo en su momento se encuentran con dudas y errores al
              programar
            </p>
            <p>
              Cuando no estoy codeando estoy jugando LOL, escuchando música,
              estudiando o leyendo sobre nuevas tecnologías.
            </p>
          </div>
          <div className="vertical-text">
            <p>"Code, Eat, Sleep & Repeat"</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
