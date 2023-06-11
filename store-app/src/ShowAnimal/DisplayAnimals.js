import React, { useState } from "react";
import bird from "./animalSVG/bird.svg";
import cat from "./animalSVG/cat.svg";
import dog from "./animalSVG/dog.svg";
import gator from "./animalSVG/gator.svg";
import heart from "./animalSVG/heart.svg";
import horse from "./animalSVG/horse.svg";

const svgMap = {
  bird: bird,
  cat: cat,
  dog: dog,
  gator: gator,
  heart: heart,
  horse: horse,
};

const DisplayAnimal = ({ type }) => {
  const [clicks, setClicks] = useState(0);

  function handleClick() {
    setClicks(clicks + 1);
  }
  //To increase the size on every click,
  //we will have to control the styling of heart based on click value.
  //line 32
  return (
    <div onClick={handleClick}>
      <img alt="animal" style={{ width: "100px" }} src={svgMap[type]}></img>
      <img
        alt="heart"
        style={{ width: 10 + 10 * clicks + "px" }}
        src={svgMap["heart"]}
      ></img>
    </div>
  );
};

export default DisplayAnimal;
