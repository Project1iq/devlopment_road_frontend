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

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => {
        setContryData(res.data);
        setFormData((prevData) => ({
          ...prevData,
          country: res.data[0].name.common,
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const emailValidation = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (
      !formData.location_type ||
      !formData.location_size ||
      !formData.name ||
      !formData.company ||
      !formData.job_title ||
      !formData.email ||
      !formData.phone ||
      !formData.country ||
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
      .post("/book-care/", { ...formData })
      .then((res) => {
        toast.success(lang ? "تم التسجيل بنجاح" : "Registered Successfully");
        setFormData({
          country: contryData[0].name.common,
        });
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
            <div className="bg-image col-12 mb-4">
              <div className="allpic">
                <div className="title pt-5 d-flex align-content-center px-4 overflow-hidden mb-3 ">
                  <div className="line"> </div>

                  <h1 className=" px-2 textfade ">
                    {lang ? " كن راعيًا" : "Become a Sponsor"}
                  </h1>
                </div>
                <div className="px-5 text-white w-75">
                  {" "}
                  <h6>
  {lang
    ? "الرعاية أسرع اشكال التسويق نمو في الوقت الحاضر الرعاية هي الدعم المالــــــــــي أو العيني لنشاط ما ويتم استخدامه بشكل أساسي للوصول إلى أهدافك التجاريـة. يستخدم عدد كبير من المعارض هذه الأيام دعم الرعاية لتقديم برامج أكثر إثـــــارة. تسمح لك الرعاية بالوصول إلى أسواق متخصصة وموجهة بالإضافة إلى ذلك كاستكمال قوي لبرامج التسويق الأخرى، يمكن أن يكون للرعاية تأثير كبير على علاقات العملاء."
    : "Sponsorship is the fastest growing form of marketing today. It is the financial or in-kind support of an activity, primarily used to achieve your business objectives. Many exhibitions today rely on sponsorship support to offer more exciting programs. Sponsorship allows you to reach specialized and targeted markets, in addition to being a powerful complement to other marketing programs. Sponsorship can have a significant impact on customer relationships."
  }
</h6>

                </div>
              </div>
            </div>
            <form action="" onSubmit={handleSubmit} className="form row">
              <div className="col-md-6 col-12 pe-md-5 px-0">
                <div className="input-group d-block">
                  <label htmlFor="location_type">
                    {lang ? "نوع الموقع" : "Location type"}
                    <span className="mx-1">*</span>
                  </label>
                  <select
                    name="location_type"
                    id="location_type"
                    className="form-select col-10"
                    value={formData.location_type || "null"}
                    onChange={handleChage}
                  >
                    <option selected disabled value="null">
                      {lang ? "اختيار" : "choose"}
                    </option>
                    <option value="inOnly">
                      {lang ? "مساحة داخلية فقط " : "Indoor Space Only"}
                    </option>
                    <option value="standerd">
                      {lang
                        ? "مساحة داخلية مع ديكور اعتيادي "
                        : "Indoor Space with Standard Decoration"}
                    </option>
                    <option value="special">
                      {lang ? "ديكور خاص" : "Special Decoration"}
                    </option>
                  </select>
                </div>
                <div className="input-group d-block">
                  <label htmlFor="location_size">
                    {lang ? "مامقدار المساحة  " : "How much space"}
                    <span className="mx-1">*</span>
                  </label>
                  <select
                    name="location_size"
                    id="location_size"
                    className="form-select col-10"
                    value={formData.location_size || "null"}
                    onChange={handleChage}
                  >
                    <option selected disabled value="null">
                      {lang ? "اختيار" : "choose"}
                    </option>
                    <option value="12">{lang ? "12م" : "12M"}</option>
                    <option value="15">{lang ? "15م " : "15M"}</option>
                    <option value="18">{lang ? "18م" : "18M"}</option>
                    <option value="21">{lang ? "21م" : "21M"}</option>
                    <option value="24 ">{lang ? "24م" : "24M"}</option>
                    <option value="more">{lang ? "اكثر" : "More"}</option>
                  </select>
                </div>
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
                    {lang ? "المسمى الوظيفي" : "Job Title"}
                    <span className="mx-1">*</span>
                  </label>
                  <input
                    type="text"
                    name="job_title"
                    id="job_title"
                    className="form-control col-10"
                    placeholder={lang ? "المسمى الوظيفي" : "Job Title"}
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
                    placeholder={`+`}
                    value={formData.phone || ""}
                    onChange={handleChage}
                    required
                  />
                </div>
                <div className="input-group d-block">
                  <label htmlFor="country">{lang ? "الدولة" : "Country"}</label>
                  <select
                    name="country"
                    id="country"
                    className="form-select"
                    value={formData.country}
                    onChange={handleChage}
                  >
                    {contryData.map((contry, index) => (
                      <option key={index} value={contry.name.common}>
                        {lang
                          ? contry?.translations?.ara?.common
                          : contry?.name?.common}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="input-group d-block">
                  <label htmlFor="department">
                    {lang ? "اسم القطاع المهتم به" : "Department Name"}
                  </label>
                  <input
                    type="text"
                    name="department"
                    id="department"
                    className="form-control col-10"
                    placeholder={
                      lang ? "اسم القطاع المهتم به" : "Department Name"
                    }
                    value={formData.department || ""}
                    onChange={handleChage}
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
                    <option value="exhibitor">
                      {lang ? "العارض" : "Exhibitor"}
                    </option>
                    <option value="visitor">
                      {lang ? "الزائر" : "Visitor"}
                    </option>
                    <option value="research">
                      {lang ? "البحث عن معلومات" : "Looking for information"}
                    </option>
                  </select>
                </div>
                <div className="input-group d-block">
                  <label htmlFor="heard_from">
                    {lang ? "كيف سمعت عنا؟" : "How did you hear about us?"}
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
                    <option value="socialMedia">
                      {lang ? "وسائل التواصل الاجتماعي" : "Social Media"}
                    </option>
                    <option value="twitter">
                      {lang ? "تويتر " : "Twitter"}
                    </option>
                    <option value="facebook">
                      {lang ? "فيسبوك" : "Facebook"}
                    </option>
                    <option value="googleAds">
                      {lang ? "جوجل اعلانات " : "Google Ads"}
                    </option>
                    <option value="directCall">
                      {lang ? "اتصال من منظم " : "Direct Call"}
                    </option>
                    <option value="coworker">
                      {lang ? "زميل العمل" : "Coworker"}
                    </option>
                    <option value="previousExhibitor">
                      {lang ? "عارض سابق" : "Previous Exhibitor"}
                    </option>
                    <option value="businessPublications">
                      {lang ? "النشرات التجارية" : "Business Publications"}
                    </option>
                    <option value="searchEngine">
                      {lang ? "محرك البحث" : "Search Engine"}
                    </option>
                    <option value="directEmail">
                      {lang ? "بريد الكتروني " : "Direct Email"}
                    </option>

                    <option value="other">{lang ? "اخرى" : "Other"}</option>
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
