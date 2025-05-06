import React from "react";
import Image from "next/image";
import plants from "../public/images/index/plants.png";
import water from "../public/images/index/water.png";
import { useRecoilValue } from "recoil";
import { langState } from "@/atom/atom";
import Section1 from "@/components/location/Section1";

export default function Location() {
  const lang = useRecoilValue(langState);
  const data = {
  };
  return (
    <div className=" location ">
      <Section1 data={data} />
    </div>
  );
}
