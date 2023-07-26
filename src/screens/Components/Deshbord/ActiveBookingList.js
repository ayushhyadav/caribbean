import React, { Component } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './List.css'
const Data = [
  {
    img: require('../../../assets/profile.png'),
    title: '5xNight+ Raffting',
    desc: 'Service by:Paul',
    price: '$40',
  },
  {
    img: require('../../../assets/profile.png'),
    title: '5xNight+ Raffting+Dinner',
    desc: 'Service by:Paul',
    price: '$50',
  },
  {
    img: require('../../../assets/profile.png'),
    title: '5xNight+ Raffting',
    desc: 'Service by:Paul',
    price: '$200',
  },
  {
    img: require('../../../assets/profile.png'),
    title: '5xNight+ Raffting',
    desc: 'Service by:Paul',
    price: '$300',
  },
]
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
export default class ActiveBookingList extends Component {
  render() {
    return (
      <div style={{ width: '80%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '95%', marginLeft: 30 }}>
          <label style={{ fontSize: 13, fontWeight: '600', color: '#64748B', width: '35%' }}>SERVICE</label>
          <label style={{ fontSize: 13, fontWeight: '600', color: '#64748B' }}>Date & Time</label>
          <label style={{ fontSize: 13, fontWeight: '600', color: '#64748B' }}>Total</label>
          <label style={{ fontSize: 13, fontWeight: '600', color: '#64748B' }}>Status</label>
          <label style={{ fontSize: 13, fontWeight: '600', color: '#64748B', width: 150, textAlign: 'center' }}>Action</label>
        </div>
        {Data.map((Data) => (
          <ul style={{ listStyleType: 'none', display: 'flex', marginTop: 10, justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <div style={{ display: 'flex', width: '35%' }}>
              <img style={{ width: 48, height: 48, borderRadius: 22 }}
                src={require('../../../assets/Rectangle 61.png')} alt='not find'
              />
              <div style={{ marginLeft: 10 }}>
                <label style={{ fontSize: 14, fontWeight: '600', color: '#0F172A' }}>{Data.title}</label>
                <div>
                  <label style={{ fontSize: 14, color: '#64748B' }}>{Data?.desc}</label>
                  <button style={{ borderWidth: 0, color: '#F15A29', fontSize: 14, fontWeight: '600' }}>View Profile</button>
                </div>

              </div>
            </div>
            <div style={{ flexDirection: 'column', display: 'flex' }}>
              <label style={{ fontSize: 12, fontWeight: '400', color: '#0F172A' }}>12 Apirl 2022  13:00 </label>
              <label style={{ fontSize: 12, fontWeight: '400', color: '#0F172A' }}>13 Apirl 2022  15:00 </label>
            </div>
            <label style={{ fontSize: 12, fontWeight: '400', color: '#0F172A' }}>$20/hr</label>
            <label style={{ fontSize: 12, fontWeight: '700', color: '#064E3B', background: '#D1FAE5', padding: 5, borderRadius: 5 }}>in Progress</label>
            <div style={{ width: 150, display: 'flex', justifyContent: 'space-between' }}>
              <button style={{ fontSize: 12, borderWidth: 0, fontWeight: '700', background: '#0F172A', height: 30, color: '#F8FAFC', width: 108, borderRadius: 5 }}>Mark Complete</button>

              <Popup shouldCloseOnOverlayClick={false} closeOnDocumentClick={false}
                trigger={<button style={{ border: '1px solid green' }}>
                  <img style={{ width: 24, height: 24 }}
                    src={require('../../../assets/threeDot.png')}
                  />
                </button>}
                position='bottom right'
              >
                <div style={{ display: 'flex', borderWidth: 1, border: 'solid', flexDirection: 'column', justifyContent: 'flex-start' }}>
                  <Popup style={{ width: '40%' }} shouldCloseOnOverlayClick={false} closeOnDocumentClick={false}
                    trigger=

                    {<button style={{ color: '#F87171', border: 'none', background: 'none', fontSize: 14, textAlign: 'start' }}> Cancel Booking</button>}
                    modal contentStyle={{ width: '25%', height: '55%', display: 'flex', borderRadius: 5, justifyContent: 'center' }} >
                    {
                      close => (
                        <div style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center', width: '90%'
                        }}>
                          <div className='content' style={{ justifyContent: 'center', display: 'flow' }}>

                            <div style={{ textAlign: 'center' }}>
                              <button style={{ borderRadius: 25, border: 'none', width: 50, height: 50, backgroundColor: '#FECACA' }} onClick=
                                {() => close()}>

                                <img style={{ width: 24, height: 24 }}
                                  src={require('../../../assets/Icon.png')} />
                              </button>
                              <h5 style={{ marginTop: 8 }}>Are you sure you want to cancel Job?</h5>
                              <p style={{ color: '#64748B', }}>Get exclusive updates and gifts right at your desktop without opening your mail again and again! You can disable them anytime.</p>

                            </div>
                            <div>
                              <label style={{ color: '#0F172A', fontSize: 20, fontWeight: '500' }}>Explain Reason</label>
                              <p style={{ border: '1px solid', borderColor: '#E2E8F0', borderRadius: 6, textAlign: 'start', fontSize: '1.1rem', color: '#0F172A', padding: 10 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam ultrices ultrices aliquet elementum. Enim aliquam.</p>
                            </div>
                            <button style={{ backgroundColor: '#EF4444', width: '100%', border: 'None', height: 40, borderRadius: 5 }} onClick=
                              {() => close()}>

                              Cancel Order
                            </button>
                            <button style={{ width: '100%', height: '60%', border: 'None', background: 'none', padding: 10 }} onClick=
                              {() => close()}>

                              Cancel
                            </button>
                          </div>


                        </div>
                      )
                    }
                  </Popup>
                  <Popup shouldCloseOnOverlayClick={true} closeOnDocumentClick={false}
                    contentStyle={{ width: "25%", height: '45%', alignItems: 'center', display: 'flex', justifyContent: 'center' }}
                    trigger=
                    {<button style={{ border: 'none', background: 'none', fontSize: 14, textAlign: 'start' }}> Upgrade Booking</button>}
                    modal  >
                    {
                      close => (
                        <div style={{
                          display: 'flex', width: '90%',
                          justifyContent: 'center', border: '2px solid red',
                          alignItems: 'center'
                        }}>
                          <div className='content' style={{ width: '90%', justifyContent: 'center', display: 'flow', alignItems: 'center' }}>

                            <div style={{ textAlign: 'center' }}>
                              <button style={{ borderRadius: 25, border: 'none', width: 50, height: 50, backgroundColor: '#FECACA' }} onClick=
                                {() => close()}>

                                <img style={{ width: 24, height: 24 }}
                                  src={require('../../../assets/Icon1.png')}
                                />
                              </button>
                              <h3>Do you want to Upgrade your Job</h3>
                              <p style={{ color: '#64748B' }}>Get exclusive updates and gifts right at your desktop without opening your mail again and again! You can disable them anytime.</p>

                            </div>




                            <Popup disabled={false} closeOnDocumentClick={false} data-backdrop="static" shouldCloseOnOverlayClick={false} data-keyboard="false"
                              trigger=

                              {<button style={{ backgroundColor: '#F15A29', width: '100%', border: 'None', height: 40, borderRadius: 5 }} onClick=
                                {() => close()}>Upgrade Order</button>}
                              modal contentStyle={{ width: '20%', height: '70%', display: 'flex', borderRadius: 5, justifyContent: 'center' }} >
                              {
                                close => (

                                  <div style={{ width: '100%', height: '100%' }} >
                                    <label>From $1,119 /night</label>
                                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>
                                      <div style={{ width: '90%', }}>
                                        <label style={{ fontWeight: '700', fontSize: 18 }}>Check In</label><br />
                                        <input style={{ width: '90%', height: 45, borderRadius: 10, Color: '#9CA3AF' }} type='date' /><br />
                                        <label style={{ fontWeight: '700', fontSize: 18 }}>Check Out</label><br />
                                        <input style={{ width: '90%', height: 45, borderRadius: 10, Color: '#9CA3AF' }} type='date' /><br />

                                        <label style={{ color: '#000000', fontSize: 18, fontWeight: '600' }}>Choose Extra Serivice</label>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                                          {Order.map((Order) => (
                                            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center', textAlign: 'center' }}>

                                              <li style={{ background: '#F15A29', width: '98%', height: 40, borderRadius: 15, textAlign: 'center', color: '#FFFFFF', fontSize: 15, alignItems: 'center' }}>
                                                {Order.item}
                                              </li>


                                            </ul>

                                          ))}
                                        </div>
                                        <div style={{ display: 'flex', marginTop: 15 }}>
                                          {Order2.map((Order2) => (
                                            <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', textAlign: 'center' }}>

                                              <li style={{ background: '#F15A29', width: '70%', height: 40, borderRadius: 15, textAlign: 'center', color: '#FFFFFF', fontSize: 17, alignItems: 'center' }}>
                                                {Order2.item2}
                                              </li>


                                            </ul>

                                          ))}
                                        </div>
                                        <div style={{ marginTop: 20 }}>
                                          <label>Billing</label>
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
                                            <h6>$6,695</h6>
                                          </div>

                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 15 }}>
                                          <button style={{ width: '95%', fontSize: 14, height: 40, borderRadius: 10, background: 'linear-gradient(95.31deg, #56BBFF 1.59%, #55BBFF 1.6%, #061BEB 97.36%)' }}> Book</button>
                                        </div>
                                      </div>
                                    </div>

                                  </div>
                                )
                              }
                            </Popup>



                            <button style={{ width: '100%', border: 'None', background: 'none', padding: 10 }} onClick=
                              {() => close()}>

                              Cancel
                            </button>
                          </div>


                        </div>
                      )
                    }
                  </Popup>


                </div>

              </Popup>


            </div>


          </ul>


        ))}
      </div>
    )
  }
}
