import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import plants from "@/public/images/index/plants.png";
import water from "@/public/images/index/water.png";
import { useRecoilValue } from "recoil";
import { langState } from "@/atom/atom";
import Slider from "./Slider";
import Carousel from "react-multi-carousel";
import Slider2 from "./Slider2";
import axios from "axios";

import img_1 from "@/public/images/background-images/trams.webp";
import img_2 from "@/public/images/background-images/smn.webp";
import img_3 from "@/public/images/background-images/bn.webp";
import img_4 from "@/public/images/background-images/powe.webp";
import img_5 from "@/public/images/background-images/mang.webp";
import img_6 from "@/public/images/background-images/battery.webp";
import Link from "next/link";

export default function Section3({ category }) {
  const lang = useRecoilValue(langState);

  const [activeTab, setActiveTab] = useState(0);
  const [activeImage, setActiveImage] = useState("img-1");
  const [show, setShow] = useState();
  useEffect(() => {
    if (activeTab === 0) {
      setActiveImage("img-1");
    } else if (activeTab === 1) {
      setActiveImage("img-2");
    } else if (activeTab === 2) {
      setActiveImage("img-3");
    } else if (activeTab === 3) {
      setActiveImage("img-4");
    } else if (activeTab === 4) {
      setActiveImage("img-5");
    } else if (activeTab === 5) {
      setActiveImage("img-6");
    }
  }, [activeTab]);

  const tabs = [
    {
      title: lang ? "الحلول الذكية" : "Smart Solutions",
      content: (
        <div className="tab-content">
          <div className="tab-title">
            <h3>
              {" "}
              {lang
                ? "تحسين الطاقة باستخدام أحدث التقنيات الذكية"
                : "Optimizing Energy with Cutting-Edge Smart Technologies"}
            </h3>
          </div>
          <div className="tab-text">
            <p>
              {lang
                ? " تسليط الضوء على التقنيات الجديدة لجمهور يبحث عن طرق لتحويل عملياته ونماذجه التجارية رقميًا. يُعد هذا القطاع المنصة المثالية لاكتشاف كيف يمكن للتكنولوجيا أن تُهيئ أعمالكم للمستقبل."
                : "Highlighting new technologies to an audience that is looking for ways to digitally transform their operations and business models. This sector is the ultimate platform to discover how technology can prepare your businesses for the future."}
            </p>
          </div>
          <div className="col-lg-3 col-sm-12 text-center">
            <div className="main-button">
              <Link href="/whyVisite" passHref>
                <div className="main-btn" target="_blank" title="Read More">
                  {lang ? "اقرأ المزيد" : "Read More"}
                </div>
              </Link>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: lang ? "النقل والتوزيع" : "Transmission & Distribution",
      content: (
        <div className="tab-content">
          <div className="tab-title">
            <h3>
              {lang
                ? "   تمهيد الطريق لمستقبل موثوق به  "
                : " Powering the Path to a Reliable Future"}
            </h3>
          </div>
          <div className="tab-text">
            <p>
              {lang
                ? "ونه القطاع الأطول والأكثر نجاحًا في معرض الطاقة في الشرق الأوسط، سيستضيف قطاع النقل والتوزيع كبار الشركات في الصناعة والشركات الدولية من مختلف البلدان، لعرض سلسلة القيمة الكاملة للمنتجات ودعم تعافي قطاع الطاقة بعد الجائحة"
                : "Being Middle East Energy’s longest and most successful sector, Transmission & Distribution will host industry bellwethers and international companies from various countries, showcasing the entire value chain of products and will support the recovery of the post-pandemic energy landscape.  "}
            </p>
          </div>
          <div className="col-lg-3 col-sm-12 text-center">
            <div className="main-button">
              <Link href="/whyVisite" passHref>
                <div className="main-btn" target="_blank" title="Read More">
                  {lang ? "اقرأ المزيد" : "Read More"}
                </div>
              </Link>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: lang ? "الطاقة المتجددة والنظيفة" : "Renewable & Clean Energy",
      content: (
        <div className="tab-content">
          <div className="tab-title">
            <h3>
              {lang
                ? "بناء مستقبل مستدام"
                : "Pioneering a Sustainable Tomorrow"}
            </h3>
          </div>
          <div className="tab-text">
            <p>
              {lang
                ? "تعرف على مجالات رئيسية مثل حلول الطاقة الشمسية، وطاقة الرياح، والطاقة المائية، حيث يوفر لك قطاع الطاقة المتجددة والنظيفة في معرض الطاقة في الشرق الأوسط فرصة للوصول إلى صناع القرار، والمستثمرين، والمقاولين، والمطورين، ومتكاملي الأنظمة وغيرهم، مما يساعدك على بناء علاقات ودفع أعمالك إلى المستوى التالي."
                : "Gain insights about key areas like solar, wind and hydro energy solutions, as the Renewable & Clean Energy sector at Middle East Energy provides you access to policy makers, investors, contractors, developers, system integrators and more so that you can build connections and take your business to the next level"}
            </p>
          </div>
          <div className="col-lg-3 col-sm-12 text-center">
            <div className="main-button">
              <Link href="/whyVisite" passHref>
                <div className="main-btn" target="_blank" title="Read More">
                  {lang ? "اقرأ المزيد" : "Read More"}
                </div>
              </Link>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: lang ? "الطاقة الأساسية والاحتياطية" : "Critical & Backup Power",
      content: (
        <div className="tab-content">
          <div className="tab-title">
            <h3>
              {lang
                ? " تعزيز الموثوقية في الأوقات الحرجة"
                : "Powering Reliability When It Matters Most"}
            </h3>
          </div>
          <div className="tab-text">
            <p>
              {lang
                ? "يساعدك قطاع الطاقة الأساسية والاحتياطية في معرض الطاقة في الشرق الأوسط على الوصول إلى حلول طاقة متقدمة واستكشاف تقنيات جديدة من مزودي الطاقة المتخصصين حول العالم. يضمن لك هذا القطاع مصدرًا مستدامًا للطاقة الكهربائية لتحقيق استمرارية العمليات والعثور على ما تحتاجه لحماية بنيتك التحتية الحيوية"
                : "Helping you source progressive energy solutions and explore new technologies from niche energy providers from across the world, Critical & Backup Power sector at Middle East Energy enables you to have a source of sustained electrical power to achieve continuous operations and to find out exactly what you need to secure your critical infrastructure."}
            </p>
          </div>
          <div className="col-lg-3 col-sm-12 text-center">
            <div className="main-button">
              <Link href="/whyVisite" passHref>
                <div className="main-btn" target="_blank" title="Read More">
                  {lang ? "اقرأ المزيد" : "Read More"}
                </div>
              </Link>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: lang
        ? "استهلاك الطاقة وإدارتها"
        : "Energy Consumption & Management",
      content: (
        <div className="tab-content">
          <div className="tab-title">
            <h3>
              {lang
                ? "قيادة الطريق في استخدام الطاقة بكفاءة"
                : "Leading the Charge in Efficient Energy Use"}
            </h3>
          </div>
          <div className="tab-text">
            <p>
              {lang
                ? " يركز قطاع استهلاك الطاقة وإدارتها على تحسين استخدام موارد الطاقة عبر مختلف الصناعات والقطاعات، حيث يقدم رؤى حول مجموعة من التقنيات المتقدمة والاستراتيجيات التي تهدف إلى مراقبة الطاقة والتحكم فيها وتقليل استهلاكها مع تعظيم الكفاءة"
                : "Focusing on optimizing the use of energy resources across various industries and sectors, the Energy Consumption & Management sector sheds insights into a range of advanced technologies and strategies aimed at monitoring, controlling, and reducing energy consumption while maximizing efficiency."}
            </p>
          </div>
          <div className="col-lg-3 col-sm-12 text-center">
            <div className="main-button">
              <Link href="/whyVisite" passHref>
                <div className="main-btn" target="_blank" title="Read More">
                  {lang ? "اقرأ المزيد" : "Read More"}
                </div>
              </Link>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: lang ? "البطاريات والتنقل الكهربائي" : "Battery & eMobility ",
      content: (
        <div className="tab-content">
          <div className="tab-title">
            <h3>
              {lang
                ? "دفع مستقبل الحلول الكهربائية والطاقة المتقدمة"
                : "Driving the Future of Advanced Electric and Energy Solutions"}
            </h3>
          </div>
          <div className="tab-text">
            <p>
              {lang
                ? "من البنية التحتية الفعالة للشحن إلى تقنيات البطاريات المتقدمة، يجمع قطاع البطاريات والتنقل الكهربائي في معرض الطاقة في الشرق الأوسط بين الاستدامة ووسائل النقل. سيقود هذا القطاع النقاش حول القوة التحولية لحلول التنقل النظيفة والفعالة في تشكيل مستقبل مستدام"
                : "From efficient charging infrastructure to advanced battery technologies, the Battery & eMobility sector at Middle East Energy converges sustainability and transportation. This sector will lead the discussion about the transformative power of clean efficient mobility solutions for shaping a sustainable future."}
            </p>
          </div>
          <div className="col-lg-3 col-sm-12 text-center">
            <div className="main-button">
              <Link href="/whyVisite" passHref>
                <div className="main-btn" target="_blank" title="Read More">
                  {lang ? "اقرأ المزيد" : "Read More"}
                </div>
              </Link>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section>
      <div className={`section-3 ${activeImage}  `}>
        <div className={` container pb-5 `}>
          <h2 className="mb-5 mt-5">
            {lang
              ? "اكتشف قوة الابتكار عبر 6 مجالات."
              : "Discover the Power of Innovation via 6 Product Sectors"}
          </h2>
          <div className="tabs ">
            <div className="col-lg-3 col-sm-12">
              <ol className="tabs-list ">
                {tabs.map((tab, index) => (
                  <li
                    key={index}
                    className={`tab-item ${
                      activeTab === index ? "active" : ""
                    }`}
                    onClick={() => {
                      setActiveTab(index);
                      setShow(true);
                      setTimeout(() => {
                        setShow(false);
                      }, 200);
                    }}
                  >
                    {tab.title}
                  </li>
                ))}
              </ol>
            </div>
            <div className="tab-panel">{tabs[activeTab].content}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
