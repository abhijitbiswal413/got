import React , {Component} from 'react';
import backdrop1 from './fitBackdrop/stark.jpg'
import backdrop2 from './fitBackdrop/greyjoy.jpg'
import './search.css';
import {Link} from 'react-router-dom';
import {AiOutlineLeft} from 'react-icons/ai';

export default class SearchedBattle extends Component{
	state = {
		data:[]
	}

	async componentWillMount(){
		const response = await fetch(`http://localhost:4000/api/gotb/list?location=${this.props.location.state.name}`);
		const content = await response.json();
		await this.setState({data:(content)});
		console.dir(this.props.location.state.name,this.state.data,response)
	}
	render(){
		return(
			<>
			<div id="columnbackbtn"><Link to="/"><a href="#"> <AiOutlineLeft /> </a></Link></div>
			<h3 style={{position:'absolute',width:'100%',textAlign:'center',marginBottom:'-15rem',fontSize:50}}>{this.props.location.state.name}</h3>
			{this.state.data.map((el,idx)=>
				<li key={idx}>		
				<div id="searchcard">
						<h3>{el.name}</h3>
						<div id="columnbtn">
						<Link to={{
							pathname:`/list/${el._id}`,
							state:{id:el._id}
						}}><button>WATCH</button></Link>
						</div>
						<div id="attack" style={{backgroundImage:`url(${backdrop1})`}}></div>
						<div id="defend" style={{backgroundImage:`url(${backdrop2})`}}></div>
					</div>	  	
					</li>
					)}
			</>
			);
	}
}