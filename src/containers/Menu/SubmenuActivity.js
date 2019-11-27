import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Auxiliary from "../../hoc/Auxiliary";

import "../../styles/components/Menu.css";

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
      </Auxiliary>
    );
  }
}

export default SubmenuActivity;
