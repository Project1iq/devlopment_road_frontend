import React from "react";
import { useRecoilState } from "recoil";
import { langState } from "@/atom/atom";
import Temp from "@/components/sectors/temp";

export default function DevelopmentPathExhibition() {
  const [lang, setLang] = useRecoilState(langState);
  const data = [
    {
      t_en: "Development Path Exhibition: Attracting Foreign Investments",
      t_ar: "معرض طريق التنمية: جذب استثمارات أجنبية",
      d_ar: [
        "معرض طريق التنمية يعد منصة رئيسية لجذب الاستثمارات الأجنبية إلى العراق، حيث يساهم في عرض الفرص المتاحة في مختلف المجالات الاقتصادية والصناعية. يسعى المعرض إلى تعزيز التعاون الدولي بين المستثمرين المحليين والأجانب، وفتح آفاق جديدة للشراكات الاقتصادية.",
        "يهدف المعرض إلى تحفيز الاقتصاد المحلي من خلال تقديم فرص استثمارية مبتكرة، وتنمية القطاعات الحيوية التي تحتاج إلى دعم خارجي. يشمل المعرض لقاءات مع المستثمرين، وورش عمل، وحوارات بين الخبراء حول كيفية جذب الاستثمارات المستدامة وتوفير بيئة أعمال ملائمة.",
        "من خلال هذا الحدث، سيتم التركيز على تبادل الخبرات بين الأطراف المختلفة، مما يعزز من فرص التعاون المشترك وتحقيق التنمية الاقتصادية المستدامة. المعرض يمثل فرصة حقيقية للالتقاء مع ممثلين من مختلف القطاعات والصناعات العالمية."
      ],
      d_en: [
        "The Development Path Exhibition serves as a major platform for attracting foreign investments to Iraq, showcasing available opportunities in various economic and industrial fields. The exhibition aims to enhance international collaboration between local and foreign investors, opening new horizons for economic partnerships.",
        "The exhibition aims to stimulate the local economy by offering innovative investment opportunities, supporting vital sectors in need of external assistance. The event includes meetings with investors, workshops, and expert discussions on how to attract sustainable investments and provide a conducive business environment.",
        "Through this event, the focus will be on exchanging experiences among various parties, enhancing opportunities for joint collaboration and achieving sustainable economic development. The exhibition represents a true opportunity to connect with representatives from diverse global industries."
      ]
    }
  ];

  return (
    <Temp
      title_ar={data[0].t_ar}
      title_en={data[0].t_en}
      lang={lang}
      desc_ar={lang ? data[0].d_ar : data[0].d_en}
    />
  );
}
