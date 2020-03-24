import React , {Component} from 'react';
import logo from './logo192.png';
import img from './img192.png';
import backdrop from './backdrop/battle.jpg';
import './battleCount.css'

import {Link}  from 'react-router-dom';
import {AiOutlineLeft} from 'react-icons/ai';

export default class Count extends Component{
	state = {
		count:''
	}
	async componentDidMount(){
		const response = await fetch('http://localhost:4000/api/gotb/count');
		const content = await response.json();
		await this.setState({count:(content)});
		console.dir(content);
	}
	render(){
		return(
			<>
			<div id="countbackbtn"><Link to="/"><a href="#"> <AiOutlineLeft /> </a></Link></div>
			<div id="countcard" style={{backgroundImage:`url(${backdrop})`}}>  				
			    <div className="battleprofile">
			      <h1 style={{color:'white',fontWeight:'bold'}}>X &nbsp; B A T T L E &emsp; C O U N T &nbsp; X</h1>      
			      <hr />   
			     <h3 style={{color:'white',fontWeight:'bold'}}>{this.state.count}</h3>
			     <Link to='/list'><button style={{width:200}}> WATCH &nbsp; BATTLES </button></Link>
			    </div>
			</div>
			</>
			);
	}
}