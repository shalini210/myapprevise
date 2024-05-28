import React, { useRef, useState } from 'react'

export default function Referenceeg() {
    let refa = useRef("");
    const [n,setn]=useState("");
    const showhello=()=>
    {
        setn(refa.current.value);
    }
  return (
    <div>
    Enter Name
<input type="text" ref={refa} onBlur={showhello}></input>
    WElcome : {n}
    </div>
  )
}
