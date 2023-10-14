// MenuItem.js
import React from 'react';

class MenuItem2 extends React.Component {
  render() {
    const { name, price, imageSrc, description, nr } = this.props;
    return (
      <div className="menu-item">
        <img src={imageSrc} alt={name} />
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Price: {price}kr</p>
        <p>nr: {nr}</p>
      </div>
    );
  }
}

export default MenuItem2;