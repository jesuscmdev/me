import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
const client = new ApolloClient({
  uri: "https://api-us-west-2.graphcms.com/v2/ck8jq6wi11qrt01xv37cb6w9s/master",
});
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
