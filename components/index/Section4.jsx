// :import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { langState } from "@/atom/atom";
import Link from "next/link";
import chicken from "@/public/images/index/EX-2.jpg";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";

export default function Section4({ data }) {
  const lang = useRecoilValue(langState);
  const router = useRouter();

  const [sponsers, setSponsers] = useState([
    {
      id: 1,
      image: chicken.src,
      alt: "Bronze",
      name: "Bronze",
      name_ar: "برونز",
      description: "This is a Bronze sponser",
      description_ar: "هذا راعي برونزي",
      exhibitions: [
        {
          id: 1,
          name: "Agricultural machinery, equipment and supplies",
          name_ar: "المكننة والآليات والمستلزمات الزراعية",
        },
        {
          id: 2,
          name: "Agricultural machinery, equipment and supplies",
          name_ar: "المكننة والآليات والمستلزمات الزراعية",
        },
        {
          id: 3,
          name: "Agricultural machinery, equipment and supplies",
          name_ar: "المكننة والآليات والمستلزمات الزراعية",
        },
      ],
    },
    {
      id: 2,
      image: chicken.src,
      alt: "forest",
      name: "Silver",
      name_ar: "فضي",
      description: "This is a Silver sponser",
      description_ar: "هذا راعي فضي",
      exhibitions: [
        {
          id: 1,
          name: "Agricultural machinery, equipment and supplies",
          name_ar: "المكننة والآليات والمستلزمات الزراعية",
        },
        {
          id: 2,
          name: "Agricultural machinery, equipment and supplies",
          name_ar: "المكننة والآليات والمستلزمات الزراعية",
        },
        {
          id: 3,
          name: "Agricultural machinery, equipment and supplies",
          name_ar: "المكننة والآليات والمستلزمات الزراعية",
        },
      ],
    },
    {
      id: 3,
      image: chicken.src,
      alt: "forest",
      name: "Gold",
      name_ar: "ذهبي",
      description: "This is a Gold sponser",
      description_ar: "هذا راعي ذهبي",
      exhibitions: [
        {
          id: 1,
          name: "Agricultural machinery, equipment and supplies",
          name_ar: "المكننة والآليات والمستلزمات الزراعية",
        },
        {
          id: 2,
          name: "Agricultural machinery, equipment and supplies",
          name_ar: "المكننة والآليات والمستلزمات الزراعية",
        },
        {
          id: 3,
          name: "Agricultural machinery, equipment and supplies",
          name_ar: "المكننة والآليات والمستلزمات الزراعية",
        },
      ],
    },
    {
      id: 4,
      image: chicken.src,
      alt: "forest",
      name: "Gold",
      name_ar: "ذهبي",
      description: "This is a Gold sponser",
      description_ar: "هذا راعي ذهبي",
      exhibitions: [
        {
          id: 1,
          name: "Agricultural machinery, equipment and supplies",
          name_ar: "المكننة والآليات والمستلزمات الزراعية",
        },
        {
          id: 2,
          name: "Agricultural machinery, equipment and supplies",
          name_ar: "المكننة والآليات والمستلزمات الزراعية",
        },
        {
          id: 3,
          name: "Agricultural machinery, equipment and supplies",
          name_ar: "المكننة والآليات والمستلزمات الزراعية",
        },
      ],
    },
  ]);

  useEffect(() => {
    axios
      .get("/exhibition-categories/")
      .then((res) => {
        setSponsers(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="section-4 mt-5 pt-4 services container">
      <div className="row d-flex justify-content-center mb-5">
        <div className="col-lg-4 mt-md-4 col-sm-12 text-center">
          {lang ? (
            <h2
              style={{
                fontSize: "40px",
                fontWeight: "700",
                lineHeight: "50px",
                margin: " 0 0 1rem",
                color: "#faa61a",
              }}
            >
              {" "}
              القطاعات المستهدفة{" "}
            </h2>
          ) : (
            <h2
              style={{
                fontSize: "40px",
                fontWeight: "700",
                lineHeight: "50px",
                margin: " 0 0 1rem",
                color: "#faa61a",
              }}
            >
              {" "}
              Iraq Energy is for...
            </h2>
          )}
        </div>
      </div>
      <div className="fristr row col-12 d-flex justify-content-center ps-sm-5 ms-sm-2 ps-lg-0 ms-lg-0">
        <div className="col-lg-4 mt-md-4 col-sm-12 text-center">
          {" "}
          <Image
            src="/images/picdubai/1.png"
            alt="government image"
            width={3000}
            height={0}
            layout="responsive"
            className="mb-lg-4 mb-sm-0"
          />
          <h3
            style={{
              color: "#faa61a",
            }}
          >
            {lang ? "قطاع النقل و الخدمات اللوجستية" : "Government"}
          </h3>{" "}
        </div>
        <div className="col-lg-4 mt-md-4 col-sm-12 text-center">
          {" "}
          <Image
            src="/images/picdubai/2.png"
            alt="government image"
            width={3000}
            height={0}
            layout="responsive"
            className="mb-lg-4 mb-sm-0"
          />
          <h3
            style={{
              color: "#faa61a",
            }}
          >
            {lang ? "قطاع البنية التحتية و الانشاءات" : "Government"}
          </h3>{" "}
        </div>
        <div className="col-lg-4 mt-md-4 col-sm-12 text-center">
          {" "}
          <Image
            src="/images/picdubai/3.png"
            alt="government image"
            width={3000}
            height={0}
            layout="responsive"
            className="mb-lg-4 mb-sm-0"
          />
          <h3
            style={{
              color: "#faa61a",
            }}
          >
            {lang ? "قطاع الطاقة والمرافق" : "Government"}
          </h3>{" "}
        </div>
        <div className="col-lg-4 mt-md-4 col-sm-12 text-center">
          {" "}
          <Image
            src="/images/picdubai/4.png"
            alt="government image"
            width={3000}
            height={0}
            layout="responsive"
            className="mb-lg-4 mb-sm-0"
          />
          <h3
            style={{
              color: "#faa61a",
            }}
          >
            {lang ? "قطاع التكنلوجيا والاتصالات" : "Government"}
          </h3>{" "}
        </div>
        <div className="col-lg-4 mt-md-4 col-sm-12 text-center">
          {" "}
          <Image
            src="/images/picdubai/5.png"
            alt="government image"
            width={3000}
            height={0}
            layout="responsive"
            className="mb-lg-4 mb-sm-0"
          />
          <h3
            style={{
              color: "#faa61a",
            }}
          >
            {lang ? "ثطاع التجارة والصناعة" : "Government"}
          </h3>{" "}
        </div>
        <div className="col-lg-4 mt-md-4 col-sm-12 text-center">
          {" "}
          <Image
            src="/images/picdubai/6.png"
            alt="government image"
            width={3000}
            height={0}
            layout="responsive"
            className="mb-lg-4 mb-sm-0"
          />
          <h3
            style={{
              color: "#faa61a",
            }}
          >
            {lang ? "قطاع التمويل والاستثمار" : "Government"}
          </h3>{" "}
        </div>
        <div className="col-lg-4 mt-md-4 col-sm-12 text-center">
          {" "}
          <Image
            src="/images/picdubai/7.png"
            alt="government image"
            width={3000}
            height={0}
            layout="responsive"
            className="mb-lg-4 mb-sm-0"
          />
          <h3
            style={{
              color: "#faa61a",
            }}
          >
            {lang ? "ثطاع السياحة والخدمات" : "Government"}
          </h3>{" "}
        </div>
        <div className="col-lg-4 mt-md-4 col-sm-12 text-center">
          {" "}
          <Image
            src="/images/picdubai/8.png"
            alt="government image"
            width={3000}
            height={0}
            layout="responsive"
            className="mb-lg-4 mb-sm-0"
          />
          <h3
            style={{
              color: "#faa61a",
            }}
          >
            {lang ? "قطاع التغليم والتدريب" : "Government"}
          </h3>{" "}
        </div>
        <div className="col-lg-4 mt-md-4 col-sm-12 text-center">
          {" "}
          <Image
            src="/images/picdubai/9.png"
            alt="government image"
            width={3000}
            height={0}
            layout="responsive"
            className="mb-lg-4 mb-sm-0"
          />
          <h3
            style={{
              color: "#faa61a",
            }}
          >
            {lang ? "القطاع الحكومي والمؤسسات الدولية" : "Government"}
          </h3>{" "}
        </div>
      </div>
    

    </section>
  );
}
