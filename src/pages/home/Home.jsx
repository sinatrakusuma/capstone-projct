import React from "react";
import "./home.scss";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import { Container } from "@mui/system";
// import Content from "../../components/Content/content";
// import Hero from "../../components/Hero/hero";
// import Card from "../../components/Card/card";
// import Accordion from "../../components/Accordion/simpleAccordion";

const Home = () => {
  return (
    <Container
      sx={{
        width: {
          xs: "100%",
          lg: "1280px",
        },
        padding: {
          sm: 0,
        },
        margin: "0 auto",
      }}
    >
      <Navbar />
      <Footer />
    </Container>
  );
};

export default Home;
