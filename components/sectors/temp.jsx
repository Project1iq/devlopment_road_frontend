import React from "react";
import { useRecoilState } from "recoil";
import { langState } from "@/atom/atom";

export default function Temp({
  title_ar,
  title_en,
  desc_ar1,
  desc_ar2,
  desc_ar3,
  desc_ar4,
  desc_ar5,
  desc_ar6,
  desc_ar7,
  desc_en1,
  desc_en2,
  desc_en3,
  desc_en4,
  desc_en5,
  desc_en6,
  desc_en7,
  lang,
}) {
  return (
    <div
      className="temp container"
      style={{ lineHeight: "1.7", fontFamily: "Arial, sans-serif" }}
    >
      <h2 className="main-text text-center mt-5 mb-4">
        {lang ? title_ar : title_en}
      </h2>
      <div
        className={`px-0 px-md-5 mb-3 mt-5 ${
          lang ? "text-right" : "text-left"
        }`}
       
      >
        {lang ? (
          <>
            <p>{desc_ar1}</p>
            <p>{desc_ar2}</p>
            <p>{desc_ar3}</p>
            <p>{desc_ar4}</p>
            <p>{desc_ar5}</p>
            <p>{desc_ar6}</p>
            <p>{desc_ar7}</p>
          </>
        ) : (
          <>
            <p>{desc_en1}</p>
            <p>{desc_en2}</p>
            <p>{desc_en3}</p>
            <p>{desc_en4}</p>
            <p>{desc_en5}</p>
            <p>{desc_en6}</p>
            <p>{desc_en7}</p>
          </>
        )}
      </div>
    </div>
  );
}
