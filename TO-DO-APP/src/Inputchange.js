import React, { useState } from 'react'

function Inputchange() {
    const [color,setcolor] = useState("black")
    const [input,setinput] = useState("")
    const handlecolor = ()=>{
       setcolor(input);
    }
  return (
    <div>
        <h1>color change</h1>
        <div><input type='text' style={{color:"red"}} value={input} onChange={(e)=>{setinput(e.target.value)}} /> </div>
        
        <div><button onClick={handlecolor}> click</button></div>

        <div><p style={{color:color}}>hello </p></div>
    </div>
  )
}

export default Inputchange