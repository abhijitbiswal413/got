import React ,{Component} from 'react';
import logo from './logo192.png';
import img from './img192.png';
import './battleCard.css';

import {Link}  from 'react-router-dom';

const apath = './attack1.jpeg'
var style = {
  width:0.0005,
  borderLeft:'10 solid green',
  color : 'grey',
  height:400,
  border:'solid'
};
  
export default class BattleCard extends Component{
    render(){
    return(
    <>
    <div id="abovecard">
      <div id="backbtn"><Link to="/list/"><a href="#"> &#60; </a></Link></div>
      <div id="text"><h5>T O N I G H T ' S</h5></div>
  </div>
<div id="cards">  
<h3  id="toptext">BATTLE  OF  THE  BASTARDS</h3>  
    <div className="profileattack">
      <img src={logo} style={{width:300}} alt="Attacking Commander" /> 
      <h4 id="name" style={{color:'white'}}>S N O W</h4>      
      <hr />   
      <h5 id="belowtext" style={{color:'white'}}>Bastard of Winterfell</h5>    
    </div>
    {/*<hr style={style} />  */}
    <div className="profiledefend">
      <img src={img} style={{width:300}} alt="Defending Commander" />     
      <h4 id="name" style={{color:'white'}}>B O L T O N</h4>     
      <hr />   
      <h5 id="belowtext" style={{color:'white'}}>Lord of Dreadfort</h5>
    </div>    
</div>
<div id="infocard">
  <div id="attackinfo">
    <img src={logo} style={{width:70}}/> 
    <div id="infoitem">
      <img src={logo} style={{width:20}}/> 
      <h5>info1</h5>
    </div>
    <div id="infoitem">
      <img src={logo} style={{width:20}}/> 
      <h5>info1</h5>
    </div>
    <div id="infoitem">
      <img src={logo} style={{width:20}}/> 
      <h5>info1</h5>
    </div>
  </div>
  <div id="defendinfo">
    <div id="infoitem">
      <img src={logo} style={{width:20}}/> 
      <h5>info1</h5>
    </div>
    <div id="infoitem">
      <img src={logo} style={{width:20}}/> 
      <h5>info1</h5>
    </div>
    <div id="infoitem">
      <img src={logo} style={{width:20}}/> 
      <h5>info1</h5>    
    </div>
  <img src={logo} style={{width:70}}/> 
  </div>
</div>

<div id="btn">
<button onClick={e => e.preventDefault()}> START   FIGHT </button>
</div>
  </> 
    );
  }
}