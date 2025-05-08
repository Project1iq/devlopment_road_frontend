import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useRecoilValue } from "recoil";
import { langState } from "@/atom/atom";
import Marquee from "react-fast-marquee";

export default function Whoattends() {
  const [state, setState] = useState(false);

  const handleReRender = () => {
    setState(!state);
  };
  const lang = useRecoilValue(langState);
  const sponsors = [
    { src: "/images/sponser/plat/plat1.png", alt: "وصف الصورة" },
    { src: "/images/sponser/gold/Fanar.png", alt: "وصف الصورة" },
    { src: "/images/sponser/gold/Els.png", alt: "وصف الصورة" },
    { src: "/images/sponser/gold/Utec.png", alt: "وصف الصورة" },
    { src: "/images/sponser/silver/ATC.png", alt: "وصف الصورة" },
    { src: "/images/sponser/plat/GE.png", alt: "وصف الصورة" },
    { src: "/images/sponser/plat/Energy.png", alt: "وصف الصورة" },
    { src: "/images/sponser/gold/ASTOR.jpg", alt: "وصف الصورة" },
    { src: "/images/sponser/gold/bicc.jpg", alt: "وصف الصورة" },
    { src: "/images/sponser/gold/Mass.png", alt: "وصف الصورة" },
  ];
  return (
    <div className="whoattends ">
      <div className="container">
        <div className="mt-md-0 pt-5">
          <h2 className="main-text text-center mt-5 mb-5">
            {lang ? "  رؤية معرض ومؤتمر طريق التنمية :-" : "Development Road Expo & Conference Vision:-"}
          </h2>
        </div>
        <div className="text-center">
        {lang ? (
  <>
    <h5>
      أن يكون معرض مشروع طريق التنمية العراقي منصة ملهمة للتواصل والتفاعل مع المجتمع المحلي والدولي،
      تسلط الضوء على رؤية المشروع كمحرك رئيسي للتكامل الاقتصادي والتنمية المستدامة في العراق والمنطقة.
      يهدف المعرض إلى تقديم المشروع بوصفه نموذجاً عالمياً للابتكار والبنية التحتية، وتعزيز الشراكات المحلية والدولية،
      وتحفيز مشاركة القطاعين العام والخاص لتحقيق النمو الشامل والمستدام.
    </h5>
  </>
) : (
  <>
    <h5>
      The Development Road Exhibition aims to be an inspiring platform for engagement with both local and international communities,
      highlighting the projects vision as a key driver for economic integration and sustainable development in Iraq and the region.
      The exhibition seeks to present the project as a global model of innovation and infrastructure, foster local and international partnerships,
      and encourage public and private sector participation to achieve inclusive and sustainable growth.
    </h5>
  </>
)}

        </div>

        {/* <div className="margtop">
          <Marquee
            direction={lang ? "left" : "right"}
            style={{ direction: "ltr" }}

            //سويت هيجي علمود لايخرب بانو كلشي يتحرك لان تحرك بيه يكون داخلي
          >
            {sponsors.map((Sponser, i) => (
              <Image
                key={i}
                alt={Sponser.alt}
                src={Sponser.src}
                width={3000}
                height={0}
                className="marquee-image"
              />
            ))}
          </Marquee>
        </div> */}
       

        <div className="separator col  col-12   col-sm-none col-md-none col-lg-none justify-content-center ">
          <hr style={{ color: " #000000" }} />
        </div>
      </div>
      <div className="row d-flex justify-content-center ">
        <h2 className="main-text text-center mt-5 ">
          {lang
            ? " القطاعات المستهدفة"
            : "See how you fit in at Iraq Energy"}
        </h2>
      </div>
      <div className="row d-flex justify-content-center mb-5">
        <div className="col-lg-4 col-sm-12 text-center"></div>
      </div>
      <div className="fristr row col-12 d-flex justify-content-center ps-sm-5 ms-sm-2 ps-lg-0 ms-lg-0 mx-auto">
        <div className="col-lg-2 col-sm-12 text-center">
          {" "}
          <Image
            src="/images/whoattends/1.png"
            alt="government image"
            width={3000}
            height={0}
            layout="responsive"
            className="mb-lg-4 mb-sm-0"
          />
          <h3
            style={{
              color: "#304D73",
            }}
          >
            {lang ? "قطاع النقل والخدمات اللوجستية" : "Government"}
          </h3>{" "}
        </div>
        <div className="col-lg-2 col-sm-12 text-center">
          <Image
            src="/images/whoattends/2.png"
            alt="uti image "
            width={3000}
            height={0}
            layout="responsive"
            className="mb-lg-4 mb-sm-0"
          />
          <h3
            style={{
              color: "#304D73",
            }}
          >
            {lang ? "   قطاع البنية التحتية والانشاءات" : "Utilities & Regulatory"}
          </h3>
        </div>
        <div className="col-lg-2 col-sm-12 text-center">
          {" "}
          <Image
            src="/images/whoattends/9.png"
            alt="dev image"
            width={3000}
            height={0}
            layout="responsive"
            className="mb-lg-4 mb-sm-0"
          />
          <h3
            style={{
              color: "#304D73",
            }}
          >
            {lang
              ? " القطاع الحكومي والمؤسسات الدولية"
              : "EPC Contractors & Developers"}
          </h3>
        </div>
        <div className="col-lg-2 col-sm-12 text-center">
          {" "}
          <Image
            src="/images/whoattends/4.png"
            alt="system image"
            width={3000}
            height={0}
            layout="responsive"
            className="mb-4"
          />
          <h3
            style={{
              color: "#304D73",
            }}
          >
            {lang
              ? "قطاع التكنولوجيا والاتصالات"
              : "Sub-contractors & System Integrators"}
          </h3>
        </div>
      </div>
      <div className="secondry row col-12 d-flex justify-content-center mb-5  mx-auto">
        <div className="col-lg-2 col-sm-12 text-center ">
          {" "}
          <Image
            src="/images/whoattends/5.png"
            alt="distributors image"
            width={3000}
            height={0}
            layout="responsive"
            className="mb-4"
          />
          <h3
            style={{
              color: "#304D73",
            }}
          >
            {lang
              ? "قطاع التجارة والصناعة"
              : "  Distributors & Electrical Trading Companies"}
          </h3>{" "}
        </div>
        <div className="col-lg-2 col-sm-12 text-center">
          <Image
            src="/images/whoattends/6.png"
            alt="wholesalers image"
            width={3000}
            height={0}
            layout="responsive"
            className="mb-4"
          />
          <h3
            style={{
              color: "#304D73",
            }}
          >
            {lang
              ? "قطاع التمويل والاستثمار"
              : "Wholesalers, Manufacturers & Resellers"}
          </h3>
        </div>
        <div className="col-lg-2 col-sm-12 text-center">
          {" "}
          <Image
            src="/images/whoattends/7.png"
            alt="consultants image"
            width={3000}
            height={0}
            layout="responsive"
            className="mb-4"
          />
          <h3
            style={{
              color: "#304D73",
            }}
          >
            {lang ? "قطاع السياحة والخدمات" : "Consultants"}
          </h3>
        </div>
        <div className="col-lg-2 col-sm-12 text-center">
          {" "}
          <Image
            src="/images/whoattends/8.png"
            alt="financiers image"
            width={3000}
            height={0}
            layout="responsive"
            className="mb-4"
          />
          <h3
            style={{
              color: "#304D73",
            }}
          >
            {lang ? " قطاع التعليم والتدريب" : " Financiers"}
          </h3>
        </div>
      </div>
     
    </div>
  );
}
