import React, { useState, useEffect } from 'react';

export const ItemsList = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const newItems = getItems(items);
    console.log('render');

    setItems(newItems);
  }, [getItems]);

  return (
    <ul>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
};
