import React, { useState } from "react";
import Image from "next/image";
import plants from "@/public/images/index/plants.png";
import water from "@/public/images/index/water.png";
import { useRecoilValue } from "recoil";
import { langState } from "@/atom/atom";

import Link from "next/link";
export default function Section1({ data }) {
  const lang = useRecoilValue(langState);

  const [formData, setFormData] = useState({});
  const handleChage = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section className="row section-1 mx-auto">
        <div action="" className="form-container ">
          <div className="container">
            <div
              className="bg-image col-12 mb-4
           "
            >
              <div className="title pt-5 d-flex align-content-center px-4 overflow-hidden mb-3 ">
                <div className="line"> </div>

                <h1 className=" px-2 textfade">
                  {lang
                    ? "مؤتمر طاقة العراق الدولي العاشر "
                    : "The 10th Iraq  Energy Conference"}{" "}
                </h1>
              </div>
              <div className="px-5 text-white w-75">
                {" "}
                <h6>
                  {lang
                    ? "يسلط مؤتمر معرض طاقة العراق الدولي في نسخته العاشره الضوء على البرامج والمبادرات الأستراتیجیة التي تھدف إلى تعزیز مشاریع الطاقة في جمیع أنحاء المنطقة وخارجھا ومعالجة الطلب المتطور على الطاقة في المستقبل."
                    : "The 10th edition of the Iraq International Energy Exhibition Conference highlights strategic programs and initiatives aimed at enhancing energy projects across the region and beyond, while addressing the evolving demand for energy in the future."}
                </h6>
              </div>
            </div>
            <div className="row d-lg-flex flex-md-column flex-lg-row overflow-auto">
              <div className=" col-12 d-flex flex-md-row flex-column gap-3">
                <div className="ona col-lg col-12 d-block ">
                  <div className="col py-3 px-3 ">
                    <Image
                      src="/images/conference/9.jpg"
                      alt="Description of image"
                      layout="responsive"
                      width={3000}
                      height={0}
                      className="img0"
                    />
                  </div>
                  <div className="px-3">
                    <h3 className="">
                      {lang ? " المؤتمر الاول" : "The First Conference"}
                    </h3>
                    <p>
                      {lang
                        ? "قمة للشركات الراعيه الكبرى في العالم لمعرض طاقه العراق الدولي العاشر ومنها: ( Siemens Energy, مجموعة ربان السفينة, Mohammed Salem Alojaimi Factory Company and his Partner Ltd, ELSEWEDY ELECTRIC, Mass Group Holding, AL FANAR, UTEC, Bahra Electric, ARABIAN TRANSORMERS CO. (ATC),GE Vernova) هي تجمع مهم للمدراء التنفيذيين الذين يسعون إلى البقاء في المقدمة في مشهد الطاقة سريع التطور حيث تقدم المعرفة القيمة وفرص التواصل لدفع التقدم والنجاح في قطاع الطاقة."
                        : "The summit of major global sponsors for the 10th Iraq International Energy Exhibition, including Siemens Energy, Rubban Al Safina Group, Mohamed Salem Alojaimi Factory, ELSEWEDY ELECTRIC, Mass Group Holding, AL FANAR, UTEC, Bahra Electric, ARABIAN TRANSFORMERS CO. (ATC), and GE Vernova, is a key event for executives aiming to stay ahead in the evolving energy sector. It provides valuable insights and networking opportunities to drive progress in the industry."}{" "}
                    </p>
                   
                  </div>
                </div>
                <div className="ona col-lg  col-12 d-block ">
                  <div className="col py-3 px-3 ">
                    <Image
                      src="/images/conference/12.jpg"
                      alt="Description of image"
                      layout="responsive"
                      width={3000}
                      height={0}
                      className="img0"
                    />
                  </div>
                  <div className="px-3">
                    <h3 className="">
                      {lang ? " المؤتمر الثاني " : "The second Conference"}
                    </h3>
                    <p style={{ paddingBottom: "66%" }}>
                      {lang
                        ? "مدراء محطات الطاقه في العراق.الصعوبات والمعوقات التي تواجه المحطات والحلول."
                        : "Managers of Power Plants in Iraq, Challenges and Obstacles Facing Power Plants and Their Solutions"}{" "}
                    </p>
                   
                  </div>
                </div>
                <div className="ona col-lg  col-12 d-block ">
                  <div className="col py-3 px-3 ">
                    <Image
                      src="/images/conference/13.jpg"
                      alt="Description of image"
                      layout="responsive"
                      width={3000}
                      height={0}
                      className="img0"
                    />
                  </div>
                  <div className="px-3 d-flex flex-column justify-content-between">
                    <h3 className="">
                      {lang ? " المؤتمر الثالث" : "The third Conference"}
                    </h3>
                    <p style={{ paddingBottom: "73%" }}>
                      {lang
                        ? "الطاقه المتجدده والنظيفة وفرص العمل في هذا القطاع في العراق."
                        : "Renewable and Clean Energy and Job Opportunities in This Sector in Iraq"}{" "}
                    </p>
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="feutars mt-5 p-4 pb-5">
              <h3 className="main-text text-center mt-4 mb-0">
                {lang ? "  مواضيع المؤتمر" : "Conference Themes"}
              </h3>
              <div className="row d-flex mt-5 mb-3 justify-content-center">
                <div
                  className={`col-lg col-md-4 col-12  d-flex flex-column justify-content-center align-items-center  `}
                >
                  <div className="col-7">
                    <Image
                      src="/images/iconimg/main.png"
                      alt="Description of image"
                      layout="responsive"
                      width={3000}
                      height={0}
                      className="img0"
                    />
                  </div>
                  <h5 className="mt-3 text-center ">
                    {lang
                      ? "التنقل نحو التميز في العمليات والصيانة"
                      : "Navigating Excellence in Operation and Maintenance"}
                  </h5>
                </div>
                <div
                  className={`col-lg col-md-4 col-12 d-flex flex-column justify-content-center align-items-center  `}
                >
                  <div className="col-7">
                    <Image
                      src="/images/iconimg/invest.png"
                      alt="Description of image"
                      layout="responsive"
                      width={3000}
                      height={0}
                      className="img0"
                    />
                  </div>
                  <h5 className="mt-3 text-center ">
                    {lang
                      ? "ثورة في استراتيجيات المال والاستثمار"
                      : "Revolutionising Financial and Investment Strategies"}
                  </h5>
                </div>

                <div
                  className={`col-lg col-md-4 col-12  d-flex flex-column justify-content-center align-items-center  `}
                >
                  <div className="col-7">
                    <Image
                      src="/images/iconimg/tech.png"
                      alt="Description of image"
                      layout="responsive"
                      width={3000}
                      height={0}
                      className="img0"
                    />
                  </div>
                  <h5 className="mt-3 text-center ">
                    {lang
                      ? "الابتكارات التكنولوجية والتحول الرقمي"
                      : "Technological Innovations and Digitalisation"}
                  </h5>
                </div>
                <div
                  className={`col-lg col-md-4 col-12  d-flex flex-column justify-content-center align-items-center  `}
                >
                  <div className="col-7">
                    <Image
                      src="/images/iconimg/clean-energy.png"
                      alt="Description of image"
                      layout="responsive"
                      width={3000}
                      height={0}
                      className="img0"
                    />
                  </div>
                  <h5 className="mt-3 text-center ">
                    {lang
                      ? "دفع ممارسات الطاقة المستدامة والكفاءة"
                      : "Driving Sustainable Energy Practices and Efficiency"}
                  </h5>
                </div>
                <div
                  className={`col-lg col-md-4 col-12  d-flex flex-column justify-content-center align-items-center ${
                    lang ? "ps-3" : "pe-3"
                  } `}
                >
                  <div className="col-7">
                    <Image
                      src="/images/iconimg/profit3.png"
                      alt="Description of image"
                      layout="responsive"
                      width={3000}
                      height={0}
                      className="img0"
                    />
                  </div>
                  <h5 className="mt-3 text-center ">
                    {lang
                      ? " تنشيط النمو الاقتصادي وخلق الوظائف"
                      : "Energising Economic Growth and Job Creation"}
                  </h5>
                </div>
              </div>
              <div className="row  d-flex justify-content-center">
                <div
                  className={`col-lg col-md-4 col-12  d-flex flex-column justify-content-center align-items-center  `}
                >
                  <div className="col-7">
                    <Image
                      src="/images/iconimg/partnership.png"
                      alt="Description of image"
                      layout="responsive"
                      width={3000}
                      height={0}
                      className="img0"
                    />
                  </div>
                  <h5 className="mt-3 text-center ">
                    {lang ? (
                      "الشراكات الإقليمية والمستقبلية العالمية"
                    ) : (
                      <> Future Regional and Global Partnerships </>
                    )}
                  </h5>
                </div>
                <div
                  className={`col-lg col-md-4 col-12  d-flex flex-column justify-content-center align-items-center  `}
                >
                  <div className="col-7">
                    <Image
                      src="/images/iconimg/solu.png"
                      alt="Description of image"
                      layout="responsive"
                      width={3000}
                      height={0}
                      className="img0"
                    />
                  </div>
                  <h5 className="mt-3 text-center ">
                    {lang
                      ? "تمكين ريادة الأعمال في قطاع الطاقة"
                      : "Empowering Entrepreneurship in the Energy Sector"}
                  </h5>
                </div>
                <div
                  className={`col-lg col-md-4 col-12  d-flex flex-column justify-content-center align-items-center  `}
                >
                  <div className="col-7">
                    <Image
                      src="/images/iconimg/cyber-security.png"
                      alt="Description of image"
                      layout="responsive"
                      width={3000}
                      height={0}
                      className="img0"
                    />
                  </div>
                  <h5 className="mt-3 text-center ">
                    {lang
                      ? "تعزيز مرونة الشبكة والأمن السيبراني"
                      : "Enhancing Grid Resilience and Cybersecurity"}
                  </h5>
                </div>
                <div
                  className={`col-lg col-md-4 col-12  d-flex flex-column justify-content-center align-items-center  `}
                >
                  <div className="col-7">
                    <Image
                      src="/images/iconimg/rec.png"
                      alt="Description of image"
                      layout="responsive"
                      width={3000}
                      height={0}
                      className="img0"
                    />
                  </div>
                  <h5 className="mt-3 text-center ">
                    {lang ? (
                      "تعزيز التوظيف المحلي"
                    ) : (
                      <> Promote Local Employment</>
                    )}
                  </h5>
                </div>
                <div
                  className={`col-lg col-md-4 col-12  d-flex flex-column justify-content-center align-items-center ${
                    lang ? "ps-3" : "pe-3"
                  } `}
                >
                  <div className="col-7">
                    <Image
                      src="/images/iconimg/writing.png"
                      alt="Description of image"
                      layout="responsive"
                      width={3000}
                      height={0}
                      className="img0"
                    />
                  </div>
                  <h5 className="mt-3 text-center ">
                    {lang ? (
                      " تطوير المحتوى المحلي"
                    ) : (
                      <> Local Content Development</>
                    )}
                  </h5>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
