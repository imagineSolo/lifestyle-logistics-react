import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client01 from "../../images/Clients/client01.png";
import client02 from "../../images/Clients/client02.png";
import client03 from "../../images/Clients/client03.png";
import client04 from "../../images/Clients/client04.png";
import client05 from "../../images/Clients/client05.png";
import client06 from "../../images/Clients/client06.png";
import client07 from "../../images/Clients/client07.png";
import client08 from "../../images/Clients/client08.png";
import client09 from "../../images/Clients/client09.png";
import "../../styles/components/Carousel.css";

const images = [
  client01,
  client02,
  client03,
  client04,
  client05,
  client06,
  client07,
  client08,
  client09
];

class Carousel extends React.Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      adaptiveHeight: true
    };

    const clients = images.map((img, index) => (
      <div className="ClientLogo">
        <img src={img} alt={`Client${index + 1}`} />
      </div>
    ));

    return (
      <div className="CarouselContainer">
        <h3>Zaufali nam:</h3>
        <div className="SliderWrapper">
          <Slider {...settings}>{clients}</Slider>
        </div>
      </div>
    );
  }
}

export default Carousel;
