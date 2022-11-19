import React from "react";
import Grid from "@mui/material/Grid";
import "./styles-services.css";
import { sluzby } from ".";
import Footer  from '../Footer/Footer'

const Services = () => {
  return (
   <>
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
                    backgroundImage: `url(${sluzba.img})`
                  }}
                ></div>
                <div className="service_card_paragraph">
                  <h5>{sluzba.meno}</h5>
                  <p>{sluzba.popis}</p>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
        
      </div>
      <Footer/>
   </>
  );
};

export default Services;
