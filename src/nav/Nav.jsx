import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import Login from "../login/Login";
import SignUp from "../singup/SignUp";
import "./Nav.css";
const Nav = () => {
  return (
    <div className="conatiner">
      <div className="nav">
        <Link to="/" element={<Home />} className="nav2">
          <span>GardenGuru</span>
        </Link>
        <Link to="/" element={<Home />} className="nav2">
          Home
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
      </Routes>
    </div>
  );
};

export default Nav;
