import React from "react";
import Content from "../../components/Content/content";
import Footer from "../../components/Footer/footer";
import Hero from "../../components/Hero/hero";
import Navbar from "../../components/Navbar/navbar";
import "./home.scss";
import Card from "../../components/Card/card";
import Accordion from "../../components/Accordion/simpleAccordion";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Content />
      <Card />
      <Accordion />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
