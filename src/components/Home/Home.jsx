import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { Testimonials, AboutUs, RealizationsPrew } from "../index";
import { Mini } from "../Loader/Loader";
import "./styles-home.css";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=> {
    setTimeout(()=> setIsLoading(false),1000)
  },[])
  return (
    <>
    {isLoading && <Mini />}
      <div className="home-container">
        <div className="home-bg"></div>
        <AboutUs />
        <RealizationsPrew />
        <Testimonials />
      </div>
    </>
    
  );
};

export default Home;
