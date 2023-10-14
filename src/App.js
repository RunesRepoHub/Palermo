import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Menu from './Menu';
import Salater from './Salater';
import Drikkevarer from './Drikkevarer';
import FamiliePizza from './FamiliePizza';
import './styles.css';

class App extends React.Component {
  render() {
    return (
      <Router>
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

        <div className="content">
          <Routes className="routes">
            <Route path="/menu" element={<Menu />} />
            <Route path="/salater" element={<Salater />} />
            <Route path="/drikkevarer" element={<Drikkevarer />} />
            <Route path="/familie-pizza" element={<FamiliePizza />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
