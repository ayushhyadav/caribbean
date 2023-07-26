import React, { Component } from 'react'
const Data=[
    {
        img:require('../../../assets/profile.png'),
        title:'5xNight+ Raffting',
        desc:'Service by:Paul', 
        price:'$40',
    },
    {
        img:require('../../../assets/profile.png'),
        title:'5xNight+ Raffting+Dinner',
        desc:'Service by:Paul', 
        price:'$50',
    },
    {
        img:require('../../../assets/profile.png'),
        title:'5xNight+ Raffting',
        desc:'Service by:Paul', 
        price:'$200',
    },
    {
        img:require('../../../assets/profile.png'),
        title:'5xNight+ Raffting',
        desc:'Service by:Paul', 
        price:'$300',
    },
]

export default class Booking extends Component {
  render() {
    return (
      <div>
        <div>
        <div style={{width:'100%'}}>
            {Data.map((Data) => (
            <ul style={{listStyleType:'none',display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%'}}>
              <div style={{display:'flex'}}>
                <img style={{width:48,height:48,borderRadius:22}}
                      src={require('../../../assets/Rectangle 61.png')} alt='not find'
                    />
                <div style={{marginLeft:10}}>
                  <label style={{fontSize:14,fontWeight:'600',color:'#0F172A'}}>{Data.title}</label>
                  <div>
                    <label style={{fontSize:14,color:'#64748B'}}>{Data?.desc}</label>
                    <button style={{borderWidth:0,color:'#F15A29',fontSize:14,fontWeight:'600'}}>View Profile</button>
                  </div>
                  
                </div>
              </div>
              <label style={{fontSize:16,fontWeight:'700',color:'#22C55E'}}>$40</label>
              <label style={{fontSize:16,fontWeight:'700',color:'#F59E0B'}}>in Progress</label>
              <div style={{flexDirection:'column',display:'flex'}}>
              <label style={{fontSize:12,fontWeight:'400',color:'#0F172A'}}>12 Apirl 2022  13:00 </label>
              <label style={{fontSize:12,fontWeight:'400',color:'#0F172A'}}>13 Apirl 2022  15:00 </label>
              </div>
              <button style={{fontSize:16,borderWidth:0,fontWeight:'700',color:'#14532D'}}>Edit</button>
            </ul>
            
            
          ))}
            </div>

        </div>
      </div>
    )
  }
}
