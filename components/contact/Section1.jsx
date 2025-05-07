import React, { useEffect, useState } from "react";
import Image from "next/image";
import plants from "@/public/images/index/plants.png";
import water from "@/public/images/index/water.png";
import { useRecoilValue } from "recoil";
import { langState } from "@/atom/atom";
import axios from "axios";
import { toast } from "react-toastify";
import Select from "react-select";
export default function Section1({ data }) {
  const lang = useRecoilValue(langState);
const [isFocused, setIsFocused] = useState(false);
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

  const countryOptions =
  [
    { value: "Iraq", label: "العراق (Iraq)" },
    { value: "Afghanistan", label: "أفغانستان (Afghanistan)" },
    { value: "Albania", label: "ألبانيا (Albania)" },
    { value: "Algeria", label: "الجزائر (Algeria)" },
    { value: "American Samoa", label: "ساموا الأمريكية (American Samoa)" },
    { value: "Andorra", label: "أندورا (Andorra)" },
    { value: "Angola", label: "أنغولا (Angola)" },
    { value: "Anguilla", label: "أنغويلا (Anguilla)" },
    { value: "Antarctica", label: "أنتاركتيكا (Antarctica)" },
    { value: "Antigua and Barbuda", label: "أنتيغوا وباربودا (Antigua and Barbuda)" },
    { value: "Argentina", label: "الأرجنتين (Argentina)" },
    { value: "Armenia", label: "أرمينيا (Armenia)" },
    { value: "Aruba", label: "أروبا (Aruba)" },
    { value: "Asia/Pacific Region", label: "منطقة آسيا/المحيط الهادئ (Asia/Pacific Region)" },
    { value: "Australia", label: "أستراليا (Australia)" },
    { value: "Austria", label: "النمسا (Austria)" },
    { value: "Azerbaijan", label: "أذربيجان (Azerbaijan)" },
    { value: "Bahamas", label: "البهاما (Bahamas)" },
    { value: "Bahrain", label: "البحرين (Bahrain)" },
    { value: "Bangladesh", label: "بنغلاديش (Bangladesh)" },
    { value: "Barbados", label: "بربادوس (Barbados)" },
    { value: "Belarus", label: "بيلاروسيا (Belarus)" },
    { value: "Belgium", label: "بلجيكا (Belgium)" },
    
    { value: "Belize", label: "بليز (Belize)" },
    { value: "Benin", label: "بنين (Benin)" },
    
    { value: "Bermuda", label: "برمودا (Bermuda)" },
    { value: "Bhutan", label: "بوتان (Bhutan)" },
    { value: "Bolivia", label: "بوليفيا (Bolivia)" },
    { value: "Bonaire, Sint Eustatius and Saba", label: "بونير، سينت أوستاتيوس وسابا (Bonaire, Sint Eustatius and Saba)" },
    { value: "Bosnia and Herzegovina", label: "البوسنة والهرسك (Bosnia and Herzegovina)" },
   
    { value: "Bouvet Island", label: "جزيرة بوفيه (Bouvet Island)" },
    { value: "Brazil", label: "البرازيل (Brazil)" },
    { value: "British Indian Ocean Territory", label: "إقليم المحيط الهندي البريطاني (British Indian Ocean Territory)" },
    { value: "Brunei Darussalam", label: "بروناي دار السلام (Brunei Darussalam)" },
    { value: "Bulgaria", label: "بلغاريا (Bulgaria)" },
    { value: "Burkina Faso", label: "بوركينا فاسو (Burkina Faso)" },
    { value: "Burundi", label: "بوروندي (Burundi)" },
    { value: "Cambodia", label: "كمبوديا (Cambodia)" },
    { value: "Cameroon", label: "الكاميرون (Cameroon)" },
    { value: "Canada", label: "كندا (Canada)" },
    { value: "Cape Verde", label: "الرأس الأخضر (Cape Verde)" },
    { value: "Cayman Islands", label: "جزر كايمان (Cayman Islands)" },
    { value: "Central African Republic", label: "جمهورية أفريقيا الوسطى (Central African Republic)" },
    { value: "Chad", label: "تشاد (Chad)" },
    { value: "Chile", label: "تشيلي (Chile)" },
    { value: "China", label: "الصين (China)" },
    { value: "Christmas Island", label: "جزيرة الكريسماس (Christmas Island)" },
    { value: "Cocos (Keeling) Islands", label: "جزر كوكوس (كيلينغ) (Cocos (Keeling) Islands)" },
    { value: "Colombia", label: "كولومبيا (Colombia)" },
    { value: "Comoros", label: "جزر القمر (Comoros)" },
    { value: "Congo", label: "الكونغو (Congo)" },
    { value: "Congo, The Democratic Republic of the", label: "جمهورية الكونغو الديمقراطية (Congo, The Democratic Republic of the)" },
    { value: "Cook Islands", label: "جزر كوك (Cook Islands)" },
    { value: "Costa Rica", label: "كوستاريكا (Costa Rica)" },
    { value: "Croatia", label: "كرواتيا (Croatia)" },
    { value: "Cuba", label: "كوبا (Cuba)" },
    { value: "Curaçao", label: "كوراساو (Curaçao)" },
    { value: "Cyprus", label: "قبرص (Cyprus)" },
    { value: "Czech Republic", label: "جمهورية التشيك (Czech Republic)" },
    { value: "Côte d'Ivoire", label: "ساحل العاج (Côte d'Ivoire)" },
    { value: "Denmark", label: "الدنمارك (Denmark)" },
    { value: "Djibouti", label: "جيبوتي (Djibouti)" },
    { value: "Dominica", label: "دومينيكا (Dominica)" },
    { value: "Dominican Republic", label: "جمهورية الدومينيكان (Dominican Republic)" },
    { value: "Ecuador", label: "الإكوادور (Ecuador)" },
    { value: "Egypt", label: "مصر (Egypt)" },
    { value: "El Salvador", label: "السلفادور (El Salvador)" },
    { value: "Equatorial Guinea", label: "غينيا الاستوائية (Equatorial Guinea)" },
    { value: "Eritrea", label: "إريتريا (Eritrea)" },
    { value: "Estonia", label: "إستونيا (Estonia)" },
    { value: "Ethiopia", label: "إثيوبيا (Ethiopia)" },
    { value: "Falkland Islands (Malvinas)", label: "جزر فوكلاند (Malvinas) (Falkland Islands (Malvinas))" },
    { value: "Faroe Islands", label: "جزر فارو (Faroe Islands)" },
    { value: "Fiji", label: "فيجي (Fiji)" },
    { value: "Finland", label: "فنلندا (Finland)" },
    { value: "France", label: "فرنسا (France)" },
    { value: "French Guiana", label: "غويانا الفرنسية (French Guiana)" },
    { value: "French Polynesia", label: "بولينيزيا الفرنسية (French Polynesia)" },
    { value: "French Southern Territories", label: "الأقاليم الجنوبية الفرنسية (French Southern Territories)" },
    { value: "Gabon", label: "الغابون (Gabon)" },
    { value: "Gambia", label: "غامبيا (Gambia)" },
    { value: "Georgia", label: "جورجيا (Georgia)" },
    { value: "Germany", label: "ألمانيا (Germany)" },
    { value: "Ghana", label: "غانا (Ghana)" },
    { value: "Gibraltar", label: "جبل طارق (Gibraltar)" },
    { value: "Greece", label: "اليونان (Greece)" },
    { value: "Greenland", label: "جرينلاند (Greenland)" },
    { value: "Grenada", label: "غرينادا (Grenada)" },
    { value: "Guadeloupe", label: "غوادلوب (Guadeloupe)" },
    { value: "Guam", label: "غوام (Guam)" },
    { value: "Guatemala", label: "غواتيمالا (Guatemala)" },
    { value: "Guernsey", label: "غيرنزي (Guernsey)" },
    { value: "Guinea", label: "غينيا (Guinea)" },
    { value: "Guinea-Bissau", label: "غينيا بيساو (Guinea-Bissau)" },
    { value: "Guyana", label: "غيانا (Guyana)" },
    { value: "Haiti", label: "هايتي (Haiti)" },
    { value: "Heard Island and Mcdonald Islands", label: "جزيرة هيرد وجزر ماكدونالد (Heard Island and Mcdonald Islands)" },
    { value: "Holy See (Vatican City State)", label: "الكرسي الرسولي (دولة الفاتيكان) (Holy See (Vatican City State))" },
    { value: "Honduras", label: "هندوراس (Honduras)" },
    { value: "Hong Kong", label: "هونغ كونغ (Hong Kong)" },
    { value: "Hungary", label: "المجر (Hungary)" },
    { value: "Iceland", label: "آيسلندا (Iceland)" },
    { value: "India", label: "الهند (India)" },
    { value: "Indonesia", label: "إندونيسيا (Indonesia)" },
    { value: "Iran, Islamic Republic Of", label: "إيران (Iran, Islamic Republic Of)" },
    { value: "Ireland", label: "أيرلندا (Ireland)" },
    { value: "Isle of Man", label: "جزيرة مان (Isle of Man)" },
    { value: "Italy", label: "إيطاليا (Italy)" },
    { value: "Jamaica", label: "جامايكا (Jamaica)" },
    { value: "Japan", label: "اليابان (Japan)" },
    { value: "Jersey", label: "جيرزي (Jersey)" },
    { value: "Jordan", label: "الأردن (Jordan)" },
    { value: "Kazakhstan", label: "كازاخستان (Kazakhstan)" },
    { value: "Kenya", label: "كينيا (Kenya)" },
    { value: "Kiribati", label: "كيريباتي (Kiribati)" },
    { value: "Korea, Republic of", label: "كوريا الجنوبية (Korea, Republic of)" },
    { value: "Kuwait", label: "الكويت (Kuwait)" },
    { value: "Kyrgyzstan", label: "قيرغيزستان (Kyrgyzstan)" },
    { value: "Laos", label: "لاوس (Laos)" },
    { value: "Latvia", label: "لاتفيا (Latvia)" },
    { value: "Lebanon", label: "لبنان (Lebanon)" },
    { value: "Lesotho", label: "ليسوتو (Lesotho)" },
    { value: "Liberia", label: "ليبيريا (Liberia)" },
    { value: "Libyan Arab Jamahiriya", label: "ليبيا (Libyan Arab Jamahiriya)" },
    { value: "Liechtenstein", label: "ليختنشتاين (Liechtenstein)" },
    { value: "Lithuania", label: "ليتوانيا (Lithuania)" },
    { value: "Luxembourg", label: "لوكسمبورغ (Luxembourg)" },
    { value: "Macao", label: "ماكاو (Macao)" },
    { value: "Madagascar", label: "مدغشقر (Madagascar)" },
    { value: "Malawi", label: "مالاوي (Malawi)" },
    { value: "Malaysia", label: "ماليزيا (Malaysia)" },
    { value: "Maldives", label: "جزر المالديف (Maldives)" },
    { value: "Mali", label: "مالي (Mali)" },
    { value: "Malta", label: "مالطا (Malta)" },
    { value: "Marshall Islands", label: "جزر مارشال (Marshall Islands)" },
    { value: "Martinique", label: "مارتينيك (Martinique)" },
    { value: "Mauritania", label: "موريتانيا (Mauritania)" },
    { value: "Mauritius", label: "موريشيوس (Mauritius)" },
    { value: "Mayotte", label: "مايوت (Mayotte)" },
    { value: "Mexico", label: "المكسيك (Mexico)" },
    { value: "Micronesia, Federated States of", label: "ولايات ميكرونيزيا المتحدة (Micronesia, Federated States of)" },
    { value: "Moldova, Republic of", label: "مولدوفا (Moldova, Republic of)" },
    { value: "Monaco", label: "موناكو (Monaco)" },
    { value: "Mongolia", label: "منغوليا (Mongolia)" },
    { value: "Montenegro", label: "الجبل الأسود (Montenegro)" },
    { value: "Montserrat", label: "مونتسيرات (Montserrat)" },
    { value: "Morocco", label: "المغرب (Morocco)" },
    { value: "Mozambique", label: "موزمبيق (Mozambique)" },
    { value: "Myanmar", label: "ميانمار (Myanmar)" },
    { value: "Namibia", label: "ناميبيا (Namibia)" },
    { value: "Nauru", label: "ناورو (Nauru)" },
    { value: "Nepal", label: "نيبال (Nepal)" },
    { value: "Netherlands", label: "هولندا (Netherlands)" },
    { value: "Netherlands Antilles", label: "جزر الأنتيل الهولندية (Netherlands Antilles)" },
    { value: "New Caledonia", label: "كاليدونيا الجديدة (New Caledonia)" },
    { value: "New Zealand", label: "نيوزيلندا (New Zealand)" },
    { value: "Nicaragua", label: "نيكاراغوا (Nicaragua)" },
    { value: "Niger", label: "النيجر (Niger)" },
    { value: "Nigeria", label: "نيجيريا (Nigeria)" },
    { value: "Niue", label: "نيوي (Niue)" },
    { value: "Norfolk Island", label: "جزيرة نورفولك (Norfolk Island)" },
    { value: "North Korea", label: "كوريا الشمالية (North Korea)" },
    { value: "North Macedonia", label: "مقدونيا الشمالية (North Macedonia)" },
    { value: "Northern Mariana Islands", label: "جزر ماريانا الشمالية (Northern Mariana Islands)" },
    { value: "Norway", label: "النرويج (Norway)" },
    { value: "Oman", label: "عمان (Oman)" },
    { value: "Pakistan", label: "باكستان (Pakistan)" },
    { value: "Palau", label: "بالاو (Palau)" },
    { value: "Palestinian Territory, Occupied", label: "الأراضي الفلسطينية المحتلة (Palestinian Territory, Occupied)" },
    { value: "Panama", label: "بنما (Panama)" },
    { value: "Papua New Guinea", label: "بابوا غينيا الجديدة (Papua New Guinea)" },
    { value: "Paraguay", label: "باراغواي (Paraguay)" },
    { value: "Peru", label: "بيرو (Peru)" },
    { value: "Philippines", label: "الفلبين (Philippines)" },
    { value: "Pitcairn Islands", label: "جزر بيتكيرن (Pitcairn Islands)" },
    { value: "Poland", label: "بولندا (Poland)" },
    { value: "Portugal", label: "البرتغال (Portugal)" },
    { value: "Puerto Rico", label: "بورتوريكو (Puerto Rico)" },
    { value: "Qatar", label: "قطر (Qatar)" },
    { value: "Reunion", label: "ريونيون (Reunion)" },
    { value: "Romania", label: "رومانيا (Romania)" },
    { value: "Russian Federation", label: "روسيا (Russian Federation)" },
    { value: "Rwanda", label: "رواندا (Rwanda)" },
    { value: "Saint Barthélemy", label: "سان بارتيلمي (Saint Barthélemy)" },
    { value: "Andorra", label: "أندورا (Andorra)" },
    { value: "United Arab Emirates", label: "الإمارات العربية المتحدة (United Arab Emirates)" },
    { value: "Afghanistan", label: "أفغانستان (Afghanistan)" },
    { value: "Antigua and Barbuda", label: "أنتيغوا وباربودا (Antigua and Barbuda)" },
    { value: "Anguilla", label: "أنغويلا (Anguilla)" },
    { value: "Albania", label: "ألبانيا (Albania)" },
    { value: "Armenia", label: "أرمينيا (Armenia)" },
    { value: "Angola", label: "أنغولا (Angola)" },
    { value: "Antarctica", label: "أنتاركتيكا (Antarctica)" },
    { value: "Argentina", label: "الأرجنتين (Argentina)" },
    { value: "American Samoa", label: "ساموا الأمريكية (American Samoa)" },
    { value: "Austria", label: "النمسا (Austria)" },
    { value: "Australia", label: "أستراليا (Australia)" },
    { value: "Aruba", label: "أروبا (Aruba)" },
    { value: "Åland Islands", label: "جزر أولاند (Åland Islands)" },
    { value: "Azerbaijan", label: "أذربيجان (Azerbaijan)" },
    { value: "Bosnia and Herzegovina", label: "البوسنة والهرسك (Bosnia and Herzegovina)" },
    { value: "Barbados", label: "باربادوس (Barbados)" },
    { value: "Bangladesh", label: "بنغلاديش (Bangladesh)" },
    { value: "Belgium", label: "بلجيكا (Belgium)" },
    { value: "Burkina Faso", label: "بوركينا فاسو (Burkina Faso)" },
    { value: "Bulgaria", label: "بلغاريا (Bulgaria)" },
    { value: "Bahrain", label: "البحرين (Bahrain)" },
    { value: "Burundi", label: "بوروندي (Burundi)" },
    { value: "Benin", label: "بنين (Benin)" },
    { value: "Saint Barthélemy", label: "سان بارتيلمي (Saint Barthélemy)" },
    { value: "Bermuda", label: "برمودا (Bermuda)" },
    { value: "Brunei Darussalam", label: "بروناي (Brunei Darussalam)" },
    { value: "Bolivia", label: "بوليفيا (Bolivia)" },
    { value: "Bonaire, Sint Eustatius and Saba", label: "بونير، سينت أوستاتيوس وسابا (Bonaire, Sint Eustatius and Saba)" },
    { value: "Brazil", label: "البرازيل (Brazil)" },
    { value: "Bahamas", label: "الباهاما (Bahamas)" },
    { value: "Bhutan", label: "بوتان (Bhutan)" },
    { value: "Bouvet Island", label: "جزيرة بوفيه (Bouvet Island)" },
   
    { value: "Belarus", label: "بيلاروسيا (Belarus)" },
    { value: "Belize", label: "بليز (Belize)" },
    { value: "Canada", label: "كندا (Canada)" },
    { value: "Cocos (Keeling) Islands", label: "جزر كوكوس (Cocos (Keeling) Islands)" },
    { value: "Congo, Democratic Republic", label: "جمهورية الكونغو الديمقراطية (Congo, Democratic Republic)" },
    { value: "Central African Republic", label: "جمهورية أفريقيا الوسطى (Central African Republic)" },
    { value: "Congo", label: "الكونغو (Congo)" },
    { value: "Switzerland", label: "سويسرا (Switzerland)" },
    { value: "Côte d'Ivoire", label: "ساحل العاج (Côte d'Ivoire)" },
    { value: "Cook Islands", label: "جزر كوك (Cook Islands)" },
    { value: "Chile", label: "تشيلي (Chile)" },
    { value: "Cameroon", label: "الكاميرون (Cameroon)" },
    { value: "China", label: "الصين (China)" },
    { value: "Colombia", label: "كولومبيا (Colombia)" },
    { value: "Costa Rica", label: "كوستاريكا (Costa Rica)" },
    { value: "Cuba", label: "كوبا (Cuba)" },
    { value: "Cabo Verde", label: "الرأس الأخضر (Cabo Verde)" },
    { value: "Curaçao", label: "كوراساو (Curaçao)" },
    { value: "Christmas Island", label: "جزيرة الكريسماس (Christmas Island)" },
    { value: "Cyprus", label: "قبرص (Cyprus)" },
    { value: "Czech Republic", label: "جمهورية التشيك (Czech Republic)" },
    { value: "Germany", label: "ألمانيا (Germany)" },
    { value: "Djibouti", label: "جيبوتي (Djibouti)" },
    { value: "Denmark", label: "الدنمارك (Denmark)" },
    { value: "Dominica", label: "دومينيكا (Dominica)" },
    { value: "Dominican Republic", label: "جمهورية الدومينيكان (Dominican Republic)" },
    { value: "Algeria", label: "الجزائر (Algeria)" },
    { value: "Ecuador", label: "الإكوادور (Ecuador)" },
    { value: "Estonia", label: "إستونيا (Estonia)" },
    { value: "Egypt", label: "مصر (Egypt)" },
    { value: "Western Sahara", label: "الصحراء الغربية (Western Sahara)" },
    { value: "Eritrea", label: "إريتريا (Eritrea)" },
    { value: "Spain", label: "إسبانيا (Spain)" },
    { value: "Ethiopia", label: "إثيوبيا (Ethiopia)" },
    { value: "Finland", label: "فنلندا (Finland)" },
    { value: "Fiji", label: "فيجي (Fiji)" },
    { value: "Falkland Islands (Malvinas)", label: "جزر فوكلاند (Falkland Islands (Malvinas))" },
    { value: "Micronesia, Federated States of", label: "ميكرونيزيا (Micronesia, Federated States of)" },
    { value: "Faroe Islands", label: "جزر فارو (Faroe Islands)" },
    { value: "France", label: "فرنسا (France)" },
    { value: "Gabon", label: "الغابون (Gabon)" },
    { value: "United Kingdom", label: "المملكة المتحدة (United Kingdom)" },
    { value: "Grenada", label: "غرينادا (Grenada)" },
    { value: "Georgia", label: "جورجيا (Georgia)" },
    { value: "French Guiana", label: "غويانا الفرنسية (French Guiana)" },
    { value: "Guernsey", label: "غيرنزي (Guernsey)" },
    { value: "Ghana", label: "غانا (Ghana)" },
    { value: "Gibraltar", label: "جبل طارق (Gibraltar)" },
    { value: "Greenland", label: "جرينلاند (Greenland)" },
    { value: "Gambia", label: "غامبيا (Gambia)" },
    { value: "Guinea", label: "غينيا (Guinea)" },
    { value: "Guadeloupe", label: "غوادلوب (Guadeloupe)" },
    { value: "Equatorial Guinea", label: "غينيا الاستوائية (Equatorial Guinea)" },
    { value: "Greece", label: "اليونان (Greece)" },
    { value: "South Georgia and the South Sandwich Islands", label: "جورجيا الجنوبية وجزر ساندويتش الجنوبية (South Georgia and the South Sandwich Islands)" },
    { value: "Guatemala", label: "غواتيمالا (Guatemala)" },
    { value: "Guam", label: "غوام (Guam)" },
    { value: "Guinea-Bissau", label: "غينيا بيساو (Guinea-Bissau)" },
    { value: "Guyana", label: "غيانا (Guyana)" },
    { value: "Hong Kong", label: "هونغ كونغ (Hong Kong)" },
    { value: "Heard Island and McDonald Islands", label: "جزيرة هيرد وجزر ماكدونالد (Heard Island and McDonald Islands)" },
    { value: "Honduras", label: "هندوراس (Honduras)" },
    { value: "Croatia", label: "كرواتيا (Croatia)" },
    { value: "Haiti", label: "هايتي (Haiti)" },
    { value: "Hungary", label: "المجر (Hungary)" },
    { value: "Indonesia", label: "إندونيسيا (Indonesia)" },
    { value: "Ireland", label: "أيرلندا (Ireland)" },
    { value: "Isle of Man", label: "جزيرة مان (Isle of Man)" },
    { value: "India", label: "الهند (India)" },
    { value: "British Indian Ocean Territory", label: "إقليم المحيط الهندي البريطاني (British Indian Ocean Territory)" },
    { value: "Iran, Islamic Republic of", label: "إيران (Iran, Islamic Republic of)" },
    { value: "Iceland", label: "آيسلندا (Iceland)" },
    { value: "Italy", label: "إيطاليا (Italy)" },
    { value: "Jersey", label: "جيرزي (Jersey)" },
    { value: "Jamaica", label: "جامايكا (Jamaica)" },
    { value: "Jordan", label: "الأردن (Jordan)" },
    { value: "Japan", label: "اليابان (Japan)" },
    { value: "Kenya", label: "كينيا (Kenya)" },
    { value: "Kyrgyzstan", label: "قيرغيزستان (Kyrgyzstan)" },
    { value: "Cambodia", label: "كمبوديا (Cambodia)" },
    { value: "Kiribati", label: "كيريباتي (Kiribati)" },
    { value: "Comoros", label: "جزر القمر (Comoros)" },
    { value: "Saint Kitts and Nevis", label: "سانت كيتس ونيفيس (Saint Kitts and Nevis)" },
    { value: "Korea (Democratic People's Republic of)", label: "كوريا الشمالية (Korea (Democratic People's Republic of))" },
    { value: "Korea, Republic of", label: "كوريا الجنوبية (Korea, Republic of)" },
    { value: "Kuwait", label: "الكويت (Kuwait)" },
    { value: "Cayman Islands", label: "جزر كايمان (Cayman Islands)" },
    { value: "Kazakhstan", label: "كازاخستان (Kazakhstan)" },
    { value: "Lao People's Democratic Republic", label: "لاوس (Lao People's Democratic Republic)" },
    { value: "Lebanon", label: "لبنان (Lebanon)" },
    { value: "Saint Lucia", label: "سانت لوسيا (Saint Lucia)" },
    { value: "Liechtenstein", label: "ليختنشتاين (Liechtenstein)" },
    { value: "Sri Lanka", label: "سريلانكا (Sri Lanka)" },
    { value: "Liberia", label: "ليبيريا (Liberia)" },
    { value: "Lesotho", label: "ليسوتو (Lesotho)" },
    { value: "Lithuania", label: "ليتوانيا (Lithuania)" },
    { value: "Luxembourg", label: "لوكسمبورغ (Luxembourg)" },
    { value: "Latvia", label: "لاتفيا (Latvia)" },
    { value: "Libya", label: "ليبيا (Libya)" },
    { value: "Morocco", label: "المغرب (Morocco)" },
    { value: "Monaco", label: "موناكو (Monaco)" },
    { value: "Moldova, Republic of", label: "مولدوفا (Moldova, Republic of)" },
    { value: "Montenegro", label: "الجبل الأسود (Montenegro)" },
    { value: "Saint Martin", label: "سانت مارتن (Saint Martin)" },
    { value: "Madagascar", label: "مدغشقر (Madagascar)" },
    { value: "Marshall Islands", label: "جزر مارشال (Marshall Islands)" },
    { value: "North Macedonia", label: "مقدونيا الشمالية (North Macedonia)" },
    { value: "Mali", label: "مالي (Mali)" },
    { value: "Myanmar", label: "ميانمار (Myanmar)" },
    { value: "Mongolia", label: "منغوليا (Mongolia)" },
    { value: "Macao", label: "ماكاو (Macao)" },
    { value: "Northern Mariana Islands", label: "جزر ماريانا الشمالية (Northern Mariana Islands)" },
    { value: "Martinique", label: "مارتينيك (Martinique)" },
    { value: "Mauritania", label: "موريتانيا (Mauritania)" },
    { value: "Montserrat", label: "مونتسيرات (Montserrat)" },
    { value: "Malta", label: "مالطا (Malta)" },
    { value: "Mauritius", label: "موريشيوس (Mauritius)" },
    { value: "Maldives", label: "جزر المالديف (Maldives)" },
    { value: "Malawi", label: "ملاوي (Malawi)" },
    { value: "Mexico", label: "المكسيك (Mexico)" },
    { value: "Malaysia", label: "ماليزيا (Malaysia)" },
    { value: "Mozambique", label: "موزمبيق (Mozambique)" },
    { value: "Namibia", label: "ناميبيا (Namibia)" },
    { value: "New Caledonia", label: "كاليدونيا الجديدة (New Caledonia)" },
    { value: "Niger", label: "النيجر (Niger)" },
    { value: "Norfolk Island", label: "جزيرة نورفولك (Norfolk Island)" },
    { value: "Nigeria", label: "نيجيريا (Nigeria)" },
    { value: "Nicaragua", label: "نيكاراغوا (Nicaragua)" },
    { value: "Netherlands", label: "هولندا (Netherlands)" },
    { value: "Norway", label: "النرويج (Norway)" },
    { value: "Nepal", label: "نيبال (Nepal)" },
    { value: "Nauru", label: "ناورو (Nauru)" },
    { value: "Niue", label: "نيوي (Niue)" },
    { value: "New Zealand", label: "نيوزيلندا (New Zealand)" },
    { value: "Oman", label: "عُمان (Oman)" },
    { value: "Panama", label: "بنما (Panama)" },
    { value: "Peru", label: "بيرو (Peru)" },
    { value: "French Polynesia", label: "بولينيزيا الفرنسية (French Polynesia)" },
    { value: "Papua New Guinea", label: "بابوا غينيا الجديدة (Papua New Guinea)" },
    { value: "Philippines", label: "الفلبين (Philippines)" },
    { value: "Pakistan", label: "باكستان (Pakistan)" },
    { value: "Poland", label: "بولندا (Poland)" },
    { value: "Saint Pierre and Miquelon", label: "سان بيير وميكلون (Saint Pierre and Miquelon)" },
    { value: "Pitcairn", label: "جزر بيتكيرن (Pitcairn)" },
    { value: "Puerto Rico", label: "بورتوريكو (Puerto Rico)" },
    { value: "Palestine, State of", label: "فلسطين (Palestine, State of)" },
    { value: "Portugal", label: "البرتغال (Portugal)" },
    { value: "Palau", label: "بالاو (Palau)" },
    { value: "Paraguay", label: "باراغواي (Paraguay)" },
    { value: "Qatar", label: "قطر (Qatar)" },
    { value: "Réunion", label: "ريونيون (Réunion)" },
    { value: "Romania", label: "رومانيا (Romania)" },
    { value: "Serbia", label: "صربيا (Serbia)" },
    { value: "Russian Federation", label: "روسيا (Russian Federation)" },
    { value: "Rwanda", label: "رواندا (Rwanda)" },
    { value: "Saudi Arabia", label: "السعودية (Saudi Arabia)" },
    { value: "Solomon Islands", label: "جزر سليمان (Solomon Islands)" },
    { value: "Seychelles", label: "سيشل (Seychelles)" },
    { value: "Sudan", label: "السودان (Sudan)" },
    { value: "SE", label: "السويد (Sweden)" },
    { value: "SG", label: "سنغافورة (Singapore)" },
    { value: "SH", label: "سانت هيلينا وأسينشين وتريستان دا كونا (Saint Helena, Ascension and Tristan da Cunha)" },
    { value: "SI", label: "سلوفينيا (Slovenia)" },
    { value: "SJ", label: "سفالبارد ويان ماين (Svalbard and Jan Mayen)" },
    { value: "SK", label: "سلوفاكيا (Slovakia)" },
    { value: "SL", label: "سيراليون (Sierra Leone)" },
    { value: "SM", label: "سان مارينو (San Marino)" },
    { value: "SN", label: "السنغال (Senegal)" },
    { value: "SO", label: "الصومال (Somalia)" },
    { value: "SR", label: "سورينام (Suriname)" },
    { value: "SS", label: "جنوب السودان (South Sudan)" },
    { value: "ST", label: "ساو تومي وبرينسيبي (Sao Tome and Principe)" },
    { value: "SV", label: "السلفادور (El Salvador)" },
    { value: "SX", label: "سينت مارتن (Sint Maarten, Dutch part)" },
    { value: "SY", label: "سوريا (Syrian Arab Republic)" },
    { value: "SZ", label: "إسواتيني (Eswatini)" },
    { value: "TC", label: "جزر توركس وكايكوس (Turks and Caicos Islands)" },
    { value: "TD", label: "تشاد (Chad)" },
    { value: "TF", label: "الأقاليم الجنوبية الفرنسية (French Southern Territories)" },
    { value: "TG", label: "توغو (Togo)" },
    { value: "TH", label: "تايلاند (Thailand)" },
    { value: "TJ", label: "طاجيكستان (Tajikistan)" },
    { value: "TK", label: "توكيلاو (Tokelau)" },
    { value: "TL", label: "تيمور الشرقية (Timor-Leste)" },
    { value: "TM", label: "تركمانستان (Turkmenistan)" },
    { value: "TN", label: "تونس (Tunisia)" },
    { value: "TO", label: "تونغا (Tonga)" },
    { value: "TR", label: "تركيا (Türkiye)" },
    { value: "TT", label: "ترينيداد وتوباغو (Trinidad and Tobago)" },
    { value: "TV", label: "توفالو (Tuvalu)" },
    { value: "TW", label: "تايوان (Taiwan, Province of China)" },
    { value: "TZ", label: "تنزانيا (Tanzania, United Republic of)" },
    { value: "UA", label: "أوكرانيا (Ukraine)" },
    { value: "UG", label: "أوغندا (Uganda)" },
    { value: "UM", label: "جزر الولايات المتحدة الصغيرة النائية (United States Minor Outlying Islands)" },
    { value: "US", label: "الولايات المتحدة الأمريكية (United States of America)" },
    { value: "UY", label: "الأوروغواي (Uruguay)" },
    { value: "UZ", label: "أوزبكستان (Uzbekistan)" },
    { value: "VA", label: "الفاتيكان (Holy See (Vatican City State))" },
    { value: "VC", label: "سانت فنسنت والغرينادين (Saint Vincent and the Grenadines)" },
    { value: "VE", label: "فنزويلا (Venezuela, Bolivarian Republic of)" },
    { value: "VG", label: "جزر العذراء البريطانية (Virgin Islands, British)" },
    { value: "VI", label: "جزر العذراء الأمريكية (Virgin Islands, U.S.)" },
    { value: "VN", label: "فيتنام (Vietnam)" },
    { value: "VU", label: "فانواتو (Vanuatu)" },
    { value: "WF", label: "واليس وفوتونا (Wallis and Futuna)" },
    { value: "WS", label: "ساموا (Samoa)" },
    { value: "YE", label: "اليمن (Yemen)" },
    { value: "YT", label: "مايوت (Mayotte)" },
    { value: "ZA", label: "جنوب أفريقيا (South Africa)" },
    { value: "ZM", label: "زامبيا (Zambia)" },
    { value: "ZW", label: "زيمبابوي (Zimbabwe)" },
  ];
  const handleChangeCountry = (selectedOption) => {
    setFormData((prevData) => ({
      ...prevData,
      country: selectedOption ? selectedOption.value : "",
    }));
  };
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: "none",
      borderBottom: `2px solid ${state.isFocused ? "#304D73" : "#b5b5b5"}`,
      borderRadius: "0",
      boxShadow: "none",
      backgroundColor: "transparent",
      fontSize: "1.125rem",
      padding: ".25rem",
      color: "#000000",
      "&:hover": {
        borderBottomColor: "#304D73",
      },
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 999,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#304D73" : "white",
      color: state.isSelected ? "#000" : "#2f2f2f",
      "&:hover": {
        backgroundColor: "#f6e27a",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#000000",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#b5b5b5",
    }),
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

           

