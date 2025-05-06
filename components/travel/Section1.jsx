import React, { useState } from "react";
import Image from "next/image";
import plants from "@/public/images/index/plants.png";
import water from "@/public/images/index/water.png";
import { useRecoilValue } from "recoil";
import { langState } from "@/atom/atom";

export default function Section1({ data }) {
  const lang = useRecoilValue(langState);

  const [formData, setFormData] = useState({});
  const handleChage = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const points = [
    {
      id: 1,
      content_ar:
        "سمة الدخول: جميع زوار جمهورية العراق بحاجة الى تأشيرة دخول سارية المفعول ويجب على العارضين الحصول عليها كتأشيرة عمل لغرض السفر الى الأراضي العراقية، حيث سيساعد المنظمون في الحصول على التأشيرات لجميع العارضين وتمنح التأشيرات من قبل شركتنا بعد توقيع عقد المشاركة.",
      content:
        "Entry Requirement: All visitors to the Republic of Iraq require a valid entry visa. Exhibitors must obtain a work visa for the purpose of traveling to Iraqi territories, where organizers will assist in obtaining visas for all exhibitors. Visas are granted by our company after signing the participation contract.",
    },
    {
      id: 2,
      content_ar:
        "الشحن: ارض المعرض منطقة كمركية يتم ادخال واخراج المعروضات إستناداً الى الأنظمة الكمركية النافذة ويدرج على كافة البضائع أسم المعرض وتاريخ اقامتهُ والموقع معرض بغداد الدولي. - من خلال وكيل الشحن الحصري لشركتنا شركة GEL.",
      content:
        "Shipping: The exhibition ground is a customs area where exhibits are entered and exited based on prevailing customs regulations. The exhibition name, its date, and the Baghdad International Fair location must be included on all goods. - Through our exclusive shipping agent, GEL Company.",
      sub_points: [
        {
          id: 1,
          content:
            "Location: Parallel Towers Bloc B, Floor 12 - Sin El Fil, Lebanon",
          content_ar:
            "الموقع: برجين متوازيين بلوك ب، الطابق 12 - سن الفيل، لبنان",
        },
        {
          id: 2,
          content: "Contact: +961 1 496059",
          content_ar: "الاتصال: +961 1 496059",
        },
        {
          id: 3,
          content: "Email: info@gel-eventlogistics.com",
          content_ar: "البريد الالكتروني: info@gel-eventlogistics.com",
        },
      ],
    },
    {
      id: 3,
      content_ar:
        "السكن: تم الاتفاق مع أهم الفنادق العاملة في العاصمة بغداد وبأسعار مدعومة لحجز الفنادق يرجى طلب قائمة الخدمات اللوجستية.",
      content:
        "Accommodation: An agreement has been made with the most prominent hotels operating in the capital Baghdad at subsidized prices. To book hotels, please request a list of logistical services.",
    },
  ];

  return (
    <>
      <section className="row section-1 mx-auto">
        <div action="" className="form-container">
          <div className="container">
            <div className="bg-image col-12 mb-4">
              <div className="allpic">
                <div className="title pt-5 d-flex align-content-center px-4 overflow-hidden mb-3 ">
                  <div className="line"> </div>

                  <h1 className=" px-2 textfade ">
                    {lang
                      ? "التأشيرات والسفر والفنادق"
                      : "Visas, Travel, and Hotels"}
                  </h1>
                </div>
                <div className="px-5 text-white w-75">
                  {" "}
                  <h6>
                    {lang
                      ? "يحتاج الزوار إلى تأشيرة دخول سارية، بينما يجب على العارضين الحصول على تأشيرة عمل. سيتم مساعدة العارضين في الحصول على التأشيرات بعد توقيع العقد. الشحن يتم عبر شركة GEL، وتتوفر فنادق بأسعار مدعومة للحجز في بغداد."
                      : "Visitors need a valid entry visa, while exhibitors must obtain a work visa. Exhibitors will be assisted in obtaining visas after signing the contract. Shipping is handled by GEL Company, and discounted hotel accommodations are available for booking in Baghdad."}
                  </h6>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h2 className="main-text">
                  {lang
                    ? "معلومات عن التأشيرات والسفر والفنادق"
                    : "Information about visas, travel, and hotels"}
                </h2>
                <div>
                  <ul className="px-3">
                    {points.map((point) => (
                      <li key={point.id}>
                        <p className="point mb-0">
                          {lang
                            ? point.content_ar.split(":")[0]
                            : point.content.split(":")[0]}
                          :{" "}
                          <span>
                            {lang
                              ? point.content_ar.split(":")[1]
                              : point.content.split(":")[1]}
                          </span>
                        </p>
                        {point.sub_points && (
                          <ol className="my-2 px-md-4 px-2">
                            {point.sub_points.map((sub_point) => (
                              <li key={sub_point.id}>
                                <p className="point mb-0">
                                  {lang
                                    ? sub_point.content_ar.split(":")[0]
                                    : sub_point.content.split(":")[0]}
                                  :{" "}
                                  <span
                                    dir={
                                      sub_point.id === 2 || sub_point.id === 3
                                        ? "ltr"
                                        : lang
                                        ? "rtl"
                                        : "ltr"
                                    }
                                  >
                                    {lang
                                      ? sub_point.content_ar.split(":")[1]
                                      : sub_point.content.split(":")[1]}
                                  </span>
                                </p>
                              </li>
                            ))}
                          </ol>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
