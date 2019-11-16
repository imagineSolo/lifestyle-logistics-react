import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ActivityPage from "../pages/ActivityPage";
import ContactPage from "../pages/ContactPage";
import ErrorPage from "../pages/ErrorPage";

const Content = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/about" component={AboutPage}></Route>
        <Route path="/activity" component={ActivityPage}></Route>
        <Route path="/contact" component={ContactPage}></Route>
        <Route component={ErrorPage}></Route>
      </Switch>
    </>
  );
};

export default Content;
