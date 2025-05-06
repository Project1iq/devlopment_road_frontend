import React from "react";
import Image from "next/image";
import plants from "../public/images/index/plants.png";
import water from "../public/images/index/water.png";
import { useRecoilValue } from "recoil";
import { langState } from "@/atom/atom";
import Section1 from "@/components/index/Section1";
import Section2 from "@/components/index/Section2";
import Section3 from "@/components/index/Section3";
import Section4 from "@/components/index/Section4";

export default function Home() {
  const lang = useRecoilValue(langState);
  const data = {
    date_ar: "20-10 نيسان 2025",
    date_en: "20-10 April 2025",
    title_ar:
      "الاسبوع الزراعي السادس عشر لمعدات المكننة والانتاج الزراعي والحيواني – الصناعات الغذائية والتعبئة والتغليف",
    title_en:
      "The 16th Agricultural Week for Mechanization Equipment and Agricultural and Animal Production – Food Industries",
    description_ar:
      "أنضم إلى رواد القطاع الزراعي الدولي في الدورة (16) لأكبر معرض زراعي - غذائي في العراق (معرض االاسبوع الزراعي السادس عشر لمعدات المكننة والانتاج الزراعي والحيواني – الصناعات الغذائية والتعبئة والتغليف) للفترة 15-20 نيسان 2025. ",
    description_en:
      "Join the pioneers of the international agricultural sector in the 16th session of the largest agricultural and food exhibition in Iraq (The 16th Agricultural Week for Mechanization Equipment and Agricultural and Animal Production – Food Industries) for the period 15-20 April 2025.",
  };
  return (
    <div className=" index ">
      <Section1 data={data} />
      
        <Section2 />
        
      
      <Section4 />
    </div>
  );
}
