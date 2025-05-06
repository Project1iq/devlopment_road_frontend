import React, { useState } from "react";
import Image from "next/image";
import plants from "@/public/images/index/plants.png";
import water from "@/public/images/index/water.png";
import { useRecoilValue } from "recoil";
import { langState } from "@/atom/atom";
import img from "@/public/images/location/7.jpg";
export default function Section1({ data }) {
  const lang = useRecoilValue(langState);

  const [formData, setFormData] = useState({});
  const handleChage = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const points = [
    {
      id: 1,
      content_ar: "الحدث: معرض ومؤتمر طاقة العراق الدولي العاشر",
      content:
        "Event: 10th Iraq International Energy Expo & Conference.",
    },
    {
      id: 2,
      content_ar: "موعد الحدث: 24-26 شباط 2025",
      content: "Event date: 24-26 February 2025",
    },
    {
      id: 3,
      content_ar: "وقت المعرض: 10 صباحاً الى الساعة 4 مساءاً",
      content: "Exhibition time: 10 am to 4 pm",
    },
    {
      id: 4,
      content_ar: "الموقع الالكتروني: www.elec-fair.com",
      content: "Website: www.elec-fair.com",
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

                  <h1 className=" px-2 textfade ">{lang ? "الموقع" : "Location"}</h1>
                </div>
                <div className="px-5 text-white w-75">
                  {" "}
                  <h6>
                    {lang
                      ? "يُقام معرض طاقة العراق الدولي العاشر في بغداد، حيث يجمع الخبراء والشركات الرائدة في قطاع الطاقة لمناقشة أحدث الابتكارات والتحديات المستقبلية. فرصة فريدة للتواصل واستكشاف الحلول المتطورة في مجال الطاقة."
                      : "The 10th Iraq International Energy Exhibition is held in Baghdad, bringing together experts and leading companies in the energy sector to discuss the latest innovations and future challenges. A unique opportunity to network and explore advanced energy solutions."}
                  </h6>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-12">
                <h2 className="main-text">{lang ? "الموقع" : "Location"}</h2>
                <p className="sub-text">
                  {lang ? (
                    <>
                      يقام المعرض على أرض معرض بغداد الدولي ليوفر الفرصة الأكبر
                      لمشاركة ناجحة حيث يحتوي على مساحات مسقفة منها 10000 م
                      <sup>2</sup> ومساحة مكشوفة 5000 م<sup>2</sup> مخصصة لمعرض
                      ومؤتمر طاقة العراق وعلى قاعة مركزية للمؤتمرات الكبرى
                      وبناية إدارة لتقديم الخدمات اللوجستية ومنظومات أمنية
                      متكاملة خاصة بالمعرض.
                    </>
                  ) : (
                    <>
                      The exhibition is held at the Baghdad International
                      Fairgrounds, providing the greatest opportunity for
                      successful participation. It includes 10000m<sup>2</sup>{" "}
                      of covered space and 5000m<sup>2</sup> of open space
                      dedicated to the Iraq Energy Exhibition and Conference,
                      along with a central conference hall, an administration
                      building for logistical services, and integrated security
                      systems specific to the exhibition.
                    </>
                  )}
                </p>

                <div>
                  <ul>
                    {points.map((point) => (
                      <li key={point.id}>
                        <p className="point mb-0">
                          {lang
                            ? point.content_ar.split(":")[0]
                            : point.content.split(":")[0]}{" "}
                          :
                          <span>
                            {lang
                              ? point.content_ar.split(":")[1]
                              : point.content.split(":")[1]}
                          </span>
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-12 d-flex justify-content-center flex-column px-md-5">
                <div className="row image-border w-100  mx-auto py-md-1 py-0 px-md-1 px-0">
                  <div className="col-md-2 col-12 px-0"></div>
                  <div className="col-md-12 col-12 px-0">
                    <Image
                      src={img}
                      alt="plants"
                      width={3000}
                      height={3000}
                      className=" w-100 h-auto image  "
                    />
                  </div>
                </div>
              </div>
              <div className="col-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15530.130494455812!2d44.344502081993994!3d33.31643169984139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15577f003c488b0f%3A0xe799625523ce898f!2z2YXYudix2LYg2KjYutiv2KfYryDYp9mE2K_ZiNmE2Yo!5e0!3m2!1sen!2siq!4v1731948350087!5m2!1sen!2siq"
                  width="600"
                  height="450"
                  // style="border:0;"
                  allowFullScreen
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  className="w-100"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
