import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Components/Pages/HomePage';
import About from "./Components/Pages/About";
import Courses from "./Components/Pages/Courses";
import Contact from "./Components/Pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
