import React from 'react'

function List2(props) {
  return (
    <div>
      <div className='row'>
        <div className='col-6 border-style'>
          <img src= {props.imgSrc1} alt={props.altText[0]}/>
          <img src={props.imgSrc2}  alt={props.altText[1]}/>
          <button type='button' className='btn' onClick={()=>props.buttonHandler([props.imgSrc1, props.imgSrc2])}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default List2