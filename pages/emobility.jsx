import React from "react";
import { useRecoilState } from "recoil";
import { langState } from "@/atom/atom";
import Temp from "@/components/sectors/temp";

export default function Transmission() {
  const [lang, setLang] = useRecoilState(langState);
  const data = [
    {
      t_en: "Promoting the Development Path Project",
      t_ar: "الترويج عن مشروع طريق التنمية",
      d_ar1: `يهدف مشروع طريق التنمية إلى تعزيز البنية التحتية في العراق عبر تنفيذ مشروعات كبيرة في قطاع الطاقة والنقل، مما يسهم في تحسين قدرة العراق على جذب الاستثمارات الأجنبية وتحفيز النمو الاقتصادي. يشتمل المشروع على تحديث وتحسين شبكات الطاقة الكهربائية وتوسيع شبكة النقل البري والبحري لتعزيز التكامل الاقتصادي الإقليمي.`,
      
      d_en1: `The Development Path Project aims to enhance infrastructure in Iraq by implementing large-scale projects in the energy and transport sectors, contributing to improving Iraq's ability to attract foreign investments and stimulate economic growth. The project includes upgrading and improving electrical power networks and expanding the land and maritime transport networks to enhance regional economic integration.`,
    },
  ];

  return (
    <Temp
      title_ar={data[0].t_ar}
      title_en={data[0].t_en}
      desc_ar={data[0].d_ar1}
      desc_en={data[0].d_en1}
      lang={lang}
    />
  );
}
