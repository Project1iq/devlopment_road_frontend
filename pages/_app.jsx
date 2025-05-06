import Head from "next/head";
import "../styles/globals.css";
import "../styles/main.css";

import "react-toastify/dist/ReactToastify.css";
import "react-multi-carousel/lib/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { RecoilRoot } from "recoil";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import Loading from "@/components/Loading/Loading";
import Sponsers from "@/components/Sponsers";

const OriginalApp = ({ Component, pageProps, pageData }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <RecoilRoot>
        <Loading />
        <Nav />
        <Component pageData={pageData?.data} {...pageProps} />
        <Sponsers />
        <Footer />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </RecoilRoot>
    </>
  );
};

export default OriginalApp;
