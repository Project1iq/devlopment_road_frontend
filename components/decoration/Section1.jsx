import React, { useState } from "react";
import Image from "next/image";
import plants from "@/public/images/index/plants.png";
import water from "@/public/images/index/water.png";
import { useRecoilValue } from "recoil";
import { langState } from "@/atom/atom";
import image from "@/public/decoration-company.png";
export default function Section1({ data }) {
  const lang = useRecoilValue(langState);

  const [formData, setFormData] = useState({});
  const handleChage = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
                    {lang ? " الديكور" : "Decoration"}
                  </h1>
                </div>
                <div className="px-5 text-white w-75">
                  {" "}
                  <h6>
                    {lang
                      ? "تختص شركة ديكور بتقديم حلول تصميم داخلي مبتكرة تجمع بين الجمال والوظيفة. نقدم خدمات متكاملة بدءًا من الاستشارات وحتى تنفيذ الديكورات باستخدام أفضل المواد والتقنيات الحديثة. هدفنا هو تحويل رؤى عملائنا إلى واقع يعكس أسلوبهم ويعزز من جمال وراحة أماكنهم."
                      : "Decor Company specializes in providing innovative interior design solutions that combine beauty and functionality. We offer comprehensive services, from consultations to full execution of decorations, using the best materials and modern techniques. Our goal is to transform clients' visions into reality, reflecting their style and enhancing the beauty and comfort of their spaces."}
                  </h6>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className=" col-md-8 col-12">
                <h2 className="decoration">
                  {lang ? "شركة الديكور" : "Decoration Company"}
                </h2>
                <div>
                  <h5 className="mt-4 text-dark">
                    {lang ? (
                      <>
                        <span style={{ color: "red" }}>
                          من خلال شركة الشهل للدعاية والديكور والمعارض
                          والمؤتمرات الدولية
                        </span>
                        . ﻧﺴﺘﻄﻴﻊ ﺑﻔﻀﻞ مواردنا وﺧﺒﺮات ﻓﺮﻳﻘﻨﺎ اﻟﻤﺤﺘﺮف ﻓﻲ ﺗﺼﻤﻴﻢ
                        وﺑﻨﺎء أﺟﻨﺤﺔ اﻟﻤﻌﺎرض ان ﻧﻀﻴﻒ ﻋﻠﻰ ﻣﺴﺎﺣﺘﻚ اﻟﺘﻲ ﻧﻨﻔﺬ ﻋﻠﻴﻬﺎ
                        ﺟﻨﺎح اﻟﻌﺮض اﻟﺨﺎﺻ ﺑﻚ اﻟﺒﻌﺪ اﻻﺣﺘﺮاﻓﻲ واﻟﺠﻮدة اﻟﻌﺎﻟﻴﺔ اﻟﺘﻲ
                        ﺗﺤﺘﺎﺟﻬﺎ ﻟﻨﻴﻞ إﻋﺠﺎب ﻋﻤﻼﺋﻚ...
                      </>
                    ) : (
                      <>
                        <span style={{ color: "red" }}>
                          Through Shahal Company for Advertising, Decoration,
                          and International Fairs and Conferences
                        </span>
                        . we can, thanks to our resources and the expertise of
                        our professional team in designing and building
                        exhibition pavilions, add to your space...
                      </>
                    )}
                  </h5>

                  <ul>
                    <li className="main-text">
                      <h5 className="decoration">
                        {lang ? "اﻻﺟﻨﺤﺔ اﻟﺠﺎﻫﺰة" : "Ready Wings"}:{" "}
                        <span className="point text-dark">
                          {lang
                            ? "يتضمن قواطع خشب، لوحة بأسم الشركة، سبوت لايت 3  لكل15م ،  1 طاولة ، 2 كراسي معارض ، كهرباء 220 فولط الى  2 كيلو واط ، سلة مهملات ، التضمين في دليل المعرض ، تنظيف الجناح على مدار فترة العرض."
                            : "Includes wooden partitions, a company nameplate, 3 spotlights for every 15m, 1 table, 2 exhibition chairs, 220-volt electricity up to 2 kilowatts, a wastebasket, inclusion in the exhibition guide, and cleaning the stand throughout the exhibition period."}
                        </span>
                      </h5>
                    </li>
                    <li className="main-text">
                      <h5 className="decoration">
                        {lang ? "اﻻﺟﻨﺤﺔ اﻟﺨﺎﺻﺔ" : "Special Wings"}:{" "}
                        <span className="point">
                          {lang
                            ? "شركتنا لديها معمل لتنفيذ الديكورات الخاصة (VIP)  تعمل بدقة عالية وبكوادر اجنبية حسب التصميم."
                            : "Our company has a laboratory for implementing special decorations (VIP) that works with high precision and foreign cadres according to the design."}
                        </span>
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-12 align-items-center d-flex px-4">
                <Image
                  src={image}
                  width={1000}
                  height={1000}
                  className="h-auto image w-100 "
                  alt="plants"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
