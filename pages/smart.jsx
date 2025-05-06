import React from "react";
import { useRecoilState } from "recoil";
import { langState } from "@/atom/atom";
import Temp from "@/components/sectors/temp";

export default function SmartSolutions() {
  const [lang, setLang] = useRecoilState(langState);
  const data = [
    {
      t_en: "Smart Solutions Sector",
      t_ar: "قطاع الحلول الذكية",
      d_ar1: `إن التحول الرقمي يشكل جزءاً لا يتجزأ من الحياة اليومية، حيث شق طريقه إلى كل قطاع بسرعة، ولا يشكل مجال الطاقة استثناءً. مع تبني المزيد من قطاعات الاستخدام النهائي للتقنيات الرقمية، فإن التأثير المرتجع على كفاءة الطاقة أصبح بالغ الأهمية.`,
      d_ar2: `لقد تحول قطاع النقل إلى بنية تحتية أكثر ذكاءً واتصالاً، مع حلول جديدة مثل الأتمتة ومشاركة الرحلات التي تسهم في تقليل استهلاك الطاقة إلى النصف.`,
      d_ar3: `لقد أثبتت الهياكل الذكية أن التحول الرقمي قادر على خفض استهلاك الطاقة بنحو 15% من خلال استخدام البيانات في الوقت الفعلي لتحسين الكفاءة التشغيلية. حيث تستخدم أنظمة الإضاءة الذكية وأجهزة ضبط الحرارة التكنولوجيا التنبؤية لتصور احتياجات المستخدم وإنشاء نظام متصل يتم فيه تقليل هدر الطاقة.`,
      d_ar4: `إن أكبر الصناعات التي قد تستفيد من تبني التقنيات الذكية هي صناعة موردي الطاقة. فباستخدام التقنيات الذكية مثل أجهزة الاستشعار الذكية وتحليلات البيانات، لا يتم تقليل تكاليف الإنتاج فقط، بل يمكن أيضاً التنبؤ بفشل المعدات وبالتالي تحسين صحة وسلامة العمال.`,
      d_ar5: `في معرض ومؤتمر طاقة العراق الدولي العاشر IEE، يتم اكتشاف كيفية مساعدة الحلول الذكية في توفير ملايين الدولارات على المدى الطويل وكيف أصبحت الآن عامل تمكين رئيسي في الانتقال إلى نظام طاقة منخفض الكربون.`,
      d_en1: `Digital transformation is now an integral part of daily life, rapidly entering every sector, including the energy sector. As more and more end-use sectors adopt digital technologies, the impact on energy efficiency becomes crucial.`,
      d_en2: `The transportation sector has transformed into a smarter and more connected infrastructure, with new solutions like automation and ride-sharing that help reduce energy consumption by half.`,
      d_en3: `Smart structures have proven that digital transformation can reduce energy consumption by about 15% by using real-time data to optimize operational efficiency. Smart lighting systems and thermostats use predictive technology to anticipate user needs and create a connected system where energy waste is minimized.`,
      d_en4: `The largest industries that could benefit from adopting smart technologies are energy suppliers. Using smart technologies such as smart sensors and data analytics, it not only reduces production costs but also helps predict equipment failure, thus improving worker health and safety.`,
      d_en5: `At the 10th Iraq International Energy Exhibition and Conference (IEE), discover how smart solutions help save millions of dollars in the long run and how they have now become a key enabler in the transition to a low-carbon energy system.`,
      d_ar6: `التوجه لمبادرة التصنيع الوطني التي تنفذها الوزارة حالياً بعد ان تم افتتاح جناح وزارة الكهرباء على أرض معرض بغداد الدولي منذ شهر كانون الأول 2014. وقد تم عرض المواد الاحتياطية التي تحتاجها الوزارة في قطاعاتها الثلاثة، ويهدف هذا المشروع إلى زيادة الإنتاج المحلي وتقوية الاقتصاد الوطني، بالإضافة إلى إعادة إحياء القطاع الصناعي العراقي ودعم خطوطه الإنتاجية.`,
      d_ar7: `وقد أبرمت الوزارة ست وجبات من عقود التصنيع الوطني لتجهيزها بالآلات الاحتياطية بأقل من الأسعار المستوردة بنسبة تصل إلى (45%)، مما وفر للوزارة مبالغ وصلت إلى 60 مليار دينار.`,
      d_en6: `The national manufacturing initiative, currently being implemented by the Ministry, was launched when the Ministry of Electricity's pavilion was opened at the Baghdad International Fair in December 2014. This initiative showcases the spare materials required by the Ministry for its three sectors, aiming to increase local production and strengthen the national economy, in addition to reviving the Iraqi industrial sector (both public and private) and supporting its production lines.`,
      d_en7: `The Ministry has signed six batches of national manufacturing contracts to supply spare tools at prices up to 45% lower than imported ones, saving the Ministry approximately 60 billion dinars.`,
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
