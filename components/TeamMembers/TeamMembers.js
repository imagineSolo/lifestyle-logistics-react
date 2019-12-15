import React from "react";
import "../../styles/components/TeamMembers.css";

const teamMembers = ({ image, name, role, email, phone }) => {
  const link = `mailto: ${email}`;
  return (
    <div className="Member">
      <img src={image} alt="Portrait" className="Picture" />
      <h5>{name}</h5>
      <div className="MemberInfo">
        <p className="Role">{role}</p>
        <p>Tel: {phone}</p>
        <a href={link} className="Email">
          <strong>{email}</strong>
        </a>
      </div>
    </div>
  );
};

export default teamMembers;
