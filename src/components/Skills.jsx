import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Skills({ dir = true, skills = [] }) {
  const settings = {
    dots: false,
    rtl: dir,
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 3 },
      },
    ],
  };
  return (
    <div className="min-h-[120px] w-full ">
      <Slider
        {...settings}
        className="container mx-auto px-2 flex justify-center items-center space-x-2"
      >
        {skills.map((skill, index) => (
          <div key={index} className="px-2">
            <div className=" rounded-lg p-2 text-center">
              <img
                src={skill.image}
                alt={skill.name}
                className="lg:w-20 w-16 h-16 lg:h-20 mx-auto mb-1 object-contain"
              />
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Skills;
