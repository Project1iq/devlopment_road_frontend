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
      content_ar: "بالخارج:",
      content: "Abroad:",
      sub_points: [
        {
          id: 1,
          content_ar:
            "لوحة الأعلانات في المواقع الرئيسية في انحاء العراق اكثر من 200 لوحة.",
          content:
            "Advertising billboards in key locations throughout Iraq more than 200 billboards.",
        },
        {
          id: 2,
          content_ar: "اعلانات الراديو في المحطات الرئيسية.",
          content: "Radio advertisements on major stations.",
        },
        {
          id: 3,
          content_ar:
            "إعلانات الوسائط القائمة على المكان لأستهداف الجمهور المختص.",
          content: "Location-based media ads to target the relevant audience.",
        },
        {
          id: 4,
          content_ar:
            "وضع الأعلان في مقرات الجهات الحكومية الراعية والساندة للمعرض.",
          content:
            "Placing the advertisement in the headquarters of the government agencies that sponsor and support the exhibition.",
        },
      ],
    },
    {
      id: 2,
      content_ar: "رقمية:",
      content: "Digital:",
      sub_points: [
        {
          id: 1,
          content: "Third-party marketing campaigns",
          content_ar: "حملات تسويقية عبر الطرف الثالث",
        },
        {
          id: 2,
          content_ar:
            "حملات البريد الالكتروني  المستهدفة الخاصة بشخص ما مع USPS ذات الصلة.  ",
          content: "Targeted email campaigns with someone with relevant USPS.",
        },
        {
          id: 3,
          content_ar:
            "الأعلان المدفوعة (محركات البحث ومواقع التواصل الاجتماعي) لرجال الاعمال والتجار المحليين والدوليين .",
          content:
            "Paid advertising (search engines and social media sites) for local and international businessmen and traders",
        },
        {
          id: 4,
          content_ar: "حملة مخصصة على وسائل التواصل الاجتماعي. ",
          content: "A dedicated campaign on social media.",
        },
        {
          id: 5,
          content_ar:
            "تعقب الزائرين المحتملين على Facebook  و X و LinkedIn و Instagram.",
          content:
            "Tracking potential visitors on Facebook, X, LinkedIn, and Instagram.",
        },
      ],
    },
    {
      id: 3,
      content_ar: "اخرى:",
      content: "Other:",
      sub_points: [
        {
          id: 1,
          content_ar: "حملات SMS/WhatsApp.",
          content: "SMS/WhatsApp campaigns.",
        },
        {
          id: 2,
          content_ar: "الشراكات الاعلامية.",
          content: "Media partnerships.",
        },
        {
          id: 3,
          content_ar: "المواد الترويجية للعارضين.",
          content: "Promotional materials for exhibitors.",
        },
        {
          id: 4,
          content_ar: "المواد الترويجية للمتحدثين.",
          content: "Promotional materials for speakers.",
        },
        {
          id: 5,
          content_ar: "التسويق بالمؤثرين.",
          content: "Influencer marketing.",
        },
        {
          id: 6,
          content_ar: "التسويق الجغرافي (أحداث المنافسين والمواقع الرئيسية).",
          content:
            "Geographic marketing (competitors' events and key locations).",
        },
      ],
    },
  ];

  const points2 = [
    {
      id: 1,
      content_ar: "لوحات اعلانية خارجية ",
      content: "Outdoor billboards",
    },
    {
      id: 2,
      content_ar: "حملات واتس اب ",
      content: "WhatsApp campaigns",
    },
    {
      id: 3,
      content_ar: "اعلانات رقمية",
      content: "Digital ads",
    },
    {
      id: 4,
      content_ar: "راديو ",
      content: "Radio",
    },
    {
      id: 5,
      content_ar: "حملات ايميل ",
      content: "Email campaigns",
    },
    {
      id: 6,
      content_ar: "حملات مواقع الكترونية ",
      content: "Website campaigns",
    },
    {
      id: 7,
      content_ar: "حملات جرائد ",
      content: "Newspaper campaigns",
    },
    {
      id: 8,
      content_ar: "حملات رسائل نصية ",
      content: "SMS campaigns",
    },
    {
      id: 9,
      content_ar: "مواقع التواصل الاجتماعي",
      content: "Social media",
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
                    {lang ? "التسويق" : "Marketing"}
                  </h1>
                </div>
                <div className="px-5 text-white w-75">
                  {" "}
                  <h6>
                    {lang
                      ? "نستهدف رجال الأعمال والأسواق التجارية محليًا ودوليًا عبر لوحات إعلانات في العراق، إعلانات راديو، حملات رقمية، إعلانات مدفوعة على محركات البحث، وسائل التواصل الاجتماعي، ورسائل SMS/WhatsApp. لدينا أيضًا شراكات إعلامية وتسويق عبر المؤثرين لتوسيع نطاق الوصول وتعزيز الحضور في المعرض."
                      : "We target business people and commercial markets locally and internationally through billboards in Iraq, radio ads, digital campaigns, paid ads on search engines, social media, and SMS/WhatsApp messages. We also have media partnerships and influencer marketing to expand reach and enhance exhibition presence."}
                  </h6>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 mb-5">
                <h2 className="main-text ">
                  {lang
                    ? "حملات تسويقية كاملة للوصول الى المختصين من رجال الأعمال والأسواق التجارية (المحلية والدولية)"
                    : "Complete marketing campaigns to reach business professionals and commercial markets (local and international)"}
                </h2>
                <div>
                  <ol className=" px-3">
                    {points.map((point) => (
                      <li key={point.id}>
                        <p className="point mb-0">
                          {lang
                            ? point.content_ar.split(":")[0]
                            : point.content.split(":")[0]}{" "}
                          :{" "}
                          <span>
                            {lang
                              ? point.content_ar.split(":")[1]
                              : point.content.split(":")[1]}
                          </span>
                        </p>
                        {point.sub_points && (
                          <ul className="my-2 px-md-4 px-2">
                            {point.sub_points.map((sub_point) => (
                              <li key={sub_point.id}>
                                <p className="point mb-0">
                                  <span>
                                    {lang
                                      ? sub_point.content_ar.split(":")
                                      : sub_point.content.split(":")}
                                  </span>
                                </p>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              <hr className="linebtwen" />
              <div className="col-12 mt-5">
                <h2 className="main-text ">
                  {lang
                    ? "كيف نصل الى زوار معرضنا؟"
                    : "How do we reach our exhibition visitors?"}
                </h2>
                <p>
                  {lang
                    ? "طور فريق التسويق لدينا نهجه الى 360 درجه ويغطي مجموعة متنوعة من القنوات الرقمية والواقعية لتسويق معرض الاسبوع الزراعي لمعدات المكننة والانتاج الزراعي والحيواني – الصناعات الغذائية."
                    : "Our marketing team has developed its approach to 360 degrees and covers a variety of digital and realistic channels to market the agricultural machinery, agricultural and animal production, and food industries exhibition."}
                </p>

                <div>
                  <ul className=" px-3">
                    {points2.map((point) => (
                      <li key={point.id}>
                        <p className="point mb-0">
                          <span>{lang ? point.content_ar : point.content}</span>
                        </p>
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
