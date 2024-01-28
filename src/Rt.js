import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Gallery from "./components/gallery/Gallery";
import Timeline from "./components/timeline/Timeline";
import Faq from "./components/faqs/Faq";
import Footer from "./components/footer/Footer";
import SignUpModal from "./components/signup/SignUpModal";
import Loader from "./components/loader/Loader";
import CS from "./components/cs/CS";
import Event from "./components/events/Event";

function Rt() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(loaderTimeout); // Clear the timeout when component unmounts
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <>
      {loading && <Loader />}
      <div style={loading ? { display:"none" } : {}}>
        <Navbar />
        <Home />
        <About />
        <Gallery />
        <Timeline />
        <Faq />
        <Footer />
      </div>
      {/* <Event/> */}
    </>
  );
}

export default Rt;
