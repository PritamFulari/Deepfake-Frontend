// import { Button } from "./components/ui/button"
import Navbar from "./pages/Navbar"
import Home from "./pages/Home";

import { BrowserRouter as Router } from "react-router-dom";
function App() {

  return (
    <>
    
      <Router>
        <div >
          <Navbar />
        </div>
        <Home/>
      </Router>
    </>
  );
}

export default App
