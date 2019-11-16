import React from "react";
import "../styles/pages/ActivityPage.css";

const ActivityPage = () => {
  return (
    <div>
      <h2>Usługi</h2>
      <div className="activity">
        <div className="transport">Transport</div>
        <div className="spedition">Spedycja</div>
        <div className="logistics">Logistyka</div>
        <div className="warehousing">Magazynowanie</div>
      </div>
    </div>
  );
};

export default ActivityPage;
