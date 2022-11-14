import React, { useState,useEffect } from "react";
import {testimonials} from './index'
import "./styles-testimonials.css";

import { Rating } from "@mui/material";

const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0)
  const [intervalId, setIntervalId] = useState('')

  useEffect(()=> {
    setIntervalId(setInterval(setItemNext, 5000))
  },[])

  const setItemNext = () => {

    setActiveIdx( prevState =>  {
      if(prevState === 3) {
        return 0
      } else return prevState+1
    })
  }

  const setItemNextAndBreak = () => {
    clearInterval(intervalId)
    setActiveIdx( prevState =>  {
      if(prevState === 3) {
        return 0
      } else return prevState+1
    })
    setTimeout(setIntervalId(setInterval(setItemNext, 5000)),5000)
  }

  const setItemPrevAndBreak = () => {
    clearInterval(intervalId)
    setActiveIdx( prevState => {
      if(prevState === 0) {
        return 3
      } else return prevState-1
      
    })
    setTimeout(setIntervalId(setInterval(setItemNext, 5000)),5000)
  }


  return (
    <div className="my-row testimonials_intro_and_carousel_container">
      <div className="testimonials_intro">
        <h2>Spokojní klienti</h2>
        <h5>Sme šťastní keď sú aj naši zákazníci</h5>
      </div>
      <div className="carousel">
        {
          testimonials.map( (test,idx) => (
            <div key={idx} className={`testimonial_container ${idx === activeIdx ? 'testimonial_active': ''}`}>
          <p className="testimonial_text">
            {test.text}
          </p>
          <div className="testimonial_person_and_rating">
            <div className="my-column">
              {" "}
              <h5 className="testimonial_person">{test.name}</h5>
              <p className="testimonial_person_occ">{test.occupation}</p>
            </div>
            <Rating value={test.rating} readOnly precision={0.5} />
          </div>
        </div>
          ))
        }
        
        
        <button onClick={setItemPrevAndBreak} className="carousel_button prev">&#10096;</button>
        <button onClick={setItemNextAndBreak} className="carousel_button next">&#10097;</button>
      </div>
    </div>
  );
};

export default Testimonials;
