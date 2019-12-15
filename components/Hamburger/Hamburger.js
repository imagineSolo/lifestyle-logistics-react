import React from "react";
import "../../styles/components/Hamburger.css";

const hamburger = props => {
  let classList = ["Hamburger"];
  if (props.open) {
    classList = ["Hamburger", "HamburgerActive"];
  }
  return (
    <button className={classList.join(" ")} onClick={props.drawerToggleClicked}>
      <span className="HamburgerBox">
        <span className="HamburgerInner"></span>
      </span>
    </button>
  );
};

export default hamburger;
