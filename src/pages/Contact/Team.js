import React, { Component } from "react";
import "../../styles/components/Team.css";
import axios from "axios";
import TeamMembers from "../../components/TeamMembers/TeamMembers";

class Team extends Component {
  state = {
    members: []
  };

  componentDidMount() {
    axios.get("https://randomuser.me/api/?nat=dk&results=10").then(response => {
      this.setState({ members: response.data.results });
      console.log(response.data.results);
    });
  }

  render() {
    const teamMembers = this.state.members.map(member => {
      return (
        <TeamMembers
          key={member.cell}
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
