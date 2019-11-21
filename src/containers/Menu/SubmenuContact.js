import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Auxiliary from "../../hoc/Auxiliary";

import "./Menu.css";

class SubmenuActivity extends Component {
  render() {
    return (
      <Auxiliary>
        <ul className="nav__submenu">
          <li className="nav__submenu-item ">
            <NavLink to="/contact/jobs">Współpraca</NavLink>
          </li>
          <li className="nav__submenu-item ">
            <NavLink to="/contact/team">Zespół</NavLink>
          </li>
        </ul>
      </Auxiliary>
    );
  }
}

export default SubmenuActivity;
