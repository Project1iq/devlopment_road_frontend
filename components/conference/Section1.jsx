import React, { useState } from "react";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { langState } from "@/atom/atom";

export default function Section1({ data }) {
  const lang = useRecoilValue(langState);

  const [formData, setFormData] = useState({});
  const handleChage = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section className="row section-1 mx-auto ">
        <div action="" className="form-container ">
          <div className="container pt-lg-0 pt-5">
              <div className="bg-image col-12 mb-4">
            <div className="allpic">
                <div className="title pt-5 d-flex align-content-center px-4 overflow-hidden mb-3 ">
                  <div className="line"> </div>

                  <h1 className=" px-2 textfade">
                    {lang
                      ? "معرض طريق التنمية"
                      : "The Development Road Exhibition"}
                  </h1>
                </div>
                <div className="px-5 text-white col-lg-8 col-12">
                  {" "}
                  <h6>
                    {lang
                      ? "يُسَلِّط معرض طريق التنمية الضوء على المبادرات الاستراتيجية والفرص التي تهدف إلى تحقيق التنمية المستدامة في العراق والمنطقة."
                      : "The Development Road Exhibition highlights strategic initiatives and opportunities aimed at achieving sustainable development in Iraq and the region."}
                  </h6>
                </div>
              </div>
            </div>
            <div className="row d-lg-flex flex-md-column flex-lg-row overflow-auto">
              <div className=" col-12 d-flex flex-md-row flex-column gap-3">
                <div className="ona col-lg col-12 d-block ">
                  <div className="col py-3 px-3 ">
                    <Image
                      src="/images/conference/2.png"
                      alt="Description of image"
                      layout="responsive"
                      width={3000}
                      height={0}
                      className="img0"
                    />
                  </div>
                  <div className="px-3">
                    <h3 className="">
                      {lang
                        ? "مشروع ميناء الفاو الكبير"
                        : "Al-Faw Port Project"}
                    </h3>
                    <p>
                      {lang
                        ? "مشروع ميناء الفاو الكبير هو نقطة انطلاق أساسية لتعزيز التجارة والنقل بين العراق والعالم."
                        : "The Al-Faw Port Project is a key starting point to enhance trade and transportation between Iraq and the world."}
                    </p>
                  </div>
                </div>
                <div className="ona col-lg  col-12 d-block ">
                  <div className="col py-3 px-3 ">
                    <Image
                      src="/images/conference/3.png"
                      alt="Description of image"
                      layout="responsive"
                      width={3000}
                      height={0}
                      className="img0"
                    />
                  </div>
                  <div className="px-3">
                    <h3 className="">
                      {lang ? "شبكة السكك الحديدية" : "Railway Network"}
                    </h3>
                    <p style={{ paddingBottom: "66%" }}>
                      {lang
                        ? "تربط شبكة السكك الحديدية ميناء الفاو ببقية مناطق العراق، مما يسهل النقل التجاري."
                        : "The railway network connects Al-Faw port to other regions of Iraq, facilitating commercial transport."}
                    </p>
                  </div>
                </div>
                <div className="ona col-lg  col-12 d-block ">
                  <div className="col py-3 px-3 ">
                    <Image
                      src="/images/conference/4.png"
                      alt="Description of image"
                      layout="responsive"
                      width={3000}
                      height={0}
                      className="img0"
                    />
                  </div>
                  <div className="px-3 d-flex flex-column justify-content-between">
                    <h3 className="">
                      {lang
                        ? "المدن الصناعية والمناطق اللوجستية"
                        : "Industrial Cities and Logistic Areas"}
                    </h3>
                    <p style={{ paddingBottom: "73%" }}>
                      {lang
                        ? "إنشاء مدن صناعية ومناطق لوجستية لتطوير الاقتصاد المحلي وتعزيز الاستثمارات."
                        : "The creation of industrial cities and logistics areas to develop the local economy and enhance investments."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="feutars mt-5 p-4 pb-5">
              <h3 className="main-text text-center mt-4 mb-0">
                {lang ? "مواضيع المعرض" : "Exhibition Themes"}
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
                      ? "التنمية المستدامة في المشاريع الكبرى"
                      : "Sustainable Development in Major Projects"}
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
                      ? "استراتيجيات التمويل والابتكار في المشاريع"
                      : "Innovative Financing Strategies in Projects"}
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
                      ? "التكنولوجيا والابتكارات المساعدة على التنمية"
                      : "Technologies and Innovations Driving Development"}
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
                      ? "الطاقة المستدامة كمحرك للنمو"
                      : "Sustainable Energy as a Growth Driver"}
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
                      ? "خلق فرص عمل وتنمية الاقتصاد"
                      : "Creating Jobs and Economic Growth"}
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
                    {lang
                      ? "الشراكات الإقليمية والدولية"
                      : "Regional and International Partnerships"}
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
                      ? "تمكين رواد الأعمال في مشاريع التنمية"
                      : "Empowering Entrepreneurs in Development Projects"}
                  </h5>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
