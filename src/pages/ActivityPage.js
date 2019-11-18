import React from "react";
import "../styles/pages/ActivityPage.css";

const ActivityPage = () => {
  return (
    <div>
      <h2>Usługi</h2>
      <div className="activity">
        <div className="transport">
          <span>Transport</span>
        </div>
        <div className="spedition">
          <span>Spedycja</span>
        </div>
        <div className="logistics">
          <span>Logistyka</span>
        </div>
        <div className="warehousing">
          <span>Magazynowanie</span>
        </div>
      </div>
    </div>
  );
};

export default ActivityPage;
