import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TagIcon from "@mui/icons-material/Tag";
import "./styles-footer.css";
import { Facebook } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_paragraph">
        <div className="footer_icon_info">
          <div>
            <LocationOnOutlinedIcon
              sx={{ width: "1.5rem", height: "1.5rem", color: "white" }}
            />
          </div>
          <div>
            <h5>Adresa</h5>
            <p style={{ color: "rgba(255, 255, 255, 0.790)" }}>
              Vyhorlatská 664/2, 949 01 Nitra
            </p>
          </div>
        </div>
        <div className="footer_icon_info">
          <TagIcon sx={{ width: "1.5rem", height: "1.5rem", color: "white" }} />
          <div className="my-column">
            <h5>Siete</h5>
            <div className="my-row">
              <div className="footer_icon_circle">
                <InstagramIcon sx={{ color: "white" }} />
              </div>
              <div className="footer_icon_circle">
                <Facebook sx={{ color: "white" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="my-column">
          <div className="footer_icon_info">
            {" "}
            <CallOutlinedIcon
              sx={{ width: "1.5rem", height: "1.5rem", color: "white" }}
            />
            <div>
              <h5>Kontakt</h5>
              <p className="footer_info_colored">+421 910 389 351</p>
              <p className="footer_info_colored">+421 902 956 896</p>
            </div>
          </div>
          <div className="footer_icon_info" style={{ marginTop: "1rem" }}>
            {" "}
            <EmailOutlinedIcon
              sx={{ width: "1.5rem", height: "1.5rem", color: "white" }}
            />
            <div>
              <h5>Mail</h5>
              <p className="footer_info_colored">obchod@wghsolar.sk</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
