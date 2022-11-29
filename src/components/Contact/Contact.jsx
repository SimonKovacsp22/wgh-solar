import React, { useEffect, useRef, useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import emailjs from "@emailjs/browser";
import "./styles-contact.css";
import { Alert, Snackbar, useMediaQuery } from "@mui/material";
import { Mini } from "../Loader/Loader";

const Contact = () => {
  const nameRef = useRef();
  const surnameRef = useRef();
  const addressRef = useRef();
  const emailRef = useRef();
  const phoneNRef = useRef();
  const messageRef = useRef();
  const [success0pen, setSuccessOpen] = useState(false);
  const [dangerOpen, setDangerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true)

 

  const isXs = useMediaQuery("(max-width:300px)");

  const handleSuccessClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSuccessOpen(false);
  };
  const handleDangerClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setDangerOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      nameRef.current.value.length > 3 &&
      surnameRef.current.value.length > 3 &&
      emailRef.current.value.length > 3 &&
      messageRef.current.value.length > 3
    ) {
      emailjs
        .send(
          "service_zt89lzv",
          "template_zo3yfon",
          {
            name: nameRef.current.value,
            surname: surnameRef.current.value,
            email: emailRef.current.value,
            address: addressRef.current.value,
            phone: phoneNRef.current.value,
            question: messageRef.current.value,
          },
          "Rn-N0KN5tGps5JePe"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setSuccessOpen(true);
            nameRef.current.value = "";
            surnameRef.current.value = "";
            emailRef.current.value = "";
            addressRef.current.value = "";
            phoneNRef.current.value = "";
            messageRef.current.value = "";
          },
          (err) => {
            console.log("FAILED...", err);
          }
        );
    } else {
      setDangerOpen(true);
    }
  };

  useEffect(()=> {
    setTimeout(()=> setIsLoading(false),1000)
  },[])

  return (
    <>
    {isLoading && <Mini/>}
      <div className="contact_container">
        <div className="contact_left_section">
          <div className="contact_left_info_container">
            <div className="contact_left_icon_info">
              <LocationOnOutlinedIcon
                sx={{
                  width: "1.8rem",
                  height: "2.5rem",
                  color: "white",
                  display: `${isXs ? "none" : "block"}`,
                }}
              />

              <div>
                <h5>Adresa</h5>
                <p>Vyhorlatská 664/2, 949 01 Nitra</p>
              </div>
            </div>
            <div className="contact_left_icon_info">
              <CallOutlinedIcon
                sx={{
                  width: "1.8rem",
                  height: "2.5rem",
                  color: "white",
                  display: `${isXs ? "none" : "block"}`,
                }}
              />
              <div>
                <h5>Kontakt</h5>
                <p className="contact_info_colored">+421 910 389 351</p>
                <p className="contact_info_colored">+421 902 956 896</p>
              </div>
            </div>
            <div className="contact_left_icon_info">
              <EmailOutlinedIcon
                sx={{
                  width: "1.8rem",
                  height: "2.5rem",
                  color: "white",
                  display: `${isXs ? "none" : "block"}`,
                }}
              />
              <div>
                <h5>Mail</h5>
                <p className="contact_info_colored">fvenergiamd@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact_right_section">
          <h3>Napíš nám správu</h3>
          <form onSubmit={handleSubmit}>
            <div className="contact_right_single_input_container">
              <h6>Meno a priezvisko *</h6>
              <div>
                <div>
                  <input
                    ref={nameRef}
                    className="contact_name_input"
                    type={"text"}
                    placeholder="Meno"
                  ></input>
                  <input
                    ref={surnameRef}
                    className="contact_name_input"
                    type={"text"}
                    placeholder="Priezvisko"
                  ></input>
                </div>
              </div>
            </div>
            <div className="contact_right_single_input_container">
              <h6>Mesto/Obec</h6>
              <input
                ref={addressRef}
                type={"text"}
                style={{ width: "100%" }}
                placeholder="pr. Bratislava,Nová 553"
              ></input>
            </div>

            <div className="contact_right_single_input_container">
              <h6>Email *</h6>
              <input
                ref={emailRef}
                style={{ width: "100%" }}
                type="email"
                placeholder="pr. martin15@email.com"
              />
            </div>
            <div className="contact_right_single_input_container">
              <h6>Telefónne číslo</h6>
              <input
                ref={phoneNRef}
                style={{ width: "100%" }}
                type="tel"
                placeholder="+421 000 000 000"
              />
            </div>
            <div className="contact_right_single_input_container">
              <h6>Správa *</h6>
              <textarea ref={messageRef} rows={5} placeholder="Čo ťa zaujíma" />
            </div>
            <button type="submit">ODOSLAŤ SPRÁVU</button>
          </form>
        </div>
      </div>
      <Snackbar
        open={success0pen}
        autoHideDuration={4000}
        onClose={handleSuccessClose}
      >
        <Alert
          onClose={handleSuccessClose}
          severity="success"
          sx={{ backgroundColor: "rgb(134 203 134)", fontSize: "1rem" }}
        >
          Správa bola odoslaná!
        </Alert>
      </Snackbar>
      <Snackbar
        open={dangerOpen}
        autoHideDuration={4000}
        onClose={handleDangerClose}
      >
        <Alert
          onClose={handleDangerClose}
          severity="error"
          sx={{ backgroundColor: "rgb(255 129 129)", fontSize: "1rem" }}
        >
          Prosím vyplň polia označené hviezdičkou
        </Alert>
      </Snackbar>
      
    </>
  );
};

export default Contact;
