import React from "react";
import "./Home.css";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Description from "../components/Description";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Banner />
      <Description />
      <Footer />
    </div>
  );
}

export default Home;
