import React from "react";
import { Link } from "react-router-dom";

import "../styles/pages/ActivityPage.css";

const ActivityPage = props => {
  return (
    <div>
      <h2>Usługi</h2>
      <div className="activity">
        <div className="transport">
          <Link to={props.match.url + "transport"}>Transport</Link>
        </div>
        <div className="spedition">
          <Link to={props.match.url + "spedition"}>Spedycja</Link>
        </div>
        <div className="logistics">
          <Link to={props.match.url + "logistics"}>Logistyka</Link>
        </div>
        <div className="warehousing">
          <Link to={props.match.url + "warehousing"}>Magazynowanie</Link>
        </div>
      </div>
    </div>
  );
};

export default ActivityPage;
