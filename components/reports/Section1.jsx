import React, { useEffect, useState } from "react";
import Image from "next/image";
import plants from "@/public/images/index/plants.png";
import water from "@/public/images/index/water.png";
import { useRecoilValue } from "recoil";
import { langState } from "@/atom/atom";
import axios from "axios";
import { toast } from "react-toastify";
export default function Section1({ data }) {
  const lang = useRecoilValue(langState);

  const [contryData, setContryData] = useState([]);

  const [formData, setFormData] = useState({});
  const handleChage = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const emailValidation = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (
      !formData.company ||
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.job_title ||
      !formData.intrest
    ) {
      toast.error(
        lang ? "إملأ جميع الحقول المطلوبة" : "Fill all required fields"
      );
      return;
    }

    if (!emailValidation(formData.email)) {
      toast.error(lang ? "البريد الالكتروني غير صالح" : "Invalid Email");
      return;
    }

    const loading = toast.loading(lang ? "جاري التحميل" : "Loading...");
    axios
      .post("/report/", { ...formData })
      .then((res) => {
        toast.success(lang ? "تم التسجيل بنجاح" : "Registered Successfully");
        setFormData({});

        toast.dismiss(loading);
      })
      .catch((err) => {
        toast.error(lang ? "حدث خطأ ما" : "Something went wrong");
        toast.dismiss(loading);
      });
  };

  return (
    <>
      <section className="row section-1 mx-auto">
        <div action="" className="form-container"> 
          <div className="container">
            <div
              className="bg-image col-12 mb-4"
            >
              <div className="allpic">
                <div className="title pt-5 d-flex align-content-center px-4 overflow-hidden mb-3 ">
                  <div className="line"> </div>

                  <h1 className=" px-2 textfade ">
                    {lang ? "التقارير " : "Reports"}{" "}
                  </h1>
                </div>
                <div className="px-5 text-white w-75">
                  {" "}
                  <h6>
                    {lang
                      ? "هذا التقرير يسلط الضوء على معرض طاقة العراق الدولي العاشر في بغداد، حيث يتم استعراض البرامج والمبادرات الاستراتيجية التي تهدف إلى تعزيز مشاريع الطاقة في العراق والمنطقة. كما يناقش المعرض الطلب المتزايد على الطاقة وأحدث الحلول المبتكرة لتلبية احتياجات المستقبل"
                      : "This report highlights the 10th Iraq International Energy Exhibition in Baghdad, showcasing strategic programs and initiatives aimed at enhancing energy projects in Iraq and the region. The exhibition also addresses the growing demand for energy and explores the latest innovative solutions to meet future needs"}
                  </h6>
                </div>
              </div>
            </div>
            <form action="" onSubmit={handleSubmit} className="form row">
              <h5 className="main-text px-0 mb-4">
                {lang
                  ? "للحصول على تقرير المعرض العاشر يرجى التواصل معنا :"
                  : "For the report of the 10th exhibition, please contact us:"}
              </h5>
              <div className="col-md-6 col-12 pe-md-5 px-0">
                <div className="input-group d-block">
                  <label htmlFor="name">
                    {lang ? "الاسم" : "Name"} <span className="mx-1">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control col-10"
                    placeholder={lang ? "الاسم" : "Name"}
                    value={formData.name || ""}
                    onChange={handleChage}
                    required
                  />
                </div>
                <div className="input-group d-block">
                  <label htmlFor="company">
                    {lang ? "اسم الشركة" : "Company Name"}
                    <span className="mx-1">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    className="form-control col-10"
                    placeholder={lang ? "اسم الشركة" : "Company Name"}
                    value={formData.company || ""}
                    onChange={handleChage}
                    required
                  />
                </div>
                <div className="input-group d-block">
                  <label htmlFor="job_title">
                    {lang ? " اسم القطاع المهتم به " : "The sector of interest"}
                    <span className="mx-1">*</span>
                  </label>
                  <input
                    type="text"
                    name="job_title"
                    id="job_title"
                    className="form-control col-10"
                    placeholder={
                      lang ? "اسم القطاع المهتم به " : "The sector of interest"
                    }
                    value={formData.job_title || ""}
                    onChange={handleChage}
                    required
                  />
                </div>
                <div className="input-group d-block">
                  <label htmlFor="message">{lang ? "رسالة" : "Message"}</label>
                  <textarea
                    name="message"
                    id="message"
                    className="form-control w-100"
                    placeholder={lang ? "رسالة" : "Message"}
                    value={formData.message || ""}
                    onChange={handleChage}
                  ></textarea>
                </div>
              </div>
              <div className="col-md-6 col-12  ps-5 ">
                <div className="input-group d-block">
                  <label htmlFor="email">
                    {lang ? "البريد الالكتروني" : "Email"}
                    <span className="mx-1">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control col-10"
                    placeholder={lang ? "البريد الالكتروني" : "Email"}
                    value={formData.email || ""}
                    onChange={handleChage}
                    required
                  />
                </div>

                <div className="input-group d-block">
                  <label htmlFor="phone">
                    {lang ? "رقم الهاتف" : "Phone Number"}
                    <span className="mx-1">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="form-control col-10"
                    placeholder={`+964`}
                    value={formData.phone || ""}
                    onChange={handleChage}
                    required
                  />
                </div>

                <div className="input-group d-block">
                  <label htmlFor="intrest">
                    {lang ? "مهتم " : "Intrested in"}
                    <span className="mx-1">*</span>
                  </label>
                  <select
                    name="intrest"
                    id="intrest"
                    className="form-select col-10"
                    value={formData.intrest || "null"}
                    onChange={handleChage}
                  >
                    <option selected disabled value="null">
                      {lang ? "اختيار" : "choose"}
                    </option>
                    <option value="Participation">
                      {lang ? "	المشاركة" : "Participation"}
                    </option>
                    <option value="visit">{lang ? "	الزيارة" : "Visit"}</option>

                    <option value="research">
                      {lang ? "البحث عن معلومات" : "Looking for information"}
                    </option>
                  </select>
                </div>
                <div className="input-group d-block">
                  <label htmlFor="heard_from">
                    {lang ? "مكان الاقامة " : "Accommodation"}
                  </label>
                  <select
                    name="heard_from"
                    id="heard_from"
                    className="form-select col-10"
                    value={formData.heard_from || "null"}
                    onChange={handleChage}
                  >
                    <option selected disabled value="null">
                      {lang ? "اختيار" : "choose"}
                    </option>
                    <option value="baghdad">
                      {lang ? "بغداد" : "Baghdad"}
                    </option>
                    <option value="basra">{lang ? "البصرة" : "Basra"}</option>
                    <option value="najaf">{lang ? "النجف" : "Najaf"}</option>
                    <option value="karbala">
                      {lang ? "كربلاء" : "Karbala"}
                    </option>
                    <option value="sulaymaniyah">
                      {lang ? "السليمانية" : "Sulaymaniyah"}
                    </option>
                    <option value="erbil">{lang ? "أربيل" : "Erbil"}</option>
                    <option value="diyala">{lang ? "ديالى" : "Diyala"}</option>
                    <option value="kirkuk">{lang ? "كركوك" : "Kirkuk"}</option>
                    <option value="missan">
                      {lang ? "الميسان" : "Missan"}
                    </option>
                    <option value="muthanna">
                      {lang ? "المثنى" : "Muthanna"}
                    </option>
                    <option value="qadisiyyah">
                      {lang ? "القادسية" : "Qadisiyyah"}
                    </option>
                    <option value="dhiQar">
                      {lang ? "ذي قار" : "Dhi Qar"}
                    </option>
                    <option value="wasit">{lang ? "واسط" : "Wasit"}</option>
                    <option value="babil">{lang ? "بابل" : "Babil"}</option>
                    <option value="anbar">{lang ? "الأنبار" : "Anbar"}</option>
                    <option value="thiqar">
                      {lang ? "ذي قار" : "Thi Qar"}
                    </option>
                    <option value="salahAlDin">
                      {lang ? "صلاح الدين" : "Salah Al Din"}
                    </option>
                    <option value="nenevah">
                      {lang ? "نينوى" : "Nineveh"}
                    </option>
                    <option value="alQadisiyah">
                      {lang ? "القادسية" : "Al Qadisiyah"}
                    </option>
                    <option value="alMuthanna">
                      {lang ? "المثنى" : "Al Muthanna"}
                    </option>
                  </select>
                </div>
                <div className="input-group d-flex flex-column">
                  <button
                    className="main-btn mt-4"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    {lang ? "ارسال" : "Submit"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
