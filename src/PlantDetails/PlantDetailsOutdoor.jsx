import React from "react";
import Data from "../topData/outdoorData";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import './outdoor.css'
const PlantDetailsOutdoor = () => {
  const [data, setdata] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setdata(Data);
  }, []);

  return (
    <div className="outdoor_conatiner">
      <div className="outdoor_container_01">
        <h1 className="heading_07">Our Best Outdoor Plant</h1>
        {data.map((ele, id) => {
          return (
            <>
              <div className="outdoor_section">
                <div className="outdoor_img">
                  <img src={ele.images} alt="" className="img"></img>
                </div>
                <div className="outdoor_section_01">
                  <h2 className="outdoor_h2">Common Name : {ele.commonName}</h2>
                  <p className="outdoor_desc">{ele.description}</p>
                  <button
                    onClick={() =>
                      navigate(`/pagenavigation/${id}`, {
                        state: { plant: ele },
                      })
                    }
                    className="btn_outdoor"
                  >
                    View More
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default PlantDetailsOutdoor;
