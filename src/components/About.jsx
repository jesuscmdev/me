import React, { useRef, useEffect } from "react";
import gsap from "gsap";
function About() {
  let titulo = useRef(null);
  let bio = useRef(null);
  let vtext = useRef(null);
  useEffect(() => {
    gsap.from(titulo, {
      duration: 2,
      x: -30,
      opacity: 0,
      ease: "power3.inOut",
    });
    gsap.from(bio, {
      duration: 2,
      x: -30,
      opacity: 0,
      ease: "power3.inOut",
      delay: 1,
    });
    gsap.from(vtext, {
      duration: 1,
      x: 30,
      opacity: 0,
      ease: "power4.in",
      delay: 2,
    });
  });
  return (
    <div className="container">
      <div className="about-section">
        <div className="about">
          <div className="titulo" ref={(el) => (titulo = el)}>
            <h2>Sobre mi</h2>
          </div>
          <div className="bio" ref={(el) => (bio = el)}>
            <p>
              Soy Jesus Cortes Morales, Desarrollador Web.
              <br />
              Me encanta codear y tengo la fortuna de hacer esto como mi
              trabajo.
            </p>
            <p>
              Actualmente trabajo para{" "}
              <a
                href="https://thkmarketing.mx"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                THK Marketing
              </a>
              , principalmente desarrollando sitios web. Tengo una gran pasión
              por <b>React</b> y<b> JavaScript</b> pero también trabajo con PHP,
              WordPress y otras tecnologías.
            </p>
            <p>
              Mi objetivo con esta web es documentar y compartir todo lo que
              aprenda a lo largo de mi carrera, para orientar a desarrolladores
              que como yo en su momento se encuentran con dudas y errores al
              programar
            </p>
            <p>
              Cuando no estoy codeando estoy jugando #LOL, escuchando música,
              estudiando o leyendo sobre nuevas tecnologías.
            </p>
          </div>
          <div className="vertical-text" ref={(el) => (vtext = el)}>
            <p>"Code, Eat, Sleep & Repeat"</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
