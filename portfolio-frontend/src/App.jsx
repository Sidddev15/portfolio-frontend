import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import BlogSection from "./components/BlogSection";
import ContactForm from "./components/ContactForm";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Project";
import TechStack from "./components/TechStack";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Cursor />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<BlogSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/techstack" element={<TechStack />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
