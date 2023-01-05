import React from "react";
import Appbar from "../../components/Appbar";
import Banner from "../../components/Banner";
import Products from "../../components/products";
import SliderSection from "../../components/SliderSection";

const Home = () => {
  return (
    <div>
      <Appbar />
      <Banner />
      <SliderSection />
      <Products />
    </div>
  );
};

export default Home;
