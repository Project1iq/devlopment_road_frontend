import React from "react";
import { useRecoilState } from "recoil";
import { langState } from "@/atom/atom";
import Temp from "@/components/sectors/temp";

export default function DevelopmentPathExhibition() {
  const [lang, setLang] = useRecoilState(langState);
  const data = [
    {
      t_en: "Development Path Exhibition: Supporting the Diversification of the Local Economy",
      t_ar: "معرض طريق التنمية: دعم تنويع الاقتصاد المحلي",
      d_ar: [
        "يعد معرض طريق التنمية منصة استراتيجية تركز على تعزيز الاقتصاد المحلي في العراق من خلال دعم التنوع الاقتصادي في مختلف القطاعات. يهدف المعرض إلى تقديم الفرص الاستثمارية التي تساهم في تطوير الصناعات المحلية، وتشجيع الابتكار، وجذب الاستثمارات العالمية. من خلال تقديم حلول مستدامة وتقديم رؤى جديدة في مجال الأعمال، يسعى المعرض إلى تحفيز التعاون بين القطاعين العام والخاص وتقديم بيئة مناسبة لتطوير المشاريع الناشئة. سيكون المعرض فرصة لعرض أحدث التقنيات والممارسات التي تدعم التنوع الاقتصادي وتعزز قدرة العراق على التكيف مع التحديات الاقتصادية المستقبلية."
      ],
      d_en: [
        "The Development Path Exhibition is a strategic platform that focuses on enhancing the local economy in Iraq by supporting the diversification of various sectors. The exhibition aims to present investment opportunities that contribute to the development of local industries, promote innovation, and attract global investments. By offering sustainable solutions and new insights into the business field, the exhibition seeks to encourage collaboration between the public and private sectors, providing a conducive environment for the development of emerging projects. The exhibition will be an opportunity to showcase the latest technologies and practices that support economic diversification and strengthen Iraq's ability to adapt to future economic challenges."
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
