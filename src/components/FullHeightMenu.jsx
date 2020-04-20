import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import hacking from "../images/hacks.webp";
import starPuebla from "../images/rueda.webp";

const hobbies = [
  { name: "Hacking Time", image: hacking },
  { name: "Estrella Puebla", image: starPuebla },
];

function FullHeightMenu({ state }) {
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let hobbiesBackground = useRef(null);
  let linkOne = useRef(null);
  let linkTwo = useRef(null);
  let linkThree = useRef(null);
  let infoMenu = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      //cerrar menu
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });
      gsap.to(menu, {
        duration: 1,
        css: {
          display: "none",
        },
      });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Abrir menu
      gsap.to(menu, {
        duration: 0,
        css: {
          display: "block",
        },
      });
      gsap.to([revealMenuBackground, revealMenu], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      staggerReveal(revealMenuBackground, revealMenu);
      fadeInUp(infoMenu);
      staggerLinks(linkOne, linkTwo, linkThree);
    }
  }, [state]);

  // Funciones para animar el menu
  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 0.5,
      height: 0,
      transformOrigin: "right top",
      skewY: 2,
      ease: "power3.inOut",
      stagger: {
        amount: 0.4,
      },
    });
  };
  const staggerLinks = (node1, node2, node3) => {
    gsap.from([node1, node2, node3], {
      duration: 0.8,
      y: 100,
      delay: 0.5,
      ease: "power3.inOut",
      stagger: {
        amount: 0.2,
      },
    });
  };
  const fadeInUp = (node) => {
    gsap.from(node, {
      y: 60,
      duration: 1,
      delay: 0.5,
      opacity: 0,
      ease: "power3.inOut",
    });
  };
  const handleHobbie = (hobbie) => {
    gsap.to(hobbiesBackground, {
      duration: 0,
      background: `url(${hobbie}) center / cover`,
    });
    gsap.to(hobbiesBackground, {
      duration: 0.4,
      opacity: 1,
      ease: "power3.inOut",
    });
    gsap.from(hobbiesBackground, {
      duration: 0.4,
      skewY: 2,
      transformOrigin: "right top",
    });
  };
  const handleHobbieReturn = () => {
    gsap.to(hobbiesBackground, {
      duration: 0.4,
      opacity: 0,
    });
  };
  const handleHover = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: 3,
      skewX: 4,
      ease: "power3.inOut",
    });
  };
  const handleHoverExit = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: -3,
      skewX: 0,
      ease: "power3.inOut",
    });
  };
  return (
    <div className="full-height-menu" ref={(el) => (menu = el)}>
      <div
        className="menu-secondary-background-color"
        ref={(el) => (revealMenuBackground = el)}
      >
        <div className="menu-layer" ref={(el) => (revealMenu = el)}>
          <div
            className="menu-hobbies-background"
            ref={(el) => (hobbiesBackground = el)}
          ></div>
          <div className="container">
            <div className="wrapper">
              <div className="menu-links">
                <nav>
                  <ul>
                    <li>
                      <Link
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                        ref={(el) => (linkOne = el)}
                        to="/about"
                      >
                        About me
                      </Link>
                    </li>
                    <li>
                      <Link
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                        ref={(el) => (linkTwo = el)}
                        to="/blog"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseOut={(e) => handleHoverExit(e)}
                        ref={(el) => (linkThree = el)}
                        to="/contact"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div ref={(el) => (infoMenu = el)} className="menu-info">
                  <h2>This is my personal website</h2>
                  <p>
                    I'm yisus, I'm web developer, I'm in love with web
                    technologies.
                    <br />
                    May be in this text block I'll show you the newest of me.
                  </p>
                </div>
                <div className="hobbies">
                  Hobbies:
                  {hobbies.map((el) => (
                    <span
                      key={el.name}
                      onMouseEnter={() => handleHobbie(el.image)}
                      onMouseOut={handleHobbieReturn}
                    >
                      {el.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullHeightMenu;
