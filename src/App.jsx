import React from "react";
import { Route, Routes } from "react-router-dom";
import Notes from "./pages/Notes";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Notes />} />
        <Route path="/create-note" />
      </Routes>
    </>
  );
};

export default App;
