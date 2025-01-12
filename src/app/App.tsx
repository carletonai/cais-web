import About from "./about/about.js";
import Projects from "./projects/projects.js";
import Events from "./events/events.js";
import Contact from "./contact/contact.js";
import Team from "./team/team.js";

const App = () => {
  return (
    <div className="container">
      <About />
      <Projects />
      <Events />
      <Contact />
      <Team />
    </div>
  );
};

export default App;
