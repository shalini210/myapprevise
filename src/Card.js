import React from 'react'

export default function Card(props) {
    var cardTitle = props.t;
    var cardDescription =  props.d;
    var clsname="card dark";
    if(props.m=="light")
    {
        clsname="card light"
    }

  return (
<>
<div className={clsname} >
        <h2>{cardTitle}</h2>
        <p>{cardDescription}</p> 
        </div>
        </>
  )
}
