import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom'
import Signup from './screens/Signup'
import Login from './screens/Login'
import TeamsCondition from './screens/TeamsCondition'
import RegistrationProcess from './screens/RegistrationProcess';
import Deshbord from './screens/Deshboard';
import MyListing from './screens/MyListing';
import BookingHistry from './screens/BookingHistry';
import EarningScreen from './screens/EarningScreen';
const App = () => {
  return (
     <Routes>
      {/* <Route path='/' element={<RegistrationHeader/> }/> */}
      <Route path='/' element={<EarningScreen />}/>
      <Route path='/' element={<BookingHistry />}/>
      <Route path='/' element={<MyListing />}/>
      <Route path='/' element={<Deshbord />}/>
     <Route path='/' element={<RegistrationProcess/>}/>
      <Route path='/Login' element={<Login/>}/>
     <Route path='/Signup' element={<Signup />}/>
     <Route path='/TeamsCondition' element={<TeamsCondition />}/>
     {/* <Route path='/Deshbord' element={<Deshbord />}/> */}
    </Routes>
   
   

   
  )
}

export default App