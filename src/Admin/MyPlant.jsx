import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Admin.css';
import { toast } from "react-toastify";
const MyPlant = () => {
  // Define state to manage the plants
  const [plants, setPlants] = useState([]);

  const notifyB = () => {
    toast.success("You have removed your collection");
  }
  // Fetch data from localStorage on component mount
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userPlantAdded")) || {};
    setPlants(Object.values(data));
  }, []);

  // Function to remove a plant by its id
  const handleRemove = (id) => {
    // Filter out the plant with the given id
    const updatedPlants = plants.filter(plant => plant.id !== id);
    // Update localStorage with the updated plant list
    localStorage.setItem('userPlantAdded', JSON.stringify(updatedPlants));
    // Update state to reflect the removal
    setPlants(updatedPlants);
    notifyB();
  };

  const navigate = useNavigate();

  return (
    <>
      <h1 className="myplant_h1">My Collection</h1>
      <div className="myplant_main">
        {plants.length > 0 ? (
          plants.map((plant, index) => (
            <div key={plant.id} className="main">
              <div className="contai">
                <div className="front">
                  <img
                    className="myplant_img"
                    src={plant.images}
                    alt={plant.commonName}
                  />
                </div>
                <div className="back">
                  <div className="myplant_info">
                    <h2 className="myplant_h2">{plant.commonName}</h2>
                    <p className="myplant_p">{plant.description}</p>
                  </div>
                  <button
                    className="myplant_btn"
                    onClick={() =>
                      navigate(`/pagenavigation/${index}`, {
                        state: { plant },
                      })
                    }
                  >
                    View Details
                  </button>
                  <button
                    className="myplant_btn_remove"
                    onClick={() => handleRemove(plant.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p style={{ fontSize: "50px", color: "#fff", marginTop: "50px" }}>Nothing In Your Collection</p>
        )}
      </div>
    </>
  );
};

export default MyPlant;
