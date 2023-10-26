import Header from "./components/Header";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useTheme } from "./components/useTheme";

function App() {
  const { bgFirst, bgSecond, textColors } = useTheme();

  return (
    <div className={`${textColors} font-chakra-petch`}>
      <div className={`${bgFirst} max-sm:px-6 max-sm:pb-72`}>
        <Header />
      </div>
      <div id="expertise" className={`${bgSecond} py-20`}>
        <Expertise />
      </div>
      <div id="projects" className={`${bgFirst} py-20`}>
        <Projects />
      </div>
      <div id="contact" className={`${bgSecond} py-20`}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
