import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "spinkit/spinkit.css";
import "./styles-loader.css";

export const Mini = () => {
  return(<div className="loader_container">
  <div className="sk-grid">
    <div
      className="sk-grid-cube"
      style={{ backgroundColor: "#FE8C14" }}
    ></div>
    <div className="sk-grid-cube"></div>
    <div className="sk-grid-cube"></div>
    <div className="sk-grid-cube"></div>
    <div className="sk-grid-cube"></div>
    <div className="sk-grid-cube"></div>
    <div className="sk-grid-cube"></div>
    <div className="sk-grid-cube"></div>
    <div className="sk-grid-cube"></div>
  </div>
</div>)
}

const Loader = ({ setNavVis }) => {
  const navigate = useNavigate();
  useEffect(() => {
    setNavVis(false);
    setTimeout(() => {
      setNavVis(true);
      navigate("/domov");
    }, 2000);
  }, []);
  return (
    <Mini/>
  );
};

export default Loader;
