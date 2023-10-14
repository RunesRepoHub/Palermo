import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#salater">Salater</a></li>
          <li><a href="#drikkevarer">Drikkevarer</a></li>
          <li><a href="#familie-pizza">Familie Pizza</a></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;