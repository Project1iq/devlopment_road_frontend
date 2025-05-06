import React from "react";
import LogoAr from "@/public/logo_ar_footer.png";
import LogoEn from "@/public/logo_en_footer.png";
import { useRecoilValue } from "recoil";
import { langState } from "@/atom/atom";
import Image from "next/image";
import Link from "next/link";

export default function Sponsers() {
  const lang = useRecoilValue(langState);

  const images = [
    {
      title: "plat",
      images: ["", ""],
    },
    {
      title: "gold",
      images: ["", ""],
    },
  ];

  return (
    <div
      className="Sponsers containers "
      style={{
        position: "relative",
        zIndex: 9,
        background: "#ffff",
      }}
    >
      <div className="white row justify-content-center">
        <div
          className="kbab col-12 text-center"
          style={{ marginTop: "2vh", marginBottom: "6vh" }}
        >
          <div className="row" style={{ marginBottom: "6vh" }}>
            <div className="col-1"></div>
            <div className="separator col  col-10   col-sm-none col-md-none col-lg-none justify-content-center ">
              <hr style={{ color: " #000000" }} />
            </div>
          </div>
          <h5
            style={{
              color: "#faa61a",
              width: "auto",
              fontWeight: "600",
              marginBottom: "10vh",
            }}
          >
            {lang ? "تحت رعاية " : " UNDER THE PATRONAGE"}
          </h5>
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col-lg-2 col-md-4 col-12 d-flex justify-content-center mb-5 mb-lg-0 mb-md-0">
              <Image
                src="/images/sponser/gov/MOE.png"
                alt="وصف الصورة"
                width={3000}
                height={0}
                layout="responsive"
                style={{
                  maxWidth: "130px",
                }}
              />
            </div>
            <div className="col-lg-2 col-md-4 col-12 d-flex justify-content-center  mb-5 mb-lg-0 mb-md-0">
              <Image
                src="/images/sponser/gov/Prime Minister.png"
                alt="وصف الصورة"
                width={3000}
                height={0}
                layout="responsive"
                style={{
                  maxWidth: "130px",
                }}
              />
            </div>
            <div className="col-lg-2 col-md-4 col-12 d-flex justify-content-center  mb-5 mb-lg-0 mb-md-0">
              <Image
                src="/images/sponser/gov/MOI.png"
                alt="وصف الصورة"
                width={3000}
                height={0}
                layout="responsive"
                style={{
                  maxWidth: "130px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="separator col col-xl-8 col-8 col-md-8 col-sm-8 col-sm-none col-md-none col-lg-none justify-content-center">
          <hr style={{ color: " #000000" }} />
        </div>
      </div>
      <div className="white row justify-content-center">
        <div className="kbab col-12 text-center" style={{ marginTop: "2vh" }}>
          <h5
            style={{
              color: "#faa61a",
              width: "auto",
              fontWeight: "600",
              marginBottom: "3vh",
            }}
          >
            {lang ? " الرعاة البلاتينيون" : " PLATINUM SPONSORS"}
          </h5>

          <div className="row d-flex justify-content-center align-items-center ">
          <div className="col-lg-2 col-md-4 col-12 d-flex justify-content-center  mb-5 mb-lg-0 mb-md-0">
              <Image
                src="/images/sponser/plat/Raban.png"
                alt="وصف الصورة"
                width={3000}
                height={0}
                layout="responsive"
                style={{
                  maxWidth: "160px",
                }}
              />
            </div>
           
            <div className="col-lg-2 col-md-4 col-12 d-flex justify-content-center  mb-5 mb-lg-0 mb-md-0">
              <Image
                src="/images/sponser/plat/GE.png"
                alt="وصف الصورة"
                width={3000}
                height={0}
                layout="responsive"
                style={{
                  maxWidth: "200px",
                }}
              />
            </div>
           
            <div className="col-lg-2 col-md-4 col-12 d-flex justify-content-center  mb-5 mb-lg-0 mb-md-0">
              <Image
                src="/images/sponser/plat/plat1.png"
                alt="وصف الصورة"
                width={3000}
                height={0}
                layout="responsive"
                style={{
                  maxWidth: "200px",
                }}
              />
            </div>
           
            <div className="col-lg-2 col-md-4 col-12 d-flex justify-content-center  mb-5 mb-lg-0 mb-md-0">
              <Image
                src="/images/sponser/plat/Energy.png"
                alt="وصف الصورة"
                width={3000}
                height={0}
                layout="responsive"
                style={{
                  maxWidth: "200px",
                }}
              />
            </div>
           
          </div>
        </div>
        <div className="separator col col-xl-8 col-8 col-md-8 col-sm-8 col-sm-none col-md-none col-lg-none justify-content-center">
          <hr style={{ color: " #000000" }} />
        </div>
      </div>
      <div className="white row justify-content-center">
        <div className="kbab col-12 text-center" style={{ marginTop: "2vh" }}>
          <h5
            style={{
              color: "#faa61a",
              width: "auto",
              fontWeight: "600",
              marginBottom: "5vh",
            }}
          >
            {lang ? " الرعاة الذهبيون" : "   GOLD SPONSERS"}
          </h5>
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col-lg-2 col-md-4 col-12 d-flex justify-content-center  mb-5 mb-lg-0 mb-md-0">
              <Image
                src="/images/sponser/gold/Fanar.png"
                alt="وصف الصورة"
                width={3000}
                height={0}
                layout="responsive"
                style={{
                  maxWidth: "200px",
                }}
              />
            </div>
            <div className="col-lg-2 col-md-4 col-12 d-flex justify-content-center  mb-5 mb-lg-0 mb-md-0">
              <Image
                src="/images/sponser/gold/ASTOR.jpg"
                alt="وصف الصورة"
                width={3000}
                height={0}
                layout="responsive"
                style={{
                  maxWidth: "200px",
                }}
              />
            </div>
            <div className="col-lg-2 col-md-4 col-12 d-flex justify-content-center  mb-5 mb-lg-0 mb-md-0">
              <Image
                src="/images/sponser/gold/bicc.jpg"
                alt="وصف الصورة"
                width={3000}
                height={0}
                layout="responsive"
                style={{
                  maxWidth: "200px",
                }}
              />
            </div>
            <div className="col-lg-2 col-md-4 col-12 d-flex justify-content-center  mb-5 mb-lg-0 mb-md-0">
              <Image
                src="/images/sponser/gold/Els.png"
                alt="وصف الصورة"
                width={3000}
                height={0}
                layout="responsive"
                style={{
                  maxWidth: "200px",
                }}
              />
            </div>
            <div className="col-lg-2 col-md-4 col-12 d-flex justify-content-center  mb-5 mb-lg-0 mb-md-0">
              <Image
                src="/images/sponser/gold/Mass.png"
                alt="وصف الصورة"
                width={3000}
                height={0}
                layout="responsive"
                style={{
                  maxWidth: "200px",
                }}
              />
            </div>
            <div className="col-lg-2 col-md-4 col-12 d-flex justify-content-center  mb-5 mb-lg-0 mb-md-0">
              <Image
                src="/images/sponser/gold/Utec.png"
                alt="وصف الصورة"
                width={3000}
                height={0}
                layout="responsive"
                style={{
                  maxWidth: "200px",
                }}
              />
            </div>
          </div>
        </div>
        <div className="separator col col-xl-8 col-8 col-md-8 col-sm-8 col-sm-none col-md-none col-lg-none justify-content-center">
          <hr style={{ color: " #000000" }} />
        </div>
      </div>
      <div className="white row justify-content-center">
        <div
          className="kbab col-12 text-center"
          style={{ marginTop: "2vh", marginBottom: "6vh" }}
        >
          <h5
            style={{
              color: "#faa61a",
              width: "auto",
              fontWeight: "600",
              marginBottom: "8vh",
            }}
          >
            {lang ? " الرعاة الفضيون" : "    SILVER SPONSERS"}
          </h5>
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col-lg-2 col-md-4 col-12 d-flex justify-content-center  mb-5 mb-lg-0 mb-md-0">
              <Image
                src="/images/sponser/silver/ATC.png"
                alt="وصف الصورة"
                width={3000}
                height={0}
                layout="responsive"
                style={{
                  maxWidth: "200px",
                }}
              />
            </div>
            <div className="col-lg-2 col-md-4 col-12 d-flex justify-content-center  mb-5 mb-lg-0 mb-md-0">
              <Image
                src="/images/sponser/silver/Bahra.png"
                alt="وصف الصورة"
                width={3000}
                height={0}
                layout="responsive"
                style={{
                  maxWidth: "200px",
                }}
              />
            </div>
          </div>
         
        </div>
        <div className="separator col col-xl-8 col-8 col-md-8 col-sm-8 col-sm-none col-md-none col-lg-none justify-content-center">
          <hr style={{ color: " #000000" }} />
        </div>
      </div>
      <div className="white row justify-content-center">
        <div className="kbab col-12 text-center" style={{ marginTop: "2vh" }}>
          <h5
            style={{
              color: "#faa61a",
              width: "auto",
              fontWeight: "600",
              marginBottom: "5vh",
            }}
          >
            {lang ? "الراعي التقني" : "Tech Sponsor"}
          </h5>

          <div className="row d-flex justify-content-center align-items-center ">
         
            <div className="col-lg-2 col-md-4 col-12 d-flex justify-content-center  mb-5 mb-lg-4 mb-md-4">
              <Image
                src="/images/sponser/plat/logo-dark.png"
                alt="وصف الصورة"
                width={3000}
                height={0}
                layout="responsive"
                style={{
                  maxWidth: "200px",
                }}
              />
            </div>
          
          </div>
        </div>
       
      </div>
    </div>
  );
}
