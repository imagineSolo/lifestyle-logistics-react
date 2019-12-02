import React from "react";

const teamMembers = props => {
  return (
    <div>
      <div>
        <img src={props.image} alt="Portrait" />
        <h5>{props.name}</h5>
        <p>
          <span>CEO</span>
          <span>{props.phone}</span>
          <span>{props.email}</span>
        </p>
      </div>
      {/* <div>
        <img src={props.image} alt="Portrait" />
        <h5>{props.name}</h5>
        <p>
          <span>Manager</span>
          <span>{props.phone}</span>
          <span>{props.email}</span>
        </p>
      </div>
      <div>
        <img src={props.image} alt="Portrait" />
        <h5>{props.name}</h5>
        <p>
          <span>Sales Director</span>
          <span>{props.phone}</span>
          <span>{props.email}</span>
        </p>
      </div>
      <div>
        <img src={props.image} alt="Portrait" />
        <h5>{props.name}</h5>
        <p>
          <span>Forwarder</span>
          <span>{props.phone}</span>
          <span>{props.email}</span>
        </p>
      </div> */}
    </div>
  );
};

export default teamMembers;
