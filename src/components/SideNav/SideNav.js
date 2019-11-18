import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/components/SideNav.css";

const sideNav = props => {
  let classList = ["Navigation"];
  if (props.open) {
    classList = ["Navigation", "NavigationActive"];
  }

  const navList = [
    { name: "Strona główna", path: "/", exact: true },
    { name: "O firmie", path: "/about" },
    { name: "Usługi", path: "/activity" },
    { name: "Kontakt", path: "/contact" }
  ];

  const navMenu = navList.map(item => (
    <li key={item.name} className={"NavigationItem"}>
      <NavLink
        to={item.path}
        className={"Link"}
        exact={item.exact ? item.exact : false}
        onClick={props.closed}
      >
        {item.name}
      </NavLink>
    </li>
  ));

  return (
    <div className={classList.join(" ")}>
      <ul className={"NavigationList"}>{navMenu}</ul>
    </div>
  );
};

export default sideNav;
