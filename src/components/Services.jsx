import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/3.jpg';
import img2 from '../assets/4.jpg';

const Services = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        interval={5000}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        // showIndicators={false}
      >
        <div>
          <img src={img1} alt="item1" />
          <p className="legend">Full Stack Solutions</p>
        </div>
        <div>
          <img src={img2} alt="item2" />
          <p className="legend">Peer-to-Peer Solutions</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
