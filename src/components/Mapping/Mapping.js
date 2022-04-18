import React from 'react'
import { Button } from './Button';

export const Mapping = (props) => {

  const { image1, image2, handleSave } = props;


  return (
    <div>
      <div className="card2">
        <img src={image1} alt="noimage" className="imgsty" />
        <img src={image2} alt="noimage" className="imgsty" />
      </div>
      <div className='save'>
        <Button handleClick={handleSave} myclass="btn btn-success">
          save
        </Button>

      </div></div>
  )
}
