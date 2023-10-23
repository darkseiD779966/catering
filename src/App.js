import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Aboutus from './Aboutus';
import './App.css';
import about from './About'
import Contactus from './Contactus';
import Home from './Home';
import Navigation from './Navigation';
import Page1 from './Page1';
import About from "./About";

function App() {
  return (
    <Router>
    <div className="App">
     <Navigation />
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     </Routes>
    
    </div>
    </Router>
  );
}

export default App;
