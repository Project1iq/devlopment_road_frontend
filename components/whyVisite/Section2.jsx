import React, { useState } from "react";
import Image from "next/image";

import { useRecoilValue } from "recoil";
import { langState } from "@/atom/atom";
import Link from "next/link";
export default function Section1({ data }) {
  const lang = useRecoilValue(langState);

  const [formData, setFormData] = useState({});
  const handleChage = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <section className="row section-2 mx-auto pt-5 container">
      <div className=" form-container">
        <div className="mainbro">
          <h2 className="main-text text-center">
            {lang ? " أهداف طريق التنمية" : "Development Road Goals"}
          </h2>
        </div>

        <div className="row col-12 d-flex flex-md-row flex-column justify-content-center mx-auto">
          {/* زيادة الوعي وتعزيز الشفافية */}
          <div className="col-12 col-md-3 d-flex flex-column justify-content-start px-3 ">
            <Image
              src="/images/whyVisite/1.png"
              alt="وصف"
              width={2000}
              height={2000}
              className={"responsiveImage mb-3"}
            />
            {lang ? (
              <p>
                <b> زيادة الوعي وتعزيز الشفافية </b>
                <br />
                توفير فرصة للتعريف بتفاصيل مشروع طريق التنمية ومراحله وفوائده
              </p>
            ) : (
              <p>
                <b> Raise Awareness & Transparency </b>
                <br />
                Introducing the project’s key phases and benefits to local and
                global audiences
              </p>
            )}
          </div>

          {/* جذب الاستثمارات */}
          <div className="col-12 col-md-3 d-flex flex-column justify-content-start px-3 ">
            <Image
              src="/images/whyVisite/2.png"
              alt="وصف"
              width={2000}
              height={2000}
              className={"responsiveImage mb-3"}
            />
            {lang ? (
              <p>
                <b> جذب الاستثمارات </b>
                <br />
                استعراض المشاريع والفرص الاستثمارية الواعدة في مختلف القطاعات
              </p>
            ) : (
              <p>
                <b> Attract Investments </b>
                <br />
                Showcase promising investment projects across various sectors
              </p>
            )}
          </div>

          {/* تبادل الخبرات والتجارب */}
          <div className="col-12 col-md-3 d-flex flex-column justify-content-start px-3 ">
            <Image
              src="/images/whyVisite/5.png"
              alt="وصف"
              width={2000}
              height={2000}
              className={"responsiveImage mb-3"}
              style={{ height: "158px" }}
            />
            {lang ? (
              <p>
                <b> تبادل الخبرات والتجارب </b>
                <br />
                جمع نخبة من الخبراء لتبادل أفضل الممارسات والحلول المبتكرة
              </p>
            ) : (
              <p>
                <b> Exchange Expertise </b>
                <br />
                Bringing together experts to share innovative practices and
                solutions
              </p>
            )}
          </div>

          {/* تعزيز الشراكات والتعاون */}
          <div className="col-12 col-md-3 d-flex flex-column justify-content-start px-3 ">
            <Image
              src="/images/whyVisite/4.png"
              alt="وصف"
              width={2000}
              height={2000}
              className={"responsiveImage mb-3"}
            />
            {lang ? (
              <p>
                <b> تعزيز الشراكات والتعاون </b>
                <br />
                بناء علاقات تعاون وشراكات استراتيجية فعّالة بين القطاعين العام
                والخاص
              </p>
            ) : (
              <p>
                <b> Strengthen Partnerships </b>
                <br />
                Build strategic cooperation between public and private sectors
              </p>
            )}
          </div>

          {/* تسويق المنتجات والخدمات */}
          {/* <div className="col-12 col-md-3 d-flex flex-column justify-content-start px-3 ">
    <Image
      src="/images/whyVisite/6.png"
      alt="تسويق"
      width={2000}
      height={2000}
      className={"responsiveImage mb-3"}
    />
    {lang ? (
      <p>
        <b> تسويق المنتجات والخدمات </b>
        <br />
        عرض حلول مبتكرة في مجالات البنية التحتية، النقل، والطاقة
      </p>
    ) : (
      <p>
        <b> Market Solutions </b>
        <br />
        Present innovative infrastructure, transport, and energy solutions
      </p>
    )}
  </div> */}

          {/* دعم التجارة العالمية */}
          {/* <div className="col-12 col-md-3 d-flex flex-column justify-content-start px-3 ">
    <Image
      src="/images/whyVisite/7.png"
      alt="تجارة"
      width={2000}
      height={2000}
      className={"responsiveImage mb-3"}
    />
    {lang ? (
      <p>
        <b> دعم التجارة العالمية </b>
        <br />
        تعزيز ربط الأسواق بين القارات عبر ممر النقل
      </p>
    ) : (
      <p>
        <b> Boost Global Trade </b>
        <br />
        Strengthen cross-continental trade through the development corridor
      </p>
    )}
  </div> */}
        </div>
      </div>
    </section>
  );
}
