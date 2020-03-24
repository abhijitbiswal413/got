import React ,{Component} from 'react';
import logo from './logo192.png';
import img from './img192.png';
import backdrop from './fitBackdrop/got4.jpg';
import './summary.css';
import {
	GiBrutalHelm,
	GiOldKing,
	GiPoliceBadge,
	GiHighShot,
	GiFlame,
	GiNunFace,
	GiOverlordHelm,
	GiCrossedSabres,
	GiArrowWings
} from 'react-icons/gi';
import {AiFillCrown,AiFillCalendar,AiOutlineLeft,AiFillDatabase} from 'react-icons/ai';
import {WiCloudyWindy} from 'react-icons/wi';

import {Link} from 'react-router-dom';

export default class Summary extends Component{
	this = {
		data:'',
		result:'',
		resultcolor:'',
		attacker1:'',attacker2:'',attacker3:'',attacker4:'',
		Location:'',region:'',
		attackarmysize:'',defendarmysize:'',
		attacker_king:'',defender_king:'',
		attacker_commander:'',defender_commander:'',
		season:'',year:'',
		type:'',battleno:'',

	}
	async componentWillMount(){
	await this.setState({data:this.props.location.state.data})	
	await this.setState({result:(this.state.data.attacker_outcome=='win')?'V I C T O R Y':'D E F E A T'});
	await this.setState({resultcolor:(this.state.data.attacker_outcome=='win')?'green':'red'})
	await this.setState({attacker1:this.state.data.attacker_1,attacker2:this.state.data.attacker_2,attacker3:this.state.data.attacker_3,attacker4:this.state.data.attacker_4})
	await this.setState({Location:this.state.data.location,region:this.state.data.region})
	await this.setState({attackarmysize:this.state.data.attacker_size,defendarmysize:this.state.data.defender_size});
	await this.setState({attacker_king:this.state.data.attacker_king,defender_king:this.state.data.defender_king});
	await this.setState({attacker_commander:this.state.data.attacker_commander,defender_commander:this.state.data.defender_commander});
	await this.setState({season:(this.state.data.summer==1)?'SUMMER':'WINTER',year:this.state.data.year});
	await this.setState({type:this.state.data.battle_type,battleno:this.state.data.battle_number});
	console.dir(this.state)
}
	render(){
		let color ={background:this.state.resultcolor,
					backgroundImage:`url(${backdrop})`};
		return(
			<>
	    	<div id="abovecard">
		      <div id="summarybackbtn"><Link to={{pathname:`/list/${this.props.location.state.data._id}`,state:{id:this.props.location.state.data._id} }}><a href="#"> <AiOutlineLeft /> </a></Link></div>
		 	</div>			
			<div id="summarycard" style={{backgroundImage:`url(${backdrop})`}}>  
				<h3  id="summarytoptext">S U M M A R Y</h3>  
			    <div className="summaryprofileattack" style={{width:'100%'}}>
			      <h2 id="victorytext" style={{color:'white'}}>{this.state.result}</h2>      
			      <h5 style={{color:'white',marginBottom:-10,marginTop:5 ,fontSize:20}}>FOR</h5>    
			      <hr />   
{/*			      <h5 id="victorbelowtext" style={{color:'white'}}>|&nbsp;{this.state.attacker1}&nbsp;|&nbsp;{this.state.attacker2}&nbsp;|&nbsp;{this.state.attacker3}&nbsp;|&nbsp;{this.state.attacker4}&nbsp;| </h5>    	*/}
				  <h5 id="victorbelowtext" style={{color:'white'}}>|&nbsp;{this.state.attacker1}&nbsp;|</h5>
			      <h5 style={{color:'white',marginBottom:-10,marginTop:5 ,fontSize:20}}>AT</h5>  
			      <hr />   
			      <h5 id="victorbelowtext" style={{color:'white'}}>{this.state.Location} , {this.state.region}</h5>    
			      <hr />
			      <div id="cardrow">
			      	<h4>{this.state.attackarmysize}</h4>
			      	<div id="logo"><h5><GiPoliceBadge />&nbsp; ARMY SIZE &nbsp;<GiPoliceBadge /> </h5></div>
			      	<h4>{this.state.defendarmysize}</h4>
			      </div>
			      <div id="cardrow">
			      	<h4>{this.state.attacker_king}</h4>
			      	<div id="logo"><h5><AiFillCrown />&nbsp; KING &nbsp;<AiFillCrown /> </h5></div>
			      	<h4>{this.state.defender_king}</h4>
			      </div>
			      <div id="cardrow">
			      	<h4>{this.state.attacker_commander}</h4>
			      	<div id="logo"><h5><GiBrutalHelm />&nbsp; COMMANDER &nbsp;<GiBrutalHelm /> </h5></div>
			      	<h4>{this.state.defender_commander}</h4>
			      </div>
			      <div id="cardrow">
			      	<h4>{this.state.season}</h4>
			      	<div id="multi">
			      		<h6>&nbsp;</h6>
				      	<h5><WiCloudyWindy /> &nbsp; SEASON &nbsp;</h5>
				      	<h5> &nbsp; YEAR &nbsp; <AiFillCalendar /></h5>
				      	<h6>&nbsp;</h6>
			      	</div>
			      	<h4>{this.state.year}</h4>
			      </div>
			      <h4 style={{marginBottom:'-5px',marginBottom:'-15px'}}><GiCrossedSabres /> &nbsp; BATTLE &nbsp; <GiCrossedSabres /></h4>
			      <div id="cardrow">
			      	<h4>{this.state.type}</h4>
			      	<div id="multi">
			      		<h6></h6>
				      	<h5><GiHighShot /> &nbsp; TYPE </h5>
				      	<h5>&nbsp; NO. &nbsp; <AiFillDatabase /></h5>
				      	<h6></h6>
			      	</div>
			      	<h4>{this.state.battleno}</h4>
			      </div>
			    </div>  
			</div>
			</>
			);
	}
}