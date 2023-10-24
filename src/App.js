import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Aboutus from './Aboutus';
import './App.css';
import about from './About'
import Contactus from './Contactus';
import Home from './Home';
import Navigation from './Navigation';
import Page1 from './Page1';
import About from "./About";
import Menu from "./Menu";

function App() {
  return (
    <Router>
    <div className="App">
     <Navigation />
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="menu"  element={<Menu />} />
     </Routes>
    
    </div>
    </Router>
  );
}

export default App;
