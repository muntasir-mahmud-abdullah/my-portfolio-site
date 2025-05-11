import React from "react";

import Navbar from "../home-page/components/Navbar";
import Footer from "../home-page/components/Footer";
import AboutHero from "./components/AboutHero";
import Biography from "./components/Biography";
import Timeline from "./components/Timeline";
import Education from "./components/Education";
import Testimonials from "./components/Testimonials";
import PersonalValues from "./components/PersonalValues";
import ContactCTA from "../home-page/components/ContactCTA";

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <AboutHero />
        <Biography />
        <Timeline />
        <Education />
        <PersonalValues />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default AboutMe;