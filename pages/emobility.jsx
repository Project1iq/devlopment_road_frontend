import React from "react";
import { useRecoilState } from "recoil";
import { langState } from "@/atom/atom";
import Temp from "@/components/sectors/temp";

export default function Transmission() {
  const [lang, setLang] = useRecoilState(langState);
  const data = [
    {
      t_en: "The Ministry's Plan for the Electric Power Transmission Sector",
      t_ar: "خطة الوزارة لقطاع النقل الكهربائي",
      d_ar1: `تتضمن خطة الوزارة لقطاع النقل الكهربائي العديد من المشاريع المهمة التي تهدف إلى تحسين شبكة نقل الطاقة وتعزيز كفاءتها التشغيلية. من بين هذه المشاريع، هناك مشاريع شبكات ومحطات نقل الطاقة التي تسعى لتوسيع شبكة النقل وزيادة قدرتها الإنتاجية. `,
      d_ar2: `كما تشمل الخطة استملاك الأراضي وحق المرور لإنشاء خطوط النقل وفقًا لقانون الوزارة، إضافة إلى مشاريع الربط مع دول الجوار لتعزيز التعاون الإقليمي في قطاع الطاقة. هذه المشاريع تساهم بشكل كبير في فك الاختناقات وتوسيع سعات الإنتاج لضمان استمرارية إمدادات الطاقة.`,
      d_ar3: `من جهة أخرى، تهدف الخطة إلى تقوية الشبكة الوطنية وزيادة مرونة النقل، مما يسهم في زيادة استمرارية المنظومة الكهربائية بشكل عام. كما يتم استخدام الأسلاك الحرارية لزيادة معادلات نقل الطاقة الكهربائية وتحقيق كفاءة أكبر في الشبكة.`,
      d_ar4: `تتضمن الخطة أيضًا تنفيذ منظومات حماية لأبراج نقل الطاقة ومراقبة وتسجيل كميات الطاقة المنقولة لضمان توصيل الطاقة بشكل آمن وفعال. كما تسعى الوزارة إلى تحسين برامج كفاءة الطاقة الرقمية من خلال استخدام حلول التكنولوجيا الحديثة لتحسين إدارة الطاقة.`,
      d_ar5: `بالإضافة إلى ذلك، هناك تركيز كبير على تطوير منظومة السيطرة الوطنية لزيادة سعات النقل وتقليل إجراءات الاستملاك إلى الحد الأدنى. هذا سيؤدي إلى تقليل الخسائر الفنية وغير الفنية وتحسين كفاءة الشبكة.`,
      d_ar6: `كما تشمل الخطة ضمان اتاحة تصريف الأحمال وتوفير موثوقية المنظومة الكهربائية. يتم ضبط إجراءات بيع وشراء الطاقة بين قطاعي الإنتاج والنقل من جهة والتوزيع من جهة أخرى لضمان استقرار الشبكة.`,
      d_ar7: `وأخيرًا، يتم التركيز على السيطرة على التردد والفولتية لضمان جودة وتوزيع الطاقة بشكل مستمر ودون انقطاع.`,

      d_en1: `The Ministry's plan for the electric power transmission sector includes several key projects aimed at improving the energy transmission network and enhancing its operational efficiency. Among these projects are power transmission network and substation projects designed to expand the transmission network and increase its production capacity.`,
      d_en2: `The plan also includes land acquisition and easement rights for the construction of transmission lines in accordance with the ministry’s regulations, as well as cross-border interconnection projects with neighboring countries to enhance regional cooperation in the energy sector. These projects help relieve bottlenecks and expand production capacities to ensure continuous energy supply.`,
      d_en3: `On the other hand, the plan aims to strengthen the national grid and increase transmission flexibility, contributing to enhanced reliability and sustainability of the electrical system. Thermal wires are also being used to increase the efficiency of electricity transmission and improve the network's overall performance.`,
      d_en4: `The plan also includes the implementation of protection systems for power transmission towers and the monitoring and recording of energy quantities transmitted to ensure safe and efficient energy delivery. Additionally, the ministry is enhancing digital energy efficiency programs by utilizing modern technological solutions to improve energy management.`,
      d_en5: `Furthermore, there is a significant focus on developing the national control system to increase transmission capacities while minimizing land acquisition procedures. This will reduce technical and non-technical losses, enhancing the overall efficiency of the grid.`,
      d_en6: `The plan also aims to ensure the availability of load dispatching and the reliability of the electrical system. Energy trading between the production, transmission, and distribution sectors is monitored to ensure network stability.`,
      d_en7: `Lastly, there is an emphasis on controlling frequency and voltage to ensure consistent and high-quality energy distribution without interruption.`,
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
      desc_ar5={data[0].d_ar5}
      desc_ar6={data[0].d_ar6}
      desc_ar7={data[0].d_ar7}
      desc_en1={data[0].d_en1}
      desc_en2={data[0].d_en2}
      desc_en3={data[0].d_en3}
      desc_en4={data[0].d_en4}
      desc_en5={data[0].d_en5}
      desc_en6={data[0].d_en6}
      desc_en7={data[0].d_en7}
      lang={lang}
    />
  );
}
