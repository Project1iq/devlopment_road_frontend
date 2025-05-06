import React from "react";
import { useRecoilValue } from "recoil";
import { langState } from "@/atom/atom";

export default function Section1() {
  const lang = useRecoilValue(langState);

  const developmentRoadRelations = {
    content_ar: `مشروع "طريق التنمية" ليس مجرد مشروع بنية تحتية، بل يمثل منصة استراتيجية لتعزيز العلاقات الإقليمية والدولية للعراق. من خلال هذا المشروع، يسعى العراق إلى:

- تعزيز التعاون مع تركيا: عبر ربط ميناء الفاو الكبير بالحدود التركية، مما يعزز التبادل التجاري ويقوي العلاقات الاقتصادية بين البلدين.

- الشراكة مع دول الخليج: مثل قطر والإمارات، حيث تم توقيع مذكرات تفاهم لدعم المشروع، مما يفتح آفاقًا جديدة للتعاون الاقتصادي والاستثماري.

- التكامل مع مبادرات دولية: مثل مبادرة الحزام والطريق الصينية، مما يتيح للعراق دورًا محوريًا في التجارة بين آسيا وأوروبا.

- تعزيز العلاقات مع الاتحاد الأوروبي: من خلال تقديم العراق كجسر بري يربط الشرق بالغرب، مما يسهم في تنويع طرق التجارة وتقليل الاعتماد على الممرات التقليدية.

من خلال هذه الشبكة من العلاقات، يطمح العراق إلى تعزيز مكانته الجيوسياسية والاقتصادية في المنطقة والعالم.`,
    content_en: `The "Development Road" project is not merely an infrastructure endeavor; it serves as a strategic platform to bolster Iraq's regional and international relations. Through this project, Iraq aims to:

- **Enhance cooperation with Turkey**: By connecting the Grand Faw Port to the Turkish border, facilitating trade exchange and strengthening economic ties.

- **Partner with Gulf countries**: Such as Qatar and the UAE, with memorandums of understanding signed to support the project, opening new horizons for economic and investment collaboration.

- **Integrate with international initiatives**: Like China's Belt and Road Initiative, positioning Iraq as a pivotal player in trade between Asia and Europe.

- **Strengthen relations with the European Union**: By presenting Iraq as a land bridge connecting East and West, contributing to diversified trade routes and reducing reliance on traditional passages.

Through this network of relations, Iraq aspires to enhance its geopolitical and economic standing in the region and the world.`,
  };

  return (
    <section className="row section-1 mx-auto">
      <div className="form-container">
        <div className="container">
          <div className="bg-image col-12 mb-4">
            <div className="allpic">
              <div className="title pt-5 d-flex align-content-center px-4 overflow-hidden mb-3">
                <div className="line"> </div>
                <h1 className="px-2 textfade">
                  {lang ? "شبكة العلاقات لمشروع طريق التنمية" : "Development Road Project Relations Network"}
                </h1>
              </div>
              <div className="px-5 text-white w-75">
                <h6>
                  {lang
                    ? "يُعد مشروع طريق التنمية منصة استراتيجية لتعزيز العلاقات الإقليمية والدولية للعراق، مما يسهم في تعزيز مكانته الجيوسياسية والاقتصادية."
                    : "The Development Road project serves as a strategic platform to bolster Iraq's regional and international relations, enhancing its geopolitical and economic stature."}
                </h6>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2 className="main-text">
                {lang ? "تفاصيل العلاقات" : "Relations Details"}
              </h2>
              <div>
                <p className="point mb-0">
                  {lang
                    ? developmentRoadRelations.content_ar
                    : developmentRoadRelations.content_en}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
