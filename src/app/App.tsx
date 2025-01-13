import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./about/about";
import Projects from "./projects/projects";
import Events from "./events/events";
import Contact from "./contact/contact";
import Team from "./team/team";
import Navbar from "../components/Navbar";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-16 max-w-7xl mx-auto px-4 sm:px-6">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
