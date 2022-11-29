import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IconButton, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./styles-navbar.css";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import Drawer from "../Drawer/Drawer";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isLg = useMediaQuery("(max-width:1200px)");
  const isSm = useMediaQuery("(max-width:900px)");

  const handleDrawerOpen = () => {
    setDrawerOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar_container">
      <div className="navbar_content">
        <IconButton
          className="navbar_menu_icon"
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerOpen}
        >
          <MenuIcon sx={{ width: "1.3em", height: "1.3em" }} />
        </IconButton>

        <div
          className="navbar_logo_container"
          style={{ display: `${isLg ? "none" : "block"}` }}
        ></div>
        <div
          className="navbar_buttons_container"
          style={{ display: `${isSm ? "none" : "flex"}` }}
        >
          <NavLink to="/">
            <button>Domov</button>
          </NavLink>
          <NavLink to="/sluzby">
            <button>Služby</button>
          </NavLink>
          <NavLink to="/realizacie">
            <button>Realizácie</button>
          </NavLink>
          <NavLink to="/kontakt">
            <button>Kontakt</button>
          </NavLink>
        </div>
        <div className="navbar_contact_info">
          <button className="call_to_action_button">
            <PhoneInTalkIcon
              sx={{
                mr: ".5rem",
                height: `${isLg ? "1em" : "1.2em"}`,
                width: `${isLg ? "1em" : "1.2em"}`,
              }}
            />
            +421 902 956 896
          </button>
        </div>
      </div>
      <Drawer drawerOpen={drawerOpen} isSm={isSm} />
    </nav>
  );
};

export default Navbar;
