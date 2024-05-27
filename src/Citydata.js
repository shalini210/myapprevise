import React from 'react'
import "./City.css"
import virat from "./images/virat.jpg"
export default function Citydata() {
  return (
 <div className="card">
    <img src={virat}/>
    <div className="cardcontent">
<h5>Card title</h5>
<p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<input type="button" value="read more"/>
    </div>
 </div>
  )
}
