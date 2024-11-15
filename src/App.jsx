// Import necessary components and React Router modules
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About"; // Import About component only once

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Navbar with links */}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
