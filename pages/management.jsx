import React from "react";
import { useRecoilState } from "recoil";
import { langState } from "@/atom/atom";
import Temp from "@/components/sectors/temp";

export default function Investment() {
  const [lang, setLang] = useRecoilState(langState);
  const data = [
    {
      t_en: "Investment in the Power Generation Sector",
      t_ar: "الاستثمار في قطاع الإنتاج",
      d_ar1: `وضعت وزارة الكهرباء آلية ومعايير جديدة لإستقطاب الشركات الاستثمارية الرصينة المحلية والدولية، للإستثمار في قطاعي (إنتاج الطاقة الكهربائية، وتوزيع الطاقة الكهربائية).`,

      d_ar2: `الاستثمار في قطاع الإنتاج يتطلب من الشركات الاستثمارية أن تكون ذات خبرة عالية في مجال صناعة الكهرباء. يجب أن تكون الشركة قد نفذت أعمالًا مشابهة لبناء محطات وفقًا لمواصفات وطلبات وزارة الكهرباء.`,
      d_ar3: `يجب على الشركات الاستثمارية أن تلتزم بتنفيذ المشاريع حسب المدة المحددة بموجب العقد المبرم، وتقديم نبذة عن أعمالها السابقة ومدى نجاحها في مشاريع مماثلة.`,
      d_ar4: `وبناءً على ما تقدم، تقوم الوزارة بالتأكد من رصانة هذه الشركات، لتفادي دخول الشركات الرديئة والوهمية عند إبرام العقود وتنفيذ المشاريع.`,

      d_en1: `The Ministry of Electricity has established new mechanisms and standards to attract credible local and international investment companies for investment in the power generation and distribution sectors.`,

      d_en2: `Investment in the Power Generation Sector requires investment companies to have extensive experience in the electricity industry. The company should have executed similar projects for building power plants according to the specifications and requirements of the Ministry of Electricity.`,
      d_en3: `The investment company must commit to completing the projects within the timeline specified in the signed contract, and provide a summary of its previous work and the success of its similar projects.`,
      d_en4: `Based on this, the Ministry ensures the credibility of these companies to avoid entering into contracts with low-quality or fake companies for project execution.`,
    },
  ];

  return (
    <Temp
      title_ar={data[0].t_ar}
      title_en={data[0].t_en}
      desc_ar1={data[0].d_ar1}
      desc_ar2={data[0].d_ar2}
      desc_ar3={data[0].d_ar3}
      desc_ar4={data[0].d_ar4}
      desc_en1={data[0].d_en1}
      desc_en2={data[0].d_en2}
      desc_en3={data[0].d_en3}
      desc_en4={data[0].d_en4}
      lang={lang}
    />
  );
}
