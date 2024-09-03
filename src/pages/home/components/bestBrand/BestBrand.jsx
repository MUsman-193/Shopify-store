import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./bestBrand.scss";
function BestBrand() {
  const [brand, setBrand] = useState([]);

  useEffect(() => {
    getBrandImages();
  }, []);

  async function getBrandImages() {
    fetch("/bestBrand.json")
      .then((res) => res.json())
      .then((res) => {
        setBrand(res);
      })
      .catch((err) => {});
  }

  var settings = {
    infinite: true,
    arrows: true,
    dots: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      <h1 className="bestBrand_heading"> Medal Worthy Brands To Bag </h1>
      <div className="slider_container">
        <Slider {...settings}>
        {brand.map((el, index) => (
          <div>
              <img className="best_brand_img" src={el.image} alt="" />
          </div>
        ))}
        </Slider>
      </div>
    </>
  );
}

export default BestBrand;
