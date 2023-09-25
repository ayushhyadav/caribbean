import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PropertyBooking.css'; // Import a separate CSS file for styling

const Order = [
  {
    item: 'Rafting'
  },
  {
    item: 'Exotic Food'
  },
  {
    item: 'Pick and Drop'
  }
];

const Order2 = [
  {
    item2: 'BBQ'
  },
  {
    item2: "BreakFast"
  }
];

export default class PropertyBooking extends Component {
  
  render() {
    return (
<div className="booking-container">
        <form className="booking-form">
          <div className="booking-content">
          <label className="night-label">From</label>
            <label className="price-label">$1,119</label>
            <label className="night-label">/night</label>
            <div className="input-group">
              <label htmlFor="checkIn">Check In</label>
              <input className="date-input" style={{borderRadius:10}} type="date" id="checkIn" />
              <label htmlFor="checkOut">Check Out</label>
              <input className="date-input" style={{borderRadius:10}} type="date" id="checkOut" />
            </div>
            <div className="service-options">
              <label>Choose Extra Service</label>
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

            </div>

          <div className="billing">
            <h5>Billing</h5>
            <div className="billing-row">
              <h6>5 Nights</h6>
              <h6>$5,595</h6>
            </div>
            <div className="billing-row">
              <h6>Rafting</h6>
              <h6>$200</h6>
            </div>
            <div className="billing-row">
              <h6>BreakFast</h6>
              <h6>$300</h6>
            </div>
            <div className="billing-row">
              <h6>Service Fee</h6>
              <h6>$400</h6>
            </div>
            <div style={{borderTop:'1px solid #E5E7EB', padding:5}} className="billing-row">
              <h6>Subtotal</h6>
              <h6 className="subtotal-amount">$6,695</h6>
            </div>
          </div>
          <div className="book-button">
            <Link style={{width:'100%'}} to="/Checkout">
              <button>Book</button>
            </Link>
          </div>
        </div>
        </form>
      </div>
    );
  }
}
