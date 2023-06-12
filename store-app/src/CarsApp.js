import React, { useState } from "react";
import SearchBar from "./CarSearch/SearchBar";
import ImageList from "./CarSearch/ImageList";

import searchImages from "./api";

const CarsApp = () => {
  const [images, setImages] = useState([]);

  function callMe(searchTerm) {
    console.log("Call me function is called....");
    console.log("Query param is: " + searchTerm);

    searchImages().then((response) => {
      const imageData = response.data.results;
      console.log(imageData);
      setImages(imageData); //upadeting state variable with data we get frmo api array, image get rerander
    });
    //creat async means returning promise
    //we need .then pluse params inside
    // write catch later
  }

  //searchImages brings promise in consolle log and it need .then

  // Next steps: to call the fetch function and pass it the searchTerm
  // It should return us some imag list
  // Pass this imageList to ImageList component

  // rodesac dagvibrundeba array maqedan udna chavsvat statis funqciashi setImages
  // when you get resault u update state

  return (
    <>
      <SearchBar cb={callMe} />
      <ImageList imgList={images} />
    </>
  );
}

export default CarsApp


// Access Key
// 0195lSK0lm6kyYFa8Yjptntl6pO8Sz6J-xRjAKOtQe0

// Secret key
// TmkgYZKZ68N2AwWrjCDqhVOgw3UcPve-wcgx13bNJlQ