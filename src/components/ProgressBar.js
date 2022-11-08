import React from 'react'
import MultiProgress from 'react-multi-progress'


function ProgressBar() {
  return (
    <div className='card1-progress-bar'>
                    
    <MultiProgress 
elements={[
    {
        value: 35,
        color: "blue",
    },{
        value: 45,
        color: "red",
       
    },
    // {
    //     value: 45,
    // 	color: "red",
       
    // }
]}
/>
        
    </div>
  )
}

export default ProgressBar