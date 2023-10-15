import React from 'react';
import MenuItem from './MenuItem';


class Salater extends React.Component {
  render() {
    const saladItems = [
      {
        category: 'salater',
        items: [
          { name: 'Dürüm', price: 85, description: '', nr: 2 },
          { name: 'Dürüm', price: 85, description: '', nr: 2 },
          { name: 'Dürüm', price: 85, description: '', nr: 2 },
          { name: 'Dürüm', price: 85, description: '', nr: 2 },
          { name: 'Dürüm', price: 85, description: '', nr: 2 },
        ],
      },
    ];

    return (
      <div className="menu">
        <div className="title-1">
          <h1>Drikkevarer & A la Carte</h1>
        </div>
        {saladItems.map((category, index) => (
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

export default Salater;