import React from 'react';
import List from './List';
import CartList from './CartList';
import HomeSection from './HomeSection';




const items = [
  {
    id: 1,
    image:
      "https://cdn.dribbble.com/users/1224589/screenshots/16105004/media/3260d802d993ac3891c6428d13863a62.jpg?compress=1&resize=400x300&vertical=center",
    route: "/Item1",
    title: "BookApp",
  },
  {
    id: 2,
    image:
      "https://cdn.dribbble.com/users/27148/screenshots/1783002/untitled-1.png",
    route: "/AnimalShow",
    title: "Animal Show",
  },
  {
    id: 3,
    image:
      "https://media.istockphoto.com/id/1278686772/vector/blue-car-icon.jpg?s=170667a&w=0&k=20&c=NR8r2fCzP2Mw_a4oOwTYOUXwAhJq1fI6m4tdG0Hlb5Y=",
    route: "/CarsApp",
    title: "Car Search App",
  },
  {
    id: 4,
    image:
      "https://cdn.dribbble.com/users/1224589/screenshots/16105004/media/3260d802d993ac3891c6428d13863a62.jpg?compress=1&resize=400x300&vertical=center",
    route: "/item4",
    title: "Coming soon...",
  },
];





const Home = () => (
  <>
    <HomeSection />
    <div className="home-container">
      <h1 className="home-title">Our Applications 👊</h1>
      <List items={items} />
      <div className="home-container">
        <h1 className="home-title">🧺 Buy Our Brand Clothes </h1>
        <CartList items={items} />
      </div>
    </div>{" "}
  </>
);

export default Home;
