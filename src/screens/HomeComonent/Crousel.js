import React, { Component } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import HomePop from "./HomePop";
export default class Crousel extends Component{
    constructor(props){
        super(props)
        this.state={
            list:[
              {
                img: require('../../assets/Country.png'),
                title:'Antigua',
              },
              {
                img: require('../../assets/bahamas.png'),
                title:'bahamas',
              },
              {
                img: require('../../assets/barbados.png'),
                title:'barbados',
              },
              {
                img: require('../../assets/cuba.png'),
                title:'Cuba',
              },
              {
                img: require('../../assets/dominican republic.png'),
                title:'Dominican',
              },
              {
                img: require('../../assets/grenada.png'),
                title:'grenada',
              },
              {
                img: require('../../assets/haiti.png'),
                title:'Haiti',
              },
              {
                img: require('../../assets/Mask group.png'),
                title:'Saint Kitts ',
              },
              {
                img: require('../../assets/jamaica.png'),
                title:'Jamaica',
              },
              {
                img: require('../../assets/st lucia.png'),
                title:'Saint Lucia ',
              },
              {
                img: require('../../assets/st vincent and the grenadines.png'),
                title:'Saint Vincent ',
              },

              {
                img: require('../../assets/trinidad and tobago.png'),
                title:'Trinidad',
              },
              {
                img: require('../../assets/trinidad and tobago.png'),
                title:'Trinidad',
              },
              {
                img: require('../../assets/trinidad and tobago.png'),
                title:'Trinidad',
              },
              {
                img: require('../../assets/trinidad and tobago.png'),
                title:'Trinidad',
              },
              {
                img: require('../../assets/trinidad and tobago.png'),
                title:'Trinidad',
              },
              {
                img: require('../../assets/trinidad and tobago.png'),
                title:'Trinidad',
              },
              {
                img: require('../../assets/trinidad and tobago.png'),
                title:'Trinidad',
              },
              {
                img: require('../../assets/trinidad and tobago.png'),
                title:'Trinidad',
              },
              {
                img: require('../../assets/trinidad and tobago.png'),
                title:'Trinidad',
              },
              {
                img: require('../../assets/trinidad and tobago.png'),
                title:'Trinidad',
              },
              {
                img: require('../../assets/trinidad and tobago.png'),
                title:'Trinidad',
              },
              {
                img: require('../../assets/trinidad and tobago.png'),
                title:'Trinidad',
              },
              
            ]
        }
            
        }

        render(){
    
    
        return(
           <div style={{ height:'100wv',width:'100wv',}}>
            <div style={{display:'flex', width:'90%',justifyContent:'space-between',alignItems:'center',margin:'0 auto',marginTop:10,overflowX:'scroll',padding:'5 auto'}}>
            {this.state.list.map((list) => (
                    <div style={{flexDirection:'column',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                    <img style={{width: 35,  height: 35,}}
    
                      src={list.img} alt="logo"
                    />
                    <label style={{fontSize:15}}>{list.title}</label><br/>
            
                </div>
                    
                 
                ))}
                {/* <button style={{borderWidth:1,border:'solid'}} onClick={(value)=>{this.paginateNxtValue(this.state.currentPage + 1)}}>
                    <label>Click me</label>
                </button> */}
            </div>
            

<div style={{position:'relative',justifyContent:'center',display:'flex',minHeight:'90vh',width:'100%'}}>
   
<img style={{width:'100%'}} src={require('../../assets/Rectangle1.png')} alt=""/>
     

<div  style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', overflow: 'hidden' }}>
<h1 style={{color:'#FFFFFF',fontSize:50, }}>A Free Mind To your Journey<br/> 
             </h1>
                
 <div style={{backgroundColor: '#FFFFFF',width:'100%',height:90,display:'flex',borderRadius:10,justifyContent:'center',marginTop:20}}>         
<div style={{width:'97%',display:'flex',alignItems:'center' ,justifyContent:'space-between',marginTop:10}}>
    <div>
        <span>Select Caribbeaneaze Country</span>
        <div style={{display:'flex'}}>
            <img style={{width:23,height:23}} src={require('../../assets/Country.png')} alt=""/>
            
            <select style={{color:'black',width:140, fontSize:21,fontWeight:'500',border:'none',background:'none'}}>
              <option>Antigua</option>
              <option>Antigua</option>
            </select>
        </div>
    </div>
    <div>
        <span>Tropical Contries</span>
        <div style={{display:'flex'}}>
            <img style={{width:34,height:34}} src={require('../../assets/download (2).jpeg')} alt=""/>
            <select style={{color:'black',width:100, fontSize:21,fontWeight:'500',border:'none',background:'none'}}>
              <option>India</option>
              <option>India</option>
            </select>
        </div>
    </div>
    <div>
        <span>Select City</span>
        <h5>Anywhere</h5>
    </div>
    <div>
    <span>Select Property Type</span><br/>
    <select style={{color:'black',width:140, fontSize:21,fontWeight:'500',border:'none',background:'none'}}>
      <option style={{width:170,border:'none',background:'none'}}>
      Localeaze
      </option>
      <option style={{width:170,border:'none',background:'none',opacity:"0.1"}}>
        Middleaze
      </option>
      <option style={{width:170,border:'none',background:'none'}}>
        Higheaze
      </option>
    </select>
    </div>
    <div>
    <span>Person</span>
    <h5>Add Person</h5>
    </div>
    <div>
    <span>Check In</span>
    <h5>Add Dates</h5>
    </div>
    <div>
    <span>Check Out</span>
    <h5>Add Dates</h5>
    </div>
    <button style={{backgroundColor:'#F15A29',borderRadius:25,height:50,width:50,border:'none'}}>
        <img src={require('../../assets/search-normal.png')} style={{width:25,height:25,}} alt="logo"/>
    </button>
</div>

</div>

<div style={{marginTop:20,justifyContent:'end',display:'flex',}}>

<Popup
  shouldCloseOnOverlayClick={false}
  closeOnDocumentClick={false}
  trigger={
    <button
      style={{
        height: 48,
        marginTop:10,
        width: '10%',
        border: 'none',
        borderRadius: 12,
        color:'white',
        background:
          'linear-gradient(95.31deg, #56BBFF 1.59%, #55BBFF 1.6%, #061BEB 97.36%)',
      }}
      className="me-2 btn btn-outline-dark"
      type="submit"
    >
      Advance Filter
    </button>
  }
  modal
  contentStyle={{ height: '900px', overflow: 'auto' }}
>
  {close => (
    <div>
      <HomePop closeModule={() => close()} />
    </div>
  )}
</Popup>

</div>
</div>
</div>
         
        </div>
            
        )
                  }
    
                }