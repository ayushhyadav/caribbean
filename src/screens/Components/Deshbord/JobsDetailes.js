import React, { Component } from 'react'
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css'; 
const Data=[
    {
        title:'Balance',
        value:'$310'
    },
    {
        title:'Active Jobs',
        value:'4 Jobs ($200)'
    },
    {
        title:'Earned this Month',
        value:'$400'
    },
    {
        title:'Expected Earning',
        value:'$280'
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
      <div>
        <label style={{fontSize:20,fontWeight:'bold'}}>Stats</label>
        <div>
            {Data.map((Data)=>(
                <ul style={{listStyleType:'none',display:'flex',justifyContent:'space-between'}}>
                <div>
                <li style={{fontSize:20,fontWeight:'bold',color:'#0F172A'}}>
                    {Data.title}
                </li>
                
                <li style={{fontSize:18,color:'#0F172A'}}>{Data.value}</li>
                </div>
                </ul>
            ))}
           
        </div>
        <div className="my-calendar" style={{width:'70%'}}>
        {/* <Calendar  
        className="custom-calendar" onChange={this.onChange} value={this.state.value} /> */}
    </div>
        
  
   
      </div>
    )
  }
}
