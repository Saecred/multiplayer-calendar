import './Calendar.css';
import WeekdayHeaders from './WeekdayHeaders.jsx';
import DayCell from './DayCell.jsx';
import MonthHeader from './MonthHeader.jsx';
import {useState} from "react";

const days = ["Sun", "Mon","Tues","Wed","Thurs","Fri","Sat"];
const numCells = Array.from({length:42});
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const today = new Date();


function Calendar() {
    const [month, setMonth] = useState(today.getMonth());
    const [year, setYear] = useState(today.getFullYear());

    const startDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    function nextMonth(){
        if (month !== 11)
        {
            setMonth(month + 1);
        }
        else
        {
            setMonth(0);
            setYear(year + 1);
        }
}

function prevMonth(){
        if(month !== 0)
        {
            setMonth(month - 1);
        }
        else
        {
            setMonth(11);
            setYear(year - 1);
        }
}
    return (
        <div className = "page">
            <div className="monthRow">
                <button onClick = {()=>prevMonth()}>
                    <h7>Prev</h7>
                </button>
                <div className="monthName">
                <MonthHeader month={months[month]} year={year}/>
                </div>
                <button onClick ={()=>nextMonth()}>
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
                    return(

                   <DayCell
                   key={index}
                   date = {new Date(year, month, date)}
                   currMonth = {month}
                   today = {today}/>
                )})}
            </div>
        </div>
    );
}

export default Calendar;