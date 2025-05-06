import React from "react";
import { useRecoilState } from "recoil";
import { langState } from "@/atom/atom";
import Temp from "@/components/sectors/temp";

export default function RenewableEnergy() {
  const [lang, setLang] = useRecoilState(langState);
  const data = [
    {
      t_en: "Renewable and Clean Energy",
      t_ar: "الطاقة المتجددة والنظیفة",
      d_ar1: `مع استمرار نمو صناعة الطاقة المتجددة في العالم، نفخر بتقديم البوابة المثالية لأعمال الطاقة الشمسية من خلال معرض ومؤتمر طاقة العراق السادس الذي سيُعقد في العراق من 22 إلى 24 نيسان 2019. هذا المعرض سيجمع رواد الصناعة والحكومات والمصنعين والموردين والتجار والمقاولين والشركاء من جميع أنحاء العالم. كما أن وزارة الكهرباء سترعى أكبر حدث في مجال التكنولوجيا المستدامة والمتجددة في المنطقة.`,
      d_ar2: `المعرض سيسلط الضوء على أحدث الابتكارات في مجال الطاقة الشمسية والطاقة المستدامة، حيث سيتم توفير منصة فريدة لإقامة شراكات بين القطاعين العام والخاص لتطوير حلول مبتكرة. سيكون معرض ومؤتمر طاقة العراق السادس أيضاً منصة رئيسية للقطاعين العام والخاص لإقامة الصفقات وبناء الشراكات ومراجعة أحدث تقنيات الطاقة الشمسية والتعرف على المشاريع الحالية والمستقبلية في المنطقة، بالإضافة إلى استكشاف الفرص للمشاركة في مشاريع الطاقة الشمسية وبرامجها.`,
      d_ar5: `الاختصاصات في هذا المجال تشمل العديد من الشركات والمصنعين المتخصصين في إنتاج الوحدات النمطية وخلية الطاقة الشمسية، بالإضافة إلى تقنيات الإنتاج الحديثة، والمواد والملحقات المرتبطة بتلك التقنيات. يتضمن أيضاً موزعي وحدات الطاقة الشمسية (PV)، مزودي الأنظمة، وإدارة الطاقة، إلى جانب الموردين المختلفين المثبتين للنظام، وكذلك مطوري المشاريع مثل مشاريع IPP. كما تشمل المجالات الابتكار في الحلول التقنية والاستشارات الهندسية، إضافة إلى شركات الأبحاث والتطوير التي تساهم في دمج الأنظمة المتقدمة وتطوير حلول تحلية المياه باستخدام الطاقة الشمسية.`,
      d_en1: `The renewable energy industry continues to grow worldwide, and we are proud to offer the ideal gateway for solar energy businesses through the 6th Iraq Energy Exhibition and Conference, which will take place in Iraq from April 22 to 24, 2019. This exhibition will bring together industry leaders, governments, manufacturers, suppliers, traders, contractors, and partners from all over the world. The Ministry of Electricity will sponsor the largest event in sustainable and renewable technology in the region.`,
      d_en2: `The exhibition will highlight the latest innovations in solar energy and sustainable energy, providing a unique platform for public and private sector partnerships to develop innovative solutions. The 6th Iraq Energy Exhibition and Conference will also serve as a key platform for the public and private sectors to make deals, build partnerships, review the latest solar energy technologies, explore current and future projects in the region, and discover opportunities to participate in solar energy projects and programs.`,
      d_en3: `Specializations in this field include companies and manufacturers specializing in the production of solar modules and cells, as well as advanced production technologies and materials. The sector also involves solar energy unit distributors (PV), system providers, energy management, system installers, and developers of Independent Power Projects (IPP). Additionally, there is innovation in technical solutions, engineering consultancy, and research and development companies contributing to system integration and the development of solar desalination solutions.`,
      d_en4: `Moreover, the sector involves a variety of key players such as solar parks, sustainable infrastructure developers, and companies dedicated to carbon emission control and green transport solutions. This is an exciting time for the solar industry as it offers numerous opportunities to foster growth, sustainability, and environmental responsibility across all sectors of society.`,
    },
  ];

  return (
    <Temp
      title_ar={data[0].t_ar}
      title_en={data[0].t_en}
      desc_ar1={data[0].d_ar1}
      desc_ar2={data[0].d_ar2}
      desc_ar5={data[0].d_ar5}
      desc_en1={data[0].d_en1}
      desc_en2={data[0].d_en2}
      desc_en3={data[0].d_en3}
      desc_en4={data[0].d_en4}
      lang={lang}
    />
  );
}
