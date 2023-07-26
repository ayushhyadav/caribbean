import React, { Component } from 'react'
const Data=[
    {
        img:require('../../../assets/Ellipse 45.png'),
        title:'5xNight+ Raffting',
        desc:'Service by:Paul', 
        price:'$40',
    },
    {
        img:require('../../../assets/Ellipse45(1).png'),
        title:'5xNight+ Raffting+Dinner',
        desc:'Service by:Paul', 
        price:'$50',
    },
    {
        img:require('../../../assets/Ellipse 45 (2).png'),
        title:'5xNight+ Raffting',
        desc:'Service by:Paul', 
        price:'$200',
    },
    {
        img:require('../../../assets/Ellipse 45 (3).png'),
        title:'5xNight+ Raffting',
        desc:'Service by:Paul', 
        price:'$300',
    },
]

export default class Booking extends Component {
  render() {
    return (
      <div>
        <div style={{marginTop:25,}} >
          <label style={{fontSize:20,marginLeft:25,fontWeight:'600'}}>Booking</label>
        <div style={{width:'100%',marginTop:30}}>
            {Data.map((Data) => (
            <ul style={{listStyleType:'none',display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%',borderBottom:'1px solid #E2E8F0',padding:18}}>
              <div style={{display:'flex'}}>
                <img style={{width:58,height:58,borderRadius:22}}
                      src={Data.img} alt='not find' />
                <div style={{marginLeft:10}}>
                  <label style={{fontSize:18,fontWeight:'500',color:'#0F172A'}}>{Data.title}</label>
                  <div>
                    <label style={{fontSize:16,color:'#64748B'}}>{Data?.desc}</label>
                    <button style={{border:'none',background:'none',color:'#F15A29',fontSize:16,fontWeight:'550'}}>View Profile</button>
                  </div>
                  
                </div>
              </div>
              <label style={{fontSize:19,fontWeight:'600',color:'#22C55E'}}>{Data.price}</label>
              <label style={{fontSize:16,fontWeight:'500',color:'#F59E0B',background:'#FFFBEB',width:120,textAlign:'center',height:40,display:'flex',alignItems:"center",justifyContent:'center',borderRadius:10}}>in Progress</label>
              <div style={{flexDirection:'column',display:'flex'}}>
              <label style={{fontSize:14,fontWeight:'400',color:'#0F172A'}}>12 Apirl 2022  13:00 </label>
              <label style={{fontSize:14,fontWeight:'400',color:'#0F172A'}}>13 Apirl 2022  15:00 </label>
              </div>
              <button style={{fontSize:18,border:'none',background:'none',fontWeight:'700',color:'#14532D'}}>Edit</button>
            </ul>
            
            
          ))}
            </div>

        </div>
      </div>
    )
  }
}
