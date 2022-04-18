import React from 'react'

function Renderlist(props) {
    const { OnFruits, Onvalue } =props
  return (
    <div>
 

        <ul> {OnFruits.filter(Fruit=> { return ( Fruit.nam.toLowerCase().includes(Onvalue.toLowerCase()))
        }).map((Fruits,i)=><li  key={i}>{ Fruits.nam}</li> )}</ul>
       
        </div>
  )
}

export default Renderlist