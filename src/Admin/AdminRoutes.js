// import React from "react";
// import { Route, Routes, Navigate } from "react-router-dom";
// import Suggest from "./Suggest";
// import Profile from "./Profile";
// import ComPost from "./ComPost";
// import MyPlant from "./MyPlant";
// import AddPlant from "./AddPlant"
// // import Home from "../home/Home";
// import Userhome from "./Userhome";
// const AdminRoutes = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Navigate to="home" replace />} />
//       <Route path="suggest" element={<Suggest />} />
//       <Route path="profile" element={<Profile />} />
//       <Route path="compost" element={<ComPost />} />
//       <Route path="myplant" element={<MyPlant />} />
//       {/* <Route path="*" element={<Navigate to="suggest" replace />} /> */}
//       <Route path="userhome" element={<Userhome />} />
//       <Route path="addplant" element={<AddPlant/>}/>
//       {/* <Route path="/" element={<Home />} /> */}
//     </Routes>
//   );
// };

// export default AdminRoutes;


import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Suggest from "./Suggest";
import Profile from "./Profile";
import MyPlant from "./MyPlant";
// import Home from "../home/Home";
import Userhome from "./Userhome";
const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" replace />} />
      <Route path="suggest" element={<Suggest />} />
      <Route path="profile" element={<Profile />} />
      <Route path="myplant" element={<MyPlant />} />
      {/* <Route path="*" element={<Navigate to="suggest" replace />} /> */}
      <Route path="userhome" element={<Userhome />} />
      {/* <Route path="/" element={<Home />} /> */}
    </Routes>
  );
};

export default AdminRoutes;
