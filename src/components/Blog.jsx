import React, { Component } from "react";
import { Query } from "react-apollo";
import BLOGS_QUERY from "./blogs/query";
import BlogI from "./BlogItem";

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.sate = {
      blog: [],
    };
  }
  render() {
    return (
      <Query query={BLOGS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Cargando</div>;
          if (error) return <div>Error al cargar los blogs</div>;
          const blogs = data.blogs;
          return (
            <div className="blog-page">
              <div className="container">
                <div className="titulo-blog-page">
                  <div className="inner-titulo">
                    <h2>Échale un ojo, algún post puede ayudarte</h2>
                  </div>
                </div>
                <div className="blog-item-container">
                  {blogs.map((blog) => (
                    <div className="blog" key={blog.id}>
                      <BlogI blog={blog} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}
