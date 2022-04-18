import React from 'react'

function Child(props) {
    // const [selectedOption, setSelectedOption]= useState(0)
    // props.handleOutput(selectedOption)
    return (
        <div>
            <select 
            onChange={e=> {props.handleOutput(e.target.value);
            }}>
                
                {props.options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                    
                 
                ))
                
                }
                
            </select>
        </div>
 
    )
}

export default Child