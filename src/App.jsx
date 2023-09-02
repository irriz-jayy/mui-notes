import React from "react";
import { Route, Routes } from "react-router-dom";
import Notes from "./pages/Notes";
import Navbar from "./components/Navbar";
import Create from "./pages/Create";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Notes />} />
        <Route path="/create-note" element={<Create />} />
      </Routes>
    </>
  );
};

export default App;
