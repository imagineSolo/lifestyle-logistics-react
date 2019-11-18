import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import Header from "./containers/Header";
import Content from "./containers/Content";
import Navigation from "./containers/Navigation";
import Footer from "./containers/Footer";

import "./styles/App.css";
import "./styles/Header.css";
import "./styles/Navigation.css";
import "./styles/Content.css";

function App() {
  return (
    <Router>
      <Layout>
        <div className="App">
          <header className="header">{<Header />}</header>
          <nav className="menu">{<Navigation />}</nav>
          <section className="section">{<Content />}</section>
          <footer>{<Footer />}</footer>
        </div>
      </Layout>
    </Router>
  );
}

export default App;
