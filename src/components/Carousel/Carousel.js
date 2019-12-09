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

class Carousel extends React.Component {
  render() {
    var settings = {
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      adaptiveHeight: true
    };
    return (
      <div className="CarouselContainer">
        <h3>Zaufali nam:</h3>
        <div className="SliderWrapper">
          <Slider {...settings}>
            <div className="ClientLogo">
              <img src={client01} alt="Client1" />
            </div>
            <div className="ClientLogo">
              <img src={client02} alt="Client2" />
            </div>
            <div className="ClientLogo">
              <img src={client03} alt="Client3" />
            </div>
            <div className="ClientLogo">
              <img src={client04} alt="Client4" />
            </div>
            <div className="ClientLogo">
              <img src={client05} alt="Client5" />
            </div>
            <div className="ClientLogo">
              <img src={client06} alt="Client6" />
            </div>
            <div className="ClientLogo">
              <img src={client07} alt="Client7" />
            </div>
            <div className="ClientLogo">
              <img src={client08} alt="Client8" />
            </div>
            <div className="ClientLogo">
              <img src={client09} alt="Client9" />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default Carousel;
