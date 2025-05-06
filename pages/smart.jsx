import React from "react";
import { useRecoilState } from "recoil";
import { langState } from "@/atom/atom";
import Temp from "@/components/sectors/temp";

export default function SmartSolutions() {
  const [lang, setLang] = useRecoilState(langState);
  const data = [
    {
      "t_en": "Knowledge Exchange Between Participating Entities at the Development Path Exhibition",
      "t_ar": "تبادل المعرفة بين الجهات المشاركة في معرض طريق تنمية",
      "d_ar": [
        "إن المعارض مثل معرض طريق تنمية تمثل منصات هامة لتبادل المعرفة بين الجهات المشاركة، حيث تتيح الفرصة للمؤسسات لتبادل الأفكار والرؤى حول الحلول المبتكرة والفرص المستقبلية. هذا التبادل يعزز التعاون بين القطاعات المختلفة ويساهم في تطوير المشاريع التي تركز على التحول الرقمي والتكنولوجيا المستدامة.",
        "في هذا المعرض، يتم تسليط الضوء على كيف يمكن للجهات المشاركة تحقيق فوائد مشتركة من خلال الاستفادة من المعرفة التكنولوجية والتوجهات العالمية الحديثة. يشارك الخبراء في مجالات مختلفة مثل الطاقة المتجددة، الذكاء الاصطناعي، والحلول الذكية لمواجهة التحديات البيئية.",
        "التبادل المعرفي خلال المعرض يُمكن المشاركين من التعرف على التجارب الناجحة وكيفية تطبيق هذه المعرفة في أسواقهم المحلية والدولية، مما يعزز الابتكار ويحفز على النمو المستدام في القطاعين العام والخاص.",
        "من خلال مشاركتهم في الفعاليات والورشات، يمكن للجهات المشاركة تعزيز قدرتها على التعامل مع القضايا المتجددة، مثل إدارة الطاقة، وتحقيق الأهداف البيئية والتنموية على المدى الطويل.",
        "معرض طريق تنمية يعد منصة مثالية لتحقيق التعاون بين الشركات والجهات الحكومية، حيث يُمكن استكشاف حلول مبتكرة تساعد على تحسين الأداء وزيادة الكفاءة في مختلف المجالات.",
        "تسعى الجهات المشاركة إلى الاستفادة من الفرص التي يوفرها المعرض لتطوير استراتيجيات مستدامة قائمة على تبادل المعرفة وتطبيق أحدث التكنولوجيات المبتكرة في قطاعات الطاقة والنقل والصناعة."
      ],
      "d_en": [
        "Exhibitions like the Development Path Exhibition serve as crucial platforms for knowledge exchange among participating entities, providing opportunities for organizations to share ideas and insights on innovative solutions and future opportunities. This exchange fosters collaboration across different sectors and contributes to the development of projects focused on digital transformation and sustainable technology.",
        "At this exhibition, the spotlight is on how participating entities can achieve mutual benefits by leveraging technological knowledge and global trends. Experts from various fields, such as renewable energy, artificial intelligence, and smart solutions, share insights on tackling environmental challenges.",
        "The knowledge exchange at the exhibition enables participants to learn from successful experiences and apply this knowledge in their local and international markets, boosting innovation and driving sustainable growth in both the public and private sectors.",
        "By participating in events and workshops, entities can strengthen their ability to address emerging issues, such as energy management, and achieve long-term environmental and developmental goals.",
        "The Development Path Exhibition is an ideal platform for collaboration between companies and government entities, where innovative solutions are explored to enhance performance and increase efficiency across various sectors.",
        "Participating entities seek to capitalize on the opportunities provided by the exhibition to develop sustainable strategies based on knowledge exchange and the application of cutting-edge technologies in the energy, transportation, and industrial sectors."
      ]
    }
  ];

  return (
    <Temp
      title_ar={data[0].t_ar}
      title_en={data[0].t_en}
      lang={lang}
      desc_ar={data[0].d_ar}
      desc_en={data[0].d_en}
    />
  );
}
