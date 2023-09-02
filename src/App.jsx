import React from "react";
import { Route, Routes } from "react-router-dom";
import Notes from "./pages/Notes";
import Layout from "./components/Layout";
import Create from "./pages/Create";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Notes />} />
          <Route path="/create-note" element={<Create />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
