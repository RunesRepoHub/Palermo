import React from 'react';
import MenuItem from './MenuItem';

class Drikkevarer extends React.Component {
  render() {
    const drikkevarerItems = [
      {
        category: 'A la Carte',
        items: [
          { name: 'Dürüm', price: 85, description: '', nr: 2 },
          { name: 'Dürüm', price: 85, description: '', nr: 2 },
          { name: 'Dürüm', price: 85, description: '', nr: 2 },
          { name: 'Dürüm', price: 85, description: '', nr: 2 },
          { name: 'Dürüm', price: 85, description: '', nr: 2 },
        ],
      },
      {
        category: 'Drikkevarer',
        items: [
          { name: 'Sandwich', price: 85, description: '', nr: 2 },
          { name: 'Sandwich', price: 85, description: '', nr: 2 },
          { name: 'Sandwich', price: 85, description: '', nr: 2 },
          { name: 'Sandwich', price: 85, description: '', nr: 2 },
        ],
      },
    ];

    return (
      <div className="menu">
        <div className="title-1">
          <h1>Drikkevarer & A la Carte</h1>
        </div>
        {drikkevarerItems.map((category, index) => (
          <div key={index}>
            <div className="title-2">
              <h2>{category.category}</h2>
            </div>
            {category.items.map((item, subIndex) => (
              <MenuItem
                key={subIndex}
                name={item.name}
                price={item.price}
                nr={item.nr}
                description={item.description}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Drikkevarer;
