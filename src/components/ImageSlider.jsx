import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider({ images = [], dir = true }) {
  const settings = {
    dots: false,
    rtl: dir,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="min-h-[100px] w-full">
      <Slider
        {...settings}
        className="container mx-auto px-2 flex justify-center items-center"
      >
        {images.map((img, { alt }, idx) => (
          <div
            key={idx}
            className="hover:scale-105 transition-transform duration-300 overflow-hidden"
          >
            <div className="rounded-lg p-2 text-center overflow-hidden">
              <img
                src={img}
                alt={alt || `image-${idx}`}
                className="w-26 h-16 lg:w-auto lg:h-66 mx-auto object-contain"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageSlider;
