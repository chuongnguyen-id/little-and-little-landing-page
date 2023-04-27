import React from "react";
import Header from "./layouts/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./layouts/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home}></Route>
      </Routes>
    </>
  );
}

export default App;
