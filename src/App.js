import { Box, CssBaseline } from "@mui/material";
import React from "react";
import About from "./components/About.js";
import Customer from "./components/Customer.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Service from "./components/Service.js";
const App = () => {
  return (
    <>
      <Box>
        <CssBaseline />
        <Header />
        <About />
        <Service />
        <Main />
        <Customer/>
        <Footer/>
      </Box>
    </>
  );
};

export default App;
