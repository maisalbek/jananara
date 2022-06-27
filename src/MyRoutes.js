import React from "react";
import { Routes, Route } from "react-router-dom";
import AddPatients from "./components/pages/AddPatients";
import Patients from "./components/pages/Patients";
import Home from "./components/pages/Home";
import MainLayout from "./MainLayout";

const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/addpatients" element={<AddPatients />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
