import React from "react";
import ImageShow from "./ImageShow";

const ImageList = ({ imgList }) => {
  console.log(imgList);

  const imageShowList = [];
  for (let i = 0; i < imgList.length; i++) {
    imageShowList.push(<ImageShow imageDetails={imgList[i]} />);
    //creating new ImageShow component evry time
    console.log(imgList[i]);
  }
  console.log(imageShowList);

  return <>{imageShowList}</>;
};

export default ImageList;
