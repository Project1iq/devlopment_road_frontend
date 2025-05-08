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
          <div className="container pt-lg-0 pt-5">
            <div className="bg-image col-12 mb-4">
              <div className="allpic">
                <div className="title pt-5 d-flex align-content-center px-4 overflow-hidden mb-3 ">
                  <div className="line"> </div>
                  <h1 className=" px-2 textfade ">
                    {lang ? "التقرير " : "Report"}{" "}
                  </h1>
                </div>
                <div className="px-5 text-white col-md-8 col-12">
                  {" "}
                  <h6 className="d-none d-md-block">
                    {lang
                      ? "هذا التقرير يسلط الضوء على معرض التنمية الدولي في بغداد، حيث يتم استعراض البرامج والمبادرات الاستراتيجية التي تهدف إلى تعزيز مشاريع التنمية في العراق والمنطقة. كما يناقش المعرض التحديات الحالية والفرص المستقبلية لتحقيق التنمية المستدامة."
                      : "This report highlights the International Development Exhibition in Baghdad, showcasing strategic programs and initiatives aimed at enhancing development projects in Iraq and the region. The exhibition also discusses the current challenges and future opportunities for achieving sustainable development."}
                  </h6>
                </div>
              </div>
            </div>
            <h5 className="main-text px-0 mb-4">
              {lang
                ? "للحصول على تقرير المعرض، يرجى التواصل معنا :"
                : "For the exhibition report, please contact us:"}
            </h5>
            <form action="" onSubmit={handleSubmit} className="form row">
              <div className="col-md-6 col-12 pe-md-5 px-lg-2 px-0">
                <div className="input col-md-12 col-12">
                  <input
                    type="text"
                    className="input-field"
                    name="full_name"
                    value={formData.name}
                    onChange={handleChage}
                    required
                  />
                  <label className="input-label">
                    {lang ? " الاسم الكامل" : "full Name"}
                  </label>
                </div>

                <div className="input col-md-12 col-12">
                  <input
                    type="text"
                    className="input-field"
                    name="company"
                    value={formData.company || ""}
                    onChange={handleChage}
                    required
                  />
                  <label className="input-label">
                    {lang ? "اسم الشركة" : "Company Name"}
                  </label>
                </div>

                <div className="input col-md-12 col-12">
                  <input
                    required
                    className="input-field"
                    type="text"
                    name="department"
                    value={formData.department || ""}
                    onChange={handleChage}
                  />
                  <label className="input-label">
                    {lang ? "اسم القطاع المهتم به" : "Department Name"}
                  </label>
                </div>

                <div style={{ marginTop: "0px" }} className="input">
                  <textarea
                    required
                    className="input-field"
                    name="message"
                    value={formData.message || ""}
                    onChange={handleChage}
                  ></textarea>
                  <label className="input-label">
                    {lang ? "رسالة" : "Message"}
                  </label>
                </div>
              </div>

              <div className="col-md-6 col-12  px-lg-2 px-0 mt-lg-0 mt-4">
                <div className="input col-md-12 col-12">
                  <input
                    required
                    className="input-field"
                    type="email"
                    name="email"
                    value={formData.email || ""}
                    onChange={handleChage}
                  />
                  <label className="input-label">
                    {lang ? "البريد الالكتروني" : "Email"}
                  </label>
                </div>

                <div className="input col-md-12 col-12">
                  <input
                    required
                    className="input-field"
                    type="tel"
                    name="phone"
                    value={formData.phone || ""}
                    onChange={handleChage}
                    placeholder="+"
                  />
                  <label className="input-label">
                    {lang ? "رقم الهاتف" : "Phone Number"}
                  </label>
                </div>

                <div className="input col-md-12 col-12">
                  <select
                    name="intrest"
                    style={{ borderBottom: "2px solid #b5b5b5" }}
                    id="intrest"
                    className="input-field"
                    value={formData.intrest || "null"}
                    onChange={handleChage}
                  >
                    <option selected disabled value="null">
                      {lang ? "اختيار" : "Choose"}
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
                  <label style={{ color: "#2f2f2f" }} className="input-label pb-2">
                    {lang ? "مهتم" : "Interested in"}
                  </label>
                </div>

                <div className="input-group d-flex flex-column">
                  <button
                    className="main-btn mt-5"
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
