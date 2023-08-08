import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import './App.css';

function Calander() {
  const [date, setDate] = useState(new Date());

  return (
    <div className='app' style={{border:'none'}}>
      {/* <h1 className='text-center'>React Calendar</h1> */}
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
    
    </div>
  );
}

export default Calander;