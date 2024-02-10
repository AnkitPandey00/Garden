import React from "react";
import Data from "../topData/outdoorData";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const PlantDetailsOutdoor = () => {
  const [data, setdata] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setdata(Data);
  }, []);

  return (
    <>
      {data.map((ele, id) => {
        return (
          <>
            <div className="toSection">
              <div className="left">
                <img src={ele.Image} alt=""></img>
              </div>
              <div className="right">
                <h1>Title: {ele.Title}</h1>
                <h1>Origin: {ele.Origin}</h1>
                <h1>AnotherName{ele.AnotherName}</h1>
                <h1>Common name:{ele.CommonName}</h1>
              </div>
              <button
                onClick={() =>
                  navigate(`/pagenavigation/${id}`, { state: { plant: ele } })
                }
              >
                View More
              </button>
            </div>
          </>
        );
      })}
    </>
  );
};

export default PlantDetailsOutdoor;
