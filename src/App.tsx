import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Achievements from "./components/sections/Achievements";
import Blog from "./components/sections/Blog";
import Contact from "./components/sections/Contact";
import "./styles/globals.css";
import "./styles/theme.css";
import "./styles/App.css";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Achievements />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
