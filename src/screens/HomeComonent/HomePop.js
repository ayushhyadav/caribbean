import React, { Component } from 'react';

import Slider from '@material-ui/core/Slider';
 const Amenities=[
   {
    Item:'Wifi'
   },
   {
    Item:'Washer'
   },
   {
    Item:'Kitchen'
   },
   {
    Item:'dryer'
   },
   {
    Item:'Air Conditioning'
   },
   {
    Item:'Heating'
   },
   {
    Item:'Dedicated Workspace'
   },
   {
    Item:'TV'
   },
]
const user=[
   {
    Item2:'Hair Dryer'
   },
   {
    Item2:'Iron'
   },
 ]
 const Feature=[
    {
        item:'Pool'
    },
    {
        item:'Breakfast'
    },
    {
        item:'Smoking allowed'
    },
    {
        item:'Indoor fireplace'
    },
    {
        item:'Rafting'
    },
    {
        item:'Exotic Food'
    },
 ]

export default class HomePop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [2, 10],
    };
  }

  // Changing State when volume increases/decreases
  rangeSelector = (event, newValue) => {
    this.setState({ value: newValue });
    console.log(newValue);
  };

  render() {
    const { value } = this.state;

    return (
      <div style={{width:'95%',margin:'0 auto'}}>
        <div style={{ display: 'flex', justifyContent: 'space-between',width:'100%',alignItems:'center' ,margin:'0 auto',marginTop:40}}>
         <button style={{border:'none',background:'none'}} onClick={() =>this.props.closeModule()}><img src={require('../../assets/close-circle.png')} alt="Close" /></button>
          <button
            style={{
              height: 48,
              borderRadius: 15,
              border: 'none',
           
              background:
                'linear-gradient(95.31deg, #56BBFF 1.59%, #55BBFF 1.6%, #061BEB 97.36%)',
            }}
            className="me-2 btn btn-outline-dark"
            type="submit"
          >
            View 889 Result
          </button>
        </div>
        <div style={{ marginTop:30 }}>
          <label>Select Carrbean Country</label>
        </div>
        <div style={{marginTop:30}} >
          <label style={{marginTop:20}}>Select Antigua City</label> <br />
          <select style={{ width: '55%', height: 45, borderRadius: 10,background:'white' ,padding:10}}>
            <option>Select Country</option>
            <option>Select Country</option>
            <option>Select Country</option>
          </select>
        </div>
        <div
          style={{
        borderTop:'1px solid #E5E7EB',
            display: 'flex',
            borderBottom: '1px solid #E5E7EB',
            marginBottom: 15,
            marginTop: 30,
            padding: 10,
          }}
        >
          <div style={{ width: '33%' ,marginTop:20}}>
            <label>Check In</label>
            <br />
            <select
              style={{
                width: '93%',
                height: 45,
                borderRadius: 10,
                padding: 5,
                marginTop: 15,
                background:'white'
              }}
            >
              <option>Check In Date</option>
              <option>Check In Date</option>
              <option>Check In Date</option>
            </select>
          </div>
          <div style={{ width: '33%',marginTop:20 }}>
            <label>Check Out</label>
            <br />
            <select
              style={{
                width: '93%',
                height: 45,
                borderRadius: 10,
                padding: 5,
                marginTop: 15,
                background:'white'
              }}
            >
              <option>Check Out Date</option>
              <option>Check Out Date</option>
              <option>Check Out Date</option>
            </select>
          </div>
          <div style={{ width: '33%' ,marginTop:20}}>
            <label>Select Person</label>
            <br />
            <input
              style={{
                width: '93%',
                height: 45,
                borderRadius: 10,
                padding: 5,
                marginTop: 15,

              }}
              type="number"
              placeholder="0"
            />
          </div>
        </div>
        <div style={{marginTop:25}}>
          <label>Select Price Range</label>
          <div
            style={{
             
              display: 'block',
              width: '90%',
              color:'#F15A29',
              
            }}
          >
           
           
            <Slider
              value={value}
              onChange={this.rangeSelector}
              valueLabelDisplay="auto"
              style={{color:'#F15A29',width:'100%'}}
              
              scaleLength={50}
            />
             {value[0]} /- {value[1]} /-
          </div>


        </div>
        <div
          style={{
            display: 'flex',
            
            alignItems: 'center',
            borderBottom: '1px solid #E5E7EB',
            padding: 10,
            marginTop:20
            
          }}
        >
          <div style={{ width: '80%' }}>
            <label>Min Budget</label>
            <br />
            <input 
              style={{ height: 48, borderRadius: 12, padding: 10, marginTop: 15 ,width:'90%'}}
              type="number"
              placeholder="$85"
            />
          </div>
          <div style={{ width: '80%' }}>
            <label>Max Budget</label>
            <br />
            <input
              style={{ height: 48, borderRadius: 12, padding: 10, marginTop: 15,width:'90%' }}
              type="number"
              placeholder="$150"
            />
          </div>
        </div>

        <div style={{display:'flex',width:'100%',marginTop:20}}>

            <div style={{ width:'50%'}}>
                <label>Select Property Type</label><br/>
                <select style={{width:'90%',height:45, borderRadius: 10,background:'white',
                padding: 5,
                marginTop: 15,}}>
                    <option>
                    Localaize
                    </option>
                    <option>
                    Localaize
                    </option>
                    <option>
                    Localaize
                    </option>
                    <option>
                    Localaize
                    </option>
                </select>
            </div>
            <div style={{width:'50%'}}>
                <label>Select Property View</label><br/>
                <select style={{width:'90%',height:45, borderRadius: 10,background:'white',
                padding: 5,
                marginTop: 15,}}>
                    <option>
                    Beach View
                    </option>
                    <option>
                    Beach View
                    </option>
                    <option>
                    Localaize
                    </option>
                    <option>
                    Beach View
                    </option>
                </select>
            </div>

        </div>
        <div style={{marginTop:25,}}>
        <label>Amenities</label>
<div style={{display:'flex',width:'100%',marginTop:10}}>
{Amenities.map((Amenities) => (
       <ul style={{ listStyleType:'none',padding:0,margin:0, width:'100%',alignItems:'center',textAlign:'center',display:'flex',justifyContent:'center'}}>

<li style={{background:'#F3F4F6',width:'99%',height:30,borderRadius:5,textAlign:'center',color:'#6B7280',fontSize:13,display:'flex',alignItems:'center',justifyContent:'center'}}>{Amenities.Item}</li>



       </ul>
       ))}
</div>
<div style={{display:'flex',marginTop:10,}}>
{user.map((user) => (
       <ul style={{ listStyleType:'none',width:"12%",}}>

<li style={{background:'#F3F4F6',width:'100%',height:25,borderRadius:5,color:'#6B7280',fontSize:14,textAlign:'center'}}>{user.Item2}</li>

       </ul>
       ))}
</div>
        </div>
<div style={{marginTop:20}}>
    <label>Feature</label>
    <div style={{display:'flex',marginTop:10,}}>
{Feature.map((Feature) => (
       <ul style={{ listStyleType:'none',width:"50%",}}>

<li style={{background:'#F3F4F6',width:'100%',height:35,borderRadius:5,color:'#6B7280',fontSize:14,textAlign:'center'}}>{Feature.item}</li>



       </ul>
       ))}
</div>
</div>

      </div>
    );
  }
}
