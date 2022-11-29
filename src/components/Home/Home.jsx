import React, { useEffect, useState } from "react";
import { AboutUs, Loader } from "../index";
import { Mini } from "../Loader/Loader";
import "./styles-home.css";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=> {
    setTimeout(()=> setIsLoading(false),1000)
  },[])
  return (
    <>
      
      <div className="home-container">
      {isLoading && <Mini />}
        <div className="home-bg"></div>
        <AboutUs />
      </div>
    </>
  );
};

export default Home;
