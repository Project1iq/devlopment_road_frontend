import React from "react";
import Image from "next/image";
import plants from "../public/images/index/plants.png";
import water from "../public/images/index/water.png";
import { useRecoilValue } from "recoil";
import { langState } from "@/atom/atom";
import Section1 from "@/components/bookCare/Section1";

export default function BookCare() {
  const lang = useRecoilValue(langState);
  const data = {
    date_ar: "20-10 نيسان 2025",
    date_en: "20-10 April 2025",
    title_ar:
      "الاسبوع الزراعي السادس عشر لمعدات المكننة والانتاج الزراعي والحيواني الصناعات الغذائية",
    title_en:
      "The 16th Agricultural Week for Mechanization Equipment, Agricultural and Animal Production, and Food Industries",
    description_ar:
      "أنضم إلى رواد القطاع الزراعي الدولي في الدورة (16) لأكبر معرض زراعي - غذائي في العراق (معرض الاسبوع الزراعي السادس عشر لمعدات المكننة و الانتاج الزراعي و الحيواني – الصناعات) للفترة 15-20 نيسان 2025. ",
    description_en:
      "Join the pioneers of the international agricultural sector in the 16th session of the largest agricultural and food exhibition in Iraq (The 16th Agricultural Week for Mechanization Equipment, Agricultural and Animal Production, and Food Industries) for the period 15-20 April 2025.",
  };
  return (
    <div className=" bookCare ">
      <Section1 data={data} />
    </div>
  );
}
