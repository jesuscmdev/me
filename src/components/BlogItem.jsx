import React from "react";
import { Link } from "react-router-dom";

function BlogItem(props) {
  return (
    <div>
      <div className="imagen-cover">
        <img src={props.blog.cover.url} alt="" />
      </div>
      <div className="body-blog">
        <div className="titulo-blog">
          <h4>{props.blog.titulo}</h4>
        </div>
        <div className="sinopsis">
          <p>{props.blog.sinopsis}</p>
        </div>
      </div>
      <div className="footer-blog">
        <div className="inner-footer-blog">
          <div className="data-footer">
            <div className="autor">
              <span>
                <b>Wrote by </b>
              </span>
              <span> {props.blog.autor} </span>
            </div>
            <div className="fecha-blog">
              <span>{props.blog.fecha}</span>
            </div>
          </div>
          <div className="link-footer">
            <Link to="/">Leer</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
