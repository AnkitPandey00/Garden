// Admin.js
import React from "react";
import AdminNav from "./AdminNav";
import AdminRoutes from "./AdminRoutes";
import './Admin.css'
const Admin = () => {
  const data = JSON.parse(localStorage.getItem("Garden")).savedUser.name;
  const firstChar = data.charAt(0).toUpperCase();
   
  return (
    <div className="Admin_main">
      <div className="Admin_right">
        <div style={{display:"flex",alignItems:"center", flexDirection:"column"}}>
          <div className="Admin_First">
            <p className="first_char">{firstChar}</p>
          </div>
          <div className="Admin_name">
            <p style={{fontSize:"28px",marginTop:"1px"}}>{data}</p>
          </div>
        </div>
        <div className="Admin_Routes">
          <AdminNav />
        </div>
      </div>
      <div className="Admin_left">
         <AdminRoutes />
      </div>
    </div>
  );
};

export default Admin;
