import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ActivityPage from "../pages/ActivityPage";
import ContactPage from "../pages/ContactPage";
import ErrorPage from "../pages/ErrorPage";
import Transport from "../pages/Activity/Transport";
import Spedition from "../pages/Activity/Spedition";
import Logistics from "../pages/Activity/Logistics";
import Warehousing from "../pages/Activity/Warehousing";
import Jobs from "../pages/Contact/Jobs";
import Team from "../pages/Contact/Team";

const Content = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/lifestyle-logistics-react/" component={HomePage}></Route>
        <Route path="/about" component={AboutPage}></Route>
        <Route path="/activity" exact component={ActivityPage}></Route>
        <Route path="/contact" exact component={ContactPage}></Route>
        <Route path="/activity/transport" component={Transport}></Route>
        <Route path="/activity/spedition" component={Spedition}></Route>
        <Route path="/activity/logistics" component={Logistics}></Route>
        <Route path="/activity/warehousing" component={Warehousing}></Route>
        <Route path="/contact/jobs" component={Jobs}></Route>
        <Route path="/contact/team" component={Team}></Route>
        <Route component={ErrorPage}></Route>
      </Switch>
    </>
  );
};

export default Content;
