import React, { useState, useEffect } from "react";
import Data from "../topData/outdoorData";
import { useNavigate } from "react-router-dom";
import "./outdoor.css";
import { toast } from "react-toastify";
const PlantDetailsOutdoor = () => {
  const [data, setdata] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  
  const [pages, setPages] = useState(1);


  useEffect(() => {
    setdata(Data);
  }, []);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const filteredData = data.filter((ele) =>
    ele.commonName.toLowerCase().includes(searchValue.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / 10);
  function selectPges(select) {
    if (select >= 1 && select <= totalPages && select !== pages)
      setPages(select);
  }

  
  const notifyB = () => {
    toast.success("Plant added to your collection");
  }
  const notifyA = () => {
    toast.error("Plant is already in your collection");
  }


  const handleClickAdd = (plant) => {
    const currentData = JSON.parse(localStorage.getItem('userPlantAdded')) || [];
    if (currentData[plant.id]) {
      notifyA();
      return;
    }
    const updatedData = { ...currentData, [plant.id]: plant };
    localStorage.setItem('userPlantAdded', JSON.stringify(updatedData));
    notifyB();
    navigate('/adminpage/myplant')
  };


  return (
    <div className="outdoor_conatiner">
      <div className="outdoor_container_01">
        <input
          type="text"
          placeholder="Search plant..."
          value={searchValue}
          onChange={handleSearchChange}
        />
         <h1 className="heading_07">Our Best Outdoor Plant</h1>
         {filteredData.slice((pages - 1) * 10, pages * 10).map((ele, id) => {
          return (
            <>
              <div className="outdoor_section">
                <div className="outdoor_img">
                  <img src={ele.images} alt="" className="img"></img>
                </div>
                <div className="outdoor_section_01">
                  <h2 className="outdoor_h2">
                    Common Name : {ele.commonName}
                  </h2>
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
                  <button
                      style={{marginLeft:"10px"}}
                      className="btn-03"
                      onClick={() => handleClickAdd(ele)}
                    >
                     +
                    </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
      {filteredData.length > 0 && (
        <div className="pagination">
          <span
            onClick={() => selectPges(pages - 1)}
            className={pages > 1 ? "" : "pageDislable"}
          >
            ⬅️
          </span>

          {[...Array(Math.ceil(data.length / 10))].map((_, i) => {
            return (
              <span
                onClick={() => selectPges(i + 1)}
                key={i}
                className={pages === i + 1 ? "page__selected" : ""}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            onClick={() => selectPges(pages + 1)}
            className={pages < totalPages ? "" : "pageDisable"}
          >
            ➡️
          </span>
        </div>
      )}
    </div>
  );
};

export default PlantDetailsOutdoor;