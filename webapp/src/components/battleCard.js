import React ,{Component} from 'react';
import abackdrop from './fitBackdrop/got2.jpg';
import jon from './fitBackdrop/jon.jpg';
import jammieicon from './fitBackdrop/jammieicon.jpg';
import Stark from './fitBackdrop/starkicon.jpg'
import Greyjoy from './fitBackdrop/greyjoyicon.jpg'
import Lannister from './fitBackdrop/lannistericon.jpg';
import Baratheon from './fitBackdrop/baratheonicon.jpg';
import Stark_b from './cardBackground/robbb.jpg'
import Greyjoy_b from './cardBackground/euronb.jpg'
import Baratheon1_b from './cardBackground/jofferyb.jpg';
import Baratheon2_b from './cardBackground/stannisb.jpg';
import Baratheon3_b from './cardBackground/renleyb.jpg'
import defaultimg from './backdrop/houses.jpg';
import Stark_f from './cardBackground/robbf.jpg'
import Greyjoy_f from './cardBackground/euronf.jpg'
import Baratheon1_f from './cardBackground/joffreyf.jpg';
import Baratheon2_f from './cardBackground/stannisf.jpg';
import Baratheon3_f from './cardBackground/renleyf.jpg'

import './battleCard.css';

import {Link}  from 'react-router-dom';
import {
  GiBrutalHelm,
  GiOldKing,
  GiPoliceBadge,
  GiHighShot,
  GiFlame,
  GiNunFace,
  GiOverlordHelm,
  GiCrossedSabres,
  GiArrowWings,
  GiBleedingEye,
  GiBoneGnawer
} from 'react-icons/gi';
import {WiCloudyWindy} from 'react-icons/wi';
import {AiFillCrown,AiFillCalendar,AiOutlineLeft,AiFillDatabase} from 'react-icons/ai';
import {IconContext} from 'react-icons';

const apath = './attack1.jpeg'
var style = {
  width:0.0005,
  borderLeft:'10 solid green',
  color : 'grey',
  height:400,
  border:'solid'
};
  
export default class BattleCard extends Component{
    state ={
      data:'',
      season:'',
      house:'',
      abase:'',
      dbase:'',
      attacker_king_b:defaultimg,
      defender_king_b:defaultimg,
      attacker_king_f:defaultimg,
      defender_king_f:defaultimg,
      attackericon:defaultimg,
      defendericon:defaultimg
    }

