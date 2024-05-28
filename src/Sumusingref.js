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
    <div className='row'>
    <div className=' col-md-6 bg-primary'>
<p>Enter a :
<input type="text" ref={a} className="form-control"></input></p>
<p>Enter b : <input type="text" ref={b} className="form-control"></input></p>
<input type="button" value="Add" onClick={()=>calculate('+')} className="btn btn-primary"/>
<input type="button" value="-" onClick={()=>calculate('-')} className="btn btn-warning"/>
<input type="button" value="*" onClick={()=>calculate('*')} className="btn btn-secondary"/>
<input type="button" value="/" onClick={()=>calculate('/')} className="btn btn-success"/>
<p ref={r}></p>
</div>
</div>
  )
}
