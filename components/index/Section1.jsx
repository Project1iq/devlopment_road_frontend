import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import plants from "@/public/images/index/plants.png";
import water from "@/public/images/index/water.png";
import { useRecoilValue } from "recoil";
import { langState } from "@/atom/atom";
import Link from "next/link";
import me from "../../public/me2.mp4";
import Prime from "@/public/images/Prime Minister.png";
import Ph1 from "@/public/images/slider-home/1.png";
import Ph2 from "@/public/images/slider-home/2.png";
import Ph3 from "@/public/images/slider-home/3.png";
import Ph5 from "@/public/images/slider-home/4.png";

import Ph4 from "@/public/images/5.jpg";

import Iraq from "@/public/images/index/Flag_map_of_Iraq.png";
export default function Section1({ data }) {
  const lang = useRecoilValue(langState);
  const [Energy, setVisiters] = useState(0);
  const [exhibitors, setExhibitors] = useState(0);
  const [countries, setCountries] = useState(0);
  const [space, setSpace] = useState(0);
  const [Pavillions, setPavillions] = useState(0);
  const [Key, setKey] = useState(0);
  const [startCount, setStartCount] = useState(false);

  const [update, setUpdate] = useState(0);

  const videoRef = useRef(null);
  const [targetDate, setTargetDate] = useState(new Date("2025-04-10T09:00:00"));

  useEffect(() => {
    // Target values
    const targetVisiters = 40000;
    const targetExhibitors = 1600;
    const targetCountries = 90;
    const targetSpace = 16;
    const targetPavillions = 17;
    const targetKey = 500;

    // Total animation duration in milliseconds
    const duration = 5000;

    // Calculate intervals for each counter
    const visiterInterval = Math.ceil(duration / (targetVisiters / 20));
    const exhibitorInterval = Math.ceil(duration / targetExhibitors);
    const countryInterval = Math.ceil(duration / targetCountries);
    const spaceInterval = Math.ceil(duration / targetSpace);
    const PavillionsInterval = Math.ceil(duration / targetSpace);
    const KeyInterval = Math.ceil(duration / (targetKey / 2));

    // Set up intervals for each counter
    const visiterTimer = setInterval(() => {
      setVisiters((prev) => {
        if (prev < targetVisiters) {
          return prev + 20;
        } else {
          clearInterval(visiterTimer);
          return prev;
        }
      });
    }, visiterInterval);

    const exhibitorTimer = setInterval(() => {
      setExhibitors((prev) => {
        if (prev < targetExhibitors) {
          return prev + 1;
        } else {
          clearInterval(exhibitorTimer);
          return prev;
        }
      });
    }, exhibitorInterval);

    const countryTimer = setInterval(() => {
      setCountries((prev) => {
        if (prev < targetCountries) {
          return prev + 1;
        } else {
          clearInterval(countryTimer);
          return prev;
        }
      });
    }, countryInterval);

    const spaceTimer = setInterval(() => {
      setSpace((prev) => {
        if (prev < targetSpace) {
          return prev + 1;
        } else {
          clearInterval(spaceTimer);
          return prev;
        }
      });
    }, spaceInterval);
    const PavillionsTimer = setInterval(() => {
      setPavillions((prev) => {
        if (prev < targetPavillions) {
          return prev + 1;
        } else {
          clearInterval(PavillionsTimer);
          return prev;
        }
      });
    }, PavillionsInterval);
    const KeyTimer = setInterval(() => {
      setKey((prev) => {
        if (prev < targetKey) {
          return prev + 4;
        } else {
          clearInterval(KeyTimer);
          return prev;
        }
      });
    }, KeyInterval);

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(visiterTimer);
      clearInterval(exhibitorTimer);
      clearInterval(countryTimer);
      clearInterval(spaceTimer);
      clearInterval(PavillionsTimer);
      clearInterval(KeyTimer);
    };
  }, [update]);

  useEffect(() => {
    setTimeout(() => {
      setUpdate(Math.random());
      setVisiters(0);
      setCountries(0);
      setExhibitors(0);
      setPavillions(0);
      setKey(0);
      setSpace(0);
    }, 5000);
  }, []);

  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};
    if (startCount) {
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.4;
      videoRef.current.play();
    }
  }, []);

  return (
    <>
      <div className="video-container ">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={'/images/slider-home/1.png'} class="d-block w-100" alt="image" />
            </div>
            <div class="carousel-item">
              <img src={'/images/slider-home/2.png'} class="d-block w-100" alt="image" />
            </div>
            <div class="carousel-item">
              <img src={'/images/slider-home/3.png'} class="d-block w-100" alt="image" />
            </div>
            <div class="carousel-item">
              <img src={'/images/slider-home/4.png'} class="d-block w-100" alt="image" />
            </div>
          </div>
        </div>
        <div className="video-timer">
          <div className="main col-lg-8 col-sm-12 ">
            <h1 className="text toxt1  ">
              {lang
                ? "رسم مستقبل الطاقة "
                : "SHAPING THE FUTURE OF ENERGY "}
            </h1>
            <h1 className="text toxt  ">
              {lang
                ? " في العراق"
                : "IN THE IRAQ"}
            </h1>
            <h5 className={lang ? " text1  pe-3 " : " text1  ps-3"}>
              {" "}
              {lang ? "    24 - 26 شباط 2025" : "24 - 26 Feb 2025"}
            </h5>
            <h5 className={lang ? " text1 tmn pe-3 " : " text1 tmn ps-3"}>
              {" "}
              {lang ? "   العراق - بغداد - المنصور - شارع دمشق - ساحة الفارس العربي" : "Iraq- Baghdad – Al- Mansour -Damascus Street – Arabian Knight Square"}
            </h5>
            <div className="mai">
              <Link href={"/reserveSpace"} className="main-btn mt-0 ms-3">
                {lang ? "احجز مساحتك" : "Book Your Space"}
              </Link>
            </div>

            <div className="mai2">
              <Link href={"/reserveSpace"} className="main-btn mt-md-5 ms-3 mt-0">
                {lang ? "التسجيل للزيارة" : "Register as a visitor"}
              </Link>
            </div>
            <div className="mai">
              <Link href={"/reserveSpace"} className="main-btn mt-5 ms-3">
                {lang ? "  تحميل كتيب المبيعات" : "Download Brochure"}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="row section-1 container mx-auto mt-5 ">
        <div className="bg-overlay"></div>
        <div
          className="col-md-12 col-12 px-lx-0 px-4 z-index mt-2 text-center mb-2"
          data-aos={lang ? "fade-left" : "fade-right"}
        >
          <div className="mb-5 pb-1">
            <h2 className="hn">
              {lang
                ? "   الفوائد الاقتصادية    "
                : "Connect, Collaborate, and Shape the Future of Energy in Iraq"}{" "}
            </h2>
          </div>
          <div className="counter-section row mb-4 py-4 ">
            <div className="col-lg-2 col-md-4 col-12">
              <Image src={'/images/icons/4.png'} alt="image" width={80} height={80} />
              <p className="text text-center">
                <br />
                {lang ? "دعم تنوع الاقتصاد المحلي" : "Energy Professionals"}
              </p>
            </div>

            <div className="col-lg-2 col-md-4 col-12">
              <Image src={'/images/icons/5.png'} alt="image" width={80} height={80} />
              <p className="text text-center">
                <br />
                {lang ? "خلق فرص عمل دولية و محلية" : "Energy Professionals"}
              </p>
            </div>

            <div className="col-lg-2 col-md-4 col-12">
              <Image src={'/images/icons/6.png'} alt="image" width={80} height={80} />
              <p className="text text-center">
                <br />
                {lang ? "جذب استثمارات اجنبية مباشرة" : "Energy Professionals"}
              </p>
            </div>

            <div className="col-lg-2 col-md-4 col-12">
              <Image src={'/images/icons/3.png'} alt="image" width={80} height={80} />
              <p className="text text-center">
                <br />
                {lang ? "تحسين الصورة العامة كبيئة استثمارية ناجحة" : "Energy Professionals"}
              </p>
            </div>

            <div className="col-lg-2 col-md-4 col-12">
              <Image src={'/images/icons/1.png'} alt="image" width={80} height={80} />
              <p className="text text-center">
                <br />
                {lang ? "تبادل المعرفة بين الجهات المشاركة" : "Energy Professionals"}
              </p>
            </div>

            <div className="col-lg-2 col-md-4 col-12">
              <Image src={'/images/icons/2.png'} alt="image" width={80} height={80} />
              <p className="text text-center">
                <br />
                {lang ? "الترويج عن مشروع طريق التنمية" : "Energy Professionals"}
              </p>
            </div>

            <div className="col-12 mt-3">
              <Link className="btn-default" href={'/contact'}>
              {lang ? "عرض التفاصيل" : "Energy Professionals"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      
      <section className="row section-1 container mx-auto mt-5 ">
        <div className="bg-overlay"></div>
        <div
          className="col-md-12 col-12 px-lx-0 px-4 z-index mt-2 text-center mb-2"
          data-aos={"fade-top"}
        >
          <div className="mb-4">
            <h2 className="hn">
              {lang
                ? "   التواصل والتعاون لتحويل مستقبل الطاقة في العراق    "
                : "Connect, Collaborate, and Shape the Future of Energy in Iraq"}{" "}
            </h2>
          </div>

          <div className="row">
            <div className="col-2"></div>
            <div className="col-8  mt-2 ">
              <p>
                {lang
                  ? "  يحظى برعاية السيد رئيس الوزراء ووزارة الكهرباء العراقية - وزارة النفط - الهيئة الوطنية للاستثمار مما يحقق فرص تعزيز التعاون مع الشركات الاستثمارية المتخصصة في مجال الطاقة، ويواصل معرض ومؤتمر طاقة العراق بنسختها العاشرة ربط مجتمع الطاقة العالمي مع موردي الطاقة الدوليين"
                  : "Under the patronage of the Prime Minister, the Ministry of Electricity of Iraq, the Ministry of Oil, and the National Investment Commission, the 10th edition of the Iraq Energy Exhibition and Conference continues to foster cooperation with investment companies specialized in the energy sector"}
              </p>
            </div>
            <div className="col-2"></div>
          </div>
          <div className="row d-flex justify-content-sm-center justify-content-md-between mb-5 mt-5">
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
            <div className="card4 col-3 col-sm-12 hover-effect">
              <Link href="/contact">
                <h2>
                  {lang ? "  تعاون معنا" : " PARTNER"}
                  <span
                    className="underline"
                    style={{ width: lang ? "83%" : "78%" }}
                  ></span>
                </h2>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
