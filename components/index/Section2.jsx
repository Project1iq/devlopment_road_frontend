import React, { useEffect, useState } from "react";
import Image from "next/image";

import wate from "@/public/images/index/water.png";
import plants from "@/public/images/Prime Minister.png";
import { useRecoilValue } from "recoil";
import { langState } from "@/atom/atom";
import Slider from "react-slick";
import axios from "axios";
import Ph1 from "@/public/images/2.jpg";
import Ph2 from "@/public/images/12.jpg";
import Ph3 from "@/public/images/3.jpg";
import Ph5 from "@/public/images/15.jpg";
import Ph4 from "@/public/images/5.jpg";
import Link from "next/link";

export default function Section2({ data }) {
  const lang = useRecoilValue(langState);

  const settings = {
    vertical: true,
    verticalSwiping: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    cssEase: "linear",
    arrows: false,
  };
  const settings2 = {
    vertical: true,
    verticalSwiping: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    cssEase: "linear",
    rtl: true,
    arrows: false,
  };
  return (
    <section className="section-2 mt-5 services">
      <div className="sliderpos">
        <div
          className={`text-container  p-5 pb-4 mx-3 d-lg-block d-none ${lang ? "lang-rtl" : "lang-ltr"} ${
            lang ? "text-right" : "text-left"
          }`}
        >
          {lang ? (
            <>
              <h2 className="mb-4">
              معرض ومؤتمر طريق التنمية
              </h2>
              <p className="text-white mb-3">
              معرض ومؤتمر طريق التنمية هو فعالية اقتصادية رائدة تنظم كجزء من الجهود الرامية إلى تسليط الضوء على مشروع طريق التنمية، الذي يُعد نقلة نوعية في تعزيز موقع العراق كبوابة اقتصادية رئيسية
              </p>
              <p className="text-white mb-3">
              يهدف المعرض إلى الجمع بين الخبراء،المستثمرين، وصناع القرار من مختلف القطاعات، لتبادل الآراء والخبرات وبحث الإمكانيات الاستثمارية الضخمة التي يوفرها المشروع

              </p>
              <div className="moretxt">
                <p className="text-white mb-3">
                ستقام عدد من الندوات و الورش اضافة الى مؤتمر قبل انطلاق الحدث خلال معرض بغداد الدولي للتثقيف حول معرض طريق التنمية وتسليط الضوء على مشروع التنمية وأهدافه والمشاريع الاستثمارية التي تطرح من خلاله اضافة الى المؤتمر خلال انعقاده يجمع عدد من الخبراء والمهتمين بمشروع التنمية لفتح حلقات حوارية تعريفية و فتح ابواب التعاون مع مختلف القطاعات المعنية
                </p>
              </div>
            </>
          ) : (
            <>
              <h2
                style={{
                  fontSize: "40px",
                  lineHeight: "50px",
                  margin: "0 0 1rem",
                  fontWeight: "700",
                }}
                className="mb-4"
              >
                The 10<sup>th</sup> Iraq International Energy Expo and Conference.
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "28px",
                }}
                className="text-white mb-3"
              >
                Under the patronage of the Prime Minister, Ministry of
                Electricity, Ministry of Oil, and National Investment
                Commission, the event promotes collaboration with global energy
                firms.
              </p>

              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "28px",
                }}
                className="text-white mb-3"
              >
                The 10th Iraq Energy Expo and Conference connects global
                energy players, showcasing solutions that redefine the energy
                landscape and foster lasting partnerships.
              </p>
              <div className="moretxt">
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "28px",
                  }}
                  className="text-white mb-3"
                >
                  The event helps diversify energy portfolios, bridge gaps for
                  economic integration, and attract investments in Iraq&apos;s
                  growing energy sector.
                </p>

                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "28px",
                  }}
                  className="text-white mb-3"
                >
                  Significant progress in Iraq&apos;s electricity grid has boosted
                  the Ministry of Electricity’s appeal to international
                  companies worldwide.
                </p>
              </div>
            </>
          )}{" "}
         
        </div>
        <div className="sliders d-lg-flex gap-4 mx-5 d-none">
          <div style={{ width: "500px", height: "200px" }}>
            <Slider {...settings}>
              <div>
                <Image
                  src="/images/cardsimg/4.png"
                  alt="Slide 1"
                  width={3000}
                  height={0}
                  layout="responsive"
                />
              </div>
              <div>
                <Image
                  src="/images/cardsimg/2.png"
                  alt="Slide 2"
                  width={3000}
                  height={0}
                  layout="responsive"
                />
              </div>
              <div>
                <Image
                  src="/images/cardsimg/6.png"
                  alt="Slide 3"
                  width={3000}
                  height={0}
                  layout="responsive"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
