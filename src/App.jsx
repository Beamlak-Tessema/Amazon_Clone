import React from "react";
import Header from "./Components/Header/Header";
import LowerHeader from "./Components/Header/LowerHeader";
import Carousel from "./Components/Carasol/Carousel";
import Catagory from "./Components/Catagory/Catagory";

const App = () => {
  return (
    <>
      <Header />
      <LowerHeader />

      
        <Carousel />
        <Catagory />
      
    </>
  );
};

export default App;
