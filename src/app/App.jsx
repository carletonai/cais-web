import About from "./about/about.tsx";
import Projects from "./projects/projects.tsx";
import Events from "./events/events.tsx";
import Contact from "./contact/contact.tsx";
import Team from "./team/team.tsx";

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
