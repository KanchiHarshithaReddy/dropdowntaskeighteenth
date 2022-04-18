
import { useState } from 'react';
import './App.css';
import Child from './components/Child';
// import Fruitslist from './components/fruitsList';
import { Master } from './components/Mapping/Master';
// import List1 from './components/Thirdtask/List1';
// import Fruitslist from './components/fruitsList';

function App( ) {
  const handleOutput= (value)=>{
    setOutput(value)
}
  const options = ['Fruits', 'Chat', 'Vegetables', 'Biryani']
  const [output, setOutput]= useState(options[0])
 console.log(output)
  return (
    <div className="App">
      <h1 className='outpt'>Dropdown Task</h1>
      <h3>first task</h3>
      <Child options= {options} handleOutput={handleOutput}></Child>
      {/* output */}
<div className='outpt'> <h4>{output}</h4></div>
     <hr></hr>
{/* <Fruitslist/> */}
<hr></hr>
{/* <List1/> */}
<Master/>
    </div>

  );
}

export default App;
