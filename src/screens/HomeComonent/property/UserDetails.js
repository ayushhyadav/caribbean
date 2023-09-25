
import React, { Component } from 'react'
import ClientProfile from '../../Components/ClientProfile'
import Calander from '../../Components/Deshbord/Calander'
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
 
]
const user=[
  {
   Item2:'Hair Dryer'
  },
  {
   Item2:'Iron'
  },
  {
    Item2:'TV'
   },
  
]
const Extra=[
{
  item:'Rafting'
}
,
{
  item:'Exotic Food'
},
{
  item:'Pick and Drop'
},
{
  item:'BBQ'
},
{
  item:'Breakfast'
},

]
const Feature=[
   {
       item:'Pool'
   },
  
   {
       item:'Smoking allowed'
   },
   {
       item:'Indoor fireplace'
   },
  
 
]

export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: [1, 2, 3, 4, 5]
    };
  }
  render() {
    return (
      <div style={{width:'80%'}}>
      <div style={{display:'flex',justifyContent:"space-between",width:'93%'}}>
         <div style={{display:'flex',padding:10,margin:1}}>
         <h1>Latimer Grand Oaks</h1>
         <div style={{ display: 'flex', alignItems: 'center',padding:10,marginLeft:20 }}>
                {this.state.rating.map((val, index) =>
                  <img key={index} style={{ width: 16, height: 16 }} src={require('../../../assets/Vector(1).png')} alt='' />
                )}
<label style={{marginLeft:5}}>122 (5.0)</label>
              </div>
          
         
         </div>
         <div style={{marginTop:15}}>
          <img  src={require('../../../assets/Vector2.png')}/>
          <label style={{color:'#F15A29',marginLeft:5}}>Beach View</label>
         </div>
      </div>
      <div style={{textAlign:'center',width:'27%',marginTop:1, display:'flex',padding:10}}>
      <img style={{width:30,height:30,}} src={require('../../../assets/Country.png')}/>
          <label style={{marginLeft:10}}>Antigua,Unguja</label>
      </div>
      <div style={{textAlign:'center',marginTop:10, display:'flex',padding:10}}>
        <img src={require('../../../assets/location-point.png')}/>
        <label  style={{marginLeft:10}}>2118 Thornridge Cir. Syracuse, Connecticut 35624</label>
      </div>
      <div style={{textAlign:'center',marginTop:10, display:'flex',padding:10}}>
        <img style={{marginLeft:10}} src={require('../../../assets/bx-group.png')}/>
        <label style={{marginLeft:10}}>8 People</label>
    
   
        <img style={{marginLeft:25}}src={require('../../../assets/bed.png')}/>
        <label style={{marginLeft:10}}>4 bedroom</label>
     
     
        <img style={{marginLeft:25}}src={require('../../../assets/bathtub.png')}/>
        <label style={{marginLeft:10}}> 3 Bathroom </label>
     </div>
     <div style={{borderBottom:'1px solid #E5E7EB',display:'flex',flexDirection:'row',textAlign:'center',alignSelf:'center',justifyContent:'space-between',width:'90%',marginTop:20,margin:'0 auto',padding:10}}>
<div>
<img style={{width:38}} src={require('../../../assets/Ellipse 11 (1).png')}/>
      <label style={{marginLeft:10,color:'#000000',fontSize:18,fontWeight:'500'}}> John Doe</label>
</div>
<button
  style={{
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    backgroundImage: 'linear-gradient(95.31deg, #56BBFF 1.59%, #55BBFF 1.6%, #061BEB 97.36%)',
    border: '2px solid',
    borderImage: 'linear-gradient(95.31deg, #56BBFF 1.59%, #55BBFF 1.6%, #061BEB 97.36%) 1',
    width:120,height:45,
    borderRadius:5
  }}
>
  Message
</button>


     </div>
     <div style={{marginTop:20,width:'90%',margin:'0 auto'}}>
      <h2 style={{marginTop:20,}}>Description</h2>
      <p style={{marginTop:20,color:'#6B7280',fontSize:18}}>With its clean, angular architecture and indoor-outdoor feel, Latimer Grand Oaks is West Coast mid-century modernism<br/> at its best.<br/><br/>

Inside, the home's minimal bones have been boosted by modern touches, from the contemporary furnishings - like the curved sofa in the living room - to bold artwork and vibrant rugs and wallpapers, while strategically placed skylights create natural spotlights from above.<br/><br/>

The perfect home for families, there are four bedrooms and three bathrooms - one ensuite - and a lovely bright and airy corner office filled with indoor plants and comfy furnishings, like a leather Chesterfield sofa. Outside, you’ll find ample garden space, where you can while away balmy Californian days in the pool or the hot tub, surrounded by lush greenery.<br/><br/>

Located in Pacific Palisades, a quiet, laid-back neighbourhood tucked between Santa Monica Mountains and the Pacific Ocean, Latimer Grand Oaks is a short 15-minute drive from outdoor pursuits like the Temescal Canyon hiking trails and both Will Rogers and Santa Monica Beaches, while Malibu Pier is about half an hour away.</p>
     </div>
     <div style={{width:'90%',margin:'0 auto'}}>
      <label style={{fontSize:20,fontWeight:'550'}}>Extra Services</label>
      <div style={{display:'flex',width:'80%',marginTop:10}}>
{Extra.map((Extra) => (
       <ul style={{ listStyleType:'none',padding:0,margin:0, width:'23%',alignItems:'center',textAlign:'center',display:'flex',justifyContent:'center'}}>

<li style={{background:'#F3F4F6',width:'80%',height:40,borderRadius:5,textAlign:'center',color:'#6B7280',fontSize:13,display:'flex',alignItems:'center',justifyContent:'center'}}>
  {Extra.item}</li>



       </ul>
       ))}
</div>
      <label style={{marginTop:20,fontSize:20,fontWeight:'500'}}>Amenities</label>
<div style={{display:'flex',width:'100%',marginTop:10}}>
{Amenities.map((Amenities) => (
       <ul style={{ listStyleType:'none',padding:0,margin:0, width:'22%',alignItems:'center',textAlign:'center',display:'flex',justifyContent:'center'}}>

<li style={{background:'#F3F4F6',width:'90%',height:40,borderRadius:5,textAlign:'center',color:'#6B7280',fontSize:13,display:'flex',alignItems:'center',justifyContent:'center'}}>{Amenities.Item}</li>



       </ul>
       ))}
</div>
<div style={{display:'flex',marginTop:20,}}>
{user.map((user) => (
       <ul style={{ listStyleType:'none',width:"15%",}}>

<li style={{background:'#F3F4F6',width:'100%',height:35,borderRadius:5,color:'#6B7280',fontSize:14,textAlign:'center',display:'flex',justifyContent:'center',alignItems:'center'}}>{user.Item2}</li>

       </ul>
       ))}
</div>
        </div>
<div style={{marginTop:20,width:'90%',margin:'0 auto'}}>
    <label style={{fontSize:18,fontWeight:'500'}}>Feature</label>
    <div style={{display:'flex',marginTop:10,}}>
{Feature.map((Feature) => (
       <ul style={{ listStyleType:'none',width:"13%",}}>

<li style={{background:'#F3F4F6',width:'96%',height:40,borderRadius:5,color:'#6B7280',fontSize:14,textAlign:'center', display:'flex',alignItems:'center',justifyContent:'center'}}>{Feature.item}</li>
</ul>
          ))}
</div>
</div>
<div style={{width:'90%',margin:'0 auto'}}>
  <h3>Availablity Calender</h3>
<Calander/>
</div>
<div style={{width:'90%',display:'flex',justifyContent:'space-between',margin:'0 auto'}}>
  <label style={{marginTop:20}}>Review</label>
  <label style={{marginTop:20}}>Recent^</label>
</div>
      <div style={{width:'90%',margin:'0 auto',padding:20}}>
        <ClientProfile/>
        </div>
     </div>
 
    )
  }
}
