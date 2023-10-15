import React from 'react';
import MenuItem from './MenuItem';

class Menu extends React.Component {
  render() {
    const menuItems = [
      {
        category: 'Pizzaer ', price: 75,
        items: [
          { name: 'Tayfuns Special', price: 75, description: "Tomat, ost, løg, champignon, oksekød, jalapenos, majs", nr: 0, },
          { name: 'Brenderup Special', price: 75, description: "Tomat, ost, champignon, skinke, løg, rød peber", nr: 1, },
          { name: 'Capricciosa', price: 75, description: "Tomat, ost, champignon, skinke, bacon, løg", nr: 2, },
          { name: 'Gozde Pizza', price: 75, description: "Tomat, ost, champignon, oksekød, rejer, log", nr: 3, },
          { name: 'De Luxe', price: 75, description: "Tomat, ost, champignon, skinke, rejer, løg", nr: 4, },
          { name: 'San Remo', price: 75, description: "Tomat, ost, oksekød, ananas, asparges, pølser", nr: 5, },
          { name: 'Romagnola', price: 75, description: "Tomat, ost, skinke, oksekød, løg, bacon", nr: 6, },
          { name: 'La Grande', price: 75, description: "Tomat, ost, champignon, oksekød, pepperoni, rød peber", nr: 7, },
          { name: 'Solo Mio', price: 75, description: "Tomat, ost, champignon, skinke, rejer, ananas", nr: 8, },
          { name: 'Marina', price: 75, description: "Tomat, ost, tun, rejer, muslinger, løg", nr: 9, },
          { name: 'Colerone', price: 75, description: "Tomat, ost, champignon, skinke, rejer, muslinger, oliven", nr: 10, },
          { name: 'Bolognese', price: 75, description: "Tomat, ost, kødsauce, skinke, rød peber", nr: 11, },
          { name: 'Gorgonzola', price: 75, description: "Tomat, ost, champignon, oksekød, gorgonzola, løg", nr: 12, },
          { name: 'Raffinato', price: 75, description: "Tomat, ost, champignon, skinke, feta, løg", nr: 13, },
          { name: 'Oriental', price: 75, description: "Tomat, ost, champignon, oksekød, løg, rød peber", nr: 14, },
          { name: 'Chili Con Carne', price: 75, description: "Tomat, ost, bolognese, oksekød, chili", nr: 15, },
          { name: 'Pepperoni', price: 75, description: "Tomat, ost, champignon, skinke, pepperoni, løg, rød peber", nr: 16, },
          { name: 'Efter Kundens Ønske', price: 75, description: "Tomat, ost og max 4 enheder. Med kebab +10 kr.", nr: 17, },
          { name: 'Americano', price: 75, description: "Tomat, ost, champignon, ananas, rejer, bacon, løg, rød peber", nr: 18, },
          { name: 'Marcelli', price: 75, description: "Tomat, ost, skinke, bacon, cocktailpølser, kylling, løg", nr: 19, },
          { name: 'Lazio', price: 75, description: "Tomat, ost, champignon, oksekød, bacon, kylling", nr: 20, },
          { name: 'La Quatro Staggione', price: 75, description: "Tomat, ost, champignon, skinke, oksekød, rejer", nr: 21, },
          { name: 'Toring', price: 75, description: "Tomat, ost, skinke, ananas, aspargs, oliven", nr: 22, },
          { name: 'Hawaii pizza', price: 75, description: "Tomat, ost, skinke, ananas", nr: 23, },
          { name: 'Salat Pizza', price: 75, description: "Tomat, ost, kebab, salat, dressing", nr: 24, },
          { name: 'Chess Pizza', price: 75, description: "Chess Pizza Tomat, ost, hvidost, gorgonzola", nr: "24.a", },
          // Add more pizza items here
        ],
      },
      {
        category: 'Børne Pizzaer',
        items: [
          { name: 'Anders And', price: 70, description: "Tomat, ost, skinke, pølser", nr: 25, },
          { name: 'Mickey Mouse', price: 70, description: "Tomat, ost, skinke, ananas ", nr: 26, },
          { name: 'Fedtmule', price: 70, description: "Tomat, ost, oksekød, pølser", nr: 27, },
          { name: 'Pluto', price: 70, description: "Tomat, ost, oksekød", nr: 28, },
          { name: 'Gayenur', price: 70, description: "Tomat, ost, pepperoni, ananas", nr: "28.b", },
          // Add more children's pizza items here
        ],
      },
      {
        category: 'Vegetar Pizzaer',
        items: [
          { name: 'Rossi', price: 75, description: "Tomat, ost, champignon, rød peber, løg", nr: 29, },
          { name: 'Funghi', price: 75, description: "Tomat, ost, champignon, løg, ananas, rød peber, æg", nr: 30, },
          // Add more vegetarian pizza items here
        ],
      },
      {
        category: 'Indbagte Pizzaer',
        items: [
          { name: 'IndbagtePizzaer', price: 75, description: "", nr: 2, },
          { name: 'IndbagtePizzaer', price: 75, description: "", nr: 2, },
          { name: 'IndbagtePizzaer', price: 75, description: "", nr: 2, },
          { name: 'IndbagtePizzaer', price: 75, description: "", nr: 2, },
          { name: 'IndbagtePizzaer', price: 75, description: "", nr: 2, },
          // Add more vegetarian pizza items here
        ],
      },
      {
        category: 'Special Pizzaer',
        items: [
          { name: 'SpecialPizzaer', price: 80, description: "", nr: 2, },
          { name: 'SpecialPizzaer', price: 80, description: "", nr: 2, },
          { name: 'SpecialPizzaer', price: 80, description: "", nr: 2, },
          // Add more vegetarian pizza items here
        ],
      },
      {
        category: 'Mexikanske Pizzaer',
        items: [
          { name: 'MexikanskePizzaer', price: 80, description: "", nr: 2, },
          { name: 'MexikanskePizzaer', price: 80, description: "", nr: 2, },
          { name: 'MexikanskePizzaer', price: 80, description: "", nr: 2, },
          { name: 'MexikanskePizzaer', price: 80, description: "", nr: 2, },
          // Add more vegetarian pizza items here
        ],
      },
      {
        category: 'Åbent Indbagte Pizzer',
        items: [
          { name: 'ÅbentIndbagtePizzer', price: 80, description: "", nr: 2, },
          { name: 'ÅbentIndbagtePizzer', price: 80, description: "", nr: 2, },
          { name: 'ÅbentIndbagtePizzer', price: 80, description: "", nr: 2, },
          { name: 'ÅbentIndbagtePizzer', price: 80, description: "", nr: 2, },
          { name: 'ÅbentIndbagtePizzer', price: 80, description: "", nr: 2, },
          { name: 'ÅbentIndbagtePizzer', price: 80, description: "", nr: 2, },
          { name: 'ÅbentIndbagtePizzer', price: 80, description: "", nr: 2, },
          { name: 'ÅbentIndbagtePizzer', price: 80, description: "", nr: 2, },
          { name: 'ÅbentIndbagtePizzer', price: 80, description: "", nr: 2, },
          { name: 'ÅbentIndbagtePizzer', price: 80, description: "", nr: 2, },
          // Add more vegetarian pizza items here
        ],
      },
      {
        category: 'Deep Pan Pizzer',
        items: [
          { name: 'DeepPanPizzer', price: 85, description: "", nr: 2, },
          { name: 'DeepPanPizzer', price: 85, description: "", nr: 2, },
          { name: 'DeepPanPizzer', price: 85, description: "", nr: 2, },
          { name: 'DeepPanPizzer', price: 85, description: "", nr: 2, },
          { name: 'DeepPanPizzer', price: 85, description: "", nr: 2, },
          { name: 'DeepPanPizzer', price: 85, description: "", nr: 2, },
          { name: 'DeepPanPizzer', price: 85, description: "", nr: 2, },
          // Add more vegetarian pizza items here
        ],
      },
      {
        category: 'Tyrkiske Pizzaer',
        items: [
          { name: 'TyrkiskePizzaer', price: 85, description: "", nr: 2, },
          { name: 'TyrkiskePizzaer', price: 85, description: "", nr: 2, },
          { name: 'TyrkiskePizzaer', price: 85, description: "", nr: 2, },
          // Add more vegetarian pizza items here
        ],
      },
      {
        category: 'Luxus Pizzaer',
        items: [
          { name: 'LuxusPizzaer', price: 85, description: "", nr: 2, },
          { name: 'LuxusPizzaer', price: 85, description: "", nr: 2, },
          { name: 'LuxusPizzaer', price: 85, description: "", nr: 2, },
          { name: 'LuxusPizzaer', price: 85, description: "", nr: 2, },
          { name: 'LuxusPizzaer', price: 85, description: "", nr: 2, },
          { name: 'LuxusPizzaer', price: 85, description: "", nr: 2, },
          // Add more vegetarian pizza items here
        ],
      },
      {
        category: 'Salat Pizzaer',
        items: [
          { name: 'SalatPizzaer', price: 85, description: "", nr: 2, },
          { name: 'SalatPizzaer', price: 85, description: "", nr: 2, },
          { name: 'SalatPizzaer', price: 85, description: "", nr: 2, },
          { name: 'SalatPizzaer', price: 85, description: "", nr: 2, },
          { name: 'SalatPizzaer', price: 85, description: "", nr: 2, },
          { name: 'SalatPizzaer', price: 85, description: "", nr: 2, },
          { name: 'SalatPizzaer', price: 85, description: "", nr: 2, },
          // Add more vegetarian pizza items here
        ],
      },
      {
        category: 'Pitabrød',
        items: [
          { name: 'Pitabrød', price: 85, description: "", nr: 2, },
          { name: 'Pitabrød', price: 85, description: "", nr: 2, },
          { name: 'Pitabrød', price: 85, description: "", nr: 2, },
          { name: 'Pitabrød', price: 85, description: "", nr: 2, },
          { name: 'Pitabrød', price: 85, description: "", nr: 2, },
          // Add more vegetarian pizza items here
        ],
      },
      {
        category: 'Dürüm',
        items: [
          { name: 'Dürüm', price: 85, description: "", nr: 2, },
          { name: 'Dürüm', price: 85, description: "", nr: 2, },
          { name: 'Dürüm', price: 85, description: "", nr: 2, },
          { name: 'Dürüm', price: 85, description: "", nr: 2, },
          { name: 'Dürüm', price: 85, description: "", nr: 2, },
          // Add more vegetarian pizza items here
        ],
      },
      {
        category: 'Sandwich',
        items: [
          { name: 'Sandwich', price: 85, description: "", nr: 2, },
          { name: 'Sandwich', price: 85, description: "", nr: 2, },
          { name: 'Sandwich', price: 85, description: "", nr: 2, },
          { name: 'Sandwich', price: 85, description: "", nr: 2, },
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
        <div className="title-1">
        <h1>Alle Pizzaer</h1>
        </div>
        {menuItems.map((category, index) => (
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

export default Menu;

