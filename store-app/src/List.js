import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar'; 


const List = ({ items }) => (
  <div className="list-container">
    {items.map(item => (
      <div key={item.id} className="list-item">
        <Link to={item.route}>
          <img src={item.image} alt={item.title} />
          <h2>{item.title}</h2>
        </Link>
      </div>
    ))}
  </div>
);

export default List;