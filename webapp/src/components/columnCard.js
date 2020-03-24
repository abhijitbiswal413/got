import React,{Component} from 'react';
import img from './480240.png';
import Stark from './fitBackdrop/stark.jpg'
import Greyjoy from './fitBackdrop/greyjoy.jpg'
import Lannister from './fitBackdrop/lannister.jpg';
import Bolton from './fitBackdrop/bolton.jpg';
import Frey from './fitBackdrop/frey.jpg';
import Tully from './fitBackdrop/tully.jpg';
import Baratheon from './fitBackdrop/baratheon.jpg';
import defaultimg from './backdrop/houses.jpg';
import './columnCard.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link  
}  from 'react-router-dom';
import {AiOutlineLeft} from 'react-icons/ai';

export default class ColumnCard extends Component{
		state ={
			title :[],
			id : [],
			data :[],
			path:[],
			attackimgpath:[],
			defendimgpath:[],
		}		

	  async componentWillMount() {
	  	const response = await fetch('http://localhost:4000/api/gotb/list');
	  	const arrayvals = await fetch('http://localhost:4000/api/gotb/location');
	  	const content = await response.json();
	  	await this.setState({data:JSON.stringify(content)});
	 	const temp = [];
	 	const tempid = [];
	 	const temppath = [];	 	
	 	let img = defaultimg;
	 	let tempattackimgpath = [];
	 	let tempdefendimgpath = [];
	 	let houses ={
	 		  'Stark':Stark,
	 		  'Lannister':Lannister,
              'Greyjoy':Greyjoy,
              'Bolton':Bolton,
              'Frey':Frey,
              'Tully':Tully,
              'Baratheon':Baratheon
              };
         console.dir(('Stark' in houses),content[1].attacker_1 in houses)
	  	for(var i=0;i<content.length;i++){
	  		temp[i] = content[i].name;
	  		tempid[i] = content[i]._id;
	  		temppath[i] = '/list/'+content[i]._id;
	  	}	  	
	  	this.setState({title:temp});
	  	this.setState({id:tempid});
	  	this.setState({path:temppath});
	  	content.map((el,id)=>{
  				if(el.attacker_1 in houses)
  				 tempattackimgpath[id] = houses[el.attacker_1];
				else
					tempattackimgpath[id] = defaultimg;
			})
  		content.map((el,id)=>{

  				if(el.defender_1 in houses)
	  				 tempdefendimgpath[id] = houses[el.defender_1];
  				else
  					tempdefendimgpath[id] = defaultimg;
  			})

  		await this.setState({attackimgpath:tempattackimgpath,defendimgpath:tempdefendimgpath});


}
	render(){
		
	return(
		<>				
		

		<div id="columnbackbtn"><Link to="/count"><a href="#"> <AiOutlineLeft /> </a></Link></div>
		{this.state.title.map((el,idx)=>
				<li key={idx}>
					<div id="card">
						<h3>{el}</h3>
						<div id="columnbtn">
						<Link to={{
							pathname:`/list/${this.state.id[idx]}`,
							state:{id:this.state.id[idx]}
						}}><button>WATCH</button></Link>
						</div>
						<div id="attack" style={{backgroundImage:`url(${this.state.attackimgpath[idx]})`}}></div>
						<div id="defend" style={{backgroundImage:`url(${this.state.defendimgpath[idx]})`}}></div>
					</div>	  	
				</li>
			)}  						
		</>
	);
}
};