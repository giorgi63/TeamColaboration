import React from 'react';
import { Link } from 'react-router-dom'; 

const CartItem = ({ item, onIncrease, onDecrease }) => (
  <div className="cart-item">
    <img src={item.image} alt={item.name}/>
    <h5>{item.name}</h5>
    <p>{item.price}</p>
    <div>
      <button onClick={() => onDecrease(item)}> - </button>
      <span> {item.quantity} </span>
      <button onClick={() => onIncrease(item)}> + </button>
    </div>
    <Link to="/checkout">Buy Now</Link>
  </div>
);

export default CartItem;
