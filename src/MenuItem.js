// MenuItem.js
import React from 'react';

class MenuItem extends React.Component {
  render() {
    const { name, price, description, nr } = this.props;
    return (
      <div className="menu-item">
        <h3>Nr {nr}. {name}</h3>
        <p>{description}</p>
        <h4>Pris: {price}kr</h4>
      </div>
    );
  }
}

export default MenuItem;