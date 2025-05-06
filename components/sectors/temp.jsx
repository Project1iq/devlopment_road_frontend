import React from "react";

export default function Temp({ title_ar, title_en, desc_ar, desc_en, lang }) {
  return (
    <div className="temp container" style={{ lineHeight: "1.8" }}>
      <h2 className="main-text text-center mt-5 mb-4">
        {lang ? title_ar : title_en}
      </h2>

      <div
        className={`px-0 px-md-5 mb-3 mt-5 text-center`}
        style={{  }}
        dangerouslySetInnerHTML={{ __html: lang ? desc_ar : desc_en }}
      />
    </div>
  );
}
