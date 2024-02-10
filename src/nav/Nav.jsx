import React from "react";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import Login from "../login/Login";
import SignUp from "../SignUp/SignUp";
import PageNavigation from "../PagesNavigation/PageNavigation";
import PlantDetailsIndoor from "../PlantDetails/PlantDetailsIndoor";
import PlantDetailsOutdoor from "../PlantDetails/PlantDetailsOutdoor";
import AskQuestion from "../askQuestion/AskQuestion";
import "./Nav.css";
const Nav = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="conatiner">
      <div className="nav">
        <Link to="/" element={<Home />} className="nav2">
          <span>GardenGuru</span>
        </Link>
        <Link to="/" element={<Home />} className="nav2">
          Home
        </Link>
       
        <Link
          to="/plantdetailsindoor"
          element={<PlantDetailsIndoor />}
          className="nav2"
        >
          Indoor_Plant
        </Link>
        <Link
          to="/plantdetailsoutdoor"
          element={<PlantDetailsOutdoor />}
          className="nav2"
        >
          Outdoor_Plant
        </Link>
        <Link to="/askquestion" element={<AskQuestion />} className="nav2">
          Ask_Question
        </Link>
        <Link to="/login" element={<Login />} className="nav2">
          Login
        </Link>
        <Link to="/signup" element={<SignUp />} className="nav2">
          Signup
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/pagenavigation/:id" element={<PageNavigation />} />
        <Route path="/plantdetailsindoor" element={<PlantDetailsIndoor />} />
        <Route path="plantdetailsoutdoor" element={<PlantDetailsOutdoor />} />
        <Route path="askquestion" element={<AskQuestion/>} />
      </Routes>
    </div>
  );
};
export default Nav;
