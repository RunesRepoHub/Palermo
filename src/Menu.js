import React from 'react';
import PizzaItem from './PizzaItem';

const menuData = [
  {
    name: 'Funghi Vegetar A',
    price: 93.00,
    description: 'Med tomat, ost, champignon, rød peber, løg, majs, spinat og oregano'
  },
  {
    name: 'Pepperoni',
    price: 93.00,
    description: 'Med tomat, ost, oksekød, bovskinke, pepperoni og oregano'
  },
  {
    name: 'Salatpizza med kebab',
    price: 93.00,
    description: 'Med tomat, ost, kebab, salat og dressing'
  },
  {
    name: 'Kebab',
    price: 89.00,
    description: 'Dürüm med kebab, salat, dressing, tomatskiver, løg og agurk'
  },
  // Add more pizza items here
];

function Menu() {
  return (
    <div className="menu">
      {menuData.map((item, index) => (
        <PizzaItem key={index} {...item} />
      ))}
    </div>
  );
}

export default Menu;
