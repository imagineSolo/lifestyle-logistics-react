import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { CSSTransitionGroup } from "react-transition-group";
import SubmenuActivity from "./SubmenuActivity";
import SubmenuContact from "./SubmenuContact";
import SocialMedia from "./SocialMedia";

import "../../styles/containers/Menu.css";

class Menu extends Component {
  state = {
    showAboutMenu: false
  };

  handleHover = () => {
    this.setState({ showAboutMenu: true });
  };

  handleLeave = () => {
    this.setState({ showAboutMenu: false });
  };

  render() {
    return (
      <nav className="nav">
        <ul className="nav__menu">
          <li className="nav__menu-item">
            <NavLink to="/">Strona główna</NavLink>
          </li>
          <li className="nav__menu-item">
            <NavLink to="/about">O firmie</NavLink>
          </li>
          <li className="nav__menu-item" onMouseLeave={this.handleLeave}>
            <NavLink to="/activity/" onMouseEnter={this.handleHover}>
              Usługi
            </NavLink>
            <div className="submenu-container submenu-activity">
              <CSSTransitionGroup
                transitionName="slide"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
              >
                {this.state.showAboutMenu && <SubmenuActivity />}
              </CSSTransitionGroup>
            </div>
          </li>
          <li className="nav__menu-item" onMouseLeave={this.handleLeave}>
            <NavLink to="/contact/" onMouseEnter={this.handleHover}>
              Kontakt
            </NavLink>
            <div className="submenu-container submenu-contact">
              <CSSTransitionGroup
                transitionName="slide"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
              >
                {this.state.showAboutMenu && <SubmenuContact />}
              </CSSTransitionGroup>
            </div>
          </li>
        </ul>
        <SocialMedia />
      </nav>
    );
  }
}

export default Menu;
