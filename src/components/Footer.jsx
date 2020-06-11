import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Footer() {
  let footer = useRef(null);
  useEffect(() => {
    gsap.from(footer, {
      duration: 3,
      opacity: 0,
      y: 30,
      ease: "power4.inOut",
    });
  });
  return (
    <div className="footer" ref={(el) => (footer = el)}>
      <div className="container">
        <div className="footer-inner">
          <div className="make-with-love">
            <span>Make with </span>
            <span role="img" aria-label="heart suit">
              ♥{" "}
            </span>
            <span>by jesuscm</span>
          </div>
          <div className="social-links">
            <a
              href="https://instagram.com/jesuscmdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Instagram</span>
            </a>
            <a
              href="https://github.com/jesuscmdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Github</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
