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
    <section className="section-4 mt-5 pt-4 services">
      <div className="row d-flex justify-content-center mb-5">
        <div className="col-lg-4 col-sm-12 text-center">
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
              طاقة العراق تدعم{" "}
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
        <div className="col-lg-2 col-sm-12 text-center">
          {" "}
          <Image
            src="/images/picdubai/1.jpg"
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
            {lang ? "الحكومة" : "Government"}
          </h3>{" "}
        </div>
        <div className="col-lg-2 col-sm-12 text-center">
          <Image
            src="/images/picdubai/2.jpg"
            alt="uti image "
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
            {lang ? "الخدمات العامة والرقابة" : "Utilities & Regulatory"}
          </h3>
        </div>
        <div className="col-lg-2 col-sm-12 text-center">
          {" "}
          <Image
            src="/images/picdubai/3.jpg"
            alt="dev image"
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
            {lang
              ? "المقاولون والمهندسون والمطورون"
              : "EPC Contractors & Developers"}
          </h3>
        </div>
        <div className="col-lg-2 col-sm-12 text-center">
          {" "}
          <Image
            src="/images/picdubai/4.jpg"
            alt="system image"
            width={3000}
            height={0}
            layout="responsive"
            className="mb-4"
          />
          <h3
            style={{
              color: "#faa61a",
            }}
          >
            {lang
              ? "المقاولون الفرعيون ومنسقي البرمجة"
              : "Sub-contractors & System Integrators"}
          </h3>
        </div>
      </div>
      <div className="secondry row col-12 d-flex justify-content-center mb-5  ">
        <div className="col-lg-2 col-sm-12 text-center ">
          {" "}
          <Image
            src="/images/picdubai/5.jpg"
            alt="distributors image"
            width={3000}
            height={0}
            layout="responsive"
            className="mb-4"
          />
          <h3
            style={{
              color: "#faa61a",
            }}
          >
            {lang
              ? "شركات التجارة الكهربائية"
              : "  Distributors & Electrical Trading Companies"}
          </h3>{" "}
        </div>
        <div className="col-lg-2 col-sm-12 text-center">
          <Image
            src="/images/picdubai/6.jpg"
            alt="wholesalers image"
            width={3000}
            height={0}
            layout="responsive"
            className="mb-4"
          />
          <h3
            style={{
              color: "#faa61a",
            }}
          >
            {lang
              ? "تجار الجملة، المصنعون، والبائعون"
              : "Wholesalers, Manufacturers & Resellers"}
          </h3>
        </div>
        <div className="col-lg-2 col-sm-12 text-center">
          {" "}
          <Image
            src="/images/picdubai/7.jpg"
            alt="consultants image"
            width={3000}
            height={0}
            layout="responsive"
            className="mb-4"
          />
          <h3
            style={{
              color: "#faa61a",
            }}
          >
            {lang ? "المستشارون" : "Consultants"}
          </h3>
        </div>
        <div className="col-lg-2 col-sm-12 text-center">
          {" "}
          <Image
            src="/images/picdubai/8.jpg"
            alt="financiers image"
            width={3000}
            height={0}
            layout="responsive"
            className="mb-4"
          />
          <h3
            style={{
              color: "#faa61a",
            }}
          >
            {lang ? "الخبراء الماليون" : " Financiers"}
          </h3>
        </div>
      </div>
    

      <div className="containers  custom-container  ">
        <div className="row d-flex justify-content-center pt-3 ">
          <div className="tita col-lg-6 col-sm-12 text-center ">
            {" "}
            <h2 className="mb-4">
              {lang ? "احصل على أفكار استراتيجية" : "Gain Strategic Insights"}{" "}
            </h2>
          </div>
        </div>
        <div className="row d-flex ">
          <div className="col-lg-3 col-sm-6 text-center  nopadcol p-5">
            {" "}
            <Image
              src="/images/magz/10th IEE  8th Report.png"
              alt="financiers image"
              width={3000}
              height={0}
              layout="responsive"
              className="mb-lg-1 mb-sm-0"
            />{" "}
            <p
              style={{
                fontWeight: "700",
                fontSize: "30px"
              }}
              className="mb-md-5 mb-sm-0"
            >
              {" "}
              {lang ? (
                " تقرير 2024    "
              ) : (
                <>
                  {" Report 2024 "} <br></br>
                  {" "}
                </>
              )}
              {/* {lang ? (
                "  تصفح تقارير وأبحاث الصناعة "
              ) : (
                <>
                  {"Decarbonization in "} <br></br>
                  {"the GCC Region"}
                </>
              )} */}
            </p>
            <Link href={"/register"} className="main-btn mt-5  mb-5 ">
              {lang ? " تحميل" : " Download"}
            </Link>
          </div>
          <div className="col-lg-3 col-sm-6 text-center  nopadcol p-5">
            {" "}
            <Image
              src="/images/magz/10th IEE  9th Guide.png"
              alt="financiers image"
              width={3000}
              height={0}
              layout="responsive"
              className="flip mb-lg-1 mb-sm-0"
            />{" "}
            <p
              style={{
                fontWeight: "700",
                fontSize: "30px",
              }}
              className="mb-md-5 mb-sm-0"
            >
              {" "}
              {lang ? (
                " دليل 2024    "
              ) : (
                <>
                  {" Guide 2024 "} <br></br>{" "}
                </>
              )}
            </p>
            <Link href={"/register"} className="main-btn ">
              {lang ? " تحميل" : " Download"}
            </Link>
          </div>
          <div className="col-lg-3 col-sm-6 text-center  nopadcol p-5">
            {" "}
            <Image
              src="/images/magz/10th IEE  9th Report.png"
              alt="financiers image"
              width={3000}
              height={0}
              layout="responsive"
              className=" mb-lg-1 mb-sm-0"
            />{" "}
           
               <p
              style={{
                fontWeight: "700",
                fontSize: "30px"
              }}
              className="mb-md-5 mb-sm-0"
            >
              {" "}
              {lang ? (
                " تقرير 2023    "
              ) : (
                <>
                  {" Report 2023 "} <br></br>
                  {" "}
                </>
              )}
            {/* {lang ? (
                "  مواجهة تحديات الطاقة المتجددة"
              ) : (
                <>
                  {" Navigating Renewable "} <br></br>
                  {"Energy Challenges"}
                </>
              )}{" "} */}
            </p>
              
            
            <Link href={"/register"} className="main-btn ">
              {lang ? " تحميل" : " Download"}
            </Link>
          </div>
          <div className="col-lg-3 col-sm-6 text-center  nopadcol p-5">
            {" "}
            <Image
              src="/images/magz/10th IEE 8th Guide.png"
              alt="financiers image"
              width={3000}
              height={0}
              layout="responsive"
              className="flip mb-lg-1 mb-sm-0"
            />{" "}
            <p
              style={{
                fontWeight: "700",
                fontSize:"30px",
              }}
              className="mb-md-5 mb-sm-0"
            >
              {lang ? (
                " دليل 2023    "
              ) : (
                <>
                  {" Guide 2023 "} <br></br>{" "}
                </>
              )}{" "}
              {/* {lang ? (
                "  خطوة الشرق الأوسط نحو الأفضل "
              ) : (
                <>
                  {" The Middle East’s Crucial Step "} <br></br>
                  {"Towards a Sustainable Future"}
                </>
              )} */}
            </p>
            <Link href={"/register"} className="main-btn ">
              {lang ? " تحميل" : " Download"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
