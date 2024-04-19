import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* Routes pour gérer la navigation */}
      <Routes>
        {/* Route principale */}
        <Route path="/" element={<Home />} />{" "}
        {/* Chemin vers la page d'accueil */}
      </Routes>
    </>
  );
};

export default App;
