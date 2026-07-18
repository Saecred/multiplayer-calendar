import './Calendar.css';
import WeekdayHeaders from './WeekdayHeaders.jsx';
import DayCell from './DayCell.jsx';
import MonthHeader from './MonthHeader.jsx';

const days = ["Sun", "Mon","Tues","Wed","Thurs","Fri","Sat"];
const numCells = Array.from({length:42});

function Calendar() {
    return (
        <div className = "page">
            <div className="monthRow">
                <MonthHeader month="April"/>
            </div>
            <div className="headerRow">
                {days.map((day) => (
                <WeekdayHeaders day={day} key={day} />
                ))}
            </div>
            <div className = "grid">
                {numCells.map((_,index) => {
                    return(
                   <DayCell key={index} date = {index} />
                )})}
            </div>
        </div>
    );
}

export default Calendar;