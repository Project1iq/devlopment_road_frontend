import React from "react";
import { useRecoilValue } from "recoil";
import { langState } from "@/atom/atom";
import Temp from "@/components/sectors/temp";

export default function Benf() {
  const lang = useRecoilValue(langState);
  const data = [
    {
      t_en: "Benefits of Participation",
      t_ar: "فوائد المشاركة",
      d_ar1:
        "يعتبر المعرض فرصة لا مثيل لها للوصول المباشر إلى سوق الطاقة العراقي، وهو أكبر أسواق المنطقة وأسرعها نمواً. يتمتع هذا السوق بفرص متعددة للنمو، حيث تتوفر العديد من المشاريع الجديدة في قطاع الطاقة والتي تقدم فرصاً تجارية واستثمارية كبيرة. يمكن للشركات التي تشارك في المعرض استكشاف هذه الفرص وتعزيز وجودها في السوق العراقي.",
      d_ar2:
        "من خلال المشاركة في المعرض، يمكن لك أن تلتقي بالمسؤولين وأصحاب القرار في القطاعين العام والخاص. توفر هذه الفرصة بيئة مثالية لإجراء الاجتماعات المباشرة، حيث يمكن التفاوض على العروض والاتفاقيات مع الأطراف المعنية بشكل مباشر، مما يسهل إتمام الصفقات والتعاون التجاري.",
      d_ar3:
        "يتيح المعرض للمشاركين فتح قنوات توزيع جديدة في سوق الطاقة العراقي، من خلال تعيين وكلاء وممثلين يعملون على توسيع انتشار العلامات التجارية. كما يمكن للزوار اكتشاف الحلول الجديدة التي تساعد في تحسين عمليات توزيع المنتجات والخدمات في السوق المحلي.",
      d_ar4:
        "كن جزءاً من حملة تسويق عالمية تهدف إلى تعزيز الوعي بعلامتك التجارية على نطاق أوسع. من خلال المعرض، يمكنك الاستفادة من منصات تسويقية مبتكرة تصل إلى جمهور كبير داخل وخارج العراق، مما يزيد من شهرة العلامة التجارية ويعزز موقعها في الأسواق الدولية.",
      d_ar5:
        "يعد المعرض منصة مثالية لإطلاق العلامات التجارية الجديدة، كما يوفر فرصة لتوسيع نطاق انتشار المنتجات والخدمات من خلال الوكلاء والموزعين المحليين والدوليين. تساهم هذه الفرص في بناء شبكة توزيع قوية تساهم في زيادة المبيعات والوصول إلى عملاء جدد في أسواق متعددة.",
      d_ar6:
        "يتيح المعرض فرصة للتواصل مع ممثلي الشركات العالمية وكبار المستثمرين والتجار. هذه الفئة من الزوار تعد مصدراً رئيسياً للإلهام والتعاون التجاري، مما يفتح الأفق أمام المشاركين للتعاون مع شركاء دوليين في مجالات مختلفة.",
      d_ar7:
        "من خلال حضور المعرض، ستتمكن من التفاعل مع شبكة واسعة من المهنيين في مجال الطاقة، مما يمنحك فرصاً لا مثيل لها لبناء علاقات عمل قوية وتوسيع نطاق تواصلك مع صانعي القرار في القطاعين العام والخاص. يمكن أن تساهم هذه الشبكات في فتح أفق التعاون طويل الأمد والمستدام.",
      d_en1:
        "The exhibition provides an unparalleled opportunity for direct access to the Iraqi energy market, the largest and fastest-growing market in the region. This market offers numerous growth opportunities, with many new projects in the energy sector that present significant business and investment prospects. Companies participating in the exhibition can explore these opportunities and strengthen their presence in the Iraqi market.",
      d_en2:
        "By participating in the exhibition, you can meet with decision-makers from both the public and private sectors. This opportunity provides an ideal environment for direct meetings, where offers and agreements can be negotiated with stakeholders, facilitating the completion of deals and business collaboration.",
      d_en3:
        "The exhibition allows participants to open new distribution channels in the Iraqi energy market by appointing agents and representatives who work on expanding the reach of brands. Visitors can also discover new solutions that help improve the distribution of products and services in the local market.",
      d_en4:
        "Be part of a global marketing campaign aimed at increasing awareness of your brand on a wider scale. Through the exhibition, you can take advantage of innovative marketing platforms that reach a large audience both inside and outside of Iraq, increasing the visibility of your brand and strengthening its position in international markets.",
      d_en5:
        "The exhibition serves as an ideal platform for launching new brands and offers an opportunity to expand the reach of products and services through local and international agents and distributors. These opportunities contribute to building a strong distribution network that drives sales and reaches new customers in multiple markets.",
      d_en6:
        "The exhibition provides an opportunity to network with representatives of global companies, major investors, and traders. This group of visitors is a primary source of inspiration and business collaboration, opening doors for participants to work with international partners across various sectors.",
      d_en7:
        "By attending the exhibition, you will be able to engage with a wide network of professionals in the energy sector, offering unmatched opportunities to build strong business relationships and expand your connections with decision-makers in both the public and private sectors. These networks can help create long-term and sustainable collaborations.",
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
