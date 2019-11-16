import React from "react";
import "../../styles/components/Hamburger.css";

const hamburger = props => {
  let classList = ["Hamburger"];
  if (props.open) {
    classList = ["Hamburger", "HamburgerActive"];
  }
  return (
    <button class={classList.join(" ")} onClick={props.drawerToggleClicked}>
      <span class="HamburgerBox">
        <span class="HamburgerInner"></span>
      </span>
    </button>
  );
};

export default hamburger;
