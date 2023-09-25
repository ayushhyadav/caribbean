import React from 'react'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom'
import Signup from './screens/Signup'
import Login from './screens/Login'
import TeamsCondition from './screens/TeamsCondition'
import RegistrationProcess from './screens/RegistrationProcess';
import Deshbord from './screens/Components/Deshbord/Deshboard';
import MyListing from './screens/MyListing';
import BookingHistry from './screens/BookingHistry';
import EarningScreen from './screens/EarningScreen';
import Home from './screens/HomeComonent/Home';
import PropertyPage from './screens/HomeComonent/property/PropertyPage';
import ClientProfile from './screens/Components/ClientProfile';
import Checkout from './screens/HomeComonent/Checkout';
import MyBooking from './screens/HomeComonent/PropertyOwnerProfile/MyBooking';
import EmailSupport from './screens/HomeComonent/EmailSupport';
import MainMessage from './screens/HomeComonent/MessageChat/MainMessage';
import AddProperty from './screens/Components/AddNewProperty/AddProperty';
import VarifyBooking from './screens/HomeComonent/PropertyOwnerProfile/VarifyBooking';


// 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
const App = () => {

  return (
     <Routes>
     
      {/* <Route path='/' element={<RegistrationHeader/> }/> */}
     <Route path='/earning' element={<EarningScreen />} style={{width: '100vw'}}/>
     <Route path='/booking' element={<BookingHistry />} style={{width: '100vw'}}/>
     <Route path='/mylisting' element={<MyListing />} style={{width: '100vw'}}/>
     <Route path='/Deshbord' element={<Deshbord />} style={{width: '100vw'}}/>
     <Route path='/Registration' element={<RegistrationProcess/>} style={{width: '100vw'}}/>
     <Route path='/Login' element={<Login/>} style={{width: '100vw'}}/>
     <Route path='/Signup' element={<Signup />} style={{width: '100vw'}}/>
     <Route path='/TeamsCondition' element={<TeamsCondition />} style={{width: '100vw'}}/>
     <Route path='/' element={<Home />} style={{width: '100vw'}}/>
     <Route path='/PropertyPage' element={<PropertyPage />} style={{width: '100vw'}}/>
     <Route path='/ClientProfile' element={<ClientProfile />} style={{width: '100vw'}}/>
     <Route path='/Checkout' element={<Checkout />} style={{width: '100vw'}}/>
     <Route path='/MyBooking' element={<MyBooking />} style={{width: '100vw'}}/>
     <Route path='/EmailSupport' element={<EmailSupport />} style={{width: '100vw'}}/>
     <Route path='/Message' element={<MainMessage />} style={{width: '100vw'}}/>
     <Route path='/AddProperty' element={<AddProperty/> } style={{width: '100vw'}}/>
     <Route path='/VarifyBooking' element={<VarifyBooking />} style={{width: '100vw'}}/>
     </Routes>
 
  )
}

export default App
