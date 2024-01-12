import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./css/App.scss";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        {/* <Route exact path="/blog" component={Blog} /> */}
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
