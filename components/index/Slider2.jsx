import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import plants from "@/public/images/index/plants.png";
import water from "@/public/images/index/water.png";
import { useRecoilValue } from "recoil";
import { langState } from "@/atom/atom";
import Carousel from "react-multi-carousel";
import Slider from "react-slick";

export default function Slider2({ data, revers }) {
  
  const lang = useRecoilValue(langState);

  const rightRef = useRef(null);
  const leftRef = useRef(null);

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <button ref={rightRef} onClick={() => onClick()}>
        Right
      </button>
    );
  };

  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <button ref={leftRef} onClick={() => onClick()}>
        left
      </button>
    );
  };

  const settings_1 = {
    speed: 4000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    pauseOnFocus: false,
    pauseOnHover: true,
  };

  const settings_2 = {
    speed: 3000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    arrows: false,
    buttons: false,
    // reverse direction
    rtl: true,
    pauseOnFocus: false,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 0,
  };

  // const sliderRef = useRef();
  // let autoplayOn = true;
  // let autoplaySpeed = 0;
  // useEffect(() => {
  //   setInterval(function () {
  //     if (!autoplayOn) return;
  //     sliderRef?.current?.slickPrev();
  //   }, autoplaySpeed);
  // }, [autoplayOn, autoplaySpeed]);

  return (
    <div className="row ">
      <div className="col-12" dir="ltr">
        {" "}
        <Slider {...settings_1}>
          {data.map((sponser) => (
            <div
              className="slider_item pb-3"
              key={sponser.id}
              data-aos="fade-up"
            >
              <div className="card pb-3  mx-1 mb-4 ">
                <div className="card-body">
                  <h5 className="card-title text-center main-text text-elp h6">
                    {lang ? sponser.name_ar : sponser.name}
                  </h5>
                  <Image
                    src={sponser?.image}
                    alt="sponser"
                    width={1000}
                    height={1000}
                    className="w-100 h-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <Slider {...settings_2}>
          {data.map((sponser) => (
            <div
              className="slider_item pb-3"
              key={sponser.id}
              data-aos="fade-up"
            >
              <div className="card pb-3  mx-1 mb-4 ">
                <div className="card-body">
                  <h5 className="card-title text-center main-text text-elp h6">
                    {lang ? sponser.name_ar : sponser.name}
                  </h5>
                  <Image
                    src={sponser?.image}
                    alt="sponser"
                    width={1000}
                    height={1000}
                    className="w-100 h-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
