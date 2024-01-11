import React from "react";

function Contact() {
  return (
    <div className="container">
      <div className="contact-section">
        <h2>Contacto</h2>
        <p>
          Escríbeme por correo:
          <br />
          ¡Hagamos algo cool!
        </p>
        <p>
          <code>g.zuscm@gmail.com</code>
          <br />
          <code>dev.jcortesm@gmail.com</code>
        </p>
        <p>
          Te dejo mi WA {";)"}
          <br />
          <a
            href="https://wa.me/5212227150708"
            target="_blank"
            rel="noopener noreferrer">
            ¿Chateamos?
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
