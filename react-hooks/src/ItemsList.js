import React, { useEffect, useState } from "react";

export default function ItemsList({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // const newItems = getItems();

    const newItems = getItems(25);
    setItems(newItems);
  }, [getItems]);

  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
