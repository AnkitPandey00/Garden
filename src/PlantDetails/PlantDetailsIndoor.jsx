import React, { useEffect, useState } from "react";
import Data from "../topData/indoorData";
import { useNavigate } from "react-router-dom";
import "./Indoor.css";
import { toast } from "react-toastify";

const PlantDetailsIndoor = () => {
  const [data, setdata] = useState([]); //! this state for store data coming from other component

  const [searchValue, setSearchValue] = useState(""); //! this state is for searching 

  const [pages, setPages] = useState(1); //! this sate is for pagination

  const navigate = useNavigate();

  useEffect(() => {
    setdata(Data);
  }, []);


  //! handling search input  function
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

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

  //! code for filtering data ---

  const filteredData = data.filter((ele) =>
    ele.commonName.toLowerCase().includes(searchValue.toLowerCase())
  );

  //! code for pagination
  const totalPages = Math.ceil(filteredData.length / 10);

  function selectPges(select) {
    if (select >= 1 && select <= totalPages && select !== pages)
      setPages(select);
  }
  //! -------------------------------

  
  return (
    <div className="indoor_conatiner">
      <div className="indoor_container_01">
        {/* 
          //! search input for filtering data
        */}

        <input
          type="text"
          placeholder="Search Indoor plant..."
          value={searchValue}
          onChange={handleSearchChange}
        />

        {/* 
        //! code is written here to display data on wep pages ---- using map 
        //! doing slicing for pagination ----- 
        */}

        <h1 className="heading_04">Our Best Indoor Plant</h1>
        {filteredData.slice((pages - 1) * 10, pages * 10).map((ele, id) => {
          return (
            <>
              <div className="indoor_section">
                <div className="indoor_img">
                  <img src={ele.images} alt="" className="img"></img>
                </div>
                <div className="indoor_section_01">
                  <h2 className="indoor_h2">Common Name : {ele.commonName}</h2>
                  <p className="indoor_desc">{ele.description}</p>
                  <button
                    onClick={() =>
                      navigate(`/pagenavigation/${id}`, {
                        state: { plant: ele },
                      })
                    }
                    className="btn_indorr"
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

      {/* 
            //! code written for doing pagination in our webpages
          */}
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
      {/* 
      //!------------------------------pagination over  
      */}
    </div>
  );
};

export default PlantDetailsIndoor;
