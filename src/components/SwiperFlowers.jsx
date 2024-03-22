import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Wrapper from "../layout/Wrapper";
import flower1 from "../assets/flowers/1.jpg";
import flower2 from "../assets/flowers/2.jpg";
import flower3 from "../assets/flowers/3.jpg";
import flower4 from "../assets/flowers/4.jpg";
import flower5 from "../assets/flowers/5.jpg";
import flower6 from "../assets/flowers/6.jpg";

function SwiperFlowers() {
  const FlowersSiper = [
    { title: "izzatillado", image: flower1, id: 1 },
    { title: "something2", image: flower2, id: 2 },
    { title: "something3", image: flower3, id: 3 },
    { title: "something4", image: flower4, id: 4 },
    { title: "something5", image: flower5, id: 5 },
    { title: "something6", image: flower6, id: 6 },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const renderSlides = () => {
    return FlowersSiper.map((flower, index) => (
      <div
        key={index}
        className="flowerSwiper mt-[50px] font-Poppins p-1"
        data-aos="fade-up"
      >
        <div className="image">
          <img
            src={flower.image}
            alt={flower.title}
            className="rounded-[20px] max-w-[300px] lg:max-w-[380px] w-full min-h-[400px] max-h-[400px] object-cover"
          />
        </div>
        <div className="categoryname">
          <h1>{flower.title}</h1>
        </div>
      </div>
    ));
  };

  return (
    <Wrapper>
      <div className="SwiperFlowers">
        <div className="slider-container">
          <Slider {...settings}>{renderSlides()}</Slider>
        </div>
      </div>
    </Wrapper>
  );
}

export default SwiperFlowers;
