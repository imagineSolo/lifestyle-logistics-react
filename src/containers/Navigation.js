import React from "react";
import "../styles/Navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const navList = [
    { name: "Strona główna", path: "/", exact: true, sublinks: false },
    { name: "O firmie", path: "/about", sublinks: false },
    {
      name: "Usługi",
      path: "/activity",
      sublinks: [
        { name: "Transport", path: "/activity/transport" },
        { name: "Spedycja", path: "/activity/spedition" },
        { name: "Logistyka", path: "/activity/logistics" },
        { name: "Magazynowanie", path: "/activity/warehousing" }
      ]
    },
    {
      name: "Kontakt",
      path: "/contact",
      sublinks: [
        { name: "Oferty pracy", path: "/contact/job" },
        { name: "Skontaktuj się", path: "/contact" }
      ]
    }
  ];

  const navMenu = navList.map(item => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>
        {item.name}
      </NavLink>
    </li>
  ));
  return <ul>{navMenu}</ul>;
};

export default Navigation;
