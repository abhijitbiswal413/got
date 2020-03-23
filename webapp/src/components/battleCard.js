import React ,{Component} from 'react';
import logo from './logo192.png';
import img from './img192.png';
import abackdrop from './fitBackdrop/got2.jpg';
import jon from './fitBackdrop/jon.jpg';
import jonicon from './fitBackdrop/jonicon.jpg';
import jammie from './fitBackdrop/jammie.jpg';
import jammieicon from './fitBackdrop/jammieicon.jpg';
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
    state ={
      data:'',
      season:'',
      house:'',
      abase:'',
      dbase:''
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
        this.setState({abase:bases[content.attacker_1],dbase:bases[content.defender_1]});
        this.setState({season : (content.summer==1)?'Summer':'Winter'})
                this.setState({house:content.attacker_1})
      console.dir(content,this.state.data)
      console.dir(this.state.data.name)
};
    render(){
    return(
    <>
    <div id="abovecard">
      <div id="backbtn"><Link to="/list/"><a href="#"> &#60; </a></Link></div>
      <div id="text"><h5>T O N I G H T ' S</h5></div>
  </div>
<div id="cards">  
<h3  id="toptext">{this.state.data.name}</h3>  
    <div className="profileattack" style={{backgroundImage:`url(${jon})`}}>
      <img src={jonicon} style={{width:300,height:200,marginTop:75}} alt="Attacking Commander" /> 
      <h4 id="name" style={{color:'white'}}>{this.state.data.attacker_1}</h4>      
      <hr />   
      <h5 id="belowtext" style={{color:'white'}}>{this.state.abase}</h5>    
    </div>
    {/*<hr style={style} />  */}
    <div className="profiledefend" style={{backgroundImage:`url(${jammie})`}}>
      <img src={jammieicon} style={{width:200,height:200,marginTop:75}} alt="Defending Commander" />     
      <h4 id="name" style={{color:'white'}}>{this.state.data.defender_1}</h4>     
      <hr />   
      <h5 id="belowtext" style={{color:'white'}}>{this.state.dbase}</h5>
    </div>    
</div>
<div id="infocard">
  <div id="attackinfo">
    <img src={logo} style={{width:70}}/> 
    <div id="infoitem">
      <img src={logo} style={{width:20}}/> 
      <h5>{this.state.data.attacker_size}</h5>
    </div>
    <div id="infoitem">
      <img src={logo} style={{width:20}}/> 
      <h5>{this.state.season}</h5>
    </div>
    <div id="infoitem">
      <img src={logo} style={{width:20}}/> 
      <h5>{this.state.data.major_death}</h5>
    </div>
  </div>
  <div id="defendinfo">
    <div id="infoitem">
      <img src={logo} style={{width:20}}/> 
      <h5>{this.state.data.major_capture}</h5>
    </div>
    <div id="infoitem">
      <img src={logo} style={{width:20}}/> 
      <h5>{this.state.data.year}</h5>
    </div>
    <div id="infoitem">
      <img src={logo} style={{width:20}}/> 
      <h5>{this.state.data.defender_size}</h5>    
    </div>
  <img src={logo} style={{width:70}}/> 
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