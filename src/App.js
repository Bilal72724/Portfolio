import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import About from "./components/About";
import Projects from "./components/project section/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Section />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
