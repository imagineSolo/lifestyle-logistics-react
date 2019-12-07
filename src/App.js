import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import Header from "./containers/Header";
import Content from "./containers/Content";
import Menu from "./containers/Menu/Menu";
import Footer from "./containers/Footer";

import "./styles/App.css";
import "./styles/Content.css";

function App() {
  return (
    <Router>
      <Layout>
        <div className="App">
          {<Header />}
          {<Menu />}
          <section className="section">{<Content />}</section>
          {<Footer />}
        </div>
      </Layout>
    </Router>
  );
}

export default App;
