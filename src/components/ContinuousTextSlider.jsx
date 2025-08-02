import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ContinuousTextSlider = () => {
  const settings = {
    infinite: true,
    speed: 8000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    swipe: false,
    draggable: false,
  };

  const slideContent = "   Let's Work Togethere  -  ";

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <Slider {...settings}>
        {[...Array(3)].map((_, i) => (
          <div key={i} style={{ whiteSpace: "nowrap", textAlign: "center" }}>
            <svg
              width="100%"
              height="auto"
              viewBox="0 0 1200 100"
              preserveAspectRatio="xMidYMid meet"
              style={{ maxWidth: '100%', height: '6vw' }}
            >
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="80"
                fontWeight="bold"
                fontFamily="'Arial Black', Gadget, sans-serif"
                fill="none"
                stroke="#155dfc"
                strokeWidth="2"
                letterSpacing="5"
                textTransform="uppercase"
              >
                {slideContent}
              </text>
            </svg>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ContinuousTextSlider;
