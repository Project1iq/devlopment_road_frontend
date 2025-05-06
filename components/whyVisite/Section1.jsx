import React, { useState } from "react";
import Image from "next/image";
import img from "@/public/images/whyVisite/3.jpg";
import img2 from "@/public/images/whyVisite/4.jpg";
import { useRecoilValue } from "recoil";
import { langState } from "@/atom/atom";
import Link from "next/link";
export default function Section1({ data }) {
  const lang = useRecoilValue(langState);

  const [formData, setFormData] = useState({});
  const handleChage = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const points = [
    {
      id: 1,
      content_ar: (
        <>
          <strong>يسرنا أن نقدم معرض ومؤتمر طاقة العراق الدولي العاشر</strong>{" "}
          والذي أصبح <strong>حدثاً بارزاً في قطاع الطاقة</strong> حيث يوفر فرصاً
          متنامية للتواصل مع كبرى شركات الطاقة العالمية واستكشاف{" "}
          <strong>أحدث المنتجات والحلول</strong> التي تشكل مستقبل الصناعة.
        </>
      ),
      content: (
        <>
          We are pleased to present the{" "}
          <strong>
            10th Iraq Energy International Exhibition and Conference
          </strong>
          , which has become a{" "}
          <strong>prominent event in the energy sector</strong>. It provides
          growing opportunities to connect with leading global energy companies
          and explore the <strong>latest products and solutions</strong> that
          are shaping the future of the industry.
        </>
      ),
    },
    {
      id: 2,
      content_ar: (
        <>
          يوفر لك هذا الحدث الفرصة <strong>لاكتشاف حلول الطاقة المبتكرة</strong>{" "}
          وبناء <strong>علاقات تجارية طويلة الأمد</strong> تدعم رحلتك نحو التميز
          وتساعد على تنويع محفظة أعمالك.
        </>
      ),
      content: (
        <>
          This event offers you the opportunity to{" "}
          <strong>discover innovative energy solutions</strong> and build{" "}
          <strong>long-term business relationships</strong> that support your
          journey towards excellence and help diversify your business portfolio.
        </>
      ),
    },
    {
      id: 3,
      content_ar: (
        <>
          وسط التحولات السريعة في هذا القطاع التي تركز على{" "}
          <strong>تنوع الطاقة والرقمنة والأستدامة</strong> يهدف المعرض إلى تسليط
          الضوء على <strong>ستة قطاعات رئيسية</strong> حول مجال الطاقة العالمي.
        </>
      ),
      content: (
        <>
          Amid the rapid transformations in this sector, which focus on{" "}
          <strong>
            energy diversification, digitization, and sustainability
          </strong>
          , the exhibition aims to highlight <strong>six key sectors</strong> in
          the global energy field. Join us to explore the{" "}
          <strong>latest innovations</strong> in the energy sector and enhance
          business networks that support your efforts towards a{" "}
          <strong>digital and sustainable energy future</strong>.
        </>
      ),
    },
  ];

  return (
    <>
      <section className="row section-1 mx-auto">
        <div action="" className="form-container ">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-12 ">
                <div className="">
                  <h2 className="main-text text-center">
                    {lang ? " فوائد معرض ومؤتمر طريق التنمية :-" : "Why the Development Road Matters :-"}
                  </h2>
                  <div>
                    <ul className="list-unstyled">
                      {points.map((point) => (
                        <li key={point.id}>
                          <p className="point mb-3 d-md-none col-md-12">
                            {lang ? point.content_ar : point.content}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mai col-md-12 col-12 d-flex justify-content-start flex-md-row  pt-2 ">
                <div className="col-12 col-md-2 d-flex flex-column justify-content-center  py-4 px-3">
                  {" "}
                 
                    <div className="responsiveIcon mb-4">
                      {" "}
                      <Image
                        src="/images/icons/1.png"
                        alt="وصف للصورة"
                        width={2000}

                        height={2000}
                        className={"responsiveImage "}
                      />
                    </div>
                  
                  <div className="  d-flex flex-column justify-content-center ">
                    <h5 className=" bm text-center">
                      {lang ? "تبادل المعرفة " : " Participant "}

                      <br />
                    </h5>
                    <h5 className="bm text-center">
                      {lang ? "بين الجهات " : " knowledge "}
                      <br />
                    </h5>

                    <h5 className="bm text-center">
                      {" "}
                      {lang ? "المشاركة" : "sharing"}{" "}
                    </h5>
                  </div>
                </div>
                <div className="col-12 col-md-2 d-flex flex-column justify-content-center py-4 px-3">
                  <div className="col-10 align-self-center">
                    <div className="responsiveIcon mb-4">
                      {" "}
                      <Image
                        src="/images/iconimg/nationl.png"
                        alt="وصف للصورة"
                        width={2000}
                        height={2000}
                        className={"responsiveImage "}
                      />
                    </div>
                  </div>
                  <div className="  d-flex flex-column justify-content-center">
                    <h5 className=" bm text-center">
                      {lang ? "  الترويج عن " : " Promoting the   "}
                      <br />
                    </h5>
                    <h5 className="bm text-center">
                      {lang ? " مشروع طريق   " : "  Development "}
                      <br />
                    </h5>

                    <h5 className="bm text-center">
                      {lang ? " التنمية " : " Road "}
                    </h5>
                  </div>
                </div>
                <div className="col-12 col-md-2 d-flex flex-column justify-content-center  py-4 px-3">
                  <div className="col-10 align-self-center">
                    <div className="responsiveIcon mb-4">
                      {" "}
                      <Image
                        src="/images/iconimg/publicimg.png"
                        alt="وصف للصورة"
                        width={2000}
                        height={2000}
                        className={"responsiveImage "}
                      />
                    </div>
                  </div>
                  <div className="  d-flex flex-column justify-content-center">
                    <h5 className=" bm text-center">
                      {lang ? "تحسين الصورة  " : " Enhancing image "}
                      <br />
                    </h5>
                    <h5 className="bm text-center">
                      {lang ? "العامة كبيئة   " : " as successful "}
                      <br />
                    </h5>

                    <h5 className="bm text-center">
                      {lang ? "استثمارية ناجحة " : " investment hub "}
                    </h5>
                  </div>
                </div>
                <div className="col-12 col-md-2 d-flex flex-column justify-content-center py-4 px-3">
                  <div className="col-10 align-self-center">
                    <div className="responsiveIcon mb-4">
                      {" "}
                      <Image
                        src="/images/iconimg/money.png"
                        alt="وصف للصورة"
                        width={2000}
                        height={2000}
                        className={"responsiveImage "}
                      />
                    </div>
                  </div>
                  <div className="  d-flex flex-column justify-content-center">
                    <h5 className=" bm text-center">
                      {lang ? "دعم تنويع " : " Boosting local "}
                      <br />
                    </h5>
                    <h5 className="bm text-center">
                      {lang ? "الاقتصاد " : " economic "}
                      <br />
                    </h5>

                    <h5 className="bm text-center">
                      {" "}
                      {lang ? "المحلي " : " diversity "}{" "}
                    </h5>
                  </div>
                </div>
                <div className="col-12 col-md-2 d-flex flex-column justify-content-center py-4 px-3">
                <div className="col-10 align-self-center">
                    <div className="responsiveIcon mb-4">
                      {" "}
                      <Image
                        src="/images/iconimg/consumption.png"
                        alt="وصف للصورة"
                        width={2000}
                        height={2000}
                        className={"responsiveImage "}
                      />
                    </div>
                  </div>
                  <div className="  d-flex flex-column justify-content-center">
                    <h5 className=" bm text-center">
                      {lang ? "استهلاك " : " Energy "}
                      <br />
                    </h5>
                    <h5 className="bm text-center">
                      {lang ? "الطاقة " : " Consumption & "}
                      <br />
                    </h5>

                    <h5 className="bm text-center">
                      {" "}
                      {lang ? "وإدارتها" : "Management "}{" "}
                    </h5>
                  </div>
                </div>
                <div className="col-12 col-md-2 d-flex flex-column justify-content-center  py-4 px-3">
                <div className="col-10 align-self-center">
                    <div className="responsiveIcon mb-4">
                      {" "}
                      <Image
                        src="/images/iconimg/eb2.png"
                        alt="وصف للصورة"
                        width={2000}
                        height={2000}
                        className={"responsiveImage "}
                      />
                    </div>
                  </div>
                  <div className="  d-flex flex-column justify-content-center">
                    <h5 className=" bm text-center">
                      {lang ? "بطاريات " : "Battery "}
                      <br />
                    </h5>
                    <h5 className="bm text-center">
                      {lang ? "والتنقل  " : "& "}
                      <br />
                    </h5>

                    <h5 className="bm text-center">
                      {lang ? "الكهربائي   " : " eMobility "}{" "}
                    </h5>
                  </div>
                </div>
              </div>
              <div className="mai col-md-12 col-12 d-flex justify-content-center flex-md-row  pt-2 ">
          
                <div className="col-12 col-md-2 d-flex flex-column justify-content-center py-4 px-3">
                  <div className="col-10 align-self-center">
                    <div className="responsiveIcon mb-4">
                      {" "}
                      <Image
                        src="/images/iconimg/renewable.png"
                        alt="وصف للصورة"
                        width={2000}
                        height={2000}
                        className={"responsiveImage "}
                      />
                    </div>
                  </div>
                  <div className="  d-flex flex-column justify-content-center">
                    <h5 className=" bm text-center">
                      {lang ? "الطاقة " : " Renewable "}
                      <br />
                    </h5>
                    <h5 className="bm text-center">
                      {lang ? "المتجددة  " : "  & Clean "}
                      <br />
                    </h5>

                    <h5 className="bm text-center">
                      {lang ? "والنظيفة " : " Energy "}
                    </h5>
                  </div>
                </div>
                <div className="col-12 col-md-2 d-flex flex-column justify-content-center  py-4 px-3">
                  <div className="col-10 align-self-center">
                    <div className="responsiveIcon mb-4">
                      {" "}
                      <Image
                        src="/images/iconimg/wind2.png"
                        alt="وصف للصورة"
                        width={2000}
                        height={2000}
                        className={"responsiveImage "}
                      />
                    </div>
                  </div>
                  <div className="  d-flex flex-column justify-content-center">
                    <h5 className=" bm text-center">
                      {lang ? "الطاقة " : " Critical & "}
                      <br />
                    </h5>
                    <h5 className="bm text-center">
                      {lang ? "الحرجة  " : " Back-up "}
                      <br />
                    </h5>

                    <h5 className="bm text-center">
                      {lang ? "والاحتياطية " : " Power "}
                    </h5>
                  </div>
                </div>
                <div className="col-12 col-md-2 d-flex flex-column justify-content-center py-4 px-3">
                  <div className="col-10 align-self-center">
                    <div className="responsiveIcon mb-4">
                      {" "}
                      <Image
                        src="/images/iconimg/tower.png"
                        alt="وصف للصورة"
                        width={2000}
                        height={2000}
                        className={"responsiveImage "}
                      />
                    </div>
                  </div>
                  <div className="  d-flex flex-column justify-content-center">
                    <h5 className=" bm text-center">
                      {lang ? "النقل " : " Transmission "}
                      <br />
                    </h5>
                    <h5 className="bm text-center">
                      {lang ? "و " : " & "}
                      <br />
                    </h5>

                    <h5 className="bm text-center">
                      {" "}
                      {lang ? "التوزيع " : " Distribution "}{" "}
                    </h5>
                  </div>
                </div>
                <div className="col-12 col-md-2 d-flex flex-column justify-content-center py-4 px-3">
                <div className="col-10 align-self-center">
                    <div className="responsiveIcon mb-4">
                      {" "}
                      <Image
                        src="/images/iconimg/consumption.png"
                        alt="وصف للصورة"
                        width={2000}
                        height={2000}
                        className={"responsiveImage "}
                      />
                    </div>
                  </div>
                  <div className="  d-flex flex-column justify-content-center">
                    <h5 className=" bm text-center">
                      {lang ? "استهلاك " : " Energy "}
                      <br />
                    </h5>
                    <h5 className="bm text-center">
                      {lang ? "الطاقة " : " Consumption & "}
                      <br />
                    </h5>

                    <h5 className="bm text-center">
                      {" "}
                      {lang ? "وإدارتها" : "Management "}{" "}
                    </h5>
                  </div>
                </div>
                <div className="col-12 col-md-2 d-flex flex-column justify-content-center  py-4 px-3">
                <div className="col-10 align-self-center">
                    <div className="responsiveIcon mb-4">
                      {" "}
                      <Image
                        src="/images/iconimg/eb2.png"
                        alt="وصف للصورة"
                        width={2000}
                        height={2000}
                        className={"responsiveImage "}
                      />
                    </div>
                  </div>
                  <div className="  d-flex flex-column justify-content-center">
                    <h5 className=" bm text-center">
                      {lang ? "بطاريات " : "Battery "}
                      <br />
                    </h5>
                    <h5 className="bm text-center">
                      {lang ? "والتنقل  " : "& "}
                      <br />
                    </h5>

                    <h5 className="bm text-center">
                      {lang ? "الكهربائي   " : " eMobility "}{" "}
                    </h5>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <div class="col-12">
        <hr />
      </div>
    </>
  );
}
