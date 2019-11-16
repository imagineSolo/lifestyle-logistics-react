import React from "react";
import "../styles/Navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const navList = [
    { name: "Strona główna", path: "/", exact: true },
    { name: "O firmie", path: "/about" },
    { name: "Usługi", path: "/activity" },
    { name: "Kontakt", path: "/contact" }
  ];

  const navMenu = navList.map(item => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>
        {item.name}
      </NavLink>
    </li>
  ));
  // const socialMedia = socialMediaList.map(item => (
  //   <li key={item.name}>
  //     <Link to={item.path}>{item.name}</Link>
  //   </li>
  // ));
  return <ul>{navMenu}</ul>;
};

export default Navigation;

// const socialMediaList = [
//   { name: "Facebook", path: "hhtp://www.facebook.com" },
//   { name: "LinkedIn", path: "hhtp://www.linkedin.com" }
// ];
