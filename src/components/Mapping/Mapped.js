import React from "react";
import { Button } from "./Button";
export const Mapped = (props) => {
  const { list, handleremove } = props;
  //    console.log(list);
  // const [selectedImages,setSelectedImages]=useState([])
 
  return (
    <div className="deletedata">
      {list.map((image, i) => (
        <div key={i}>
          <img src={image.image1} alt="images" />
          <img src={image.image2} alt="images" />
          {list.length > 0 ? (
            //  <Button type="button" handleClick={()=>handleremove(image.i)}>Delete</Button>
            <div className="delete"><Button handleClick={handleremove} myclass="btn btn-danger">
              delete
            </Button></div>
            // <Button onClick={()=>setSelectedImages(selectedImages.filter((e)=>e!==image))}></Button>
          ) : (
            ""
          )}{" "}
        </div>
      ))}

    </div>
  );
};
