import React from 'react';
import MenuItem from './MenuItem';

class FamiliePizza extends React.Component {
  render() {
    const familiepizzaItems = [
      // Define your salad menu items here
    ];

    return (
      <div id="familiepizza" className="menu-section">
        <h2>FamiliePizza</h2>
        {familiepizzaItems.map((item, index) => (
          <MenuItem key={index} name={item.name} price={item.price} />
        ))}
      </div>
    );
  }
}

export default FamiliePizza;
