import React from "react";
import Auxiliary from "../hoc/Auxiliary";
import "../styles/Header.css";

const Header = () => {
  return (
    <Auxiliary>
      <div className="Logo">
        <span className="LogoBox">
          <span className="Line"></span>
        </span>
      </div>
      <h1>LIFESTYLE LOGISTICS</h1>
    </Auxiliary>
  );
};

export default Header;
