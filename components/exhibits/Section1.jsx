import React, { useState, useEffect } from "react";
import Image from "next/image";
import plants from "@/public/images/index/plants.png";
import water from "@/public/images/index/water.png";
import { useRecoilValue } from "recoil";
import { langState } from "@/atom/atom";
import chicken from "@/public/images/index/EX-2.jpg";
import axios from "axios";
import { useRouter } from "next/router";
export default function Section1({ data }) {
  const lang = useRecoilValue(langState);
  const router = useRouter();
  const { id } = router.query;

  const [sponsers, setSponsers] = useState([
    {
      id: 1,
      src: chicken.src,
      alt: "Bronze",
      name: "Bronze",
      name_ar: "برونز",
      description: "This is a Bronze sponser",
      description_ar: "هذا راعي برونزي",
      points: [
        {
          id: 1,
          name: "Agricultural machinery, equipment and supplies",
          name_ar: "المكننة والآليات والمستلزمات الزراعية",
        },
        {
          id: 2,
          name: "Agricultural machinery, equipment and supplies",
          name_ar: "المكننة والآليات والمستلزمات الزراعية",
        },
        {
          id: 3,
          name: "Agricultural machinery, equipment and supplies",
          name_ar: "المكننة والآليات والمستلزمات الزراعية",
        },
      ],
    },
    {
      id: 2,
      src: chicken.src,
      alt: "forest",
      name: "Silver",
      name_ar: "فضي",
      description: "This is a Silver sponser",
      description_ar: "هذا راعي فضي",
      points: [
        {
          id: 1,
          name: "Agricultural machinery, equipment and supplies",
          name_ar: "المكننة والآليات والمستلزمات الزراعية",
        },
        {
          id: 2,
          name: "Agricultural machinery, equipment and supplies",
          name_ar: "المكننة والآليات والمستلزمات الزراعية",
        },
        {
          id: 3,
          name: "Agricultural machinery, equipment and supplies",
          name_ar: "المكننة والآليات والمستلزمات الزراعية",
        },
      ],
    },
    {
      id: 3,
      src: chicken.src,
      alt: "forest",
      name: "Gold",
      name_ar: "ذهبي",
      description: "This is a Gold sponser",
      description_ar: "هذا راعي ذهبي",
      points: [
        {
          id: 1,
          name: "Agricultural machinery, equipment and supplies",
          name_ar: "المكننة والآليات والمستلزمات الزراعية",
        },
        {
          id: 2,
          name: "Agricultural machinery, equipment and supplies",
          name_ar: "المكننة والآليات والمستلزمات الزراعية",
        },
        {
          id: 3,
          name: "Agricultural machinery, equipment and supplies",
          name_ar: "المكننة والآليات والمستلزمات الزراعية",
        },
      ],
    },
    {
      id: 4,
      src: chicken.src,
      alt: "forest",
      name: "Gold",
      name_ar: "ذهبي",
      description: "This is a Gold sponser",
      description_ar: "هذا راعي ذهبي",
      points: [
        {
          id: 1,
          name: "Agricultural machinery, equipment and supplies",
          name_ar: "المكننة والآليات والمستلزمات الزراعية",
        },
        {
          id: 2,
          name: "Agricultural machinery, equipment and supplies",
          name_ar: "المكننة والآليات والمستلزمات الزراعية",
        },
        {
          id: 3,
          name: "Agricultural machinery, equipment and supplies",
          name_ar: "المكننة والآليات والمستلزمات الزراعية",
        },
      ],
    },
  ]);
  const [leftSide, setLeftSide] = useState([]);
  const [rightSide, setRightSide] = useState([]);

  useEffect(() => {
    id &&
      axios
        .get(`/exhibition-categories/`)
        .then((res) => {
          setSponsers(res.data.results.find((item) => item.id === Number(id)));
        })
        .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    const halfLength = Math.ceil(sponsers?.exhibitions?.length / 2);
    setLeftSide(sponsers?.exhibitions?.slice(0, halfLength));
    setRightSide(sponsers?.exhibitions?.slice(halfLength));
  }, [sponsers]);

  return (
    <>
      <div
        className="bg-image"
        style={{
          backgroundImage: `url(${sponsers?.image})`,
        }}
      ></div>
      <section className="row section-1 mx-auto">
        <div className="title">
          <h1 className="text-center">{lang ? "المعارض" : "Exhibits"}</h1>
        </div>
        <div action="" className="form-container ">
          <div className="container">
            <div className="">
              <div className="w-100 mx-auto row">
                <div className="col-12">
                  <h2 className="text-center main-text mb-4">
                    {lang ? sponsers.name_ar : sponsers.name}
                  </h2>
                </div>
                <div className="col-md-6 col-12 px-4">
                  <ul>
                    {leftSide?.length > 0 &&
                      leftSide.map((item) => (
                        <li key={item.id}>
                          <h6>{lang ? item.name_ar : item.name}</h6>
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="col-md-6 col-12 px-4">
                  <ul>
                    {rightSide?.length > 0 &&
                      rightSide.map((item) => (
                        <li key={item.id}>
                          <h6>{lang ? item.name_ar : item.name}</h6>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
