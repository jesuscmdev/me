import gql from "graphql-tag";

const BLOGS_QUERY = gql`
  query {
    blogs {
      id
      titulo
      sinopsis
      fecha
      contenido {
        text
        markdown
      }
      autor
      cover {
        id
        fileName
        url
      }
    }
  }
`;
export default BLOGS_QUERY;
