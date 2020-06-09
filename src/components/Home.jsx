import React, { useEffect, useRef } from "react";

import gsap from "gsap";

function Home() {
  let contentHome = useRef(null);
  useEffect(() => {
    gsap.from(contentHome, {
      duration: 3,
      y: 100,
      opacity: 0,
      ease: "power4.inOut",
    });
  });
  return (
    <div className="container" ref={(el) => (contentHome = el)}>
      <div className="home-page">
        <div className="inner-home-page">
          <div className="titulo">
            <h2>Eat, Code, Sleep & Repeat</h2>
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
              <code>
                React, Node JS, JavaScript, Mongo DB, Firebase, CMS, Headless
                CMS, Graphql
              </code>
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
