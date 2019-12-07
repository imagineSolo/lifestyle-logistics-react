import React from "react";
import { Link } from "react-router-dom";

import "../styles/pages/ActivityPage.css";

const ActivityPage = props => {
  return (
    <div>
      <h2>Usługi</h2>
      <div className="activity">
        <Link to={props.match.url + "transport"} className="transport">
          Transport
        </Link>

        <Link to={props.match.url + "spedition"} className="spedition">
          Spedycja
        </Link>

        <Link to={props.match.url + "logistics"} className="logistics">
          Logistyka
        </Link>

        <Link to={props.match.url + "warehousing"} className="warehousing">
          Magazynowanie
        </Link>
      </div>
    </div>
  );
};

export default ActivityPage;
