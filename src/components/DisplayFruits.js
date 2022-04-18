import React from 'react'

function DisplayFruits(props) {
    const {nametarget} =props;
  return (
    <div>
        <h1 className='App'>DisplayFruits</h1>
        <h3>Second Task</h3>
        <input type="text"  onChange={(e)=>{nametarget(e.target.value)}}/>
    </div>
  
  )
}

export default DisplayFruits