import React from "react";
import { useLocation } from "react-router-dom";
import "./PageNavi.css";
const PageNavigation = () => {
  const location = useLocation();
  const plantData = location.state?.plant;
  return (
    <>
      <div className="navi_conat">
        <div className="navi_conat_01">
          <div className="img">
            <img src={plantData.images} alt=""></img>
          </div>
          <div className="img">
            <img src={plantData.images} alt=""></img>
          </div>
          <div className="img">
            <img src={plantData.images} alt=""></img>
          </div>

          <div className="img">
            <img src={plantData.images} alt=""></img>
          </div>
        </div>
        <div className="heading_plant">
          <h1>
            <span>CommonName :- </span>
            {plantData.commonName}
          </h1>
          <h1>
            <span>ScientificName :-</span> {plantData.scientificName}
          </h1>
        </div>
        <div className="desc">
          <h2>Description :-</h2>
          <p>{plantData.description}</p>
        </div>
        <h1 className="h1">Care requirement :-</h1>
        <div className="care_req">
          <div className="section_01">
            <h1>Light:-</h1>
            <p>{plantData.careRequirements.light}</p>
          </div>
          <div className="section_02">
            <h1>Watering:-</h1>
            <p>{plantData.careRequirements.watering}</p>
          </div>
          <div className="section_03">
            <h1>Temperature:-</h1>
            <p>{plantData.careRequirements.temperature}</p>
          </div>
        </div>
        <div className="care_req">
          <div className="section_01">
            <h1>Humidity:-</h1>
            <p>{plantData.careRequirements.humidity}</p>
          </div>
          <div className="section_02">
            <h1>Soil:-</h1>
            <p>{plantData.careRequirements.soil}</p>
          </div>
          <div className="section_03">
            <h1>Fertilization:-</h1>
            <p>{plantData.careRequirements.fertilization}</p>
          </div>
        </div>
        <div className="care_req">
          <div className="section_01">
            <h1>Pruning:-</h1>
            <p>{plantData.careRequirements.pruning}</p>
          </div>
          <div className="section_02">
            <h1>Propagation:-</h1>
            <p>{plantData.careRequirements.propagation}</p>
          </div>
          <div className="section_03">
            <h1>GrowingZones:-</h1>
            <p>{plantData.careRequirements.growingZones}</p>
          </div>
        </div>
        <div className="care_req">
          <div className="section_01">
            <h1>NativeHabitat:-</h1>
            <p>{plantData.careRequirements.nativeHabitat}</p>
          </div>
          <div className="section_02">
            <h1>Uses:-</h1>
            <p>{plantData.careRequirements.uses}</p>
          </div>
          <div className="section_03">
            <h1>Toxicity:-</h1>
            <p>{plantData.careRequirements.toxicity}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNavigation;
