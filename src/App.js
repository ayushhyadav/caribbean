import React from 'react'
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
// 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
const App = () => {

  return (
     <Routes>
      
      {/* <Route path='/' element={<RegistrationHeader/> }/> */}
     <Route path='/earning' element={<EarningScreen />}/>
     <Route path='/booking' element={<BookingHistry />}/>
     <Route path='/mylisting' element={<MyListing />}/>
     <Route path='/Deshbord' element={<Deshbord />}/>
     <Route path='/Registration' element={<RegistrationProcess/>}/>
     <Route path='/Login' element={<Login/>}/>
     <Route path='/Signup' element={<Signup />}/>
     <Route path='/TeamsCondition' element={<TeamsCondition />}/>
     <Route path='/' element={<Home/>}/>
     <Route path='/PropertyPage' element={<PropertyPage/>}/>
     <Route path='/ClientProfile' element={<ClientProfile />}/>
     <Route path='/Checkout' element={<Checkout />}/>
     <Route path='/MyBooking' element={<MyBooking />}/>
     <Route path='/EmailSupport' element={<EmailSupport />}/>
     <Route path='/Message' element={<MainMessage />}/>
     </Routes>
 
  )
}

export default App