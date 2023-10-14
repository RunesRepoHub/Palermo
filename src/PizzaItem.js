import React from 'react';

function PizzaItem({ name, price, description }) {
  return (
    <div className="pizza-item">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{price}kr</p>
    </div>
  );
}

export default PizzaItem;
