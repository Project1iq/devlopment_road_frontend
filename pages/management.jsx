import React from "react";
import { useRecoilState } from "recoil";
import { langState } from "@/atom/atom";
import Temp from "@/components/sectors/temp";

export default function InternationalJobs() {
  const [lang, setLang] = useRecoilState(langState);
  const data = [
    {
      t_en: "Creating International Job Opportunities in the Path of Development Exhibition",
      t_ar: "خلق فرص عمل دولية في معرض طريق التنمية",
      d_ar: `يهدف معرض طريق التنمية إلى استعراض الفرص العديدة لخلق وظائف دولية في مختلف القطاعات، مع التركيز على جذب الاستثمارات وتوسيع سوق العمل. يعكس المعرض استراتيجية التنمية المستدامة التي تسعى إلى توفير بيئة حاضنة للابتكار والتعاون الدولي، مع فتح آفاق جديدة للتوظيف عبر شراكات عالمية تعزز من نمو الاقتصاد المحلي وتعزز فرص العمل على نطاق عالمي.`,
      d_en: `The Path of Development Exhibition aims to showcase numerous opportunities for creating international jobs across various sectors, with a focus on attracting investments and expanding the job market. The exhibition reflects a sustainable development strategy that seeks to provide an innovation-friendly environment and international collaboration, opening new employment opportunities through global partnerships that enhance local economic growth and create worldwide job opportunities.`,
    },
  ];

  return (
    <Temp
      title_ar={data[0].t_ar}
      title_en={data[0].t_en}
      desc_ar={data[0].d_ar}
      desc_en={data[0].d_en}
      lang={lang}
    />
  );
}
