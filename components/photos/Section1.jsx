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
      id: 4,
      src: chicken.src,
      alt: "forest",
      title: "Gold",
      title_ar: "ذهبي",
      description: "This is a Gold sponser",
      description_ar: "هذا راعي ذهبي",
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
  ]);

  useEffect(() => {
    axios
      .get("/photos/")
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
          <h1 className="text-center">
            {lang ? "معرض الصور" : "Photo Gallery"}
          </h1>
        </div>
        <div action="" className="form-container ">
          <div className="container">
            <div className="col-12 row mx-auto">
              {sponsers.map((sponser) => (
                <div
                  className="col-lg-3 col-md-4 col-ms-6 col-12 mb-4"
                  key={sponser.id}
                >
                  <div className="card p-1">
                    <div className="card-body p-1">
                      <Image
                        src={sponser.image}
                        alt={sponser.alt}
                        width={1000}
                        height={1000}
                        className="w-100 h-auto rounded-3"
                      />
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
