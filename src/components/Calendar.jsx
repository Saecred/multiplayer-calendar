import './Calendar.css';
import WeekdayHeaders from './WeekdayHeaders.jsx';
import DayCell from './DayCell.jsx';

const days = ["Sun", "Mon","Tues","Wed","Thurs","Fri","Sat"];
const numCells = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function Calendar() {
    return (
        <div>
            <div className="headerRow">
                {days.map((day) => (
                <WeekdayHeaders day={day} />
                ))}
            </div>
            <div className = "grid">
                {numCells.map(() =>(
                    <DayCell />
                ))}
            </div>
        </div>
    );
}

export default Calendar;