import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { langState } from "@/atom/atom";

export default function Sectors() {
  const [lang, setLang] = useRecoilState(langState);

  return (
    <div className="sectors2 container">
      <div>
        <h2 className="main-text text-center mt-5 mb-4 fs-3">
          {lang ? "القطاعات المشاركة" : "Participating Sectors"}
        </h2>
      </div>
      <div className="text-center px-5 fw-normal mb-3">
        {lang
          ? "يمكن للزوار استكشاف أحدث توجهات الطاقة عبر سبعة قطاعات مخصصة، فقط في معرض العراق للطاقة."
          : "Visitors can explore the latest energy trends through seven dedicated sectors, only at Iraq Energy."}
      </div>
      <div className="separator col col-12 col-sm-none col-md-none col-lg-none justify-content-center mt-5">
        <hr style={{ color: " #000000" }} />
      </div>
      <div className="mai col-md-12 col-12 d-flex justify-content-start flex-md-row pt-2">
        {[
          {
            imgSrc: "/images/iconimg/work.png",
            title: lang ? "قطاع الحلول الذكية" : "Smart Solutions Sector",
            description: lang
              ? "التحول الرقمي يعزز كفاءة الطاقة ويقلل الاستهلاك من خلال الأتمتة."
              : "Digital transformation enhances energy efficiency and reduces consumption through automation.",
            link: "/smart",
          },
          {
            imgSrc: "/images/iconimg/renewable.png",
            title: lang
              ? "قطاع الطاقة المتجددة والنظيفة"
              : "Renewable & Clean Energy Sector",
            description: lang
              ? "مشاريع الطاقة المتجددة تهدف إلى تقليل الانبعاثات الكربونية وتعزيز استدامة البيئة."
              : "Renewable energy projects aim to reduce carbon emissions and enhance environmental sustainability.",
            link: "/renewable",
          },
          {
            imgSrc: "/images/iconimg/wind2.png",
            title: lang
              ? "قطاع انتاج الطاقة الكهربائية"
              : "Electricity Generation Sector",
            description: lang
              ? "وزارة الكهرباء تخطط لتوسيع الإنتاج عبر محطات حديثة ومشاريع متجددة."
              : "The Ministry of Electricity plans to expand production through modern plants and renewable projects.",
            link: "/critical",
          },
          {
            imgSrc: "/images/iconimg/tower.png",
            title: lang
              ? "قطاع نقل الطاقة الكهربائية"
              : "Electricity Transmission Sector",
            description: lang
              ? "توسيع شبكة نقل الطاقة لربط دول الجوار وتحسين القدرة على النقل."
              : "Expanding the energy transmission network to connect neighboring countries and improve transport capacity.",
            link: "/transmission",
          },
          {
            imgSrc: "/images/iconimg/consumption.png",
            title: lang
              ? "الاستثمار في قطاع الانتاج"
              : "Investment in Generation Sector",
            description: lang
              ? "استقطاب الشركات للاستثمار في إنتاج الطاقة لتحقيق نمو مستدام."
              : "Attracting companies to invest in energy production for sustainable growth.",
            link: "/management",
          },
          {
            imgSrc: "/images/iconimg/eb2.png",
            title: lang
              ? "قطاع توزيع الطاقة الكهربائية"
              : "Electricity Distribution Sector",
            description: lang
              ? "استمرار برامج توزيع الطاقة وتحسين دقة القياسات."
              : "Continuing energy distribution programs and improving measurement accuracy.",
            link: "/emobility",
          },
        ].map((sector, index) => (   
          <Link
            href={sector.link}
            key={index}
            className="sector-item col-12 col-md-2 d-flex flex-column py-4 px-3"
            style={{ overflow: "hidden" }}
          >
            {/* صورة في صف منفصل */}
            <div className="image-row d-flex justify-content-center">
              <div className="col-10 align-self-center">
                <div className="responsiveIcon mb-4">
                  {" "}
                  <Image
                    src={sector.imgSrc}
                    alt="وصف للصورة"
                    width={2000}
                    height={2000}
                    className="responsiveImage align-content-center"
                  />
                </div>
              </div>
            </div>
            {/* عنوان ونصوص في صف منفصل */}
            <div
              className="text-row d-flex flex-column justify-content-center text-center"
              style={{ flexGrow: 1 }}
            >
              <h5 className="mb-2">{sector.title}</h5>
              <p className="description">{sector.description}</p>
            </div>
            {/* إضافة زر "اقرأ المزيد" تحت كل قسم */}
            <div className="d-flex justify-content-center mt-3">
              <Link href={sector.link} className="main-btn">
                {lang ? "اقرأ المزيد" : "Read more"}
              </Link>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
