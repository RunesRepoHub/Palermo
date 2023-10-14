// MenuItem.js
import React from 'react';

class MenuItem extends React.Component {
  render() {
    const { name, price, description, nr } = this.props;
    return (
      <div className="menu-item">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Price: {price}kr</p>
        <p>nr: {nr}</p>
      </div>
    );
  }
}

export default MenuItem;