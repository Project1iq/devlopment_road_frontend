import React from "react";
import { useRecoilState } from "recoil";
import { langState } from "@/atom/atom";
import Temp from "@/components/sectors/temp";

export default function Distribution() {
  const [lang, setLang] = useRecoilState(langState);
  const data = [
    {
      t_en: "The Ministry's Plan for the Electric Power Distribution Sector",
      t_ar: "خطة الوزارة لقطاع التوزيع الكهربائي",
      d_ar1: `تتضمن خطة الوزارة لقطاع التوزيع الكهربائي العديد من المشاريع الحيوية التي تهدف إلى تحسين شبكات ومحطات التوزيع وزيادة كفاءتها. من بين هذه المشاريع، هناك مشاريع لفك الاختناقات وكهربة الأحياء الجديدة.`,
      d_ar2: `كما تشمل الخطة البدء الفوري في تركيب المقاييس الإلكترونية أو مسبقة الدفع للمشتركين غير المسجلين في الشبكة، فضلاً عن استمرار برمجة ساعات التجهيز بشكل تدريجي لحين تلبية كامل الطلب.`,
      d_ar3: `الوزارة تلتزم ببرامج زمنية واضحة لتقليل الخسائر غير الفنية (الإدارية) وتحقيق المساءلة حول توقيتات ونتائج هذه البرامج. هذا يشمل أيضاً الجباية الإلكترونية والجباية الملزمة من خلال إجراءات المعاملات الورقية.`,
      d_ar4: `بالإضافة إلى ذلك، تعمل الوزارة على إدخال جميع أصناف المستهلكين غير النظاميين وتسجيلهم ضمن الشبكة، مع إصدار قوائم الكهرباء الملائمة قانونياً. كما سيتم معالجة حالات تجريف الأراضي والربط المشترك مع الشبكة النظامية.`,
      d_ar5: `من بين المشاريع الأخرى، معالجة حالات الانشطار في الوحدات السكنية والكلف المترتبة عليها، وضبط إجراءات جباية واستلام وترحيل المبالغ ضمن توقيتات محددة.`,
      d_ar6: `تهدف الوزارة إلى ضمان زيادة معدلات قراءة الطاقة المستهلكة بشكل تدريجي، للوصول إلى 90% في عام 2025، بالإضافة إلى زيادة معدلات جباية الطاقة المقروءة لتصل إلى 95% في نفس العام.`,
      d_ar7: `تتضمن الخطة أيضاً برامج كفاءة الطاقة الرقمية، ومنظومات مراقبة وقياس الطاقة المستلمة والمستهلكة على مستوى القطاعات. كما يتم استثمار الموارد البشرية في قطاع التوزيع لأغراض نشاط قراءة وجباية استهلاك الطاقة، ومنح الحوافز لتحقيق الأهداف لتقليل الخسائر الإدارية وتعظيم موارد الجباية.`,
      d_ar8: `تتضمن الخطة أيضاً برامج ومناهج الترشيد الدراسية والإعلامية، مع الالتزام بالترشيد التدرجي من خلال مقترحات تعديل تعرفة الاستهلاك العالي ودعم ذوي الدخل المتوسط والشرائح الفقيرة.`,
      d_ar9: `وأخيراً، تهدف الوزارة إلى توسيع نشاط الاستثمار من خلال تأهيل وصيانة وقراءة وجباية استهلاك الطاقة بواسطة شركات رصينة تخضع إلى تقييم وتحري شفاف، مع أخذ التعهدات التي تضمن كفاءة الأداء، مما يساهم في خفض الكلف الاستثمارية المطلوبة من الموازنة العامة للدولة لتطوير قطاع التوزيع.`,
      
      d_en1: `The Ministry's plan for the electric power distribution sector includes several key projects aimed at improving distribution networks and substations, and enhancing their efficiency. Among these projects are efforts to relieve bottlenecks and electrify new neighborhoods.`,
      d_en2: `The plan also includes the immediate installation of electronic or prepaid meters for customers who are not registered in the network, as well as gradually programming supply hours until full demand is met.`,
      d_en3: `The ministry is committed to clear timelines for reducing non-technical (administrative) losses and ensuring accountability for the timing and results of these programs. This includes electronic billing and mandatory billing procedures through paper transactions.`,
      d_en4: `Furthermore, the plan involves registering all unregulated consumers into the network and issuing legally compliant electricity bills. Issues related to land clearing and the interconnection of illegal consumers with the regulated network are also addressed.`,
      d_en5: `The plan also targets addressing issues related to splitting residential units and the associated costs, along with controlling billing and payment procedures within specific timelines.`,
      d_en6: `The ministry aims to gradually increase the reading of consumed energy to reach 90% by 2025, and improve the collection rate of measured energy to reach 95% in the same year.`,
      d_en7: `Additionally, the plan includes digital energy efficiency programs and monitoring systems for both received and consumed energy at the sector level. Human resources in the distribution sector are also being invested in to enhance energy consumption reading and billing activities, with incentives aimed at reducing administrative losses and maximizing collection resources.`,
      d_en8: `The plan further includes educational and media programs for energy conservation, with a commitment to gradual energy consumption reduction through proposals for adjusting high consumption tariffs and supporting middle-income and low-income segments.`,
      d_en9: `Lastly, the ministry plans to expand investment activities to rehabilitate, maintain, read, and bill for energy consumption through reputable companies that undergo transparent evaluation, ensuring performance efficiency. This will help reduce the investment costs required from the state's general budget to develop the distribution sector.`,
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
      desc_ar8={data[0].d_ar8}
      desc_ar9={data[0].d_ar9}
      desc_en1={data[0].d_en1}
      desc_en2={data[0].d_en2}
      desc_en3={data[0].d_en3}
      desc_en4={data[0].d_en4}
      desc_en5={data[0].d_en5}
      desc_en6={data[0].d_en6}
      desc_en7={data[0].d_en7}
      desc_en8={data[0].d_en8}
      desc_en9={data[0].d_en9}
      lang={lang}
    />
  );
}
