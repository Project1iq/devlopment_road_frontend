import React from "react";
import { useRecoilValue } from "recoil";
import { langState } from "@/atom/atom";
import Temp from "@/components/sectors/temp";

export default function Benf() {
  const lang = useRecoilValue(langState);

  const data = [
    {
      t_en: "Why Participate?",
      t_ar: "لماذا المشاركة؟",
      d_ar: `
<div class="benefits-content">
  <h3>منصة للتعاون وتبادل الخبرات</h3>
  <div class="custom-list">
    <p>أحدث التقنيات في البنية التحتية والإنشاءات</p>
    <p>حلول مستدامة وتكنولوجيا متطورة في قطاع الطاقة والمرافق</p>
    <p>أنظمة مبتكرة في النقل والخدمات اللوجستية</p>
    <p>فرص استثمارية واعدة وتقنيات مالية حديثة</p>
  </div>

  <h3>عرض الابتكارات</h3>
  <div class="custom-list">
    <p>لقاء مع الشركات الرائدة محليًا وعالميًا</p>
    <p>بناء شراكات استراتيجية مع مستثمرين وخبراء من مختلف المجالات</p>
  </div>

  <h3>فرص للتواصل</h3>
  <div class="custom-list">
    <p>ورش عمل وحلقات نقاشية يقدمها خبراء حول الاتجاهات المستقبلية لكل قطاع</p>
    <p>مناقشات حول التحول الاقتصادي واللوجستي في العراق والشرق الأوسط</p>
  </div>

  <h3>جلسات علمية وعملية</h3>
  <div class="custom-list">
    <p>اكتشاف آفاق النمو وفتح أسواق جديدة</p>
    <p>تعزيز موقع العراق كبوابة اقتصادية رئيسية في المنطقة</p>
  </div>
</div>
      `,
      d_en: `
<div class="benefits-content">
  <h3>A Platform for Collaboration & Knowledge Exchange</h3>
  <div class="custom-list">
    <p>Cutting-edge technologies in infrastructure and construction</p>
    <p>Sustainable solutions and advanced technologies in energy and utilities</p>
    <p>Innovative systems in transportation and logistics</p>
    <p>Promising investment opportunities and modern financial technologies</p>
  </div>

  <h3>Showcasing Innovation</h3>
  <div class="custom-list">
    <p>Meetings with leading local and international companies</p>
    <p>Building strategic partnerships with investors and experts from diverse fields</p>
  </div>

  <h3>Networking Opportunities</h3>
  <div class="custom-list">
    <p>Workshops and panel discussions by experts on future trends in each sector</p>
    <p>Discussions on economic and logistics transformation in Iraq and the Middle East</p>
  </div>

  <h3>Scientific & Practical Sessions</h3>
  <div class="custom-list">
    <p>Exploring growth prospects and unlocking new markets</p>
    <p>Enhancing Iraq’s position as a key economic gateway in the region</p>
  </div>
</div>
      `,
    },
  ];

  return (
    <Temp
      title_ar={data[0].t_ar}
      title_en={data[0].t_en}
      desc_ar={data[0].d_ar}
      desc_en={data[0].d_en}
      lang={lang}
    />
  );
}
