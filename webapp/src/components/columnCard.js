import React,{Component} from 'react';
import img from './480240.png';
import './columnCard.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link  
}  from 'react-router-dom';

export default class ColumnCard extends Component{
		state ={
			title :[],
			id : [],
			data :''
		}		

	  async componentDidMount() {
	  	const response = await fetch('http://localhost:4000/api/gotb/list');
	  	const content = await response.json();
	  	await this.setState({data:JSON.stringify(content)});
	 	const temp = [];
	 	const tempid = [];
	  	for(var i=0;i<content.length;i++){
	  		temp[i] = content[i].name;
	  		tempid[i] = content[i]._id;
	  	}
	  	this.setState({title:temp});
	  	console.dir(this.state.title ,temp ,tempid)
}
/*function Card(){
  	return(
  		<div id="card">
			<h3>BATTLE OF THE BASTARDS</h3>
			<Link to="/list/id"><button>WATCH</button></Link>
			<div id="attack" style={{backgroundImage:`url(${img})`}}></div>
			<div id="defend" style={{backgroundImage:`url(${img})`}}></div>
		</div>
  		);
  }
*/
	render(){
		
	return(
		<>
		
		
		
		<Link to="/"><a href="#" id="back"style={{fontSize:35,marginLeft:'10rem',width:'40',padding:0}}>&#60;</a></Link>
		{this.state.title.map((el,id)=>
				<li key={id}>
		<div id="card">
			<h3>{el}</h3>
			<Link to="/list/id"><button>WATCH</button></Link>
			<div id="attack" style={{backgroundImage:`url(${img})`}}></div>
			<div id="defend" style={{backgroundImage:`url(${img})`}}></div>
		</div>	  	
				</li>
			)}
  		
		
		
		</>
	);
}
};