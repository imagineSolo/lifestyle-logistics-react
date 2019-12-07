import React from "react";
import { Link } from "react-router-dom";
import "../styles/pages/ContactPage.css";

const ContactPage = props => {
  return (
    <div>
      <h2>ContactPage</h2>
      <div className="Contact">
        <div className="Jobs">
          <Link to={props.match.url + "jobs"}>Współpraca</Link>
        </div>
        <div className="Team">
          <Link to={props.match.url + "team"}>Zespół</Link>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
