import React from "react";
import pic from "../../assets/pexels-los-muertos-crew-8853507.jpg";
import "./styles-about.css";
import {Footer} from '../index'

const AboutUs = () => {
  return (
    <>
      <div className="aboutUs_container">
        <div className="aboutUs_paragraph_left">
          <span className="abooutUs_highlight"></span>
          <h3>Fotovoltaika</h3>
          <p>
            Dovoľte nám ukázať Vám ako si dokážete znížiť mesačné náklady za
            elektrinu. Sme spoločnosť, ktorá sa venuje komplexným riešeniam pri
            budovaní malých i veľkých fotovoltaických elektrární. 
          </p>
        </div>
        <div className="aboutUs_img_crew_container">
          <img className="aboutUs_img_crew" src={pic} alt={"los-muertos-crew"} />
          <div className="aboutUs_img_shadow"></div>
        </div>
        <div className="aboutUs_paragraph_right" >
        <span className="abooutUs_highlight"></span>
          <h3>Dnes</h3>
          <p>
             V dnešnej dobe
            extrémne rastúcich cien za energie, pomáhame domácnostiam, firmám,
            mestám i obciam radikálne znižovať náklady na elektrickú energiu. Už
            nemusíte byť závislí na veľkých dodávateľoch elektriny, môžete si
            energiu vyrábať sami. Slnečná energia je takmer neminuteľná, je
            zadarmo a je ekologická.
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default AboutUs;
