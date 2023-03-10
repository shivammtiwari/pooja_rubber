import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const CompaniesCarousel = () => {
  var settings = {
    dots: false,
    loop: true,
    centerMode: true,
    centerPadding: "60px",
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='SwiperSlide'>
      <Slider {...settings} className='sliddd'>
        <div className="slide">
          <img src={require('../../assets/cloud-bg.png')} alt="" />
        </div>
        <div className="slide">
          <img src={require('../../assets/cloud-bg.png')} alt="" />
        </div><div className="slide">
          <img src={require('../../assets/cloud-bg.png')} alt="" />
        </div><div className="slide">
          <img src={require('../../assets/cloud-bg.png')} alt="" />
        </div><div className="slide">
          <img src={require('../../assets/cloud-bg.png')} alt="" />
        </div><div className="slide">
          <img src={require('../../assets/cloud-bg.png')} alt="" />
        </div><div className="slide">
          <img src={require('../../assets/cloud-bg.png')} alt="" />
        </div><div className="slide">
          <img src={require('../../assets/cloud-bg.png')} alt="" />
        </div><div className="slide">
          <img src={require('../../assets/cloud-bg.png')} alt="" />
        </div><div className="slide">
          <img src={require('../../assets/cloud-bg.png')} alt="" />
        </div>
      </Slider>
    </div>
  )
}

export default CompaniesCarousel