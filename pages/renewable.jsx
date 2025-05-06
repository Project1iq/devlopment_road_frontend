import React from "react";
import { useRecoilState } from "recoil";
import { langState } from "@/atom/atom";
import Temp from "@/components/sectors/temp";

export default function DevelopmentPathExhibition() {
  const [lang, setLang] = useRecoilState(langState);
  const data = [
    {
      t_en: "Development Path Exhibition: Improving the Public Image as a Successful Investment Environment",
      t_ar: "معرض طريق تنمية: تحسين الصورة العامة كبيئة استثمارية ناجحة",
      d_ar: [
        "يعد معرض طريق تنمية أحد أبرز الفعاليات التي تسلط الضوء على الفرص الاستثمارية في العراق، حيث يمثل منصة استراتيجية للربط بين مختلف الشركات والمؤسسات الحكومية والخبراء المحليين والدوليين.",
        "يهدف المعرض إلى تعزيز الصورة العامة للعراق كوجهة استثمارية جاذبة، ويعمل على تعزيز الثقة في البيئة الاستثمارية من خلال عرض الحلول المبتكرة والتقنيات الحديثة التي تسهم في تطوير القطاعين العام والخاص.",
        "المعرض يعرض مشاريع مبتكرة في مجالات الطاقة، التكنولوجيا، والبنية التحتية، ويعزز فرص الشراكات بين القطاعين العام والخاص لتسريع التنمية المستدامة.",
        "الشفافية في الإجراءات الحكومية وتعزيز التعاون بين الشركات العالمية والمحلية هما من أبرز أهداف المعرض، ما يجعله منصة مثالية لتبادل المعرفة والخبرات.",
        "من خلال ورش العمل والمحاضرات، يمكن للمشاركين اكتساب مهارات جديدة وتوسيع آفاقهم في مجالات الاستثمار المختلفة.",
        "الهدف النهائي للمعرض هو تحسين البنية التحتية في العراق من خلال عرض تقنيات جديدة تحسن من كفاءة الأداء وتساهم في تحسين جودة الحياة للمواطنين.",
        "من خلال تعزيز التعاون الدولي، يعكس المعرض اهتمام العراق بتوسيع علاقاته الاستثمارية مع دول العالم، ويعزز التعاون بين الشركات العراقية والشركات العالمية.",
      ],
      d_en: [
        "The Development Path Exhibition is one of the most important events highlighting investment opportunities in Iraq, serving as a strategic platform to connect different companies, government entities, and local and international experts.",
        "The exhibition aims to improve the public image of Iraq as an attractive investment destination, boosting confidence in the investment environment through showcasing innovative solutions and modern technologies that contribute to the development of both public and private sectors.",
        "The exhibition showcases innovative projects in energy, technology, and infrastructure, enhancing public-private sector partnerships to accelerate sustainable development.",
        "Transparency in government procedures and fostering collaboration between global and local companies are among the exhibition’s key objectives, making it an ideal platform for knowledge exchange and experience sharing.",
        "Through workshops and lectures, participants can gain new skills and broaden their perspectives on various investment sectors.",
        "The ultimate goal of the exhibition is to improve Iraq’s infrastructure by presenting new technologies that enhance performance and contribute to the betterment of citizens' quality of life.",
        "By enhancing international cooperation, the exhibition reflects Iraq’s interest in expanding its investment relationships with the world, fostering partnerships between Iraqi and international companies.",
      ],
    }
  ];

  return (
    <div>
      <Temp
        title_ar={data[0].t_ar}
        title_en={data[0].t_en}
        lang={lang}
        desc_ar={lang ? data[0].d_ar : data[0].d_en}
      />
    </div>
  );
}
