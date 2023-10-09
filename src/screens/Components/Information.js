import React, { Component } from 'react';
import BaseUrl from '../Server/BaseUrl';
import './Deshbord/ClientProfile/Information.css'; // Import a CSS file for styling

export default class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      dob: '',
      password: '',
      confirm_password: '',
      errorMessage: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleNextClick = () => {
    const { first_name, last_name, email, dob, password, confirm_password } = this.state;
  
    // Check if any required fields are empty
    if (!first_name || !last_name || !email || !dob || !password || !confirm_password) {
      this.setState({ errorMessage: 'All fields are required.' });
      return;
    }
  
    // Check if password and confirm password match
    if (password !== confirm_password) {
      this.setState({ errorMessage: 'Password and confirm password do not match.' });
      return;
    }
  
    // Construct your user data payload
    const userData = {
      first_name,
      last_name,
      email,
      dob,
      password,
      confirm_password,
    };
  
    fetch(BaseUrl.BaseUrl + '/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Response data:', data); // Add this line for debugging
        if (data.error) {
          this.setState({ errorMessage: data.error.message });
          alert('not run', data.error.message);
        } else {
          // Handle successful registration response here
          console.log('Registration successful:', data);
      
          // // Assuming the user ID is returned in the response data
          // const user_id = data.user_id;
      
          // // Save the user ID in localStorage
          // localStorage.setItem('userId', user_id);
      
          // // Print the user ID to the console
          // console.log('User ID:', user_id);
          const user_id = data.user_id;

          // Save the user ID in localStorage
          localStorage.setItem('userId', user_id);

          // Print the user ID to the console
          console.log('User ID:', user_id);
          
      
          // Navigate to the next step or page
          this.props.NextCallBack({ navigationTo: 'Upload_Profile', id: 2, type: 'Next' });
        }
      })
      
      .catch((error) => {
        alert('not run', error);
        console.error('API request error:', error);
      });
  };


  render() {
    return (
      <div className="information-container">
        <label className="step-label">Step 1/8</label>
        <h4 className="section-title">Personal Information</h4>
        <h5 className="section-description">Lorem ipsum dolor sit amet consetetur</h5>
        <div className="input-container">
          <div className="input-field">
            <label className="input-label">First Name</label>
            <input
              className="input"
              type="text"
              placeholder="First Name"
              name="first_name"
              value={this.state.first_name}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="input-field">
            <label className="input-label">Last Name</label>
            <input
              className="input"
              type="text"
              placeholder="Last Name"
              name="last_name"
              value={this.state.last_name}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
        <div className="input-container">
          <div className="input-field">
            <label className="input-label">Email</label>
            <input
              className="input"
              type="email"
              placeholder="Enter Email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="input-field">
            <label className="input-label">Date of Birth</label>
            <input
              className="input"
              type="date"
              placeholder="DD/MM/YYYY"
              name="dob"
              value={this.state.dob}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
        <div className="input-container">
          <div className="input-field">
            <label className="input-label">Password</label>
            <input
              className="input"
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="input-field">
            <label className="input-label">Confirm Password</label>
            <input
              className="input"
              type="password"
              placeholder="Confirm Password"
              name="confirm_password"
              value={this.state.confirm_password}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
        <div className="button-container" onClick={this.handleNextClick}>
          <button className="next-button">Next</button>
        </div>
      </div>
    );
  }
}
