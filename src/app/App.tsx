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
      <div className="min-h-screen bg-[#1a2238] text-gray-200">
        <Navbar />
        <main className="pt-16 max-w-7xl mx-auto px-4 sm:px-6">
          <Routes>
            <Route path="/cais-web/about" element={<About />} />
            <Route path="/cais-web/projects" element={<Projects />} />
            <Route path="/cais-web/events" element={<Events />} />
            <Route path="/cais-web/contact" element={<Contact />} />
            <Route path="/cais-web/team" element={<Team />} />
            <Route path="/cais-web/" element={<About />} />
            <Route path="*" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
