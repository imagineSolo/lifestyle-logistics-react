import React, { Component } from "react";

import Hamburger from "../../components/Hamburger/Hamburger";
import SideNav from "../../components/SideNav/SideNav";
import Aux from "../Auxiliary";

class Layout extends Component {
  state = {
    showSideNav: false
  };

  sideNavClosedHandler = () => {
    this.setState({ showSideNav: false });
  };

  sideNavToggleHandler = () => {
    this.setState(prevState => {
      return { showSideNav: !prevState.showSideNav };
    });
  };

  render() {
    return (
      <Aux>
        <Hamburger
          drawerToggleClicked={this.sideNavToggleHandler}
          open={this.state.showSideNav}
        />
        <SideNav
          open={this.state.showSideNav}
          closed={this.sideNavClosedHandler}
        />
        <main>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
