import React from "react";
import { Route, Routes } from "react-router-dom";
import Notes from "./pages/Notes";

const App = () => {
  return (
    <>
      <div>
        <h1>App</h1>
      </div>
      <Routes>
        <Route exact path="/" element={<Notes />} />
        <Route path="/create-note" />
      </Routes>
    </>
  );
};

export default App;
