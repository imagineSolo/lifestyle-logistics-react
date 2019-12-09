import React from "react";
import Carousel from "../components/Carousel/Carousel";
import Cards from "../components/Cards/Cards";
import "../styles/pages/HomePage.css";

const HomePage = () => {
  return (
    <div className="Home">
      <h2>Transport to styl życia</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nam
        consequatur inventore earum repudiandae tempore et illo aliquam, minus
        saepe? Eveniet, soluta! Quos dolore eos eius fuga ab omnis vero. Dolore
        quas, quis voluptates nisi similique perspiciatis tempore pariatur
        consequatur, alias esse nemo, tempora optio accusamus laudantium aliquam
        nobis laborum odio culpa doloremque! Maxime ex asperiores alias qui,
        ipsum non? Soluta repudiandae eligendi accusamus est repellat
        exercitationem.
      </p>
      <Cards />
      <Carousel />
    </div>
  );
};

export default HomePage;
