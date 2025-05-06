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
          <div className="counter-section row mb-4 ">
            <div className="col-lg-2 col-md-4 col-12">
              <h1 className="number text-center">{Energy}+</h1>
              <p className="text text-center">
<Image src={'/images/icons'}
                <br />
                {lang ? "خبراء الطاقة" : "Energy Professionals"}
              </p>
            </div>
            <div className="col-lg-2 col-md-4 col-12">
              <h1 className="number text-center">{exhibitors}+</h1>
              <p className="text text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="#FFFFFF"
                >
                  <path d="M120-120v-556.67h163.33V-840h393.34v326.67H840V-120H528.67v-163.33h-97.34V-120H120Zm66.67-66.67h96.66v-96.66h-96.66v96.66Zm0-163.33h96.66v-96.67h-96.66V-350Zm0-163.33h96.66V-610h-96.66v96.67ZM350-350h96.67v-96.67H350V-350Zm0-163.33h96.67V-610H350v96.67Zm0-163.34h96.67v-96.66H350v96.66ZM513.33-350H610v-96.67h-96.67V-350Zm0-163.33H610V-610h-96.67v96.67Zm0-163.34H610v-96.66h-96.67v96.66Zm163.34 490h96.66v-96.66h-96.66v96.66Zm0-163.33h96.66v-96.67h-96.66V-350Z" />
                </svg>
                <br />
                {lang ? "العارضون الدوليون" : "International Exhibitors"}
              </p>
            </div>
            <div className="col-lg-2 col-md-4 col-12">
              <h1 className="number text-center">{countries}+</h1>
              <p className="text text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="#FFFFFF"
                >
                  <path d="M480-80q-83.33 0-156.33-31.5-73-31.5-127.17-85.67-54.17-54.16-85.33-127.5Q80-398 80-481.33 80-565 111.17-637.5q31.16-72.5 85.33-126.67 54.17-54.16 127.17-85Q396.67-880 480-880q83.67 0 156.5 30.83 72.83 30.84 127 85Q817.67-710 848.83-637.5 880-565 880-481.33q0 83.33-31.17 156.66-31.16 73.34-85.33 127.5-54.17 54.17-127 85.67T480-80Zm0-66q32-36 54-80t36-101.33H390.67Q404-272.67 426-227.67T480-146Zm-91.33-13.33q-22.67-36.34-39.17-77.5Q333-278 322-327.33H182.67q35 64 82.83 103.33t123.17 64.67ZM572-160q66.67-21.33 119.5-64.33t85.83-103H638.67Q627-278.67 610.83-237.5 594.67-196.33 572-160ZM158-394h151.33q-3-24.67-3.83-45.5-.83-20.83-.83-41.83 0-23.67 1.16-43.17Q307-544 310-566.67H158q-6.33 22.67-8.83 41.84-2.5 19.16-2.5 43.5 0 24.33 2.5 44.5 2.5 20.16 8.83 42.83Zm219.33 0h206q3.67-27.33 4.84-46.83 1.16-19.5 1.16-40.5 0-20.34-1.16-39.17-1.17-18.83-4.84-46.17h-206q-3.66 27.34-4.83 46.17-1.17 18.83-1.17 39.17 0 21 1.17 40.5t4.83 46.83ZM650-394h152q6.33-22.67 8.83-42.83 2.5-20.17 2.5-44.5 0-24.34-2.5-43.5-2.5-19.17-8.83-41.84H650.67q3 30 4.16 48.84Q656-499 656-481.33q0 21.66-1.5 41.16-1.5 19.5-4.5 46.17Zm-12-239.33h139.33Q745.67-696 692.83-739q-52.83-43-121.5-61.67Q594-765 610.17-724.5 626.33-684 638-633.33Zm-247.33 0h180q-11.34-50-35-96-23.67-46-55.67-83.34-30 30-51 72.34-21 42.33-38.33 107Zm-208 0h140Q333-682 348.83-722.17 364.67-762.33 388-800q-68.67 18.67-120.5 61t-84.83 105.67Z" />
                </svg>
                <br />
                {lang ? "الدول المشاركة" : "Countries Represented"}
              </p>
            </div>
            <div className="col-lg-2 col-md-4 col-12">
              <h1 className="number text-center">{Key}+</h1>
              <p className="text text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="#FFFFFF"
                >
                  <path d="M840.33-518.67v332q0 27-19.83 46.84Q800.67-120 773.67-120H186.33q-27 0-46.83-19.83-19.83-19.84-19.83-46.84v-332q-26.34-23-36.5-57.33-10.17-34.33 1.16-70.67L127-782q8-26.67 28.17-42.33Q175.33-840 201.67-840h554q27.66 0 48.33 15.83 20.67 15.84 29 42.17l43.33 135.33q11.34 36.34.84 70.34t-36.84 57.66Zm-270.66-34.66q28.33 0 46.33-18.84 18-18.83 14.33-44.5l-24-156.66h-92.66V-614q0 24.33 16 42.5t40 18.17Zm-184.67 0q26.33 0 44.17-17.84Q447-589 447-614v-159.33h-92.67l-24 156.66q-4 25.34 12.84 44.34 16.83 19 41.83 19Zm-180.67 0q22 0 38.17-15.34 16.17-15.33 19.17-38l24.66-166.66h-92.66l-44 142q-8.67 27.33 7.5 52.66 16.16 25.34 47.16 25.34Zm551.34 0q31 0 47.66-25 16.67-25 7.67-53l-44.67-142h-92L699-606.67q3 22.67 19.17 38 16.16 15.34 37.5 15.34ZM186.33-186.67h587.34V-488q-1 1.33-6.5 1.33h-11.5q-25.67 0-47.5-10-21.84-10-43.17-31.33-16.67 19.33-40.33 30.33-23.67 11-51.67 11-29 0-51.17-9-22.16-9-41.5-28.33-15.66 18-38.5 27.67-22.83 9.66-50.83 9.66-30.33 0-54.17-10.66Q313-508 295.67-528q-23 21-45.17 31.17-22.17 10.16-46.17 10.16h-10.5q-5.16 0-7.5-1.33v301.33Zm587.34 0H186.33h587.34Z" />
                </svg>
                <br />
                {lang ? "المشترين الرئيسيين" : "Key Buyers "}
              </p>
            </div>
            <div className="col-lg-2 col-md-4 col-12">
              <h1 className="number text-center">{space}</h1>
              <p className="text text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="#FFFFFF"
                >
                  <path d="M120-120v-66.67h88V-840h393.33v43.33h151.34v610H840V-120H686v-610h-84.67v610H120Zm154.67-653.33v586.66-586.66ZM447.33-440q17 0 28.5-11.5t11.5-28.5q0-17-11.5-28.5t-28.5-11.5q-17 0-28.5 11.5t-11.5 28.5q0 17 11.5 28.5t28.5 11.5ZM274.67-186.67h260v-586.66h-260v586.66Z" />
                </svg>
                <br />
                {lang ? "قاعات المعارض" : "Exhibition Halls"}
              </p>
            </div>
            <div className="col-lg-2 col-md-4 col-12">
              <h1 className="number text-center">{Pavillions}</h1>
              <p className="text text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="#ffff"
                >
                  <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q146 0 255.5 91.5T872-559h-82q-19-73-68.5-130.5T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h80v120h-40L168-552q-3 18-5.5 36t-2.5 36q0 131 92 225t228 95v80Zm364-20L716-228q-21 12-45 20t-51 8q-75 0-127.5-52.5T440-380q0-75 52.5-127.5T620-560q75 0 127.5 52.5T800-380q0 27-8 51t-20 45l128 128-56 56ZM620-280q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Z" />
                </svg>
                <br />
                {lang ? "المعارض الدولية" : "International Pavillions"}
              </p>
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
