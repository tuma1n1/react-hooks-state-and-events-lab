import React, {useState} from "react";


function Item({ name, category }) {

  const [inCart, setInCart] = useState(false);

  const addToCart = () => {
    setInCart((previousInCart) => !previousInCart);
  };
  

  if (inCart) {
    return (
      <li className="in-cart">
        <span>{name}</span>
        <span className="category">{category}</span>
        <button onClick={addToCart}>Remove From Cart</button>
      </li>
    );
  }

  return (
    <li>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart}>Add to Cart</button>
    </li>
  );
}
  

export default Item;
