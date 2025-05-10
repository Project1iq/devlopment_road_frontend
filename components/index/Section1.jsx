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
  const [stopAnimation, setstopAnimation] = useState(false);
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
    const isSmallScreen = window.innerWidth < 576;
    setstopAnimation(isSmallScreen);
  }, []);
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
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
          
          <div className="carousel-item active" style={{ overflow: 'hidden' }}>
  <img
    src="/images/slider-home/7.png"
    className="d-block imgh"
    style={{
      width: '100%',
      objectFit: 'cover',
      objectPosition: '20% center' // تحريك الصورة لليسار
    }}
    alt="image"
  />
</div>



            {/* <div class="carousel-item">
              <img
                src={"/images/slider-home/2.png"}
                class="d-block w-100"
                alt="image"
              />
            </div>
            <div class="carousel-item">
              <img
                src={"/images/slider-home/3.png"}
                class="d-block w-100"
                alt="image"
              />
            </div>
            <div class="carousel-item">
              <img
                src={"/images/slider-home/4.png"}
                class="d-block w-100"
                alt="image"
              />
            </div> */}
          </div>
        </div>
        <div className="video-timer">
          <div className="main col-lg-8 col-sm-12 ">
            <h1 className="text toxt1  ">
              {lang
                ? "معرض ومؤتمر طريق التنمية"
                : "Development Road Exhibition and Conference "}
            </h1>
            <h1 className="text toxt  ">
              {lang ? " في العراق" : "In The Iraq"}
            </h1>
            <h5 className={lang ? " text1  pe-3 " : " text1  ps-3"}>
              {" "}
              {lang ? "    4-1  نوفمبر 2025" : "2025 nov 1-4  "}
            </h5>
            <h5 className={lang ? " text1 tmn pe-3 " : " text1 tmn ps-3"}>
              {" "}
              {lang
                ? "   العراق - بغداد - معرض بغداد الدولي "
                : "Iraq - Baghdad - Baghdad International Fair"}
            </h5>
            <div className="mai mt-md-5 pt-md-5">
              <Link href={"/reserveSpace"} className="main-btn mt-0 ms-3">
                {lang ? "احجز مساحتك" : "Book Your Space"}
              </Link>
            </div>

            <div className="mai2">
              <Link
                href={"/reserveSpace"}
                className="main-btn mt-md-5 ms-3 mt-0"
              >
                {lang ? "التسجيل للزيارة" : "Register as a visitor"}
              </Link>
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
}
