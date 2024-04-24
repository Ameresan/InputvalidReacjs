

import React, { useState } from 'react'
import './Amrish.css';
const Amrish = () => {
    const[input,setInput]=useState('');
    const[love,setLove]=useState('');
    const[area,setArea]=useState('');
    const[area1,setArea1]=useState('');
    const[opt1,setOpt1]=useState('');
    const[opt2,setOpt2]=useState('');
    
    function durai(){
        setLove("Name: "+input);
        setArea1("textarea: "+area);
        setOpt2("option: "+opt1);
        
    }



  return (
    <div>
        <div id='style2'>
        <div id='style1'>
            <label>Name:</label><br></br>
      <input type='text' id='style3' value={input} onChange={(e)=>{setInput(e.target.value)}}></input><br></br><br></br>
      <label>Comments:</label><br></br>
      <textarea value={area} id='style4' onChange={(e)=>{setArea(e.target.value)}}></textarea><br></br><br></br>
      <label>The Select Option:</label><br></br>
      <select value={opt1} id='style5' onChange={(e)=>{setOpt1(e.target.value)}}>
        <option>option1</option>
        <option>option2</option>
        <option>option3</option>
      </select><br></br><br></br>
      <button onClick={durai}>submit</button><br></br><br></br>
      <h1>{love}<br></br>{area1}<br></br>{opt2}</h1>
      </div>
      </div>

    </div>
  )
}

export default Amrish
