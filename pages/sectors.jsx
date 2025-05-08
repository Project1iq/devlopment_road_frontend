import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Cookies from "js-cookie";
import { useRecoilState } from "recoil";
import { langState, scrollPositionState } from "@/atom/atom";
import { useRouter } from "next/router";
import Link from "next/link";
export default function Sectors() {
  const [lang, setLang] = useRecoilState(langState);
  return (
    <div className="sectors container">
      <div className="pt-md-0 pt-5">
        <h2 className="main-text text-center mt-5 mb-5">
          {lang ? "القطاعات المشاركة" : "Participating Sectors"}
        </h2>
      </div>
      <div className="text-center px-5 fw-normal mb-4">
        {lang
          ? "التطور من أجل مستقبل متنوع ومستدام، يمكن للزوار استكشاف أحدث توجهات الطاقة من خلال سبعة قطاعات مخصصة داخل عرض ضخم مشترك، وذلك فقط في معرض العراق للطاقة"
          : "Evolving for a diverse and sustainable future, visitors can explore the latest energy trends through seven dedicated sectors within a combined mega-show, only at Iraq Energy."}
      </div>
      
      <div className="mai col-md-12 col-12 d-flex justify-content-start flex-md-row pt-2">
        {[
          //all pages below in file name sectors in components
          
            {
              imgSrc: "/images/icons/1.png",
              ar: ["تبادل المعرفة", "بين الجهات", "المشاركة"],
              en: ["Smart", "Solutions", "Sector"],
              link: "/smart",
            },
            {
              imgSrc: "/images/icons/3.png",
              ar: ["تحسين الصورة", "العامة كبيئة", "استثمارية ناجحة"],
              en: ["Electricity", "Distribution", "Sector"],
              link: "/renewable",
            },
            {
              imgSrc: "/images/icons/4.png",
              ar: ["دعم تنويع", "الاقتصاد", "المحلي"],
              en: ["Renewable", "& Clean", "Energy"],
              link: "/critical",
            },
            {
              imgSrc: "/images/icons/6.png",
              ar: ["جذب", "استثمارات", "اجنبية"],
              en: ["Production", "of", "electricity"],
              link: "/transmission",
            },
            {
              imgSrc: "/images/icons/5.png",
              ar: ["خلق", "فرص عمل", "دولية"],
              en: ["Investment", "in Generation", "Sector"],
              link: "/management",
            },
            {
              imgSrc: "/images/icons/2.png",
              ar: ["الترويج عن", "مشروع طريق", "التنمية"],
              en: ["Electricity", "Transmission", "Sector"],
              link: "/emobility",
            },
          
          
        ].map((sector, index) => (
          <Link
            href={sector.link}
            key={index}
            className="sector-item col-12 col-md-2 d-flex flex-column justify-content-center py-4 px-3"
          >
            <div className="col-11 align-self-center mb-4">
              
                {" "}
                <Image
                  src={sector.imgSrc}
                  alt="وصف للصورة"
                  width={2000}
                  height={2000}
                  className="responsiveImage"
                />
              
            </div>
            <div className="d-flex flex-column justify-content-center text-center">
              {sector[lang ? "ar" : "en"].map((text, i) => (
                <h5 key={i} className="bm">
                  {text}
                </h5>
              ))}
            </div>
          </Link>
        ))}
      </div>
     
    </div>
  );
}
