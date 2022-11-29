import React, { useEffect, useState } from "react";
import { Mini } from "../Loader/Loader";
import "./styles-realizations.css";

const Realizations = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <>
      {isLoading && <Mini />}
      <div className="realizations_container  ">
        <div className="single_realization_container my-relative z-2">
          <div className="bg2 realization"></div>
          <div className="realization_paragraph realization_paragraph_before">
            <h1>Nitra</h1>
            <p>Realizujeme všetky veľkosti fotovoltaických elektrární.</p>
            <h5>
              55 panelov,<span> 3 týždne</span>
            </h5>
          </div>
        </div>
        <div className={`single_realization_container reverse mt-4`}>
          <div className="realization_paragraph ">
            <h1>Nové Mesto</h1>
            <p>Realizujeme všetky veľkosti fotovoltaických elektrární.</p>
            <h5>
              55 panelov,<span> 3 týždne</span>
            </h5>
          </div>
          <div className="bg4 realization"></div>
        </div>
        <div className="single_realization_container mt-4">
          <div className="bg3 realization"></div>
          <div className="realization_paragraph  ">
            <h1>Golianovo</h1>
            <p>Realizujeme všetky veľkosti fotovoltaických elektrární.</p>
            <h5>
              55 panelov,<span> 3 týždne</span>
            </h5>
          </div>
        </div>

        <div className="single_realization_container reverse mt-4 ">
          <div className="realization_paragraph  realization_paragraph_before_2">
            <h1>Nitra</h1>
            <p>Realizujeme všetky veľkosti fotovoltaických elektrární.</p>
            <h5>
              55 panelov,<span> 3 týždne</span>
            </h5>
          </div>
          <div className={`bg1 realization `}></div>
        </div>
      </div>
    </>
  );
};

export default Realizations;
