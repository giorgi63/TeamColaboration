import React from "react";
import { useState } from "react";
import DisplayAnimal from "./ShowAnimal/DisplayAnimals";

function getRandomAnimal() {
  var animals = ["horse", "cat", "dog", "gator", "bird"];
  var randomNumber = Math.random();
  var myRange = randomNumber * animals.length;
  var myIndex = Math.floor(myRange);

  return animals[myIndex];
}

export const AnimalShow = () => {
  const [animalsList, setAnimal] = useState([]); // animal array state

  function handleClick() {
    setAnimal([...animalsList, getRandomAnimal()]);
  }

  var animalsToRender = animalsList.map((animal, index) => {
    return <DisplayAnimal key={index} type={animal} />;
  });

  return (
    <div className="animal-show-container">
      <h2>Animal Show</h2>
      <p>This app randomly adds animals on tap, and clicking on them increases the size of the heart as many times as you tap to infinity.</p>

      <button className="add-animal-button" onClick={handleClick}>Add Animal</button>
      <div className="animals-list">{animalsToRender}</div>
    </div>
  );
};

export default AnimalShow;
