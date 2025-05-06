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
              المعرض والمؤتمر الدولي العاشر للطاقة في العراق.
              </h2>
              <p className="text-white mb-3">
                یحظى برعایة السيد رئیس الوزراء ووزارة الكھرباء العراقیة - وزاره
                النفط - الھیئة الوطنیة للأستثمار مما یحقق فرص تعزیز التعاون مع
                الشركات الاستثماریة المتخصصة في مجال الطاقة.
              </p>
              <p className="text-white mb-3">
                ویواصل معرض ومؤتمر طاقة العراق بنسختها العاشره ربط مجتمع الطاقة
                العالمي مع موردي الطاقة الدولیین واكتشاف المنتجات والحلول التي
                تغیر مشھد الطاقة وبناء علاقات تجاریة طویلة الأمد.
              </p>
              <div className="moretxt">
                <p className="text-white mb-3">
                  والتي لن تساعدك فقط على البقاء في صدارة المنافسة ولكنھا ستمكنك
                  من تنویع محفظة الطاقة الخاصة بك فضلاً عن مد الجسور نحو التكامل
                  الاقتصادي وتشجیع الاستثمار.
                </p>
                <p className="text-white mb-3">
                  فقد شھدت منظومة الكھرباء الوطنیة في البلاد خلال السنوات
                  الماضیة تطورات ملحوظة وتعكس بصورة واضحة افاق الاستثمار في
                  وزارة الكھرباء العراقية لجذب الشركات من جمیع انحاء العالم.
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
          <div style={{ width: "300px", height: "400px" }}>
            <Slider {...settings}>
              <div>
                <Image
                  src="/images/sliders/MOE.jpg"
                  alt="Slide 1"
                  width={3000}
                  height={0}
                  layout="responsive"
                />
              </div>
              <div>
                <Image
                  src="/images/sliders/2.jpg"
                  alt="Slide 2"
                  width={3000}
                  height={0}
                  layout="responsive"
                />
              </div>
              <div>
                <Image
                  src="/images/sliders/4.jpg"
                  alt="Slide 3"
                  width={3000}
                  height={0}
                  layout="responsive"
                />
              </div>
            </Slider>
          </div>
          <div style={{ width: "300px", height: "400px" }}>
            <Slider {...settings2}>
              <div>
                <Image
                  src="/images/sliders/MOI.jpg"
                  alt="Slide A"
                  width={3000}
                  height={0}
                  layout="responsive"
                />
              </div>
              <div>
                <Image
                  src="/images/sliders/5.jpg"
                  alt="Slide B"
                  width={3000}
                  height={0}
                  layout="responsive"
                />
              </div>
              <div>
                <Image
                  src="/images/sliders/1.jpg"
                  alt="Slide C"
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
