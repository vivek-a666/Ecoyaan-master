import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import About from './pages/About';
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Sell from "./pages/Sell";
import Home from './pages/Home';


function App() {

  return (
    <>
    <Router>
      <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/about" element={<About />} />
 <Route path="/contact" element={<Contact />} />
 <Route path="/careers" element={<Careers />} />
 <Route path="/sell" element={<Sell />} />
     </Routes>
     </Router>
    </>
  )
}

export default App
