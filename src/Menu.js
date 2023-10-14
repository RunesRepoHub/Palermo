import React from 'react';
import MenuItem from './MenuItem';

class Menu extends React.Component {
  render() {
    const menuItems = [
      {
        category: 'Pizza Menu',
        items: [
          { name: 'Tayfuns Special', price: 75, description: "Tomat, ost, log, champignon, oksekød, jalapenos, majs", nr: 0, },
          { name: 'Brenderup Special', price: 75, description: "Tomat, ost, champignon, skinke, løg, rød peber", nr: 1, },
          { name: 'Pizza 2', price: 75 },
          { name: 'Pizza 2', price: 75 },
          { name: 'Pizza 2', price: 75 },
          { name: 'Pizza 2', price: 75 },
          { name: 'Pizza 2', price: 75 },
          { name: 'Pizza 2', price: 75 },
          { name: 'Pizza 2', price: 75 },
          { name: 'Pizza 2', price: 75 },
          { name: 'Pizza 2', price: 75 },
          { name: 'Pizza 2', price: 75 },
          // Add more pizza items here
        ],
      },
      {
        category: 'Børne Pizzaer',
        items: [
          { name: 'Børne Pizza 1', price: 70 },
          { name: 'Børne Pizza 2', price: 70 },
          // Add more children's pizza items here
        ],
      },
      {
        category: 'Vegetar Pizzaer',
        items: [
          { name: 'Vegetar Pizza 1', price: 75 },
          { name: 'Vegetar Pizza 2', price: 75 },
          // Add more vegetarian pizza items here
        ],
      },
      {
        category: 'Indbagte Pizzaer',
        items: [
          { name: 'Vegetar Pizza 1', price: 75 },
          { name: 'Vegetar Pizza 2', price: 75 },
          // Add more vegetarian pizza items here
        ],
      },
      {
        category: 'Special Pizzaer',
        items: [
          { name: 'Vegetar Pizza 1', price: 75 },
          { name: 'Vegetar Pizza 2', price: 75 },
          // Add more vegetarian pizza items here
        ],
      },
      {
        category: 'Mexikanske Pizzaer',
        items: [
          { name: 'Vegetar Pizza 1', price: 75 },
          { name: 'Vegetar Pizza 2', price: 75 },
          // Add more vegetarian pizza items here
        ],
      },
      {
        category: 'Åbent Indbagte Pizzer',
        items: [
          { name: 'Vegetar Pizza 1', price: 75 },
          { name: 'Vegetar Pizza 2', price: 75 },
          // Add more vegetarian pizza items here
        ],
      },
      {
        category: 'Deep Pan Pizzer',
        items: [
          { name: 'Vegetar Pizza 1', price: 75 },
          { name: 'Vegetar Pizza 2', price: 75 },
          // Add more vegetarian pizza items here
        ],
      },
      {
        category: 'Tyrkiske Pizzaer',
        items: [
          { name: 'Vegetar Pizza 1', price: 75 },
          { name: 'Vegetar Pizza 2', price: 75 },
          // Add more vegetarian pizza items here
        ],
      },
      {
        category: 'Luxus Pizzaer',
        items: [
          { name: 'Vegetar Pizza 1', price: 75 },
          { name: 'Vegetar Pizza 2', price: 75 },
          // Add more vegetarian pizza items here
        ],
      },
      {
        category: 'Salat Pizzaer',
        items: [
          { name: 'Vegetar Pizza 1', price: 75 },
          { name: 'Vegetar Pizza 2', price: 75 },
          // Add more vegetarian pizza items here
        ],
      },
      {
        category: 'Pitabrød',
        items: [
          { name: 'Vegetar Pizza 1', price: 75 },
          { name: 'Vegetar Pizza 2', price: 75 },
          // Add more vegetarian pizza items here
        ],
      },
      {
        category: 'Dürüm',
        items: [
          { name: 'Vegetar Pizza 1', price: 75 },
          { name: 'Vegetar Pizza 2', price: 75 },
          // Add more vegetarian pizza items here
        ],
      },
      {
        category: 'Sandwich',
        items: [
          { name: 'Vegetar Pizza 1', price: 75 },
          { name: 'Vegetar Pizza 2', price: 75 },
          // Add more vegetarian pizza items here
        ],
      },
      {
        category: 'Pasta Retter',
        items: [
          { name: 'Vegetar Pizza 1', price: 75 },
          { name: 'Vegetar Pizza 2', price: 75 },
          // Add more vegetarian pizza items here
        ],
      },
      // Add more menu categories here
    ];

    return (
      <div className="menu">
        <h2>Menu</h2>
        {menuItems.map((category, index) => (
          <div key={index}>
            <h3>{category.category}</h3>
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

export default Menu;