<div className="col-md-6 col-6  ps-5 ">
<div className="input col-md-12 col-12">
                    <input
                      type="text"
                      className="input-field"
                      name="full_name"
                      value={formData.name}
                      onChange={handleChage}
                      required
                    />
                    <label className="input-label">{lang ? " الاسم " : " Name"}</label>
                  </div>
                 
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

            
<div className="input col-md-12 col-12" style={{ position: "relative"   ,  marginTop: "16px"
 }}>
                    <Select
                      options={countryOptions}
                      value={countryOptions.find((option) => option.value === formData.country)}
                      onChange={handleChangeCountry}
                      placeholder={lang? "اختر البلد..." : "select country"}
                      isSearchable
                      styles={customStyles}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                    />
                    <label style={{paddingBottom: "4px", color:"#2f2f2f"}} className={`select-label ${isFocused || formData.country ? "focused" : ""}`}>
                    {lang ? "الموقع" : " Location"}
                    </label>
                  </div>
          
                  <div style={{marginTop:"0px",
  
}} className="input">
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3435.437201747679!2d47.78418343809816!3d30.56520114271435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fc49f3554130605%3A0x7ef66844633f9652!2z2KPYsdi2INmF2LnYp9ix2LYg2KfZhNio2LXYsdipINin2YTYr9mI2YTZig!5e0!3m2!1sar!2siq!4v1746642883413!5m2!1sar!2siq" 
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
