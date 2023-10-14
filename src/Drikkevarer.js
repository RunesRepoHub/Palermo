import React from 'react';
import MenuItem from './MenuItem';

class Drikkevarer extends React.Component {
  render() {
    const drikkevarerItems = [
      // Define your salad menu items here
    ];

    return (
      <div id="drikkevarer" className="menu-section">
        <h2>Drikkevarer</h2>
        {drikkevarerItems.map((item, index) => (
          <MenuItem key={index} name={item.name} price={item.price} />
        ))}
      </div>
    );
  }
}

export default Drikkevarer;
