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
        setFormData({
          country: res.data[0].name.common,
        });
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
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.country
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
      .post("/contact/", { ...formData })
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
                    {lang ? "للتواصل" : "Contact"}
                  </h1>
                </div>
                <div className="px-5 text-white w-75">
                  {" "}
                  <h6>
                    {lang
                      ? "لأي استفسارات أو لمزيد من المعلومات حول خدماتنا ومنتجاتنا، لا تتردد في الاتصال بنا. نحن هنا لخدمتك ونسعد بالإجابة على جميع استفساراتك. سواء كنت بحاجة إلى استشارة تصميم داخلي، أو مساعدة في اختيار الأنسب لمساحتك، نحن مستعدون دائمًا لتقديم الدعم والمساعدة. تواصل معنا اليوم لبدء مشروعك المقبل"
                      : "For any inquiries or more information about our services and products, feel free to reach out to us. We are here to serve you and are happy to answer all your questions. Whether you need interior design consultation or help in selecting the best options for your space, we are always ready to provide support and assistance. Contact us today to start your next project"}
                  </h6>
                </div>
              </div>
            </div>
            <form action="" onSubmit={handleSubmit} className="form row">
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
                  <label htmlFor="country">
                    {lang ? "الموقع " : "Location"}
                    <span className="mx-1">*</span>
                  </label>
                  <select
                    name="country"
                    id="country"
                    className="form-select"
                    value={formData.country || ""}
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
                  <label htmlFor="message">{lang ? "رسالة" : "Message"}</label>
                  <textarea
                    name="message"
                    id="message"
                    className="form-control w-100"
                    placeholder={lang ? "رسالة" : "Message"}
                    value={formData.message}
                    onChange={handleChage}
                  ></textarea>
                </div>
                <div
                  className="input-group d-flex flex-column"
                  onClick={handleSubmit}
                >
                  <button className="main-btn mt-4">
                    {lang ? "ارسال" : "Submit"}
                  </button>
                </div>
              </div>
              <div className="col-md-6 col-12  ps-5 ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15530.130494455812!2d44.344502081993994!3d33.31643169984139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15577f003c488b0f%3A0xe799625523ce898f!2z2YXYudix2LYg2KjYutiv2KfYryDYp9mE2K_ZiNmE2Yo!5e0!3m2!1sen!2siq!4v1731948350087!5m2!1sen!2siq"
                  width="600"
                  height="800"
                  // style="border:0;"
                  allowFullScreen
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  className="w-100 h-100"
                ></iframe>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
