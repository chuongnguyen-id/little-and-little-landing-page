import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./layouts/Home";
import Event from "./layouts/Event";
import Contact from "./layouts/Contact";
import Payment from "./layouts/Payment";
import EventDetails from "./layouts/EventDetails";
import PaymentSuccess from "./layouts/PaymentSuccess";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/su-kien" Component={Event}></Route>
        <Route path="/su-kien/chi-tiet" Component={EventDetails}></Route>
        <Route path="/lien-he" Component={Contact}></Route>
        <Route path="/thanh-toan" Component={Payment}></Route>
        <Route path="/thanh-toan/thanh-cong" Component={PaymentSuccess}></Route>
      </Routes>
    </>
  );
}

export default App;
