import './Calendar.css';
import WeekdayHeaders from './WeekdayHeaders.jsx';
import DayCell from './DayCell.jsx';
import MonthHeader from './MonthHeader.jsx';
import {useState} from "react";

const days = ["Sun", "Mon","Tues","Wed","Thurs","Fri","Sat"];
const numCells = Array.from({length:42});
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];


function Calendar() {
    const [month, setMonth] = useState(3);

    const startDay = 3;

    function nextMonth(month){
    return (
        month !== 11? setMonth(month + 1) : setMonth(0)
    );
}
    return (
        <div className = "page">
            <div className="monthRow">
                <div className="monthName">
                <MonthHeader month={months[month]}/>
                </div>
                <button onClick ={()=>nextMonth(month)}>
                    <h7>Next</h7>
                </button>
            </div>
            <div className="headerRow">
                {days.map((day) => (
                <WeekdayHeaders day={day} key={day} />
                ))}
            </div>
            <div className = "grid">
                {numCells.map((_,index) => {
                    const date = index - startDay + 1;
                    const validDate = date > 0 && date < 31;
                    return(

                   <DayCell
                   key={index}
                   date = {validDate?date:null} />
                )})}
            </div>
        </div>
    );
}

export default Calendar;