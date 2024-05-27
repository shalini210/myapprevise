import React, { useState } from 'react'

export default function SumusingState() {
    const [a,seta]=useState(0);
    const[b,setb]=useState(0);
    const[c,setc]=useState(0);

    const sum=()=>
    {
        setc(parseInt(a)+parseInt(b));
       }
  return (
    <div>SumusingState
       a: <input type="text" onBlur={(e)=>seta(e.currentTarget.value)} /> <br></br>
       b: <input type="text" onBlur={(e)=>setb(e.currentTarget.value)} /> <br></br>
       
       <br></br>

       <h1>a and b are : {a} + {b}=
       {c>50?<p style={{color:"red"}}>{c}</p>:<p style={{color:"green"}}>{c}</p>}
       </h1>
       <input type="button" value="Sum " onClick={()=>sum()}/>
        
    </div>
  )
}
