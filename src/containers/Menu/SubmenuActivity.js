import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Auxiliary from "../../hoc/Auxiliary";
import { Route } from "react-router-dom";
import "./Menu.css";

class SubmenuActivity extends Component {
  render() {
    return (
      <Auxiliary>
        <ul className="nav__submenu">
          <li className="nav__submenu-item ">
            <NavLink to="/activity/transport">Transport</NavLink>
          </li>
          <li className="nav__submenu-item ">
            <NavLink to="/activity/spedition">Spedycja</NavLink>
          </li>
          <li className="nav__submenu-item ">
            <NavLink to="/activity/logistics">Logistyka</NavLink>
          </li>
          <li className="nav__submenu-item ">
            <NavLink to="/activity/warehousing">Magazynowanie</NavLink>
          </li>
        </ul>
        <Route path="/activity/transport" exact component={Transport}></Route>
        <Route path="/activity/spedition" exact component={Spedition}></Route>
        <Route path="/activity/logistics" exact component={Logistics}></Route>
        <Route
          path="/activity/warehousing"
          exact
          component={Warehousing}
        ></Route>
      </Auxiliary>
    );
  }
}

export default SubmenuActivity;
