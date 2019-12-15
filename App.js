import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import Header from "./containers/Header";
import Content from "./containers/Content";
import Menu from "./containers/Menu/Menu";
import Footer from "./containers/Footer";

import "./styles/App.css";

function App() {
  return (
    <Router>
      <Layout>
        <div className="App">
          {<Header />}
          {<Menu />}
          <section className="Section">{<Content />}</section>
          {<Footer />}
        </div>
      </Layout>
    </Router>
  );
}

export default App;
