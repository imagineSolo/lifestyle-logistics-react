import React from "react";
import { Link } from "react-router-dom";

import "../styles/pages/ActivityPage.css";

const ActivityPage = props => {
  return (
    <div>
      <h2>Usługi</h2>
      <div className="Activity">
        <Link to={props.match.url + "transport"} className="Transport">
          Transport
        </Link>

        <Link to={props.match.url + "spedition"} className="Spedition">
          Spedycja
        </Link>

        <Link to={props.match.url + "logistics"} className="Logistics">
          Logistyka
        </Link>

        <Link to={props.match.url + "warehousing"} className="Warehousing">
          Magazynowanie
        </Link>
      </div>
    </div>
  );
};

export default ActivityPage;
