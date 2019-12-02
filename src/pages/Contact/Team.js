import React, { Component } from "react";
import axios from "axios";
import TeamMembers from "../../components/TeamMembers/TeamMembers";

class Team extends Component {
  state = {
    members: []
  };

  componentDidMount() {
    axios
      .get(
        "https://randomuser.me/api/?inc=id,%20picture,%20name,%20phone,%20email"
      )
      .then(response => {
        this.setState({ members: response.data });
        console.log(response);
      });
  }

  render() {
    const teamMembers = this.state.members.map(member => {
      return (
        <TeamMembers
          key={member.results.id.value}
          image={member.results.picture.thumbnail}
          name={member.results.name.first}
          phone={member.results.phone}
          email={member.results.email}
        />
      );
    });

    return (
      <div>
        <h3>Our team</h3>
        {teamMembers}
      </div>
    );
  }
}

export default Team;
