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
const [stopAnimation, setstopAnimation] = useState(false);
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
  useEffect(() => {
      const isSmallScreen = window.innerWidth < 576;
      setstopAnimation(isSmallScreen);
    }, []);
  return (
    <section className="all-2">
    <section className="section-2 mt-2 services">
      <div className="sliderpos">
        <div   data-aos={!stopAnimation ? "fade" : ""}  // استخدام "fade" لجعل العنصر يظهر تدريجيًا
  data-aos-anchor-placement={!stopAnimation ? "center-bottom" : ""}  // تحديد مكان التثبيت (يمكنك تعديله كما تريد)
          className={`text-container  p-5 pb-4 mx-3 d-lg-block d-none ${lang ? "lang-rtl" : "lang-ltr"} ${
            lang ? "text-right" : "text-left"
          } ` }
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
                Development Road Exhibition and Conference
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "28px",
                }}
                className="text-white mb-3"
              >
                The Development Road Exhibition and Conference is a leading economic event organized as part of efforts to highlight the Development Road Project, which represents a qualitative shift in enhancing Iraq position as a major economic gateway.
              </p>
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "28px",
                }}
                className="text-white mb-3"
              >
                The exhibition aims to bring together experts, investors, and decision-makers from various sectors to exchange views and experiences and explore the vast investment opportunities provided by the project.
              </p>
              <div className="moretxt">
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "28px",
                  }}
                  className="text-white mb-3"
                >
                  A number of seminars and workshops will be held in addition to a conference prior to the event during the Baghdad International Fair to raise awareness about the Development Road Exhibition and highlight the development project, its goals, and the investment opportunities it offers. During the event, a number of experts and stakeholders in the development project will gather to open introductory dialogue sessions and open doors for cooperation with various relevant sectors.
                </p>
              </div>
            </>
          )}
        </div>
        <div data-aos={!stopAnimation ? "fade" : ""}  
  data-aos-anchor-placement={!stopAnimation ? "center-bottom" : ""} className="sliders d-lg-flex gap-4 mx-5 d-none"
        >
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
    <section className="row section-1 container mx-auto mt-5 ">
        <div className="bg-overlay"></div>
        <div
          className="col-md-12 col-12 px-lx-0 px-2 z-index mt-2 text-center mb-2"
          data-aos={"fade-top"}
        >
          <div className="mb-4">
            <h2 className="hn">
              {lang
                ? "  رؤية معرض ومؤتمر طريق التنمية    "
                : "The Vision of the Development Path Exhibition & Conference"}
            </h2>
          </div>

          <div className="row">
            <div className="col-lg-2 col-12"></div>
            <div className="col-lg-8 col-12 mt-2">
              <p>
                {lang
                  ? "  أن يكون معرض مشروع طريق التنمية العراقي منصة ملهمة للتواصل والتفاعل مع المجتمع المحلي والدولي، تسلط الضوء على رؤية المشروع كمحرك رئيسي للتكامل الاقتصادي والتنمية المستدامة في العراق والمنطقة. يهدف المعرض إلى تقديم المشروع بوصفه نموذجًا عالميًا للابتكار والبنية التحتية، وتعزيز الشراكات المحلية والدولية، وتحفيز مشاركة القطاعين العام والخاص لتحقيق النمو الشامل والمستدام    "
                  : "The Iraqi Development Path Exhibition aims to be an inspiring platform for local and international interaction, highlighting the project’s role as a key driver for economic integration and sustainable development in Iraq and the region."}
              </p>
            </div>
            <div className="col-2"></div>
          </div>

          <div className="row justify-content-sm-center justify-content-md-between mb-5 mt-5">
            <div className="card1 col-3 col-sm-12 hover-effect">
              <Link href="/govermentSupport">
                <h2>
                  {lang ? " شبكة العلاقات" : " NETWORK"}
                  <span
                    className="underline"
                    style={{ width: lang ? "94%" : "83%" }}
                  ></span>
                </h2>
              </Link>
            </div>
            <div className="card2 col-3 col-sm-12 hover-effect">
              <Link href="/whyVisite">
                <h2>
                  {lang ? "  المعرض" : " EXHIBIT"}
                  <span
                    className="underline"
                    style={{ width: lang ? "64%" : "63%" }}
                  ></span>
                </h2>
              </Link>
            </div>
            <div className="card3 col-3 col-sm-12 hover-effect">
              <Link href="/conference">
                <h2>
                  {lang ? " اكتشف " : " DISCOVER"}
                  <span
                    className="underline"
                    style={{ width: lang ? "60%" : "83%" }}
                  ></span>
                </h2>
              </Link>
            </div>
          </div>
        </div>
      </section>
    <section className="row section-1 container mx-auto mt-5 ">
        <div className="bg-overlay"></div>
        <div
          className="col-md-12 col-12 px-lx-0 px-4 z-index mt-2 text-center mb-2"
          data-aos={!stopAnimation ? "fade-up" : ""}
          data-aos-anchor-placement={!stopAnimation ? "center-bottom" : ""}
        >
          <div className="counter-section row mb-4 py-4 px-lg-5 px-2 ">
            <div className="mb-5 pb-1">
              <h2 className="title-section-1">
                {lang ? "الفوائد الاقتصادية" : "Economic Benefits"}
              </h2>
            </div>
            <div className="col-lg-2 col-md-4 col-12">
              <Image
                src={"/images/icons/4.png"}
                alt="image"
                width={80}
                height={80}
              />
              <p className="text text-center">
                <br />
                {lang
                  ? "دعم تنوع الاقتصاد المحلي"
                  : "Supporting Economic Growth"}
              </p>
            </div>

            <div className="col-lg-2 col-md-4 col-12">
              <Image
                src={"/images/icons/5.png"}
                alt="image"
                width={80}
                height={80}
              />
              <p className="text text-center">
                <br />
                {lang
                  ? "خلق فرص عمل دولية و محلية"
                  : "Creating Local & Global Jobs"}
              </p>
            </div>

            <div className="col-lg-2 col-md-4 col-12">
              <Image
                src={"/images/icons/6.png"}
                alt="image"
                width={80}
                height={80}
              />
              <p className="text text-center">
                <br />
                {lang
                  ? "جذب استثمارات اجنبية مباشرة"
                  : "Attracting Foreign Capital"}
              </p>
            </div>

            <div className="col-lg-2 col-md-4 col-12">
              <Image
                src={"/images/icons/3.png"}
                alt="image"
                width={80}
                height={80}
              />
              <p className="text text-center">
                <br />
                {lang
                  ? "تحسين الصورة العامة كبيئة استثمارية ناجحة"
                  : "Improving Investment Image"}
              </p>
            </div>

            <div className="col-lg-2 col-md-4 col-12">
              <Image
                src={"/images/icons/1.png"}
                alt="image"
                width={80}
                height={80}
              />
              <p className="text text-center">
                <br />
                {lang
                  ? "تبادل المعرفة بين الجهات المشاركة"
                  : "Sharing Knowledge & Ideas"}
              </p>
            </div>

            <div className="col-lg-2 col-md-4 col-12">
              <Image
                src={"/images/icons/2.png"}
                alt="image"
                width={80}
                height={80}
              />
              <p className="text text-center">
                <br />
                {lang
                  ? "الترويج عن مشروع طريق التنمية"
                  : "Promoting Development Projects"}
              </p>
            </div>

            <div className="col-12 mt-3">
              <Link className="btn-default" href={"/contact"}>
                {lang ? "عرض التفاصيل" : "View Details"}
              </Link>
            </div>
          </div>
        </div>
      </section>
     
      <section className="row section-1 container mx-auto mt-5 ">
        <div className="bg-overlay"></div>
        <div
          className="col-md-12 col-12 px-lx-0 px-4 z-index mt-2 text-center mb-2"
          data-aos={!stopAnimation ? "fade-up" : ""}
          data-aos-anchor-placement={!stopAnimation ? "center-bottom" : ""}
        >
          <div className="counter-section row justify-content-center mb-4 py-4 px-lg-5 px-2">
            <div className="mb-5 pb-1">
              <h2 className="title-section-1">
                {lang ? "   الفوائد الاجتماعية    " : "Social Benefits"}
              </h2>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <Image
                src={"/images/icons/4.png"}
                alt="image"
                width={80}
                height={80}
              />
              <p className="text text-center">
                <br />
                {lang
                  ? "تبادل المعرفة و الخبرات من خلال اتاحة الفرص للمختصين والخبراء"
                  : "Knowledge & Expertise Exchange"}
              </p>
            </div>

            <div className="col-lg-4 col-md-4 col-12">
              <Image
                src={"/images/icons/5.png"}
                alt="image"
                width={80}
                height={80}
              />
              <p className="text text-center">
                <br />
                {lang
                  ? "نشر الوعي باهمية هذا الطريق للجانب المحلي والاقليمي والدولي"
                  : "Raising Awareness Locally & Globally"}
              </p>
            </div>

            <div className="col-lg-4 col-md-4 col-12">
              <Image
                src={"/images/icons/6.png"}
                alt="image"
                width={80}
                height={80}
              />
              <p className="text text-center">
                <br />
                {lang
                  ? "تحسين مستوى المعيشة للمواطن و زيادة الدخل المحلي للفرد"
                  : "Improving Living Standards"}
              </p>
            </div>

            <div className="col-lg-4 mt-md-5 col-md-4 col-12">
              <Image
                src={"/images/icons/3.png"}
                alt="image"
                width={80}
                height={80}
              />
              <p className="text text-center">
                <br />
                {lang
                  ? "انشاء نقطة حوار مباشرة توضح المتطلبات المستهدفة في المشروع"
                  : "Direct Dialogue for Project Requirements"}
              </p>
            </div>

            <div className="col-lg-4 mt-md-5 col-md-4 col-12">
              <Image
                src={"/images/icons/1.png"}
                alt="image"
                width={80}
                height={80}
              />
              <p className="text text-center">
                <br />
                {lang
                  ? "تقليل معدل البطالة و زيادة فرص الشباب في المشاركة في اعمار البلد"
                  : "Reducing Unemployment & Creating Youth Opportunities"}
              </p>
            </div>

            <div className="col-12 mt-3">
              <Link className="btn-default" href={"/contact"}>
                {lang ? "عرض التفاصيل" : "View Details"}
              </Link>
            </div>
          </div>
        </div>
      </section>

     
    </section>
    
  );
}
