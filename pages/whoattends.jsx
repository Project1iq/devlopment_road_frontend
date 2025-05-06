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
        <div>
          <h2 className="main-text text-center mt-5 mb-5">
            {lang ? "  من يحضر:-" : "Who attends Iraq energy:-"}
          </h2>
        </div>
        <div className="text-center">
          {lang ? (
            <>
              <h4>
                توجيه دعوات رسمية الى السيد رئيس الوزراء وشريحة متخصصة من اصحاب
                القرار في الحكومة المركزية
              </h4>
              <h7 className="h7">
                وستشمل ايضاً: كبار المسؤولين من السادة الوزراء والوكلاء
                والمستشارين. لجنة الكهرباء والطاقة النيابية في البرلمان. السادة
                المحافظون ورؤساء واعضاء مجالس المحافظات. المصنعون في القطاعات
                المستفيدة. اتحاد الصناعات واتحاد الغرف ورجال الاعمال. السفارات
                واعضاء السلك الدبلوماسي في العراق.
              </h7>{" "}
            </>
          ) : (
            <>
              <h4>
                Official invitations will be directed to the Prime Minister and
                a specialized group of decision-makers in the central
                government.
              </h4>
              <h7 className="h7">
                It will also include: senior officials such as ministers,
                deputies, and advisors. The Parliamentary Energy and Electricity
                Committee. Governors and heads and members of the provincial
                councils. Manufacturers in the benefiting sectors. The
                Federation of Industries, the Federation of Chambers, and
                businessmen. Embassies and members of the diplomatic corps in
                Iraq.
              </h7>
            </>
          )}
        </div>

        <div className="margtop">
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
        </div>
       

        <div className="separator col  col-12   col-sm-none col-md-none col-lg-none justify-content-center ">
          <hr style={{ color: " #000000" }} />
        </div>
      </div>
      <div className="row d-flex justify-content-center ">
        <h2 className="main-text text-center mt-5 ">
          {lang
            ? " شاهد كيف تتناسب مع معرض العراق للطاقة"
            : "See how you fit in at Iraq Energy"}
        </h2>
      </div>
      <div className="row d-flex justify-content-center mb-5">
        <div className="col-lg-4 col-sm-12 text-center"></div>
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
     
    </div>
  );
}
