import './App.css';
import { Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Blog from "./pages/Blog"

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  );
}
