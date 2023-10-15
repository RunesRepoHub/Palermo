import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Menu from './Menu';
import Salater from './Salater';
import Drikkevarer from './Drikkevarer';
import FamiliePizza from './FamiliePizza';
import ContactInfo from './ContactInfo'; // Import the ContactInfo component
import './styles.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        {/* Fixed Contact Information */}
        <ContactInfo />
        <div className="container">
          <div className="menu">
            {/* Place your menu components here */}
            <nav>
              <ul>
                <li>
                  <Link to="/menu">Menu</Link>
                </li>
                <li>
                  <Link to="/salater">Salater</Link>
                </li>
                <li>
                  <Link to="/drikkevarer">Drikkevarer</Link>
                </li>
                <li>
                  <Link to="/familie-pizza">Familie Pizza</Link>
                </li>
              </ul>
            </nav>
            <Routes className="routes">
              <Route path="/menu" element={<Menu />} />
              <Route path="/salater" element={<Salater />} />
              <Route path="/drikkevarer" element={<Drikkevarer />} />
              <Route path="/familie-pizza" element={<FamiliePizza />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
