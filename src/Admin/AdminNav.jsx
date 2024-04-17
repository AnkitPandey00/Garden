import React from "react";
import { NavLink } from "react-router-dom";
import './Admin.css'

const AdminNav = () => {
  return (
    <div className="Admin_nav">
       <NavLink to="/adminpage/profile" className="Admin_Link">Profile</NavLink>
       <NavLink to="/adminpage/suggest" className="Admin_Link">Suggestion</NavLink>
      <NavLink to="/adminpage/compost" className="Admin_Link">Community Post</NavLink>
      <NavLink to="/adminpage/myplant" className="Admin_Link">My Collection</NavLink>
   
    </div>
  );
};

export default AdminNav;