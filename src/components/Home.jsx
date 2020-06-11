import React, { useEffect, useRef } from "react";

import { gsap } from "gsap";

function Home() {
  let home = useRef(null);
  let contentHome = useRef(null);

  useEffect(() => {
    gsap.from(home, {
      duration: 0,
      css: {
        display: "block",
      },
    });
    gsap.from(contentHome, {
      duration: 3,
      y: 100,
      opacity: 0,
      ease: "power4.inOut",
    });
  });
  return (
    <div className="container">
      <div className="home-page" ref={(el) => (home = el)}>
        <div className="inner-home-page" ref={(el) => (contentHome = el)}>
          <div className="titulo">
            <h2>Code, Eat, Sleep & Repeat</h2>
          </div>
          <div className="titles">
            <div className="inner-titles">
              <span>FrontEnd Developer</span>
              <span>BackEnd Developer</span>
              <span>Web Dev</span>
              <span>UI Designer</span>
            </div>
          </div>
          <div className="description">
            <div className="inner-description">
              <p>
                Soy Jesus, Ingeniero en Sistemas Computacionales y actualmente
                Desarrollador Web.
              </p>
              <p>Me encantan las tecnologías web:</p>
              <p>
                <code>
                  React, Node JS, JavaScript, Mongo DB, Firebase, CMS, Headless
                  CMS, Graphql
                </code>
              </p>
              <p>
                Esto es solo una pequeña muestra de mi trabajo. Próximamente más
                proyectos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
