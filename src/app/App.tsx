import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/governance" element={<Governance />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contribute" element={<Contribute />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