      async componentDidMount() {
      const response = await fetch(`http://localhost:4000/api/gotb/list/${this.props.location.state.id}`);
      const content = await response.json();
      await this.setState({data:(content)});
      if(content.attacker_size==null)
        {content.attacker_size = 0;
        this.setState({data:content})}
        if(content.defender_size==null)
        {content.defender_size = 0;
        this.setState({data:content})}
        let bases ={'Stark':'Lord of Winterfell',
              'Lannister':'Lord of Casterly Rock',
              'Greyjoy':'Lord of Salt Throne,Pyke',
              'Bolton':'Lord of Dreadfort',
              'Frey':'Lord of Riverrun',
              'Tully':'Lord of Riverrun',
              'Baratheon':'Lord of Storm\'s End'
              }
              let houses_b ={
              'Robb Stark':Stark_b,
              'Joffrey/Tommen Baratheon':Baratheon1_b,
              'Balon/Euron Greyjoy':Greyjoy_b,
              'Stannis Baratheon':Baratheon2_b,
              'Renly Baratheon':Baratheon3_b
              };
              let houses_f ={
              'Robb Stark':Stark_f,
              'Joffrey/Tommen Baratheon':Baratheon1_f,
              'Balon/Euron Greyjoy':Greyjoy_f,
              'Stannis Baratheon':Baratheon2_f,
              'Renly Baratheon':Baratheon3_f
              };
              let houses ={
              'Stark':Stark,
              'Lannister':Lannister,
              'Greyjoy':Greyjoy,
              'Baratheon':Baratheon
              };
        this.setState({abase:bases[content.attacker_1],dbase:bases[content.defender_1]});
        this.setState({season : (content.summer==1)?'Summer':'Winter'})
        this.setState({house:content.attacker_1})
        if(content.attacker_king in houses_f)
          this.setState({attacker_king_b:houses_b[content.attacker_king]});
        if(content.defender_king in houses_f)
          this.setState({defender_king_b:houses_b[content.defender_king]});
        if(content.attacker_king in houses_b)
          this.setState({attacker_king_f:houses_f[content.attacker_king]});
        if(content.defender_king in houses_b)
          this.setState({defender_king_f:houses_f[content.defender_king]});
        if(content.attacker_1 in houses)
          this.setState({attackericon:houses[content.attacker_1]});
        if(content.defender_1 in houses)
          this.setState({defendericon:houses[content.defender_1]});

      console.dir(content,this.state.data)
};
    render(){
    return(
    <>
    <div id="abovecard">
      <Link to="/list/"><a href="#"> <AiOutlineLeft /> </a></Link>
      <h5>T O N I G H T ' S</h5>
  </div>
<div id="cards">  
    <h3 >{this.state.data.name}</h3>
    <div className="profileattack" style={{backgroundImage:`url(${this.state.attacker_king_b})`}}>
      <img src={this.state.attacker_king_f} style={{width:300,height:200,marginTop:75}} alt="Attacking Commander" /> 
      <h4 id="name" style={{color:'white'}}>{this.state.data.attacker_1}</h4>      
      <hr />   
      <h5 id="belowtext" style={{color:'white'}}>{this.state.abase}</h5>    
    </div>
    <div className="profiledefend" style={{backgroundImage:`url(${this.state.defender_king_b})`}}>
      <img src={this.state.defender_king_f} style={{width:200,height:200,marginTop:75}} alt="Defending Commander" />     
      <h4 id="name" style={{color:'white'}}>{this.state.data.defender_1}</h4>     
      <hr />   
      <h5 id="belowtext" style={{color:'white'}}>{this.state.dbase}</h5>
    </div>    
</div>
<div id="infocard">
  <div id="attackinfo">
    <img src={this.state.attackericon} style={{width:70}}/> 
    <div id="infoitem">
      <IconContext.Provider value={{size:'2.5em',verticalAlign:'middle'}}><GiPoliceBadge /></IconContext.Provider>
      <h5>{this.state.data.attacker_size}</h5>
    </div>
    <div id="infoitem">
      <IconContext.Provider value={{size:'2.5em',verticalAlign:'middle'}}><WiCloudyWindy /></IconContext.Provider>
      <h5>{this.state.season}</h5>
    </div>
    <div id="infoitem">
      <IconContext.Provider value={{size:'2.5em',verticalAlign:'middle'}}><GiBoneGnawer /></IconContext.Provider>
      <h5>{this.state.data.major_death}</h5>
    </div>
  </div>
  <div id="defendinfo">
    <div id="infoitem">
      <IconContext.Provider value={{size:'2.5em',verticalAlign:'middle'}}><GiBleedingEye /></IconContext.Provider>
      <h5>{this.state.data.major_capture}</h5>
    </div>
    <div id="infoitem">
      <IconContext.Provider value={{size:'2.5em',verticalAlign:'middle'}}><AiFillCalendar /></IconContext.Provider>
      <h5>{this.state.data.year}</h5>
    </div>
    <div id="infoitem">
      <IconContext.Provider value={{size:'2.5em',verticalAlign:'middle'}}><GiPoliceBadge /></IconContext.Provider>
      <h5>{this.state.data.defender_size}</h5>    
    </div>
  <img src={this.state.defendericon} style={{width:70}}/> 
  </div>
</div>

<div id="btn">
<Link to={{pathname:`/list/${this.props.location.state.id}/summary`,
          state:{data:this.state.data}}}><button style={{width:200}}> START &nbsp; FIGHT </button></Link>
</div>
  </> 
    );
  }
}