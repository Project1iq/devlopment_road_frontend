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
  return (
    <section className="row section-2 mx-auto pt-5 container">
      <div className=" form-container">
        <div className="mainbro">
          <h2 className="main-text text-center">
            {lang
              ? " في معرض العراق للطاقة، يمكنك..."
              : "At Iraq Energy you can..."}
          </h2>
        </div>

        <div className="row col-12 d-flex flex-md-row flex-column justify-content-center ">
          <div className="col-12  col-md-3 d-flex flex-column justify-content-start px-3 ">
           
            <Image
              src="/images/9.jpg"
              alt="وصف للصورة"
              width={2000}
              height={2000}
              className={"responsiveImage mb-3"}
            />
            
            {lang ? (
              <p>
                {" "}
                <b> تواصل </b> مع أكثر من 1,000 من موردي ومصنعي الطاقة
                العالميين، واستكشف موردي الطاقة من جميع أنحاء الصناعة الذين
                يقدمون حلولًا مصممة لتلبية احتياجات عملك.
              </p>
            ) : (
              <p>
                {" "}
                <b> Connect </b> with over 1,000 global energy suppliers and
                manufacturers, and explore energy providers from across the
                industry offering solutions tailored to your business needs.
              </p>
            )}
          </div>
          <div className="col-12  col-md-3 d-flex flex-column justify-content-start px-3 ">
            <Image
              src="/images/2.jpg"
              alt="وصف للصورة"
              width={2000}
              height={2000}
              className={"responsiveImage mb-3"}
            />
            {lang ? (
              <p>
                {" "}
                <b> اكتشف </b> أحدث منتجات وحلول الطاقة وابقَ على اطلاع دائم على
                الوضع الحالي لصناعة الطاقة.
              </p>
            ) : (
              <p>
                {" "}
                <b> Discover </b> the latest energy products and solutions, and
                stay updated on the current state of the energy industry.
              </p>
            )}
          </div>
          <div className="col-12  col-md-3 d-flex flex-column justify-content-start px-3 ">
            <Image
              src="/images/15.jpg"
              alt="وصف للصورة"
              width={2000}
              height={2000}
              className={"responsiveImage mb-3"}
            />
            {lang ? (
              <p>
                {" "}
                <b> بناء </b> شراكات جديدة في الصناعات التي تركز على الحلول
                الذكية، والطاقة المتجددة والنظيفة، وتخزين الطاقة، والهيدروجين
                الأخضر، والنقل والتوزيع، والطاقة الحرجة والاحتياطية، واستهلاك
                الطاقة، وتنويع مزيج الطاقة الخاص بك.
              </p>
            ) : (
              <p>
                {" "}
                <b> Build </b> new partnerships in industries focusing on smart
                solutions, renewable and clean energy, energy storage, green
                hydrogen, transmission and distribution, critical and backup
                power, energy consumption, and diversifying your energy mix.
              </p>
            )}
          </div>
          <div className="col-12  col-md-3 d-flex flex-column justify-content-start px-3 ">
            <Image
              src="/images/3.jpg"
              alt="وصف للصورة"
              width={2000}
              height={2000}
              className={"responsiveImage mb-3"}
            />
            {lang ? (
              <p>
                {" "}
                <b> تعرف </b> على المزيد حول حلول الطاقة الشائعة وتواصل مع
                الشركات التي ستضيف قيمة إلى مشروعك للطاقة من خلال ورش العمل
                والمؤتمر الخاص بالمعرض.
              </p>
            ) : (
              <p>
                {" "}
                <b> Learn </b> more about popular energy solutions and connect
                with companies that will add value to your energy project
                through the exhibition workshops and conference.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
