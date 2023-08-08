import React, { Component } from 'react'
import Calander from './Calander';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css'; 
const Data=[
    {
        title:'Balance',
        value1:'$310'
    },
    {
        title:'Active Jobs',
        job:"4jobs",
        value:'($200)'
    },
    {
        title:'Earned this Month',
        job:'$400'
    },
    {
        title:'Expected Earning',
        job:'$280'
    }

]

export default class JobsDetailes extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: new Date()
        };
        this.onChange = this.onChange.bind(this);
      }
    
      onChange(value) {
        this.setState({ value });
      }
    
  render() {
    return (
      <div style={{marginTop:20}}>
     
        <div style={{}}>
        <label style={{fontSize:21,fontWeight:'600',marginLeft:25}}>Stats</label>
            {Data.map((Data)=>(
                <ul style={{listStyleType:'none',display:'flex',justifyContent:'space-between',marginTop:20}}>
                <div>
                <li style={{fontSize:23,fontWeight:'450',color:'#0F172A',marginTop:10}}>
                    {Data.title}
                </li>
                <div style={{display:'flex',marginTop:15}}>
                  <label style={{fontSize:18,}}>{Data.job}</label>
                  <li style={{fontSize:28,fontWeight:'600',color:'#047857'}}>{Data.value1}</li>
                <li style={{fontSize:18,color:'#047857'}}>{Data.value}</li>
                </div>
                </div>
                </ul>
            ))}
           
        </div>
        
        <div className="my-calendar" style={{width:'99%',padding:30}}>
          <div style={{display:'flex',justifyContent:'space-between'}}>
          <label style={{fontSize:20,fontWeight:'500'}}>My Availablity Calender</label>
          <button style={{background: "#DDF96F",fontSize:15,width:65,border:'none',borderRadius:7,fontWeight:'700',color:'#0F172A'}}>Edit</button>

          </div>
     <div style={{marginTop:10}}>
     <Calander/>
     </div>
    </div>
        
  
   
      </div>
    )
  }
}
