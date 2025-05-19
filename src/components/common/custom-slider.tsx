"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Slide {
  heading: string;
  p: string;
  image: string;
}

interface CustomSlider {
   slidesData?: Slide[]; 
}
const CustomSlider: React.FC<CustomSlider> = ({ slidesData = [] }) => {
  console.log(slidesData)
  const settings = {
   dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {slidesData.map((slide, index) => (
        <div key={index}>
          {slide?.heading && <h3>{slide?.heading}</h3>}
          {slide?.p && <div dangerouslySetInnerHTML={{ __html: slide?.p }} />}
          {slide?.image && <img src={slide?.image} alt={`Slide ${index + 1}`} />}
        </div>
      ))}
    </Slider>
  );
};

export default CustomSlider;
