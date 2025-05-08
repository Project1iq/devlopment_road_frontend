import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Cookies from "js-cookie";
import { useRecoilState } from "recoil";
import { langState, scrollPositionState } from "@/atom/atom";
import { useRouter } from "next/router";
import Link from "next/link";
import logo from "../public/logo.png";
import logoEn from "../public/logo_en.png";
import axios from "axios";

export default function Nav() {
  const [scrollPosition, setScrollPosition] =
    useRecoilState(scrollPositionState);
  const [lang, setLang] = useRecoilState(langState);
  const [imageHeight, setImageHeight] = useState(0);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const closeRef = useRef(null);

  axios.defaults.baseURL = "https://api.agriculture-week.project1.company/";

  // Function to handle scroll event
  const handleScroll = () => setScrollPosition(window.scrollY);

  // Update logo height on mount
  useEffect(() => {
    const logo = document.getElementById("logo");
    if (logo) setImageHeight(logo.clientHeight);
  }, []);

  // Handle route changes and hide offcanvas
  useEffect(() => {
    // hide offcanvas on route change
    try {
      closeRef.current.click();
    } catch (e) {
      console.log(e);
    }
  }, [router.pathname]);

  // Sync language preference with cookies
  useEffect(() => {
    const langCookie = Cookies.get("lang");
    setLang(langCookie === "ar");
    const html = document.documentElement;
    html.dir = langCookie === "ar" ? "rtl" : "ltr";
    html.lang = langCookie === "ar" ? "ar" : "en";
  }, []);

  // Update cookies and HTML direction when language changes
  useEffect(() => {
    const html = document.documentElement;
    html.dir = lang ? "rtl" : "ltr";
    html.lang = lang ? "ar" : "en";
    Cookies.set("lang", lang ? "ar" : "en");
  }, [lang]);

  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    // الحصول على عنصر الناف بار بعد تحميل الصفحة
    const navbar = document.querySelector("#navbar");

    // التأكد من وجود الناف بار
    if (navbar) {
      // تحديث الحالة بالارتفاع
      setTimeout(() => {
        setNavbarHeight(navbar.offsetHeight);
      }, 10);
    }
  }, []);

  const links = [
    {
      name: "Home",
      nameAr: "الرئيسية",
      href: "/",
    },
    {
      name: "Visit",
      nameAr: "الزيارة",
      links: [

        {
          name: "Why Visit",
          nameAr: "لماذا نزور المعرض",
          href: "/whyVisite",
        },

        {
          name: "Development Road Vision",
          nameAr: "رؤية طريق التنمية ",
          href: "/whoattends",
        },

        {
          name: "Benefits of Participation",
          nameAr: "  فوائد المشاركة",
          href: "/benf",
        },
        {
          name: "Register to visit",
          nameAr: "سجل للزيارة",
          href: "/register",
        }
      ],
    },
    {
      name: "Exhibitors",
      nameAr: "المعرض",

      links: [
        {
          name: "Importance of government support",
          nameAr: "اهمية الدعم الحكومي",
          href: "/govermentSupport",
        },
        {
          name: "Participating Sectors",
          nameAr: " القطاعات المشاركة",
          href: "/sectors",
          links: [
            {
              name: "Sub Sector 1",
              nameAr: "القطاع الفرعي 1",
              href: "/subSector1",
            },
            {
              name: "Sub Sector 2",
              nameAr: "القطاع الفرعي 2",
              href: "/subSector2",
            },
            {
              name: "Sub Sector 3",
              nameAr: "القطاع الفرعي3",
              href: "/subSector2",
            },
            {
              name: "Sub Sector 4",
              nameAr: "القطاع الفرعي 4",
              href: "/subSector2",
            },
            {
              name: "Sub Sector 5",
              nameAr: "القطاع الفرعي 5",
              href: "/subSector2",
            },
            {
              name: "Sub Sector 6",
              nameAr: "القطاع الفرعي 6",
              href: "/subSector2",
            },
          ],
        },
        {
          name: "Book Your Space",
          nameAr: "أحجز مساحتك",
          href: "/reserveSpace",
        },
        {
          name: "Become a Sponsor",
          nameAr: "كن راعيا",
          href: "/bookCare",
        },
      ],
    },
    {
      name: "Conference",
      nameAr: "مؤتمر",
      href: "/conference",
    },
    {
      name: "Information for exhibitors",
      nameAr: "معلومات تهم العارضين",
      links: [
        {
          name: "Location",
          nameAr: "الموقع",
          href: "/location",
        },
        // {
        //   name: "Visas and Travel",
        //   nameAr: "التاشيرات و السفر",
        //   href: "/travel",
        // },
        {
          name: "Marketing campaign",
          nameAr: "الحملة التسويقية",
          href: "/markteing",
        },
        {
          name: "Reports",
          nameAr: "التقرير",
          href: "/reports",
        },
      ],
    },
    {
      name: "Contact",
      nameAr: "التواصل",
      href: "/contact",
    },
  ];

  return (
    <>
      {scrollPosition > imageHeight && (
        <Link
          className="col-4"
          href="/"
          style={{
            height: imageHeight,
            top: "0",
          }}
        >
          <Image
            src={logo}
            alt="logo"
            width={3000}
            height={3000}
            style={{
              height: imageHeight,
            }}
            className="logo w-100"
            id="logo"
          />
        </Link>
      )}
      <nav
        className={`nav px-lx-0 px-2 d-block justify-content-center w-100 ${scrollPosition > imageHeight ? "nav-scrolled" : ""
          }`}
        id="navbar"
        style={{
          top: scrollPosition > imageHeight ? -(imageHeight + 8) : "0",
        }}
      >
        <div className="top_bar">
          <div className="container">
            <div className="row">
              <div className="col d-flex flex-row justify-content-between">
                <div className="d-flex">
                  <div className="top_bar_contact_item">
                    <div className="top_bar_icon1">
                      <svg className="mx-1" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#999999"><path d="M763-145q-121-9-229.5-59.5T339-341q-86-86-135.5-194T144-764q-2-21 12.29-36.5Q170.57-816 192-816h136q17 0 29.5 10.5T374-779l24 106q2 13-1.5 25T385-628l-97 98q20 38 46 73t57.97 65.98Q422-361 456-335.5q34 25.5 72 45.5l99-96q8-8 20-11.5t25-1.5l107 23q17 5 27 17.5t10 29.5v136q0 21.43-16 35.71Q784-143 763-145ZM255-600l70-70-17.16-74H218q5 38 14 73.5t23 70.5Zm344 344q35.1 14.24 71.55 22.62Q707-225 744-220v-90l-75-16-70 70ZM255-600Zm344 344Z" /></svg>
                    </div> <span dir="ltr">+964 787 241 1111 </span></div>
                  <div className="top_bar_contact_item"><div className="top_bar_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#999999"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" /></svg>
                  </div><a href="mailto:info@development-road.iq">info@development-road.iq</a></div>
                </div>
                <div className="top_bar_content ml-auto">
                  <div className="top_bar_menu">
                    <ul className="standard_dropdown top_bar_dropdown">
                      <li>
                        <a href="#">
                          {lang ? 'اللغة' : 'Language'}
                          <svg className="mx-1" xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#999999"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
                        </a>
                        <ul className="p-0">
                          <li className={lang ? 'active-lang' : ''}><a className="d-flex justify-content-between align-items-center w-100" onClick={() => {
                            setLang('ar');
                          }} href="#">
                            <span className="top_bar_menu-text">
                              العربية
                            </span>
                            <Image width={28} height={28} src="/images/icons/ar.png" alt="ar" />
                          </a>
                          </li>
                          <li className={!lang ? 'active-lang' : ''}>
                            <a onClick={() => {
                              setLang(null);
                            }} href="#">
                              <span className="top_bar_menu-text">
                                English
                              </span>
                              <Image width={28} height={28} src="/images/icons/en.png" alt="ar" />
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid  row mx-auto px-0 justify-content-between align-items-center">
          <div className="row px-0   align-items-center justify-content-center">
            <div className="col-10 d-none d-xl-block px-0">
              <div className="row justify-content-center">
                <ul className="navbar-nav links d-flex flex-row justify-content-center  my-auto mx-auto text-dark">
                  <Link
                    className="col-3 py-4 d-none d-xl-block "
                    href="/"
                    style={{
                      visibility:
                        scrollPosition < imageHeight ? "visible" : "hidden",
                    }}
                  >
                    <Image
                      src="/logo.png"
                      alt="logo"
                      width={3000}
                      height={1000}
                      style={{
                        maxWidth: "280px",
                        height: "auto",
                      }}
                      className="logo w-100"
                      id="logo"
                    />
                  </Link>
                  {/* =====================
                start
                ========================= */}
                  {links.map((link, index) => (
                    <div key={index} className="top_bar_content ml-auto p-1">
                      <div className="top_bar_menu p-0">
                        <ul className="standard_dropdown top_bar_dropdown p-0">
                          <li className="p-0">
                            <a href="#" onClick={() => {
                              !link.links && router.push(link.href);
                            }}>
                              {lang ? link.nameAr : link.name}
                              {link?.links &&
                                <svg className="mx-1" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#222222"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg>
                              }
                            </a>
                            <ul className="p-0">
                              {link?.links &&
                                link?.links.map((subLink, i) => (
                                  <li key={i}>
                                    <Link className={`d-flex justify-content-between align-items-center w-100 dropdown-item ${subLink.href === router.pathname
                                      ? "active"
                                      : ""
                                      }`}
                                      href={subLink.href}
                                      onClick={() => {
                                        router.push(subLink.href);
                                      }}
                                    >
                                      <span className="top_bar_menu-text">
                                        {lang ? subLink.nameAr : subLink.name}
                                      </span>
                                    </Link>
                                  </li>
                                ))}
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ))}

                  <div className="d-flex justify-content-end align-item-center ">
                    <Link href={"/register"} type="submit" className="btn-nav">
                      <span>{lang ? "التسجيل للزيارة" : "Register to visit"}</span>
                    </Link>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row py-2 d-flex d-xl-none">
          <div className="col-2">
            <a
              className="menu d-xl-none d-flex "
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasFNav"
              aria-controls="offcanvasFNav"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-list m-auto"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </a>
          </div>
          

          <div className="col-lg-7 col-4 col-sm-6 col-md-4 d-flex justify-content-center align-items-center">
            <Link href={"/register"} type="submit" className="shiny-cta-2">
              <span>{lang ? "التسجيل للزيارة" : "Register to visit"}</span>
            </Link>
          </div>
          <div className="col-lg-1 col-1 col-md-4"></div>
          <div className="col-lg-2 col-5 d-flex justify-content-end align-content-center ps-5">
            <Link
              href="/"
              style={{
                height: imageHeight,
                top: "0",
                marginTop:"10px"
              }}
            >
              <Image
                src="/logo.png"
                alt="logo"
                width={3000}
                height={3000}
                style={{
                  maxWidth: "600px",
                  height: "auto",
                }}
                className="logo w-100"
                id="logo"
              />
            </Link>
          </div>
        </div>

        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasFNav"
          aria-labelledby="offcanvasFNavLabel"
        >
          <div className="offcanvas-header row">

            <button
              type="button"
              className="btn-close text-reset col-2 mx-auto"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              ref={closeRef}
            ></button>
            <div className="col-7"></div>
            <div className="col-3">
              <Link
                href="/"
                style={{
                  height: imageHeight,
                  top: "0",
                }}
              >
                <Image
                src="/logo.png"
                  alt="logo"
                  width={3000}
                  height={3000}
                  style={{
                    maxWidth: "30px",
                    height: "auto",
                  }}
                  className="logo w-100"
                  id="logo"
                />
              </Link>
            </div>
          </div>
          <div className="offcanvas-body">
            <div className=" " id="navbarNav">
              <div className="navbar-nav off-links my-auto mx-auto text-dark ">
                {links.map((link, index) => (
                  <div
                    key={index}
                    className={`nav-item w-100 ${link.name === open ? "open" : ""}`}
                  >
                    <button
                      className={`a w-100 d-flex justify-content-between align-items-center ${router.pathname === link.href ? "active" : ""
                        }`}
                      role="button"
                      onClick={() => {
                        !link.links
                          ? router.push(link.href)
                          : setOpen(link.name === open ? false : link.name);
                      }}
                    >
                      <div>{lang ? link.nameAr : link.name}</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#000"
                        className={`${link.links ? "" : "hidden"} ${open === link.name ? "open" : ""
                          }`}
                      >
                        <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                      </svg>
                    </button>

                    {link.links && open === link.name && (
                      <div className="d-flex overflow-hidden flex-column justify-content-center col-12">
                        {link.links.map((subLink, index) => (
                          <Link
                            className={`${subLink.href === router.pathname ? "active" : ""
                              } text-center`}
                            href={subLink.href}
                            key={index}
                          >
                            {lang ? subLink.nameAr : subLink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <button
                  onClick={() => {
                    setLang(!lang);
                  }}
                  className="a w-100 text-start d-flex justify-content-between align-items-center"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <span className="mb-0">{!lang ? "العربية" : "English"}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-globe"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="nig col-12   col-sm-none col-md-none col-lg-none justify-content-center ">
          <hr style={{ color: " #000000" }} />
        </div>
      </nav>
      <div className="fakenav" style={{ height: `${navbarHeight}px` }}></div>
    </>
  );
}
