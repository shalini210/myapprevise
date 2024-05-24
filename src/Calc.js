import React from 'react'

export default function Calc(props) {
 var a = props.a;
 var b = props.b;
 var result="";
 var op = props.op;
 
 switch (op) {
    case "+":
        result=" sum is "+ (a+b)
        break;
    case "-":
        result=" Difference is "+ (a-b)
        break;
    
    case "*":
                result=" multiplication is "+ (a*b)
     break;
     
        case "/":
            result=" division is "+ (a/b)
            break;
        
    default:
        break;
 }
  return (
    <div>{result}</div>
  )
}
