import React from 'react';
import MenuItem from './MenuItem';

class Salater extends React.Component {
  render() {
    const saladItems = [
      // Define your salad menu items here
    ];

    return (
      <div id="salater" className="menu-section">
        <h2>Salater</h2>
        {saladItems.map((item, index) => (
          <MenuItem key={index} name={item.name} price={item.price} />
        ))}
      </div>
    );
  }
}

export default Salater;