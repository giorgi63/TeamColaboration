import React from 'react';
import List from './List';


const items = [
  { id: 1, image: "https://cdn.dribbble.com/users/1224589/screenshots/16105004/media/3260d802d993ac3891c6428d13863a62.jpg?compress=1&resize=400x300&vertical=center", route: "/Item1", title: "BookApp" },
  { id: 2, image: "https://cdn.dribbble.com/users/1224589/screenshots/16105004/media/3260d802d993ac3891c6428d13863a62.jpg?compress=1&resize=400x300&vertical=center", route: "/item2", title: "Item 2" },
  { id: 3, image: "https://cdn.dribbble.com/users/1224589/screenshots/16105004/media/3260d802d993ac3891c6428d13863a62.jpg?compress=1&resize=400x300&vertical=center", route: "/item3", title: "Item 3" },
  { id: 4, image: "https://cdn.dribbble.com/users/1224589/screenshots/16105004/media/3260d802d993ac3891c6428d13863a62.jpg?compress=1&resize=400x300&vertical=center", route: "/item4", title: "Item 3" }

];

const Home = () => (
    <div className="home-container">
    <h1 className="home-title">Our Applications 👊</h1>
    <List items={items} />
  </div>
);

export default Home;
