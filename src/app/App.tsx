import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./about/about";
import Projects from "./projects/projects";
import Events from "./events/events";
import Contact from "./contact/contact";
import Team from "./team/team";
import Governance from "./governance/governance";
import Resources from "./resources/resources";
import Contribute from "./contribute/contribute";
import HomePage from "./home/home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Navbar />
        <main className="pt-16 w-full flex-grow">
          <Routes>
            <Route path="/cais-web/about" element={<About />} />
            <Route path="/cais-web/projects" element={<Projects />} />
            <Route path="/cais-web/events" element={<Events />} />
            <Route path="/cais-web/contact" element={<Contact />} />
            <Route path="/cais-web/team" element={<Team />} />
            <Route path="/cais-web/governance" element={<Governance />} />
            <Route path="/cais-web/resources" element={<Resources />} />
            <Route path="/cais-web/contribute" element={<Contribute />} />
            <Route path="/cais-web/" element={<HomePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
