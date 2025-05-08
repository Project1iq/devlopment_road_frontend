import React from "react";
import PropTypes from "prop-types";

export default function Temp({ title_ar, title_en, desc_ar, desc_en, lang }) {
  return (
    <div className="temp container pt-md-0 pt-5" style={{ lineHeight: "1.8" }}>
      <h2 className="main-text text-center mt-5 mb-5">
        {lang ? title_ar : title_en}
      </h2>

      <div className="px-0  mb-3  text-center">
        {/* استخدام dangerouslySetInnerHTML إذا كنت بحاجة لعرض HTML */}
        <div
          dangerouslySetInnerHTML={{
            __html: lang ? desc_ar : desc_en,
          }}
        />
        {/* أو يمكنك استخدام هذا البديل إذا كانت النصوص مجرد نص عادي */}
        {/* <p>{lang ? desc_ar : desc_en}</p> */}
      </div>
    </div>
  );
}

Temp.propTypes = {
  title_ar: PropTypes.string.isRequired,
  title_en: PropTypes.string.isRequired,
  desc_ar: PropTypes.string.isRequired,
  desc_en: PropTypes.string.isRequired,
  lang: PropTypes.bool.isRequired,
};
