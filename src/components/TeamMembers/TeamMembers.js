import React from "react";
import "../../styles/components/TeamMembers.css";

const teamMembers = props => {
  const link = `mailto: ${props.email}`;
  return (
    <div className="Member">
      <img src={props.image} alt="Portrait" />
      <h5>{props.name}</h5>
      <p className="MemberInfo">
        <p>Tel: {props.phone}</p>
        <a href={link} className="Email">
          <strong>{props.email}</strong>
        </a>
      </p>
    </div>
  );
};

export default teamMembers;
