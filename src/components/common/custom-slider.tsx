"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/slider.module.scss";

import Button from "../shared/button"; // Import Button

interface ButtonProps {
  button_title?: string;
  button_type?: string;
  button_link?: string;
  button_style?: string;
}

interface Slide {
  heading: string;
  p: string;
  image: string;
  button?: ButtonProps;
}

interface CustomSlider {
  slidesData?: Slide[];
}

const CustomSlider: React.FC<CustomSlider> = ({ slidesData = [] }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {slidesData.map((slide, index) => (
        <div key={index}>
          <div className={styles.slide}>
            <div className={styles.slide_image}>
              {slide.image && <img src={slide.image} alt={`Slide ${index + 1}`} />}
            </div>
            <div className={styles.slide_text}>
              {slide.heading && <h3>{slide.heading}</h3>}
              {slide.p && <div dangerouslySetInnerHTML={{ __html: slide.p }} className="mb-20"/>}
              {slide.button && <Button data={slide.button} />}
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CustomSlider;
