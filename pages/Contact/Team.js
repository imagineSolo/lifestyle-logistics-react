import React, { Component } from "react";
import "../../styles/components/Team.css";
import axios from "axios";
import TeamMembers from "../../components/TeamMembers/TeamMembers";

class Team extends Component {
  state = {
    members: []
  };

  componentDidMount() {
    axios.get("https://randomuser.me/api/?nat=dk&results=12").then(response => {
      this.setState({ members: response.data.results });
    });
  }

  render() {
    const teamMembers = this.state.members.map((member, index) => {
      let role = "";
      if (index === 0) {
        role = "CEO";
      } else if (index === 1) {
        role = "Administration";
      } else if (index === 2) {
        role = "Accountance";
      } else if (index === 3) {
        role = "Transport Manager";
      } else if (index === 4) {
        role = "Logistics Manager";
      } else {
        role = "Disponent";
      }
      return (
        <TeamMembers
          key={member.cell}
          role={role}
          image={member.picture.large}
          name={`${member.name.first} ${member.name.last}`}
          phone={member.phone}
          email={member.email}
        />
      );
    });

    return (
      <div>
        <h3 className="Header">Nasz Zespół</h3>
        <div className="Container">{teamMembers}</div>
      </div>
    );
  }
}

export default Team;
