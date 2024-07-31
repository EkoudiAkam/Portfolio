import { BrowserRouter } from "react-router-dom";
import React from "react";
import SectionWrap from "./components/navigation/SectionWrap";
import About from "./components/middle/About";
import Contact from "./components/end/Contact";
import Experience from "./components/middle/Experience";
import Feedbacks from "./components/middle/Feedbacks";
import Hero from "./components/start/Hero";
import Works from "./components/middle/Works";
import Tech from "./components/middle/Tech";
import Navbar from "./components/start/Navbar";
import Stars from "./components/animation/Stars";

const App = () => {
  return(
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Feedbacks/>
        <div className="relative z-0">
          <Contact/>
          <Stars/>
        </div>
      </div>
    </BrowserRouter>
  )
}



export default App;
