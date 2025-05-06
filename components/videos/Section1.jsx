import React, { useEffect, useState } from "react";
import Image from "next/image";
import plants from "@/public/images/index/plants.png";
import water from "@/public/images/index/water.png";
import { useRecoilValue } from "recoil";
import { langState } from "@/atom/atom";
import chicken from "@/public/images/index/EX-2.jpg";
import axios from "axios";
export default function Section1({ data }) {
  const lang = useRecoilValue(langState);

  const [formData, setFormData] = useState({});
  const handleChage = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [sponsers, setSponsers] = useState([
    {
      id: 1,
      src: chicken.src,
      alt: "Bronze",
      title: "Bronze",
      title_ar: "برونز",
      description: "This is a Bronze sponser",
      description_ar: "هذا راعي برونزي",
      points: [
        {
          id: 1,
          point: "Agricultural machinery, equipment and supplies",
          point_ar: "المكننة والآليات والمستلزمات الزراعية",
        },
        {
          id: 2,
          point: "Agricultural machinery, equipment and supplies",
          point_ar: "المكننة والآليات والمستلزمات الزراعية",
        },
        {
          id: 3,
          point: "Agricultural machinery, equipment and supplies",
          point_ar: "المكننة والآليات والمستلزمات الزراعية",
        },
      ],
    },
    {
      id: 2,
      src: chicken.src,
      alt: "forest",
      title: "Silver",
      title_ar: "فضي",
      description: "This is a Silver sponser",
      description_ar: "هذا راعي فضي",
      points: [
        {
          id: 1,
          point: "Agricultural machinery, equipment and supplies",
          point_ar: "المكننة والآليات والمستلزمات الزراعية",
        },
        {
          id: 2,
          point: "Agricultural machinery, equipment and supplies",
          point_ar: "المكننة والآليات والمستلزمات الزراعية",
        },
        {
          id: 3,
          point: "Agricultural machinery, equipment and supplies",
          point_ar: "المكننة والآليات والمستلزمات الزراعية",
        },
      ],
    },
    {
      id: 3,
      src: chicken.src,
      alt: "forest",
      title: "Gold",
      title_ar: "ذهبي",
      description: "This is a Gold sponser",
      description_ar: "هذا راعي ذهبي",
    },
    {
      id: 4,
      src: chicken.src,
      alt: "forest",
      title: "Gold",
      title_ar: "ذهبي",
      description: "This is a Gold sponser",
      description_ar: "هذا راعي ذهبي",
    },
  ]);

  useEffect(() => {
    const ytControls = document.getElementsByClassName(
      ".fullscreen-action-menu"
    );
    try {
      // loop through all the iframes
      for (let i = 0; i < ytControls.length; i++) {
        ytControls[i].style.display = "none";
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    axios
      .get("/videos/")
      .then((res) => {
        setSponsers(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="bg-image"></div>
      <section className="row section-1 mx-auto">
        <div className="title">
          <h1 className="text-center">{lang ? "المعارض" : "Exhibits"}</h1>
        </div>
        <div action="" className="form-container ">
          <div className="container">
            <div className="w-100 mx-auto row">
              {sponsers.map((sponser) => (
                <div
                  key={sponser.id}
                  className="col-md-6 col-12 mb-md-4 mb-0 px-md-1 px-0"
                >
                  <div className=" p-1 px-md-1 px-0">
                    <div className="p-1 px-md-1 px-0">
                      <h1 className="main-text">
                        {lang ? sponser.name_ar : sponser.name}
                      </h1>
                      <video src={sponser.video} className="w-100 h-auto" controls/>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
