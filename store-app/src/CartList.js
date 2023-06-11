import React, { useState } from 'react';
import CartItem from './CartItem';

const CartList = () => {
  const [items, setItems] = useState([
    { id: 1, title: 'Title 1', name: 'Item 1', price: 100, quantity: 1, image: 'https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/422992/sub/goods_422992_sub11.jpg?width=750' },
    { id: 2, title: 'Title 2', name: 'Item 2', price: 200, quantity: 1, image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Woman_in_a_V-Neck_T-Shirt.jpg/220px-Woman_in_a_V-Neck_T-Shirt.jpg' },
    { id: 1, title: 'Title 1', name: 'Item 1', price: 100, quantity: 1, image: 'https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1659713412/457095_X5L89_9234_006_100_0000_Light-Oversize-T-shirt-with-Gucci-logo.jpg' },
    { id: 2, title: 'Title 2', name: 'Item 2', price: 200, quantity: 1, image: 'https://ih1.redbubble.net/image.4543917801.7950/ssrco,active_tshirt,mens,101010:01c5ca27c6,front,square_product,600x600.jpg' },
    { id: 1, title: 'Title 1', name: 'Item 1', price: 100, quantity: 1, image: 'https://cdna.lystit.com/photos/ssense/16190f90/prada-white-White-Olimpia-Saint-Boat-T-shirt.jpeg' },
    { id: 2, title: 'Title 2', name: 'Item 2', price: 200, quantity: 1, image: 'https://ae01.alicdn.com/kf/H1dace98803ee4bf39788c757fbe734caE/Men-s-T-Shirt-Toon-Link-the-Wind-Waker-Zelda-Under-the-Red-Sun-Traditional-Fashion.jpg' },
  
]);

  const handleIncrease = (item) => {
    const newItems = items.map(i =>
      i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
    );
    setItems(newItems);
  };

  const handleDecrease = (item) => {
    const newItems = items.map(i =>
      i.id === item.id ? { ...i, quantity: i.quantity > 1 ? i.quantity - 1 : 1 } : i
    );
    setItems(newItems);
  };

  return (
    <div className="cart-list">
      {items.map(item => (
        <CartItem
          key={item.id}
          item={item}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />
      ))}
    </div>
  );
};

export default CartList;
