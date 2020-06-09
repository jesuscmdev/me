import React from "react";

function BlogItem(props) {
  return (
    <div>
      <span>{props.blog.titulo}</span>
    </div>
  );
}

export default BlogItem;
