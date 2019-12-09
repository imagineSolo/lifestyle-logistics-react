import React from "react";
import img1 from "../../images/Cards/clothes-hanger.png";
import img2 from "../../images/Cards/delivery.png";
import img3 from "../../images/Cards/bookmark.png";
import "../../styles/components/Cards.css";

const cards = () => {
  return (
    <div className="Cards">
      <div className="Card">
        <div className="Face Face1">
          <div className="Content">
            <img src={img1} alt="" />
            <h4>Moda...</h4>
          </div>
        </div>
        <div className="Face Face2">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="Card">
        <div className="Face Face1">
          <div className="Content">
            <img src={img2} alt="" />
            <h4>...Dostarczana...</h4>
          </div>
        </div>
        <div className="Face Face2">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="Card">
        <div className="Face Face1">
          <div className="Content">
            <img src={img3} alt="" />
            <h4>...Na Czas</h4>
          </div>
        </div>
        <div className="Face Face2">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default cards;
