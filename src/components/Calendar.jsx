import './Calendar.css';
import WeekdayHeaders from './WeekdayHeaders.jsx';
import DayCell from './DayCell.jsx';

const days = ["Sun", "Mon","Tues","Wed","Thurs","Fri","Sat"];
const numCells = Array.from({length:42});

function Calendar() {
    return (
        <div className = "page">
            <div className="headerRow">
                {days.map((day) => (
                <WeekdayHeaders day={day} key={day} />
                ))}
            </div>
            <div className = "grid">
                {numCells.map((_,index) => (
                   <DayCell key={index} />
                ))}
            </div>
        </div>
    );
}

export default Calendar;