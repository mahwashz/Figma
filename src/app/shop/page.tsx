import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import Product from "./product";
import Bar from "./bar";
import Footer from "./footer";

function home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Product />
      <Bar />
      <Footer />
    </div>
  );
}

export default home;
