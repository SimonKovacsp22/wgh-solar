import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import "./styles-services.css";
import { sluzby } from ".";
import { Mini } from "../Loader/Loader";

const Services = () => {const [isLoading, setIsLoading] = useState(true)

  useEffect(()=> {
    setTimeout(()=> setIsLoading(false),1000)
  },[])
  return (
    <>
          {isLoading && <Mini />}
      <div className="services_container">
        <Grid container spacing={2}>
          {sluzby.map((sluzba, i) => (
            <Grid
              key={i}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="service_card_container"
            >
              <div className="service_card">
                <div
                  className="service_card_image"
                  style={{
                    backgroundImage: `url(${sluzba.img})`,
                  }}
                ></div>
                <div className="service_card_paragraph">
                  <h5>{sluzba.meno}</h5>
                  <p></p>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Services;
