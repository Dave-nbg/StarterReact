import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from "./pages/About";

function App() {
  return (
      <div>
        <nav>
          <ul>
            <li><Link to="/Home">Home</Link></li>
              <li> <Link to={"/about"}>About</Link></li>
          </ul>
        </nav>
        <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
  );
}

export default App;
