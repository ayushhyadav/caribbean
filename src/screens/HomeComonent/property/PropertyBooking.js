import React, { Component } from 'react'
import { Link } from 'react-router-dom'
const Order = [
  {
    item: 'Rafting'
  },
  {
    item: 'Exotic Food'
  },
  {
    item: 'Pick and Drop'
  },

]

const Order2 = [
  {
    item2: 'BBQ'
  },
  {
    item2: "BreakFast"
  }
]

export default class PropertyBooking extends Component {
  render() {
    return (
      <div style={{ width:'25%',border:'1.5px groove #E5E7EB',height:'84vh',borderRadius:8}}>
        <div style={{ width: '90%', height: '100%' ,marginTop:25,margin:'0 auto'}} >
                                    <label style={{marginTop:20}}>From </label>
                                    <label style={{color:'#F15A29',fontSize:29,fontWeight:'600',marginTop:20}}>$1,119 </label>
                                    <label style={{marginTop:20}}>/night</label>
                                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>
                                      <div style={{ width: '90%', }}>
                                        <label style={{ fontWeight: '500', fontSize: 18 }}>Check In</label><br />
                                        <input style={{padding:10, width: '100%',borderBlockColor:'#D1D5DB',marginTop:8, height: 45, borderRadius: 10, Color: '#9CA3AF' }} type='date' /><br />
                                        <label style={{ fontWeight: '500',  fontSize: 18,marginTop:8 }}>Check Out</label><br />
                                        <input style={{padding:10, width: '100%',marginTop:8,borderBlockColor:'#D1D5DB', height: 45, borderRadius: 10, Color: '#9CA3AF' }} type='date' /><br />

                                        <label style={{ color: '#000000', fontSize: 18, fontWeight: '500',marginTop:10 }}>Choose Extra Serivice</label>
                                        <div style={{ display: 'flex',marginTop: 10,width:'100%',justifyContent:'flex-start',}}>
                                          {Order.map((Order) => (
                                            <ul style={{ listStyleType: 'none',padding: 0, margin: 0, display: 'flex', flexDirection: 'row',justifyContent:'space-between',width:'100%' }}>

                                              <li style={{ background: '#F15A29',width:98, height: 45, borderRadius: 15,  color: '#FFFFFF', fontSize: 15, alignItems: 'center' ,display:'flex',justifyContent:'center'}}>
                                                {Order.item}
                                              </li>


                                            </ul>

                                          ))}
                                        </div>
                                        <div style={{ display: 'flex', marginTop: 15 }}>
                                          {Order2.map((Order2) => (
                                            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center',  }}>

                                              <li style={{ background: '#F15A29', width: '70%', height: 45, borderRadius: 15, textAlign: 'center', color: '#FFFFFF', fontSize: 17, alignItems: 'center',display:'flex' ,justifyContent:'center'}}>
                                                {Order2.item2}
                                              </li>


                                            </ul>

                                          ))}
                                        </div>
                                        <div style={{ marginTop: 20 }}>
                                          <label style={{fontWeight:'500'}}>Billing</label>
                                          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
                                            <h6>5Night</h6>
                                            <h6>$5,595</h6>
                                          </div >
                                          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                                            <h6>Rafting</h6>
                                            <h6>$200</h6>
                                          </div>
                                          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                                            <h6>BreakFast</h6>
                                            <h6>$300</h6>
                                          </div>
                                          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                                            <h6>Service Fee</h6>
                                            <h6>$400</h6>
                                          </div>
                                          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
                                            <h6>Subtotal</h6>
                                            <h6 style={{fontSize:25,fontWeight:'600'}}>$6,695</h6>
                                          </div>

                                          
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 15,width:'100%' }}>
                                        <Link style={{ width:"100%"}} to="/Checkout">  <button style={{ width:"100%", fontSize: 14, height: 45, color:'white',fontSize:18,borderRadius: 10, background: 'linear-gradient(95.31deg, #56BBFF 1.59%, #55BBFF 1.6%, #061BEB 97.36%)' }}> Book</button></Link>
                                        </div>
                                      </div>
                                    </div>

                                  </div>
      </div>
    )
  }
}
