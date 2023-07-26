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

export default class ActiveBookingList extends Component {
  render() {
    return (
        <div style={{width:'80%'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'95%',marginLeft:30}}>
            <label style={{fontSize:13,fontWeight:'600',color:'#64748B',width:'35%'}}>SERVICE</label>
            <label style={{fontSize:13,fontWeight:'600',color:'#64748B'}}>Date & Time</label>
            <label style={{fontSize:13,fontWeight:'600',color:'#64748B'}}>Total</label>
            <label style={{fontSize:13,fontWeight:'600',color:'#64748B'}}>Status</label>
            <label style={{fontSize:13,fontWeight:'600',color:'#64748B',width:150,textAlign:'center'}}>Action</label>
          </div>
            {Data.map((Data) => (
            <ul style={{listStyleType:'none',display:'flex',marginTop:10,justifyContent:'space-between',alignItems:'center',width:'100%'}}>
              <div style={{display:'flex',width:'35%'}}>
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
              <div style={{flexDirection:'column',display:'flex'}}>
              <label style={{fontSize:12,fontWeight:'400',color:'#0F172A'}}>12 Apirl 2022  13:00 </label>
              <label style={{fontSize:12,fontWeight:'400',color:'#0F172A'}}>13 Apirl 2022  15:00 </label>
              </div>
              <label style={{fontSize:12,fontWeight:'400',color:'#0F172A'}}>$20/hr</label>
              <label style={{fontSize:12,fontWeight:'700',color:'#064E3B',background:'#D1FAE5',padding:5,borderRadius:5}}>in Progress</label>
              <div style={{width:150,display:'flex',justifyContent:'space-between'}}>
              <button style={{fontSize:12,borderWidth:0,fontWeight:'700',background:'#0F172A',height:30,color:'#F8FAFC',width:108,borderRadius:5}}>Mark Complete</button>
              <button style={{border:0}}>
                <img style={{width:24,height:24}}
                  src={require('../../../assets/threeDot.png')}
                />
              </button>
              </div>
              
             
            </ul>
            
            
          ))}
            </div>
    )
  }
}
