// MenuItem.js
import React from 'react';

class MenuItem extends React.Component {
  render() {
    const { name, price, imageSrc, description, nr } = this.props;
    return (
      <div className="menu-item">
        <img src={imageSrc} alt={name} />
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Price: {price}kr</p>
        <p>nr: {nr}</p>
        <p>-----------------------------</p>
      </div>
    );
  }
}

export default MenuItem;