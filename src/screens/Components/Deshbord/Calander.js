import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
function Calander() {
  const [date, setDate] = useState(new Date());

  return (
    <div className='app' style={{border:'none'}}>
     
      <div className='calendar-container' >
        <Calendar  onChange={setDate} value={date} />
      </div>
    
    </div>
  );
}

export default Calander;