
import React, { useRef, useState } from 'react'

export default function Sumusingref() {
    let a = useRef("");
    let b = useRef("");
    let r = useRef("");
    
    const calculate=(op)=>
    {
        let x = parseInt(a.current.value)
        let y = parseInt(b.current.value)
        
        switch (op) {
            case "+":
                r.current.innerHTML="sum is : "+(x+y);        
            break;
            case "-":
                r.current.innerHTML="difference is : "+(x-y);
            break;
            case "*":
                r.current.innerHTML="Product is : "+(x*y);    
            break;
            case "/":
                r.current.innerHTML="division is : "+(x/y);
            break;

        }
        
    }
  return (
    <div>
        <p>Enter a :
<input type="text" ref={a}></input></p>
<p>Enter b : <input type="text" ref={b}></input></p>
<input type="button" value="Add" onClick={()=>calculate('+')}/>
<input type="button" value="-" onClick={()=>calculate('-')}/>
<input type="button" value="*" onClick={()=>calculate('*')}/>
<input type="button" value="/" onClick={()=>calculate('/')}/>
 <p ref={r}></p>
 {/* <h1 ref={r}></h1> */}
    </div>
  )
}
