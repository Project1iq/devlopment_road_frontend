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

  const ministryOfElectricity = {
    content_ar:
      "القطاعات الحكومية المشاركة\nوزارة الكهرباء:تشارك وزارة الكهرباء بكافة تشكيلاتها بأجنحتها الثابتة وتتضمن:\nشركات الانتاج\nالشركة العامة لانتاج الطاقة الكهربائية – الشمالية\nالشركة العامة لانتاج الطاقة الكهربائية – الجنوبية\nالشركة العامة لانتاج الطاقة الكهربائية – الوسطى\nالشركة العامة لانتاج الطاقة الكهربائية – الفرات الاوسط\nشركات النقل\nالشركة العامة لنقل الطاقة الكهربائية – المنطقة الشمالية\nالشركة العامة لنقل الطاقة الكهربائية – الجنوب\nالشركة العامة لنقل الطاقة الكهربائية – الوسطى\nالشركة العامة لنقل الطاقة الكهربائية – الفرات الاوسط\nشركات التوزيع\nالشركة العامة لتوزيع كهرباء بغداد\nالشركة العامة لتوزيع كهرباء الفرات الاوسط\nالشركة العامة لتوزيع كهرباء الجنوب\nالشركة العامة لتوزيع كهرباء الشمال\nالشركة العامة لتوزيع كهرباء الوسط\nالجهات الساندة\nدائرة التشغيل والتحكم\nدائرة التدريب وبحوث الطاقة\nالشركة العامة لفحص وتأهيل المنظومات الكهربائية\nالطاقة المتجددة\nمركز الطاقات المتجددة",
    content:
      "Government sectors involved\nMinistry of Electricity: The Ministry of Electricity participates with all its formations through its fixed pavilions, which include:\nProduction companies\nGeneral Electric Power Production Company - North\nGeneral Electric Power Production Company - South\nGeneral Electric Power Production Company - Central\nGeneral Electric Power Production Company - Central Euphrates\nTransmission companies\nGeneral Electric Power Transmission Company - Northern Region\nGeneral Electric Power Transmission Company - South\nGeneral Electric Power Transmission Company - Central\nGeneral Electric Power Transmission Company - Central Euphrates\nDistribution companies\nGeneral Electricity Distribution Company - Baghdad\nGeneral Electricity Distribution Company - Central Euphrates\nGeneral Electricity Distribution Company - South\nGeneral Electricity Distribution Company - North\nGeneral Electricity Distribution Company - Central\nSupport Entities\nOperation and Control Directorate\nEnergy Research and Training Directorate\nGeneral Company for Testing and Rehabilitation of Electrical Systems\nRenewable Energy\nRenewable Energy Center",
  };

  const ministryOfOil = {
    content_ar:
      "وزارة النفط:تشارك وزارة النفط بكافة تشكيلاتها بأجنحتها الثابتة وتتضمن:\nشركة الاستكشافات النفطية\nشركة الحفر العراقية\nشركة نفط الشمال\nشركة نفط البصرة\nشركة نفط ذي قار\nشركة نفط الوسط\nشركة نفط ميسان\nشركة المشاريع النفطية\nشركة مصافي الشمال\nشركة مصافي الجنوب\nشركة مصافي الوسط\nشركة خطوط الانابيب النفطية\nشركة تعبئة الغاز\nشركة غاز الشمال\nشركة غاز الجنوب\nشركة توزيع المنتجات النفطية\nشركة ناقلات النفط العراقية\nشركة تسويق النفط (سومو)\nالشركة العامة للمعدات الهندسية الثقيلة\nمركز البحث والتطوير النفطي\nمعهد التدريب النفطي – بغداد\nمعهد التدريب النفطي – بيجي\nمعهد التدريب النفطي – ميسان\nمعهد التدريب النفطي – البصرة",
    content:
      "Ministry of Oil: The Ministry of Oil participates with all its formations through its fixed pavilions, which include:\nOil Exploration Company\nIraqi Drilling Company\nNorth Oil Company\nBasra Oil Company\nDhi Qar Oil Company\nCentral Oil Company\nMaysan Oil Company\nOil Projects Company\nNorth Refineries Company\nSouth Refineries Company\nCentral Refineries Company\nOil Pipeline Company\nGas Filling Company\nNorth Gas Company\nSouth Gas Company\nOil Products Distribution Company\nIraqi Oil Tankers Company\nOil Marketing Company (SOMO)\nGeneral Heavy Engineering Equipment Company\nOil Research and Development Center\nOil Training Institute – Baghdad\nOil Training Institute – Beiji\nOil Training Institute – Maysan\nOil Training Institute – Basra",
  };

  const nationalInvestmentCommission = {
    content_ar:
      "الهيئة الوطنية للأستثمار:تشارك الهيئة الوطنية للإستثمار بكافة تشكيلاتها بأجنحتها الثابتة وتتضمن:\nهيئة استثمار محافظة بغداد\nهيئة استثمار محافظة ديالى\nهيئة استثمار محافظة صلاح الدين\nهيئة استثمار محافظة كركوك\nهيئة استثمار محافظة نينوى\nهيئة استثمار محافظة الأنبار\nهيئة استثمار محافظة واسط\nهيئة استثمار محافظة كربلاء المقدسة\nهيئة استثمار محافظة بابل\nهيئة استثمار محافظة النجف الاشرف\nهيئة استثمار محافظة ذي قار\nهيئة استثمار محافظة ميسان\nهيئة استثمار محافظة المثنى\nهيئة استثمار محافظة الديوانية\nهيئة استثمار محافظة البصرة",
    content:
      "National Investment Commission: The National Investment Commission participates with all its formations through its fixed pavilions, which include:\nBaghdad Investment Authority\nDiyala Investment Authority\nSalah al-Din Investment Authority\nKirkuk Investment Authority\nNineveh Investment Authority\nAnbar Investment Authority\nWasit Investment Authority\nKarbala Investment Authority\nBabil Investment Authority\nNajaf Investment Authority\nDhi Qar Investment Authority\nMaysan Investment Authority\nAl-Muthanna Investment Authority\nAl-Qadisiyyah Investment Authority\nBasra Investment Authority",
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
                    {lang
                      ? "القطاعات الحكومية المشاركة"
                      : "Government Sectors Involved"}
                  </h1>
                </div>
                <div className="px-5 text-white w-75">
                  {" "}
                  <h6>
                    {lang
                      ? "يحظى معرض طاقة العراق الدولي العاشر بدعم حكومي واضح من خلال تسهيلات تنظيمية ورعاية رسمية، مما يعزز مشاركة الشركات والمستثمرين. يهدف هذا الدعم إلى تحفيز الابتكار والتعاون بين القطاعين العام والخاص، والمساهمة في تطوير قطاع الطاقة في العراق."
                      : "The 10th Iraq International Energy Exhibition receives significant government support through organizational facilitation and official sponsorship, enhancing participation from companies and investors. This support aims to foster innovation, collaboration between the public and private sectors, and contribute to the development of Iraq’s energy sector."}
                  </h6>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h2 className="main-text">
                  {lang ? "وزارة الكهرباء" : "Ministry of Electricity"}
                </h2>
                <div>
                  <p className="point mb-0">
                    {lang
                      ? ministryOfElectricity.content_ar
                      : ministryOfElectricity.content}
                  </p>
                </div>

                <h2 className="main-text mt-5">
                  {lang ? "وزارة النفط" : "Ministry of Oil"}
                </h2>
                <div>
                  <p className="point mb-0">
                    {lang ? ministryOfOil.content_ar : ministryOfOil.content}
                  </p>
                </div>

                <h2 className="main-text mt-5">
                  {lang
                    ? "الهيئة الوطنية للاستثمار"
                    : "National Investment Commission"}
                </h2>
                <div>
                  <p className="point mb-0">
                    {lang
                      ? nationalInvestmentCommission.content_ar
                      : nationalInvestmentCommission.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
