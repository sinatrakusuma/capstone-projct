import React from "react";
import Content from "../../components/Content/content";
import Footer from "../../components/footer/footer";
import Hero from "../../components/hero/hero";
import Navbar from "../../components/navbar/navbar";
import Card from "../../components/Card/card";
import "./about.scss";
import Info from "../../components/Info/info";

const About = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="footer">
        <Hero />
        <Content />
        <Info />
        <Card />
        <Footer />
      </div>
    </div>
  );
};

export default About;
