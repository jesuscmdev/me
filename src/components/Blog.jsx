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
            <div className="section blog-page">
              <div className="container">
                <div className="blog-item-container">
                  {blogs.map((blog) => (
                    <div className="column is-one-third" key={blog.id}>
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