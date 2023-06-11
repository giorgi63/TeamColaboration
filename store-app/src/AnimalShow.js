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
    console.log("Button clicked....");
    setAnimal([...animalsList, getRandomAnimal()]);
    console.log(animalsList);
  }

  var animalsToRender = animalsList.map((animal) => {
    return <DisplayAnimal type={animal} />;
  });

  //Map function will iterate through every animal and create a array of component list
  
  return (
    <>
      <button onClick={handleClick}>Add Animal</button>
      <div>{animalsToRender}</div>
    </>
  );
};

export default AnimalShow;
