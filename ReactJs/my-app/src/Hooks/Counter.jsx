import React, { useState } from 'react'

export default function Counter() {
    let[counter,setcounter]=useState(1);
  return (
    <div>
        <h1></h1>
        <h2>counter value:{counter}</h2>
      <button onClick={()=>setcounter(counter+1)}>+</button>
      <button onClick={()=>setcounter(counter-1)}>-</button>
    </div>
  )
}
