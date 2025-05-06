import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { langState } from "@/atom/atom";
import Temp from "@/components/sectors/temp";

export default function Transmission() {
  const [lang, setLang] = useRecoilState(langState);
  const data = [
    {
      t_en: "The Ministry's Plan for the Electric Power Generation Sector",
      t_ar: "خطة الوزارة لقطاع إنتاج الطاقة الكهربائية",
      d_ar1: `خطة الوزارة لقطاع إنتاج الطاقة الكهربائية تشمل عدة مشاريع أساسية تهدف إلى تحسين القدرة الإنتاجية والكفاءة التشغيلية لمحطات الكهرباء. من بين هذه المشاريع، هناك مشاريع المحطات المركبة التي تسعى إلى تعزيز الإنتاجية باستخدام تكنولوجيا المحطات المدمجة.`,
      d_ar2: `كما تشمل المشاريع الكبرى في قطاع الطاقة الشمسية، حيث يتم تكامل هذه المشاريع مع الشبكة الوطنية، بالإضافة إلى توفير ضمانات للمستثمرين لضمان استمرارية التمويل. كما تسعى الوزارة إلى إعادة تأهيل المحطات المتوقفة وزيادة قدرتها الإنتاجية.`,
      d_ar3: `بالإضافة إلى صيانة المحطات العاملة بشكل دوري لضمان استمرارية عملها بأعلى كفاءة. في هذا السياق، تعمل الوزارة أيضًا على تحسين الكفاءة الحرارية للمحطات عبر استخدام تقنيات حديثة تهدف إلى تقليل التكاليف وزيادة الكفاءة، بالإضافة إلى مشاريع الغاز المصاحب والحر.`,
      d_ar4: `كما يتم توسيع شبكة أنابيب الوقود، خاصة الغاز، لتغطية المناطق الجديدة وضمان إمدادات الطاقة المستدامة. وعلاوة على ذلك، تهدف الوزارة إلى استيراد الغاز المسال على المدى القريب والبعيد لتوفير الوقود الضروري لزيادة القدرة الإنتاجية.`,
      d_ar5: `من جانب آخر، تعمل الوزارة على ضمان توافر الوقود السائل بكميات كافية وبالمواصفات المطلوبة من خلال التعاون مع الموردين المحليين والدوليين. وفيما يتعلق بكفاءة الطاقة، تم إطلاق برامج رقمية تركز على تحسين إدارة الطاقة باستخدام حلول التكنولوجيا الحديثة.`,
      d_ar6: `بالإضافة إلى ذلك، يتم تدريب وتطوير إمكانيات الموارد البشرية لضمان أن الفرق العاملة في تشغيل وصيانة المحطات تتمتع بالمهارات اللازمة للعمل بكفاءة. كما يتم مراقبة قراءات كميات الطاقة المنتجة من قطاع النقل باستخدام أنظمة ذكية لضمان توزيع الطاقة بشكل فعال.`,
      d_ar7: `أخيرًا، تسعى الوزارة إلى تقليل كلفة الإنتاج من خلال تخفيض الدعم الحكومي، وزيادة المرونة في تعديل التعرفات، مع دعم الشرائح الفقيرة لتلبية احتياجاتهم.`,

      d_en1: `The Ministry's plan for the electric power generation sector includes several key projects aimed at improving production capacity and operational efficiency of power plants. Among these projects are the combined cycle power plants, which seek to enhance production using integrated power plant technologies.`,
      d_en2: `Major projects in the solar energy sector are also included, with integration into the national grid and investor guarantees to ensure sustained funding. The ministry is also working on rehabilitating inactive power plants and increasing their productivity.`,
      d_en3: `Additionally, the ministry is conducting regular maintenance on operating plants to ensure continuous operation at maximum efficiency. The ministry is working on improving the thermal efficiency of power plants by using modern techniques to reduce costs and increase efficiency.`,
      d_en4: `Associated and free gas projects are also underway, contributing to enhanced power generation. The fuel pipeline network, especially gas pipelines, is being expanded to cover new areas and ensure sustainable energy supply.`,
      d_en5: `Moreover, the ministry aims to import liquefied natural gas in both the short and long terms to provide the necessary fuel for increasing production capacity. Furthermore, the ministry ensures the supply of liquid fuel in the required quantities and specifications by collaborating with both local and international suppliers.`,
      d_en6: `Regarding energy efficiency, digital programs are being launched to improve energy management through modern technological solutions. The ministry focuses on training and developing human resources to ensure that the operational and maintenance teams are equipped with the necessary skills for effective operations.`,
      d_en7: `Energy production readings from the transport sector are also monitored using smart systems to ensure effective energy distribution. Lastly, the ministry aims to reduce production costs by decreasing government subsidies and increasing flexibility in tariff adjustments, while supporting low-income segments to meet their needs.`,
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
