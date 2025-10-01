import React, { useEffect, useState } from "react";
import "./App.css";
import "./custom.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "swiper/css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import PropertyListing from "./pages/PropertyListing/PropertyListing";

function App() {
  
  return (
    <>
      <Header />
      <Home  />
      <PropertyListing />
      <Footer />
    </>
  );
}

export default App;
