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
			data :'',
			path:[]
		}		

	  async componentDidMount() {
	  	const response = await fetch('http://localhost:4000/api/gotb/list');
	  	const content = await response.json();
	  	await this.setState({data:JSON.stringify(content)});
	 	const temp = [];
	 	const tempid = [];
	 	const temppath = [];
	  	for(var i=0;i<content.length;i++){
	  		temp[i] = content[i].name;
	  		tempid[i] = content[i]._id;
	  		temppath[i] = '/list/'+content[i]._id;
	  	}
	  	this.setState({title:temp});
	  	this.setState({id:tempid});
	  	this.setState({path:temppath});

}
	render(){
		
	return(
		<>				
		
		<Link to="/"><a href="#" id="back"style={{fontSize:35,marginLeft:'10rem',width:'40',padding:0}}>&#60;</a></Link>
		{this.state.title.map((el,idx)=>
				<li key={idx}>
					<div id="card">
						{console.dir(this.state.path[idx])}
						<h3>{el}</h3>
						<Link to={{
							pathname:`/list/${this.state.id[idx]}`,
							state:{id:this.state.id[idx]}
						}}><button>WATCH</button></Link>
						<div id="attack" style={{backgroundImage:`url(${img})`}}></div>
						<div id="defend" style={{backgroundImage:`url(${img})`}}></div>
					</div>	  	
				</li>
			)}  						
		</>
	);
}
};