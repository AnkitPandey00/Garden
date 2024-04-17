import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Suggest from "./Suggest";
import Profile from "./Profile";
import ComPost from "./ComPost";
import MyPlant from "./MyPlant";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="suggest" replace />} />
      <Route path="suggest" element={<Suggest />} />
      <Route path="profile" element={<Profile />} />
      <Route path="compost" element={<ComPost />} />
      <Route path="myplant" element={<MyPlant />} />
      <Route path="*" element={<Navigate to="suggest" replace />} />
    </Routes>
  );
};

export default AdminRoutes;