import React, { Component } from "react";
import "../../styles/components/Social.css";

class SocialMedia extends Component {
  state = {
    social: [
      {
        name: "Facebook",
        path: "http://www.facebook.com",
        image: "https://img.icons8.com/android/24/000000/facebook.png"
      },
      {
        name: "LinkedIn",
        path: "http://www.linkedin.com",
        image: "https://img.icons8.com/metro/26/000000/linkedin.png"
      }
    ]
  };
  render() {
    const socialMedia = this.state.social.map(item => (
      <span key={item.name} class="SocialIcon">
        <a href={item.path} to={item.path} class={"SocialLink"}>
          <img src={item.image} alt="" />
        </a>
      </span>
    ));
    return <div className="Social">{socialMedia}</div>;
  }
}

export default SocialMedia;
