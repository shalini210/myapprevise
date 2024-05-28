import React, { useState } from 'react'
export default function UsingState() {
    var a = 10;
    const [b,setb]= useState(0);
    const increment = ()=>
    {
        a=a+1;
        console.log("a is "+a);
        let x = b;
        x++;
        setb(x);       
    }
  return (
    <div>
a is :{a} <br></br>
b is :{b}<br></br> 
<input type="button" value="+ " onClick={()=>increment()}/>
<input type="button" value="- " onClick={()=>increment()}/>
    </div>
  )
}
