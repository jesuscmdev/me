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
              ¡Hola, soy "Yisus", apasionado por el Desarrollo Web con la
              fortuna. Actualmente, formo parte del equipo de desarrollo en{" "}
              <b>Sparklabs</b>.
            </p>
            <p>
              Mi corazón late fuerte por <b>React</b> (Next JS) y{" "}
              <b>JavaScript</b>, pero también domino el mundo del backend
              utilizando PHP, siendo <b>Laravel</b> mi framework principal, y
              poseo habilidades avanzadas en <b>WordPress</b>.
            </p>
            <p>
              Además de programar, disfruto explorando la infraestructura en la
              nube, con un enfoque especial en <b>AWS</b>. He tenido
              experiencias emocionantes y limitadas con <b>Docker</b>, ¡ que me
              ha fascinado cada momento!
            </p>
            <p>
              Cuando no estoy inmerso en el código, me encontrarás sumergido en
              partidas de #LOL o #Valorant, disfrutando de buena música o
              pedaleando por los cerritos con mi bicicleta.
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
