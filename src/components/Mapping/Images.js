import React from "react";

export const Images = (props) => {
  const { imagesList, handleclick } = props;
  // console.log(imagesList);
  return (
    <div className="row p-1">
      {imagesList.map((image, i) => (
        <div key={i} className="col-3">
          <img src={image.src} alt="noimage" width="100%" onClick={(e) => {
            handleclick(e.target.src)
          }} />{" "}
        </div>
      ))}
    </div>
  );
};
