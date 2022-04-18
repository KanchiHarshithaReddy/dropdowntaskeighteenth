import React, { useState } from 'react';
import DisplayFruits from './DisplayFruits';
import Renderlist from './Renderlist';
function Fruitslist () {
    const [name, setname]=useState('')
    const names=[
        {'id':1,
    'nam':'apple'},
    {
        'id':2,
        'nam':'kiwi' 
    },
    {
        'id':3,
    'nam':'lichi'
    },
    {
        'id':4,
    'nam':'mango'
    },
    {
        'id':5,
    'nam':'orange'
    },
    {
        'id':6,
    'nam':'cashews'
    },
    {
        'id':7,
    'nam':'pineapple'
    },
    {
        'id':8,
    'nam':'Rawmango'
    }
    ];

    const OnName=(value)=>{
setname(value)
    }
    return (  
        <div>
          
          
      <DisplayFruits  nametarget={OnName}/>
  <Renderlist OnFruits={names} Onvalue={name}/>
        </div>
    );
}

export default Fruitslist;