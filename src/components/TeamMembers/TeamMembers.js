import React from "react";
import "../../styles/components/TeamMembers.css";

const teamMembers = ({ email, image, name, phone }) => {
  const link = `mailto: ${email}`;
  return (
    <div className="Member">
      <img src={image} alt="Portrait" className="Picture" />
      <h5>{name}</h5>
      <p className="MemberInfo">
        <p>Tel: {phone}</p>
        <a href={link} className="Email">
          <strong>{email}</strong>
        </a>
      </p>
    </div>
  );
};

export default teamMembers;
