import React from 'react';
import img from './480240.png';
import './columnCard.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link  
}  from 'react-router-dom';

export default function ColumnCard(){
	return(
		<>
		<Link to="/"><a href="#" id="back"style={{fontSize:35,marginLeft:'10rem',width:'40',padding:0}}>&#60;</a></Link>
		<div id="card">
			<h3>BATTLE OF THE BASTARDS</h3>
			<Link to="/list/id"><button>WATCH</button></Link>
			<div id="attack" style={{backgroundImage:`url(${img})`}}></div>
			<div id="defend" style={{backgroundImage:`url(${img})`}}></div>
		</div>
		<div id="card">
			<h3>BATTLE OF THE BASTARDS</h3>
			<Link to="/list/id"><button>WATCH</button></Link>
			<div id="attack" style={{backgroundImage:`url(${img})`}}></div>
			<div id="defend" style={{backgroundImage:`url(${img})`}}></div>
		</div>
		<div id="card">
			<h3>BATTLE OF THE BASTARDS</h3>
			<Link to="/list/id"><button>WATCH</button></Link>
			<div id="attack" style={{backgroundImage:`url(${img})`}}></div>
			<div id="defend" style={{backgroundImage:`url(${img})`}}></div>
		</div>
		<div id="card">
			<h3>BATTLE OF THE BASTARDS</h3>
			<Link to="/list/id"><button>WATCH</button></Link>
			<div id="attack" style={{backgroundImage:`url(${img})`}}></div>
			<div id="defend" style={{backgroundImage:`url(${img})`}}></div>
		</div>
		<div id="card">
			<h3>BATTLE OF THE BASTARDS</h3>
			<Link to="/list/id"><button>WATCH</button></Link>
			<div id="attack" style={{backgroundImage:`url(${img})`}}></div>
			<div id="defend" style={{backgroundImage:`url(${img})`}}></div>
		</div>
		<div id="card">
			<h3>BATTLE OF THE BASTARDS</h3>
			<Link to="/list/id"><button>WATCH</button></Link>
			<div id="attack" style={{backgroundImage:`url(${img})`}}></div>
			<div id="defend" style={{backgroundImage:`url(${img})`}}></div>
		</div>
		<div id="card">
			<h3>BATTLE OF THE BASTARDS</h3>
			<Link to="/list/id"><button>WATCH</button></Link>
			<div id="attack" style={{backgroundImage:`url(${img})`}}></div>
			<div id="defend" style={{backgroundImage:`url(${img})`}}></div>
		</div>		
		</>
	);
};