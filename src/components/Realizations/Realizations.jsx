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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              amet minus a odit suscipit! Soluta dolorum ea, unde similique culpa
              cum cupiditate porro id, eum, libero amet ab est minima.
            </p>
            <h5>
              55 panelov
              <span> 3 týždne</span>
            </h5>
          </div>
        </div>
        <div className={`single_realization_container reverse mt-10 ${isLg ? '':'mr-3'}`}>
          <div className="realization_paragraph ">
            <h1>Horná Dolná</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              amet minus a odit suscipit! Soluta dolorum ea, unde similique culpa
              cum cupiditate porro id, eum, libero amet ab est minima.
            </p>
            <h5>
              55 panelov
              <span> 3 týždne</span>
            </h5>
          </div>
          <div className="bg4 realization"></div>
        </div>
        <div className="single_realization_container mt-10">
          <div className="bg3 realization"></div>
          <div className="realization_paragraph  ">
            <h1>Horná Dolná</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              amet minus a odit suscipit! Soluta dolorum ea, unde similique culpa
              cum cupiditate porro id, eum, libero amet ab est minima.
            </p>
            <h5>
              55 panelov
              <span> 3 týždne</span>
            </h5>
          </div>
        </div>
  
        <div className="single_realization_container reverse mt-10 ">
          <div className="realization_paragraph  realization_paragraph_before_2">
            <h1>Horná Dolná</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              amet minus a odit suscipit! Soluta dolorum ea, unde similique culpa
              cum cupiditate porro id, eum, libero amet ab est minima.
            </p>
            <h5>
              55 panelov
              <span> 3 týždne</span>
            </h5>
          </div>
          <div className={`bg2 realization ${isLg ? '' : 'mr-3'}`}></div>
        </div>
      </div>
      <Footer/>
    </>
  ); 
};

export default Realizations;
