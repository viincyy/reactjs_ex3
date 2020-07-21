import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import WhatWeDo from "./WhatWeDo";
import Contact from "./Contact";
import ListCard from "./ListCard";
import Footer from "./Footer";

export default function Baitap2() {
  return (
    <div>
      <Header />
      <Carousel />
      <div className="row">
        <WhatWeDo />
        <Contact />
      </div>
      <ListCard />
      <Footer />
    </div>
  );
}
