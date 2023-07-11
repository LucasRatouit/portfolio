import Header from "./components/Header";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-chakra-petch text-white">
      <div className="bg-zinc-900 py-12" style={{ height: "920px" }}>
        <Header />
      </div>
      <div id="expertise" className="bg-zinc-800 pt-20 pb-32">
        <Expertise />
      </div>
      <div id="projects" className="bg-zinc-900 py-20">
        <Projects />
      </div>
      <div id="contact" className="bg-zinc-800 py-20">
        <Contact />
      </div>
    </div>
  );
}

export default App;
