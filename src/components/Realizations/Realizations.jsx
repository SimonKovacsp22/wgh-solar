import React from "react";
import "./styles-realizations.css";
import {Footer} from '../index'
import { useMediaQuery } from "@mui/material";

const Realizations = () => {

  const isLg = useMediaQuery('(max-width:1250px)')
  return (
    <>
      <div className="realizations_container  ">
        <div className="single_realization_container my-relative z-2">
          <div className="bg1 realization"></div>
          <div className="realization_paragraph realization_paragraph_before">
            <h1>Horná Dolná</h1>
            <p>
            Realizujeme všetky veľkosti fotovoltaických elektrární.
            </p>
            <h5>
              55 panelov,
              <span> 3 týždne</span>
            </h5>
          </div>
        </div>
        <div className={`single_realization_container reverse mt-4 ${isLg ? '' : 'ml-7'}`}>
          <div className="realization_paragraph ">
            <h1>Horná Dolná</h1>
            <p>
            Realizujeme všetky veľkosti fotovoltaických elektrární.
            </p>
            <h5>
              55 panelov,
              <span> 3 týždne</span>
            </h5>
          </div>
          <div className="bg4 realization" ></div>
        </div>
        <div className="single_realization_container mt-4">
          <div className="bg3 realization"></div>
          <div className="realization_paragraph  ">
            <h1>Horná Dolná</h1>
            <p>
            Realizujeme všetky veľkosti fotovoltaických elektrární.
            </p>
            <h5>
              55 panelov,
              <span> 3 týždne</span>
            </h5>
          </div>
        </div>
  
        <div className="single_realization_container reverse mt-4 ${isLg ? '' :'ml-7'}">
          <div className="realization_paragraph  realization_paragraph_before_2">
            <h1>Horná Dolná</h1>
            <p>
            Realizujeme všetky veľkosti fotovoltaických elektrární.
            </p>
            <h5>
              55 panelov,
              <span> 3 týždne</span>
            </h5>
          </div>
          <div className={`bg2 realization `}></div>
        </div>
      </div>
      <Footer/>
    </>
  ); 
};

export default Realizations;
